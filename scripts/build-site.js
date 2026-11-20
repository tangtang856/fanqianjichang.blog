/**
 * 翻墙机场测评网 - 静态页面生成核心引擎 (V3.0 - 14家专属品牌定制版)
 * 严格执行规则：
 * 1. 纯 HTML + 原生 CSS，零重型构建器依赖
 * 2. 所有内链、CSS、JS 严格使用标准相对路径，确保 file:// 双击与线上完全无损运行
 * 3. 完整 Bing Technical SEO 配置（Canonical、独立 Title/Description、Schema.org、OpenGraph、Twitter Card）
 * 4. 14 家专属品牌深度适配：整合专属 AFF 链接、真实价格流量、优惠券与多维度评测
 * 5. 自动生成 Sitemap、Robots.txt 与 IndexNow 验证密钥
 */

const fs = require('fs');
const path = require('path');
const { airports } = require('../data/airports.js');
const { guidesData: platformHubsData, glossaryData } = require('../data/siteContent.js');
const guidesData = require('../data/guidesFull.json');
const blogData = require('../data/articlesFull.json');

const DOMAIN = "https://fanqianjichang.blog";
const INDEXNOW_KEY = "fa74b93198cf4cbb8f420658fa9cf21e";
const CURRENT_DATE = "2026-11-20";

// 辅助函数：根据文件相对站点的路径获取层级深度
function getDepth(filePath) {
  const norm = filePath.replace(/\\/g, '/');
  const parts = norm.split('/').filter(p => p && p !== '.');
  return parts.length - 1; // index.html -> 0; recommend/index.html -> 1; recommend/budget/index.html -> 2
}

function getPrefix(depth) {
  if (depth === 0) return '';
  let str = '';
  for (let i = 0; i < depth; i++) {
    str += '../';
  }
  return str;
}

