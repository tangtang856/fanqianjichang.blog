/**
 * 翻墙机场测评网 - 完整内容数据模型
 * 涵盖：教程、深度科普博文、名词百科、分类推荐说明、排行榜准则与FAQ
 */

const guidesData = [
  {
    slug: "windows",
    title: "Windows 电脑端 Clash Verge 与 v2rayN 订阅配置新手教程",
    shortTitle: "Windows 客户端教程",
    updated: "2026-11-18",
    readTime: "8 分钟",
    summary: "详细讲解在 Windows 10 / 11 电脑上使用新一代开源客户端 Clash Verge Rev 与 v2rayN 进行机场订阅导入、节点选择与系统代理开启的全过程，附带常见端口占用与连接报错解决方案。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "教程中心", url: "guides/index.html" },
      { name: "Windows 教程", url: "guides/windows/index.html" }
    ],
    sections: [
      {
        h2: "1. 客户端选型：为什么首选 Clash Verge Rev？",
        p: "在 Windows 系统上，历史悠久的 Clash for Windows 早已停止维护。目前社区最推荐且持续维护的主流客户端是 <strong>Clash Verge Rev</strong>（基于 Clash Meta / Mihomo 内核）以及 <strong>v2rayN</strong>。Clash Verge 具有界面美观现代、支持系统分流与原生支持各大机场订阅的优势；而 v2rayN 则支持协议最为广泛、占用内存极小。"
      },
      {
        h2: "2. Clash Verge Rev 步骤详解",
        p: "<strong>步骤一：下载与安装</strong><br>前往开源 GitHub 仓库下载最新的 <code>.exe</code> 安装包并完成安装。启动软件后，在 Windows 安全提示中勾选允许通过防火墙。<br><br>" +
           "<strong>步骤二：复制机场订阅链接</strong><br>登录你在正规机场的后台，在仪表盘找到【便捷导入】或【复制 Clash 订阅链接】按钮并点击复制。<br><br>" +
           "<strong>步骤三：导入订阅并更新配置</strong><br>打开 Clash Verge 界面，点击左侧【订阅 (Profiles)】，在上方输入框粘贴刚复制的订阅地址，点击【保存/下载 (Import)】。等待进度条加载完成并提示配置下载成功。<br><br>" +
           "<strong>步骤四：选择节点与开启系统代理</strong><br>点击左侧【代理 (Proxies)】，在【规则 (Rule)】分流组下，展开常用节点列表，选择一个延迟低、倍率正常的节点（如香港或日本）。最后在左侧【设置 (Settings)】中打开【系统代理 (System Proxy)】开关即可实现加速。"
      },
      {
        h2: "3. v2rayN 步骤详解（支持 V2Ray / Trojan / Xray 协议）",
        p: "<strong>步骤一：解压并运行</strong><br>v2rayN 通常为绿色压缩包，解压到非系统盘目录后，右键以管理员身份运行 <code>v2rayN.exe</code>。<br><br>" +
           "<strong>步骤二：添加订阅分组</strong><br>点击顶部菜单栏【订阅分组】→【订阅分组设置】→ 点击【添加】，填入别名（如机场名字），在【可选地址 (URL)】中粘贴机场提供的 v2ray 订阅链接，点击确定。<br><br>" +
           "<strong>步骤三：更新订阅与测速</strong><br>再次点击【订阅分组】→【更新全部订阅 (不通过代理)】。此时节点列表将刷新展示。可按 <code>Ctrl+A</code> 全选节点，右键点击【测试服务器真实延迟 (Ctrl+R)】。<br><br>" +
           "<strong>步骤四：设为活动服务器并启用系统代理</strong><br>双击选择一个延迟优良的节点，底部任务栏右键 v2rayN 图标，将【自动配置系统代理】打勾，路由模式建议选择【绕过大陆 (Whitelist)】。"
      },
      {
        h2: "4. 常见排错与注意事项",
        p: "<ul>" +
           "<li><strong>浏览器无法打开网页，提示代理服务器连接失败：</strong> 检查客户端的系统代理开关是否已打开；检查本机的系统时间是否与北京时间一致（时间误差超过 60 秒会导致加密协议握手失败）。</li>" +
           "<li><strong>端口冲突报错 (Port in use)：</strong> 常见于 7890 端口被其他软件占用。可在 Clash Verge 的设置中将 Mixed Port 改为 7895 或其他未占用端口。</li>" +
           "<li><strong>局域网电脑无法同步使用：</strong> 如需共享给同一局域网的电视或手机，请在客户端中开启【允许局域网连接 (Allow LAN)】。</li>" +
           "</ul>"
      }
    ],
    faqs: [
      {
        q: "Windows 开机后没有翻墙效果怎么回事？",
        a: "请检查 Clash Verge 或 v2rayN 是否设置了【开机自启动】以及【启动时自动开启系统代理】。如果只打开了软件而没有开启系统代理开关，流量不会走代理节点。"
      },
      {
        q: "Clash Verge 的 TUN 模式有什么用？",
        a: "TUN 模式通过虚拟网卡接管电脑的所有网络流量，适合玩跨国联机游戏、使用不遵循系统代理设置的专业终端软件（如命令行 git、docker、各类游戏客户端等）。"
      }
    ]
  },
  {
    slug: "android",
    title: "Android 安卓手机 Clash Meta 与 v2rayNG 订阅使用教程",
    shortTitle: "Android 客户端教程",
    updated: "2026-11-17",
    readTime: "7 分钟",
    summary: "针对华为、小米、OPPO、vivo 及三星等主流安卓手机，手把手指导安装配置 Clash Meta for Android (CMFA) 与 v2rayNG，包含电量优化豁免与应用分流技巧。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "教程中心", url: "guides/index.html" },
      { name: "Android 教程", url: "guides/android/index.html" }
    ],
    sections: [
      {
        h2: "1. 安卓端核心推荐客户端",
        p: "Android 平台生态开放，最主流推荐的两款应用是：<br><strong>1. Clash Meta for Android (CMFA)</strong>：功能完备、界面现代，支持分流规则和一键配置；<br><strong>2. v2rayNG</strong>：轻量小巧、上手极为直观，适合低配手机或仅需基础翻墙的用户。"
      },
      {
        h2: "2. Clash Meta for Android 配置实操",
        p: "<strong>步骤一：安装 APK</strong><br>下载官方 GitHub Release 发布的正式安装包进行安装。安装过程中若系统提示未知来源应用，选择允许即可。<br><br>" +
           "<strong>步骤二：导入订阅链接</strong><br>复制机场网站生成的 Clash 订阅链接。打开 CMFA，点击【配置】→ 点击右上角【+】号 → 选择【URL (从 URL 导入)】。<br>名称随意输入，在 URL 栏粘贴订阅链接，自动更新周期推荐填写 <code>1440</code> 分钟（即 24 小时自动拉取一次最新节点），点击右上角保存图标。<br><br>" +
           "<strong>步骤三：启动 VPN 服务</strong><br>返回软件首页，点击刚刚导入的配置卡片选中它。回到首页点击顶部的灰色开关【点击启动】。系统会弹出【网络连接请求】弹窗，点击【确定/允许】。<br><br>" +
           "<strong>步骤四：节点选择</strong><br>点击首页的【代理】按钮进入节点面板，选择需要连接的地区分组（如香港、日本）。建议测试延迟后选择低延迟节点。"
      },
      {
        h2: "3. 保持后台常驻与省电策略设置",
        p: "国产手机厂商（如 MIUI / HyperOS、HarmonyOS、OriginOS、ColorOS）后台墓碑机制较为激进，容易在息屏后杀掉后台代理进程导致断流。务必进行以下设置：<br>" +
           "<ul>" +
           "<li>在多任务后台卡片中，对 Clash Meta 进行<strong>加锁</strong>。</li>" +
           "<li>进入系统【设置】→【应用管理】→ 找到该客户端 →【电池/电量管理】→ 设置为<strong>无限制 / 允许完全后台运行</strong>。</li>" +
           "<li>开启【自启动】与【关联启动】权限。</li>" +
           "</ul>"
      }
    ],
    faqs: [
      {
        q: "启动后手机顶部状态栏有钥匙图标，但连不上外网？",
        a: "第一步先在【代理】页面查看节点测速是否正常。若所有节点测试超时，多是因为订阅过期、流量耗尽或订阅链接被旧缓存影响，点击配置界面的更新按钮重新获取即可。"
      },
      {
        q: "不想让微信和国内 App 走代理怎么设置？",
        a: "CMFA 默认采用规则模式（Rule），国内域名和 IP 本身会自动直连。如果需要彻底隔离，可在软件【设置】→【网络】→【分流模式】中勾选【仅代理选中的应用】（如只勾选 Chrome、YouTube、Telegram 等）。"
      }
    ]
  },
  {
    slug: "ios",
    title: "iOS 苹果手机 Shadowrocket (小火箭) 订阅导入与分流配置指南",
    shortTitle: "iOS 客户端教程",
    updated: "2026-11-16",
    readTime: "9 分钟",
    summary: "针对 iPhone 与 iPad 设备，从外区 Apple ID 购买 Shadowrocket（小火箭）到一键导入机场节点、开启分流规则、测试延迟的图文指南。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "教程中心", url: "guides/index.html" },
      { name: "iOS 教程", url: "guides/ios/index.html" }
    ],
    sections: [
      {
        h2: "1. 准备工作：获取海外区 Apple ID 与 Shadowrocket",
        p: "由于众所周知的合规原因，中国大陆区 App Store 下架了所有网络代理类工具。<br>" +
           "<strong>必备条件：</strong>准备一个美区、港区或台区 Apple ID，登录 App Store（切勿在【设置】中登录 iCloud，只在【App Store】中登录），搜索并购买下载正版 <strong>Shadowrocket</strong>（图标为黑色背景搭配白色四翼小火箭，售价通常为 $2.99 美元）。"
      },
      {
        h2: "2. 导入机场订阅与启动",
        p: "<strong>方法一：一键导入（最便捷）</strong><br>在 Safari 浏览器中登录你购买的机场后台，在用户中心点击【一键导入 Shadowrocket】。Safari 会弹出提示【在 Shadowrocket 中打开此页？】，点击【打开】，节点列表将自动写入完成。<br><br>" +
           "<strong>方法二：手动添加订阅链接</strong><br>如果一键导入未触发，在机场后台复制【通用订阅链接】或【Shadowrocket 订阅】。打开小火箭，点击右上角【+】号，将【类型】更改为 <code>Subscribe</code>，在【URL】栏粘贴链接，备注填写机场名称，点击右上角【完成】。<br><br>" +
           "<strong>步骤三：开启连接与配置模式</strong><br>软件将自动解析所有节点。在全局路由选项中，务必选择 <strong>【配置 (Config)】</strong>（该模式会自动将国内流量直连，国外流量走节点）。<br>选择一个节点打勾，拨动顶部连接开关，首次使用时会弹出系统提示【添加 VPN 配置】，点击【允许】并输入 iPhone 解锁密码即可。"
      },
      {
        h2: "3. 小火箭进阶设置技巧",
        p: "<ul>" +
           "<li><strong>连通性测试：</strong>在节点列表点击【连通性测试】，小火箭会并发向 Google 发送请求，绿色毫秒数值代表节点可用且低延迟。</li>" +
           "<li><strong>自动更新订阅：</strong>点击底部【设置】→【订阅】→ 打开【打开时更新】与【自动后台更新】，确保节点信息随时保持最新。</li>" +
           "<li><strong>屏蔽广告规则：</strong>在底部【配置】中，可以使用预置的默认规则，也可以添加第三方精细分流规则实现去广告和解锁流媒体。</li>" +
           "</ul>"
      }
    ],
    faqs: [
      {
        q: "除了小火箭，iOS 还有哪些推荐的代理客户端？",
        a: "除了普及率最高、性价比最强的小火箭外，中高端用户还可以选择 <strong>Quantumult X</strong>（分流策略强大）、<strong>Loon</strong>（插件生态丰富）以及旗舰级的 <strong>Surge</strong>（专业网络调试与分流神器，价格较高）。"
      },
      {
        q: "小火箭连接后耗电很快是怎么回事？",
        a: "iOS 系统的电量统计机制会将所有走 VPN 接口的应用流量（包括看视频、下载）全部归在 Shadowrocket 名下，显示耗电百分比很高，但实际上是其他 App 传输数据的正常消耗，并非小火箭本身异常耗电。"
      }
    ]
  },
  {
    slug: "macos",
    title: "macOS 苹果电脑 Clash Verge Rev 与 Surge 配置教程",
    shortTitle: "macOS 客户端教程",
    updated: "2026-11-15",
    readTime: "7 分钟",
    summary: "专为 Mac (M1/M2/M3/M4 Apple Silicon 及 Intel 机型) 用户量身定制的加速指南，推荐使用 Clash Verge Rev 与 Surge for Mac，保障 Safari 与生产力软件流畅访问海外网络。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "教程中心", url: "guides/index.html" },
      { name: "macOS 教程", url: "guides/macos/index.html" }
    ],
    sections: [
      {
        h2: "1. macOS 平台客户端推荐",
        p: "Mac 系统的网络架构与 Windows 有所不同，目前体验最佳的两个选择是：<br>" +
           "1. <strong>Clash Verge Rev (Mac 版)</strong>：开源免费，完美原生支持 Apple Silicon (arm64) 与 Intel (x64) 芯片，资源占用极低；<br>" +
           "2. <strong>Surge for Mac</strong>：苹果生态顶尖网络神器，具备强大的网关接管、进程级规则、DNS 优化与极度优美的界面（商业收费软件）。"
      },
      {
        h2: "2. Clash Verge Rev on macOS 安装与配置",
        p: "<strong>步骤一：安装应用</strong><br>下载对应的 <code>.dmg</code> 镜像文件（M 系列芯片下载 <code>aarch64.dmg</code>，Intel 芯片下载 <code>x64.dmg</code>），拖拽至【应用程序 (Applications)】文件夹。<br>首次打开若提示“无法验证开发者”，前往系统【设置】→【隐私与安全性】→ 点击【仍要打开】。<br><br>" +
           "<strong>步骤二：拉取机场订阅</strong><br>点击左侧【订阅】页面，粘贴机场提供的 Clash 格式订阅 URL，点击下载并选中配置。<br><br>" +
           "<strong>步骤三：开启系统代理与权限授予</strong><br>在【设置】界面打开【系统代理】开关。为了使终端命令行、Git 等开发工具也能顺畅通过代理，建议在高级设置中安装 Service 核心组件并开启 <strong>TUN 模式</strong>。"
      }
    ],
    faqs: [
      {
        q: "Mac 终端 (Terminal / iTerm2) 为什么用不了代理？",
        a: "终端默认不继承 macOS 图形界面的系统代理设置。解决办法有两个：1. 在 Clash Verge 中开启【TUN 模式】虚拟网卡；2. 在终端配置文件中设置 <code>export http_proxy=http://127.0.0.1:7890</code> 环境变量。"
      }
    ]
  },
  {
    slug: "clash-basics",
    title: "Clash 订阅格式转换、规则分流与常见错误排查全攻略",
    shortTitle: "Clash 进阶与排错指南",
    updated: "2026-11-14",
    readTime: "10 分钟",
    summary: "深度解析 Clash 的 Rule、Global 与 Direct 模式工作机制，传授订阅转换安全常识，以及网络报 502、SSL Handshake 失败时的万能自检流程。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "教程中心", url: "guides/index.html" },
      { name: "Clash 进阶指南", url: "guides/clash-basics/index.html" }
    ],
    sections: [
      {
        h2: "1. Clash 的三种核心运行模式深度解析",
        p: "在使用任何基于 Clash 内核的客户端时，你都会看到三种模式切换：<br>" +
           "<ul>" +
           "<li><strong>Rule (规则分流 - 推荐默认)：</strong>根据预设的规则列表智能判断访问目标。国内网站（如百度、淘宝、B站）自动走 Direct 直连；国外网站（如 Google、YouTube、GitHub）自动走所选节点；流媒体或 AI 网站走特定指定节点。</li>" +
           "<li><strong>Global (全局代理)：</strong>所有经过本机的流量全部无差别通过选中的代理节点发送。仅用于某些极特殊海外服务检测 IP 时临时使用，日常开启会导致访问国内网站变慢或提示异地登录。</li>" +
           "<li><strong>Direct (完全直连)：</strong>不通过任何代理，等同于关闭代理客户端。</li>" +
           "</ul>"
      },
      {
        h2: "2. 什么是订阅转换？是否有安全风险？",
        p: "很多机场只提供原生的 VMess / Shadowsocks 单节点连接串，需要转换为 Clash 能够读取的 YAML 配置文件。市面上存在很多公开的第三方在线订阅转换工具。<br>" +
           "<strong>安全警示：</strong>将你的订阅链接提交给不受信任的第三方公开订阅转换网站，存在订阅链接被抓取、节点被偷跑盗用的风险。建议尽量选择机场原生直接生成的 Clash 订阅链接，或者自行使用本地 Subconverter 工具进行离线转换。"
      }
    ],
    faqs: [
      {
        q: "订阅链接提示“Timeout”更新失败怎么办？",
        a: "机场的订阅下发服务器可能临时遭受了网络攻击或被墙。尝试开启现有可用的旧节点作为代理去拉取新订阅，或者登录机场后台获取最新的备用订阅域名。"
      }
    ]
  }
];

