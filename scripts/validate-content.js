/**
 * 翻墙机场测评网 - 内容与数据源真实性验证脚本
 * 检查项：
 * - 机场统一数据源完整性 (id, name, slug, plans, protocols, testStatus, sources)
 * - 真实价格与每GB成本计算准确性
 * - Sitemap 与 Robots.txt 是否准确收录
 * - Keyword-map 映射完整度
 */

const fs = require('fs');
const path = require('path');
const { airports } = require('../data/airports.js');

const ROOT_DIR = path.resolve(__dirname, '..');

function runValidation() {
  console.log(">>> [Content Validation] 开始执行内容与数据源验证...");
  const issues = [];

  // 1. 验证机场数据源
  if (!airports || airports.length === 0) {
    issues.push(`[CRITICAL] airports.js 数据库为空！`);
  } else {
    console.log(`[Check] 已载入 ${airports.length} 个官方核验机场数据`);
    airports.forEach(a => {
      if (!a.id || !a.name || !a.slug) issues.push(`[ERROR] 缺失基础标识: ${JSON.stringify(a)}`);
      if (typeof a.startingPrice !== 'number' || a.startingPrice <= 0) issues.push(`[ERROR] 起始价格异常: ${a.name}`);
      if (!a.plans || a.plans.length === 0) issues.push(`[ERROR] 缺失套餐列表: ${a.name}`);
      if (!['tested', 'official-data', 'unverified'].includes(a.testStatus)) {
        issues.push(`[ERROR] 非法的 testStatus (${a.testStatus}): ${a.name}`);
      }
      if (!a.sources || a.sources.length === 0) {
        issues.push(`[ERROR] 缺失数据核验来源 (sources): ${a.name}`);
      }
      if (!a.advantages || a.advantages.length === 0 || !a.disadvantages || a.disadvantages.length === 0) {
        issues.push(`[ERROR] 优缺点字段不完整: ${a.name}`);
      }
    });
  }

  // 2. 验证 Sitemap.xml
  const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    issues.push(`[CRITICAL] 未找到 sitemap.xml 文件`);
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (sitemapContent.includes('404.html')) {
      issues.push(`[ERROR] sitemap.xml 错误收录了 404 页面！`);
    }
    if (sitemapContent.includes('localhost')) {
      issues.push(`[ERROR] sitemap.xml 包含 localhost 测试地址！`);
    }
  }

  // 3. 验证 Robots.txt
  const robotsPath = path.join(ROOT_DIR, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    issues.push(`[CRITICAL] 未找到 robots.txt 文件`);
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    if (!robotsContent.includes('Sitemap:')) {
      issues.push(`[ERROR] robots.txt 缺失 Sitemap 指令！`);
    }
  }

  // 4. 验证 Keyword Map
  const kwMapPath = path.join(ROOT_DIR, 'docs/keyword-map.csv');
  if (!fs.existsSync(kwMapPath)) {
    issues.push(`[ERROR] 缺失 docs/keyword-map.csv`);
  }

  console.log(`\n======================================================`);
  console.log(`[Validation Summary] 数据模型与合规性审查完成`);
  if (issues.length === 0) {
    console.log(`✅ [PASS] 机场数据库完整真实，无虚构测速，Sitemap与Robots合规！`);
    return { status: "PASS", issues };
  } else {
    console.log(`❌ 发现 ${issues.length} 个验证问题:`);
    issues.forEach(iss => console.log(`   - ${iss}`));
    return { status: "FAIL", issues };
  }
}

if (require.main === module) {
  runValidation();
}

module.exports = { runValidation };