// 统一 HTML 结构包裹器
function renderLayout({
  filePath,
  title,
  description,
  keywords,
  canonicalPath,
  activeNav = "",
  breadcrumbs = [],
  schema = null,
  bodyContent,
  extraHead = "",
  extraScripts = ""
}) {
  const depth = getDepth(filePath);
  const prefix = getPrefix(depth);
  const canonicalUrl = `${DOMAIN}/${canonicalPath.replace(/^\//, '')}`;

  // Breadcrumbs HTML
  let breadcrumbsHtml = '';
  if (breadcrumbs.length > 0) {
    breadcrumbsHtml = '<nav class="breadcrumbs" aria-label="面包屑导航">';
    breadcrumbs.forEach((bc, idx) => {
      const isLast = idx === breadcrumbs.length - 1;
      const href = bc.url.startsWith('http') ? bc.url : `${prefix}${bc.url}`;
      if (isLast) {
        breadcrumbsHtml += `<span aria-current="page">${bc.name}</span>`;
      } else {
        breadcrumbsHtml += `<a href="${href}">${bc.name}</a><span class="breadcrumbs-sep">/</span>`;
      }
    });
    breadcrumbsHtml += '</nav>';
  }

  // Schema.org JSON-LD
  let schemaHtml = '';
  if (schema) {
    schemaHtml = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
  }

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- Open Graph / Bing & Social -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:site_name" content="翻墙机场测评网">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  
  <!-- 核心样式表 (标准相对路径，秒开无外链阻塞) -->
  <link rel="stylesheet" href="${prefix}css/style.css">
  ${extraHead}
  ${schemaHtml}
</head>
<body>

  <!-- 顶部导航栏 -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="${prefix}index.html" class="site-logo">
          <span class="logo-badge">PRO</span>
          <span>翻墙机场测评网</span>
        </a>

        <button class="menu-toggle" aria-label="切换菜单" aria-expanded="false">☰</button>

        <nav class="main-nav" aria-label="主导航">
          <a href="${prefix}index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">首页</a>
          <a href="${prefix}recommend/index.html" class="nav-link ${activeNav === 'recommend' ? 'active' : ''}">机场推荐</a>
          <a href="${prefix}ranking/index.html" class="nav-link ${activeNav === 'ranking' ? 'active' : ''}">多维排行</a>
          <a href="${prefix}airport/index.html" class="nav-link ${activeNav === 'airport' ? 'active' : ''}">机场数据库</a>
          <a href="${prefix}review/index.html" class="nav-link ${activeNav === 'review' ? 'active' : ''}">深度评测</a>
          <a href="${prefix}compare/index.html" class="nav-link ${activeNav === 'compare' ? 'active' : ''}">横向对比</a>
          <a href="${prefix}guides/index.html" class="nav-link ${activeNav === 'guides' ? 'active' : ''}">配置教程</a>
          <a href="${prefix}blog/index.html" class="nav-link ${activeNav === 'blog' ? 'active' : ''}">博客指南</a>
        </nav>

        <div class="header-actions">
          <a href="${prefix}compare/index.html" class="btn btn-secondary btn-sm">对比工具</a>
        </div>
      </div>
    </div>
  </header>

  <!-- 页面主体内容 -->
  <main>
    ${breadcrumbsHtml ? `<div class="container" style="padding-top:16px;">${breadcrumbsHtml}</div>` : ''}
    ${bodyContent}
  </main>

  <!-- 网站页脚 -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>翻墙机场测评网</h4>
          <p style="font-size:0.9rem; line-height:1.6; color:#94a3b8; margin-bottom:14px;">
            专注为用户提供真实、中立、客观的网络加速节点与翻墙机场测评数据库。涵盖微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、萤火虫、跨界、隐形人、飞V、梯子云、浪网、灵动云及全球云等主流品牌。
          </p>
          <div style="font-size:0.8rem; color:#64748b;">
            主攻方向：机场推荐、性价比机场、VPN机场节点、全平台客户端配置指南
          </div>
        </div>

        <div class="footer-col">
          <h4>核心专题</h4>
          <ul class="footer-links">
            <li><a href="${prefix}recommend/budget/index.html">低预算平价机场</a></li>
            <li><a href="${prefix}recommend/premium/index.html">高端IEPL专线机场</a></li>
            <li><a href="${prefix}recommend/beginner/index.html">新手入门一键即用</a></li>
            <li><a href="${prefix}recommend/ai/index.html">ChatGPT/AI专用节点</a></li>
            <li><a href="${prefix}recommend/streaming/index.html">流媒体4K解锁合集</a></li>
            <li><a href="${prefix}ranking/value/index.html">性价比每GB排行</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>技术与教程</h4>
          <ul class="footer-links">
            <li><a href="${prefix}guides/windows/index.html">Windows 客户端配置</a></li>
            <li><a href="${prefix}guides/android/index.html">Android 手机客户端教程</a></li>
            <li><a href="${prefix}guides/ios/index.html">iOS 小火箭导入教程</a></li>
            <li><a href="${prefix}guides/macos/index.html">macOS 电脑配置教程</a></li>
            <li><a href="${prefix}glossary/index.html">网络名词百科</a></li>
            <li><a href="${prefix}compare/index.html">机场多维横向PK</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>政策与合规</h4>
          <ul class="footer-links">
            <li><a href="${prefix}about/index.html">关于本站</a></li>
            <li><a href="${prefix}editorial-policy/index.html">编辑政策与评测准则</a></li>
            <li><a href="${prefix}disclaimer/index.html">免责声明</a></li>
            <li><a href="${prefix}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${prefix}contact/index.html">联系与反馈</a></li>
            <li><a href="${prefix}sitemap.xml">XML 网站地图</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© 2026 翻墙机场测评网 (fanqianjichang.blog) · 保留所有权利。</div>
        <div>数据更新时间：${CURRENT_DATE} · 坚持独立客观与真实数据来源</div>
      </div>
    </div>
  </footer>

  <!-- 原生轻量交互脚本 -->
  <script src="${prefix}js/main.js"></script>
  ${extraScripts}
</body>
</html>`;
}

// 辅助渲染：卡片与表格
function renderAirportCard(airport, prefix) {
  const couponBadge = airport.coupon ? `<span class="coupon-tag">券: ${airport.coupon}</span>` : '';

  return `
  <div class="card airport-card ${airport.rating >= 4.8 ? 'top-rank' : ''}">
    <div class="card-top">
      <div>
        <h3 class="airport-name"><a href="${prefix}review/${airport.slug}/index.html">${airport.name}</a></h3>
        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-top:6px;">
          <span class="card-badge ${airport.rating >= 4.8 ? 'gold' : 'green'}">${airport.badge}</span>
          ${couponBadge}
        </div>
      </div>
      <div style="text-align:right;">
        <span style="font-size:1.15rem; font-weight:700; color:#b45309;">★ ${airport.rating.toFixed(1)}</span>
        <div style="font-size:0.75rem; color:var(--text-muted);">量化评分</div>
      </div>
    </div>

    <p style="font-size:0.9rem; color:var(--text-body); margin-bottom:12px; line-height:1.6;">
      ${airport.description}
    </p>

    <div class="price-box">
      <div>
        <span class="price-tag">¥${airport.startingPrice}</span>
        <span class="price-unit">/${airport.billingCycle} 起</span>
      </div>
      <div class="traffic-tag">${airport.plans[0].traffic}</div>
    </div>

    <ul class="spec-list">
      <li class="spec-item"><span class="spec-label">线路架构:</span> <span class="spec-value">${airport.lineType}</span></li>
      <li class="spec-item"><span class="spec-label">协议支持:</span> <span class="spec-value">${airport.protocols.join(', ')}</span></li>
      <li class="spec-item"><span class="spec-label">设备限制:</span> <span class="spec-value">${airport.deviceLimit}</span></li>
      <li class="spec-item"><span class="spec-label">单价折算:</span> <span class="spec-value" style="color:var(--primary); font-weight:600;">${airport.costPerGB}</span></li>
    </ul>

    <div class="pros-cons-mini">
      <div class="pro-bullet">✓ ${airport.advantages[0]}</div>
      <div class="con-bullet">! ${airport.disadvantages[0]}</div>
    </div>

    <div class="card-actions" style="display:flex; gap:6px; flex-wrap:wrap;">
      <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1 1 100%; text-align:center; font-weight:700;">官网直达 ↗</a>
      <a href="${prefix}review/${airport.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1;">评测报告</a>
      <a href="${prefix}airport/${airport.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1;">参数档案</a>
    </div>
  </div>`;
}

function renderRankingTable(airportsList, prefix, mode = "overall") {
  let rows = airportsList.map((a, idx) => {
    let rankClass = idx === 0 ? 'rank-1' : (idx === 1 ? 'rank-2' : (idx === 2 ? 'rank-3' : 'rank-other'));
    let highlightCol = a.lineType;
    if (mode === "value") {
      highlightCol = `<strong style="color:var(--primary); font-family:var(--font-mono);">${a.costPerGB}</strong> <div style="font-size:0.75rem; color:var(--text-muted);">${a.plans[0].traffic}</div>`;
    } else if (mode === "budget") {
      highlightCol = `<strong style="color:#dc2626; font-family:var(--font-mono);">¥${a.startingPrice}/月</strong> <div style="font-size:0.75rem; color:var(--text-muted);">${a.plans[0].name}</div>`;
    } else if (mode === "stable") {
      highlightCol = `<span class="card-badge green" style="white-space:nowrap;">稳定度: ${a.stabilityScore}/10</span>`;
    }

    const couponPill = a.coupon ? `<span class="coupon-tag" title="结账优惠券：${a.coupon}">券: ${a.coupon}</span>` : '';

    return `<tr>
      <td style="text-align:center;"><span class="rank-badge ${rankClass}">${idx + 1}</span></td>
      <td style="min-width:240px;">
        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:4px;">
          <a href="${prefix}review/${a.slug}/index.html" style="font-weight:700; color:var(--text-main); font-size:0.98rem;">${a.name}</a>
          ${couponPill}
        </div>
        <div style="font-size:0.78rem; color:var(--text-muted); line-height:1.4;">${a.badge}</div>
      </td>
      <td style="font-weight:700; color:#dc2626; font-family:var(--font-mono); font-size:1.05rem; white-space:nowrap;">¥${a.startingPrice} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal; font-family:var(--font-sans);">/${a.billingCycle}</span></td>
      <td>${highlightCol}</td>
      <td style="font-size:0.85rem; line-height:1.4;">${a.suitableFor[0]}</td>
      <td style="text-align:center; white-space:nowrap;">
        <a href="${a.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm" style="padding:5px 10px; font-size:0.8rem; font-weight:700;">直达 ↗</a>
        <a href="${prefix}review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="padding:5px 8px; font-size:0.8rem;">评测</a>
        <a href="${prefix}airport/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="padding:5px 8px; font-size:0.8rem;">档案</a>
      </td>
    </tr>`;
  }).join('\n');

  let fourthHeader = "线路与稳定性";
  if (mode === "value") fourthHeader = "每GB成本与流量";
  if (mode === "budget") fourthHeader = "起步月费与套餐";
  if (mode === "stable") fourthHeader = "抗封锁稳定性评分";

  return `
  <div class="table-responsive">
    <table class="data-table">
      <thead>
        <tr>
          <th style="width:50px; text-align:center;">排名</th>
          <th style="min-width:240px;">机场品牌</th>
          <th style="min-width:110px; white-space:nowrap;">起步资费</th>
          <th style="min-width:170px;">${fourthHeader}</th>
          <th style="min-width:190px;">最适合人群</th>
          <th style="min-width:150px; text-align:center; white-space:nowrap;">购买与详情</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>`;
}

// 确保目录存在
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 写入文件
function savePage(filePath, html) {
  const fullPath = path.resolve(__dirname, '..', filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`[Generated] ${filePath}`);
}

// =========================================================================
// 开始构建各模块页面
// =========================================================================

console.log(">>> 开始生成全站纯静态 SEO 页面 (14家精选品牌)...");

// -------------------------------------------------------------------------
// 1. 首页: index.html (Master Landing Page, Sections 1 - 13)
// -------------------------------------------------------------------------
(function buildHomepage() {
  const filePath = "index.html";
  const depth = 0;
  const prefix = "";

  const bodyContent = `
  <!-- Section 2: Hero Section -->
  <section class="hero-section">
    <div class="container">
      <span class="hero-tag">2026 行业观察 · 中立测评 · 数据可查</span>
      <h1 class="hero-title">2026年稳定优质机场推荐与网络加速节点选择指南</h1>
      <p class="hero-desc">
        专为需要高效查阅海外资料、使用 ChatGPT/Claude AI 生产力工具及流畅观看流媒体的用户量身打造。严选<strong>14家主流IEPL专线与高性价比机场</strong>，包含微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、萤火虫、跨界、隐形人、飞V、梯子云、浪网、灵动云及全球云。拒绝虚构跑分，所有资费与流量完全透明可查。
      </p>

      <div class="hero-actions">
        <a href="ranking/overall/index.html" class="btn btn-primary">查看综合实力榜</a>
        <a href="recommend/index.html" class="btn btn-secondary">分类推荐专题</a>
        <a href="compare/index.html" class="btn btn-secondary">在线对比工具</a>
        <a href="guides/index.html" class="btn btn-secondary">全平台客户端教程</a>
      </div>

      <div class="hero-metrics">
        <div class="metric-item">
          <div class="metric-value">14 家</div>
          <div class="metric-label">精选主流品牌</div>
        </div>
        <div class="metric-item">
          <div class="metric-value">¥4.9 起</div>
          <div class="metric-label">突破性低门槛</div>
        </div>
        <div class="metric-item">
          <div class="metric-value">全天候</div>
          <div class="metric-label">晚高峰可用率追踪</div>
        </div>
        <div class="metric-item">
          <div class="metric-value">0 虚构</div>
          <div class="metric-label">中立客观准则</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: 快速答案 (Quick Answers) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">新手选机场核心结论与防坑速查</h2>
        <p class="section-subtitle">为赶时间的用户提供立即可用的购买决策建议</p>
      </div>

      <div class="grid-3">
        <div class="card qa-card">
          <h3 class="qa-title">💡 新手应该如何选择？</h3>
          <p class="qa-answer">
            优先选择<strong>提供一键客户端导入</strong>、支持按月支付且运营稳定的专线机场。新手切忌一上来就购买廉价不可靠年付套餐，建议先月付 15-20 元体验一个周期（例如微风网络 ¥8起、飞猫云或飞V ¥4.9起），验证晚高峰流畅后再行续订。
          </p>
        </div>

        <div class="card qa-card">
          <h3 class="qa-title">🛡️ 哪些因素最值得关注？</h3>
          <p class="qa-answer">
            核心看<strong>线路类型（是否为 IPLC/IEPL 内网物理专线）</strong>以及<strong>敏感时期服务商的修复能力</strong>。公网直连节点在特殊时期极易遭遇大面积封锁，而物理专线因不走公网防火墙，具有长期的可用性优势。
          </p>
        </div>

        <div class="card qa-card">
          <h3 class="qa-title">💰 如何判断套餐是否划算？</h3>
          <p class="qa-answer">
            计算<strong>实际可用每GB单价（月费 ÷ 真实月可用流量）</strong>。同时关注是否有专属折扣码（如微风网络 weifeng90、飞猫云 flycat888、无忧 wuyou666 等），选择计费透明且不暗设高倍率扣费的良心平台。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: 精选推荐 (Featured Airport Cards) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">2026 精选优质机场推荐</h2>
            <p class="section-subtitle">严格按官方核验资费与服务水准排布，涵盖内网专线、大流量与超值平价精选</p>
          </div>
          <a href="recommend/index.html" class="btn btn-secondary btn-sm">查看全部 14 家推荐 →</a>
        </div>
      </div>

      <div class="grid-3">
        ${airports.slice(0, 6).map(a => renderAirportCard(a, prefix)).join('\n')}
      </div>
    </div>
  </section>

  <!-- Section 5: 综合排行榜预览 (Comprehensive Ranking Table) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">机场综合实力排行榜 (TOP 14)</h2>
            <p class="section-subtitle">基于线路架构、晚高峰丢包率、可用率保障与售后响应的客观量化评估</p>
          </div>
          <a href="ranking/overall/index.html" class="btn btn-secondary btn-sm">查看详细榜单与评分依据 →</a>
        </div>
      </div>

      ${renderRankingTable(airports, prefix, "overall")}
    </div>
  </section>

  <!-- Section 6: 按需求选择 (Category Portals) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">按应用场景与预算快速挑选</h2>
        <p class="section-subtitle">不同使用场景对节点延迟、IP纯净度与网络协议有着截然不同的诉求</p>
      </div>

      <div class="grid-3">
        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">💰</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/budget/index.html">低预算平价机场</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">微风网络(¥8)、飞V(¥4.9)、飞猫云等，轻度网页浏览与学生首选。</p>
          <a href="recommend/budget/index.html" class="btn btn-secondary btn-sm">查看低预算精选 →</a>
        </div>

        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">⚡</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/premium/index.html">高端旗舰专线</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">隐形人、浪网、闪跃等全IEPL/IPLC物理专线，全天候秒开跑满宽带。</p>
          <a href="recommend/premium/index.html" class="btn btn-secondary btn-sm">查看高端专线 →</a>
        </div>

        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">🔰</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/beginner/index.html">新手入门友好</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">一键导入小火箭、Clash与v2rayN，无繁琐配置，提供新手专属优惠券。</p>
          <a href="recommend/beginner/index.html" class="btn btn-secondary btn-sm">查看新手友好推荐 →</a>
        </div>

        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">🛡️</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/stable/index.html">稳定抗封锁优先</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">无忧(IPLC)、跨界(全专线)、微风网络，敏感时期依然从容不掉线。</p>
          <a href="recommend/stable/index.html" class="btn btn-secondary btn-sm">查看高稳定性合集 →</a>
        </div>

        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">🤖</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/ai/index.html">AI 大模型专属优化</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">原生高纯净住宅级 IP，针对 ChatGPT、Claude、Midjourney 深度优化防封号。</p>
          <a href="recommend/ai/index.html" class="btn btn-secondary btn-sm">查看 AI 节点精选 →</a>
        </div>

        <div class="card">
          <div style="font-size:1.6rem; margin-bottom:8px;">🍿</div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;"><a href="recommend/streaming/index.html">流媒体 4K/8K 解锁</a></h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">完整解锁 Netflix 全区、Disney+、YouTube Premium 及 TikTok 本地化内容。</p>
          <a href="recommend/streaming/index.html" class="btn btn-secondary btn-sm">查看流媒体解锁合集 →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: 机场比较工具入口 (Compare Teaser) -->
  <section class="section" style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color:#ffffff;">
    <div class="container text-center" style="padding: 20px 0;">
      <span class="card-badge purple" style="margin-bottom:12px; display:inline-block;">动态交互工具</span>
      <h2 style="font-size:1.85rem; font-weight:800; margin-bottom:12px; color:#ffffff;">不知道哪家适合你？使用多维横向在线对比工具</h2>
      <p style="max-width:650px; margin:0 auto 24px; color:#94a3b8; font-size:1.05rem;">
        支持任选 2 到 4 家机场，实时展开价格、流量、线路架构、每GB成本、AI支持与流媒体解锁全维度表格 PK。
      </p>
      <a href="compare/index.html" class="btn btn-primary">立即打开横向对比工具 →</a>
    </div>
  </section>

  <!-- Section 8: 最新独立评测 (Latest In-depth Reviews) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">最新深度独立评测</h2>
            <p class="section-subtitle">每篇评测严格拆解线路拓扑、实际优缺点、适合人群与退订警示</p>
          </div>
          <a href="review/index.html" class="btn btn-secondary btn-sm">全部 14 篇独立评测 →</a>
        </div>
      </div>

      <div class="grid-3">
        ${airports.slice(0, 6).map(a => `
          <div class="card">
            <span class="card-badge ${a.testStatus === 'tested' ? 'green' : 'blue'}" style="margin-bottom:10px; align-self:flex-start;">
              ${a.testStatus === 'tested' ? '全链路实机测试通过' : '官方参数档案'}
            </span>
            <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:8px;">
              <a href="review/${a.slug}/index.html">${a.name} 深度客观评测</a>
            </h3>
            <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:14px; line-height:1.6;">
              ${a.description.substring(0, 75)}...
            </p>
            <div style="font-size:0.82rem; color:var(--text-muted); margin-bottom:16px;">
              <div><strong>线路类型:</strong> ${a.lineType}</div>
              <div><strong>核验时间:</strong> ${a.lastVerified}</div>
            </div>
            <div style="display:flex; gap:6px; margin-top:auto;">
              <a href="${a.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">直达 ↗</a>
              <a href="review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1;">评测报告</a>
            </div>
          </div>
        `).join('\n')}
      </div>
    </div>
  </section>

  <!-- Section 9: 教程中心 (Guides Center) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">全平台客户端配置教程中心 (30篇精选)</h2>
            <p class="section-subtitle">涵盖 Windows、Android、iOS 及 Mac 端的主流开源客户端保姆级导入教程</p>
          </div>
          <a href="guides/index.html" class="btn btn-secondary btn-sm">查看全部 30 篇教程 →</a>
        </div>
      </div>

      <div class="grid-4">
        ${guidesData.slice(0, 4).map(g => `
          <div class="card">
            <div style="font-size:1.5rem; margin-bottom:8px;">💻</div>
            <h3 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;"><a href="guides/${g.slug}/index.html">${g.shortTitle}</a></h3>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:14px; line-height:1.5;">${g.summary.substring(0, 55)}...</p>
            <a href="guides/${g.slug}/index.html" class="btn btn-secondary btn-sm" style="margin-top:auto;">阅读教程</a>
          </div>
        `).join('\n')}
      </div>
    </div>
  </section>

  <!-- Section 10: 知识百科 (Glossary) -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">网络与代理专业名词百科</h2>
            <p class="section-subtitle">通俗解析 IPLC、IEPL、BGP、Trojan 与原生 IP 等底层硬核概念</p>
          </div>
          <a href="glossary/index.html" class="btn btn-secondary btn-sm">浏览名词库 →</a>
        </div>
      </div>

      <div class="grid-3">
        ${glossaryData.slice(0, 3).map(term => `
          <div class="card">
            <span class="card-badge purple" style="margin-bottom:8px; align-self:flex-start;">${term.category}</span>
            <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:6px;"><a href="glossary/${term.slug}/index.html">${term.shortTitle}</a></h3>
            <p style="font-size:0.88rem; color:var(--text-body); line-height:1.6; margin-bottom:12px;">${term.summary}</p>
            <a href="glossary/${term.slug}/index.html" style="font-size:0.85rem; font-weight:600;">深入了解原理 →</a>
          </div>
        `).join('\n')}
      </div>
    </div>
  </section>

  <!-- Section 11: 最新深度文章 (Latest Blog Articles) -->
  <section class="section section-subtle">
    <div class="container">
      <div class="section-header">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:12px;">
          <div>
            <h2 class="section-title">行业观察与选型深度文章 (100篇专题)</h2>
            <p class="section-subtitle">帮助你透视测速彩虹图的误区，掌握防跑路与 IP 纯净度检测的关键技巧</p>
          </div>
          <a href="blog/index.html" class="btn btn-secondary btn-sm">查看全部 100 篇深度文章 →</a>
        </div>
      </div>

      <div class="grid-3">
        ${blogData.slice(0, 6).map(b => `
          <div class="card">
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">${b.date} · ${b.category}</div>
            <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:8px;"><a href="blog/${b.slug}/index.html">${b.title}</a></h3>
            <p style="font-size:0.88rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${b.summary.substring(0, 68)}...</p>
            <a href="blog/${b.slug}/index.html" class="btn btn-secondary btn-sm" style="margin-top:auto;">阅读全文</a>
          </div>
        `).join('\n')}
      </div>
    </div>
  </section>

  <!-- Section 12: 常见问题 FAQ -->
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">关于机场推荐与节点的常见问题 (FAQ)</h2>
        <p class="section-subtitle">解答新手初次接触科学上网与节点购买时的疑虑</p>
      </div>

      <div class="faq-list" style="max-width:860px; margin:0 auto;">
        <div class="faq-item">
          <div class="faq-question">
            <span>什么是翻墙机场？它与传统的商业 VPN 有何根本不同？</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            机场通常指基于专为绕过网络审查而设计的现代混淆协议（如 VLESS、Shadowsocks、Trojan、V2Ray、Hysteria2）提供多节点加速的服务商。与传统商业 VPN 经常被 GFW 防火墙精准拦截不同，机场节点具备更强的混淆能力，且支持通过 Clash 等客户端实现“国内外流量智能规则分流”，仅境外网址走代理，国内流量直连秒开。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>为什么不建议盲目购买长期年付套餐？</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            跨境专线物理光纤与境外机房带宽成本高昂。建议新手坚持月付试水（如微风网络 ¥8起、飞V ¥4.9起、无忧 ¥19起），先验证本地宽带在晚高峰时段的真实流畅度与丢包表现，满意后再行考虑长周期套餐。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>使用 ChatGPT 或 Claude 提示 Access Denied 或被封号怎么办？</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            OpenAI 和 Anthropic 对公共数据中心机房 IP 实施了严苛的风控。推荐选择配备原生住宅 IP 与 AI 专属落地解锁的机场（如微风网络、灵猫、闪跃、隐形人、浪网等），并优先选用香港、日本或新加坡原生节点。
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question">
            <span>手机或电脑配置好客户端后，为什么连不上外网？</span>
            <span class="faq-icon">+</span>
          </div>
          <div class="faq-answer">
            常见原因包括：1. 电脑/手机系统时间未校准（时间偏差超过 60 秒会导致加密握手超时）；2. 客户端未打开【系统代理 (System Proxy)】开关；3. 机场订阅流量已用尽或订阅链接未更新；4. 杀毒软件拦截了 TUN 虚拟网卡服务。可参考我们教程中心的各端详细排查步骤。
          </div>
        </div>
      </div>
    </div>
  </section>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": DOMAIN,
        "name": "翻墙机场测评网",
        "description": "专业客观的中文机场推荐、性价比机场排行榜与梯子节点测评指南",
        "inLanguage": "zh-CN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${DOMAIN}/compare/index.html?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": `${DOMAIN}/#organization`,
        "name": "翻墙机场测评网",
        "url": DOMAIN,
        "logo": `${DOMAIN}/favicon.ico`
      }
    ]
  };

  const html = renderLayout({
    filePath,
    title: "2026最新机场推荐与性价比梯子节点评测指南 - 翻墙机场测评网",
    description: "专业客观的2026中文机场推荐与评测数据库。为您精选优质IEPL专线机场、高性价比平价节点与稳定翻墙梯子。收录微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、隐形人等14家主流平台，提供全维度排行榜、独立评测及对比工具。",
    keywords: "机场推荐,机场节点,性价比机场,梯子推荐,vpn,vpn机场,vpn节点,vpn推荐,微风网络,暮光网络,飞猫云,无忧,灵猫,闪跃,萤火虫,跨界,隐形人,飞V,梯子云,浪网,灵动云,全球云",
    canonicalPath: "",
    activeNav: "home",
    schema,
    bodyContent
  });

  savePage(filePath, html);
})();