const blogData = [
  {
    slug: "how-to-choose-reliable-airport",
    title: "如何选择靠谱机场？2026新手防跑路、避坑与服务质量评估五大标准",
    shortTitle: "靠谱机场防坑指南",
    date: "2026-11-18",
    category: "选择指南",
    readTime: "9 分钟",
    summary: "面对网络上数以百计的机场品牌，新手如何避免买到三天就跑路的劣质小作坊？本文总结出评估机场稳定度、带宽真伪、客服响应与运营年限的五大实操法则。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" },
      { name: "靠谱机场防坑指南", url: "blog/how-to-choose-reliable-airport/index.html" }
    ],
    sections: [
      {
        h2: "引言：机场跑路屡见不鲜，核心原因是什么？",
        p: "在网络代理行业，‘跑路’几乎是悬在许多用户心头的阴影。很多所谓‘年付 9.9 包年’、‘99 元永久无限流量’的机场，往往采用极低廉的公网 VPS 搭建，在大量吸收一波年费预付款后，一旦遭遇敏感时期封锁入口或成本倒挂，运营者便关停服务器携款消失。因此，学会辨别服务商的真实实力是科学上网的第一课。"
      },
      {
        h2: "法则一：坚持‘月付优先’原则，拒绝无脑上车长周期套餐",
        p: "无论测评博主将某家机场夸得多么天花乱坠，<strong>新手初次使用务必先买一个月套餐进行试水</strong>。只有在你连续稳定使用 3 到 6 个月、且确认对方在敏感封锁时期具备快速抢修能力后，再考虑季付或年付以获取折扣。任何新开张不满半年却极力推销多年付或终身套餐的机场，均需高度警惕。"
      },
      {
        h2: "法则二：核验真实线路类型，警惕‘假专线’包装",
        p: "真正的内网专线（IPLC / IEPL）成本极其高昂，单 Gbps 物理带宽的月租金常以万元计。如果某家机场定价 5 元/月却声称‘全节点独享 10Gbps IPLC 专线’，那百分之百是用廉价公网中转甚至直连节点假冒的。正规专线机场通常定价合理，且会在节点命名与状态面板中如实标注传输协议与倍率。"
      },
      {
        h2: "法则三：考察运营时间与技术积累",
        p: "能平稳运营 2 年甚至 5 年以上的品牌（如搬瓦工官方直营的 Just My Socks、老牌专线飞鸟云、奶昔等），经历了数轮网络严打和入口整顿，拥有成熟的链路冗余和容灾切换方案。这类品牌即便单价略高，也能为你省去频繁换梯子重新配置的巨大时间成本。"
      },
      {
        h2: "法则四：留意社群活跃度与工单时效",
        p: "优质机场通常拥有公开的 Telegram 交流群或公告频道，遇到网络维护会提前发布通知并如实说明故障原因。如果一个机场没有公开交流渠道，工单提问数天无人应答，说明团队技术力量薄弱，遇到封锁时很可能会长期瘫痪。"
      }
    ]
  },
  {
    slug: "vpn-vs-airport-proxy-difference",
    title: "传统VPN与机场代理节点到底有何区别？原理、速度与安全性全解析",
    shortTitle: "VPN与机场代理的区别",
    date: "2026-11-17",
    category: "技术科普",
    readTime: "8 分钟",
    summary: "很多人习惯性将一切翻墙工具称为‘VPN’，但实际上传统的商业 VPN（如 ExpressVPN、NordVPN）与如今主流的机场代理协议（Shadowsocks、Trojan、V2Ray）在协议底层、混淆抗封锁能力与实际连接体验上有着天壤之别。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" },
      { name: "VPN与机场代理区别", url: "blog/vpn-vs-airport-proxy-difference/index.html" }
    ],
    sections: [
      {
        h2: "1. 传统 VPN 的初衷：加密局域网通道",
        p: "VPN（Virtual Private Network，虚拟专用网络）最初是为跨国公司员工安全访问企业内网而设计的。它的核心特征是对所有进出设备的数据包进行强加密打包。但这一协议特征过于显著（如 OpenVPN、IPsec、WireGuard 等），其流量握手特征非常容易被国内防火墙识别并实施精准阻断，因此海外著名商业 VPN 近年来在国内的可用率急剧下滑。"
      },
      {
        h2: "2. 机场代理节点的进化：深度混淆与伪装",
        p: "现代翻墙机场采用的 Shadowsocks、Trojan、V2Ray (VMess/VLESS) 以及 Hysteria 等协议，从诞生之初就是为了应对严苛的流量审查。例如 Trojan 将流量伪装成合法的 HTTPS 网页加密流量，防火墙从外部看与普通访问海外网站无异；而 Hysteria 则基于 UDP 协议进行拥塞控制优化，在网络质量恶劣的情况下依然能保持极高吞吐。"
      },
      {
        h2: "3. 速度与分流体验对比",
        p: "传统 VPN 往往是全局接管，开启后所有访问（包括淘宝、微信）都会绕道海外服务器，导致国内访问变卡。而现代机场搭配 Clash 等客户端，支持精准的规则分流（PAC 规则），只有海外受限网址才走代理，国内流量直连秒开，两全其美。"
      }
    ]
  },
  {
    slug: "iepl-iplc-relay-difference",
    title: "IEPL、IPLC专线与BGP公网中转有什么区别？机场线路类型全维度对比",
    shortTitle: "专线与中转线路区别",
    date: "2026-11-16",
    category: "架构深度",
    readTime: "10 分钟",
    summary: "买机场时经常看到的 IPLC、IEPL、BGP 隧道中转究竟指什么？不同线路在延迟、抗敏感封锁能力以及价格成本上有何差异？一文讲透线路底层技术。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" },
      { name: "线路类型深度解析", url: "blog/iepl-iplc-relay-difference/index.html" }
    ],
    sections: [
      {
        h2: "1. IPLC 与 IEPL：不过墙的内网物理光纤",
        p: "<strong>IPLC (International Private Leased Circuit)</strong> 与 <strong>IEPL (International Ethernet Private Line)</strong> 本质上是电信运营商拉设的跨国点对点内网专线。数据从国内入口机房（如广州或上海）进入后，直接通过海底/陆地光纤走运营商内部私网传输到境外机房（如香港或东京）。<br>" +
           "<strong>核心优势：</strong>由于传输过程根本不经过国际公网互联网出口，因此完全不受 GFW 防火墙的任何关键字或流量特征审查。即使在最严厉的敏感时期，专线节点依然能保持稳定可用，延迟恒定且抖动极小。"
      },
      {
        h2: "2. BGP 公网中转隧道：兼顾成本与性能",
        p: "BGP 中转指用户连接到国内的优质多线 BGP 机房（同时接入电信、联通、移动），中转服务器对数据进行加密封装后，通过普通公网出口发送到海外落地服务器。<br>" +
           "<strong>特点：</strong>成本适中，国内连接响应速度快，但在极端敏感时期，公网加密隧道的 IP 偶尔会受到针对性干扰，需要机场运维人员切换入口。"
      }
    ]
  },
  {
    slug: "airport-speed-test-misunderstandings",
    title: "机场测速图能代表一切吗？揭秘跑满千兆背后的三大真相与日常体验盲区",
    shortTitle: "机场测速图三大误区",
    date: "2026-11-15",
    category: "评测揭秘",
    readTime: "7 分钟",
    summary: "很多测速博主展示的彩虹图（几百兆甚至上千兆）为什么到你手里却连 1080P 视频都卡顿？本文揭秘 Speedtest 节点作弊、单线程与多线程差异以及晚高峰真实压力的秘密。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" },
      { name: "测速图误区揭秘", url: "blog/airport-speed-test-misunderstandings/index.html" }
    ],
    sections: [
      {
        h2: "真相一：多线程测速与单线程日常使用的脱节",
        p: "我们在各类评测中看到的漂亮满速图，绝大多数是跑在多线程（Multi-thread）基准测试下的。多线程能够汇聚所有并发连接冲顶峰值，但在你日常看 YouTube、刷推特或打开网页时，绝大多数网络请求都是单线程（Single-thread）或低并发建立的。单线程性能与节点的物理往返延迟（RTT）和丢包率息息相关，这才是决定你日常打开网页是否‘秒开’的核心。"
      },
      {
        h2: "真相二：闲时测速不能代表晚高峰表现",
        p: "下午两点测出来的千兆极速，到了晚上 8 点至 11 点（国际出口骨干网高峰拥堵期），如果是公网中转或廉价直连机场，带宽往往会出现断崖式下跌。真正考验机场实力的是晚高峰稳定度，这也是专线机场之所以昂贵的核心价值所在。"
      }
    ]
  },
  {
    slug: "ai-chatgpt-claude-airport-ip-requirements",
    title: "访问 ChatGPT 与 Claude 对节点IP有何特殊要求？防止封号与报错完全指南",
    shortTitle: "AI工具节点IP选型指南",
    date: "2026-11-14",
    category: "应用场景",
    readTime: "8 分钟",
    summary: "为什么节点测速明明正常，打开 ChatGPT 却提示‘Access Denied’或 Claude 直接封号？详解 OpenAI 与 Anthropic 对机房数据中心 IP 的风控机制及解决方案。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "博客指南", url: "blog/index.html" },
      { name: "AI专用节点要求指南", url: "blog/ai-chatgpt-claude-airport-ip-requirements/index.html" }
    ],
    sections: [
      {
        h2: "1. AI 厂商的超级风控：IP 纯净度与欺诈分",
        p: "OpenAI 与 Anthropic (Claude) 部署了业内最严苛的反欺诈风控系统（借助 Cloudflare 等安全网关）。当成千上万的用户同时共享同一个公共数据中心机房 IP（Datacenter IP）访问时，该 IP 会被系统判定为高风险代理，直接触发 Cloudflare 验证死循环、Access Denied 1020 报错，甚至直接封禁关联账号。"
      },
      {
        h2: "2. 怎样的节点适合日常使用 ChatGPT / Claude？",
        p: "必须选用配备<strong>原生住宅 IP (Residential IP)</strong> 或具备<strong>专属落地分流解锁</strong>的高品质专线节点。这类节点在 IP 库中被标记为普通家庭宽带或高信誉度商业网络，极少被风控系统拦截。在我们的测评中，飞鸟云与奶昔均对主流 AI 工具提供了专属优化的原生落地出口。"
      }
    ]
  }
];

