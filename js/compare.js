/**
 * 翻墙机场测评网 - 横向对比工具交互引擎
 * 原生 JS 驱动 · 支持动态选择 2-4 家机场进行多维度参数实时对比
 */

(function () {
  // 机场数据库镜像 (纯前端读取)
  var airportsData = [
    {
      id: "just-my-socks",
      name: "Just My Socks (JMS)",
      badge: "老牌大厂 · 搬瓦工直营",
      rating: 4.8,
      priceDesc: "$5.88 / 月 (约 ¥42)",
      trafficDesc: "500 GB / 月",
      costPerGB: "约 0.084 元 / GB",
      lineType: "CN2 GIA / 联通AS9929企业级优质网络",
      regions: "美国、日本、英国、香港",
      protocols: "Shadowsocks, V2Ray (VMess)",
      devices: "3台 - 不限制设备",
      aiSupport: "ChatGPT Web基础可用 (偶有Cloudflare拦截), Claude受限",
      streamingSupport: "YouTube 4K极速, Netflix非自制剧 (非原生解锁)",
      advantage: "搬瓦工官方背书绝不跑路；IP被墙后台自动秒换可用IP；稳定性极高",
      disadvantage: "美元计价无低价月付；无专属流媒体原生解锁",
      reviewUrl: "../review/just-my-socks/index.html",
      airportUrl: "../airport/just-my-socks/index.html"
    },
    {
      id: "flyingbird",
      name: "飞鸟云 (FlyingBird)",
      badge: "全IEPL内网专线 · 极低延迟",
      rating: 4.9,
      priceDesc: "¥15.00 / 月起",
      trafficDesc: "100 GB - 1000 GB / 月",
      costPerGB: "约 0.09 - 0.15 元 / GB",
      lineType: "全IEPL内网专线 (广港/沪日/沪韩跨境光纤)",
      regions: "香港、台湾、日本、新加坡、韩国、美国、德国、英国等20+地区",
      protocols: "Shadowsocks, Trojan",
      devices: "3台 - 8台同时在线",
      aiSupport: "完美支持 ChatGPT Web/App、Claude、Midjourney、Perplexity",
      streamingSupport: "Netflix 4K HDR、Disney+、HBO Max、YouTube Premium全解锁",
      advantage: "全专线不过GFW公网，晚高峰不卡顿；AI与流媒体原生IP解锁极高；一键订阅简单",
      disadvantage: "入门套餐100GB对于重度追剧用户需选大流量套餐；无不限时套餐",
      reviewUrl: "../review/flyingbird/index.html",
      airportUrl: "../airport/flyingbird/index.html"
    },
    {
      id: "paopaodog",
      name: "泡泡狗 (Paopaodog)",
      badge: "平价专线 · 超高性价比",
      rating: 4.6,
      priceDesc: "¥12.00 / 月起",
      trafficDesc: "80 GB - 450 GB / 月",
      costPerGB: "约 0.093 - 0.15 元 / GB",
      lineType: "BGP多线公网中转 + 混合IEPL专线",
      regions: "中国香港、日本、新加坡、美国、韩国",
      protocols: "Shadowsocks, V2Ray",
      devices: "2台 - 4台设备",
      aiSupport: "ChatGPT Web端基础对话可用，Claude偶有受限",
      streamingSupport: "YouTube 1080P/4K, Netflix自制剧可用",
      advantage: "月付12元门槛极低；BGP多线智能容灾；常用亚太地区节点覆盖全，性价比出众",
      disadvantage: "极端网络敏感封锁时期公网入口偶有波动；大文件下载速率有轻度削峰",
      reviewUrl: "../review/paopaodog/index.html",
      airportUrl: "../airport/paopaodog/index.html"
    },
    {
      id: "nexitally",
      name: "奶昔 (Nexitally / 佩奇)",
      badge: "高端天花板 · 顶级自建专线",
      rating: 4.95,
      priceDesc: "¥70.00 / 月起",
      trafficDesc: "200 GB - 500 GB / 月",
      costPerGB: "约 0.30 - 0.35 元 / GB",
      lineType: "自建企业级物理私有专线 (SLA 99.99%)",
      regions: "香港、台湾、日本、新加坡、美国、欧洲等30+高净值地区",
      protocols: "Shadowsocks, Trojan, 智能策略路由",
      devices: "5台 - 8台同时在线",
      aiSupport: "原生住宅级IP，ChatGPT/Claude全系列极速无感秒开且绝不封号",
      streamingSupport: "全球主流与冷门流媒体原生解锁 (4K/8K HDR)",
      advantage: "天花板级网络质量；全天24小时跑满本地千兆宽带；极高纯净IP池，抗封锁极强",
      disadvantage: "资费昂贵，起步月付70元；注册常需邀请码或限时放号；轻度用户性能过剩",
      reviewUrl: "../review/nexitally/index.html",
      airportUrl: "../airport/nexitally/index.html"
    },
    {
      id: "miaona",
      name: "猫熊网络 (Miaona)",
      badge: "平民入门 · 超低价试水",
      rating: 4.4,
      priceDesc: "¥9.90 / 月起",
      trafficDesc: "60 GB - 360 GB / 月",
      costPerGB: "约 0.11 - 0.16 元 / GB",
      lineType: "公网隧道中转 (带Hysteria2新型协议)",
      regions: "香港、日本、新加坡、美国",
      protocols: "V2Ray, Trojan, Hysteria2",
      devices: "2台 - 3台设备",
      aiSupport: "支持 ChatGPT Web端普通提问对话",
      streamingSupport: "YouTube 1080P/2K流畅, 部分支持Netflix非自制剧",
      advantage: "10元以内超低上车成本；具备Hysteria2协议抗丢包能力强；适合新手与备用梯子",
      disadvantage: "纯公网中转晚高峰有轻度抖动；工单客服响应需要等待；不适宜跨国高频联机游戏",
      reviewUrl: "../review/miaona/index.html",
      airportUrl: "../airport/miaona/index.html"
    }
  ];

  // 默认对比的机场（默认选 3 家具有代表性的：飞鸟云、泡泡狗、Just My Socks）
  var selectedIds = ["flyingbird", "paopaodog", "just-my-socks"];

  function initCompare() {
    var chipsContainer = document.getElementById("compare-chips");
    var tableContainer = document.getElementById("compare-table-wrapper");

    if (!chipsContainer || !tableContainer) return;

    // 渲染选项胶囊
    renderChips(chipsContainer);
    // 渲染对比表格
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
              '</th>';
    });
    html += '</tr></thead><tbody>';

    // 行：起步月付与资费
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
    html += '<tr><td><strong>查看详情</strong></td>';
    currentAirports.forEach(function (a) {
      html += '<td style="text-align: center;">' +
              '<a href="' + a.reviewUrl + '" class="btn btn-primary btn-sm" style="margin-bottom:6px; display:block;">深度评测</a>' +
              '<a href="' + a.airportUrl + '" class="btn btn-secondary btn-sm" style="display:block;">档案参数</a>' +
              '</td>';
    });
    html += '</tr>';

    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', initCompare);
})();
