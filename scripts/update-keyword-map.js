/**
 * 翻墙机场测评网 - 关键词映射表 (Keyword Map) 自动化同步生成脚本
 * 涵盖全站 192 个正式页面的核心关键词、搜索意图、URL、类型、优先级、Title 与 H1
 */

const fs = require('fs');
const path = require('path');
const { airports } = require('../data/airports.js');
const { glossaryData } = require('../data/siteContent.js');
const guidesData = require('../data/guidesFull.json');
const blogData = require('../data/articlesFull.json');

const rows = [
  ["Keyword", "Intent", "Target URL", "Page Type", "Priority", "Title", "H1"],
  ["机场推荐", "商业/调研", "index.html", "Pillar / Homepage", "P0", "2026最新机场推荐与性价比梯子节点评测指南 - 翻墙机场测评网", "2026年稳定优质机场推荐与网络加速节点选择指南"],
  ["梯子推荐", "商业/调研", "index.html", "Pillar / Homepage", "P0", "2026最新机场推荐与性价比梯子节点评测指南 - 翻墙机场测评网", "2026年稳定优质机场推荐与网络加速节点选择指南"],
  ["性价比机场", "商业/交易", "ranking/value/index.html", "Category / Ranking", "P0", "性价比机场排行榜 - 便宜好用高性价比梯子节点评测推荐", "2026高性价比机场排行榜：平价优质节点与每GB真实单价测算"],
  ["机场节点", "信息/调研", "airport/index.html", "Directory / Database", "P0", "机场节点大全与主流服务商测评数据库", "主流机场节点与网络服务商全面解析数据库"],
  ["vpn推荐", "商业/调研", "recommend/index.html", "Category / Overview", "P0", "优质VPN机场推荐专题 - 满足日常浏览与海外办公", "2026优质VPN机场与网络节点多维度推荐专题"],
  ["vpn机场", "商业/调研", "recommend/stable/index.html", "Category / Cluster", "P1", "稳定VPN机场推荐 - 高可用抗封锁专线节点合集", "稳定优先VPN机场推荐：抗封锁、低延迟与高可用线路精选"],
  ["vpn节点", "技术/信息", "guides/index.html", "Tutorial / Guide", "P1", "VPN节点配置与客户端连接新手使用教程中心 (30篇精选)", "VPN节点与机场客户端全平台安装配置教程中心 (30篇精选)"],
  ["低预算机场", "交易/预算", "recommend/budget/index.html", "Category / Cluster", "P1", "便宜低预算机场推荐 - 学生与轻度用户平价节点精选", "平价低预算机场推荐：小额月付与高性价比节点精选"],
  ["高端专线机场", "交易/品质", "recommend/premium/index.html", "Category / Cluster", "P1", "高端专线机场推荐 - 旗舰级IPLC/IEPL超低延迟节点", "高端专线机场推荐：旗舰级IPLC/IEPL内网专线节点精选"],
  ["新手机场推荐", "教育/引导", "recommend/beginner/index.html", "Category / Cluster", "P1", "新手入门机场推荐 - 一键导入客户端即用型节点", "新手入门机场推荐：免复杂配置、一键导入与专属折扣码"],
  ["AI节点推荐", "功能/场景", "recommend/ai/index.html", "Category / Cluster", "P1", "支持ChatGPT与Claude的AI专用机场节点推荐", "ChatGPT/Claude/Sora AI专用机场节点精选与原生IP指南"],
  ["流媒体机场推荐", "娱乐/场景", "recommend/streaming/index.html", "Category / Cluster", "P1", "Netflix/Disney+/YouTube流媒体4K解锁机场推荐", "流媒体解锁机场推荐：4K/8K极速画质与家庭影院畅享"],
  ["综合排行榜", "商业/对比", "ranking/overall/index.html", "Category / Ranking", "P0", "2026综合实力机场排行榜 - 速度、稳定性与服务全方位对比", "2026综合实力机场排行榜：多维度客观评分与排行"],
  ["低预算排行榜", "商业/预算", "ranking/budget/index.html", "Category / Ranking", "P1", "平价低预算机场排行榜 - 便宜月付与学生首选节点推荐", "低预算平价机场排行榜：百元以内高性价比套餐真实测算"],
  ["稳定性排行榜", "调研/品质", "ranking/stable/index.html", "Category / Ranking", "P1", "高稳定性机场排行榜 - 敏感时期抗封锁与可用率评估", "高稳定性机场排行榜：抗封锁能力与长期可用率综合榜单"],
  ["机场横向对比", "交互/工具", "compare/index.html", "Tool / Interactive", "P0", "机场横向对比工具 - 价格、流量、线路与协议实时PK", "机场在线多维度横向对比工具 (14家精选品牌)"]
];

