/**
 * 翻墙机场测评网 - IndexNow 自动化提交工具
 * 支持单 URL / 批量 URL 提交、Key 文件本地校验、HTTP 状态日志与失败自动重试
 * 声明：IndexNow 提交成功仅表示已通知 Bing 抓取节点，不等于网页已被正式收录
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const DOMAIN = "fanqianjichang.blog";
const HOST = `https://${DOMAIN}`;
const KEY = "fa74b93198cf4cbb8f420658fa9cf21e";
const KEY_LOCATION = `${HOST}/${KEY}.txt`;

// 检查 Key 校验文件是否存在于本地根目录
const localKeyFile = path.resolve(__dirname, `../${KEY}.txt`);
if (!fs.existsSync(localKeyFile)) {
  console.error(`[Error] 未在站点根目录检测到 IndexNow 密钥验证文件: ${KEY}.txt`);
  process.exit(1);
}

// 目标提交 URL 解析
let targetUrls = process.argv.slice(2);

if (targetUrls.length === 0) {
  // 默认提交近期核心主页与重点更新页面（避免无差别滥用全站提交）
  targetUrls = [
    `${HOST}/`,
    `${HOST}/ranking/overall/`,
    `${HOST}/ranking/value/`,
    `${HOST}/recommend/`,
    `${HOST}/compare/`
  ];
  console.log(`[Info] 未在命令行指定特定 URL，默认提交近期核心更新的 ${targetUrls.length} 个页面。`);
} else {
  // 规整 CLI 传入的 URL
  targetUrls = targetUrls.map(u => u.startsWith('http') ? u : `${HOST}/${u.replace(/^\//, '')}`);
}

const payload = JSON.stringify({
  host: DOMAIN,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: targetUrls
});

function submitIndexNow(retryCount = 0) {
  console.log(`\n======================================================`);
  console.log(`[IndexNow] 正在向 api.indexnow.org 提交 URL 抓取请求...`);
  console.log(`[Host] ${DOMAIN}`);
  console.log(`[KeyLocation] ${KEY_LOCATION}`);
  console.log(`[URLs] 包含 ${targetUrls.length} 个页面:`);
  targetUrls.forEach(u => console.log(`   - ${u}`));
  console.log(`======================================================\n`);

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 10000
  };

  const req = https.request(options, (res) => {
    let resBody = '';
    res.on('data', chunk => resBody += chunk);
    res.on('end', () => {
      console.log(`[Response] HTTP Status Code: ${res.statusCode} (${res.statusMessage})`);
      if (resBody) {
        console.log(`[Response Body] ${resBody}`);
      }

      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`\n✅ [IndexNow 提交成功] 搜索引擎网关已接收 URL 通知！`);
        console.log(`⚠️  重要提示：IndexNow 提交成功代表 Bing 蜘蛛已接收到抓取信号，并不代表页面已被 Bing 正式建库收录。实际收录进度取决于 Bing 质量评估。`);
      } else if (res.statusCode === 400) {
        console.error(`❌ [400 格式错误] 请求格式或域名不符合规范。`);
      } else if (res.statusCode === 403) {
        console.error(`❌ [403 校验失败] Key 与 KeyLocation 文件验证不匹配。`);
      } else if (res.statusCode === 422) {
        console.error(`❌ [422 目标不匹配] 提交的 URL 与所属主机名不一致。`);
      } else {
        console.warn(`⚠️ [HTTP ${res.statusCode}] 搜索引擎网关返回非预期状态码。`);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`[Network Error] 连接 IndexNow 网关失败: ${e.message}`);
    if (retryCount < 2) {
      console.log(`[Retry] 正在进行第 ${retryCount + 1} 次重试...`);
      setTimeout(() => submitIndexNow(retryCount + 1), 2000);
    } else {
      console.error(`[Failed] 重试失败，请检查本机海外网络连通性。`);
    }
  });

  req.on('timeout', () => {
    req.destroy();
    console.error(`[Timeout] 请求 IndexNow 网关超时。`);
  });

  req.write(payload);
  req.end();
}

submitIndexNow();
