/**
 * 翻墙机场测评网 - 核心原生脚本 (Pure Native JavaScript)
 * 无外部依赖 · 极速轻量 · 全平台兼容
 * 动态光纤流体波浪背景引擎 (High-Performance Wave Canvas Engine)
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. 移动端菜单切换
  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('show');
    });

    // 点击外部区域自动收起菜单
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. FAQ 折叠手风琴交互 (支持原生 details 与 class 驱动)
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parent = this.closest('.faq-item');
      if (parent) {
        var answer = parent.querySelector('.faq-answer');
        if (answer) {
          var isHidden = answer.style.display === 'none';
          answer.style.display = isHidden ? 'block' : 'none';
          var icon = this.querySelector('.faq-icon');
          if (icon) {
            icon.textContent = isHidden ? '−' : '+';
          }
        }
      }
    });
  });

  // 3. 页面内锚点平滑滚动补充兼容
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 4. 动态高科技光纤波浪 Canvas 渲染引擎 (Dual Ribbon Flow Canvas)
  initWaveCanvases();
});

/**
 * 初始化全站所有光纤流体波浪画布
 * 针对高刷新率、Retina 屏幕优化，并在离开视口或切换标签时自动挂起，保持 0% CPU 闲置消耗
 */
function initWaveCanvases() {
  var canvases = document.querySelectorAll('.hero-waves-canvas, #hero-waves-canvas');
  if (!canvases || canvases.length === 0) return;

  // 检测减弱动画偏好
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  canvases.forEach(function (canvas) {
    setupSingleWaveCanvas(canvas, prefersReducedMotion);
  });
}

