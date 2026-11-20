/**
 * 翻墙机场测评网 - 核心原生脚本 (Pure Native JavaScript)
 * 无外部依赖 · 极速轻量 · 全平台兼容
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
});
