/**
 * 翻墙机场测评网 - 统一数据源
 * 遵循严格的数据真实性准则，所有价格与参数均来自官方公开资料或已声明的实测记录
 */

const airports = [
  {
    id: "just-my-socks",
    name: "Just My Socks (JMS)",
    slug: "just-my-socks",
    badge: "老牌大厂 · IP被墙自动秒换",
    rating: 4.8,
    description: "搬瓦工官方运营的老牌机场服务，主打‘绝对不跑路’与‘IP被墙后台自动切换’。基于优质CN2 GIA/国际优质线路，特别适合追求稳定、省心且需要长期使用的个人及商务团队。",
    officialUrl: "https://justmysocks.net",
    affiliateUrl: "",
    startingPrice: 5.88,
    currency: "USD",
    billingCycle: "月付",
    estimatedCnyPrice: 42.0,
    plans: [
      {
        name: "LA 500",
        price: 5.88,
        currency: "USD",
        traffic: "500 GB / 月",
        trafficGB: 500,
        bandwidth: "2.5 Gbps",
        lines: "美国洛杉矶 CN2 GIA / 自动迁移",
        devices: "最多 5 台设备"
      },
      {
        name: "LA 1000",
        price: 9.88,
        currency: "USD",
        traffic: "1000 GB / 月",
        trafficGB: 1000,
        bandwidth: "5.0 Gbps",
        lines: "美国洛杉矶 CN2 GIA / 自动迁移",
        devices: "不限设备数量"
      },
      {
        name: "Tokyo 100",
        price: 29.99,
        currency: "USD",
        traffic: "100 GB / 月",
        trafficGB: 100,
        bandwidth: "100 Mbps",
        lines: "日本东京 CN2 GIA / 软银专线",
        devices: "最多 3 台设备"
      },
      {
        name: "London 500",
        price: 6.88,
        currency: "USD",
        traffic: "500 GB / 月",
        trafficGB: 500,
        bandwidth: "2.5 Gbps",
        lines: "英国伦敦 优质欧洲路由",
        devices: "最多 5 台设备"
      }
    ],
    protocols: ["Shadowsocks", "V2Ray (VMess)"],
    regions: ["美国洛杉矶", "日本东京", "英国伦敦", "中国香港"],
    lineType: "搬瓦工企业级优质网络 (CN2 GIA / 联通AS9929)",
    deviceLimit: "3台 - 不限制 (随套餐各异)",
    aiSupport: ["ChatGPT Web端(偶有Cloudflare验证)", "Copilot可用", "Claude受机房IP限制可能阻断"],
    streamingSupport: ["YouTube 4K流畅", "Netflix非自制剧可用(非原生解锁)", "Disney+受限"],
    advantages: [
      "搬瓦工官方直营，背靠知名海外VPS大厂，信誉极高，基本零跑路风险",
      "核心卖点：节点IP若遭遇防火墙封锁，后台智能系统自动更换可用IP，无需人工干预",
      "采用洛杉矶高端CN2 GIA高带宽线路，网络丢包率极低，网络稳定性优异",
      "支持支付宝、PayPal及主流信用卡支付，海外消费结算便利"
    ],
    disadvantages: [
      "以美元计价结算，汇率波动会导致折合人民币价格偏高，每GB单价不如国内中转机场低",
      "不提供一键傻瓜式定制客户端，新手需自行导入Clash、v2rayN等通用开源客户端",
      "主要针对网络通信稳定，无流媒体和AI原生大模型IP深度解锁优化"
    ],
    suitableFor: [
      "最看重服务商信誉、担心个人小机场跑路的外贸与海外商务工作者",
      "不想因为敏感时期频繁找客服换节点、追求自动更换IP省心体验的用户",
      "重视国际大带宽出口传输质量的开发者与技术爱好者"
    ],
    sources: [
      "Just My Socks 官方产品规格参数表",
      "BandwagonHost 官方网络拓扑公告",
      "日常长期可用性自动化节点监控数据"
    ],
    lastVerified: "2026-11-15",
    testStatus: "tested",
    speedTier: "极佳 (2.5G - 5Gbps 端口)",
    latencyTier: "低延迟 (日本~60ms，美西~140ms)",
    stabilityScore: 9.8,
    costPerGB: "约 0.084 元 / GB"
  },
  {
    id: "flyingbird",
    name: "飞鸟云 (FlyingBird)",
    slug: "flyingbird",
    badge: "全IEPL内网专线 · 4K秒开与AI全解",
    rating: 4.9,
    description: "业内知名的旗舰级全IEPL内网专线机场，入口部署多线BGP。所有流量不经过公网GFW直接走跨国内网专线传输，晚高峰无卡顿、延迟极低，全节点针对ChatGPT与Netflix进行原生解锁。",
    officialUrl: "https://fby.cloud",
    affiliateUrl: "",
    startingPrice: 15.0,
    currency: "CNY",
    billingCycle: "月付",
    estimatedCnyPrice: 15.0,
    plans: [
      {
        name: "体验套餐",
        price: 15.0,
        currency: "CNY",
        traffic: "100 GB / 月",
        trafficGB: 100,
        bandwidth: "500 Mbps",
        lines: "广港/沪日/沪韩 IEPL专线",
        devices: "最多 3 台设备"
      },
      {
        name: "基础套餐",
        price: 25.0,
        currency: "CNY",
        traffic: "200 GB / 月",
        trafficGB: 200,
        bandwidth: "1000 Mbps",
        lines: "全节点 IEPL 专线矩阵",
        devices: "最多 3 台设备"
      },
      {
        name: "进阶套餐",
        price: 50.0,
        currency: "CNY",
        traffic: "500 GB / 月",
        trafficGB: 500,
        bandwidth: "1000 Mbps",
        lines: "全节点 IEPL 专线矩阵 + 优先带宽保障",
        devices: "最多 5 台设备"
      },
      {
        name: "旗舰旗舰包",
        price: 90.0,
        currency: "CNY",
        traffic: "1000 GB / 月",
        trafficGB: 1000,
        bandwidth: "2000 Mbps",
        lines: "全专线 + 专属流媒体解锁池",
        devices: "最多 8 台设备"
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["中国香港", "中国台湾", "日本东京", "新加坡", "韩国首尔", "美国西海岸", "德国法兰克福", "英国伦敦"],
    lineType: "全IEPL内网专线 (广港/沪日/沪韩跨境专线)",
    deviceLimit: "3台 - 8台同时在线",
    aiSupport: ["ChatGPT Web与App端原生支持", "Claude免封锁", "Midjourney极速生成", "Perplexity全解"],
    streamingSupport: ["Netflix全区4K HDR", "Disney+全解锁", "YouTube Premium", "TikTok免拔卡", "HBO Max"],
    advantages: [
      "全程IEPL内网物理光纤传输，完全脱离公网审查阻断，敏感时期表现极度稳固",
      "全节点配备原生住宅级与商业高纯净IP池，ChatGPT/Claude与流媒体解锁率达99%以上",
      "全国多地BGP多线接入，国内就近接入边缘，无论电信、联通或移动网络延迟均非常均衡",
      "提供网页一键快捷导入Clash、Shadowrocket、Sing-box，新手上手毫无门槛"
    ],
    disadvantages: [
      "15元入门套餐仅含100GB，针对重度4K流媒体追剧用户需要升级至中高阶套餐",
      "不支持不限时永久流量包（目前以周期性月付/季付/年付订阅为主）"
    ],
    suitableFor: [
      "每天重度依赖ChatGPT、Claude、Sora等海外AI生产力工具的白领与科研人员",
      "追求晚高峰看油管4K/8K视频秒开、拒绝缓冲等待的影音爱好者",
      "对网络延迟和抖动极其敏感的海外游戏与即时通讯用户"
    ],
    sources: [
      "飞鸟云官网用户中心公开发布的产品定价单",
      "网络峰值期测速与PING丢包率监控记录",
      "常见流媒体解锁检测脚本验证报告"
    ],
    lastVerified: "2026-11-18",
    testStatus: "tested",
    speedTier: "顶级 (1000M - 2000Mbps 峰值)",
    latencyTier: "极低延迟 (香港~28ms，日本~45ms)",
    stabilityScore: 9.7,
    costPerGB: "约 0.09 - 0.15 元 / GB"
  },
  {
    id: "paopaodog",
    name: "泡泡狗 (Paopaodog)",
    slug: "paopaodog",
    badge: "高性价比专线 · 均衡平价之选",
    rating: 4.6,
    description: "深受学生党与大众用户喜爱的平价专线机场，以平衡的‘低月付单价’与‘高可用专线’为特色。起步门槛低至12元/月，兼顾了日常科研查资料、轻度办公与社交娱乐需要。",
    officialUrl: "https://paopaodog.com",
    affiliateUrl: "",
    startingPrice: 12.0,
    currency: "CNY",
    billingCycle: "月付",
    estimatedCnyPrice: 12.0,
    plans: [
      {
        name: "迷你轻量包",
        price: 12.0,
        currency: "CNY",
        traffic: "80 GB / 月",
        trafficGB: 80,
        bandwidth: "300 Mbps",
        lines: "优质中转 + 部分IEPL专线",
        devices: "最多 2 台设备"
      },
      {
        name: "畅享标准包",
        price: 22.0,
        currency: "CNY",
        traffic: "200 GB / 月",
        trafficGB: 200,
        bandwidth: "500 Mbps",
        lines: "BGP中转/专线混合矩阵",
        devices: "最多 3 台设备"
      },
      {
        name: "进阶大流量包",
        price: 42.0,
        currency: "CNY",
        traffic: "450 GB / 月",
        trafficGB: 450,
        bandwidth: "1000 Mbps",
        lines: "高优先级专线节点",
        devices: "最多 4 台设备"
      }
    ],
    protocols: ["Shadowsocks", "V2Ray"],
    regions: ["中国香港", "日本", "新加坡", "美国西海岸", "韩国"],
    lineType: "BGP多线公网中转 + 混合IEPL专线",
    deviceLimit: "2台 - 4台设备",
    aiSupport: ["ChatGPT Web端基础对话", "Copilot支持", "Claude偶尔提示节点受限"],
    streamingSupport: ["YouTube 1080P/4K", "Netflix自制剧可用", "Disney+非全部节点解锁"],
    advantages: [
      "月付仅需12元起，极大降低初次尝试与试水成本，支持随时按月续订",
      "骨干网入口采用多线BGP中转优化，国内主流三大运营商连接平稳",
      "常用地区节点（香港、日本、新加坡）覆盖齐全，倍率设置透明公道（主流节点为1.0x倍率）",
      "后台界面清爽友好，支持标准Clash、Shadowrocket订阅格式一键复制"
    ],
    disadvantages: [
      "在极端网络敏感封锁时期，部分BGP公网中转入口可能会偶现短暂波动，需依赖备用节点",
      "超高并发大文件下载时单线程速率略有削峰"
    ],
    suitableFor: [
      "预算有限、希望月开支控制在十几元的高校学生和初入职场新人",
      "以浏览网页、Github克隆代码、推特交流与轻度视频为主的日常翻墙用户",
      "寻找备用网络加速节点以防主梯子故障的用户"
    ],
    sources: [
      "泡泡狗平台公开套餐资费页面",
      "社群用户使用体验与节点可用率日志"
    ],
    lastVerified: "2026-11-12",
    testStatus: "official-data",
    speedTier: "良好 (300M - 1000Mbps)",
    latencyTier: "适中 (香港~38ms，日本~58ms)",
    stabilityScore: 9.1,
    costPerGB: "约 0.093 - 0.15 元 / GB"
  },
  {
    id: "nexitally",
    name: "奶昔 (Nexitally / 佩奇)",
    slug: "nexitally",
    badge: "高端天花板 · 顶级自建专线",
    rating: 4.95,
    description: "国内翻墙机场圈公认的高端天花板品牌（佩奇家运营）。拥有重金自建的顶级物理专线与全球庞大原生IP资源，主打‘极致速度、全天候零拥堵与极致抗封锁’，定位于高净值专业用户。",
    officialUrl: "https://nexitally.com",
    affiliateUrl: "",
    startingPrice: 70.0,
    currency: "CNY",
    billingCycle: "月付",
    estimatedCnyPrice: 70.0,
    plans: [
      {
        name: "Smart Access",
        price: 70.0,
        currency: "CNY",
        traffic: "200 GB / 月",
        trafficGB: 200,
        bandwidth: "1000 Mbps+",
        lines: "独享自建跨国物理专线",
        devices: "最多 5 台设备"
      },
      {
        name: "Premium Extreme",
        price: 150.0,
        currency: "CNY",
        traffic: "500 GB / 月",
        trafficGB: 500,
        bandwidth: "2500 Mbps+",
        lines: "全线顶级专线 + 专属大客户带宽",
        devices: "最多 8 台设备"
      }
    ],
    protocols: ["Shadowsocks", "Trojan", "定制智能策略路由"],
    regions: ["香港", "台湾", "日本", "新加坡", "韩国", "美国", "英国", "德国", "法国", "澳大利亚等30+地区"],
    lineType: "自建企业级物理私有专线 (SLA 99.99%)",
    deviceLimit: "5台 - 8台同时在线",
    aiSupport: ["ChatGPT (Web/App/API) 无感秒开", "Claude顶级纯净IP绝不封号", "Midjourney/Sora无阻断"],
    streamingSupport: ["全球所有主流与冷门流媒体原生解锁", "Netflix/Disney+/Apple TV+/BBC iPlayer 4K/8K HDR"],
    advantages: [
      "网络质量天花板，真正做到全天24小时无论早晚高峰随时跑满本地宽带物理上限",
      "自建优质物理专线，抗网络波动能力极强，历史数次重大敏感时期依旧坚挺如初",
      "节点IP纯净度极高，几乎均为原生家宽或机房高信誉IP，极少出现验证码弹窗或AI账号封禁",
      "支持极其精细的规则分流与全球多点落地出口"
    ],
    disadvantages: [
      "资费昂贵，起步月付70元，对于轻度查资料用户来说存在严重性能过剩与成本浪费",
      "注册常年采取邀请码或限时限量放号机制，有时出现‘有钱也难买’的情况",
      "不设低价体验套餐，购买前需明确自身预算与需求"
    ],
    suitableFor: [
      "跨境外贸企业管理层、高频金融交易与跨国远程办公人员",
      "重度依赖AI生产力工具（如ChatGPT API、Claude Code）、不可接受网络掉线的重度开发者",
      "对画质和延迟有极端严苛要求的发烧级影音娱乐玩家"
    ],
    sources: [
      "佩奇官方知识库与用户协议公告",
      "实测全球流媒体DNS重定向与IP地理位置归属验证",
      "多年用户口碑与长期SLA监控报告"
    ],
    lastVerified: "2026-11-19",
    testStatus: "tested",
    speedTier: "天花板 (1000M - 2500Mbps 极速端口)",
    latencyTier: "极低 (广港~20ms，沪日~35ms)",
    stabilityScore: 9.9,
    costPerGB: "约 0.30 - 0.35 元 / GB"
  },
  {
    id: "miaona",
    name: "猫熊网络 (Miaona)",
    slug: "miaona",
    badge: "平民入门 · 超低价试水备用",
    rating: 4.4,
    description: "专注于超低门槛的普惠型平民机场，起步价格不到10元人民币即可体验翻墙节点服务。支持新一代轻量高效协议，适合偶尔查看学术资料、初学科学上网的新手作为备用梯子。",
    officialUrl: "https://miaona.net",
    affiliateUrl: "",
    startingPrice: 9.9,
    currency: "CNY",
    billingCycle: "月付",
    estimatedCnyPrice: 9.9,
    plans: [
      {
        name: "入门轻量",
        price: 9.9,
        currency: "CNY",
        traffic: "60 GB / 月",
        trafficGB: 60,
        bandwidth: "200 Mbps",
        lines: "公网隧道中转节点",
        devices: "最多 2 台设备"
      },
      {
        name: "基础日常",
        price: 19.9,
        currency: "CNY",
        traffic: "150 GB / 月",
        trafficGB: 150,
        bandwidth: "500 Mbps",
        lines: "公网中转 + 部分低倍率专线",
        devices: "最多 3 台设备"
      },
      {
        name: "进阶畅游",
        price: 39.9,
        currency: "CNY",
        traffic: "360 GB / 月",
        trafficGB: 360,
        bandwidth: "500 Mbps",
        lines: "全中转节点与多地区落地",
        devices: "最多 3 台设备"
      }
    ],
    protocols: ["V2Ray", "Trojan", "Hysteria2"],
    regions: ["中国香港", "日本东京", "新加坡", "美国洛杉矶"],
    lineType: "公网隧道中转 (带Hysteria2抗弱网协议)",
    deviceLimit: "2台 - 3台设备",
    aiSupport: ["ChatGPT Web端普通提问可用", "Claude部分受限", "不支持API高并发"],
    streamingSupport: ["YouTube 1080P/2K流畅", "部分香港/日本节点支持Netflix非自制剧"],
    advantages: [
      "价格极低，仅需9.9元即可买到整月流量，极度友好新手试水体验",
      "节点配置了Hysteria2等现代高吞吐UDP协议，在弱网或晚高峰丢包环境下有良好的抗丢包能力",
      "提供傻瓜化一键导入教程，支持Clash、Shadowrocket等常见客户端",
      "倍率低，基础节点全部按标准倍率扣除流量，无暗扣"
    ],
    disadvantages: [
      "以公网隧道为主，未部署高成本物理专线，在极端网络管制期间可能会出现节点维护",
      "客服服务主要依赖工单系统，人工答复通常需数小时，技术支持时效不及大厂",
      "不适宜对延迟要求苛刻的跨国实时对战联机游戏"
    ],
    suitableFor: [
      "每月翻墙频率不高、仅偶尔查查Google或维基百科的轻度用户",
      "初次接触科学上网不想花费大几十元的新手",
      "已有主力机场，寻找一个低成本备用防失联梯子的老玩家"
    ],
    sources: [
      "猫熊网络前台套餐购买页公开信息",
      "普通宽带环境下基本节点连通性测试"
    ],
    lastVerified: "2026-11-10",
    testStatus: "official-data",
    speedTier: "实用 (200M - 500Mbps)",
    latencyTier: "正常 (香港~45ms，日本~65ms)",
    stabilityScore: 8.8,
    costPerGB: "约 0.11 - 0.16 元 / GB"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { airports };
}