function setupSingleWaveCanvas(canvas, reducedMotion) {
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var container = canvas.parentElement;
  if (!container) return;

  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var time = 0;
  var isVisible = true;
  var rafId = null;

  var mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false
  };

  function resize() {
    var rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    if (!mouse.active) {
      mouse.x = width * 0.5;
      mouse.y = height * 0.5;
      mouse.targetX = width * 0.5;
      mouse.targetY = height * 0.5;
    }

    if (reducedMotion) {
      renderStaticFrame();
    }
  }

  window.addEventListener('resize', debounce(resize, 120));

  container.addEventListener('mousemove', function (e) {
    var rect = container.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
    mouse.active = true;
  });

  container.addEventListener('mouseleave', function () {
    mouse.active = false;
    mouse.targetX = width * 0.5;
    mouse.targetY = height * 0.5;
  });

  // 波浪带 1: 琥珀金 / 暖光光纤束 (Gold & Amber Ribbon)
  var goldRibbon = {
    lines: 32,
    baseColor: [245, 158, 11],     // #f59e0b
    altColor: [251, 191, 36],      // #fbbf24
    highlightColor: [254, 243, 199], // #fef3c7
    getY: function (x, t, u) {
      var nx = x / width;
      var spine = height * (0.75 - 0.28 * Math.sin(nx * Math.PI * 0.95 + 0.15) - 0.08 * Math.cos(nx * Math.PI * 2));
      var wave1 = Math.sin(nx * 3.6 + t * 1.2) * (24 + 14 * Math.sin(t * 0.4));
      var wave2 = Math.cos(nx * 2.2 - t * 0.9) * 16;
      var wave3 = Math.sin(nx * 5.8 + t * 1.7) * 8;
      
      var spread = (Math.sin(nx * Math.PI * 1.4 + t * 0.6) * 0.5 + 0.5) * 55 + 35;
      var offset = (u - 0.5) * spread;

      var dx = (x - mouse.x) / 200;
      var mouseInfluence = Math.exp(-dx * dx) * (mouse.y - height * 0.5) * 0.22;

      return spine + wave1 + wave2 + wave3 + offset + mouseInfluence;
    }
  };

  // 波浪带 2: 霓虹青蓝 / 冰蓝光纤束 (Electric Cyan & Ice Blue Ribbon)
  var blueRibbon = {
    lines: 36,
    baseColor: [56, 189, 248],     // #38bdf8
    altColor: [96, 165, 250],      // #60a5fa
    highlightColor: [224, 242, 254], // #e0f2fe
    getY: function (x, t, u) {
      var nx = x / width;
      var spine = height * (0.55 - 0.24 * Math.sin((nx - 0.2) * Math.PI * 1.05) + 0.12 * Math.cos((nx - 0.5) * Math.PI * 1.8));
      var wave1 = Math.cos(nx * 3.0 - t * 1.1) * (26 + 14 * Math.cos(t * 0.5));
      var wave2 = Math.sin(nx * 4.8 + t * 1.4) * 14;
      var wave3 = Math.cos(nx * 1.8 + t * 0.8) * 18;

      var spread = (Math.cos((nx - 0.3) * Math.PI * 1.3 - t * 0.5) * 0.5 + 0.5) * 65 + 40;
      var offset = (u - 0.5) * spread;

      var dx = (x - mouse.x) / 210;
      var mouseInfluence = Math.exp(-dx * dx) * (mouse.y - height * 0.5) * 0.26;

      return spine + wave1 + wave2 + wave3 + offset + mouseInfluence;
    }
  };

  // 波浪带 3: 浅天蓝微光副波 (Sky & Pearl Secondary Wisp)
  var cyanRibbon = {
    lines: 24,
    baseColor: [14, 165, 233],     // #0ea5e9
    altColor: [129, 140, 248],     // #818cf8
    highlightColor: [255, 255, 255],
    getY: function (x, t, u) {
      var nx = x / width;
      var spine = height * (0.62 - 0.20 * Math.sin(nx * Math.PI * 1.2 + 0.4));
      var wave = Math.sin(nx * 4.2 - t * 1.3) * 20 + Math.cos(nx * 6.5 + t * 1.5) * 10;
      var spread = 35 * (u - 0.5);
      return spine + wave + spread;
    }
  };

  function drawRibbon(ribbon, t) {
    var step = Math.max(10, Math.floor(width / 75));
    var linesCount = ribbon.lines;

    for (var i = 0; i < linesCount; i++) {
      var u = i / (linesCount - 1);
      var centerDist = Math.abs(u - 0.5) * 2;
      var alpha = (1 - centerDist * 0.6) * 0.38;

      var c;
      if (u > 0.42 && u < 0.58 && ribbon.highlightColor) {
        c = ribbon.highlightColor;
        alpha *= 1.3;
      } else if (i % 2 === 0 && ribbon.altColor) {
        c = ribbon.altColor;
      } else {
        c = ribbon.baseColor;
      }

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha.toFixed(3) + ')';
      ctx.lineWidth = (u > 0.38 && u < 0.62) ? 1.25 : 0.95;

      var started = false;
      for (var x = -step; x <= width + step; x += step) {
        var y = ribbon.getY(x, t, u);
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    }
  }

  function renderFrame(t) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'screen';

    // 核心交叉点的径向柔和微光晕
    var glow1X = width * 0.38 + Math.sin(t * 0.35) * 45;
    var glow1Y = height * 0.60 + Math.cos(t * 0.45) * 30;
    var grad1 = ctx.createRadialGradient(glow1X, glow1Y, 10, glow1X, glow1Y, 280);
    grad1.addColorStop(0, 'rgba(245, 158, 11, 0.16)');
    grad1.addColorStop(0.5, 'rgba(217, 119, 6, 0.05)');
    grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    var glow2X = width * 0.68 + Math.cos(t * 0.3) * 50;
    var glow2Y = height * 0.42 + Math.sin(t * 0.4) * 30;
    var grad2 = ctx.createRadialGradient(glow2X, glow2Y, 10, glow2X, glow2Y, 320);
    grad2.addColorStop(0, 'rgba(56, 189, 248, 0.20)');
    grad2.addColorStop(0.5, 'rgba(14, 165, 233, 0.06)');
    grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    drawRibbon(goldRibbon, t * 0.85);
    drawRibbon(cyanRibbon, t * 0.75);
    drawRibbon(blueRibbon, t * 0.95);

    ctx.globalCompositeOperation = 'source-over';
  }

  function renderStaticFrame() {
    renderFrame(1.5);
  }

  function loop() {
    if (!isVisible) return;
    time += 0.015;
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    renderFrame(time);
    rafId = requestAnimationFrame(loop);
  }

  // 视口观察器：离开屏幕时挂起，零负担
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        isVisible = entry.isIntersecting;
        if (isVisible && !reducedMotion) {
          if (!rafId) loop();
        } else {
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        }
      });
    }, { threshold: 0.05 });
    observer.observe(container);
  }

  // 页面隐藏时暂停动画
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      isVisible = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else {
      isVisible = true;
      if (!reducedMotion && !rafId) {
        loop();
      }
    }
  });

  resize();
  if (!reducedMotion) {
    loop();
  } else {
    renderStaticFrame();
  }
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