// 14 机场品牌资料与评测
airports.forEach(a => {
  rows.push([
    `${a.name}资料`,
    "品牌/数据",
    `airport/${a.slug}/index.html`,
    "Brand Profile",
    "P1",
    `${a.name} 详细参数与套餐线路资料 - 翻墙机场测评网`,
    `${a.name} 官方数据档案与套餐线路概览`
  ]);
  rows.push([
    `${a.name}评测`,
    "评测/独立",
    `review/${a.slug}/index.html`,
    "Review",
    "P1",
    `${a.name} 深度客观评测：真实表现与优缺点全解析 - 翻墙机场测评网`,
    `${a.name} 深度客观评测：真实表现与优缺点全解析`
  ]);
});

// 5 大平台架构枢纽教程
const platformHubs = [
  { slug: "windows", kw: "Windows客户端教程", title: "Windows电脑端Clash Verge与v2rayN配置使用教程" },
  { slug: "android", kw: "Android客户端教程", title: "安卓手机Clash Meta与v2rayNG新手配置教程" },
  { slug: "ios", kw: "iOS客户端教程", title: "iPhone与iPad端Shadowrocket(小火箭)订阅导入教程" },
  { slug: "macos", kw: "macOS客户端教程", title: "Mac电脑端Clash Verge与Surge客户端配置指南" },
  { slug: "clash-basics", kw: "Clash基础与分流", title: "Clash订阅规则与PAC分流模式通俗解析" }
];
platformHubs.forEach(h => {
  rows.push([
    h.kw,
    "教程/操作",
    `guides/${h.slug}/index.html`,
    "Tutorial Hub",
    "P1",
    `${h.title} - 翻墙机场测评网`,
    h.title
  ]);
});

// 30 篇保姆级客户端教程
guidesData.forEach(g => {
  rows.push([
    g.shortTitle,
    "教程/操作",
    `guides/${g.slug}/index.html`,
    "Tutorial Guide",
    "P1",
    `${g.title} - 翻墙机场测评网`,
    g.title
  ]);
});

// 100 篇深度科普与行业观察文章
blogData.forEach(b => {
  rows.push([
    b.shortTitle,
    "知识/科普",
    `blog/${b.slug}/index.html`,
    "Article",
    "P2",
    `${b.title} - 翻墙机场测评网`,
    b.title
  ]);
});

// 名词百科
glossaryData.forEach(term => {
  rows.push([
    `${term.shortTitle}百科`,
    "词条/百科",
    `glossary/${term.slug}/index.html`,
    "Glossary",
    "P2",
    `${term.title} - 翻墙机场测评网`,
    term.title
  ]);
});

// 转换为 CSV 格式
const csvContent = rows.map(r => r.map(cell => `"${(cell || '').replace(/"/g, '""')}"`).join(',')).join('\n');
fs.writeFileSync(path.resolve(__dirname, '../docs/keyword-map.csv'), csvContent, 'utf8');
console.log(`[Generated] docs/keyword-map.csv (共 ${rows.length - 1} 条关键词映射记录)`);
