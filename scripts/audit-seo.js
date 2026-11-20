/**
 * 翻墙机场测评网 - 自动化 SEO 质量审计脚本
 * 检查项：
 * - 缺失 Title / 重复 Title
 * - 缺失 Meta Description
 * - 多个 H1 / 缺失 H1
 * - 错误 Canonical (禁止 localhost 或非标准域名)
 * - 错误 Robots 配置
 * - 未替换变量 ({{, }}, [slug], undefined, null)
 * - 空白或过小页面
 * - 结构化数据 Schema.org 格式校验
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOMAIN = "https://fanqianjichang.blog";

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

function runAudit() {
  console.log(">>> [SEO Audit] 开始执行全站 SEO 自动化审查...");
  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  console.log(`[Scan] 找到 ${htmlFiles.length} 个 HTML 页面进行深度扫描`);

  const titles = new Map();
  const issues = [];
  let passedCount = 0;

  for (const file of htmlFiles) {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 1. 检查空白页面
    if (content.length < 500) {
      issues.push(`[CRITICAL] 页面体积过小/空白: ${relPath} (${content.length} bytes)`);
    }

    // 2. 检查 Title
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      issues.push(`[ERROR] 缺失 Title: ${relPath}`);
    } else {
      const t = titleMatch[1].trim();
      if (titles.has(t) && relPath !== '404.html') {
        issues.push(`[WARN] 重复 Title: "${t}" 同时出现在 ${titles.get(t)} 和 ${relPath}`);
      } else {
        titles.set(t, relPath);
      }
    }

    // 3. 检查 Meta Description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    if (!descMatch || !descMatch[1].trim()) {
      issues.push(`[ERROR] 缺失 Meta Description: ${relPath}`);
    }

    // 4. 检查 H1 (必须且只能有 1 个)
    const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
    if (!h1Matches || h1Matches.length === 0) {
      issues.push(`[ERROR] 页面缺失 <h1> 标签: ${relPath}`);
    } else if (h1Matches.length > 1) {
      issues.push(`[ERROR] 页面存在多个 <h1> 标签 (${h1Matches.length} 个): ${relPath}`);
    }

    // 5. 检查 Canonical
    const canMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
    if (!canMatch || !canMatch[1].trim()) {
      issues.push(`[ERROR] 缺失 Canonical 标签: ${relPath}`);
    } else {
      const canonical = canMatch[1].trim();
      if (!canonical.startsWith(DOMAIN)) {
        issues.push(`[ERROR] 错误 Canonical 域名: ${canonical} (应该以 ${DOMAIN} 开头) 在 ${relPath}`);
      }
      if (canonical.includes('localhost') || canonical.includes('127.0.0.1')) {
        issues.push(`[ERROR] Canonical 包含测试域名/本地主机: ${canonical} 在 ${relPath}`);
      }
    }

    // 6. 检查 Robots
    const robotsMatch = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    if (!robotsMatch) {
      issues.push(`[ERROR] 缺失 Robots 元标签: ${relPath}`);
    }

    // 7. 检查未替换变量
    const unreplacedMatches = content.match(/(\{\{[^}]+\}\}|\[slug\]|undefined|NaN)/g);
    if (unreplacedMatches) {
      issues.push(`[CRITICAL] 发现未替换变量 (${unreplacedMatches.join(', ')}): ${relPath}`);
    }

    // 8. 检查 Schema.org JSON-LD 语法
    const schemaMatches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    if (schemaMatches) {
      for (const sm of schemaMatches) {
        const jsonStr = sm.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
        try {
          const parsed = JSON.parse(jsonStr);
          if (!parsed['@context']) {
            issues.push(`[WARN] Schema.org 缺失 @context: ${relPath}`);
          }
        } catch (e) {
          issues.push(`[ERROR] Schema.org JSON-LD 解析失败: ${relPath} - ${e.message}`);
        }
      }
    }

    passedCount++;
  }

  console.log(`\n======================================================`);
  console.log(`[SEO Audit Summary] 已审查页面: ${passedCount} 个`);
  if (issues.length === 0) {
    console.log(`✅ [PASS] 全站 SEO 静态指标 100% 完美通过！无任何缺失或重复错误。`);
    return { status: "PASS", issues };
  } else {
    console.log(`❌ 发现 ${issues.length} 个 SEO 审查问题:`);
    issues.forEach(iss => console.log(`   - ${iss}`));
    return { status: "FAIL", issues };
  }
}

if (require.main === module) {
  runAudit();
}

module.exports = { runAudit };
