/**
 * 翻墙机场测评网 - 横向对比工具交互引擎
 * 原生 JS 驱动 · 包含全部 14 家专属品牌多维度参数动态实时对比
 */

(function () {
  // 14 家机场数据库镜像
  var airportsData = [
    {
      id: "breezenet",
      name: "微风网络 Breezenet",
      badge: "IEPL/IPLC专线 · 200GB超大流量",
      rating: 4.9,
      priceDesc: "¥8.00 / 月起",
      trafficDesc: "200 GB - 500 GB / 月",
      costPerGB: "约 0.040 元 / GB",
      lineType: "IEPL/IPLC 物理内网专线",
      regions: "香港、日本、新加坡、美国、台湾",
      protocols: "VLESS, Shadowsocks, Trojan",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web/App 原生秒开，Claude免验证，Midjourney极速",
      streamingSupport: "Netflix全区 4K HDR、Disney+、YouTube 4K、TikTok免拔卡",
      advantage: "¥8/月享200GB超大流量；纯物理专线不卡顿；专属优惠码 weifeng90",
      disadvantage: "不提供永久不限时套餐",
      reviewUrl: "../review/breezenet/index.html",
      airportUrl: "../airport/breezenet/index.html",
      affUrl: "https://edp01.breezenetaff.com/#/?code=h4GlIXwC"
    },
    {
      id: "muguang",
      name: "暮光网络",
      badge: "专线架构 · 120GB配额与VLESS",
      rating: 4.7,
      priceDesc: "¥20.00 / 月起",
      trafficDesc: "120 GB - 300 GB / 月",
      costPerGB: "约 0.166 元 / GB",
      lineType: "专线节点网络架构",
      regions: "香港、日本、新加坡、美国",
      protocols: "VLESS, Shadowsocks",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT 网页与App端支持，Copilot稳定可用",
      streamingSupport: "YouTube 4K流畅，Netflix自制剧可用，Disney+支持",
      advantage: "专线网络架构波动低；支持VLESS协议开销小；香港延迟低至15ms",
      disadvantage: "暂未提供专属折扣码",
      reviewUrl: "../review/muguang/index.html",
      airportUrl: "../airport/muguang/index.html",
      affUrl: "https://varnexa.twilightaff.com/#/?code=8EtJCnBT"
    },
    {
      id: "feimaoyun",
      name: "飞猫云",
      badge: "IEPL/IPLC双线冗余 · 性价比首选",
      rating: 4.7,
      priceDesc: "约 ¥7.00 / 月起 (年付折算)",
      trafficDesc: "150 GB - 350 GB / 月",
      costPerGB: "约 0.046 元 / GB",
      lineType: "IEPL/IPLC / 优质中转线路",
      regions: "香港、台湾、日本、新加坡、美国",
      protocols: "Shadowsocks, Trojan, V2Ray",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web正常可用，Claude与Sora支持",
      streamingSupport: "Netflix全区、Disney+、YouTube 4K/8K、TikTok",
      advantage: "年付折算约7元/月起；双线冗余入口智能调度；优惠码 flycat888",
      disadvantage: "特惠7元套餐需按年付周期结算",
      reviewUrl: "../review/feimaoyun/index.html",
      airportUrl: "../airport/feimaoyun/index.html",
      affUrl: "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx"
    },
    {
      id: "wuyou",
      name: "无忧 (无忧链接)",
      badge: "IPLC纯专线 · 稳定无忧",
      rating: 4.7,
      priceDesc: "¥19.00 / 月起",
      trafficDesc: "100 GB - 260 GB / 月",
      costPerGB: "约 0.190 元 / GB",
      lineType: "IPLC 纯专线",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, V2Ray",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web端畅通，Claude可用，Copilot极速",
      streamingSupport: "YouTube 4K，Netflix自制剧与非自制剧，Disney+",
      advantage: "真实全程IPLC专线敏感期坚挺；延迟低至14ms；优惠码 wuyou666",
      disadvantage: "入门套餐100GB相对适中",
      reviewUrl: "../review/wuyou/index.html",
      airportUrl: "../airport/wuyou/index.html",
      affUrl: "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J"
    },
    {
      id: "lingmao",
      name: "灵猫",
      badge: "IPLC真实专线 · 全原生IP解锁",
      rating: 4.7,
      priceDesc: "¥25.00 / 月起",
      trafficDesc: "150 GB - 350 GB / 月",
      costPerGB: "约 0.166 元 / GB",
      lineType: "IPLC 纯专线",
      regions: "香港、日本、新加坡、美国",
      protocols: "V2Ray, Shadowsocks",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT 全平台秒开，Claude原生解锁，Midjourney高并发",
      streamingSupport: "Netflix全区 4K、Disney+、YouTube 4K、HBO Max",
      advantage: "全节点配备原生落地IP池；峰值吞吐达800Mbps以上；流媒体全解",
      disadvantage: "无10元以内极低体验包",
      reviewUrl: "../review/lingmao/index.html",
      airportUrl: "../airport/lingmao/index.html",
      affUrl: "https://vip02.civetaff.com/#/?code=SXY8qyrG"
    },
    {
      id: "flashleap",
      name: "闪跃 FlashLeap",
      badge: "IPLC纯专线 · 低延迟游戏与AI",
      rating: 4.8,
      priceDesc: "¥24.00 / 月起",
      trafficDesc: "150 GB - 360 GB / 月",
      costPerGB: "约 0.160 元 / GB",
      lineType: "IPLC 纯专线",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, Trojan, V2Ray",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT 秒开无阻断，Claude原生解锁，Perplexity极速",
      streamingSupport: "Netflix全区 4K HDR、Disney+、YouTube 4K、TikTok免拔卡",
      advantage: "香港专线延迟15ms抖动仅1.2ms；全协议覆盖；专属券 shanyue",
      disadvantage: "设备上限为4-6台并发",
      reviewUrl: "../review/flashleap/index.html",
      airportUrl: "../airport/flashleap/index.html",
      affUrl: "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3"
    },
    {
      id: "firefly",
      name: "萤火虫（Firefly）",
      badge: "优质专线 · VLESS轻巧高可用",
      rating: 4.6,
      priceDesc: "约 ¥8.00 / 月起 (年付折算)",
      trafficDesc: "60 GB - 160 GB / 月",
      costPerGB: "约 0.100 元 / GB",
      lineType: "优质专线 / VLESS 架构",
      regions: "香港、日本、新加坡、美国",
      protocols: "VLESS, Trojan, Shadowsocks",
      devices: "3 - 5 台设备",
      aiSupport: "ChatGPT Web端可用，Claude支持，Copilot",
      streamingSupport: "YouTube 4K流畅，Netflix自制剧可用，Disney+",
      advantage: "特惠年付约8元/月起；VLESS低开销省电；优惠码 firefly",
      disadvantage: "8元特惠包流量为60GB/月",
      reviewUrl: "../review/firefly/index.html",
      airportUrl: "../airport/firefly/index.html",
      affUrl: "https://vip02.fireflyaff.com/#/?code=uTKLkAyC"
    },
    {
      id: "kuajiecloud",
      name: "跨界 (跨界云)",
      badge: "全专线架构 · 晚高峰稳定从容",
      rating: 4.7,
      priceDesc: "¥20.00 / 月起",
      trafficDesc: "120 GB - 320 GB / 月",
      costPerGB: "约 0.166 元 / GB",
      lineType: "全专线网络架构",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, Trojan",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web/App 原生支持，Claude免风控，Midjourney",
      streamingSupport: "Netflix全区、Disney+、YouTube 4K、TikTok",
      advantage: "全程专线物理光纤；香港延迟15ms丢包率0.1%；全天候平稳",
      disadvantage: "未设20元以下极小包",
      reviewUrl: "../review/kuajiecloud/index.html",
      airportUrl: "../airport/kuajiecloud/index.html",
      affUrl: "https://vip02.kuajieaff.com/#/?code=CpJKZicY"
    },
    {
      id: "yinxingren",
      name: "隐形人",
      badge: "IEPL纯专线 · 极速千兆低延迟",
      rating: 4.9,
      priceDesc: "¥24.00 / 月起",
      trafficDesc: "144 GB - 350 GB / 月",
      costPerGB: "约 0.166 元 / GB",
      lineType: "IEPL 纯专线",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, Trojan, Hysteria2",
      devices: "5 - 8 台设备",
      aiSupport: "ChatGPT 原生秒开，Claude稳定无验证，Midjourney，Perplexity",
      streamingSupport: "Netflix全区 4K HDR、Disney+、YouTube 4K/8K秒开、TikTok",
      advantage: "纯IEPL专线不过GFW；含Hysteria2抗弱网协议；优惠码 yxr888",
      disadvantage: "起步资费24元适合品质用户",
      reviewUrl: "../review/yinxingren/index.html",
      airportUrl: "../airport/yinxingren/index.html",
      affUrl: "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD"
    },
    {
      id: "feiv",
      name: "飞V",
      badge: "¥4.9极低起步 · 罕见不限时套餐",
      rating: 4.5,
      priceDesc: "¥4.90 / 月起",
      trafficDesc: "100 GB - 200 GB (不限时)",
      costPerGB: "约 0.049 元 / GB",
      lineType: "优化线路 / 罕见不限时套餐",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, V2Ray, Trojan",
      devices: "3 - 5 台设备",
      aiSupport: "ChatGPT Web端基础对话，Copilot支持，Claude轻度可用",
      streamingSupport: "YouTube 1080P/4K，Netflix自制剧可用，Disney+部分",
      advantage: "4.9元超低起步价；提供29元200GB永不清零不限时套餐作为备用梯子",
      disadvantage: "极端敏感期公网优化入口偶有解析切换",
      reviewUrl: "../review/feiv/index.html",
      airportUrl: "../airport/feiv/index.html",
      affUrl: "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe"
    },
    {
      id: "laddercloud",
      name: "梯子云 LadderCloud",
      badge: "优化中转/专线 · 均衡多协议",
      rating: 4.6,
      priceDesc: "¥25.00 / 月起",
      trafficDesc: "125 GB - 350 GB / 月",
      costPerGB: "约 0.200 元 / GB",
      lineType: "优化中转/混合专线",
      regions: "香港、日本、新加坡、美国",
      protocols: "Shadowsocks, Trojan, V2Ray",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web端稳定支持，Claude可用，Copilot",
      streamingSupport: "YouTube 4K，Netflix自制剧与非自制剧，Disney+",
      advantage: "香港沙田节点吞吐达837Mbps；油管4K测速超11万Kbps；通用订阅好用",
      disadvantage: "单价相对平稳，无极小包",
      reviewUrl: "../review/laddercloud/index.html",
      airportUrl: "../airport/laddercloud/index.html",
      affUrl: "https://varnexa.ladderaff.com/#/?code=eC6eLAbq"
    },
    {
      id: "wavenet",
      name: "浪网 WaveNet",
      badge: "自研客户端优化 · 极速千兆吞吐",
      rating: 4.8,
      priceDesc: "¥30.00 / 月起",
      trafficDesc: "150 GB - 360 GB / 月",
      costPerGB: "约 0.200 元 / GB",
      lineType: "自研客户端优化线路",
      regions: "香港、日本、新加坡、美国",
      protocols: "VLESS, Trojan, Shadowsocks",
      devices: "5 - 8 台设备",
      aiSupport: "ChatGPT 全系列秒开，Claude原生解锁，Midjourney/Perplexity",
      streamingSupport: "Netflix全区 4K HDR、Disney+、YouTube 4K/8K (13万Kbps)",
      advantage: "香港节点实测吞吐962Mbps；网络抖动仅0.8ms；丢包率0.0%~0.2%",
      disadvantage: "定价30元走中高端路线",
      reviewUrl: "../review/wavenet/index.html",
      airportUrl: "../airport/wavenet/index.html",
      affUrl: "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy"
    },
    {
      id: "lingdongcloud",
      name: "灵动云",
      badge: "优化节点 · 均衡防封配置",
      rating: 4.6,
      priceDesc: "¥20.00 / 月起",
      trafficDesc: "100 GB - 260 GB / 月",
      costPerGB: "约 0.200 元 / GB",
      lineType: "优化节点 / 均衡配置",
      regions: "香港、日本、新加坡、美国",
      protocols: "Trojan, Shadowsocks",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web端日常对话，Copilot支持，Claude轻度支持",
      streamingSupport: "YouTube 1080P/4K，Netflix自制剧可用，Disney+",
      advantage: "主打Trojan伪装防封协议；月付20元配置均衡；可用率99%以上",
      disadvantage: "单线程峰值吞吐相对纯专线稍显平稳",
      reviewUrl: "../review/lingdongcloud/index.html",
      airportUrl: "../airport/lingdongcloud/index.html",
      affUrl: "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr"
    },
    {
      id: "quanqiuyun",
      name: "全球云",
      badge: "经典中转优化 · 双协议支持",
      rating: 4.6,
      priceDesc: "¥20.00 / 月起",
      trafficDesc: "120 GB - 300 GB / 月",
      costPerGB: "约 0.166 元 / GB",
      lineType: "中转优化 / 多协议支持",
      regions: "香港、日本、新加坡、美国",
      protocols: "VLESS, Trojan, Shadowsocks",
      devices: "4 - 6 台设备",
      aiSupport: "ChatGPT Web端稳定支持，Claude免验证，Copilot",
      streamingSupport: "YouTube 4K，Netflix自制剧与非自制剧，Disney+，TikTok",
      advantage: "香港Mega-i吞吐达816Mbps；VLESS/Trojan双协议；优惠码 tt88",
      disadvantage: "单价0.166元/GB，整体均衡",
      reviewUrl: "../review/quanqiuyun/index.html",
      airportUrl: "../airport/quanqiuyun/index.html",
      affUrl: "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0"
    }
  ];

  // 默认对比的机场：微风网络、隐形人、飞猫云
  var selectedIds = ["breezenet", "yinxingren", "feimaoyun"];

  function initCompare() {
    var chipsContainer = document.getElementById("compare-chips");
    var tableContainer = document.getElementById("compare-table-wrapper");

    if (!chipsContainer || !tableContainer) return;

    renderChips(chipsContainer);
    renderTable(tableContainer);
  }

  function renderChips(container) {
    container.innerHTML = "";
    airportsData.forEach(function (airport) {
      var isSelected = selectedIds.indexOf(airport.id) !== -1;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "compare-chip" + (isSelected ? " selected" : "");
      btn.innerHTML = (isSelected ? "✓ " : "+ ") + airport.name;
      
      btn.addEventListener("click", function () {
        toggleSelection(airport.id);
      });
      container.appendChild(btn);
    });
  }

  function toggleSelection(id) {
    var index = selectedIds.indexOf(id);
    if (index !== -1) {
      if (selectedIds.length <= 2) {
        alert("至少需要保留 2 家机场进行横向对比！");
        return;
      }
      selectedIds.splice(index, 1);
    } else {
      if (selectedIds.length >= 4) {
        alert("最多同时对比 4 家机场，请先取消某一家再添加！");
        return;
      }
      selectedIds.push(id);
    }

    var chipsContainer = document.getElementById("compare-chips");
    var tableContainer = document.getElementById("compare-table-wrapper");
    renderChips(chipsContainer);
    renderTable(tableContainer);
  }

  function renderTable(container) {
    var currentAirports = airportsData.filter(function (a) {
      return selectedIds.indexOf(a.id) !== -1;
    });

    if (currentAirports.length === 0) {
      container.innerHTML = "<p style='padding:20px;text-align:center;'>请至少选择 2 家机场展开对比。</p>";
      return;
    }

    var html = '<div class="table-responsive"><table class="data-table" style="min-width: 760px;">';
    
    // 表头：机场名称与徽标
    html += '<thead><tr><th style="width: 140px;">比较维度</th>';
    currentAirports.forEach(function (a) {
      html += '<th style="text-align: center; min-width: 180px;">' +
              '<div style="font-size:1.1rem; font-weight:700; color:var(--text-main);">' + a.name + '</div>' +
              '<div style="font-size:0.75rem; color:var(--primary); margin-top:4px;">' + a.badge + '</div>' +
              '<div style="margin-top:6px;"><a href="' + a.affUrl + '" target="_blank" rel="nofollow noopener noreferrer" class="btn btn-primary btn-sm" style="font-size:0.75rem; padding:3px 10px;">官网直达 ↗</a></div>' +
              '</th>';
    });
    html += '</tr></thead><tbody>';

    // 行：起步月费与资费
    html += '<tr><td><strong>起步月费</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-weight: 700; color:#dc2626;">' + a.priceDesc + '</td>';
    });
    html += '</tr>';

    // 行：流量与每GB单价
    html += '<tr><td><strong>流量 / 单价</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center;"><div>' + a.trafficDesc + '</div><div style="font-size:0.8rem; color:var(--text-muted);">' + a.costPerGB + '</div></td>';
    });
    html += '</tr>';

    // 行：线路类型
    html += '<tr><td><strong>核心线路类型</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-size:0.88rem;">' + a.lineType + '</td>';
    });
    html += '</tr>';

    // 行：节点覆盖与协议
    html += '<tr><td><strong>节点与协议</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-size:0.85rem;"><div><strong>地区：</strong>' + a.regions + '</div><div style="margin-top:4px;"><strong>协议：</strong>' + a.protocols + '</div></td>';
    });
    html += '</tr>';

    // 行：AI与大模型支持
    html += '<tr><td><strong>AI工具支持</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-size:0.85rem; color:var(--purple);">' + a.aiSupport + '</td>';
    });
    html += '</tr>';

    // 行：流媒体解锁
    html += '<tr><td><strong>流媒体解锁</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-size:0.85rem;">' + a.streamingSupport + '</td>';
    });
    html += '</tr>';

    // 行：设备限制
    html += '<tr><td><strong>设备连接数</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center; font-size:0.88rem;">' + a.devices + '</td>';
    });
    html += '</tr>';

    // 行：核心优势
    html += '<tr><td><strong>主要优势</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="font-size:0.85rem; color:var(--success); line-height:1.5;">' + a.advantage + '</td>';
    });
    html += '</tr>';

    // 行：主要注意事项
    html += '<tr><td><strong>注意事项</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="font-size:0.85rem; color:var(--warning); line-height:1.5;">' + a.disadvantage + '</td>';
    });
    html += '</tr>';

    // 行：操作与详情
    html += '<tr><td><strong>站内评测与档案</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center;">' +
              '<a href="' + a.reviewUrl + '" class="btn btn-secondary btn-sm" style="margin-bottom:6px; display:block;">深度评测</a>' +
              '<a href="' + a.airportUrl + '" class="btn btn-secondary btn-sm" style="display:block;">参数档案</a>' +
              '</td>';
    });
    html += '</tr>';

    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', initCompare);
})();
