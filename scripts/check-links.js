/**
 * 翻墙机场测评网 - 链接完整性与相对路径自动化检查脚本
 * 检查项：
 * - 严禁出现以 / 开头的根绝对路径 (href="/...", src="/...")
 * - 相对路径链接是否在本地存在对应物理文件 (防止 404 死链)
 * - CSS 和 JS 资源引用有效性
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runLinkCheck() {
  console.log(">>> [Link Checker] 开始执行全站内链与相对路径合法性审查...");
  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  const issues = [];
  let checkedLinksCount = 0;

  for (const file of htmlFiles) {
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');
    const fileDir = path.dirname(file);

    // 匹配所有的 href 和 src
    const linkRegex = /(?:href|src)=["']([^"']+)["']/gi;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const url = match[1].trim();
      checkedLinksCount++;

      // 忽略特殊链接
      if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('javascript:')) continue;
      // 忽略外部 http/https 链接
      if (url.startsWith('http://') || url.startsWith('https://')) continue;

      // 1. 严格检查：禁止使用以 / 开头的根绝对路径
      if (url.startsWith('/')) {
        issues.push(`[FORBIDDEN] 发现以 / 开头的绝对路径 "${url}" 在文件: ${relFile} (违反纯相对路径与双击打开规范)`);
        continue;
      }

      // 2. 检查本地相对文件是否存在
      // 去除锚点和 query
      const cleanUrl = url.split('#')[0].split('?')[0];
      if (!cleanUrl) continue;

      const targetPath = path.resolve(fileDir, cleanUrl);
      if (!fs.existsSync(targetPath)) {
        // 如果是文件夹，检查是否存在 index.html
        if (fs.existsSync(path.join(targetPath, 'index.html'))) {
          // 文件夹形式
        } else {
          issues.push(`[DEAD LINK] 本地文件不存在: "${url}" (解析为: ${path.relative(ROOT_DIR, targetPath)}) 引用于: ${relFile}`);
        }
      }
    }
  }

  console.log(`\n======================================================`);
  console.log(`[Link Check Summary] 共核查了 ${checkedLinksCount} 个资源与页面跳转链接`);
  if (issues.length === 0) {
    console.log(`✅ [PASS] 所有内链 100% 遵守标准相对路径，且目标文件全部真实存在，无死链！`);
    return { status: "PASS", issues };
  } else {
    console.log(`❌ 发现 ${issues.length} 个链接问题:`);
    issues.forEach(iss => console.log(`   - ${iss}`));
    return { status: "FAIL", issues };
  }
}

if (require.main === module) {
  runLinkCheck();
}

module.exports = { runLinkCheck };
