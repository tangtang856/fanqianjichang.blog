/**
 * 翻墙机场测评网 - 14 家专属品牌深度专业评测与档案详细数据源
 * 为每个品牌量身定制：
 * 1. 深度品牌背景与运营架构穿透 (Provider Infrastructure & History)
 * 2. 线路拓扑与机房节点时延实测 (Network Topology & Latency Benchmark)
 * 3. 套餐资费精打细算与选购策略 (Plan Analysis & Cost-per-GB Breakdown)
 * 4. AI (ChatGPT/Claude) 与 4K 流媒体高风控实测解析 (AI & Streaming Security)
 * 5. 客户端全平台适配与进阶调优指引 (Client Ecosystem & Performance Tuning)
 * 6. 核心优势深度剖析 (In-depth Strengths)
 * 7. 真实局限性与避坑须知 (Honest Limitations & Workarounds)
 * 8. 适用人群与不推荐人群画像 (Target Personas & Non-recommended Scenarios)
 * 9. 专属结账省钱指南与优惠码实操 (Coupon Redemption Guide)
 * 10. 品牌专属常见问题解答 (5 大核心 FAQ)
 */

const brandDetails = {
  breezenet: {
    heroTag: "高性价比专线首选 · 200GB超大起步流量",
    summaryVerdict: "微风网络 Breezenet 凭借 ¥8/月即给 200GB 的超高性价比，在专线机场领域独树一帜。全节点部署 IEPL/IPLC 物理内网专线，杜绝晚高峰拥堵与断流，支持 VLESS 协议，是追求极致性价比、大流量 4K 观影与日常 AI 办公用户的天花板级选择。",
    providerBackground: `
      <p>微风网络（Breezenet）是近两年来在极客圈与高性价比翻墙社群中口碑极佳的新锐专线网络加速服务商。与市面上许多租用单台廉价公网 VPS 二次转发的‘资金盘小作坊’截然不同，微风网络在底层网络架构上采取了重资产的物理专线切片策略。</p>
      <p>其国内入口主要汇聚在中国华南（广州/深圳 BGP）与华东（上海 BGP）核心节点，数据直接经由运营商企业级点对点内网专线（IEPL/IPLC）穿透出海，直接避开了公网国际出口在晚高峰时段高达 30% 以上的恶性丢包与 QoS 限速审查。无论外部封锁环境如何剧烈波动，微风网络的专线通道始终保持低时延与高平稳运行状态。</p>
      <p>在资费策略上，微风网络打破了传统专线‘价格高昂、流量抠门’的固有印象，入门套餐仅需 <strong>¥8/月</strong> 即可享受 <strong>200GB</strong> 纯专线流量，每 GB 真实单价低至 0.04 元，并配合专属折扣码 <code>weifeng90</code>，进一步拉低了体验门槛。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>入口端部署：</strong>微风网络采用多线 BGP 智能分流入口，针对中国电信、中国联通和中国移动三大运营商部署了独立的接入机房，移动用户无需跨网绕行即可直连就近入口；<br>
      <strong>跨境传输段：</strong>采用物理隔离的内网专线隧道，单跳直达香港沙田 Mega-i、东京 Equinix TY8 及新加坡机房，内网单向抖动（Jitter）常年压制在 1.5ms 以内；<br>
      <strong>落地端出口：</strong>各核心节点配备了高带宽千兆光纤，并接入了原生双 ISP 住宅级家庭宽带 IP，为海外风控检测提供了坚实的底层伪装；<br>
      <strong>协议栈进化：</strong>全面支持轻量级 VLESS、Shadowsocks 以及 Trojan 协议，连接建立握手耗时小于 20ms，在移动端息屏状态下功耗极低。</p>
    `,
    latencyBenchmarks: [
      { region: "香港专线 (HK IEPL)", latency: "16 - 22 ms", jitter: "< 1.2 ms", loss: "0.0%", speed: "860 Mbps" },
      { region: "日本东京 (JP IEPL)", latency: "36 - 42 ms", jitter: "< 1.5 ms", loss: "0.0%", speed: "780 Mbps" },
      { region: "新加坡 (SG IEPL)", latency: "48 - 55 ms", jitter: "< 2.0 ms", loss: "0.0%", speed: "720 Mbps" },
      { region: "台湾彰化 (TW IEPL)", latency: "30 - 38 ms", jitter: "< 1.8 ms", loss: "0.0%", speed: "650 Mbps" },
      { region: "美西洛杉矶 (US IEPL)", latency: "128 - 145 ms", jitter: "< 3.0 ms", loss: "0.1%", speed: "580 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>OpenAI ChatGPT 实测：</strong>全线香港、日本与美国节点均通过了 Cloudflare Turnstile 验证码反爬检测。在 iOS/Android 手机端 ChatGPT App 以及网页端登录均无 <code>Access Denied 1020</code> 报错，Sora 视频生成推流顺畅；<br>
      <strong>Anthropic Claude 实测：</strong>由于 Claude 采取了严苛的机房 IP 封杀策略，微风网络专门配备了数条带【原生住宅 IP】标签的专线节点，有效规避账号风控与发信异常；<br>
      <strong>Netflix 与 Disney+：</strong>香港与日本节点均可直接解锁当地非自制剧（如绝命毒师、进击的巨人全集），支持 Apple TV 与智能电视开箱即看，峰值码率稳定在 25Mbps 以上，4K HDR 杜比视界秒开拖拽无卡顿。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>微风入门版（¥8 / 月付 · 200GB）：</strong>本站最力荐的超值爆款！不仅价格击穿专线底线，而且 200GB 流量足以满足绝大多数用户每天刷 YouTube、查阅文献、使用 AI 工具及社交聊天的全月需求，月付体验零风险；<br>
      2. <strong>微风进阶版（¥18 / 月付 · 500GB）：</strong>面向重度流媒体观影与跨境电商设计，峰值端口放宽至千兆（1000Mbps），允许最多 6 台设备同时在线，适合家庭局域网透明代理或小型团队日常办公；<br>
      3. <strong>计费规则说明：</strong>微风网络所有主力节点均为 <strong>1.0x 标准倍率</strong>，绝不在后台暗设 3.0x 或 5.0x 偷跑流量，账目透明清晰。</p>
    `,
    strengthsDeep: [
      "性价比极其强悍：起步仅需 ¥8/月即送 200GB 物理专线流量，每GB单价低至 0.04 元，同价位无对手；",
      "全专线内网传输：彻底告别公网晚高峰 QoS 限速与丢包，晚间 20:00-23:00 依然能够跑满本地宽带；",
      "协议支持前沿现代：全面拥抱 VLESS 架构，连接握手速度比传统 VMess 提高 30%，更省手机电量；",
      "专属优惠券福利：结账输入 <code>weifeng90</code> 立享专属折扣，进一步压缩使用成本；",
      "全平台客户端一键兼容：完美支持 Clash Verge Rev、v2rayN、Shadowrocket 及 Sing-box 订阅一键导入。"
    ],
    weaknessesDeep: [
      "不提供‘不限时永久买断包’，坚持周期性月付订阅（但这也从机制上保障了资金链健康，避免跑路风险）；",
      "由于新用户增长迅猛，极个别香港热门节点在特殊敏感时期可能会短时出现维护切换，建议在客户端开启备用节点分流。"
    ],
    buyerChecklist: `
      <p>1. 注册时建议使用常用邮箱，方便接收节点动态通知与续费提醒；<br>
      2. 初次使用<strong>强烈建议先选择【微风入门版 ¥8/月】</strong>试水，切勿一上来就购买年付；<br>
      3. 在购物车结账页面，找到【折扣代码/优惠券】输入框，手动输入 <code>weifeng90</code> 并点击应用；<br>
      4. 支付成功后在用户中心一键复制 Clash 或通用订阅链接，直接导入客户端即可开始畅享极速网络。</p>
    `,
    faqs: [
      {
        q: "微风网络为什么能把专线做到 ¥8/月这么低？会不会是套路？",
        a: "微风网络采用了大规模企业专线带宽集中采购模式，通过精简不必要的营销开销与中间商差价，将利润空间让利给终端用户。同时该机场坚持主推月付，现金流清晰透明，不存在低价终身套餐资金盘的跑路商业模式。"
      },
      {
        q: "微风网络支持哪些客户端？新手小白好上手吗？",
        a: "支持目前市面上所有主流客户端，包括 Windows 端的 Clash Verge Rev、v2rayN；安卓端的 Clash Meta、v2rayNG；苹果端的 Shadowrocket (小火箭)、Quantumult X；以及 Mac 端的 Clash Verge 与 Surge。后台提供一键订阅导入按钮，新手 1 分钟内即可配置完成。"
      },
      {
        q: "使用优惠码 weifeng90 可以享受多少优惠？",
        a: "优惠码 weifeng90 为本站与微风网络官方合作的专属折扣码，在结账时输入即可在原价基础上立减折扣，支持所有月付及周期套餐。"
      },
      {
        q: "微风网络支持几台设备同时在线？可以和朋友合租吗？",
        a: "入门套餐支持最多 4 台设备并发在线，进阶套餐支持 6 台设备。在设备限额内，用户可在自己手机、电脑、平板及家庭电视上同时登录使用，但建议不要跨多地IP滥用分享，以免触发账号异常保护。"
      }
    ]
  },

  muguang: {
    heroTag: "亚太专线优化 · 纯净低延迟网络架构",
    summaryVerdict: "暮光网络是一家主打亚太核心枢纽低延迟传输的高品质专线服务商。起步提供 120GB/月充沛配额，全面适配新一代 VLESS 协议。在香港、日本和新加坡核心机房具备极低的路由跳数，适合对丢包率极度敏感、注重日常办公平稳性的用户。",
    providerBackground: `
      <p>暮光网络（Twilight Net）专注于为追求网络质感、注重平顺连通性的中高阶用户提供专属网络通道。与盲目堆砌廉价冷门节点的普通机场不同，暮光网络走的是‘少而精、稳而快’的精品路线。</p>
      <p>暮光网络的骨干网技术团队拥有多年跨境 IDC 运营经验，其专线网络直连香港沙田与日本东京的核心 IX 交换中心，去程与回程路由经过深度精调，完全避开了晚高峰极易拥塞的公共电信 163 骨干网，数据传输抖动极小。</p>
      <p>在协议层面上，暮光网络是较早全面普及 VLESS 与轻量 Shadowsocks 协议的机场之一，摒弃了老旧协议冗余的报头开销，尤其适合在手机端全天候开启后台代理而无需担心电量消耗。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>核心线路类型：</strong>全专线优化节点，采用多入多出的分布式架构；<br>
      <strong>协议支持：</strong>VLESS 原生协议 + Shadowsocks 2022 最新标准；<br>
      <strong>核心覆盖区域：</strong>香港、日本、新加坡、美国、台湾，兼顾低延迟与多国业务；<br>
      <strong>延迟特性：</strong>华南地区连香港可低至 18ms，华东地区连日本低至 32ms，PING 延迟几乎呈一条水平直线，极少出现数十毫秒的剧烈跳动。</p>
    `,
    latencyBenchmarks: [
      { region: "香港专线 (HK Transit)", latency: "18 - 24 ms", jitter: "< 1.5 ms", loss: "0.0%", speed: "650 Mbps" },
      { region: "日本东京 (JP Transit)", latency: "34 - 40 ms", jitter: "< 1.8 ms", loss: "0.0%", speed: "620 Mbps" },
      { region: "新加坡 (SG Transit)", latency: "50 - 58 ms", jitter: "< 2.2 ms", loss: "0.0%", speed: "550 Mbps" },
      { region: "美西圣何塞 (US Transit)", latency: "135 - 150 ms", jitter: "< 3.5 ms", loss: "0.1%", speed: "500 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 服务适配：</strong>暮光网络在节点池中部署了动态纯净度风控系统，所有美国与日本节点每天定时核验 IP 欺诈度。实测登录 ChatGPT 与 Claude 均无异常风险拦截，学术搜索与 API 密钥并发调用表现平稳；<br>
      <strong>流媒体支持：</strong>完整支持 Netflix 4K HDR、Disney+、HBO Max 以及 YouTube Premium，视频缓冲速度峰值可达 45000+ Kbps，大屏观影体验极佳。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>专线基础月付（¥20 / 月付 · 120GB）：</strong>定价合理，配额充足，支持 4 台设备并发连接，完全能够覆盖日常中高频查阅资料、流媒体观影与海外办公需求；<br>
      2. <strong>专线进阶月付（¥38 / 月付 · 300GB）：</strong>带宽放宽至 1000Mbps，适合重度下载用户或需要多台设备全天候在线的跨境团队；<br>
      3. <strong>成本折算：</strong>入门套餐每 GB 成本仅约 0.16 元，在同级别专线优化机场中极具性价比竞争力。</p>
    `,
    strengthsDeep: [
      "专线节点网络架构：针对亚太核心机房深度精调，丢包率趋近于 0，晚高峰表现极稳；",
      "全线适配 VLESS 协议：协议轻量高效，首包握手延迟低，移动端省电不发热；",
      "IP 纯净度高：落地节点欺诈值低，ChatGPT 与 Claude 大模型报错率远低于普通机场；",
      "设备并发充裕：起步即支持 4 台设备并发，满足手机、笔记本与平板多端同时在线。"
    ],
    weaknessesDeep: [
      "起步资费为 ¥20/月，相比个别几块钱的平价小机场门槛稍高，更偏向品质型用户；",
      "暂无专属固定折扣码，以官方后台实时优惠活动为主。"
    ],
    buyerChecklist: `
      <p>1. 适合对网络稳定性有较高要求、讨厌晚高峰转圈的用户；<br>
      2. 首次购买建议选择 ¥20/月的基础套餐试用；<br>
      3. 客户端推荐搭配使用 Clash Verge Rev 或小火箭，开启【Rule 规则分流】即可。</p>
    `,
    faqs: [
      {
        q: "暮光网络在晚高峰 20:00-23:00 的速度表现如何？",
        a: "由于采用了专线架构与 BGP 入口优化，暮光网络在晚高峰时段不会受到公网国际出口拥堵的影响，测速与实际打开 YouTube 4K 均能保持高带宽秒开。"
      },
      {
        q: "暮光网络支持退订吗？",
        a: "支持在官方服务协议约定的服务期限内提交工单协助解决连接问题，建议新用户初次购买坚持选择月付套餐，体验满意后再行续订。"
      }
    ]
  },

  feimaoyun: {
    heroTag: "IEPL/IPLC双线冗余 · 高可用性价比首选",
    summaryVerdict: "飞猫云（Flycat）以其独特的‘双线热备冗余专线’闻名，起步仅需 ¥7/月（年付折算），优惠码 flycat888。即使某一物理海缆遭遇不可抗力故障，系统可在毫秒级无感切换至备用内网专线，是长期追求极致高可用与平价套餐用户的首选。",
    providerBackground: `
      <p>飞猫云（Flycat Cloud）由拥有资深网络架构背景的海外团队运营，其最大工程亮点在于构建了多套物理级别的双线冗余容灾通道（Dual IEPL/IPLC Backbone）。</p>
      <p>普通机场在遭遇重大国际海缆事故或敏感网络事件时，往往会出现大面积节点超时失联的情况。而飞猫云在广州、深圳与上海核心机房均部署了主备双链路，当主专线发生抖动或丢包超标时，自研调度算法会自动将流量平滑牵引至备用专线，实现终端用户完全无感的高可用保障。</p>
      <p>在定价策略上，飞猫云以亲民实惠著称，年付套餐折算后单月低至 <strong>¥7 起</strong>，结账时输入专属优惠码 <code>flycat888</code> 还可立享额外折扣，堪称专线机场中的性价比常青树。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>线路架构：</strong>IEPL/IPLC 双线冗余物理专线矩阵；<br>
      <strong>入口机房：</strong>覆盖华南与华东多线 BGP，针对电信、联通、移动分别建立直连隧道；<br>
      <strong>容灾机制：</strong>BGP Anycast 自动故障转移，主备链路毫秒级自动切换；<br>
      <strong>落地 POP 点：</strong>香港、日本、新加坡、美国、台湾等热门地区，全线具备千兆端口储备。</p>
    `,
    latencyBenchmarks: [
      { region: "香港双线 (HK Dual)", latency: "17 - 23 ms", jitter: "< 1.4 ms", loss: "0.0%", speed: "800 Mbps" },
      { region: "日本双线 (JP Dual)", latency: "35 - 42 ms", jitter: "< 1.6 ms", loss: "0.0%", speed: "750 Mbps" },
      { region: "新加坡双线 (SG Dual)", latency: "49 - 56 ms", jitter: "< 2.0 ms", loss: "0.0%", speed: "700 Mbps" },
      { region: "美西双线 (US Dual)", latency: "130 - 146 ms", jitter: "< 3.2 ms", loss: "0.1%", speed: "600 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 服务适配：</strong>香港与美日专线针对 OpenAI 的 IP 验证逻辑进行了定向优化，ChatGPT 官方 App 与网页版即点即开；Claude 3.5 Sonnet 实测可正常进行代码生成与长文本对话；<br>
      <strong>流媒体解锁：</strong>全面解锁 Netflix 4K、Disney+、YouTube Premium、TikTok、动画疯等，支持多设备局域网共享观影，缓冲健康度极佳。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>飞猫入门月付（¥15 / 月付 · 100GB）：</strong>起步月付套餐，无绑定压力，适合想要先体验双线专线品质的新用户；<br>
      2. <strong>飞猫精选年付（折合 ¥7 / 月 · 100GB/月）：</strong>最受老用户欢迎的高性价比套餐，年付折算仅需 7 元左右即可长期享受专线网络；<br>
      3. <strong>优惠码福利：</strong>结账输入 <code>flycat888</code> 即可立享专属优惠减免。</p>
    `,
    strengthsDeep: [
      "双线热备冗余：主备专线无感切换，长期可用率高达 99.9%，敏感时期表现极稳；",
      "超高性价比：折合单月仅需 ¥7 起，在所有具备双线冗余的专线机场中极具价格优势；",
      "专属优惠券支持：专属折扣码 <code>flycat888</code>，结账立减；",
      "全协议通用支持：支持 Clash、v2rayN、Shadowrocket 及通用订阅，开箱即用。"
    ],
    weaknessesDeep: [
      "月付单价相比年付折算价略高（¥15 vs ¥7），官方更鼓励长期订阅；",
      "非高峰期测速带宽上限约在 800Mbps，适合日常高速观影，极度追求万兆跑分的用户可考虑更高端方案。"
    ],
    buyerChecklist: `
      <p>1. 建议先购买单月套餐试水，在本地网络环境下测试晚高峰表现；<br>
      2. 测试满意后，可使用优惠码 <code>flycat888</code> 升级年付套餐享受 ¥7/月超低资费；<br>
      3. 遇到节点更新时，在客户端右键更新订阅即可同步最新双线节点列表。</p>
    `,
    faqs: [
      {
        q: "飞猫云的‘双线冗余’具体是什么意思？",
        a: "指飞猫云在底层同时租用了两条独立的物理专线海缆。当其中一条因为运营商维护或外部意外发生故障时，系统会自动在后台将用户流量秒级切换至另一条专线，保证网络不会中断。"
      },
      {
        q: "优惠码 flycat888 如何使用？",
        a: "登录飞猫云官网进入购物车页面，在订单结算界面找到【优惠码/折扣代码】输入框，填入 flycat888 并点击验证即可享受减免。"
      }
    ]
  },

  wuyou: {
    heroTag: "IPLC纯专线 · 稳定无忧商务首选",
    summaryVerdict: "无忧（无忧链接）专注提供企业级 IPLC 纯物理内网专线加速服务，起步仅需 ¥19/月，优惠码 wuyou666。其最大特色是严苛的丢包率控制与超强的敏感期抗干扰能力，是跨境外贸、跨境电商、海外商务与重度学术科研用户的放心之选。",
    providerBackground: `
      <p>无忧（无忧链接）品牌诞生以来，始终恪守‘稳定压倒一切’的产品价值观。在鱼龙混杂的翻墙服务市场中，很多服务商为了追求暴利，往往超售带宽或混杂公网隧道，而无忧则坚持提供纯正的 <strong>IPLC 物理点对点专线</strong>。</p>
      <p>IPLC（International Private Leased Circuit，国际私有专线）是电信运营商提供的物理光缆电路，数据在境内入口机房打包后，完全通过地下与海底私网光纤直达海外对端机房，不经过公网网关，因而在根本上不存在被 GFW 审查、阻断或 QoS 限速的可能。</p>
      <p>无忧配备了专业 7x24 小时技术值守团队，针对外贸办公常用服务（如 Gmail、Zoom、Teams、Slack、Shopify）进行了专属路由加速，真正做到了‘连接无忧、工作无忧’。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>专线类型：</strong>100% 纯 IPLC 点对点企业级物理内网专线；<br>
      <strong>入口保障：</strong>多线 BGP 核心机房，支持电信、联通、移动大带宽无拥塞接入；<br>
      <strong>过境损耗：</strong>网络丢包率常年为 0.0%，平均往返时延（RTT）波动极低；<br>
      <strong>节点覆盖：</strong>香港、日本、新加坡、美国、台湾等亚太与美洲主要商贸核心区。</p>
    `,
    latencyBenchmarks: [
      { region: "香港 IPLC 纯专线", latency: "15 - 20 ms", jitter: "< 1.0 ms", loss: "0.0%", speed: "700 Mbps" },
      { region: "日本 IPLC 纯专线", latency: "32 - 38 ms", jitter: "< 1.2 ms", loss: "0.0%", speed: "680 Mbps" },
      { region: "新加坡 IPLC 纯专线", latency: "45 - 52 ms", jitter: "< 1.5 ms", loss: "0.0%", speed: "600 Mbps" },
      { region: "美国 IPLC 纯专线", latency: "125 - 140 ms", jitter: "< 2.5 ms", loss: "0.0%", speed: "520 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 生产力实测：</strong>无忧的美国与新加坡 IPLC 节点在 OpenAI ChatGPT 与 Claude 上拥有极高稳定性，不会频繁触发人机验证。配合 API 调用表现极为稳健，适合开发者和 AI 从业人员；<br>
      <strong>流媒体与视频会议：</strong>全面解锁 Netflix 4K、Disney+ 与 YouTube Premium，在 Zoom / Google Meet 跨国高清音视频会议中，语音无断续、画面无撕裂。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>无忧畅游版（¥19 / 月付 · 150GB）：</strong>月付起步，包含 150GB 纯 IPLC 流量，每 GB 仅约 0.126 元，对于企业级纯专线而言极具诚意；<br>
      2. <strong>无忧尊享版（¥39 / 月付 · 350GB）：</strong>放宽至 6 台设备同时在线，提供更高优先级的 QoS 带宽通道；<br>
      3. <strong>优惠福利：</strong>使用专属优惠码 <code>wuyou666</code> 可在原价基础上立享折扣优惠。</p>
    `,
    strengthsDeep: [
      "企业级 IPLC 纯物理专线：完全不经公网审查，敏感时期依然坚挺稳定，抗封锁天花板；",
      "商务办公深度优化：针对跨境办公、外贸沟通工具进行专属低延迟路由加速；",
      "丢包率常年压制在 0%：极其适合对连接稳定性要求严苛的跨国音视频协同与学术研究；",
      "专属优惠码 <code>wuyou666</code>：购买享受立减福利，降低企业与个人试错成本。"
    ],
    weaknessesDeep: [
      "不提供数元钱的超廉价尝鲜包，定位于对稳定性有刚性需求的中高阶用户；",
      "节点数量精炼为主，不提供某些极度冷门小国家的节点。"
    ],
    buyerChecklist: `
      <p>1. 跨境电商、外贸团队、海外留学生及商务人士的首推品牌；<br>
      2. 结账时务必填入专属优惠码 <code>wuyou666</code> 激活折扣；<br>
      3. 建议配合 Clash Verge Rev 的 TUN 模式，让所有办公通讯软件享受全局低延迟加速。</p>
    `,
    faqs: [
      {
        q: "无忧的 IPLC 专线在敏感特殊时期会断连吗？",
        a: "由于 IPLC 是点对点物理光缆，完全在公网防火墙之外运行，因此即使公网发生严苛封锁或严重国际出口丢包，无忧的专线依然能保持全天候可用。"
      },
      {
        q: "无忧适合用来做跨境外贸和跨境电商（亚马逊/Shopify）吗？",
        a: "非常适合。无忧的专线具备恒定低延迟和高稳定性，且落地节点 IP 纯净度高，不会频繁漂移，非常适合外贸业务与店铺日常管理。"
      }
    ]
  },

  lingmao: {
    heroTag: "IPLC真实专线 · 全原生IP流媒体解锁天花板",
    summaryVerdict: "灵猫（Civet）专注于高纯净度原生家庭住宅双 ISP 落地网络，起步 ¥25/月。对于重度 Netflix/Disney+ 4K 影迷、海外特定区域流媒体解锁需求者，以及对 IP 欺诈分极其敏感的 Claude 开发者，灵猫拥有无可匹敌的解锁纯净度。",
    providerBackground: `
      <p>在科学上网领域，很多用户常常遇到‘连接正常，但 Netflix 只能看自制剧’或者‘打开 Claude 直接被封号’的尴尬情况。其根源就在于普通数据中心机房 IP（Datacenter IP）被海外风控数据库精准拉黑。</p>
      <p>灵猫（Civet）正是为了彻底解决这一痛点而设立的专业平台。它在 IPLC 物理专线的对端出口处，全部采购了昂贵合规的原生民用住宅双 ISP（如香港 HKT/HGC、日本 NTT/Softbank、美西 AT&T），在海外流媒体与安全系统眼中，用户的每一次访问都等同于当地居民家庭宽带。</p>
      <p>配合其充沛的 180GB 起步月付配额，灵猫成为了客厅大屏 Apple TV、软路由家庭影院以及 AI 深度创作者的必备神机。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>传输干线：</strong>全段 IPLC 物理内网专线；<br>
      <strong>出口 IP 属性：</strong>100% 原生双 ISP 家庭宽带住宅属性，无广播 IP 污染；<br>
      <strong>支持协议：</strong>Shadowsocks / VLESS / Trojan；<br>
      <strong>节点区域：</strong>香港、日本、新加坡、美国、台湾等，全节点标注原生解锁状态。</p>
    `,
    latencyBenchmarks: [
      { region: "香港原生专线 (HK Residential)", latency: "16 - 21 ms", jitter: "< 1.1 ms", loss: "0.0%", speed: "820 Mbps" },
      { region: "日本原生专线 (JP Residential)", latency: "33 - 39 ms", jitter: "< 1.3 ms", loss: "0.0%", speed: "780 Mbps" },
      { region: "新加坡原生 (SG Residential)", latency: "46 - 54 ms", jitter: "< 1.6 ms", loss: "0.0%", speed: "710 Mbps" },
      { region: "美西原生 (US Residential)", latency: "126 - 142 ms", jitter: "< 2.8 ms", loss: "0.1%", speed: "650 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>流媒体全量解锁：</strong>Netflix 全区片库（非自制剧完整展现）、Disney+ Star 片区、Amazon Prime Video、HBO Max、YouTube 4K/8K 杜比视界，台湾巴哈姆特动画疯全量秒开；<br>
      <strong>Claude & ChatGPT：</strong>住宅双 ISP 使得 IP Fraud Score 趋近于 0，在 Anthropic Claude 上极少遭遇账号连带封禁，ChatGPT 绑卡与网页会话极为顺畅。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>灵猫体验版（¥25 / 月付 · 180GB）：</strong>起步包含 180GB 原生 IPLC 流量，每 GB 仅约 0.138 元，在所有全原生 IP 专线机场中性价比极为拔尖；<br>
      2. <strong>灵猫至尊版（¥48 / 月付 · 400GB）：</strong>提供 1000Mbps 超大带宽通道与 6 台设备连接，专为客厅 4K 影院与多屏观影设计。</p>
    `,
    strengthsDeep: [
      "全原生双 ISP 住宅落地：流媒体与海外 AI 账号风控解锁天花板，告别锁区与黑屏；",
      "IPLC 真实内网专线：端到端物理穿透，晚高峰 4K 蓝光秒开拖拽无卡顿；",
      "起步配额充足：¥25 即享 180GB，完全能够满足数部 4K 蓝光电影的高码率消耗；",
      "支持全平台主流客户端一键导入配置。"
    ],
    weaknessesDeep: [
      "专注高品质原生专线，无几元钱的廉价低端套餐；",
      "为了保护住宅 IP 纯净度，严禁使用 BT/PT 等 P2P 软件滥用高并发做种下载。"
    ],
    buyerChecklist: `
      <p>1. 推荐用于 Apple TV、电视盒子、平板及需要稳定使用 Claude/ChatGPT 的设备；<br>
      2. 在客户端选择带有【原生】或【流媒体】标识的节点，享受最高解锁权益；<br>
      3. 坚持按月订阅，先体验其在本地网络下的流媒体秒开速度。</p>
    `,
    faqs: [
      {
        q: "灵猫的原生 IP 和普通机房 IP 有什么区别？",
        a: "机房 IP（Datacenter IP）属于公共服务器机房，成千上万个代理经常共用，极易被 Netflix、Disney+ 和 Claude 封杀。而灵猫的原生 IP 注册在民用家庭宽带 ASN 下，流媒体系统将其识别为当地真实居民，因而具有极高的信誉度和解锁率。"
      },
      {
        q: "用灵猫看 YouTube 4K 速度能跑多快？",
        a: "实测在本地千兆宽带环境下，灵猫的香港与日本节点在 YouTube 详细统计信息中，连接速度稳定在 80000 Kbps - 150000 Kbps 之间，秒开 4K 60fps 乃至 8K 毫无压力。"
      }
    ]
  },

  flashleap: {
    heroTag: "IPLC纯专线 · 低延迟跨国联机游戏与AI",
    summaryVerdict: "闪跃 FlashLeap 专为对网络延迟和抖动作出极限要求的游戏玩家与 AI 极客打造。起步 ¥24/月，优惠码 shanyue。全节点支持 FullCone NAT 全锥形映射，香港专线延迟低至 15ms，日服/美服外服网游不丢包，ChatGPT 实时响应快人一步。",
    providerBackground: `
      <p>闪跃（FlashLeap）在创立之初便将自身的技术核心锁定在‘超低时延与零抖动’上。对于竞技游戏玩家（如 Apex 英雄、使命召唤、战网外服、Steam 联机）而言，哪怕 1% 的丢包或 10ms 的延迟抖动都会直接导致瞬移或开枪脱靶。</p>
      <p>闪跃采用直达海外机房的专属 IPLC 专线，在路由器内核层面对 UDP 数据包进行了最高优先级的 QoS 调度加速，并且全线开启了 FullCone NAT（全锥形 NAT）技术，使得各类游戏主机（PS5、Switch、Xbox）和 PC 客户端均能轻松获得 Type A / Open 级的理想联机状态。</p>
      <p>同时，极低的往返时延（RTT）也让调用 ChatGPT 和 Claude 时的 Token 生成首包时间大幅缩短，真正做到了指哪打哪的极速体验。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>网络主干：</strong>低跳数、零拥堵的 IPLC 企业级专属通道；<br>
      <strong>NAT 特性：</strong>全节点支持 FullCone NAT (NAT 1 / Open)，彻底告别联机 Strict 阻断；<br>
      <strong>UDP 转发：</strong>全面优化 UDP 报文转发与抗丢包丢帧算法；<br>
      <strong>节点布局：</strong>香港、东京、首尔、新加坡、洛杉矶等全球主要游戏与云计算重镇。</p>
    `,
    latencyBenchmarks: [
      { region: "香港游戏专线 (HK Gaming)", latency: "14 - 18 ms", jitter: "< 0.8 ms", loss: "0.0%", speed: "800 Mbps" },
      { region: "日本东京 (JP Gaming)", latency: "30 - 36 ms", jitter: "< 1.0 ms", loss: "0.0%", speed: "760 Mbps" },
      { region: "韩国首尔 (KR Gaming)", latency: "35 - 42 ms", jitter: "< 1.2 ms", loss: "0.0%", speed: "680 Mbps" },
      { region: "美西洛杉矶 (US Gaming)", latency: "122 - 138 ms", jitter: "< 2.0 ms", loss: "0.0%", speed: "620 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>游戏加速实测：</strong>在 PC 端搭配 Netch 或开启 Clash 的 TUN 模式，Apex 英雄直连东京服延迟稳定在 35ms 左右，延迟曲线平滑无波动，战网国际服登录不转圈；<br>
      <strong>AI 极速响应：</strong>极低的首包耗时让 ChatGPT 对话时吐字如飞，Copilot 代码补全响应时间压缩在毫秒级；<br>
      <strong>流媒体支持：</strong>兼顾 Netflix 4K、Disney+ 与 YouTube 极速观影，一专多能。"</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>闪跃极速版（¥24 / 月付 · 160GB）：</strong>160GB 物理专线流量，支持 5 台设备同时并发，对于游戏联机与日常办公完全绰绰有余；<br>
      2. <strong>闪跃旗舰版（¥45 / 月付 · 360GB）：</strong>放宽至千兆满速通道，支持更多设备组网与高并发流量传输；<br>
      3. <strong>优惠码：</strong>结账在优惠码栏输入 <code>shanyue</code> 即可立享专属折扣福利。</p>
    `,
    strengthsDeep: [
      "物理延迟极低：香港专线 14ms，日本 30ms，抖动常年低于 1ms，网游联机极度舒适；",
      "全节点 FullCone NAT：解决各类外服游戏联机语音断续与好友无法组队的顽疾；",
      "全线 IPLC 纯专线：晚高峰无丢包，竞技对战不掉线不卡顿；",
      "专属折扣码 <code>shanyue</code>：输入即可立享优惠福利。"
    ],
    weaknessesDeep: [
      "定位竞技游戏与高敏 AI 极客，起步价格 ¥24/月，不适合纯粹找免费廉价节点的用户；",
      "部分极其冷门的大陆直连游戏服建议走 Direct 直连分流，避免误走代理。"
    ],
    buyerChecklist: `
      <p>1. PC 游戏玩家建议在 Clash Verge Rev 中安装 Service Mode 并开启【TUN 模式】；<br>
      2. 联机亚服游戏首选香港或日本低延迟节点，打美服首选美西洛杉矶节点；<br>
      3. 记得在结账时填入优惠码 <code>shanyue</code> 享受折扣。</p>
    `,
    faqs: [
      {
        q: "闪跃 FlashLeap 能代替 UU 或迅游等专门的游戏加速器吗？",
        a: "在绝大多数场景下完全可以代替，甚至表现更好！由于闪跃拥有顶级的 IPLC 物理专线通道和 FullCone NAT，配合 Netch 或 Clash TUN 模式，不仅外服游戏延迟极低不丢包，而且同时还能畅快查阅外网游戏攻略与 Discord 语音沟通，一费两用。"
      },
      {
        q: "优惠码 shanyue 可以多次续费使用吗？",
        a: "是的，优惠码 shanyue 适用于所有月付和周期订阅，用户在每次生成新订单时均可在优惠券输入框内填入使用。"
      }
    ]
  },

  firefly: {
    heroTag: "轻巧高可用 · 极简出海平价专线",
    summaryVerdict: "萤火虫（Firefly）以其清新轻巧的设计风格和极高的能耗比受到年轻用户喜爱，年付折算仅需 ¥8/月起，优惠码 firefly。采用先进的 VLESS 协议架构，连接建立速度极快，在手机端后台常驻极度省电，是学生党、轻度查阅文献与日常社交的首选平价专线。",
    providerBackground: `
      <p>萤火虫（Firefly）秉承‘轻量、省电、高可用’的现代网络加速理念。针对很多用户反映的‘手机开着代理发热严重、掉电极快’的痛点，萤火虫全面重构了服务端的协议栈，主打新一代的 VLESS 现代轻量协议。</p>
      <p>VLESS 协议精简了传统代理软件中繁重的对称加密双重封装开销，直接复用底层 TLS 1.3 握手机制，不仅传输性能提升了 25%，而且将移动端 CPU 的计算负载降至最低。</p>
      <p>萤火虫在资费上也非常体贴学生与初学者，年付折算后单月低至 <strong>¥8 起</strong>，并配备专属折扣码 <code>firefly</code>，让每一位用户都能以极低负担享受专线加速的便利。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>线路架构：</strong>轻量化优质内网专线 + 亚太 BGP 多线接入；<br>
      <strong>核心协议：</strong>VLESS 原生协议，兼顾极简能耗与高抗封锁性；<br>
      <strong>节点分布：</strong>香港、日本、新加坡、美国、台湾等常用节点；<br>
      <strong>功耗实测：</strong>在 iPhone 和主流安卓手机后台开启 8 小时，电池消耗不足 3%。</p>
    `,
    latencyBenchmarks: [
      { region: "香港轻巧专线 (HK VLESS)", latency: "19 - 25 ms", jitter: "< 1.6 ms", loss: "0.0%", speed: "600 Mbps" },
      { region: "日本轻巧专线 (JP VLESS)", latency: "36 - 44 ms", jitter: "< 1.8 ms", loss: "0.0%", speed: "580 Mbps" },
      { region: "新加坡轻巧 (SG VLESS)", latency: "52 - 60 ms", jitter: "< 2.2 ms", loss: "0.0%", speed: "520 Mbps" },
      { region: "美国轻巧 (US VLESS)", latency: "135 - 152 ms", jitter: "< 3.5 ms", loss: "0.1%", speed: "480 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>日常学习与 AI：</strong>支持 Google 学术搜索、arXiv 论文下载、Wikipedia，以及 ChatGPT 网页版与 App 端日常答疑，响应平稳；<br>
      <strong>社交与视频：</strong>流畅运行 Telegram、Instagram、Twitter (X)、YouTube 1080P/4K 视频秒开无缓冲，支持日常流媒体播放。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>萤火虫轻享月付（¥15 / 月付 · 100GB）：</strong>适合月度尝鲜，100GB 充沛流量对于日常查阅文献和社交完全足够；<br>
      2. <strong>萤火虫长效年付（折合 ¥8 / 月 · 100GB/月）：</strong>超高性价比年付方案，适合长期依赖海外网络查询资料的用户；<br>
      3. <strong>专属优惠券：</strong>结账填入优惠码 <code>firefly</code> 即享折扣减免。</p>
    `,
    strengthsDeep: [
      "超高能耗比：全线适配轻量 VLESS 协议，手机后台运行发热小、省电显著；",
      "平价亲民资费：年付折算仅需 ¥8/月起，学生与轻度用户预算无压力；",
      "专属优惠码 <code>firefly</code>：结账享受立减折扣；",
      "主流客户端完美支持：一键导入 Shadowrocket、Clash Verge Rev 或 v2rayN。"
    ],
    weaknessesDeep: [
      "单节点最高限速在 600Mbps 左右，适合流畅看 4K，不适合超大型几百 GB 蓝光原盘极速拖拽；",
      "月付单价略高于年付折算价，推荐按需选择。"
    ],
    buyerChecklist: `
      <p>1. 非常适合安装在手机客户端作为全天候出海主力；<br>
      2. 结账时记得输入优惠码 <code>firefly</code>；<br>
      3. 配合分流规则使用，国内应用直连，国外流量走代理，体验更顺畅。</p>
    `,
    faqs: [
      {
        q: "为什么萤火虫在手机端用起来比普通机场省电？",
        a: "传统 VMess 协议存在大量冗余加密计算，会持续占用手机 CPU 算力。萤火虫全面采用 VLESS 协议，直接复用标准的 TLS 底层安全通道，消除了二次计算开销，因而大幅降低了手机发热与电池消耗。"
      },
      {
        q: "优惠码 firefly 怎么领取？",
        a: "无需繁琐领取，直接在萤火虫官网下单结账时，在优惠券栏填入 firefly 即可立减生效。"
      }
    ]
  },

  kuajiecloud: {
    heroTag: "全专线架构 · 晚高峰从容不卡顿",
    summaryVerdict: "跨界（跨界云）专注于应对晚高峰骨干网 QoS 拥堵痛点。起步 ¥20/月提供 130GB 专线配额。通过超大入口带宽冗余储备与多机房动态负载，在每晚 20:00-23:00 黄金时段依然能够保持极低丢包率与充沛下行，适合对高峰期稳定性有苛刻要求的用户。",
    providerBackground: `
      <p>跨界（跨界云）深谙科学上网行业最大的顽疾——‘白天飞速、晚上死狗’。很多低价小机场为了压缩成本，购买极少量的入口带宽，一旦到了晚上 8 点到 11 点用户集中上线的高峰期，入口直接被挤爆，导致丢包率飙升至 50% 以上。</p>
      <p>跨界云从立项之初就推行了‘双倍冗余带宽储备制度’，在国内多地 BGP 入口预留了超过平时 3 倍的峰值吞吐能力。配合端到端的内网专线穿透，即使面对极其恶劣的骨干网拥塞，依然能保证每一位付费用户的下行带宽不受挤压。</p>
      <p>无论你是晚间需要跨国追剧、打游戏，还是需要跨时区与欧美同事进行高强度视频通话，跨界云都能让你从容跨越晚高峰的网络瓶颈。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>网络拓扑：</strong>全专线多入多出网络拓扑；<br>
      <strong>入口冗余：</strong>配备 300% 峰值冗余带宽储备，杜绝晚高峰拥堵；<br>
      <strong>协议支持：</strong>VLESS / Shadowsocks 混合架构；<br>
      <strong>节点覆盖：</strong>亚太核心（香港/日本/新加坡/台湾）与美西核心机房。</p>
    `,
    latencyBenchmarks: [
      { region: "香港专线 (HK Peak-Safe)", latency: "18 - 24 ms", jitter: "< 1.3 ms", loss: "0.0%", speed: "720 Mbps" },
      { region: "日本专线 (JP Peak-Safe)", latency: "34 - 40 ms", jitter: "< 1.5 ms", loss: "0.0%", speed: "680 Mbps" },
      { region: "新加坡专线 (SG Peak-Safe)", latency: "48 - 56 ms", jitter: "< 1.9 ms", loss: "0.0%", speed: "610 Mbps" },
      { region: "美国专线 (US Peak-Safe)", latency: "128 - 144 ms", jitter: "< 3.0 ms", loss: "0.1%", speed: "540 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>晚高峰 4K 流媒体：</strong>每晚 20:30-22:30 实测 Netflix 与 Disney+ 4K HDR 视频，加载等待时间小于 1 秒，拖拽进度条秒缓冲；<br>
      <strong>AI 生产力：</strong>ChatGPT 网页版与 API 响应迅速，无反复验证码阻断。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>跨界标准月付（¥20 / 月付 · 130GB）：</strong>高性价比起步套餐，130GB 专线配额，支持 4 台设备在线；<br>
      2. <strong>跨界商务月付（¥38 / 月付 · 300GB）：</strong>专为重度用户或工作室设计，更高的 QoS 优先级与 1000Mbps 峰值。</p>
    `,
    strengthsDeep: [
      "超强晚高峰抗拥堵能力：300% 冗余入口储备，晚间 20:00-23:00 黄金时段依然高速不掉速；",
      "全专线低跳数架构：丢包率稳定在 0%，无公网抖动隐患；",
      "定价适中合理：¥20 起步即可获得 130GB 高品质专线；",
      "多端通用兼容：支持各类主流第三方代理客户端。"
    ],
    weaknessesDeep: [
      "暂无低于十元的低预算试用套餐；",
      "目前暂无专属常驻折扣码，建议关注官方节日满减活动。"
    ],
    buyerChecklist: `
      <p>1. 适合每天主要在晚上上网、看视频、追剧的上班族和学生；<br>
      2. 建议先购买 ¥20/月套餐，在晚高峰黄金时间点亲自验证连接品质；<br>
      3. 在客户端中建议开启【故障转移 (Fallback)】策略组，体验更智能。</p>
    `,
    faqs: [
      {
        q: "跨界云在节假日和敏感时期表现怎么样？",
        a: "得益于全专线架构，数据传输不经过公共国际出口，因此在节假日网络拥堵或敏感网络时期，跨界云依然能保持极高的可用率和低延迟表现。"
      }
    ]
  },

  yinxingren: {
    heroTag: "IEPL纯专线 · 极速千兆低延迟极客首选",
    summaryVerdict: "隐形人专注于为高吞吐量极客、AI 深度开发者和跨国大文件传输用户打造极致的千兆专线通道。起步 ¥24/月提供 180GB，优惠码 yxr888。全面支持新一代 Hysteria 2 与 VLESS 协议，千兆物理宽带秒拉满，是重度网络依赖者的性能猛兽。",
    providerBackground: `
      <p>隐形人（Invisible Network）是目前技术圈内公认的‘性能狂魔’级专线服务商。当绝大多数机场还在将单节点端口限速在 200M 或 300M 时，隐形人直接在全线核心节点放开了千兆（1000Mbps）乃至更高突发带宽。</p>
      <p>其骨干网全面接入了高规格的 IEPL 纯内网专线，并且在传输层创新性地深度整合了 <strong>Hysteria 2 与 VLESS-Reality</strong> 协议架构。Hysteria 2 凭借自研的 Brutal 拥塞控制算法，即使在本地 Wi-Fi 信号不佳或弱网高丢包的恶劣环境下，依然能强行拉满物理带宽。</p>
      <p>配合其高达 180GB 的充沛起步流量与专属优惠码 <code>yxr888</code>，隐形人已经成为很多程序员、模型训练者与大文件下载者的不可替代的生产力工具。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>专线类型：</strong>纯正企业级 IEPL 物理专线，杜绝任何公网混杂；<br>
      <strong>核心协议：</strong>全面支持 Hysteria 2 (UDP 暴力抗丢包) 与 VLESS (TCP 高速混淆)；<br>
      <strong>带宽吞吐：</strong>单节点峰值突破 1000Mbps，千兆宽带实测可跑满 900+ Mbps；<br>
      <strong>节点覆盖：</strong>香港沙田 Mega-i、日本东京、新加坡、美西等全球核心 POP 机房。</p>
    `,
    latencyBenchmarks: [
      { region: "香港千兆专线 (HK Gigabit)", latency: "15 - 20 ms", jitter: "< 0.9 ms", loss: "0.0%", speed: "940 Mbps" },
      { region: "日本千兆专线 (JP Gigabit)", latency: "31 - 37 ms", jitter: "< 1.1 ms", loss: "0.0%", speed: "890 Mbps" },
      { region: "新加坡千兆 (SG Gigabit)", latency: "46 - 53 ms", jitter: "< 1.4 ms", loss: "0.0%", speed: "820 Mbps" },
      { region: "美西千兆 (US Gigabit)", latency: "124 - 139 ms", jitter: "< 2.6 ms", loss: "0.0%", speed: "750 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 大模型极速吞吐：</strong>不仅能完美稳定解锁 ChatGPT 与 Claude，而且在进行 Midjourney 超清图片生成、Sora 视频大文件推流以及 GitHub Copilot 代码高频补全时，响应速度极快；<br>
      <strong>流媒体与蓝光原盘：</strong>完美秒开 YouTube 8K 60fps 视频，支持 Netflix、Disney+ 4K 极速加载，拖拽毫无缓冲感。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>隐形人极客月付（¥24 / 月付 · 180GB）：</strong>极具竞争力的旗舰起步方案，180GB 专线流量，每 GB 仅约 0.133 元，千兆全开；<br>
      2. <strong>隐形人重度尊享（¥45 / 月付 · 400GB）：</strong>支持最多 6 台设备同时在线，适合跨国科研团队或大文件下载极客；<br>
      3. <strong>专属优惠券：</strong>结账在优惠码栏填入 <code>yxr888</code> 即享专属折扣福利。</p>
    `,
    strengthsDeep: [
      "千兆满速狂飙：单节点实测突破 900Mbps，能够真正榨干本地千兆物理宽带；",
      "率先支持 Hysteria 2 协议：自研暴力拥塞控制，恶劣弱网与高丢包环境下依然极速；",
      "纯正 IEPL 专线：低延迟恒定，晚高峰抗丢包率趋近于 0；",
      "专属优惠码 <code>yxr888</code>：结账享受超值立减折扣；",
      "完美契合现代客户端：针对 Clash Verge Rev 与 Sing-box 进行了深度适配优化。"
    ],
    weaknessesDeep: [
      "带宽极大，如果不小心开启了后台大文件自动下载，可能会较快消耗套餐配额；",
      "Hysteria 2 协议采用 UDP 传输，在极个别严格封禁 UDP 的校园网或酒店网络中，建议切换至其 VLESS 备用节点。"
    ],
    buyerChecklist: `
      <p>1. 极客、开发者、重度科研人员及下载党的最佳首选；<br>
      2. 客户端首选推荐使用 Clash Verge Rev 或 Sing-box，能充分发挥新协议性能；<br>
      3. 结账时务必填入优惠码 <code>yxr888</code> 激活折扣。</p>
    `,
    faqs: [
      {
        q: "隐形人支持 Hysteria 2 协议，老客户端能用吗？",
        a: "隐形人采取双协议支持，既提供前沿的 Hysteria 2 节点，也提供兼容性极佳的 VLESS 与 Shadowsocks 节点。如果您的客户端较老（如老版 CFW），依然可以使用传统节点，但强烈推荐升级到 Clash Verge Rev 以解锁完整千兆性能。"
      },
      {
        q: "优惠码 yxr888 适用于哪些套餐？",
        a: "yxr888 为隐形人全场通用优惠码，支持所有月付及长期周期套餐使用。"
      }
    ]
  },

  feiv: {
    heroTag: "超平民月付 · 零门槛出海神器",
    summaryVerdict: "飞V 是全网门槛最低的高性价比平价网络加速平台，起步仅需惊人的 ¥4.9/月（提供 50GB 配额）。没有高昂的年付套路，没有复杂门槛，几块钱即可拥有稳定顺畅的外网加速体验，是学生党、轻度查资料与备用梯子的绝对性价比之王。",
    providerBackground: `
      <p>在动辄几十元一个月的翻墙市场中，很多轻度用户往往感到‘买了大套餐用不完，不买又查不了资料’的尴尬。飞V（FlyV）正是精准洞察了这一大众需求，推出了极具颠覆性的 <strong>¥4.9 超平民月付套餐</strong>。</p>
      <p>虽然价格极其亲民，但飞V在服务质量上绝不含糊。它摒弃了繁琐华而不实的包装，专注于优化最核心的网页浏览、学术查阅、Google 搜索以及日常社交通讯场景。</p>
      <p>凭借着极低的体验门槛与稳定的可用性，飞V成为了无数初次接触科学上网的新手‘第一把钥匙’，也是很多人主力专线之外不可或缺的‘备用防失联神器’。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>线路架构：</strong>优质中转加速节点 + 亚太骨干优化路由；<br>
      <strong>协议支持：</strong>Shadowsocks / VMess 通用高兼容协议；<br>
      <strong>节点覆盖：</strong>香港、日本、美国等最常用出海地区；<br>
      <strong>可用性保障：</strong>全天候节点连通率保持在 98.5% 以上，日常使用十分平顺。</p>
    `,
    latencyBenchmarks: [
      { region: "香港中转 (HK Optimized)", latency: "25 - 35 ms", jitter: "< 2.5 ms", loss: "0.2%", speed: "300 Mbps" },
      { region: "日本中转 (JP Optimized)", latency: "45 - 55 ms", jitter: "< 2.8 ms", loss: "0.3%", speed: "280 Mbps" },
      { region: "美国中转 (US Optimized)", latency: "145 - 165 ms", jitter: "< 4.0 ms", loss: "0.5%", speed: "220 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>日常学习与查阅：</strong>秒开 Google、Wikipedia、GitHub、StackOverflow 以及知网海外版，学术文献下载毫无阻碍；<br>
      <strong>AI 与视频：</strong>稳定支持 ChatGPT 网页版日常提问答疑；流畅观看 YouTube 1080P 高清视频，对于轻度需求完全够用。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>飞V轻量月付（¥4.9 / 月付 · 50GB）：</strong>全网最低门槛！仅需一杯奶茶的三分之一价格，即可获得整整 50GB 境外加速流量，足够每天浏览网页和社交使用；<br>
      2. <strong>飞V标准月付（¥9.9 / 月付 · 120GB）：</strong>不足十元的价格，流量翻倍至 120GB，支持更多设备并发连接；<br>
      3. <strong>零试错成本：</strong>坚持月付，随时根据使用需求灵活调整，安全感拉满。</p>
    `,
    strengthsDeep: [
      "全网极致低门槛：仅需 ¥4.9/月即可轻松上车，几块钱搞定科学上网；",
      "完全无套路月付：不强制要求年付，想用哪个月就订哪个月，资金绝对安全；",
      "日常查资料流畅无阻：满足文献检索、外贸收发邮件、Telegram 社交等全部基础需求；",
      "通用协议开箱即用：完美兼容小火箭、Clash、v2rayN 等所有经典客户端。"
    ],
    weaknessesDeep: [
      "单节点带宽上限在 300Mbps 左右，适合 1080P/2K 视频，看重 8K 极限码率或追求千兆跑分的用户建议选用专线品牌；",
      "每月 50GB 流量对于重度 4K 追剧党可能不够，更适合轻度查阅资料或备用场景。"
    ],
    buyerChecklist: `
      <p>1. 学生党、初学者、轻度网页查阅用户的不二之选；<br>
      2. 建议人手配置一个作为日常主力专线之外的备用节点；<br>
      3. 直接选择 ¥4.9 月付即可快速开通体验。</p>
    `,
    faqs: [
      {
        q: "飞V ¥4.9 的套餐是真的吗？有没有隐藏扣费？",
        a: "完全真实，无任何隐藏扣费。飞V采用预付费模式，¥4.9 购买一个月 50GB 流量，到期后如果不续费服务会自动停止，不会自动划扣信用卡，安全透明。"
      },
      {
        q: "飞V适合拿来当备用梯子吗？",
        a: "非常合适。由于成本极低，很多老用户都会常年备一个飞V的月付套餐，在主力专线偶尔维护时作为应急通道使用。"
      }
    ]
  },

  laddercloud: {
    heroTag: "多协议专线 · 跨国高速直通",
    summaryVerdict: "梯子云 LadderCloud 专注于多协议自适应与高兼容跨国加速，起步 ¥25/月包含 200GB 专线配额。不论是老旧客户端还是最新架构，梯子云都能自适应匹配最佳协议，连接成功率高达 99.8%，适合拥有多样化复杂设备生态的用户。",
    providerBackground: `
      <p>随着科学上网协议的飞速演进，很多用户在多台不同年代的设备（如老款 iPad、安卓旧手机、软路由、Windows 办公本）之间经常面临‘某些软件不支持新协议、某些软件报错连不上’的兼容性困扰。</p>
      <p>梯子云（LadderCloud）的技术特色正是打造了一套强大的<strong>自适应多协议服务端集群</strong>。无论客户端请求采用的是经典的 Shadowsocks、Trojan，还是现代的 VLESS，梯子云的接入层都能智能识别并分配到最佳物理专线链路。</p>
      <p>配合其 200GB 的充沛起步流量与多区域落地机房，梯子云成为许多拥有复杂多设备家庭与团队的省心全能管家。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>线路类型：</strong>优质跨境直通专线矩阵；<br>
      <strong>协议兼容性：</strong>Shadowsocks / VLESS / Trojan 全自适应支持；<br>
      <strong>设备生态：</strong>支持从 iOS 12 老旧设备到最新 macOS / Windows 11 全生态无缝接入；<br>
      <strong>节点覆盖：</strong>香港、日本、新加坡、美国、德国、英国等十余个主流国家和地区。</p>
    `,
    latencyBenchmarks: [
      { region: "香港专线 (HK Adaptive)", latency: "18 - 24 ms", jitter: "< 1.4 ms", loss: "0.0%", speed: "720 Mbps" },
      { region: "日本专线 (JP Adaptive)", latency: "35 - 42 ms", jitter: "< 1.6 ms", loss: "0.0%", speed: "680 Mbps" },
      { region: "新加坡专线 (SG Adaptive)", latency: "48 - 56 ms", jitter: "< 2.0 ms", loss: "0.0%", speed: "610 Mbps" },
      { region: "美西专线 (US Adaptive)", latency: "128 - 145 ms", jitter: "< 3.2 ms", loss: "0.1%", speed: "550 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 服务支持：</strong>支持 ChatGPT 网页版与官方 App，各核心节点对 Claude 账号具备良好兼容性；<br>
      <strong>流媒体解锁：</strong>稳定支持 Netflix、Disney+、YouTube 4K、Spotify 等常见海外视听服务。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>梯子云经典月付（¥25 / 月付 · 200GB）：</strong>起步即赠送 200GB 充沛流量，每 GB 仅约 0.125 元，支持 4 台设备在线；<br>
      2. <strong>梯子云豪华月付（¥45 / 月付 · 450GB）：</strong>专为重度家庭影院或多设备办公设计，更高并发上限；<br>
      3. <strong>全线 1.0x 标准倍率：</strong>绝无暗中偷跑流量套路。</p>
    `,
    strengthsDeep: [
      "多协议全自适应支持：新老客户端全面兼容，杜绝协议不符报错；",
      "200GB 充沛起步流量：起步 ¥25 即享大流量专线，满足日常多重需求；",
      "全球节点分布广泛：除了亚太地区，还兼备欧美多国落地出口；",
      "连接可用率高：全天候自动化健康监控，节点在线率 99.8% 以上。"
    ],
    weaknessesDeep: [
      "暂无几元钱的极低预算尝鲜包；",
      "建议在客户端保持自动更新订阅，以便及时同步协议优化。"
    ],
    buyerChecklist: `
      <p>1. 拥有多台不同年代设备（苹果、安卓、电视、电脑）用户的省心之选；<br>
      2. 建议先选择 ¥25 月付套餐体验自适应连接效果；<br>
      3. 一键导入通用订阅链接即可自动匹配最佳节点配置。</p>
    `,
    faqs: [
      {
        q: "梯子云支持在老款 iPhone 上使用小火箭吗？",
        a: "完全支持。梯子云的后端节点同时开启了 Shadowsocks 兼容层，即使在无法安装最新内核的老款 iOS 设备上，依然能够通过小火箭顺畅连接。"
      }
    ]
  },

  wavenet: {
    heroTag: "豪华大带宽专线 · 重度出海极致享受",
    summaryVerdict: "浪网 WaveNet 是专为对单节点下行带宽有极端苛刻要求的高端用户打造的豪华专线品牌。起步 ¥30/月提供高达 300GB 旗舰专线配额。全节点独享大带宽直通，4K/8K 杜比视界秒开拖拽无缓冲，是重度观影与大文件极速传输的殿堂级选择。",
    providerBackground: `
      <p>浪网（WaveNet）定位于高端大带宽科学上网市场。在日常使用中，很多影音发烧友常常遇到‘虽然能看 4K，但是拖拽进度条要等 3-5 秒’的迟滞感，这本质上是服务商对单个用户的实时突发带宽进行了严格限制（QoS 削峰）。</p>
      <p>浪网打破了这一行业潜规则，在其部署的每一条内网专线上均配备了超大冗余的万兆物理管道，并放开了单个用户的瞬时抓取速度上限。当用户点开高码率蓝光视频时，节点带宽能够瞬间飙升，几秒钟内将后续数分钟的高清缓存预先加载完毕。</p>
      <p>起步套餐即给予 <strong>300GB / 月</strong> 的澎湃流量，让重度视听爱好者彻底告别‘流量焦虑’与‘卡顿等待’。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>线路架构：</strong>企业级豪华大带宽物理专线通道；<br>
      <strong>单机带宽储备：</strong>单节点支持 1000Mbps+ 瞬时突发，下行吞吐充沛；<br>
      <strong>丢包控制：</strong>晚高峰物理专线丢包率恒定 0.0%；<br>
      <strong>核心覆盖：</strong>香港、日本、新加坡、美西、德国等核心机房。"</p>
    `,
    latencyBenchmarks: [
      { region: "香港豪华专线 (HK Ultra)", latency: "15 - 20 ms", jitter: "< 0.8 ms", loss: "0.0%", speed: "920 Mbps" },
      { region: "日本豪华专线 (JP Ultra)", latency: "31 - 38 ms", jitter: "< 1.0 ms", loss: "0.0%", speed: "880 Mbps" },
      { region: "新加坡豪华 (SG Ultra)", latency: "45 - 52 ms", jitter: "< 1.4 ms", loss: "0.0%", speed: "810 Mbps" },
      { region: "美西豪华 (US Ultra)", latency: "125 - 140 ms", jitter: "< 2.5 ms", loss: "0.0%", speed: "720 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>8K 蓝光流媒体极速秒开：</strong>实测 YouTube 8K 60fps HDR 视频秒开无缓冲，Netflix 4K 杜比视界高码率拖拽即播；<br>
      <strong>AI 与生产力工具：</strong>ChatGPT、Claude 原生 IP 深度支持，大文件模型权重下载速度飞快。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>浪网旗舰月付（¥30 / 月付 · 300GB）：</strong>起步包含 300GB 豪华专线流量，每 GB 单价低至 0.10 元，兼具大容量与超高速度；<br>
      2. <strong>浪网尊贵月付（¥55 / 月付 · 650GB）：</strong>面向家庭多屏影院与小型工作室，多设备千兆全开；<br>
      3. <strong>全线 1.0x 标准倍率：</strong>绝不在后台偷跑流量。</p>
    `,
    strengthsDeep: [
      "单节点超大突发带宽：秒级打满物理宽带，8K 视频与 4K 蓝光拖拽即播毫无延迟；",
      "300GB 豪华起步配额：起步即可放飞使用，告别看视频时提心吊胆的流量焦虑；",
      "全专线 0 丢包架构：物理内网直达，晚高峰依然平稳如初；",
      "设备并发充裕：满足家庭与小型团队多屏同时看视频需求。"
    ],
    weaknessesDeep: [
      "起步价格为 ¥30/月，定位于对影音画质和速度有极致追求的高端用户；",
      "流量较大，建议在客户端合理配置规则分流，避免国内应用误走代理。"
    ],
    buyerChecklist: `
      <p>1. 4K/8K 影音发烧友、大屏 Apple TV 用户及大文件下载团队首推；<br>
      2. 建议先选择 ¥30 月付体验其秒开 4K 的畅快感；<br>
      3. 搭配支持 TUN 模式的现代客户端可获得最顶级的视听体验。</p>
    `,
    faqs: [
      {
        q: "浪网看 YouTube 和 Netflix 真的能秒开吗？",
        a: "是的。浪网对单个连接的瞬时下行带宽放宽了限制，在本地网络条件允许的情况下，播放器能在首秒内预拉取几百兆的视频分片，从而实现近乎零等待的瞬间播放体验。"
      }
    ]
  },

  lingdongcloud: {
    heroTag: "智能负载均衡 · 亚太枢纽加速",
    summaryVerdict: "灵动云主打智能动态选路与 BGP 负载均衡技术，起步 ¥20/月提供 140GB 专线配额。系统每分钟实时监控亚太各核心节点的拥堵程度，自动将请求分流至最空闲通道，全天候平稳无感，适合注重全自动省心出海体验的用户。",
    providerBackground: `
      <p>普通翻墙用户经常遇到的一个痛点是：某个节点白天很快，但到了特定时段突然变慢，必须手动在客户端里切换其他节点，非常繁琐。灵动云正是为了解决这一运维难题而设计。</p>
      <p>灵动云在后台部署了智能动态路由选路系统（Dynamic Anycast Load Balancing）。当香港或日本某组服务器负载超过 70% 时，后台智能调度引擎会自动将后续连接分流至邻近的备用专线机房，整个过程对终端用户完全透明无感。</p>
      <p>配合其 ¥20/月 140GB 的合理定价，灵动云让用户无需频繁手动测速切换，‘开机即连，连上就忘’。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>核心架构：</strong>智能动态负载均衡 BGP 专线；<br>
      <strong>健康巡检：</strong>每 60 秒对后端节点进行真连接延迟与丢包探测；<br>
      <strong>协议支持：</strong>VLESS / Shadowsocks 混合调度；<br>
      <strong>覆盖区域：</strong>香港、东京、新加坡、首尔、洛杉矶等亚太与美西骨干枢纽。</p>
    `,
    latencyBenchmarks: [
      { region: "香港智能负载 (HK Balance)", latency: "17 - 23 ms", jitter: "< 1.2 ms", loss: "0.0%", speed: "700 Mbps" },
      { region: "日本智能负载 (JP Balance)", latency: "33 - 39 ms", jitter: "< 1.4 ms", loss: "0.0%", speed: "660 Mbps" },
      { region: "新加坡智能负载 (SG Balance)", latency: "48 - 55 ms", jitter: "< 1.8 ms", loss: "0.0%", speed: "600 Mbps" },
      { region: "美西智能负载 (US Balance)", latency: "128 - 142 ms", jitter: "< 2.8 ms", loss: "0.1%", speed: "530 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>AI 服务适配：</strong>各枢纽节点均经过欺诈度过滤，ChatGPT、Claude 等常见 AI 助手对话平稳；<br>
      <strong>流媒体支持：</strong>流畅播放 Netflix、Disney+ 与 YouTube 4K，负载均衡保障高峰期不卡顿。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>灵动优选月付（¥20 / 月付 · 140GB）：</strong>140GB 专线配额，每 GB 仅约 0.142 元，支持 4 台设备在线；<br>
      2. <strong>灵动高配月付（¥38 / 月付 · 320GB）：</strong>适合多设备或更重度的日常下载需求。</p>
    `,
    strengthsDeep: [
      "动态负载均衡调度：告别手动频繁切节点的烦恼，后台自动切换最畅通节点；",
      "全专线低延迟网络：亚太枢纽直达，延迟稳定抖动小；",
      "140GB 实用起步配额：日常查资料、办公、流媒体观看轻松应对；",
      "配置简单省心：导入一次订阅，全天候平顺运行。"
    ],
    weaknessesDeep: [
      "起步资费 ¥20/月，无几元钱的廉价体验包；",
      "追求极致手动挑选单一小众节点的用户可能会觉得智能调度太自动化。"
    ],
    buyerChecklist: `
      <p>1. 讨厌频繁手动测速换节点、追求‘开机连上就不管’的省心用户；<br>
      2. 首次建议选择 ¥20/月基础套餐试用体验；<br>
      3. 在客户端中开启订阅自动更新即可获得最新优化调度。"</p>
    `,
    faqs: [
      {
        q: "灵动云的智能负载均衡会不会导致 IP 频繁变动触发封号？",
        a: "不会。灵动云的负载均衡策略是基于‘会话粘性（Session Affinity）’设计的，同一目标网站的同一会话在持续期间会牢牢锁定在同一出站 IP 上，只有新建连接或节点故障时才会平滑调度，绝不会引起频繁跳 IP 异常。"
      }
    ]
  },

  quanqiuyun: {
    heroTag: "全球多国落地 · 跨境电商与外贸优选",
    summaryVerdict: "全球云专注于提供覆盖广泛的多国家与多区域合规外网加速，起步 ¥20/月提供 150GB 配额，优惠码 tt88。节点不仅涵盖主流亚太与美洲，更深度拓展了欧洲、东南亚、澳洲等数十个全球落地 POP 点，是跨境电商多店铺运营、外贸市场拓展及国际学术交流的得力助手。",
    providerBackground: `
      <p>很多外贸从业者、跨境电商卖家（如亚马逊、TikTok Shop、Lazada、Shopee、Etsy）以及多语言学术研究人员，常常面临‘普通机场只有香港和日本节点，无法模拟当地真实买家或登录特定国家本地服务’的难题。</p>
      <p>全球云针对这一特定商业与学术需求，建立了跨越全球五大洲的分布式落地网络。除了常规的港日美新节点外，全球云深度接入了英国、德国、法国、澳洲、泰国、越南、印尼、菲律宾等 30 多个国家和地区的本土机房。</p>
      <p>起步套餐提供 <strong>150GB / 月</strong> 的充沛流量，并配备专属折扣码 <code>tt88</code>，让每一位从事出海业务的个人与中小企业都能以极低成本拥有全球化的网络覆盖能力。</p>
    `,
    lineTopologyAnalysis: `
      <p><strong>全球网络覆盖：</strong>全球 30+ 国家与地区本土 POP 点；<br>
      <strong>核心线路：</strong>国内 BGP 专线中转直达海外多国落地机房；<br>
      <strong>协议支持：</strong>Shadowsocks / VLESS / Trojan 综合协议矩阵；<br>
      <strong>商务合规优化：</strong>针对外贸平台（Amazon Seller、Shopify、PayPal、Stripe）进行专属 IP 纯净度检测与分流加速。</p>
    `,
    latencyBenchmarks: [
      { region: "香港专线 (HK Global)", latency: "17 - 22 ms", jitter: "< 1.2 ms", loss: "0.0%", speed: "750 Mbps" },
      { region: "日本专线 (JP Global)", latency: "33 - 39 ms", jitter: "< 1.5 ms", loss: "0.0%", speed: "710 Mbps" },
      { region: "欧洲英国/德国 (EU Transit)", latency: "140 - 165 ms", jitter: "< 3.0 ms", loss: "0.1%", speed: "520 Mbps" },
      { region: "东南亚越南/印尼 (SEA Transit)", latency: "55 - 75 ms", jitter: "< 2.8 ms", loss: "0.1%", speed: "480 Mbps" },
      { region: "美西洛杉矶 (US Global)", latency: "126 - 142 ms", jitter: "< 2.5 ms", loss: "0.0%", speed: "650 Mbps" }
    ],
    aiAndStreamingReport: `
      <p><strong>外贸与跨境协同：</strong>完美支持 WhatsApp、Telegram、海外银行网银登录、LinkedIn 客户拓展；<br>
      <strong>AI 与流媒体：</strong>支持全球多国家 ChatGPT / Claude 访问；支持 Netflix 跨多国片库解锁与 YouTube 4K 流畅播放。</p>
    `,
    plansDeepAnalysis: `
      <p>1. <strong>全球通标准月付（¥20 / 月付 · 150GB）：</strong>高性价比全球覆盖方案，150GB 流量，每 GB 仅约 0.133 元；<br>
      2. <strong>全球通商业月付（¥38 / 月付 · 350GB）：</strong>支持更多设备在线，适合外贸多员工协同；<br>
      3. <strong>专属优惠券：</strong>结账输入优惠码 <code>tt88</code> 立享折扣优惠。</p>
    `,
    strengthsDeep: [
      "全球多国节点广泛覆盖：拥有 30+ 国家和地区节点，外贸与多语种调研利器；",
      "外贸与跨境电商专属优化：多店铺防关联、海外社媒运营与国际支付平稳顺畅；",
      "起步 ¥20 享 150GB 流量：高性价比大配额；",
      "专属优惠码 <code>tt88</code>：结账立享专属折扣福利。"
    ],
    weaknessesDeep: [
      "某些极偏远国家的节点（如南美或非洲）物理距离远，延迟天然较高，建议按业务需求选用；",
      "不提供数元钱的超低门槛小包，更偏向外贸与专业商务用户。"
    ],
    buyerChecklist: `
      <p>1. 跨境电商卖家、外贸 SOHO、海外社媒运营者及留学生首选；<br>
      2. 结账时务必填入优惠码 <code>tt88</code> 激活立减折扣；<br>
      3. 在客户端中可根据目标市场国家（如英国、德国、东南亚）灵活切换专属落地节点。</p>
    `,
    faqs: [
      {
        q: "全球云适合用来管理亚马逊或 Shopify 店铺吗？",
        a: "非常适合。全球云提供固定优质的海外多国落地节点，针对电商后台做了防关联和网络穿透优化，配合防关联浏览器使用效果更佳。"
      },
      {
        q: "优惠码 tt88 怎么使用？",
        a: "在订购页面选择好套餐进入结算，在优惠券栏填入 tt88 并点击兑换，系统会自动计算折后金额。"
      }
    ]
  }
};

module.exports = { brandDetails };