const glossaryData = [
  {
    slug: "iplc-iepl",
    title: "什么是 IPLC 与 IEPL 专线？网络百科深度解析",
    shortTitle: "IPLC / IEPL 专线",
    category: "网络线路",
    updated: "2026-11-15",
    summary: "IPLC（国际私有租用线路）与 IEPL（国际以太网专线）是目前跨境网络通信中品质最高的内网传输通道，具有不经过 GFW 审查、延迟极低且网络抖动极小的特性。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" },
      { name: "IPLC与IEPL专线", url: "glossary/iplc-iepl/index.html" }
    ],
    content: "IPLC（International Private Leased Circuit，国际私有租用线路）是电信运营商提供的点对点端到端通信专线。IEPL（International Ethernet Private Line）则是基于以太网技术的升级版专线，支持更灵活的带宽调度。在机场节点领域，所谓‘专线机场’指的是国内入口服务器与境外落地服务器之间，直接使用此类专网进行数据通信，数据在跨境时无需通过国际公网网关，因而在敏感时期完全免受封锁干扰。"
  },
  {
    slug: "shadowsocks-v2ray-trojan",
    title: "Shadowsocks、V2Ray、Trojan 与 Hysteria 协议特性对比",
    shortTitle: "代理协议对比",
    category: "传输协议",
    updated: "2026-11-14",
    summary: "主流翻墙协议的技术原理与性能差异全面对比，分析各自在加密开销、抗封锁特征混淆以及弱网吞吐方面的表现。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" },
      { name: "常用代理协议对比", url: "glossary/shadowsocks-v2ray-trojan/index.html" }
    ],
    content: "<strong>Shadowsocks (SS)：</strong>轻量经典，资源消耗极低，适合内网专线等本身不受审查的优质线路；<br><strong>V2Ray (VMess/VLESS)：</strong>架构强大，支持多种传输载体（如 WebSocket + TLS），适合复杂的混淆伪装需求；<br><strong>Trojan：</strong>直接模仿互联网标准的 HTTPS/TLS 握手，将代理流量完美伪装成正常的网站加密浏览；<br><strong>Hysteria 2：</strong>基于 QUIC / UDP 开发的新型协议，具备独特的暴力抗丢包拥塞控制算法，在恶劣网络或高峰丢包时表现惊人。"
  },
  {
    slug: "bgp-relay",
    title: "什么是 BGP 网络与公网中转节点？网络百科",
    shortTitle: "BGP 与公网中转",
    category: "网络架构",
    updated: "2026-11-13",
    summary: "BGP（边界网关协议）机房与公网隧道中转的工作机制解析，阐明中转服务器如何提升不同宽带用户的加速体验。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" },
      { name: "BGP与中转百科", url: "glossary/bgp-relay/index.html" }
    ],
    content: "在未做中转的直连机场中，如果用户是移动宽带而海外服务器只有电信路由，连接体验会极其恶劣。BGP（Border Gateway Protocol）入口服务器接入了电信、联通、移动等多家骨干网，能够智能识别用户的网络来源并给予最优的接入路由。用户先连接到国内 BGP 节点，再由 BGP 节点中转发送给海外节点，大幅改善了全国各地的连接一致性。"
  },
  {
    slug: "clash-subscription",
    title: "什么是订阅链接？规则分流与全局代理模式百科",
    shortTitle: "订阅链接与分流模式",
    category: "客户端机制",
    updated: "2026-11-12",
    summary: "订阅链接的工作原理、Base64 编码机制以及现代客户端分流规则的匹配逻辑通俗科普。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" },
      { name: "订阅与分流百科", url: "glossary/clash-subscription/index.html" }
    ],
    content: "订阅链接（Subscription URL）是一个保存在云端服务器上的动态配置地址。客户端每次向该 URL 发起 HTTP GET 请求，服务器便会返回经过 Base64 编码或 YAML 格式的最新节点服务器地址、端口、密码与加密协议信息。通过订阅机制，机场管理方在节点更换 IP 或增删线路时，用户只需在客户端点击‘更新订阅’即可自动同步最新信息，无需手动重新录入。"
  },
  {
    slug: "ip-cleanliness-score",
    title: "什么是原生 IP、广播 IP 与 IP 纯净度欺诈分？",
    shortTitle: "原生IP与纯净度",
    category: "IP资源",
    updated: "2026-11-11",
    summary: "原生住宅 IP 与机房广播 IP 的区别，以及 IP 欺诈度评分（Fraud Score）如何影响流媒体解锁与 AI 服务可用性。",
    breadcrumbs: [
      { name: "首页", url: "index.html" },
      { name: "名词百科", url: "glossary/index.html" },
      { name: "原生IP与纯净度百科", url: "glossary/ip-cleanliness-score/index.html" }
    ],
    content: "<strong>原生 IP：</strong>指该 IP 的注册地理位置归属地与实际机房机架所在的国家/地区完全一致，通常被流媒体（Netflix）与风控系统认定为高可信度本地宽带。<br><strong>广播 IP：</strong>由跨国运营商通过 BGP 宣告广播到其他国家的 IP，注册地与落地使用地不一致，容易被安全审计机制标记。<br><strong>IP 欺诈度（Fraud Score）：</strong>由 MaxMind、Scamalytics 等专业风控数据库根据历史黑客攻击、滥用邮件、代理扫描记录计算出的风险分值。分值越低（<15分），说明 IP 越纯净，使用 ChatGPT 等应用越不容易弹验证码。"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { guidesData, blogData, glossaryData };
}