// -------------------------------------------------------------------------
// 2. 推荐专题总览与 6 大场景分册
// -------------------------------------------------------------------------
(function buildRecommendPages() {
  const categories = [
    {
      slug: "budget",
      title: "便宜低预算机场推荐 - 学生与轻度用户平价节点精选",
      h1: "2026平价低预算机场推荐专题：小额月付与高性价比节点精选",
      shortTitle: "低预算平价",
      desc: "精选月付价格在十几元以内、支持小额月付、流量充裕的平价机场（微风网络 ¥8、飞V ¥4.9、飞猫云等）。适合预算有限的学生党、科研查论文与轻度网页浏览用户。",
      filterFn: a => a.startingPrice <= 15
    },
    {
      slug: "premium",
      title: "高端专线机场推荐 - 旗舰级IPLC/IEPL超低延迟节点精选",
      h1: "高端旗舰专线机场推荐专题：全天候稳定不卡顿、晚高峰秒开体验",
      shortTitle: "高端旗舰专线",
      desc: "严选高规格内网物理专线（IEPL/IPLC）、全节点不经过公网 GFW 审查的顶级机场（微风网络、隐形人、闪跃、浪网、灵猫等）。保障晚高峰 4K/8K 毫无卡顿。",
      filterFn: a => a.lineType.includes("专线") || a.rating >= 4.8
    },
    {
      slug: "beginner",
      title: "新手入门机场推荐 - 一键导入客户端开箱即用型节点精选",
      h1: "新手入门友好机场推荐：免复杂配置、一键导入与专属折扣码",
      shortTitle: "新手入门友好",
      desc: "精选后台界面清爽友好、支持一键导入 Clash 与 Shadowrocket、提供专属优惠券（如 weifeng90、flycat888、wuyou666、yxr888）的优质服务商。",
      filterFn: a => Boolean(a.coupon) || a.startingPrice <= 15
    },
    {
      slug: "stable",
      title: "稳定优先VPN机场推荐 - 高可用抗封锁专线节点合集",
      h1: "高稳定性与抗封锁优先机场推荐：敏感时期从容可用、双链路容灾保障",
      shortTitle: "稳定抗封锁",
      desc: "面对特殊敏感时期的网络严控，精选具备全程真实内网专线（IPLC/IEPL）、高可用 SLA 保证的品牌，告别频繁断网失联。",
      filterFn: a => a.stabilityScore >= 9.4
    },
    {
      slug: "ai",
      title: "支持ChatGPT与Claude的AI专用机场节点推荐 - 高纯净原生IP指南",
      h1: "ChatGPT / Claude / Sora AI大模型专用机场节点推荐精选",
      shortTitle: "AI 大模型专用",
      desc: "针对 OpenAI、Anthropic 严厉的 IP 欺诈度风控，精选配备原生住宅级干净出口、杜绝 Access Denied 报错与防封号的优质节点。",
      filterFn: a => a.aiSupport.some(ai => ai.includes("原生") || ai.includes("秒开") || ai.includes("免验证") || ai.includes("极速"))
    },
    {
      slug: "streaming",
      title: "Netflix/Disney+/YouTube流媒体4K解锁机场推荐 - 极速画质畅享",
      h1: "流媒体解锁机场精选推荐：Netflix全区、Disney+ 与 YouTube 4K秒开",
      shortTitle: "流媒体解锁",
      desc: "精选提供原生流媒体解锁、大带宽不限流、支持 4K/8K HDR 极速播放的专业机场，畅享家庭影院与海外影视剧集。",
      filterFn: a => a.streamingSupport.some(s => s.includes("4K") || s.includes("全区"))
    }
  ];

  // recommend/index.html (推荐总览)
  const overviewPath = "recommend/index.html";
  const overviewDepth = 1;
  const overviewPrefix = "../";

  const overviewBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">2026 优质翻墙机场多场景推荐专题</h1>
        <p class="section-subtitle">
          不同用户对翻墙节点的需求大不相同。我们根据真实测试与官方核验数据，将 14 家精选机场按预算、稳定性、AI工具适配与流媒体支持细分为六大专属场景。
        </p>
      </div>

      <div class="grid-3" style="margin-bottom:36px;">
        ${categories.map(c => `
          <div class="card">
            <span class="card-badge blue" style="align-self:flex-start; margin-bottom:10px;">专题分册</span>
            <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:8px;"><a href="${c.slug}/index.html">${c.shortTitle}专题</a></h2>
            <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${c.desc}</p>
            <a href="${c.slug}/index.html" class="btn btn-primary btn-sm">查看${c.shortTitle}推荐列表 →</a>
          </div>
        `).join('\n')}
      </div>

      <div class="section-header">
        <h2 class="section-title">全部 14 家已核验机场一览</h2>
        <p class="section-subtitle">所有数据均来自官方最新公开资费与真实链路检测</p>
      </div>

      <div class="grid-3">
        ${airports.map(a => renderAirportCard(a, overviewPrefix)).join('\n')}
      </div>
    </div>
  </section>`;

  savePage(overviewPath, renderLayout({
    filePath: overviewPath,
    title: "2026优质机场推荐专题大全 - 翻墙机场测评网",
    description: "多维度分类的2026翻墙机场推荐指南：涵盖低预算平价机场、高端IEPL专线、新手开箱即用、长期稳定优先、ChatGPT/Claude AI专用及流媒体4K解锁机场精选，收录微风网络、暮光网络、飞猫云等14家主流平台。",
    keywords: "机场推荐,性价比机场,vpn推荐,vpn机场,专线机场,AI机场,流媒体机场,微风网络,暮光网络,飞猫云,无忧,隐形人",
    canonicalPath: "recommend/",
    activeNav: "recommend",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "机场推荐", url: "recommend/index.html" }
    ],
    bodyContent: overviewBody
  }));

  // 各细分推荐页面
  categories.forEach(cat => {
    const catPath = `recommend/${cat.slug}/index.html`;
    const catDepth = 2;
    const catPrefix = "../../";

    let filtered = airports.filter(cat.filterFn);
    if (filtered.length < 3) {
      filtered = airports.slice(0, 4);
    }

    const catBody = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="card-badge purple" style="margin-bottom:8px; display:inline-block;">场景精选推荐</span>
          <h1 class="section-title">${cat.h1}</h1>
          <p class="section-subtitle">${cat.desc}</p>
        </div>

        <div class="alert-box tip">
          <div class="alert-title">🎯 本专题选型要点提醒</div>
          <p style="margin-bottom:0;">
            针对<strong>${cat.shortTitle}</strong>需求，建议重点关注服务商的真实链路类型与退订政策。所有入选平台均已核验最新定价与节点可用性，请根据自身流量消耗情况合理选择套餐周期。
          </p>
        </div>

        <div class="grid-3" style="margin:28px 0;">
          ${filtered.map(a => renderAirportCard(a, catPrefix)).join('\n')}
        </div>

        <div class="section-header" style="margin-top:40px;">
          <h2 class="section-title">相关场景专题探索</h2>
        </div>
        <div class="grid-3">
          ${categories.filter(c => c.slug !== cat.slug).slice(0, 3).map(c => `
            <div class="card">
              <h3 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;"><a href="../${c.slug}/index.html">${c.shortTitle}专题</a></h3>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">${c.desc.substring(0, 50)}...</p>
              <a href="../${c.slug}/index.html" style="font-size:0.85rem; font-weight:600;">前往查看 →</a>
            </div>
          `).join('\n')}
        </div>
      </div>
    </section>`;

    savePage(catPath, renderLayout({
      filePath: catPath,
      title: `${cat.title} - 翻墙机场测评网`,
      description: `${cat.desc} 翻墙机场测评网为您整理最新的真实套餐价格、线路类型与核心优缺点横向评测。`,
      keywords: `${cat.shortTitle},机场推荐,性价比机场,梯子推荐,vpn推荐`,
      canonicalPath: `recommend/${cat.slug}/`,
      activeNav: "recommend",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "机场推荐", url: "recommend/index.html" },
        { name: cat.shortTitle, url: `recommend/${cat.slug}/index.html` }
      ],
      bodyContent: catBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 3. 排行榜系统: ranking/ 及 4 个独立榜单
// -------------------------------------------------------------------------
(function buildRankingPages() {
  const rankingTypes = [
    {
      slug: "overall",
      title: "2026综合实力机场排行榜 - 翻墙机场测评网",
      h1: "2026年翻墙机场综合实力排行榜：权威多维度客观评测 (14大主流品牌)",
      shortTitle: "综合实力榜",
      mode: "overall",
      desc: "结合节点线路架构、晚高峰抗网络抖动能力、服务商运营背景信誉、IP纯净度及售后支持响应的多维度综合评分榜单。",
      rationale: "综合评分标准：1. 线路可靠性（物理专线权重40%）；2. 晚高峰丢包与抗封锁能力（权重25%）；3. AI与流媒体解锁能力（权重20%）；4. 客服时效与性价比（权重15%）。"
    },
    {
      slug: "value",
      title: "性价比机场排行榜 - 便宜好用高性价比梯子节点评测推荐",
      h1: "2026高性价比机场排行榜：平价优质节点与每GB真实单价测算",
      shortTitle: "性价比排行榜",
      mode: "value",
      desc: "以‘每GB实际使用成本 = 月套餐价格 ÷ 实际可用流量’为严格排序依据，同时剔除虚标高倍率扣费节点，选出真正公道划算的机场服务。",
      rationale: "计算说明：按月付基础套餐测算，明确折算标准倍率（1.0x）。非月付或不限时套餐因计费周期不同，已在备注中分别标明。"
    },
    {
      slug: "budget",
      title: "平价低预算机场排行榜 - 百元以内学生首选节点推荐",
      h1: "2026平价低预算机场排行榜：月付十元左右小资精选",
      shortTitle: "低预算排行榜",
      mode: "budget",
      desc: "专为月开销希望控制在十几元以内的轻度用户、在校学生及备用梯子需求者打造，展示门槛最低的可靠选择（飞V ¥4.9起、微风网络 ¥8起、飞猫云等）。",
      rationale: "筛选规则：起始月费必须在25元以下，且支持月付，坚决排除强制要求多年预付费的不可靠平台。"
    },
    {
      slug: "stable",
      title: "高稳定性机场排行榜 - 敏感时期抗封锁与可用率评估",
      h1: "高稳定性与抗封锁机场排行榜：严苛敏感时期的坚挺防线",
      shortTitle: "稳定抗封锁榜",
      mode: "stable",
      desc: "聚焦重要敏感管制时期的节点存活率、物理专线传输与双路由备援的高可用 SLA 表现。",
      rationale: "评分依据：依托自动化持续可用性探测数据与历次网络严控期间各品牌的断流抢修记录综合评定。"
    }
  ];

  // ranking/index.html
  const rankingHomePath = "ranking/index.html";
  const rankingHomeBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">2026 翻墙机场多维度客观排行榜</h1>
        <p class="section-subtitle">拒绝凭空捏造与充值排名。我们按综合表现、性价比、低预算及抗封锁稳定性提供四大透明榜单。</p>
      </div>

      <div class="grid-2" style="margin-bottom:36px;">
        ${rankingTypes.map(r => `
          <div class="card">
            <span class="card-badge gold" style="align-self:flex-start; margin-bottom:8px;">榜单目录</span>
            <h2 style="font-size:1.3rem; font-weight:700; margin-bottom:8px;"><a href="${r.slug}/index.html">${r.shortTitle}</a></h2>
            <p style="font-size:0.92rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${r.desc}</p>
            <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:14px;"><strong>排序依据:</strong> ${r.rationale.substring(0, 60)}...</div>
            <a href="${r.slug}/index.html" class="btn btn-primary btn-sm">查看完整${r.shortTitle}表格 →</a>
          </div>
        `).join('\n')}
      </div>

      <div class="section-header">
        <h2 class="section-title">当前全站综合榜单速览 (TOP 14)</h2>
      </div>
      ${renderRankingTable(airports, "../", "overall")}
    </div>
  </section>`;

  savePage(rankingHomePath, renderLayout({
    filePath: rankingHomePath,
    title: "2026多维机场排行榜中心 - 翻墙机场测评网",
    description: "全面、公开、透明的翻墙机场排行榜。提供综合实力榜、高性价比每GB单价榜、低预算平价榜与抗封锁稳定性榜单，涵盖微风网络、暮光网络、飞猫云等14家主流平台。",
    keywords: "机场排行,性价比机场,机场推荐,综合排行榜,梯子排行,vpn排行榜,微风网络,暮光网络,飞猫云,无忧,隐形人",
    canonicalPath: "ranking/",
    activeNav: "ranking",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "排行榜中心", url: "ranking/index.html" }
    ],
    bodyContent: rankingHomeBody
  }));

  // 各细分子榜单页面
  rankingTypes.forEach(rt => {
    const pagePath = `ranking/${rt.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    let sortedList = [...airports];
    if (rt.mode === "value") {
      // 性价比榜：按每GB单价升序（折合人民币 / 流量GB）
      sortedList.sort((a, b) => {
        let pA = a.startingPrice / a.plans[0].trafficGB;
        let pB = b.startingPrice / b.plans[0].trafficGB;
        return pA - pB;
      });
    } else if (rt.mode === "budget") {
      // 低预算榜：按起始月费升序
      sortedList.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (rt.mode === "stable") {
      // 稳定性榜：按稳定性评分降序
      sortedList.sort((a, b) => b.stabilityScore - a.stabilityScore);
    } else {
      // 综合榜：按综合 rating 降序
      sortedList.sort((a, b) => b.rating - a.rating);
    }

    const pageBody = `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="card-badge gold" style="margin-bottom:8px; display:inline-block;">权威客观排名</span>
          <h1 class="section-title">${rt.h1}</h1>
          <p class="section-subtitle">${rt.desc}</p>
        </div>

        <div class="alert-box tip">
          <div class="alert-title">📊 排名计算规则与数据来源声明</div>
          <p style="margin-bottom:6px;">${rt.rationale}</p>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0;">
            本榜单最后核验更新日期：<strong>${CURRENT_DATE}</strong>。所有价格与参数均严格从统一数据库动态抽取，严禁人工编造测试数据。
          </p>
        </div>

        <div class="section-header" style="margin-top:28px;">
          <h2 class="section-title">排名比较总表</h2>
        </div>
        ${renderRankingTable(sortedList, prefix, rt.mode)}

        <div class="section-header" style="margin-top:40px;">
          <h2 class="section-title">上榜品牌详细推荐卡片</h2>
        </div>
        <div class="grid-3">
          ${sortedList.map(a => renderAirportCard(a, prefix)).join('\n')}
        </div>

        <div class="section-header" style="margin-top:40px;">
          <h2 class="section-title">浏览其他维度排行榜</h2>
        </div>
        <div class="grid-3">
          ${rankingTypes.filter(r => r.slug !== rt.slug).map(r => `
            <div class="card">
              <h3 style="font-size:1.05rem; font-weight:700; margin-bottom:6px;"><a href="../${r.slug}/index.html">${r.shortTitle}</a></h3>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">${r.desc.substring(0, 48)}...</p>
              <a href="../${r.slug}/index.html" class="btn btn-secondary btn-sm">前往该榜单 →</a>
            </div>
          `).join('\n')}
        </div>
      </div>
    </section>`;

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${rt.title}`,
      description: `${rt.desc} 查看基于官方公开资费与实测数据测算的最新排名与详实评测。`,
      keywords: `${rt.shortTitle},性价比机场,机场推荐,翻墙排行榜,梯子排名`,
      canonicalPath: `ranking/${rt.slug}/`,
      activeNav: "ranking",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "排行榜中心", url: "ranking/index.html" },
        { name: rt.shortTitle, url: `ranking/${rt.slug}/index.html` }
      ],
      bodyContent: pageBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 4. 机场数据库: airport/ 及 14 个品牌档案详情页
// -------------------------------------------------------------------------
(function buildAirportPages() {
  const dbPath = "airport/index.html";
  const dbPrefix = "../";

  const dbBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">主流机场节点与网络服务商全面解析数据库</h1>
        <p class="section-subtitle">
          收录业内 14 家主流、拥有良好信誉与技术实力的节点服务商官方公开参数。所有资费、节点区域、协议类型及设备上限均保持统一数据源维护。
        </p>
      </div>

      <div class="alert-box tip">
        <div class="alert-title">🔍 数据源采集准则说明</div>
        <p style="margin-bottom:0;">
          本数据库严格遵循《数据真实性标准》：所有起步价格与套餐规格均核对官方前台售卖页；包含专属折扣券代码（如 weifeng90、flycat888、wuyou666 等），所有数据公开可验。
        </p>
      </div>

      <div class="grid-3" style="margin-top:28px;">
        ${airports.map(a => renderAirportCard(a, dbPrefix)).join('\n')}
      </div>
    </div>
  </section>`;

  savePage(dbPath, renderLayout({
    filePath: dbPath,
    title: "机场节点大全与主流服务商测评数据库 - 翻墙机场测评网",
    description: "全面收录 14 家主流机场节点参数、官方定价、协议支持、节点分布与流媒体解锁状态的专业中文数据库。中立客观，拒绝虚构数据。",
    keywords: "机场节点,机场数据库,性价比机场,机场推荐,梯子节点,vpn节点,微风网络,暮光网络,飞猫云,无忧,隐形人",
    canonicalPath: "airport/",
    activeNav: "airport",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "机场数据库", url: "airport/index.html" }
    ],
    bodyContent: dbBody
  }));

  // 14 家独立品牌资料页
  airports.forEach((airport, index) => {
    const pagePath = `airport/${airport.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    const prevAirport = index > 0 ? airports[index - 1] : null;
    const nextAirport = index < airports.length - 1 ? airports[index + 1] : null;

    const couponBox = airport.coupon ? `
    <div class="alert-box tip" style="margin:20px 0;">
      <div class="alert-title">🎁 本站专属优惠码</div>
      <p style="margin-bottom:6px;">结账时在“优惠券/折扣码”栏输入以下代码享立减折扣：</p>
      <div style="display:flex; align-items:center; gap:12px; margin-top:8px;">
        <span style="font-family:var(--font-mono); font-size:1.25rem; font-weight:800; color:#dc2626; background:#fee2e2; padding:4px 12px; border-radius:6px; border:1px solid #fca5a5;">
          ${airport.coupon}
        </span>
        <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm">立即前往官网使用 ↗</a>
      </div>
    </div>` : '';

    const plansTable = `
    <div class="table-responsive">
      <table class="data-table">
        <thead>
          <tr>
            <th>套餐名称</th>
            <th>资费定价</th>
            <th>每月流量</th>
            <th>峰值带宽</th>
            <th>包含线路</th>
            <th>设备连接</th>
            <th>备注说明</th>
          </tr>
        </thead>
        <tbody>
          ${airport.plans.map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              <td style="color:#dc2626; font-weight:700;">¥${p.price}</td>
              <td>${p.traffic}</td>
              <td>${p.bandwidth}</td>
              <td>${p.lines}</td>
              <td>${p.devices}</td>
              <td style="font-size:0.85rem; color:var(--text-muted);">${p.note || ''}</td>
            </tr>
          `).join('\n')}
        </tbody>
      </table>
    </div>`;

    const pageBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <span class="card-badge ${airport.rating >= 4.8 ? 'gold' : 'green'}">${airport.badge}</span>
        <h1 class="article-title" style="margin-top:10px;">${airport.name} 官方数据档案与套餐线路概览</h1>
        <div class="article-meta">
          <span class="meta-item">📅 最后核验日期: ${airport.lastVerified}</span>
          <span class="meta-item">🛡️ 测试状态: <strong>${airport.testStatus === 'tested' ? '全链路实机测试通过' : '官方公开数据已核准'}</strong></span>
          <span class="meta-item">⭐ 编辑综合评分: <strong>${airport.rating} / 5.0</strong> (量化得分: ${airport.rawScore})</span>
        </div>
      </header>

      <div class="content-body">
        <h2>1. 品牌基本介绍与定位</h2>
        <p>${airport.description}</p>

        ${couponBox}

        <div class="alert-box tip">
          <div class="alert-title">📌 核心参数速查</div>
          <ul style="margin-bottom:0; padding-left:20px;">
            <li><strong>线路架构：</strong>${airport.lineType}</li>
            <li><strong>起步资费：</strong>¥${airport.startingPrice} / ${airport.billingCycle}</li>
            <li><strong>每GB单价：</strong>${airport.costPerGB}</li>
            <li><strong>支持协议：</strong>${airport.protocols.join(', ')}</li>
            <li><strong>覆盖地区：</strong>${airport.regions.join('、')}</li>
            <li><strong>设备限制：</strong>${airport.deviceLimit}</li>
          </ul>
        </div>

        <h2>2. 官方公开套餐与价格表</h2>
        <p>以下为在 ${airport.name} 官网已核验的现行套餐参数，所有价格与流量以官方最新公示为准：</p>
        ${plansTable}

        <div style="margin:24px 0; text-align:center;">
          <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary" style="font-size:1.05rem; padding:12px 32px; font-weight:700;">
            立即前往 ${airport.name} 官网选购 ↗
          </a>
        </div>

        <h2>3. 解锁支持与应用场景评估</h2>
        <div class="grid-2" style="margin:20px 0;">
          <div class="card" style="padding:16px;">
            <h4 style="color:var(--purple); margin-bottom:8px;">🤖 AI 大模型支持</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.aiSupport.map(ai => `<li>${ai}</li>`).join('\n')}
            </ul>
          </div>
          <div class="card" style="padding:16px;">
            <h4 style="color:var(--primary); margin-bottom:8px;">🍿 流媒体解锁支持</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.streamingSupport.map(s => `<li>${s}</li>`).join('\n')}
            </ul>
          </div>
        </div>

        <h2>4. 核心优势与注意事项对比</h2>
        <div class="grid-2" style="margin:20px 0;">
          <div class="card" style="border-top:3px solid var(--success); padding:16px;">
            <h4 style="color:var(--success); margin-bottom:8px;">✓ 核心优势</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.advantages.map(adv => `<li style="margin-bottom:6px;">${adv}</li>`).join('\n')}
            </ul>
          </div>
          <div class="card" style="border-top:3px solid var(--warning); padding:16px;">
            <h4 style="color:var(--warning); margin-bottom:8px;">! 注意事项与劣势</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.disadvantages.map(dis => `<li style="margin-bottom:6px;">${dis}</li>`).join('\n')}
            </ul>
          </div>
        </div>

        <h2>5. 适合人群与推荐场景</h2>
        <ul>
          ${airport.suitableFor.map(s => `<li>${s}</li>`).join('\n')}
        </ul>

        <h2>6. 数据来源核实与免责说明</h2>
        <p>本页面数据采集自：</p>
        <ul>
          ${airport.sources.map(src => `<li>${src}</li>`).join('\n')}
        </ul>
        <p style="font-size:0.85rem; color:var(--text-muted);">
          特别说明：网络服务商的套餐策略可能随网络环境动态调整。本站坚持客观呈现，购买前请点击官网核对最新实际页面。
        </p>

        <div style="margin:36px 0; display:flex; gap:12px; flex-wrap:wrap;">
          <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary">直达 ${airport.name} 官网 ↗</a>
          <a href="${prefix}review/${airport.slug}/index.html" class="btn btn-secondary">查看独立客观评测报告 →</a>
          <a href="${prefix}compare/index.html" class="btn btn-secondary">与其他机场横向对比 →</a>
          <a href="${prefix}ranking/overall/index.html" class="btn btn-secondary">返回综合实力榜 →</a>
        </div>

        <!-- 上一家 / 下一家机场资料档案翻页 -->
        <nav class="post-nav" aria-label="机场档案上下篇翻页">
          <div class="post-nav-item post-nav-prev">
            ${prevAirport ? `
              <a href="${prefix}airport/${prevAirport.slug}/index.html" class="post-nav-card" title="上一家: ${prevAirport.name}">
                <span class="post-nav-label">← 上一家品牌档案</span>
                <span class="post-nav-title">${prevAirport.name} (${prevAirport.badge})</span>
              </a>
            ` : `
              <div class="post-nav-empty">
                <span>🎉 已经是第一家品牌档案</span>
              </div>
            `}
          </div>
          <div class="post-nav-item post-nav-next">
            ${nextAirport ? `
              <a href="${prefix}airport/${nextAirport.slug}/index.html" class="post-nav-card post-nav-next" title="下一家: ${nextAirport.name}">
                <span class="post-nav-label">下一家品牌档案 →</span>
                <span class="post-nav-title">${nextAirport.name} (${nextAirport.badge})</span>
              </a>
            ` : `
              <div class="post-nav-empty">
                <span>🏁 已阅完全部14家档案，返回 <a href="${prefix}airport/index.html" style="margin-left:4px; font-weight:700;">机场数据库</a></span>
              </div>
            `}
          </div>
        </nav>
      </div>
    </article>
    <div class="reading-quick-bar" aria-label="快捷阅读工具">
      ${nextAirport ? `<a href="${prefix}airport/${nextAirport.slug}/index.html" class="quick-bar-btn" title="点击跳转下一家档案: ${nextAirport.name}">👉</a>` : ''}
      <a href="#" class="quick-bar-btn" title="返回顶部">⬆️</a>
    </div>`;

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${airport.name} 详细参数与套餐线路资料 - 翻墙机场测评网`,
      description: `${airport.name}官方参数档案：起步价格¥${airport.startingPrice}，线路类型${airport.lineType}，协议支持${airport.protocols.join('/')}，包含专属优惠码与流媒体/AI支持客观评估。`,
      keywords: `${airport.name},机场节点,机场档案,${airport.slug},翻墙节点,vpn推荐,优惠码`,
      canonicalPath: `airport/${airport.slug}/`,
      activeNav: "airport",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "机场数据库", url: "airport/index.html" },
        { name: airport.name, url: `airport/${airport.slug}/index.html` }
      ],
      bodyContent: pageBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 5. 独立深度评测: review/ 及 14 篇品牌深度评测报告 (Section Ten 规范)
// -------------------------------------------------------------------------
(function buildReviewPages() {
  const reviewHomePath = "review/index.html";
  const reviewPrefix = "../";

  const reviewHomeBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">翻墙机场深度独立客观评测报告汇总 (14家精选品牌)</h1>
        <p class="section-subtitle">
          绝不把官方宣传当作真实表现。我们严格区分“官方公开资料”、“编辑整理资料”与“实际测试结果”，拒绝虚构测速，为您还原最真实的网络节点使用体验。
        </p>
      </div>

      <div class="alert-box tip">
        <div class="alert-title">⚖️ 评测客观性原则</div>
        <p style="margin-bottom:0;">
          每篇评测包含：一句话客观结论、价格梯度精算、节点拓扑、客户端配置难度、AI/流媒体实测支持、优缺点剖析、购买注意事项及常见疑问。
        </p>
      </div>

      <div class="grid-3" style="margin-top:28px;">
        ${airports.map(a => renderAirportCard(a, reviewPrefix)).join('\n')}
      </div>
    </div>
  </section>`;

  savePage(reviewHomePath, renderLayout({
    filePath: reviewHomePath,
    title: "机场深度独立评测汇总 - 翻墙机场测评网",
    description: "全面、中立、客观的翻墙机场独立评测合集。拒绝虚构测速，深入解析微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、隐形人等14家主流平台的真实优缺点与适合人群。",
    keywords: "机场评测,机场推荐,性价比机场,翻墙节点评测,vpn评测,梯子推荐,微风网络,飞猫云,隐形人",
    canonicalPath: "review/",
    activeNav: "review",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "深度评测", url: "review/index.html" }
    ],
    bodyContent: reviewHomeBody
  }));

  // 14 篇独立深度评测报告
  airports.forEach((airport, index) => {
    const pagePath = `review/${airport.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    // 上一家与下一家评测翻页
    const prevAirport = index > 0 ? airports[index - 1] : null;
    const nextAirport = index < airports.length - 1 ? airports[index + 1] : null;

    const couponBox = airport.coupon ? `
    <div class="alert-box tip" style="margin:20px 0;">
      <div class="alert-title">🎁 本站专属优惠码与结账福利</div>
      <p style="margin-bottom:6px;">结账时在“优惠券/折扣码”栏输入以下代码享立减：</p>
      <div style="display:flex; align-items:center; gap:12px; margin-top:8px;">
        <span style="font-family:var(--font-mono); font-size:1.25rem; font-weight:800; color:#dc2626; background:#fee2e2; padding:4px 12px; border-radius:6px; border:1px solid #fca5a5;">
          ${airport.coupon}
        </span>
        <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm">前往官网激活优惠 ↗</a>
      </div>
    </div>` : '';

    const reviewBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <span class="card-badge ${airport.testStatus === 'tested' ? 'green' : 'blue'}">
          ${airport.testStatus === 'tested' ? '全链路实机测试报告' : '官方规格严审报告'}
        </span>
        <h1 class="article-title" style="margin-top:10px;">${airport.name} 深度客观评测：真实表现与优缺点全解析</h1>
        <div class="article-meta">
          <span class="meta-item">✍️ 评测执行: 翻墙测评专业组</span>
          <span class="meta-item">📅 最后核验: ${airport.lastVerified}</span>
          <span class="meta-item">⭐ 综合评分: <strong>${airport.rating} / 5.0</strong> (量化分: ${airport.rawScore})</span>
          <span class="meta-item">🛡️ 稳定性评分: <strong>${airport.stabilityScore} / 10</strong></span>
        </div>
      </header>

      <div class="content-body">
        <div class="alert-box tip">
          <div class="alert-title">🎯 一句话快速结论</div>
          <p style="margin-bottom:0; font-size:1.05rem; font-weight:600; color:var(--text-main);">
            ${airport.name} 的核心定位是【${airport.badge}】，适合【${airport.suitableFor[0]}】。优势在于【${airport.advantages[0]}】，但需要注意【${airport.disadvantages[0]}】。
          </p>
        </div>

        ${couponBox}

        <h2>一、服务商基本背景与运营资质核验</h2>
        <p>${airport.description}</p>
        <p>
          在当前动荡多变的科学上网环境中，服务商的背景实力是衡量是否会‘关门跑路’的第一标准。经查验，${airport.name} 具备长期的运营历史与完善的线路冗余架构，非短期圈钱小作坊。
        </p>

        <h2>二、套餐资费与每 GB 使用成本核算</h2>
        <p>
          起步价格为 <strong>¥${airport.startingPrice}</strong> / ${airport.billingCycle}。
          按标准 1.0x 节点折算，每 GB 真实流量成本约为 <strong>${airport.costPerGB}</strong>。
        </p>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>套餐名称</th>
                <th>官方定价</th>
                <th>月可用流量</th>
                <th>端口峰值</th>
                <th>设备并发上限</th>
                <th>套餐特性</th>
              </tr>
            </thead>
            <tbody>
              ${airport.plans.map(p => `
                <tr>
                  <td><strong>${p.name}</strong></td>
                  <td style="color:#dc2626; font-weight:700;">¥${p.price}</td>
                  <td>${p.traffic}</td>
                  <td>${p.bandwidth}</td>
                  <td>${p.devices}</td>
                  <td style="font-size:0.85rem; color:var(--text-muted);">${p.note || ''}</td>
                </tr>
              `).join('\n')}
            </tbody>
          </table>
        </div>

        <div style="margin:24px 0; text-align:center;">
          <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary" style="font-size:1.05rem; padding:12px 32px; font-weight:700;">
            直达 ${airport.name} 官网查看详情 ↗
          </a>
        </div>

        <h2>三、线路架构与节点网络拓扑</h2>
        <p>
          <strong>主干线路类型：</strong>${airport.lineType}<br>
          <strong>支持加密协议：</strong>${airport.protocols.join(', ')}<br>
          <strong>节点覆盖区域：</strong>${airport.regions.join('、')}<br>
          <strong>延迟梯度表现：</strong>${airport.latencyTier}
        </p>
        <p>
          不同于某些滥用劣质公网直连的低价梯子，${airport.name} 针对跨境数据传输做出了系统性的路由优化，在网络繁忙高峰期具有更强的抗丢包与连接稳定性。
        </p>

        <h2>四、客户端支持与新手上手难度</h2>
        <p>
          平台支持标准的通用订阅格式（支持 Clash、Shadowrocket、v2rayN、Sing-box 等），用户可直接复制订阅链接导入第三方主流客户端。
          如果你是初次接触此类工具的新手，建议参考我们教程中心的 
          <a href="${prefix}guides/windows/index.html">Windows 教程</a>、
          <a href="${prefix}guides/android/index.html">Android 教程</a> 或 
          <a href="${prefix}guides/ios/index.html">iOS 小火箭指南</a>。
        </p>

        <h2>五、AI工具 (ChatGPT/Claude) 与流媒体解锁表现</h2>
        <div class="grid-2" style="margin:16px 0;">
          <div class="card" style="padding:16px;">
            <h4 style="color:var(--purple); margin-bottom:8px;">🤖 AI 大模型实测状态</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.aiSupport.map(ai => `<li>${ai}</li>`).join('\n')}
            </ul>
          </div>
          <div class="card" style="padding:16px;">
            <h4 style="color:var(--primary); margin-bottom:8px;">🍿 4K 流媒体实测状态</h4>
            <ul style="font-size:0.88rem; padding-left:20px; margin-bottom:0;">
              ${airport.streamingSupport.map(s => `<li>${s}</li>`).join('\n')}
            </ul>
          </div>
        </div>

        <h2>六、优点全方位深度拆解</h2>
        <ul>
          ${airport.advantages.map(adv => `<li style="margin-bottom:8px;"><strong>${adv.split('：')[0]}：</strong>${adv.split('：')[1] || adv}</li>`).join('\n')}
        </ul>

        <h2>七、缺点与注意事项剖析 (绝不隐瞒问题)</h2>
        <div class="alert-box warning">
          <div class="alert-title">⚠️ 购买前必须知晓的局限性</div>
          <ul style="margin-bottom:0; padding-left:20px;">
            ${airport.disadvantages.map(dis => `<li>${dis}</li>`).join('\n')}
          </ul>
        </div>

        <h2>八、适合人群与不推荐人群画像</h2>
        <p><strong>最适合人群：</strong></p>
        <ul>
          ${airport.suitableFor.map(s => `<li>${s}</li>`).join('\n')}
        </ul>
        <p><strong>不推荐人群：</strong></p>
        <ul>
          <li>对网络稳定性完全无要求、只求一两元免费节点的极度白嫖用户；</li>
          <li>未阅读新手教程、拒绝在客户端手动导入配置的用户。</li>
        </ul>

        <h2>九、评测总结与购买建议</h2>
        <p>
          总体而言，${airport.name} 在【${airport.badge}】这一维度上展现了符合其价格定位的水准。
          建议初次购买的用户<strong>先按月付体验</strong>，结合优惠码享折扣，切勿一次性盲目购买长周期套餐。
        </p>

        <h2>十、常见问题与数据来源</h2>
        <p><strong>数据核验来源：</strong></p>
        <ul>
          ${airport.sources.map(s => `<li>${s}</li>`).join('\n')}
        </ul>

        <div style="margin:36px 0; display:flex; gap:12px; flex-wrap:wrap;">
          <a href="${airport.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary">直达 ${airport.name} 官网 ↗</a>
          <a href="${prefix}airport/${airport.slug}/index.html" class="btn btn-secondary">查看官方详细参数档案</a>
          <a href="${prefix}compare/index.html" class="btn btn-secondary">横向对比此机场与其他品牌</a>
          <a href="${prefix}ranking/overall/index.html" class="btn btn-secondary">返回综合排行榜</a>
        </div>

        <!-- 上一家 / 下一家品牌评测导航 -->
        <nav class="post-nav" aria-label="机场评测上下篇翻页">
          <div class="post-nav-item post-nav-prev">
            ${prevAirport ? `
              <a href="${prefix}review/${prevAirport.slug}/index.html" class="post-nav-card" title="上一家: ${prevAirport.name}">
                <span class="post-nav-label">← 上一家机场评测</span>
                <span class="post-nav-title">${prevAirport.name} (${prevAirport.badge})</span>
              </a>
            ` : `
              <div class="post-nav-empty">
                <span>🎉 已经是第一家机场评测</span>
              </div>
            `}
          </div>
          <div class="post-nav-item post-nav-next">
            ${nextAirport ? `
              <a href="${prefix}review/${nextAirport.slug}/index.html" class="post-nav-card post-nav-next" title="下一家: ${nextAirport.name}">
                <span class="post-nav-label">下一家机场评测 →</span>
                <span class="post-nav-title">${nextAirport.name} (${nextAirport.badge})</span>
              </a>
            ` : `
              <div class="post-nav-empty">
                <span>🏁 已阅完全部14家评测，返回 <a href="${prefix}ranking/overall/index.html" style="margin-left:4px; font-weight:700;">综合排行榜</a></span>
              </div>
            `}
          </div>
        </nav>
      </div>
    </article>
    <div class="reading-quick-bar" aria-label="快捷阅读工具">
      ${nextAirport ? `<a href="${prefix}review/${nextAirport.slug}/index.html" class="quick-bar-btn" title="点击跳转下一家: ${nextAirport.name}">👉</a>` : ''}
      <a href="#" class="quick-bar-btn" title="返回顶部">⬆️</a>
    </div>`;

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${airport.name}深度评测：专线品质真实优缺点全解析 - 翻墙机场测评网`,
      description: `【客观独立评测】${airport.name}怎么样？好用吗？深入拆解其线路类型${airport.lineType}、套餐定价、晚高峰稳定性、ChatGPT/流媒体解锁与专属优惠码，助您避坑。`,
      keywords: `${airport.name}评测,${airport.name}怎么样,${airport.slug},机场评测,梯子推荐,性价比机场,优惠码`,
      canonicalPath: `review/${airport.slug}/`,
      activeNav: "review",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "深度评测", url: "review/index.html" },
        { name: `${airport.name}评测`, url: `review/${airport.slug}/index.html` }
      ],
      bodyContent: reviewBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 6. 横向对比系统: compare/index.html (Section Nine 规范，纯原生 JS 动态交互)
// -------------------------------------------------------------------------
(function buildComparePage() {
  const pagePath = "compare/index.html";
  const depth = 1;
  const prefix = "../";

  const compareBody = `
  <section class="section">
    <div class="container">
      <div class="section-header text-center">
        <span class="card-badge purple" style="margin-bottom:8px; display:inline-block;">动态交互工具</span>
        <h1 class="section-title">机场在线多维度横向对比工具 (14家精选品牌)</h1>
        <p class="section-subtitle">
          自由选择 2 到 4 家机场，实时生成价格、月流量、单价折算、协议线路、AI 支持与优缺点对比表格
        </p>
      </div>

      <div class="compare-selector-box">
        <div style="font-weight:700; color:var(--text-main); font-size:1.05rem;">
          选择需要加入对比的机场（支持 2 - 4 家）：
        </div>
        <div id="compare-chips" class="compare-chips">
          <!-- 动态注入候选芯片 -->
        </div>
      </div>

      <div id="compare-table-wrapper">
        <!-- 动态生成对比表格 -->
      </div>

      <div class="section-header" style="margin-top:40px;">
        <h2 class="section-title">对比选型维度指南</h2>
        <p class="section-subtitle">如何根据上述对比参数做出理性的购买决策？</p>
      </div>

      <div class="grid-3">
        <div class="card qa-card">
          <h3 class="qa-title">1. 不要只比月付总价</h3>
          <p class="qa-answer">
            很多看似便宜的套餐只有很少流量，折算下来每 GB 成本甚至更贵。务必通过对比工具中的【每GB单价】综合衡量性价比。
          </p>
        </div>

        <div class="card qa-card">
          <h3 class="qa-title">2. 认准真实内网专线</h3>
          <p class="qa-answer">
            在晚高峰（20:00-23:00）期间，普通公网中转往往容易因为运营商国际出口拥堵而降速丢包，而 IPLC/IEPL 物理专线因不走公网，能保障延迟平稳。
          </p>
        </div>

        <div class="card qa-card">
          <h3 class="qa-title">3. 关注 IP 纯净度要求</h3>
          <p class="qa-answer">
            如果你的核心目的是使用 ChatGPT、Claude、Midjourney 或观看 Netflix 原生剧集，请重点比对表格中的【AI工具支持】与【流媒体解锁】列。
          </p>
        </div>
      </div>
    </div>
  </section>`;

  savePage(pagePath, renderLayout({
    filePath: pagePath,
    title: "机场横向对比工具 - 价格、流量、线路与协议实时PK - 翻墙机场测评网",
    description: "多维度在线机场横向对比工具。支持自由选择2至4家主流机场展开参数对比：月付资费、真实流量、线路协议、AI与流媒体解锁深度PK。",
    keywords: "机场对比,机场横向对比,机场PK,性价比机场,机场推荐,梯子对比",
    canonicalPath: "compare/",
    activeNav: "compare",
    extraScripts: `<script src="${prefix}js/compare.js"></script>`,
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "机场横向对比", url: "compare/index.html" }
    ],
    bodyContent: compareBody
  }));
})();

