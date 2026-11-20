/**
 * 翻墙机场测评网 - 30 篇保姆级配置教程标准化与扩充脚本
 * 确保每篇教程拥有完整的 4 个 H2 实战章节、详细步骤、FAQ 排查与相关品牌推荐
 */

const fs = require('fs');
const path = require('path');

const rawGuides = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/guidesBulk.json'), 'utf8'));

const enrichedGuides = rawGuides.map((g, idx) => {
  const sections = [];
  if (g.h2_1 && g.p_1) sections.push({ h2: g.h2_1, p: g.p_1 });
  if (g.h2_2 && g.p_2) sections.push({ h2: g.h2_2, p: g.p_2 });
  if (g.h2_3 && g.p_3) {
    sections.push({ h2: g.h2_3, p: g.p_3 });
  } else {
    sections.push({
      h2: '三、连接性能优化与路由分流策略建议',
      p: '<p>在日常高频使用中，建议将客户端分流规则设置为【Rule 规则分流】或【绕过大陆 (Whitelist)】，确保微信、淘宝、网易云等国内应用直连不走代理，节约宝贵套餐流量。同时，开启 DNS 防污染与 IPv6 优先解析开关，能有效降低首包握手延迟。</p><p>若需要同时使用海外 AI 服务（如 ChatGPT/Claude）与流媒体（Netflix/Disney+），请优先选择标有【原生 IP】或【流媒体优化】的节点，并在客户端内将这些域名组单独绑定至对应专线节点，避免因 IP 频繁切换触发官方安全风控。</p>'
    });
  }

  // 第四章节：配合专属品牌节点最佳实践
  sections.push({
    h2: '四、高品质机场节点搭配与日常选型建议',
    p: '<p>客户端本身仅作为网络流量的转发工具，最终的连接稳定性与上网速度完全取决于后台导入的机场节点品质。对于重视晚高峰流畅度的用户，强烈建议搭配<strong>全专线网络（如微风网络、灵猫、隐形人、闪跃、无忧）</strong>，避开高峰期拥堵严重的直连公网线路。</p><p>新用户初次使用可选择月付套餐试水（如微风网络 ¥8起、飞V ¥4.9起、飞猫云 ¥7起），并在结账时填入专属优惠券（如 <code>weifeng90</code>、<code>flycat888</code>、<code>wuyou666</code>、<code>yxr888</code>、<code>shanyue</code>），既能保障使用体验，又能最大化降低试错成本。</p>'
  });

  // 常见 FAQ
  const faqs = [
    {
      q: '导入订阅后节点列表为空或提示“网络连接超时”怎么办？',
      a: '通常由于订阅链接被本地网络拦截或机场节点正在维护。请先尝试在浏览器中直接打开该订阅链接查看是否能正常返回文本数据；若能打开，检查客户端代理设置是否开启了系统全局拦截导致自身无法解析；若不能打开，请登录机场后台重新生成或复制专属订阅链接，并在客户端中关闭“通过代理更新订阅”。'
    },
    {
      q: '为什么连接节点后无法打开 Google 或 ChatGPT，但国内网站正常？',
      a: '首先检查客户端右上角或状态栏是否已经将【系统代理】打勾启用；其次检查电脑或手机本地系统时间是否准确（时间偏差超过 60 秒会导致 TLS 握手失败）；最后进入节点列表切换至其他低延迟香港或美日节点尝试。'
    },
    {
      q: '玩游戏或使用命令行工具时，为什么感觉代理没有生效？',
      a: '普通系统代理（System Proxy）主要通过环境变量或 Windows 注册表仅对标准浏览器生效。如果需要全局加速游戏或命令行（Git / npm / Docker），请在客户端设置中安装虚拟网卡核心并开启【TUN 模式 (TUN Mode)】，即可实现全系统网络透明代理。'
    }
  ];

  return {
    slug: g.slug,
    title: g.title,
    shortTitle: g.shortTitle,
    category: g.category,
    updated: g.updated || '2026-11-20',
    readTime: g.readTime || '8 分钟',
    summary: g.summary,
    sections,
    faqs
  };
});

fs.writeFileSync(path.resolve(__dirname, '../data/guidesFull.json'), JSON.stringify(enrichedGuides, null, 2), 'utf8');
console.log(`[Success] 标准化生成 30 篇详实教程数据: data/guidesFull.json (共 ${enrichedGuides.length} 篇)`);
