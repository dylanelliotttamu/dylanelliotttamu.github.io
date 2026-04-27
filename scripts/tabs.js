/* ============================================================
   tabs.js — tab switching logic
   ============================================================ */

(function () {
  'use strict';

  function initTabs() {
    const buttons = document.querySelectorAll('.tab-nav button');
    const panels  = document.querySelectorAll('.tab-panel');

    function activateTab(targetId) {
      buttons.forEach(function (btn) {
        const isActive = btn.dataset.tab === targetId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      panels.forEach(function (panel) {
        const isActive = panel.id === targetId;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
      // Persist last-viewed tab across refreshes
      try { sessionStorage.setItem('activeTab', targetId); } catch (e) {}
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activateTab(btn.dataset.tab);
      });

      btn.addEventListener('keydown', function (event) {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' &&
            event.key !== 'Home' && event.key !== 'End') {
          return;
        }

        event.preventDefault();
        const buttonList = Array.prototype.slice.call(buttons);
        const currentIndex = buttonList.indexOf(btn);
        let nextIndex = currentIndex;

        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % buttonList.length;
        if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + buttonList.length) % buttonList.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = buttonList.length - 1;

        const nextButton = buttonList[nextIndex];
        if (nextButton) {
          nextButton.focus();
          activateTab(nextButton.dataset.tab);
        }
      });
    });

    // Restore from session or default to first tab
    let initial = null;
    try { initial = sessionStorage.getItem('activeTab'); } catch (e) {}
    const firstTab = buttons[0] ? buttons[0].dataset.tab : null;
    activateTab(initial && document.getElementById(initial) ? initial : firstTab);
  }

  document.addEventListener('DOMContentLoaded', initTabs);
})();
