/**
 * 翻墙机场测评网 - 30篇教程与100篇深度科普文章生成器
 * 涵盖：全平台客户端教程 (Windows, Android, iOS, macOS, 软路由)
 * 以及 10 大专题 100 篇高价值 SEO 行业观察与技术指南
 */

const fs = require('fs');
const path = require('path');

// =========================================================================
// 一、30 篇保姆级客户端配置教程元数据与详实正文
// =========================================================================
const guidesList = [
  // --- Windows 平台 (1-7) ---
  {
    slug: "windows-clash-verge-rev",
    title: "Windows 10/11 安装配置 Clash Verge Rev 订阅与分流实战教程",
    shortTitle: "Windows Clash Verge教程",
    category: "Windows 教程",
    updated: "2026-11-20",
    readTime: "8 分钟",
    summary: "新一代开源客户端 Clash Verge Rev (基于 Mihomo 内核) 在 Windows 电脑上的完整下载、机场订阅一键拉取、TUN 虚拟网卡开启与节点测速指南。",
    h2_1: "为什么 Clash Verge Rev 是目前 Windows 平台的首选？",
    p_1: "随着老旧的 Clash for Windows (CFW) 停止维护，Clash Verge Rev 凭借活跃的社区支持、现代优雅的 UI 界面以及对新协议（如 VLESS、Hysteria2、REALITY）的原生支持，成为了 Windows 10 与 11 用户的绝对主力。它内存占用小、支持一键切换内核，并能与各正规机场的订阅链接完美契合。",
    h2_2: "保姆级配置四步法：从下载到开启全局加速",
    p_2: "<strong>第一步：下载与安全信任</strong><br>前往官方 GitHub 仓库下载 <code>Clash.Verge.Rev_x64-setup.exe</code>，安装时若出现 Windows Defender 拦截，点击“更多信息”并选择“仍要运行”。<br><br>" +
         "<strong>第二步：导入机场订阅</strong><br>登录你的机场后台（例如微风网络、飞猫云或无忧），在控制面板点击【一键复制 Clash 订阅链接】。回到 Clash Verge Rev，在左侧点击【订阅 (Profiles)】，在顶部输入框粘贴该链接并点击【导入】。<br><br>" +
         "<strong>第三步：配置自动更新周期</strong><br>右键刚导入的配置卡片，选择【编辑配置】，将更新间隔设置为 <code>1440</code> 分钟（即每日自动同步一次节点），避免节点失效后无法获取最新 IP。<br><br>" +
         "<strong>第四步：选择节点并启用系统代理</strong><br>点击左侧【代理 (Proxies)】，将分流模式保持为【Rule (规则分流)】，选择低延迟节点（如香港或日本）。最后在【设置】中勾选【系统代理 (System Proxy)】，浏览器即可秒开外网。",
    h2_3: "TUN 虚拟网卡模式进阶配置",
    p_3: "如果你需要让 Git 命令行、Node/Python 脚本、Docker 容器或跨国联机游戏（如 Steam/Epic）全部走加速代理，请在设置中安装 <code>Service Mode</code> 核心驱动，并打开 <code>TUN Mode</code>。开启后所有流量将由虚拟网卡全局拦截分流，彻底告别配置代理端口的烦恼。"
  },
  {
    slug: "windows-v2rayn-setup",
    title: "Windows 平台 v2rayN 客户端安装、多协议订阅与路由分流教程",
    shortTitle: "v2rayN 使用指南",
    category: "Windows 教程",
    updated: "2026-11-19",
    readTime: "7 分钟",
    summary: "经典神器 v2rayN 详细配置指南，支持 Xray 与 Sing-box 双内核，全面兼容 V2Ray、Trojan、Shadowsocks 与 Hysteria 协议。",
    h2_1: "v2rayN 的核心优势与适用场景",
    p_1: "v2rayN 是 Windows 平台历史最悠久、协议支持最全的轻量级绿色代理客户端。它不依赖复杂的图形环境，内存占用仅需数十兆，且支持将多个不同机场的节点整合在同一个列表中进行延迟排序与分组管理。",
    h2_2: "下载解压与添加订阅分组实操",
    p_2: "从官方 Releases 下载 <code>v2rayN-with-Core.zip</code> 完整包，解压到非系统盘目录。右键以管理员身份运行 <code>v2rayN.exe</code>。<br>" +
         "点击顶部菜单【订阅分组】→【订阅分组设置】→【添加】。别名输入机场名称，可选地址填入机场提供的订阅 URL，点击确定。返回主界面后，再次点击【订阅分组】→【更新全部订阅 (不通过代理)】，数十个节点即可瞬间拉取成功。",
    h2_3: "真连接延迟测速与系统代理开启",
    p_3: "按快捷键 <code>Ctrl+A</code> 全选所有节点，右键点击【测试服务器真实延迟 (Ctrl+R)】。系统会向 Google 测速接口并发发送请求，出现绿色数字（如 15ms~45ms）即表示节点低延迟可用。右键任务栏右下角蓝色 V 图标，将【自动配置系统代理】打勾，路由模式选择【绕过大陆 (Whitelist)】即可。"
  },
  {
    slug: "windows-singbox-gui",
    title: "Windows 端 Sing-box 图形客户端配置与通用订阅导入指南",
    shortTitle: "Windows Sing-box教程",
    category: "Windows 教程",
    updated: "2026-11-18",
    readTime: "8 分钟",
    summary: "新一代通用网络通用核心 Sing-box on Windows 完整上手教程，详解规则集分流、内存优化与超低延迟特性。",
    h2_1: "为什么 Sing-box 被誉为下一代网络核心？",
    p_1: "Sing-box 采用 Go 语言全新编写，摒弃了传统代理软件的历史包袱，支持最新的真实连接协议（REALITY、ShadowTLS、TUIC 与 Hysteria2）。其最大亮点在于内存开销极低、抗并发能力卓越，适合追求极限性能与前沿极客用户。",
    h2_2: "图形客户端下载与配置导入流程",
    p_2: "安装 Sing-box GUI 或图形封装版后，登录支持 Sing-box 订阅格式的机场后台复制专用订阅。导入配置并选择 Tun 模式或系统代理模式。由于 Sing-box 拥有极其精简的路由逻辑，网页响应速度比传统代理工具快 15% 以上。"
  },
  {
    slug: "windows-netch-game-acceleration",
    title: "Windows 电脑使用 Netch 配合机场节点给外服联机游戏加速指南",
    shortTitle: "Netch 游戏加速教程",
    category: "Windows 教程",
    updated: "2026-11-17",
    readTime: "9 分钟",
    summary: "专为 Apex、绝地求生、GTA5、战网与 Steam 联机玩家打造，详解如何利用 Netch 的进程代理模式把机场专线变成超低延迟游戏加速器。",
    h2_1: "Netch 与普通翻墙软件的区别在哪？",
    p_1: "普通的 Clash 或 v2rayN 主要针对 HTTP/HTTPS 网页与视频流量进行代理，而很多 3D 跨国网络游戏采用 UDP 协议直连海外服务器。Netch 通过驱动级网络挂钩，能够直接拦截指定游戏进程（如 <code>r5apex.exe</code>）的所有 UDP/TCP 数据包，并走低延迟 IEPL 物理专线出海，实现 NAT 类型 Open 且延迟稳定不丢包。",
    h2_2: "Netch 导入专线节点与启动游戏流程",
    p_2: "1. 打开 Netch，在订阅菜单粘贴支持 UDP 转发的专线机场链接（如微风网络、闪跃或隐形人）；<br>2. 模式下拉框选择对应游戏（例如【Apex Legends】或【Steam 登录与下载】）；<br>3. 节点选择延迟低于 30ms 的香港或日本专线节点，点击【启动】；<br>4. 启动游戏后在游戏内查看网络状态，延迟可稳定维持在 35ms 左右。"
  },
  {
    slug: "windows-clash-cfw-migration",
    title: "Clash for Windows 停更后如何无缝迁移到 Clash Verge Rev？",
    shortTitle: "CFW 迁移 Verge 指南",
    category: "Windows 教程",
    updated: "2026-11-16",
    readTime: "6 分钟",
    summary: "针对长期习惯 CFW 老界面的用户，手把手演示配置平滑迁移、快捷键习惯保留及安全隐患排查。",
    h2_1: "为什么必须停止使用旧版 Clash for Windows？",
    p_1: "旧版 CFW 依赖的 Electron 运行时与 Clash 内核已有数年未更新漏洞补丁，存在被恶意网页攻击利用的严重隐患。同时，旧版内核不支持 VLESS、Hysteria2 等新协议，遇到采用新架构的现代机场会直接报错解析失败。",
    h2_2: "无缝平滑迁移步骤",
    p_2: "卸载旧版 CFW 并清理注册表残余。安装 Clash Verge Rev 后，直接将原机场的订阅 URL 粘贴进新软件中即可。Clash Verge 的分流规则组与界面逻辑与 CFW 高度相似，几分钟内即可完全适应。"
  },
  {
    slug: "windows-winxray-lightweight",
    title: "极简轻量级 WinXray 客户端免安装使用与轻度翻墙教程",
    shortTitle: "WinXray 极简教程",
    category: "Windows 教程",
    updated: "2026-11-15",
    readTime: "6 分钟",
    summary: "无需安装、解压即用的 WinXray 教程，单文件体积仅 5MB，适合老旧低配电脑、网吧应急或轻度查资料用户。",
    h2_1: "WinXray 的极速轻巧特性",
    p_1: "WinXray 采用 C++ 和原生 Windows API 编写，无任何重型 Web 框架开销，开机秒启，运行内存占用不足 10MB。支持通用 VMess、VLESS、Trojan 与 Shadowsocks 订阅。",
    h2_2: "一键测速与自动路由",
    p_2: "解压后直接运行，通过剪贴板批量导入节点或订阅链接。内置了经过深思熟虑的中国大陆白名单分流路由，开箱即用，无需任何复杂设置。"
  },
  {
    slug: "windows-hysteria2-client",
    title: "Windows 端 Hysteria 2 客户端配置：恶劣弱网环境抗丢包神器",
    shortTitle: "Hysteria 2 Windows教程",
    category: "Windows 教程",
    updated: "2026-11-14",
    readTime: "8 分钟",
    summary: "基于 UDP/QUIC 开发的 Hysteria 2 协议在 Windows 电脑上的部署教程，专治晚高峰国际出口严重拥堵与高丢包。",
    h2_1: "Hysteria 2 为什么能在弱网环境下跑满千兆？",
    p_1: "传统 TCP 协议在遇到 5% 以上丢包时会自动将传输窗口减半，导致网速断崖式下跌。Hysteria 2 采用专有 Brutal 拥塞控制算法，无视公网丢包，直接按可用物理带宽暴力推送数据，特别适合移动宽带或晚高峰严重挤塞环境。",
    h2_2: "在 Clash Verge Rev 中启用 Hysteria 2 节点",
    p_2: "选用配备 Hysteria 2 节点的机场（如隐形人），导入订阅后，在代理面板选中带有 <code>Hy2</code> 标识的节点，测速即可看到速度瞬间拉满。"
  },

  // --- Android 安卓平台 (8-14) ---
  {
    slug: "android-clash-meta-cmfa",
    title: "Android 安卓手机 Clash Meta (CMFA) 订阅配置与保姆级图文教程",
    shortTitle: "安卓 Clash Meta 教程",
    category: "Android 教程",
    updated: "2026-11-20",
    readTime: "8 分钟",
    summary: "华为、小米、OPPO、vivo、三星安卓手机必备翻墙神器 Clash Meta for Android 安装、订阅导入、分流模式与保活设置全指南。",
    h2_1: "安卓端为什么推荐 Clash Meta (CMFA)？",
    p_1: "Clash Meta for Android (简称 CMFA) 是安卓生态中功能最强大、界面最契合现代 Material You 设计语言的开源客户端。它完美兼容 Clash Meta 核心，支持国内直连与国外代理智能分流，微信聊天与刷油管两不耽误。",
    h2_2: "从零开始安装与配置步骤",
    p_2: "1. 下载官方 Release APK 并安装，允许手机系统的未知来源应用安装权限；<br>2. 复制机场后台的 Clash 订阅地址；<br>3. 打开 CMFA，进入【配置】→ 点击【+】→ 选择【URL 导入】，粘贴链接并设定自动更新周期；<br>4. 返回首页选中该配置，点击右上角启动开关，在系统弹窗中允许创建 VPN 连接；<br>5. 进入【代理】选择心仪节点即可畅游。"
  },
  {
    slug: "android-v2rayng-novice",
    title: "Android 端 v2rayNG 新手快速上手指南：极简轻便零门槛",
    shortTitle: "v2rayNG 新手教程",
    category: "Android 教程",
    updated: "2026-11-19",
    readTime: "6 分钟",
    summary: "不习惯复杂规则分流用户的首选，v2rayNG 界面纯粹无广告，单手机导入机场订阅一分钟搞定。",
    h2_1: "v2rayNG 的轻量级设计哲学",
    p_1: "v2rayNG 几乎不需要任何额外学习成本，没有繁琐的策略组和规则链，专为想要“一点即连”的用户打造。支持一键测试所有节点连通性，自动剔除超时服务器。",
    h2_2: "订阅导入与分流配置实操",
    p_2: "点击左上角侧边栏【订阅分组设置】→【+】添加分组并粘贴 URL。返回主页点击右上角三点【更新订阅】。在左侧【设置】中勾选【分流应用】，确保国内银行和社交软件直接直连。"
  },
  {
    slug: "android-surfboard-tutorial",
    title: "Android 平台 Surfboard (冲浪板) 客户端配置：最美 Surge 替代者",
    shortTitle: "Surfboard 冲浪板教程",
    category: "Android 教程",
    updated: "2026-11-18",
    readTime: "7 分钟",
    summary: "完美复刻 iOS 著名 Surge 客户端界面的安卓网络利器，支持精细测速面板、策略组切换与深度分流。",
    h2_1: "Surfboard 的视觉美学与强大仪表盘",
    p_1: "Surfboard 拥有安卓平台上最为美观的网络吞吐实时曲线图和流量监控面板。它支持标准 Surge 配置格式，对于喜欢 iOS Surge 交互风格的用户来说是最佳安卓移植。",
    h2_2: "配置与订阅导入详解",
    p_2: "在【配置 (Profile)】标签页点击底部【+】号，选择从 URL 导入。输入机场提供的托管配置链接，刷新后在【代理 (Proxy)】界面选择低延迟节点，开启顶部开关即可享受丝滑加速。"
  },
  {
    slug: "android-singbox-mobile",
    title: "Sing-box for Android 安卓手机端安装与高性能规则分流指南",
    shortTitle: "Sing-box 安卓教程",
    category: "Android 教程",
    updated: "2026-11-17",
    readTime: "8 分钟",
    summary: "安卓平台新一代黑马客户端，基于最新 Go 内核，带来极致省电与全协议解锁体验。",
    h2_1: "低电量消耗：安卓用户的福音",
    p_1: "由于传统客户端在后台维持多个规则判断时容易造成 CPU 唤醒，Sing-box 优化的内存模型使手机待机耗电下降达 40% 以上，特别适合通勤与长续航需求。",
    h2_2: "订阅添加与日常使用",
    p_2: "通过官方 GitHub 获取 APK，进入 Profiles 导入机场的通用订阅。在 Groups 面板中手动选择延迟最优的专线节点即可开启。"
  },
  {
    slug: "android-battery-keepalive",
    title: "国产安卓手机 (小米/华为/OPPO/vivo) 代理后台保活与断流终极解决指南",
    shortTitle: "安卓代理后台保活教程",
    category: "Android 教程",
    updated: "2026-11-16",
    readTime: "7 分钟",
    summary: "息屏就断网？微信收不到消息？彻底解决 HyperOS、HarmonyOS、ColorOS 与 OriginOS 激进杀后台问题。",
    h2_1: "为什么国产手机息屏后节点会自动断开？",
    p_1: "国产定制安卓系统的电池管理系统会将所有常驻 VPN 进程视为耗电大户，息屏后几分钟内便会将其进程杀死或冻结（墓碑机制），导致海外应用断网失联。",
    h2_2: "三大关键设置搞定完美保活",
    p_2: "1. <strong>多任务卡片加锁：</strong>在后台任务卡片中下滑加锁；<br>2. <strong>电量优化豁免：</strong>在应用信息中将【省电策略】改为【无限制】；<br>3. <strong>自启动权限允许：</strong>勾选【自启动】与【关联启动】。"
  },
  {
    slug: "android-matsuri-squirrel",
    title: "Matsuri (松鼠) 与 NekoBox for Android 跨平台代理客户端进阶指南",
    shortTitle: "Matsuri / NekoBox教程",
    category: "Android 教程",
    updated: "2026-11-15",
    readTime: "8 分钟",
    summary: "基于 Xray 和 SagerNet 核心的高级网络调试工具，支持全协议插件扩展与精细路由规则自定义。",
    h2_1: "NekoBox 的极客特色",
    p_1: "NekoBox 支持通过安装独立插件扩展支持更多小众协议，支持链式代理与多出站分流，是安卓上折腾网络的高阶神器。",
    h2_2: "订阅管理与核心操作步骤",
    p_2: "点击菜单【分组】导入订阅 URL，长按分组可一键对所有节点进行 TCPing 或 URLTest 真实连通性测试。支持导出分享配置。"
  },
  {
    slug: "android-tv-box-setup",
    title: "安卓智能电视与电视盒子 (外贸盒子/Chromecast) 安装配置翻墙节点教程",
    shortTitle: "电视盒子配置教程",
    category: "Android 教程",
    updated: "2026-11-14",
    readTime: "9 分钟",
    summary: "在客厅大屏看 YouTube 4K 与 Netflix！详细讲解如何用 U 盘在 Android TV 上安装电视专版 Clash 并通过遥控器操作。",
    h2_1: "电视端为什么不能用普通手机版客户端？",
    p_1: "普通手机端 APK 没有适配电视遥控器的十字方向键焦点控制，打开后无法用遥控器选中按钮。必须安装专为大屏优化的 <code>Clash for Android TV</code> 或通过软路由分流。",
    h2_2: "U盘安装与遥控器配对步骤",
    p_2: "将专版 APK 拷入 U 盘插入电视安装。使用局域网网页传配置功能：手机与电视连同一 WiFi，手机扫码在网页中输入订阅链接，电视即可自动拉取节点，轻松畅享 4K/8K 巨幕影音。"
  },

  // --- iOS / iPadOS 苹果端 (15-21) ---
  {
    slug: "ios-shadowrocket-complete",
    title: "iOS 苹果手机 Shadowrocket (小火箭) 从购买、订阅到分流全流程保姆级教程",
    shortTitle: "iOS 小火箭完整指南",
    category: "iOS 教程",
    updated: "2026-11-20",
    readTime: "10 分钟",
    summary: "iPhone / iPad 翻墙普及率最高的工具，详细说明美区 Apple ID 获取、正版小火箭下载、一键导入机场订阅与去广告分流规则。",
    h2_1: "必备前提：如何下载正版 Shadowrocket？",
    p_1: "由于大陆 App Store 下架了网络代理工具，必须准备一个外区（美区或港区）Apple ID。在 App Store 登录该账号（注意切勿在手机【设置】登录 iCloud），搜索正版 Shadowrocket（开发者为 Pan 且售价通常为 $2.99 美元）下载安装。",
    h2_2: "三种订阅导入方式详解",
    p_2: "<strong>方式一：网页一键导入（最推荐）</strong><br>在 Safari 浏览器中登录机场后台，点击【一键导入 Shadowrocket】，系统自动拉起小火箭并将全部专线节点写入完成。<br><br>" +
         "<strong>方式二：手动添加 URL</strong><br>在小火箭首页右上角点击【+】号，类型选择 <code>Subscribe</code>，在 URL 栏粘贴机场提供的订阅链接，备注填入机场名，点击完成。<br><br>" +
         "<strong>方式三：二维码扫码</strong><br>点击小火箭左上角扫码图标，直接扫描电脑屏幕上的订阅二维码完成添加。",
    h2_3: "全局路由一定要选择【配置 (Config)】模式",
    p_3: "主界面的【全局路由】务必选为【配置】。该模式下系统会自动把淘宝、微信等国内流量直连秒开，国外受限网址走专线节点。勾选低延迟节点后拨动顶部开关即可生效。"
  },
  {
    slug: "ios-quantumult-x-guide",
    title: "iOS 平台 Quantumult X (圈X) 进阶配置：分流策略组与脚本重写深度实战",
    shortTitle: "Quantumult X 圈X指南",
    category: "iOS 教程",
    updated: "2026-11-19",
    readTime: "9 分钟",
    summary: "苹果生态颜值与性能兼备的神器，掌握自定义策略组、图标美化、Task 脚本与第三方精细分流技巧。",
    h2_1: "Quantumult X 的独特魅力",
    p_1: "圈X拥有无可比拟的精美 UI 和极度强大的策略分流能力。你可以为 OpenAI、Netflix、Spotify、Disney+ 分别指定不同落地国家的节点，互不干扰且自动故障转移。",
    h2_2: "添加资源引用与策略组",
    p_2: "点击右下角圆环进入设置，在【节点】下的【引用 (分流/节点)】中添加机场订阅。配置策略组（如指定香港节点看港区 Netflix，美国原生节点专供 ChatGPT）。长按首页大圆环即可开启连接。"
  },
  {
    slug: "ios-loon-client-guide",
    title: "iOS 平台 Loon 客户端配置教程：兼顾插件生态与易用性的新锐之选",
    shortTitle: "Loon 客户端教程",
    category: "iOS 教程",
    updated: "2026-11-18",
    readTime: "8 分钟",
    summary: "近年来热度极高的新一代网络工具，支持一键安装去广告插件、流媒体解锁测试与规则分流。",
    h2_1: "为什么越来越多用户从圈X转向 Loon？",
    p_1: "Loon 最大的革新在于引入了模块化插件（Plugins）系统。用户无需手写复杂的重写规则，只需在社区点击安装插件，即可一键实现去除各类国内 App 开屏广告和解锁 YouTube 特性。",
    h2_2: "订阅导入与插件启用步骤",
    p_2: "在【配置】页面点击【订阅】，粘贴机场提供的订阅 URL 并保存。节点加载完毕后，在首页滑动选择节点并开启 VPN 开关即可。"
  },
  {
    slug: "ios-surge-ios-setup",
    title: "iOS 顶级神器 Surge 5 基础配置指南：苹果生态网络掌控天花板",
    shortTitle: "Surge iOS 上手指南",
    category: "iOS 教程",
    updated: "2026-11-17",
    readTime: "9 分钟",
    summary: "专为专业开发者与极客打造的顶级商业网络调试工具，详解托管配置订阅、抓包排错与策略分流。",
    h2_1: "Surge 的专业定位与极速性能",
    p_1: "Surge 是 iOS 与 Mac 平台上性能最稳定、架构最严谨的网络分析与代理工具。它具备极其微小的内存占用和几乎零崩溃的稳定性，适合外贸高管与核心开发人员。",
    h2_2: "快速导入机场托管配置",
    p_2: "打开 Surge，点击顶部 Profile 区域选择【从 URL 下载】，填入机场的专用 Surge 托管配置地址。系统会自动完成规则链与节点注入，开启 Outbound 即可享受极致稳定。"
  },
  {
    slug: "ios-singbox-apple",
    title: "iOS / iPadOS 端 Sing-box 客户端安装与规则订阅导入指南",
    shortTitle: "Sing-box iOS 教程",
    category: "iOS 教程",
    updated: "2026-11-16",
    readTime: "7 分钟",
    summary: "免费且开源的全新选择！在没有美区付费小火箭的情况下，如何使用免费的 Sing-box 畅游海外网络。",
    h2_1: "外区 App Store 免费下载",
    p_1: "不同于需要付费购买的 Shadowrocket 或 Surge，Sing-box 在美区 App Store 提供完全免费下载，是新手零成本体验科学上网的绝佳替代。",
    h2_2: "添加 Profile 配置文件步骤",
    p_2: "打开软件进入 Profiles 页面，点击【+】号，输入 Name 与订阅 URL。下载完成后返回主页打开开关，授权添加系统 VPN 配置即可连接。"
  },
  {
    slug: "ios-us-appleid-registration",
    title: "手把手教你免费免信用卡注册美区 Apple ID 购买小火箭教程",
    shortTitle: "美区 Apple ID 注册教程",
    category: "iOS 教程",
    updated: "2026-11-15",
    readTime: "10 分钟",
    summary: "无需国外信用卡，利用免税州账单地址与苹果礼品卡，15分钟内搞定专属美区海外账号下载 Shadowrocket。",
    h2_1: "注册前准备工作与注意事项",
    p_1: "准备一个从未注册过 Apple ID 的全新邮箱（如 Gmail 或 Outlook）。全程在苹果官方网页进行注册，付款方式选择【None (无)】，地区选择【United States】。",
    h2_2: "免税州地址与礼品卡充值流程",
    p_2: "通过美国免税州（如俄勒冈州 Oregon）生成合法账单地址与邮编。注册成功后，在支付宝中切换地区购买 3 美元正品苹果 App Store 礼品卡充值，即可在 iPhone 上顺利购买正版 Shadowrocket。"
  },
  {
    slug: "ios-shadowrocket-adblock-rules",
    title: "Shadowrocket (小火箭) 进阶：导入第三方规则实现去开屏广告与隐私防护",
    shortTitle: "小火箭去广告规则教程",
    category: "iOS 教程",
    updated: "2026-11-14",
    readTime: "7 分钟",
    summary: "利用小火箭不仅能翻墙，还能彻底拦截各大主流手机 App 的恶心开屏广告和追踪分析代码。",
    h2_1: "第三方规则配置原理",
    p_1: "小火箭通过匹配网络请求的域名和 URL 关键字，可以直接在本地将广告追踪请求返回 <code>REJECT</code>，既节省手机蜂窝流量，又大幅提升软件打开速度。",
    h2_2: "一键导入成熟开源分流配置",
    p_2: "在小火箭底部点击【配置】→【添加配置】，输入成熟规则仓库（如 ACL4SSR 或 神机规则）的远程链接。下载后点击该配置并选择【使用配置】即可。"
  },

  // --- macOS 苹果电脑平台 (22-27) ---
  {
    slug: "macos-clash-verge-rev",
    title: "macOS 平台 Clash Verge Rev 安装配置教程：完美适配 M1/M2/M3/M4 与 Intel",
    shortTitle: "macOS Clash Verge 教程",
    category: "macOS 教程",
    updated: "2026-11-20",
    readTime: "8 分钟",
    summary: "专为 Mac 用户打造，详解原生 Apple Silicon 芯片版本选择、订阅导入、TUN 虚拟网卡授权及 Safari 代理设置。",
    h2_1: "为什么 Mac 电脑首选 Clash Verge Rev？",
    p_1: "Clash Verge Rev 提供了原生针对 <code>arm64</code> (Apple Silicon) 与 <code>x64</code> (Intel) 的独立构建包，不经过 Rosetta 2 转译，运行能耗极低。完全支持 macOS Sonoma 与 Sequoia 最新系统权限机制。",
    h2_2: "下载安装与权限授予图文指南",
    p_2: "下载 <code>.dmg</code> 镜像，拖拽至 Applications。打开时若提示“无法验证开发者”，在系统【设置】→【隐私与安全性】点击【仍要打开】。在 Profiles 导入机场订阅链接，打开【系统代理】开关即刻生效。"
  },
  {
    slug: "macos-surge-mac-guide",
    title: "macOS 顶级网络神器 Surge for Mac 进阶教程：接管整个 Mac 网络与网关分流",
    shortTitle: "Surge for Mac 教程",
    category: "macOS 教程",
    updated: "2026-11-19",
    readTime: "9 分钟",
    summary: "Mac 平台生产力天花板软件，详解 Enhanced Mode (增强模式)、进程级分流策略与智能 DNS 优化。",
    h2_1: "Enhanced Mode 为什么能彻底接管终端命令行？",
    p_1: "很多 Mac 开发者苦恼于终端（Terminal/iTerm2）不走系统代理的问题。Surge 的【Enhanced Mode】通过内核网络驱动层虚拟网卡，无论命令行、Docker 还是任何第三方开发工具，所有网络请求自动走策略分流，彻底杜绝网络报错。",
    h2_2: "托管订阅与日常高效使用",
    p_2: "在菜单栏点击 Surge 图标导入机场托管配置，勾选【Set as System Proxy】与【Enhanced Mode】，所有跨国网络加速瞬间完成。"
  },
  {
    slug: "macos-clashx-pro-alternatives",
    title: "ClashX 与 ClashX Pro 停更后，Mac 用户应该选择什么替代软件？",
    shortTitle: "Mac 代理软件选型指南",
    category: "macOS 教程",
    updated: "2026-11-18",
    readTime: "7 分钟",
    summary: "对比目前 Mac 端还在持续积极维护的主流开源代理客户端，帮助你平稳完成迁移。",
    h2_1: "三大主力替代方案全方位横评",
    p_1: "1. <strong>Clash Verge Rev (Mac 版)：</strong>功能最完备、界面现代、社区活跃度最高；<br>2. <strong>Sing-box for Mac：</strong>极客首选，内存占用最小；<br>3. <strong>Surge for Mac：</strong>商业天花板，体验最佳但收费较高。",
    h2_2: "平滑过渡方案实操",
    p_2: "直接卸载 ClashX 并清理旧的 Helper 组件，安装 Clash Verge Rev 即可无缝继承原有机场订阅，学习成本几乎为零。"
  },
  {
    slug: "macos-terminal-proxy-git-brew",
    title: "Mac 终端命令行 (Terminal / iTerm2)、Git 与 Homebrew 代理加速配置教程",
    shortTitle: "Mac 终端代理加速教程",
    category: "macOS 教程",
    updated: "2026-11-17",
    readTime: "8 分钟",
    summary: "解决程序员心腹大患！让 git clone、brew install、npm、pip 与 docker pull 跑满千兆带宽。",
    h2_1: "为什么系统开了代理，终端依然报错超时？",
    p_1: "macOS 系统的全局代理设置仅对遵循系统网络调用的 GUI 图形软件（如 Safari、Chrome）生效。命令行工具默认直接通过底层 socket 发起直连，因此必须通过环境变量显式指定本地代理端口。",
    h2_2: "在 .zshrc 中配置万能一键开关别名",
    p_2: "在 <code>~/.zshrc</code> 中加入以下配置：<br>" +
         "<code>alias proxy='export all_proxy=socks5://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890'</code><br>" +
         "<code>alias unproxy='unset all_proxy http_proxy'</code><br>" +
         "执行 <code>source ~/.zshrc</code> 后，在终端只需输入 <code>proxy</code> 即可瞬间让 Git 和 Brew 速度起飞。"
  },
  {
    slug: "macos-singbox-apple-silicon",
    title: "macOS 上 Sing-box 客户端安装与极简低资源消耗运行指南",
    shortTitle: "Sing-box Mac 教程",
    category: "macOS 教程",
    updated: "2026-11-16",
    readTime: "7 分钟",
    summary: "追求极度轻量与纯粹的 Mac 用户首选，内存常驻不足 30MB，支持一键配置切换。",
    h2_1: "原生针对 M 系列芯片架构优化",
    p_1: "纯 Go 语言编写，编译后无任何冗余框架，在 M1/M2/M3/M4 芯片上运行顺滑无比，即使开启数十个高并发连接也感受不到任何发热与卡顿。",
    h2_2: "配置下载与启动实操",
    p_2: "通过 GUI 封装客户端导入机场订阅，开启 Tun 模式实现全系统全局加速分流。"
  },
  {
    slug: "macos-safari-dns-leak-prevention",
    title: "macOS Safari 浏览器 DNS 泄露防范与安全隐私增强配置教程",
    shortTitle: "Mac DNS 防泄漏教程",
    category: "macOS 教程",
    updated: "2026-11-15",
    readTime: "6 分钟",
    summary: "防止运营商解析劫持与本地真实 IP 暴露，详解在 Mac 上启用远程 DNS 解析与 DoH 安全通道。",
    h2_1: "什么是 DNS 泄露隐患？",
    p_1: "即使你的网页流量通过代理节点发送，但如果域名的 DNS 解析依然通过本地电信运营商的 DNS 服务器进行，运营商就能完整记录你访问了哪些海外网址，且容易触发 DNS 污染污染报错。",
    h2_2: "在客户端中开启 Fake-IP 与远程 DoH 解析",
    p_2: "在 Clash Verge 或 Surge 中开启 <code>Fake-IP</code> 模式，并将远程 DNS 服务器设置为 Cloudflare (<code>https://1.1.1.1/dns-query</code>)，彻底杜绝任何形式的 DNS 泄露。"
  },

  // --- 软路由与多平台 (28-30) ---
  {
    slug: "router-openwrt-passwall-setup",
    title: "软路由 OpenWrt PassWall 插件节点导入与家庭局域网全局透明代理教程",
    shortTitle: "OpenWrt PassWall 教程",
    category: "软路由教程",
    updated: "2026-11-20",
    readTime: "10 分钟",
    summary: "在家里所有设备（手机、电视、PS5、Switch、平板）无需安装任何软件即可全自动科学上网！",
    h2_1: "什么是局域网透明代理？",
    p_1: "在软路由（如工控机、R2S/R4S、N1盒子）上运行 PassWall，路由器作为整个局域网的网关，在网络底层对流量进行分流。家里的苹果电视、手机连上 WiFi 就能直接看 Netflix 4K，完全免去每台设备单独配置客户端的繁琐。",
    h2_2: "PassWall 订阅导入与分流配置实操",
    p_2: "1. 进入 OpenWrt 后台，点击【服务】→【PassWall】→【节点列表】；<br>2. 点击【添加订阅】，粘贴机场订阅 URL 并勾选自动更新；<br>3. 在【基本设置】中开启开关，TCP 主节点选择香港或日本优质专线，DNS 模式选择 ChinaDNS-NG；<br>4. 保存并应用后，家庭局域网内所有设备立即具备透明出海能力。"
  },
  {
    slug: "router-openclash-full-guide",
    title: "OpenWrt OpenClash 插件进阶指南：Meta 内核、规则分流与防 DNS 污染",
    shortTitle: "OpenClash 进阶教程",
    category: "软路由教程",
    updated: "2026-11-19",
    readTime: "10 分钟",
    summary: "软路由上最强大的 Clash 移植插件，支持完整的规则集更新、流媒体分流与智能 DNS 劫持防御。",
    h2_1: "OpenClash 与 PassWall 怎么选？",
    p_1: "PassWall 偏向轻量和直接，而 OpenClash 拥有更加强大的规则分流引擎、可视化的节点管理面板以及对复杂分流策略（如国内直连、海外走专线、特定设备单独分流）的精细掌控能力。",
    h2_2: "从订阅导入到开启 TUN 混合模式",
    p_2: "在【配置订阅】中上传或拉取机场订阅，运行模式推荐选择【Fake-IP (TUN 混合模式)】。该模式兼容性最好，针对游戏主机和电视盒子的连通率可达 100%。"
  },
  {
    slug: "linux-server-clash-singbox",
    title: "Linux (Ubuntu / Debian / CentOS) 服务器命令行部署 Clash / Sing-box 代理指南",
    shortTitle: "Linux 命令行代理教程",
    category: "Linux 教程",
    updated: "2026-11-18",
    readTime: "9 分钟",
    summary: "面向系统运维与开发人员，手把手演示无桌面纯命令行环境安装代理核心、配置 systemd 守护进程与终端代理加速。",
    h2_1: "云服务器与本地 Linux 终端的出海痛点",
    p_1: "在开发环境中，通过 <code>apt update</code>、<code>docker pull</code> 或克隆海外 Git 仓库时经常因网络阻断超时。纯命令行服务器需要使用独立服务常驻在后台提供本地 SOCKS5/HTTP 代理端口。",
    h2_2: "通过 systemd 常驻运行与设置环境变量",
    p_2: "下载解压二进制内核放入 <code>/usr/local/bin/</code>，创建 <code>/etc/systemd/system/clash.service</code> 实现开机自启。在 <code>/etc/profile</code> 中导出 <code>http_proxy=http://127.0.0.1:7890</code> 即可畅快拉取一切依赖。"
  }
];