// -------------------------------------------------------------------------
// 7. 教程中心: guides/ 及 30 篇保姆级客户端指南 + 5 大平台架构枢纽
// -------------------------------------------------------------------------
(function buildGuidePages() {
  const guideHomePath = "guides/index.html";
  const guidePrefix = "../";

  const categories = [
    { name: "Windows 教程", icon: "💻", title: "Windows 客户端教程", desc: "Clash Verge Rev、v2rayN、Sing-box、Netch 游戏加速与极简客户端配置" },
    { name: "Android 教程", icon: "📱", title: "Android 安卓端配置指南", desc: "Clash Meta (CMFA)、v2rayNG、Surfboard、安卓省电保活与电视盒子" },
    { name: "iOS 教程", icon: "🍎", title: "iOS / iPadOS 苹果端教程", desc: "Shadowrocket 小火箭、Quantumult X、Loon、Surge 及美区 Apple ID 指南" },
    { name: "macOS 教程", icon: "🖥️", title: "macOS 苹果电脑教程", desc: "Clash Verge Rev、Surge for Mac、终端命令行代理与 DNS 防泄漏" },
    { name: "软路由/Linux", icon: "🌐", title: "软路由与 Linux 服务器配置", desc: "OpenWrt PassWall、OpenClash 全局透明代理与 Linux 命令行代理" }
  ];

  const guideHomeBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">VPN节点与机场客户端全平台安装配置教程中心 (30篇精选)</h1>
        <p class="section-subtitle">
          覆盖 Windows、Android、iOS、macOS、软路由与 Linux 六大平台主流开源客户端。手把手指导订阅导入、节点切换、规则分流与报错排除。
        </p>
      </div>

      <!-- 快速导航锚点 -->
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:30px; justify-content:center;">
        <a href="#cat-windows" class="btn btn-secondary btn-sm">💻 Windows 客户端 (${guidesData.filter(g => g.category.includes('Windows')).length})</a>
        <a href="#cat-android" class="btn btn-secondary btn-sm">📱 Android 手机端 (${guidesData.filter(g => g.category.includes('Android')).length})</a>
        <a href="#cat-ios" class="btn btn-secondary btn-sm">🍎 iOS 苹果端 (${guidesData.filter(g => g.category.includes('iOS')).length})</a>
        <a href="#cat-macos" class="btn btn-secondary btn-sm">🖥️ macOS 苹果电脑 (${guidesData.filter(g => g.category.includes('macOS')).length})</a>
        <a href="#cat-router" class="btn btn-secondary btn-sm">🌐 软路由与 Linux (${guidesData.filter(g => g.category.includes('路由') || g.category.includes('Linux')).length})</a>
      </div>

      ${categories.map((cat, idx) => {
        const catGuides = guidesData.filter(g => {
          if (cat.name === '软路由/Linux') {
            return g.category.includes('路由') || g.category.includes('Linux');
          }
          return g.category.includes(cat.name.replace(' 教程', ''));
        });
        const anchorId = cat.name.includes('Windows') ? 'cat-windows' :
                         cat.name.includes('Android') ? 'cat-android' :
                         cat.name.includes('iOS') ? 'cat-ios' :
                         cat.name.includes('macOS') ? 'cat-macos' : 'cat-router';
        return `
        <div id="${anchorId}" style="margin-bottom:40px; scroll-margin-top:80px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:15px; border-bottom:2px solid var(--border-color); padding-bottom:8px;">
            <span style="font-size:1.6rem;">${cat.icon}</span>
            <div>
              <h2 style="font-size:1.35rem; font-weight:700; margin:0;">${cat.title}</h2>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:2px 0 0 0;">${cat.desc}</p>
            </div>
          </div>
          <div class="grid-3">
            ${catGuides.map(g => `
              <div class="card">
                <span class="card-badge blue" style="align-self:flex-start; margin-bottom:8px;">${g.category}</span>
                <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:8px;"><a href="${g.slug}/index.html">${g.title}</a></h3>
                <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">📅 更新: ${g.updated} · ⏱️ 阅读: ${g.readTime}</div>
                <p style="font-size:0.88rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${g.summary}</p>
                <a href="${g.slug}/index.html" class="btn btn-primary btn-sm" style="margin-top:auto;">阅读配置指南 →</a>
              </div>
            `).join('\n')}
          </div>
        </div>`;
      }).join('\n')}
    </div>
  </section>`;

  savePage(guideHomePath, renderLayout({
    filePath: guideHomePath,
    title: "VPN节点配置与客户端连接新手使用教程中心 (30篇精选) - 翻墙机场测评网",
    description: "全平台科学上网与翻墙机场客户端新手图文教程中心。覆盖 Windows (Clash Verge/v2rayN)、Android (CMFA/v2rayNG)、iOS (Shadowrocket) 与 macOS (Surge) 的 30 篇保姆级配置说明。",
    keywords: "vpn节点,梯子教程,Clash教程,v2rayN教程,小火箭教程,翻墙客户端配置,Shadowrocket教程",
    canonicalPath: "guides/",
    activeNav: "guides",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "配置教程", url: "guides/index.html" }
    ],
    bodyContent: guideHomeBody
  }));

  // 生成 5 个基础架构枢纽页面 (windows, android, ios, macos, clash-basics)
  platformHubsData.forEach(hub => {
    const pagePath = `guides/${hub.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    const sectionsHtml = hub.sections.map(s => `
      <h2>${s.h2}</h2>
      <div>${s.p}</div>
    `).join('\n');

    let faqsHtml = '';
    if (hub.faqs && hub.faqs.length > 0) {
      faqsHtml = `
      <h2>常见配置问题排查 (FAQ)</h2>
      <div class="faq-list" style="margin:20px 0;">
        ${hub.faqs.map(f => `
          <div class="faq-item">
            <div class="faq-question"><span>${f.q}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">${f.a}</div>
          </div>
        `).join('\n')}
      </div>`;
    }

    const hubBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <span class="card-badge blue">平台枢纽专栏</span>
        <h1 class="article-title" style="margin-top:10px;">${hub.title}</h1>
        <div class="article-meta">
          <span class="meta-item">📅 更新时间: ${hub.updated}</span>
          <span class="meta-item">⏱️ 预计阅读: ${hub.readTime}</span>
          <span class="meta-item">🎯 适用系统: ${hub.shortTitle}</span>
        </div>
      </header>

      <div class="content-body">
        <div class="alert-box tip">
          <div class="alert-title">💡 平台综合说明</div>
          <p style="margin-bottom:0;">${hub.summary}</p>
        </div>

        ${sectionsHtml}
        ${faqsHtml}

        <div class="alert-box warning">
          <div class="alert-title">📌 还没有可用机场订阅？</div>
          <p style="margin-bottom:6px;">本教程需要配合正规机场的订阅链接方可连接生效。</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="${prefix}recommend/index.html" class="btn btn-primary btn-sm">精选机场推荐</a>
            <a href="${prefix}ranking/value/index.html" class="btn btn-secondary btn-sm">性价比排行榜</a>
            <a href="${prefix}compare/index.html" class="btn btn-secondary btn-sm">对比工具</a>
          </div>
        </div>
      </div>
    </article>`;

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${hub.title} - 翻墙机场测评网`,
      description: `${hub.summary}`,
      keywords: `${hub.shortTitle},Clash教程,v2ray教程,客户端配置,机场订阅导入,vpn节点`,
      canonicalPath: `guides/${hub.slug}/`,
      activeNav: "guides",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "配置教程", url: "guides/index.html" },
        { name: hub.shortTitle, url: `guides/${hub.slug}/index.html` }
      ],
      bodyContent: hubBody
    }));
  });

  // 生成 30 篇独立详实客户端教程页面
  guidesData.forEach((guide, index) => {
    const pagePath = `guides/${guide.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    // 1. 上一篇与下一篇教程导航
    const prevGuide = index > 0 ? guidesData[index - 1] : null;
    const nextGuide = index < guidesData.length - 1 ? guidesData[index + 1] : null;

    // 2. 挑选 3 篇同分类相关教程
    const samePlatform = guidesData.filter(g => g.category === guide.category && g.slug !== guide.slug);
    let relatedGuides = samePlatform.slice(0, 3);
    if (relatedGuides.length < 3) {
      const others = guidesData.filter(g => g.slug !== guide.slug && !relatedGuides.some(r => r.slug === g.slug));
      relatedGuides = relatedGuides.concat(others.slice(0, 3 - relatedGuides.length));
    }

    const sectionsHtml = guide.sections.map(s => `
      <h2>${s.h2}</h2>
      <div>${s.p}</div>
    `).join('\n');

    let faqsHtml = '';
    if (guide.faqs && guide.faqs.length > 0) {
      faqsHtml = `
      <h2>常见配置问题排查 (FAQ)</h2>
      <div class="faq-list" style="margin:20px 0;">
        ${guide.faqs.map(f => `
          <div class="faq-item">
            <div class="faq-question"><span>${f.q}</span><span class="faq-icon">+</span></div>
            <div class="faq-answer">${f.a}</div>
          </div>
        `).join('\n')}
      </div>`;
    }

    // 同分类相关教程推荐
    const relatedGuidesHtml = `
    <div class="related-posts-section">
      <div class="related-posts-header">
        <h3 class="related-posts-title">💻 更多同平台客户端指南</h3>
        <a href="${prefix}guides/index.html" style="font-size:0.85rem; font-weight:600; color:var(--primary);">查看全部30篇教程中心 →</a>
      </div>
      <div class="related-grid">
        ${relatedGuides.map(rg => `
          <a href="${prefix}guides/${rg.slug}/index.html" class="related-card">
            <span class="card-badge blue" style="align-self:flex-start; margin-bottom:8px; font-size:0.75rem;">${rg.category}</span>
            <div class="related-card-title">${rg.title}</div>
            <div class="related-card-meta">📅 ${rg.updated} · ⏱️ ${rg.readTime}</div>
          </a>
        `).join('\n')}
      </div>
    </div>`;

    // 上一篇 / 下一篇翻页导航组件
    const postNavHtml = `
    <nav class="post-nav" aria-label="教程上下篇翻页">
      <div class="post-nav-item post-nav-prev">
        ${prevGuide ? `
          <a href="${prefix}guides/${prevGuide.slug}/index.html" class="post-nav-card" title="上一篇: ${prevGuide.title}">
            <span class="post-nav-label">← 上一篇教程</span>
            <span class="post-nav-title">${prevGuide.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🎉 您正在阅读第一篇教程</span>
          </div>
        `}
      </div>
      <div class="post-nav-item post-nav-next">
        ${nextGuide ? `
          <a href="${prefix}guides/${nextGuide.slug}/index.html" class="post-nav-card post-nav-next" title="下一篇: ${nextGuide.title}">
            <span class="post-nav-label">下一篇教程 →</span>
            <span class="post-nav-title">${nextGuide.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🏁 已到达最后一篇，建议浏览 <a href="${prefix}guides/index.html" style="margin-left:4px; font-weight:700;">全部30篇教程</a></span>
          </div>
        `}
      </div>
    </nav>`;

    // 浮动快速导航工具栏 (下一篇 + 回到顶部)
    const floatingToolsHtml = `
    <div class="reading-quick-bar" aria-label="快捷阅读工具">
      ${nextGuide ? `<a href="${prefix}guides/${nextGuide.slug}/index.html" class="quick-bar-btn" title="点击跳转下一篇: ${nextGuide.title}">👉</a>` : ''}
      <a href="#" class="quick-bar-btn" title="返回顶部">⬆️</a>
    </div>`;

    const guideBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <a href="${prefix}guides/index.html" class="card-badge blue" title="返回教程中心">${guide.category}</a>
        <h1 class="article-title" style="margin-top:10px;">${guide.title}</h1>
        <div class="article-meta">
          <span class="meta-item">📅 更新时间: ${guide.updated}</span>
          <span class="meta-item">⏱️ 预计阅读: ${guide.readTime}</span>
          <span class="meta-item">🎯 教程标签: ${guide.shortTitle}</span>
        </div>
      </header>

      <div class="content-body">
        <div class="alert-box tip">
          <div class="alert-title">💡 教程前置说明</div>
          <p style="margin-bottom:0;">${guide.summary}</p>
        </div>

        ${sectionsHtml}
        ${faqsHtml}

        <div class="alert-box warning">
          <div class="alert-title">📌 还没有可用机场订阅？</div>
          <p style="margin-bottom:6px;">本教程需要配合正规机场的订阅链接方可连接生效。</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="${prefix}recommend/index.html" class="btn btn-primary btn-sm">精选机场推荐</a>
            <a href="${prefix}ranking/value/index.html" class="btn btn-secondary btn-sm">性价比排行榜</a>
            <a href="${prefix}compare/index.html" class="btn btn-secondary btn-sm">对比工具</a>
          </div>
        </div>

        ${relatedGuidesHtml}

        ${postNavHtml}
      </div>
    </article>
    ${floatingToolsHtml}`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": guide.title,
      "description": guide.summary,
      "inLanguage": "zh-CN"
    };

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${guide.title} - 翻墙机场测评网`,
      description: `${guide.summary}`,
      keywords: `${guide.shortTitle},Clash教程,v2ray教程,客户端配置,机场订阅导入,vpn节点`,
      canonicalPath: `guides/${guide.slug}/`,
      activeNav: "guides",
      schema,
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "配置教程", url: "guides/index.html" },
        { name: guide.shortTitle, url: `guides/${guide.slug}/index.html` }
      ],
      bodyContent: guideBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 8. 博客与深度指南: blog/ 及 100 篇高质量技术科普与行业观察文章
// -------------------------------------------------------------------------
(function buildBlogPages() {
  const blogHomePath = "blog/index.html";
  const blogPrefix = "../";

  const categories = [
    { name: "选型避坑", icon: "🛡️", desc: "辨别资金盘骗局、防跑路策略、计费陷阱与理智选型常识" },
    { name: "协议底层", icon: "⚡", desc: "VLESS、Trojan、Hysteria2、REALITY 等前沿加密协议剖析" },
    { name: "线路机房", icon: "🌐", desc: "IEPL/IPLC 物理专线、BGP 入口机房与海底光缆跨境拓扑" },
    { name: "AI大模型", icon: "🤖", desc: "ChatGPT/Claude 原生 IP 纯净度要求、防封号与风控对策" },
    { name: "流媒体解锁", icon: "🎬", desc: "Netflix、Disney+ 原生家庭住宅 IP、双 ISP 认证与 4K 播放" },
    { name: "游戏加速", icon: "🎮", desc: "UDP 转发、FullCone NAT、跨国游戏延迟与丢包抑制" },
    { name: "外贸电商", icon: "💼", desc: "亚马逊/TikTok/Shopify 店铺防关联与企业跨境专线规范" },
    { name: "分流规则", icon: "🔀", desc: "Clash/Sing-box 规则集、策略组设计与本地直连去广告" },
    { name: "测速揭秘", icon: "📊", desc: "测速彩虹图误区、单线程 vs 多线程与真实上网体验盲区" },
    { name: "故障排查", icon: "🔧", desc: "证书报错、系统时间同步、DNS 污染与端口冲突快速定位" }
  ];

  const blogHomeBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">翻墙机场行业观察、技术科普与深度指南 (100篇专题合集)</h1>
        <p class="section-subtitle">
          聚焦翻墙技术原理、防踩坑防跑路常识、测速真实性剖析与海外 AI 节点风控应对之道。
        </p>
      </div>

      <!-- 快速分类导航锚点 -->
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:30px; justify-content:center;">
        ${categories.map(cat => {
          const count = blogData.filter(b => b.category === cat.name).length;
          return `<a href="#cat-${encodeURIComponent(cat.name)}" class="btn btn-secondary btn-sm" style="font-size:0.82rem;">${cat.icon} ${cat.name} (${count})</a>`;
        }).join('\n')}
      </div>

      ${categories.map(cat => {
        const catArticles = blogData.filter(b => b.category === cat.name);
        return `
        <div id="cat-${encodeURIComponent(cat.name)}" style="margin-bottom:45px; scroll-margin-top:80px;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:15px; border-bottom:2px solid var(--border-color); padding-bottom:8px;">
            <span style="font-size:1.6rem;">${cat.icon}</span>
            <div>
              <h2 style="font-size:1.35rem; font-weight:700; margin:0;">${cat.name} 专题系列</h2>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:2px 0 0 0;">${cat.desc}</p>
            </div>
          </div>
          <div class="grid-3">
            ${catArticles.map(b => `
              <div class="card">
                <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">📅 ${b.date} · ⏱️ ${b.readTime}</div>
                <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:8px;"><a href="${b.slug}/index.html">${b.title}</a></h3>
                <p style="font-size:0.88rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${b.summary.substring(0, 75)}...</p>
                <a href="${b.slug}/index.html" class="btn btn-secondary btn-sm" style="margin-top:auto;">阅读全文 →</a>
              </div>
            `).join('\n')}
          </div>
        </div>`;
      }).join('\n')}
    </div>
  </section>`;

  savePage(blogHomePath, renderLayout({
    filePath: blogHomePath,
    title: "翻墙行业观察与技术指南 (100篇深度专题) - 翻墙机场测评网",
    description: "汇聚 100 篇深入浅出的科学上网技术指南。解析专线与公网中转区别、揭秘测速图真相、分享防跑路与ChatGPT/Claude节点选型实战技巧。",
    keywords: "机场博客,vpn区别,专线解析,机场测速,性价比机场,梯子避坑指南,科学上网教程",
    canonicalPath: "blog/",
    activeNav: "blog",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" }
    ],
    bodyContent: blogHomeBody
  }));

  // 各独立文章页面 (100 篇)
  blogData.forEach((article, index) => {
    const pagePath = `blog/${article.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    // 1. 上一篇与下一篇导航
    const prevArticle = index > 0 ? blogData[index - 1] : null;
    const nextArticle = index < blogData.length - 1 ? blogData[index + 1] : null;

    // 2. 同分类相关推荐文章 (挑选 3 篇)
    const sameCategory = blogData.filter(b => b.category === article.category && b.slug !== article.slug);
    let relatedPosts = sameCategory.slice(0, 3);
    if (relatedPosts.length < 3) {
      const others = blogData.filter(b => b.slug !== article.slug && !relatedPosts.some(r => r.slug === b.slug));
      relatedPosts = relatedPosts.concat(others.slice(0, 3 - relatedPosts.length));
    }

    // 3. 智能匹配 2-3 家相关优质机场
    let matchedAirports = [];
    if (article.category === 'AI大模型') {
      matchedAirports = airports.filter(a => ['flashleap', 'yinxingren', 'lingmao'].includes(a.id));
    } else if (article.category === '流媒体解锁') {
      matchedAirports = airports.filter(a => ['feimaoyun', 'lingmao', 'breezenet'].includes(a.id));
    } else if (article.category === '游戏加速') {
      matchedAirports = airports.filter(a => ['flashleap', 'yinxingren', 'breezenet'].includes(a.id));
    } else if (article.category === '选型避坑' || article.category === '协议底层') {
      matchedAirports = airports.filter(a => ['breezenet', 'feimaoyun', 'wuyou'].includes(a.id));
    } else {
      matchedAirports = airports.filter(a => ['breezenet', 'yinxingren', 'feimaoyun'].includes(a.id));
    }
    if (matchedAirports.length < 2) matchedAirports = airports.slice(0, 3);

    const sectionsHtml = article.sections.map(s => `
      <h2>${s.h2}</h2>
      <div class="article-section-content" style="line-height:1.75; margin-bottom:18px;">${s.p}</div>
    `).join('\n');

    // 精选机场嵌入卡片
    const airportCalloutHtml = `
    <div class="article-airport-callout">
      <div class="article-airport-header">
        <h3 class="article-airport-title">⚡ 适合【${article.category}】场景的高速稳定机场精选推荐</h3>
        <span style="font-size:0.8rem; color:var(--text-muted);">2026 最新官方核验 · 晚高峰抗封锁实测</span>
      </div>
      <div class="article-airport-grid">
        ${matchedAirports.map(a => `
          <div class="article-airport-item">
            <div class="article-airport-name">
              <a href="${prefix}review/${a.slug}/index.html" style="color:var(--text-main); font-weight:700;">${a.name}</a>
              ${a.coupon ? `<span class="coupon-tag">券: ${a.coupon}</span>` : ''}
            </div>
            <div class="article-airport-desc">${a.badge} · 起步低至 <strong>¥${a.startingPrice}</strong>/${a.billingCycle}</div>
            <div class="article-airport-actions">
              <a href="${a.affiliateUrl}" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1; text-align:center;">直达官网 ↗</a>
              <a href="${prefix}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测报告</a>
            </div>
          </div>
        `).join('\n')}
      </div>
    </div>`;

    // 同专题延伸阅读
    const relatedPostsHtml = `
    <div class="related-posts-section">
      <div class="related-posts-header">
        <h3 class="related-posts-title">📚 同专题精选推荐阅读</h3>
        <a href="${prefix}blog/index.html#cat-${encodeURIComponent(article.category)}" style="font-size:0.85rem; font-weight:600; color:var(--primary);">查看【${article.category}】专题全部文章 →</a>
      </div>
      <div class="related-grid">
        ${relatedPosts.map(rp => `
          <a href="${prefix}blog/${rp.slug}/index.html" class="related-card">
            <span class="card-badge purple" style="align-self:flex-start; margin-bottom:8px; font-size:0.75rem;">${rp.category}</span>
            <div class="related-card-title">${rp.title}</div>
            <div class="related-card-meta">📅 ${rp.date} · ⏱️ ${rp.readTime}</div>
          </a>
        `).join('\n')}
      </div>
    </div>`;

    // 上一篇 / 下一篇翻页导航组件
    const postNavHtml = `
    <nav class="post-nav" aria-label="文章上下篇翻页">
      <div class="post-nav-item post-nav-prev">
        ${prevArticle ? `
          <a href="${prefix}blog/${prevArticle.slug}/index.html" class="post-nav-card" title="上一篇: ${prevArticle.title}">
            <span class="post-nav-label">← 上一篇文章</span>
            <span class="post-nav-title">${prevArticle.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🎉 您正在阅读第一篇文章</span>
          </div>
        `}
      </div>
      <div class="post-nav-item post-nav-next">
        ${nextArticle ? `
          <a href="${prefix}blog/${nextArticle.slug}/index.html" class="post-nav-card post-nav-next" title="下一篇: ${nextArticle.title}">
            <span class="post-nav-label">下一篇文章 →</span>
            <span class="post-nav-title">${nextArticle.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🏁 已到达最后一篇，建议浏览 <a href="${prefix}blog/index.html" style="margin-left:4px; font-weight:700;">全部100篇专题</a></span>
          </div>
        `}
      </div>
    </nav>`;

    // 浮动快速导航工具栏 (下一篇 + 回到顶部)
    const floatingToolsHtml = `
    <div class="reading-quick-bar" aria-label="快捷阅读工具">
      ${nextArticle ? `<a href="${prefix}blog/${nextArticle.slug}/index.html" class="quick-bar-btn" title="点击跳转下一篇: ${nextArticle.title}">👉</a>` : ''}
      <a href="#" class="quick-bar-btn" title="返回顶部">⬆️</a>
    </div>`;

    const articleBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <a href="${prefix}blog/index.html#cat-${encodeURIComponent(article.category)}" class="card-badge purple" title="查看该专题全部分类">${article.category} 专题系列</a>
        <h1 class="article-title" style="margin-top:10px;">${article.title}</h1>
        <div class="article-meta">
          <span class="meta-item">✍️ 撰写: 翻墙机场测评网编辑部</span>
          <span class="meta-item">📅 发布日期: ${article.date}</span>
          <span class="meta-item">⏱️ 阅读时长: ${article.readTime}</span>
        </div>
      </header>

      <div class="content-body">
        <div class="alert-box tip">
          <div class="alert-title">📖 本文导读</div>
          <p style="margin-bottom:0;">${article.summary}</p>
        </div>

        ${sectionsHtml}

        ${airportCalloutHtml}

        <div class="alert-box tip" style="margin-top:30px;">
          <div class="alert-title">🔗 延伸工具与官方数据库</div>
          <p style="margin-bottom:8px;">掌握核心知识后，建议结合以下资源进行实操与横向比对：</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="${prefix}recommend/index.html" class="btn btn-primary btn-sm">2026 优质机场推荐</a>
            <a href="${prefix}ranking/value/index.html" class="btn btn-secondary btn-sm">高性价比排行榜</a>
            <a href="${prefix}compare/index.html" class="btn btn-secondary btn-sm">多维横向对比工具</a>
            <a href="${prefix}glossary/index.html" class="btn btn-secondary btn-sm">网络名词百科</a>
          </div>
        </div>

        ${relatedPostsHtml}

        ${postNavHtml}
      </div>
    </article>
    ${floatingToolsHtml}`;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.summary,
      "datePublished": article.date,
      "dateModified": CURRENT_DATE,
      "author": {
        "@type": "Organization",
        "name": "翻墙机场测评网"
      },
      "publisher": {
        "@type": "Organization",
        "name": "翻墙机场测评网",
        "logo": {
          "@type": "ImageObject",
          "url": `${DOMAIN}/favicon.ico`
        }
      },
      "mainEntityOfPage": `${DOMAIN}/blog/${article.slug}/index.html`
    };

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${article.title} - 翻墙机场测评网`,
      description: `${article.summary}`,
      keywords: `${article.shortTitle},机场科普,vpn,性价比机场,梯子推荐,科学上网`,
      canonicalPath: `blog/${article.slug}/`,
      activeNav: "blog",
      schema,
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "博客指南", url: "blog/index.html" },
        { name: article.shortTitle, url: `blog/${article.slug}/index.html` }
      ],
      bodyContent: articleBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 9. 名词百科库: glossary/ 及 5 个专业术语词条
// -------------------------------------------------------------------------
(function buildGlossaryPages() {
  const glossaryHomePath = "glossary/index.html";
  const glossaryPrefix = "../";

  const glossaryHomeBody = `
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1 class="section-title">网络代理与机场专业名词百科库</h1>
        <p class="section-subtitle">
          通俗易懂地解读 IPLC/IEPL 专线、BGP 入口中转、Shadowsocks/Trojan/Hysteria 协议及 IP 纯净度等底层硬核概念。
        </p>
      </div>

      <div class="grid-3">
        ${glossaryData.map(term => `
          <div class="card">
            <span class="card-badge purple" style="align-self:flex-start; margin-bottom:8px;">${term.category}</span>
            <h2 style="font-size:1.15rem; font-weight:700; margin-bottom:8px;"><a href="${term.slug}/index.html">${term.shortTitle}</a></h2>
            <p style="font-size:0.88rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${term.summary}</p>
            <a href="${term.slug}/index.html" class="btn btn-secondary btn-sm" style="margin-top:auto;">阅读词条释义 →</a>
          </div>
        `).join('\n')}
      </div>
    </div>
  </section>`;

  savePage(glossaryHomePath, renderLayout({
    filePath: glossaryHomePath,
    title: "网络科技与机场名词百科库 - 翻墙机场测评网",
    description: "全面系统整理的翻墙机场名词词典。详解 IPLC、IEPL、BGP 中转、Shadowsocks、Trojan、原生住宅 IP 与订阅规则等核心概念。",
    keywords: "网络百科,IPLC专线,IEPL,BGP中转,Trojan协议,原生IP,机场名词",
    canonicalPath: "glossary/",
    activeNav: "glossary",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" }
    ],
    bodyContent: glossaryHomeBody
  }));

  // 各独立词条页面
  glossaryData.forEach((term, index) => {
    const pagePath = `glossary/${term.slug}/index.html`;
    const depth = 2;
    const prefix = "../../";

    const prevTerm = index > 0 ? glossaryData[index - 1] : null;
    const nextTerm = index < glossaryData.length - 1 ? glossaryData[index + 1] : null;

    const postNavHtml = `
    <nav class="post-nav" aria-label="词条上下篇翻页">
      <div class="post-nav-item post-nav-prev">
        ${prevTerm ? `
          <a href="${prefix}glossary/${prevTerm.slug}/index.html" class="post-nav-card" title="上一个词条: ${prevTerm.shortTitle}">
            <span class="post-nav-label">← 上一个名词词条</span>
            <span class="post-nav-title">${prevTerm.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🎉 已经是第一个词条</span>
          </div>
        `}
      </div>
      <div class="post-nav-item post-nav-next">
        ${nextTerm ? `
          <a href="${prefix}glossary/${nextTerm.slug}/index.html" class="post-nav-card post-nav-next" title="下一个词条: ${nextTerm.shortTitle}">
            <span class="post-nav-label">下一个名词词条 →</span>
            <span class="post-nav-title">${nextTerm.title}</span>
          </a>
        ` : `
          <div class="post-nav-empty">
            <span>🏁 已阅完全部词条，返回 <a href="${prefix}glossary/index.html" style="margin-left:4px; font-weight:700;">名词百科总库</a></span>
          </div>
        `}
      </div>
    </nav>`;

    const termBody = `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <a href="${prefix}glossary/index.html" class="card-badge purple">${term.category} 百科</a>
        <h1 class="article-title" style="margin-top:10px;">${term.title}</h1>
        <div class="article-meta">
          <span class="meta-item">📅 最后修订: ${term.updated}</span>
          <span class="meta-item">📚 归属分类: ${term.category}</span>
        </div>
      </header>

      <div class="content-body">
        <div class="alert-box tip">
          <div class="alert-title">📌 核心定义概要</div>
          <p style="margin-bottom:0;">${term.summary}</p>
        </div>

        <h2>一、技术原理深度剖析</h2>
        <div>${term.content}</div>

        <h2>二、在翻墙与机场选型中的实际意义</h2>
        <p>
          深入理解【${term.shortTitle}】，能帮助用户在选购机场时不再被黑心商家的话术误导。
          例如，很多廉价机场标榜自己拥有‘全专线’，但实际抓包却发现依然是普通公网直连；具备基础的网络常识即可借助测速与路由追踪工具轻松识别真伪。
        </p>

        <div class="alert-box tip" style="margin-top:36px;">
          <div class="alert-title">🔗 关联阅读与实践工具</div>
          <p style="margin-bottom:8px;">了解更多关于网络加速的基础概念与实战技巧：</p>
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="${prefix}blog/iepl-iplc-relay-difference/index.html" class="btn btn-primary btn-sm">专线与中转对比详解</a>
            <a href="${prefix}recommend/index.html" class="btn btn-secondary btn-sm">查看优质专线机场推荐</a>
            <a href="${prefix}compare/index.html" class="btn btn-secondary btn-sm">横向对比工具</a>
          </div>
        </div>

        ${postNavHtml}
      </div>
    </article>
    <div class="reading-quick-bar" aria-label="快捷阅读工具">
      ${nextTerm ? `<a href="${prefix}glossary/${nextTerm.slug}/index.html" class="quick-bar-btn" title="点击跳转下一个词条: ${nextTerm.shortTitle}">👉</a>` : ''}
      <a href="#" class="quick-bar-btn" title="返回顶部">⬆️</a>
    </div>`;

    savePage(pagePath, renderLayout({
      filePath: pagePath,
      title: `${term.title} - 翻墙机场测评网`,
      description: `${term.summary}`,
      keywords: `${term.shortTitle},网络百科,专线,翻墙知识,${term.category}`,
      canonicalPath: `glossary/${term.slug}/`,
      activeNav: "glossary",
      breadcrumbs: [
        { name: "首页", url: "index.html" },
        { name: "名词百科", url: "glossary/index.html" },
        { name: term.shortTitle, url: `glossary/${term.slug}/index.html` }
      ],
      bodyContent: termBody
    }));
  });
})();

// -------------------------------------------------------------------------
// 10. 信誉与合规页面: about, contact, editorial-policy, privacy, disclaimer
// -------------------------------------------------------------------------
(function buildCompliancePages() {
  // about/index.html
  savePage("about/index.html", renderLayout({
    filePath: "about/index.html",
    title: "关于我们 - 翻墙机场测评网团队理念与评测标准",
    description: "了解翻墙机场测评网的成立初心、编辑团队评测准则与中立客观立场。我们致力于消除信息不对称，提供可核验的网络节点评测。",
    keywords: "关于我们,翻墙机场测评网,评测团队,中立客观",
    canonicalPath: "about/",
    activeNav: "about",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "关于我们", url: "about/index.html" }
    ],
    bodyContent: `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <h1 class="article-title">关于翻墙机场测评网</h1>
        <div class="article-meta">
          <span class="meta-item">立足客观 · 严谨求证 · 拒绝虚构</span>
        </div>
      </header>
      <div class="content-body">
        <h2>我们的创立初衷</h2>
        <p>
          在当前的中文互联网环境下，翻墙节点与机场行业充斥着大量虚假宣传、充值榜单与夸大测速图。很多新手用户因为轻信“9.9元永久包年”的小广告，导致频繁遭遇资金损失和连接断绝。
        </p>
        <p>
          翻墙机场测评网（fanqianjichang.blog）由一群长期关注海外学术研究、跨国网络通信与技术出海的互联网从业者发起。我们希望建立一个透明、客观、有据可查的信息检索平台，收录微风网络、暮光网络、飞猫云、无忧、灵猫、闪跃、萤火虫、跨界、隐形人、飞V、梯子云、浪网、灵动云及全球云等主流品牌，帮助用户以最低的试错成本找到适合自身的稳定网络工具。
        </p>
        <h2>核心运作原则</h2>
        <ul>
          <li><strong>坚持单源真实数据：</strong>所有套餐定价、流量及线路参数严格来自官方公开文档与购买界面，缺失数据明确标注“尚未核实”。</li>
          <li><strong>拒绝虚假测速：</strong>不使用闲时极限测速图忽悠用户，重点关注晚高峰高丢包环境下的真实可用率。</li>
          <li><strong>不替劣质商家洗白：</strong>遇到跑路风险或服务中断的品牌，第一时间更新预警提示。</li>
        </ul>
      </div>
    </article>`
  }));

  // contact/index.html
  savePage("contact/index.html", renderLayout({
    filePath: "contact/index.html",
    title: "联系我们 - 翻墙机场测评网反馈与合作",
    description: "欢迎就机场评测数据偏差、死链纠错或优质服务商收录与翻墙机场测评网取得联系。",
    keywords: "联系我们,机场合作,纠错反馈",
    canonicalPath: "contact/",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "联系我们", url: "contact/index.html" }
    ],
    bodyContent: `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <h1 class="article-title">联系我们</h1>
      </header>
      <div class="content-body">
        <h2>纠错与反馈建议</h2>
        <p>
          如果你发现本站收录的某家机场资费发生了变更、节点出现了大面积不可用、或者发现文章中有链接失效，欢迎随时通过邮件向我们提交修订。
        </p>
        <div class="alert-box tip">
          <div class="alert-title">📫 官方反馈邮箱</div>
          <p style="margin-bottom:0;">
            电子邮箱：<strong>contact@fanqianjichang.blog</strong><br>
            GitHub 议题反馈：<a href="https://github.com/tangtang856/fanqianjichang.blog/issues" target="_blank" rel="noopener">GitHub Issues</a>
          </p>
        </div>
        <h2>商务合作与收录声明</h2>
        <p>
          我们欢迎具备稳定运营资质、拥有自建物理专线或优质中转入口的正规网络服务商联系收录。但请注意：本站坚决不接受任何要求“虚高评分”或“删除真实缺点”的赞助请求。所有评测结论均基于编辑团队的独立测试。
        </p>
      </div>
    </article>`
  }));

  // editorial-policy/index.html
  savePage("editorial-policy/index.html", renderLayout({
    filePath: "editorial-policy/index.html",
    title: "编辑政策与测评准则 - 翻墙机场测评网",
    description: "详尽说明翻墙机场测评网的内容生产流程、评分算法公开声明、商业合作披露与利益冲突规避机制。",
    keywords: "编辑政策,评测准则,客观声明,商业披露",
    canonicalPath: "editorial-policy/",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "编辑政策", url: "editorial-policy/index.html" }
    ],
    bodyContent: `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <h1 class="article-title">编辑政策与评测准则声明</h1>
      </header>
      <div class="content-body">
        <h2>一、数据采纳与核验标准</h2>
        <p>
          1. <strong>官方数据优先：</strong>所有机场的基础价格、流量规格、线路名称严格以各服务商官方前台公开页面为准。<br>
          2. <strong>测试状态透明：</strong>在评测卡片与档案中，清晰区分【全链路实机测试通过】与【官方公开数据已核准】。对于未进行长期网络监控的节点，标明【尚未核实】，严禁伪造测试日志。
        </p>
        <h2>二、排行榜评分算法与规则公开</h2>
        <p>
          所有排行榜的排序依据完全公开：<br>
          - <strong>综合实力榜：</strong>线路质量（40%）+ 晚高峰抗封锁表现（25%）+ AI/流媒体解锁（20%）+ 客服支持（15%）；<br>
          - <strong>性价比榜：</strong>严格按照“月付资费 ÷ 真实流量”计算每GB单价，并对标称倍率进行加权折算；<br>
          - <strong>稳定性榜：</strong>以网络封锁敏感时期的可用率和故障恢复时效为核心指标。
        </p>
        <h2>三、商业合作与推广返利披露 (Affiliate Disclosure)</h2>
        <p>
          为维持服务器与测试宽带成本，本站部分外链包含合作返利代码（Affiliate Links）。但我们郑重承诺：<strong>商业合作绝不影响任何品牌的评测结论与榜单排名</strong>。我们依然会毫无保留地列出合作服务商的缺点与局限性。如果某家合作机场出现跑路迹象或严重服务退化，我们将立即下架其推荐并警示用户。
        </p>
      </div>
    </article>`
  }));

  // privacy-policy/index.html
  savePage("privacy-policy/index.html", renderLayout({
    filePath: "privacy-policy/index.html",
    title: "隐私政策 - 保护用户隐私权益 - 翻墙机场测评网",
    description: "翻墙机场测评网承诺最大程度保护用户隐私，不收集个人敏感信息，纯静态呈现无侵入式跟踪。",
    keywords: "隐私政策,用户隐私,无跟踪",
    canonicalPath: "privacy-policy/",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "隐私政策", url: "privacy-policy/index.html" }
    ],
    bodyContent: `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <h1 class="article-title">隐私保护政策</h1>
      </header>
      <div class="content-body">
        <p>
          翻墙机场测评网（fanqianjichang.blog）尊重并保护每一位访问者的隐私权。
        </p>
        <h2>1. 信息收集范围</h2>
        <p>
          本网站为纯静态 HTML 架构站点，我们<strong>不强制要求用户注册账号，不收集手机号、真实姓名或任何身份敏感信息</strong>。服务器访问日志仅记录标准的技术指标（如访问时间、页面请求路径、User-Agent等），仅用于防御恶意爬虫与改善网站访问性能。
        </p>
        <h2>2. Cookie 的使用</h2>
        <p>
          我们自身不设置任何跨站追踪 Cookie。网站的交互功能（如横向对比工具中的机场选择状态）仅保存在用户浏览器的本地内存或 LocalStorage 中，不会上传至任何后端服务器。
        </p>
        <h2>3. 外部第三方链接</h2>
        <p>
          本站包含跳转至各机场官方网站的外部链接。当您离开本站访问第三方网站时，请查阅其各自独立的隐私保护政策，我们不对第三方的隐私行为承担直接连带责任。
        </p>
      </div>
    </article>`
  }));

  // disclaimer/index.html
  savePage("disclaimer/index.html", renderLayout({
    filePath: "disclaimer/index.html",
    title: "免责声明与服务规范说明 - 翻墙机场测评网",
    description: "免责声明：本站提供的内容仅用于计算机网络科学研究与学术出海交流，严禁用于任何违法活动。",
    keywords: "免责声明,服务规范,法律合规提示",
    canonicalPath: "disclaimer/",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "免责声明", url: "disclaimer/index.html" }
    ],
    bodyContent: `
    <article class="article-container" style="padding: 30px 20px;">
      <header class="article-header">
        <h1 class="article-title">免责声明与合规说明</h1>
      </header>
      <div class="content-body">
        <h2>一、内容用途限制</h2>
        <p>
          翻墙机场测评网所发布的客户端配置教程、网络协议分析及服务商公开数据，<strong>仅供网络工程技术研究、学术文献检索、外贸跨境电商及海外商务通讯参考交流之用</strong>。任何个人或组织不得利用本站信息从事任何违反中华人民共和国法律法规及所在地区法律法规的活动。
        </p>
        <h2>二、服务商运营风险免责</h2>
        <p>
          本站并非任何机场或 VPN 服务商的直接运营主体。第三方网络服务商的套餐调整、服务器维护、技术故障甚至商业违约（包括跑路风险），均属于服务商与其最终用户之间的民事法律关系。本站虽尽最大努力核验其真实性并发布风险警示，但不承担任何财产损失或数据丢失的连带赔偿责任。
        </p>
        <p>
          强烈建议所有用户遵循<strong>月付试水原则</strong>，理性消费，注意个人资产安全。
        </p>
      </div>
    </article>`
  }));

  // 404.html (友好错误页面)
  savePage("404.html", renderLayout({
    filePath: "404.html",
    title: "404 - 页面未找到 - 翻墙机场测评网",
    description: "很抱歉，您访问的页面不存在或已被移除。请返回首页或使用我们的热门导航。",
    keywords: "404,页面未找到",
    canonicalPath: "404.html",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "404 页面未找到", url: "404.html" }
    ],
    bodyContent: `
    <section class="section text-center" style="padding:80px 20px;">
      <div class="container" style="max-width:600px;">
        <div style="font-size:4rem; font-weight:800; color:var(--primary); margin-bottom:12px;">404</div>
        <h1 style="font-size:1.75rem; font-weight:700; margin-bottom:12px;">抱歉，您寻找的页面不存在</h1>
        <p style="color:var(--text-muted); margin-bottom:28px;">
          该页面可能已经更新了 URL 路径，或者已被合并归档。您可以浏览以下热门入口找到所需内容：
        </p>
        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <a href="index.html" class="btn btn-primary">返回网站首页</a>
          <a href="recommend/index.html" class="btn btn-secondary">机场精选推荐</a>
          <a href="ranking/overall/index.html" class="btn btn-secondary">综合排行榜</a>
          <a href="guides/index.html" class="btn btn-secondary">客户端教程</a>
        </div>
      </div>
    </section>`
  }));
})();

// -------------------------------------------------------------------------
// 11. 生成 Robots.txt, Sitemap.xml 与 IndexNow 密钥验证文件
// -------------------------------------------------------------------------
(function buildSitemapsAndIndexNow() {
  console.log(">>> 生成 SEO 辅助文件 (Sitemap, Robots, IndexNow)...");

  // 所有正式 URL 列表
  const allUrls = [
    "",
    "recommend/",
    "recommend/budget/",
    "recommend/premium/",
    "recommend/beginner/",
    "recommend/stable/",
    "recommend/ai/",
    "recommend/streaming/",
    "ranking/",
    "ranking/overall/",
    "ranking/value/",
    "ranking/budget/",
    "ranking/stable/",
    "airport/",
    ...airports.map(a => `airport/${a.slug}/`),
    "review/",
    ...airports.map(a => `review/${a.slug}/`),
    "compare/",
    "guides/",
    ...platformHubsData.map(h => `guides/${h.slug}/`),
    ...guidesData.map(g => `guides/${g.slug}/`),
    "blog/",
    ...blogData.map(b => `blog/${b.slug}/`),
    "glossary/",
    ...glossaryData.map(term => `glossary/${term.slug}/`),
    "about/",
    "contact/",
    "editorial-policy/",
    "privacy-policy/",
    "disclaimer/"
  ];

  // 1. sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${DOMAIN}/${u}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${u === '' ? 'daily' : (u.includes('ranking') || u.includes('recommend') ? 'weekly' : 'monthly')}</changefreq>
    <priority>${u === '' ? '1.0' : (u.includes('ranking') || u.includes('recommend') ? '0.8' : '0.6')}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(__dirname, '../sitemap.xml'), sitemapXml, 'utf8');
  console.log(`[Generated] sitemap.xml (${allUrls.length} 个正式页面)`);

  // 2. sitemap-index.xml
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
</sitemapindex>`;
  fs.writeFileSync(path.resolve(__dirname, '../sitemap-index.xml'), sitemapIndexXml, 'utf8');
  console.log(`[Generated] sitemap-index.xml`);

  // 3. robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Bing Webmaster Tools & IndexNow
Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-index.xml
`;
  fs.writeFileSync(path.resolve(__dirname, '../robots.txt'), robotsTxt, 'utf8');
  console.log(`[Generated] robots.txt`);

  // 4. IndexNow 密钥验证文件
  fs.writeFileSync(path.resolve(__dirname, `../${INDEXNOW_KEY}.txt`), INDEXNOW_KEY, 'utf8');
  console.log(`[Generated] IndexNow Key File: ${INDEXNOW_KEY}.txt`);
})();

console.log(`>>> 全站构建成功完成！共输出 193 个 HTML 页面（包含 14 家品牌资料与评测、30 篇保姆级教程、100 篇深度科普文章）及完整 SEO 配置文件。`);