// =========================================================================
// 二、100 篇高质量博文（涵盖 10 大热门专题）
// =========================================================================
const blogTopics = [
  // 专题 1：机场选型与避坑防跑路 (1-10)
  {
    slug: "how-to-spot-scam-airports",
    title: "如何识别即将跑路的劣质机场？盘点骗子梯子的五大典型特征",
    category: "选型避坑",
    summary: "年付9.9无限流量？没有TG交流群？揭开资金盘小机场跑路前的常见前兆与征兆。"
  },
  {
    slug: "monthly-vs-yearly-subscription-advice",
    title: "买机场为什么一定要坚持‘月付优先’？算清时间成本与资金安全账",
    category: "选型避坑",
    summary: "不要被年付五折甚至三折的噱头冲昏头脑。详解月付试水对于抵抗网络波动与服务商跑路的定海神针作用。"
  },
  {
    slug: "airport-customer-service-importance",
    title: "工单半天不回？为什么客服响应速度是衡量机场技术实力的第一试金石",
    category: "选型避坑",
    summary: "遇到敏感时期封锁，有的机场10分钟修复，有的三天装死。剖析团队运维响应能力背后的硬件与人力成本。"
  },
  {
    slug: "free-nodes-vs-paid-airports-security",
    title: "网上公开的免费节点安全吗？揭秘免费代理背后的信息抓包与中间人攻击",
    category: "选型避坑",
    summary: "天下没有免费的午餐。分析使用公开节点可能导致账号密码泄露、Cookie 劫持及敏感隐私外泄的安全风险。"
  },
  {
    slug: "unlimited-traffic-permanent-plan-truth",
    title: "买断制‘永久不限时’流量包靠谱吗？揭露低价终身套餐的商业底层逻辑",
    category: "选型避坑",
    summary: "跨国专线带宽每月都是按Gbps计费的持续成本，为什么有些平台敢卖永久流量？深度解析不限时套餐的真实适用场景。"
  },
  {
    slug: "small-workshop-vs-large-brand-airports",
    title: "个人搭建的家庭小作坊与正规成熟品牌机场，体验差距到底有多大？",
    category: "选型避坑",
    summary: "从单线单入口到全国多线 BGP 容灾矩阵，详解大牌专业机场（如微风网络、隐形人、飞猫云）的底层基建壁垒。"
  },
  {
    slug: "airport-node-multiplier-trap",
    title: "警惕暗扣流量！揭秘机场‘节点倍率’套路：为什么100GB实际只能用30GB？",
    category: "选型避坑",
    summary: "3.0x、5.0x、甚至 10.0x 高倍率节点是怎么神不知鬼不觉扣光你流量的？教你一眼看清计费陷阱。"
  },
  {
    slug: "how-to-test-airport-before-paying",
    title: "购买机场前如何快速核验真实服务水准？五分钟极速自检五步法",
    category: "选型避坑",
    summary: "查看测速历史记录、观察晚高峰社群活跃度、测试节点域名解析与官网 SSL 证书合法性实操技巧。"
  },
  {
    slug: "student-budget-airport-buying-guide",
    title: "月预算 10-20 元的学生党，如何挑到稳定好用、不被割韭菜的平价机场？",
    category: "选型避坑",
    summary: "兼顾科研文献下载与日常娱乐，盘点飞V (¥4.9起)、微风网络 (¥8起 200GB) 等高性价比宝藏品牌。"
  },
  {
    slug: "company-cross-border-network-procurement",
    title: "跨境外贸团队与中小企业采购翻墙加速节点，必须注意的四大合规与稳定红线",
    category: "选型避坑",
    summary: "杜绝员工账号频繁异地报错，挑选具备企业级高可用 SLA、固定出口 IP 与发票报销支持的专线解决方案。"
  },

  // 专题 2：协议与网络底层技术原理 (11-20)
  {
    slug: "shadowsocks-protocol-evolution",
    title: "从经典 SS 到 Shadowsocks 2022：加密算法升级与抗主动探测机制深度剖析",
    category: "协议底层",
    summary: "Shadowsocks 为什么经久不衰？详解 AEAD 加密、现代握手特征混淆与专线网络下的极致低延迟。"
  },
  {
    slug: "vmess-vs-vless-protocol-difference",
    title: "V2Ray 核心之争：VMess 与 VLESS 协议到底有什么区别？为什么新机场更青睐 VLESS？",
    category: "协议底层",
    summary: "全面对比性能开销、认证机制与握手延迟，解释为什么去掉了繁重加密的 VLESS 运行效率更高、更省电。"
  },
  {
    slug: "trojan-protocol-https-camouflage",
    title: "Trojan 协议原理通俗讲：如何将翻墙流量完美伪装成正常的银行级 HTTPS 网页访问？",
    category: "协议底层",
    summary: "越过特征审查的秘密武器——利用标准 TLS 证书握手与假网页回落机制，让 GFW 审查系统误以为是普通网站浏览。"
  },
  {
    slug: "hysteria2-quic-brutal-algorithm",
    title: "Hysteria 2 协议深度解析：基于 QUIC/UDP 的暴力拥塞控制算法如何征服恶劣弱网？",
    category: "协议底层",
    summary: "为什么丢包率高达 20% 时它依然能跑出 500Mbps？揭秘 Brutal 速率控制与自适应跳频机制。"
  },
  {
    slug: "tuic-protocol-low-latency-tech",
    title: "TUIC 协议为什么能做到极低握手延迟？新一代 QUIC 代理协议性能基准评测",
    category: "协议底层",
    summary: "0-RTT 握手、多路复用连接与拥塞控制自研算法，解析 TUIC 在移动蜂窝网络下的超神表现。"
  },
  {
    slug: "reality-tls-camouflage-breakthrough",
    title: "Xray REALITY 黑科技原理：无需自备域名也能借壳伪装大型海外网站的终极方案",
    category: "协议底层",
    summary: "彻底消灭证书特征！深入分析偷取境外真实合法域名（如苹果、微软、雅虎）TLS 证书签名的实现原理。"
  },
  {
    slug: "grpc-transport-proxy-performance",
    title: "gRPC 传输载体在代理软件中的应用：多路复用与抗网络抖动实测对比",
    category: "协议底层",
    summary: "基于 HTTP/2 标准的 gRPC 管道在面对运营商 QoS 流量整形限速时的穿透力表现分析。"
  },
  {
    slug: "websocket-tls-cdn-relay-principle",
    title: "WebSocket + TLS + Cloudflare CDN 优缺点全解析：为什么能防封却速度奇慢？",
    category: "协议底层",
    summary: "详解套 CDN 拯救被墙 IP 的工作原理，以及为什么免费 CDN 节点会带来高达 300ms 延迟与晚高峰严重限速。"
  },
  {
    slug: "wireguard-in-china-blocking-analysis",
    title: "为什么在大陆直接裸连 WireGuard 会秒被墙？分析 UDP 特征识别与封锁机制",
    category: "协议底层",
    summary: "分析 WireGuard 固定的数据包头握手特征为何容易被防火墙启发式算法精准识别并直接阻断。"
  },
  {
    slug: "tcp-brr-congestion-control-explained",
    title: "Google BBR 拥塞控制算法原理：为什么服务器开启 BBR 后油管测速能提升数倍？",
    category: "协议底层",
    summary: "从基于丢包退避的 Cubic 转向基于带宽延迟积测量的 BBR，彻底改变国际出口瓶颈的关键技术。"
  },

  // 专题 3：线路拓扑与机房深度解析 (21-30)
  {
    slug: "iepl-vs-iplc-physical-differences",
    title: "IEPL 与 IPLC 物理专线到底有什么区别？哪种内网专线更适合日常科学上网？",
    category: "线路机房",
    summary: "以太网点对点专线与传统租用线路的对比，详解为什么 IEPL 具备更弹性的带宽调度能力。"
  },
  {
    slug: "bgp-multi-line-entry-importance",
    title: "为什么高端机场一定要配多线 BGP 入口？揭秘电信、联通、移动互联互通难题",
    category: "线路机房",
    summary: "电信用户连联通入口卡顿、移动宽带跨网延迟高达150ms？详解 BGP 智能路由分发如何平衡全国三网连接。"
  },
  {
    slug: "cn2-gia-as9929-cmin2-comparison",
    title: "顶级优质骨干网大 PK：电信 CN2 GIA、联通 AS9929 与移动 CMIN2 哪家强？",
    category: "线路机房",
    summary: "三大运营商面向高净值政企与跨境传输的专属 VIP 骨干通道横向对比与延迟数据测评。"
  },
  {
    slug: "as4837-cost-effective-backbone",
    title: "性价比之王联通 AS4837 (联通 9929 平替) 线路解析：为什么平价机场都在用它？",
    category: "线路机房",
    summary: "超大容量、相对平价的出口带宽，解析 AS4837 在亚太（香港、日本）中转中的性价比统治地位。"
  },
  {
    slug: "cmi-mobile-backbone-congestion",
    title: "移动 CMI 国际出口的前世今生：曾经的平民神器为何在晚高峰频频炸线？",
    category: "线路机房",
    summary: "深度分析移动 CMI 出口容量饱和、QoS 等级调降以及普通公网中转节点受到的严重波及。"
  },
  {
    slug: "residential-ip-vs-datacenter-ip",
    title: "原生住宅 IP (ISP) 与机房广播 IP 有何本质不同？为什么前者能解锁一切？",
    category: "线路机房",
    summary: "机房 ASN 与民用家宽 ASN 数据库查询机制，揭秘流媒体与金融系统识别代理服务器的底层逻辑。"
  },
  {
    slug: "hongkong-mega-i-datacenter-profile",
    title: "探秘香港网络心脏：为什么 90% 的机场亚太节点都放在沙田与柴湾 Mega-i 机房？",
    category: "线路机房",
    summary: "作为亚太最大的网络交换中心，Mega-i 汇聚全球数百家运营商物理海缆的独特战略地位。"
  },
  {
    slug: "japan-tokyo-equinix-ty8-profile",
    title: "日本东京 Equinix TY8 与软银 BBTEC 机房解析：二次元追番与日服游戏极速首选",
    category: "线路机房",
    summary: "对中国大陆北方（华北、东北）网络极其友好的东京机房链路拓扑与超低丢包优势。"
  },
  {
    slug: "singapore-global-switch-gateway",
    title: "新加坡 Global Switch 骨干机房深度解析：东南亚 TikTok 电商与涉外业务枢纽",
    category: "线路机房",
    summary: "连接南亚、东南亚与欧洲的关键陆地跳板，在 TikTok Shop 直播与涉外运营中的不可替代性。"
  },
  {
    slug: "us-west-coast-los-angeles-gateway",
    title: "美西洛杉矶机房 (Coresite / Psychz) 测评：为什么便宜大流量节点都在美国？",
    category: "线路机房",
    summary: "中美海底光缆直连、超低国际带宽单价与超大流量套餐的温床，解析美西节点的利与弊。"
  },

  // 专题 4：AI 大模型与海外科研工具使用场景 (31-40)
  {
    slug: "chatgpt-access-denied-solutions",
    title: "ChatGPT 提示‘Access Denied’或 1020 错误怎么办？彻底搞懂 Cloudflare 拦截机制",
    category: "AI大模型",
    summary: "IP 纯净度风控过高导致被拦截的万能解决方案，教你切换原生住宅节点秒解封锁。"
  },
  {
    slug: "claude-ai-account-ban-prevention",
    title: "为什么你的 Claude 3.5 刚注册就秒封？Anthropic 极致风控规则与防封指南",
    category: "AI大模型",
    summary: "IP 频繁跳变、广播机房高风险评分、浏览器指纹冲突——手把手教你建立长久稳定的 Claude 使用环境。"
  },
  {
    slug: "chatgpt-plus-subscription-payment-ip",
    title: "订阅 ChatGPT Plus (GPT-4o) 绑卡失败？节点 IP 欺诈度检测与支付避坑全流程",
    category: "AI大模型",
    summary: "Stripe 支付网关反欺诈系统的严苛审查，为什么必须配合原生住宅专线节点与虚拟信用卡才能支付成功。"
  },
  {
    slug: "midjourney-discord-connection-guide",
    title: "Discord 与 Midjourney 绘画出图卡住？如何利用规则分流实现图片生成极速加载",
    category: "AI大模型",
    summary: "优化 Discord CDN 节点路由，解决 Midjourney 提示词发送超时和高清大图加载半天刷不出来的痛点。"
  },
  {
    slug: "perplexity-ai-search-best-nodes",
    title: "用 Perplexity AI 做学术研报，什么样的专线节点能做到无感秒开不弹验证码？",
    category: "AI大模型",
    summary: "评测 14 家主流机场针对新锐 AI 搜索引擎 Perplexity 的支持度，推荐高信誉出口落地节点。"
  },
  {
    slug: "google-gemini-advanced-regional-limits",
    title: "Google Gemini 提示所在国家/地区不受支持？谷歌生态账号防风控环境配置",
    category: "AI大模型",
    summary: "谷歌服务对地理位置（GEO IP）与 WebRTC 泄露的严格检测，教你配置精准美国/英国分流。"
  },
  {
    slug: "github-copilot-vscode-acceleration",
    title: "程序员必备：VS Code 中 GitHub Copilot 代码提示总是连接超时？一招彻底修复",
    category: "AI大模型",
    summary: "配置 VS Code 代理通道或开启 TUN 虚拟网卡，让 AI 自动补全代码零延迟响应。"
  },
  {
    slug: "sora-video-generation-bandwidth-needs",
    title: "Sora 视频大模型与高清视频渲染，对翻墙节点的下行带宽与稳定性有什么要求？",
    category: "AI大模型",
    summary: "大模型生成高清长视频动辄数百兆，为什么普通小带宽梯子会卡死在中途？"
  },
  {
    slug: "api-keys-high-concurrency-proxy",
    title: "调用 OpenAI / Anthropic 官方 API，如何配置高并发代理避免遭遇 429 速率限制？",
    category: "AI大模型",
    summary: "面向开发者的代理池与静态 IP 策略，防止批量调用被官方安全网关误封 IP 网段。"
  },
  {
    slug: "academic-google-scholar-arxiv-nodes",
    title: "高校研究生查文献：Google Scholar 频繁弹出人机验证？换用纯净学术节点全搞定",
    category: "AI大模型",
    summary: "公共梯子 IP 被学生滥用刷爬虫导致 Google 弹验证码的根源剖析与低门槛解决法。"
  },

  // 专题 5：海外流媒体与影音娱乐解锁指南 (41-50)
  {
    slug: "netflix-4k-uhd-hdr-airport-requirements",
    title: "想在电视上流畅看 Netflix 4K 原生杜比视界，对机场线路和带宽有什么硬指标？",
    category: "流媒体解锁",
    summary: "单设备稳定 25Mbps 下行不丢包、DNS 自动解锁非自制剧、双 ISP 原生住宅 IP 核心要求解读。"
  },
  {
    slug: "disney-plus-regional-libraries-unblocking",
    title: "Disney+ 提示错误代码 73 或打不开？主流专线机场 Disney+ 解锁实测与避坑",
    category: "流媒体解锁",
    summary: "Disney+ 对数据中心 IP 的强硬屏蔽机制，推荐稳定解锁新加坡与美区 Disney+ 的机场方案。"
  },
  {
    slug: "youtube-premium-family-plan-region",
    title: "YouTube Premium 会员低价跨区上车指南：如何配合原生节点成功订阅家庭组？",
    category: "流媒体解锁",
    summary: "利用特定地区节点完成低资费 YouTube 会员开通，并保持日常免广告观看的技巧。"
  },
  {
    slug: "tiktok-overseas-login-without-sim",
    title: "苹果与安卓手机免拔卡玩转海外版 TikTok：节点伪装度与住宅原生 IP 完全指南",
    category: "流媒体解锁",
    summary: "拔卡、改时区、关定位还不够？深度解析 TikTok 针对运营商 MCC 与 IP 纯净度的联合风控。"
  },
  {
    slug: "spotify-regional-music-copyright",
    title: "Spotify 跨区听歌：为什么必须每 14 天用对应国家节点登录一次？防受限技巧",
    category: "流媒体解锁",
    summary: "针对免费版与家庭版 Spotify 用户的异地登录机制科普与规则白名单分流设置。"
  },
  {
    slug: "bahamut-anime-mad-taiwan-ip",
    title: "二次元必备：巴哈姆特动画疯锁区看不了？选对台湾原生 IP 专线节点畅享 1080P",
    category: "流媒体解锁",
    summary: "台湾大哥大、中华电信等台湾本地原生商用 IP 对动画疯版权库的秒解测评。"
  },
  {
    slug: "hbo-max-streaming-geo-block",
    title: "Max (原 HBO Max) 提示地理限制不可用？用美区专线机场畅看权力的游戏与最新美剧",
    category: "流媒体解锁",
    summary: "Max 针对跨境流媒体的黑名单 IP 库屏蔽，分享稳定解锁 4K 蓝光片源的节点推荐。"
  },
  {
    slug: "bbc-iplayer-uk-tv-license-proxy",
    title: "看英剧与生肉纪录片：BBC iPlayer 英国本地专线节点配置与账号注册实测",
    category: "流媒体解锁",
    summary: "英国伦敦与曼彻斯特专线节点解锁 BBC iPlayer 的真实连通率与画质测试。"
  },
  {
    slug: "apple-tv-plus-mls-season-pass",
    title: "Apple TV+ 与美职联季票流畅观看：针对苹果生态 CDN 缓存节点的专属分流优化",
    category: "流媒体解锁",
    summary: "避免苹果流媒体走弯路，让 Apple TV 4K 盒子发挥物理画质巅峰的机场节点搭配。"
  },
  {
    slug: "twitch-live-streaming-lag-fix",
    title: "Twitch (推特生放送) 观看直播频繁缓冲转圈？提升单线程峰值吞吐实战指南",
    category: "流媒体解锁",
    summary: "直播流媒体不同于预加载点播，对节点的瞬时下行带宽抖动极其敏感，如何选对低延迟节点。"
  },

  // 专题 6：跨国联机游戏与低延迟加速 (51-60)
  {
    slug: "steam-community-store-error-118-fix",
    title: "Steam 社区与商店错误代码 -118 / -102 完美解决：一键直连与分流规则配置",
    category: "游戏加速",
    summary: "国内网络访问 Steam 社区个人资料与创意工坊频繁卡死的根源与 Clash 规则分流修复。"
  },
  {
    slug: "apex-legends-tokyo-server-low-ping",
    title: "Apex 英雄亚服（东京/新加坡）打排位延迟高达 100ms？换用 IEPL 专线压至 35ms",
    category: "游戏加速",
    summary: "实测微风网络、闪跃与隐形人专线节点在 EA Apex 跨国联机中的丢包与击杀判定表现。"
  },
  {
    slug: "ps5-nintendo-switch-lan-proxy",
    title: "主机党狂喜：PS5 与 Switch 如何连接电脑或软路由的代理节点加速联机下载？",
    category: "游戏加速",
    summary: "通过设置局域网 HTTP/SOCKS 代理或 TUN 模式，解决任天堂 eShop 下载慢与 PSN 联机 NAT 严格问题。"
  },
  {
    slug: "battle-net-international-cod-lag",
    title: "战网国际服下载使命召唤只有几百KB？全速跑满千兆宽带的代理节点设置",
    category: "游戏加速",
    summary: "解除暴雪战网国际服对大陆 IP 施加的跨境下载限速，一键实现满速下载大型游戏。"
  },
  {
    slug: "valorant-riot-games-vanguard-proxy",
    title: "无畏契约 (瓦罗兰特) 外服联机指南：防 Vanguard 反作弊拦截与安全节点选择",
    category: "游戏加速",
    summary: "拳头反作弊系统对后台代理软件的敏感度分析，推荐使用纯专线 UDP 模式避开被判定异地异常。"
  },
  {
    slug: "game-nat-type-open-optimization",
    title: "联机游戏提示 NAT 类型为 Strict (严格) 或 Moderate？优化节点提升到 Type A / Open",
    category: "游戏加速",
    summary: "端口映射、FullCone NAT (全锥形 NAT) 在节点服务器中的重要性及其对游戏语音连麦的影响。"
  },
  {
    slug: "lost-ark-korean-rtt-jitter-test",
    title: "失落的方舟 (韩服/美服) 对网络丢包的极端要求：为什么哪怕 1% 丢包也会频繁掉线？",
    category: "游戏加速",
    summary: "MMORPG 跨国团本联机避坑，解析为什么普通中转机场不能用于高强度跨国副本。"
  },
  {
    slug: "mobile-games-wild-rift-brawl-stars",
    title: "手机玩英雄联盟手游 (Wild Rift) 或荒野乱斗外服：安卓与 iOS 低延迟加速技巧",
    category: "游戏加速",
    summary: "手机端小火箭或 Clash 开启特定游戏规则，实现毫秒级响应不漂移操作体验。"
  },
  {
    slug: "game-speed-booster-vs-airport-nodes",
    title: "专业游戏加速器（UU/雷神）与机场 IPLC 专线，在打外服游戏时到底谁更强？",
    category: "游戏加速",
    summary: "技术底层大揭秘：游戏加速器是专线，高端专线机场也是专线，两者在延迟、价格和通用性上的权衡。"
  },
  {
    slug: "genshin-starrail-global-server-sync",
    title: "原神 / 崩坏星穹铁道国际服数据同步与联机：免受海外 CDN 拥堵的节点配置",
    category: "游戏加速",
    summary: "针对米哈游海外服务器全球发布版本的网络直连优化，保持极速低延迟更新。"
  },

  // 专题 7：跨境外贸与跨境电商网络安全 (61-70)
  {
    slug: "amazon-seller-central-ip-association-risk",
    title: "亚马逊卖家中心防关联红线：为什么绝对不能用公共机场节点登录店铺后台？",
    category: "外贸电商",
    summary: "多人共享 IP 导致亚马逊店铺直接关联封店的惨痛教训，外贸企业正确网络隔离法则。"
  },
  {
    slug: "shopify-independent-site-daily-operations",
    title: "Shopify 独立站卖家日常测品与投放广告，如何挑选多地区干净原生节点？",
    category: "外贸电商",
    summary: "模拟真实欧美消费者环境，查看 Google 搜索结果与 Facebook 广告竞品展示技巧。"
  },
  {
    slug: "paypal-cross-border-risk-control-ip",
    title: "PayPal 频繁触发二次手机验证或风控限额？保持固定 IP 环境的实操策略",
    category: "外贸电商",
    summary: "跨境金融支付对频繁切换国家 IP 的极度敏感反应，教你利用专线保持长久干净登录。"
  },
  {
    slug: "whatsapp-telegram-anti-ban-strategy",
    title: "外贸获客必备：WhatsApp 与 Telegram 账号防封秘籍，选对干净住宅节点是关键",
    category: "外贸电商",
    summary: "为什么刚注册的号码立刻被封？解析注册 IP 的信誉评分（Fraud Score）对社交账号存活的决定性作用。"
  },
  {
    slug: "google-ads-manager-regional-targeting",
    title: "投放 Google 搜索广告与展示广告，如何使用对应目标国家节点核查广告展现位置？",
    category: "外贸电商",
    summary: "利用节点切换至洛杉矶、伦敦、法兰克福实地测试广告出价与关键词排名的实用指南。"
  },
  {
    slug: "tiktok-shop-live-streaming-bandwidth",
    title: "美区与英区 TikTok Shop 带货直播：必须具备 50Mbps 纯专线才能不掉帧的秘密",
    category: "外贸电商",
    summary: "跨境直播对上行带宽（Upload）与抖动的严苛考验，推荐具备千兆物理专线的机场选择。"
  },
  {
    slug: "overseas-bank-login-security-rules",
    title: "登录香港汇丰、中银香港或美国华美银行 App：防止异地登录异常锁卡的规则分流法",
    category: "外贸电商",
    summary: "在 Clash 中为跨国银行单独设立直连或固定香港专线白名单，保障资金安全无虞。"
  },
  {
    slug: "remote-work-zoom-teams-high-quality",
    title: "跨国远程办公：用 Zoom 或 Microsoft Teams 视频会议总卡顿？一键修复音视频丢包",
    category: "外贸电商",
    summary: "实时音视频通信对延迟抖动的零容忍，推荐选用丢包率低于 0.3% 的全专线节点方案。"
  },
  {
    slug: "linkedin-outbound-sales-lead-generation",
    title: "领英 (LinkedIn) 商务拓展与客户私信：如何避免被判定异常行为导致账号临时限制？",
    category: "外贸电商",
    summary: "海外商业社交平台对滥用爬虫代理 IP 的打击机制分析与长期安全操作规范。"
  },
  {
    slug: "stripe-wise-financial-tools-ip-cleanliness",
    title: "Stripe 与 Wise 账户风控避坑：高纯净住宅 IP 在外贸资金收付中的不可替代价值",
    category: "外贸电商",
    summary: "解析合规跨国收付款账户的 IP 安全环境搭建，防范触发 KYC 人工二次审核。"
  },

  // 专题 8：代理规则与分流模式进阶实战 (71-80)
  {
    slug: "clash-rule-based-routing-deep-dive",
    title: "吃透 Clash 规则分流机制：DOMAIN-SUFFIX、IP-CIDR 与 GEOIP 怎么协同工作？",
    category: "分流规则",
    summary: "万字长文讲透规则匹配优先级，国内直连、海外代理、精准分流的底层决策树。"
  },
  {
    slug: "dns-leak-test-and-prevention-guide",
    title: "你的真实 IP 暴露了吗？在线 DNS 泄露检测与 DoH/DoT 加密安全配置教程",
    category: "分流规则",
    summary: "利用 dnsleaktest 网站自检，彻底切断本地运营商通过 DNS 请求窥探你上网行踪的通道。"
  },
  {
    slug: "clash-fake-ip-vs-redir-host",
    title: "Clash 的 Fake-IP 与 Redir-Host 模式有什么区别？为什么当前 Fake-IP 是唯一推荐？",
    category: "分流规则",
    summary: "本地构造假 IP 实现零握手延迟解析，详解 Fake-IP 模式对网页加载速度的飞跃性提升。"
  },
  {
    slug: "tun-mode-virtual-network-adapter-guide",
    title: "TUN 模式完全上手指南：如何在不配置任何代理端口的情况下接管全局应用？",
    category: "分流规则",
    summary: "虚拟网卡驱动级别的流量接管，完美解决命令行、游戏以及各类顽固软件不遵循系统代理的难题。"
  },
  {
    slug: "custom-clash-strategy-groups-tutorial",
    title: "手把手教你编写自定义 Clash 策略组：实现流媒体、AI 与日常网页自动分流到不同国家",
    category: "分流规则",
    summary: "实战配置香港主力组、日本 AI 组、美国流媒体组与故障自动切换 (Fallback) 组。"
  },
  {
    slug: "subconverter-local-deployment-safety",
    title: "在线订阅转换安全吗？手把手教你在电脑本地部署 Subconverter 杜绝订阅泄露",
    category: "分流规则",
    summary: "防止机场节点信息被第三方网页盗用，利用 Docker 或本地轻量客户端进行离线私密转换。"
  },
  {
    slug: "geoip-database-update-and-country-routing",
    title: "GeoIP 数据库过期导致分流错误？如何定期更新 Country.mmdb 保证国内域名准确直连",
    category: "分流规则",
    summary: "国内部分新开网站被误判走代理浪费流量？教你一键更新最新的纯真与 MaxMind 规则库。"
  },
  {
    slug: "pac-proxy-auto-config-modern-status",
    title: "老旧的 PAC 自动代理脚本在 2026 年还有用吗？对比现代规则集的淘汰必然性",
    category: "分流规则",
    summary: "从单调的 PAC 文本规则演进到如今千万级规则分流，梳理代理技术的进化简史。"
  },
  {
    slug: "fallback-urltest-loadbalance-differences",
    title: "Clash 的 Fallback (故障回退)、URLTest (延迟优先) 与 LoadBalance (负载均衡) 深度对比",
    category: "分流规则",
    summary: "面对突发节点下线，哪种策略组能让你毫无感知地继续看视频？策略组算法全解读。"
  },
  {
    slug: "tailscale-headscale-with-airport-proxy",
    title: "异地组网神器 Tailscale 遇上机场代理：如何让家庭局域网与翻墙加速和谐共存？",
    category: "分流规则",
    summary: "解决虚拟局域网与代理 TUN 虚拟网卡路由表冲突的高阶网络工程调试指南。"
  },

  // 专题 9：机场测速图与网络监控真相 (81-90)
  {
    slug: "speedtest-rainbow-graph-lies",
    title: "彩虹测速图能代表一切吗？揭秘机场测速博主千兆跑满背后的‘测试盲区’",
    category: "测速揭秘",
    summary: "多线程瞬间冲顶闲时测速不等于日常秒开，为什么单线程延迟和丢包才是体验核心。"
  },
  {
    slug: "peak-hours-packet-loss-monitoring",
    title: "为什么晚上 8 点到 11 点是机场的‘修罗场’？晚高峰国际出口骨干网拥堵真相",
    category: "测速揭秘",
    summary: "下班高峰期全民追剧，公网中转和普通直连为什么会瞬间雪崩，而物理专线依然从容。"
  },
  {
    slug: "how-to-use-pingpe-to-detect-jitter",
    title: "学会用 Ping.pe 与 ITDog 监控节点健康：不再当小白，五分钟看清真实网络抖动",
    category: "测速揭秘",
    summary: "利用全球多点并发 PING，一眼看出服务商到底是真内网专线还是普通公网中转。"
  },
  {
    slug: "single-thread-vs-multi-thread-speed",
    title: "单线程测速与多线程测速到底有什么区别？日常刷网页和看视频到底看哪一个？",
    category: "测速揭秘",
    summary: "深入剖析并发 TCP 连接机制，解释为什么单线程高带宽才是真正秒开油管 4K 的指标。"
  },
  {
    slug: "youtube-nerds-stats-speed-kbps",
    title: "YouTube‘详细统计信息 (Stats for nerds)’怎么看？Connection Speed 达到多少算合格？",
    category: "测速揭秘",
    summary: "教你在视频播放时按右键打开统计窗口，看懂 Kbps 吞吐、缓冲健康度与丢帧率。"
  },
  {
    slug: "airport-traffic-multiplier-fairness",
    title: "公道还是套路？主流机场节点倍率全方位大盘点：寻找全 1.0x 良心服务商",
    category: "测速揭秘",
    summary: "对比各大平台的倍率设置，推荐明码实价扣费、无暗设暗扣流量的优质平台。"
  },
  {
    slug: "how-airports-calculate-bandwidth-costs",
    title: "算一笔明白账：机场运维一个 Gbps 专线带宽究竟要花多少钱？为什么低价专线必是假专线？",
    category: "测速揭秘",
    summary: "三大运营商机房机柜费、光纤租用费与海外落地服务器成本大起底，揭开低价专线骗局。"
  },
  {
    slug: "node-offline-causes-and-repair-time",
    title: "节点突然大面积红色超时？盘点机场节点离线的四大主因与正常抢修时效",
    category: "测速揭秘",
    summary: "DDOS 恶意网络攻击、入口机房故障、域名污染与上游机房维护，如何理性看待网络波动。"
  },
  {
    slug: "automated-node-availability-monitoring",
    title: "如何搭建自己的节点自动化监控系统？利用 Uptime Kuma 24 小时追踪机场可用率",
    category: "测速揭秘",
    summary: "面向极客用户，手把手演示在 VPS 或 NAS 上部署轻量监控面板，节点掉线自动发 TG 告警。"
  },
  {
    slug: "truth-behind-high-rating-affiliate-blogs",
    title: "测评博主推荐的机场一定靠谱吗？看懂 Affiliate 返利机制与挑选客观测评的技巧",
    category: "测速揭秘",
    summary: "拒绝无脑吹捧，学会甄别那些敢于客观指出品质局限、给出中肯缺点分析的真实评测站。"
  },

  // 专题 10：常见网络报错与故障万能排查 (91-100)
  {
    slug: "system-time-out-of-sync-handshake-error",
    title: "电脑时间快了 1 分钟导致翻墙全面瘫痪？详解 TLS 加密握手对时钟同步的严苛要求",
    category: "故障排查",
    summary: "90% 新手连不上的头号元凶！教你在 Windows 和 Mac 上一键校准北京时间秒解故障。"
  },
  {
    slug: "port-7890-in-use-conflict-fix",
    title: "启动报错‘Port 7890 already in use’？解决 Clash 端口冲突与后台残余进程排查",
    category: "故障排查",
    summary: "端口被其他软件占用怎么办？在设置中快速修改 Mixed Port 为 7895 或杀掉旧进程教程。"
  },
  {
    slug: "browser-proxy-server-refused-connection",
    title: "网页打不开提示‘代理服务器拒绝连接 (ERR_PROXY_CONNECTION_FAILED)’万能急救法",
    category: "故障排查",
    summary: "软件关了但系统代理开关没关？教你在 Windows 注册表和系统设置中一秒恢复正常上网。"
  },
  {
    slug: "ssl-certificate-untrusted-warning-fix",
    title: "打开网页弹出‘您的连接不是私密连接 (NET::ERR_CERT_AUTHORITY_INVALID)’怎么办？",
    category: "故障排查",
    summary: "剖析杀毒软件证书拦截、第三方解密劫持与 Clash 证书配置错误的修复流程。"
  },
  {
    slug: "dns-probe-finished-nxdomain-error",
    title: "报错‘DNS_PROBE_FINISHED_NXDOMAIN’解析失败？五步彻底重置本地 DNS 缓存",
    category: "故障排查",
    summary: "在命令行运行 <code>ipconfig /flushdns</code> 与设置安全公共 DNS，解决域名打不开难题。"
  },
  {
    slug: "telegram-connecting-infinite-spinner",
    title: "Telegram (电报) 一直转圈显示‘Connecting’？一键配置 MTProto 与本地 SOCKS5 代理",
    category: "故障排查",
    summary: "客户端开启代理后 TG 依然不走的根因，教你在 TG 设置里填入 <code>127.0.0.1:7890</code> 立即连上。"
  },
  {
    slug: "lan-allow-lan-sharing-failed-fix",
    title: "开启【Allow LAN】局域网共享后，手机或另一台电脑连不上本地代理端口排查",
    category: "故障排查",
    summary: "Windows 防火墙拦截入站规则、局域网 IP 变动与子网隔离问题的一站式解决方法。"
  },
  {
    slug: "high-cpu-memory-leak-in-proxy-client",
    title: "客户端运行一段时间后 CPU 占用 100% 电脑卡死？排查内存泄露与大文件日志溢出",
    category: "故障排查",
    summary: "关闭 Verbose 调试日志，清理缓存规则集，让客户端常驻后台始终维持丝滑流畅。"
  },
  {
    slug: "anti-virus-software-blocking-tun-adapter",
    title: "360 或火绒杀毒软件把 TUN 虚拟网卡当病毒拦截？添加安全信任白名单图文教程",
    category: "故障排查",
    summary: "解决安装 Service Mode 或启用 TUN 网卡驱动时被安全管家误报阻断的详细设置方法。"
  },
  {
    slug: "subscription-link-timeout-updating-fix",
    title: "更新订阅一直卡在‘Timeout’更新失败？四种方法教你顺利拉取最新节点信息",
    category: "故障排查",
    summary: "利用已有旧节点拉新订阅、使用手机热点绕过本地 DNS 劫持、以及登录后台获取防封备用域名指南。"
  }
];

console.log(`>>> 准备写入 30 篇教程与 100 篇高质量博文数据模型...`);
console.log(`- 教程清单: ${guidesList.length} 篇`);
console.log(`- 博文清单: ${blogTopics.length} 篇`);

// 输出为数据文件
fs.writeFileSync(path.resolve(__dirname, '../data/guidesBulk.json'), JSON.stringify(guidesList, null, 2), 'utf8');
fs.writeFileSync(path.resolve(__dirname, '../data/blogBulk.json'), JSON.stringify(blogTopics, null, 2), 'utf8');
console.log(">>> 成功保存数据至 data/guidesBulk.json 与 data/blogBulk.json！");
