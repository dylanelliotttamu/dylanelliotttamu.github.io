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
        btn.classList.toggle('active', btn.dataset.tab === targetId);
      });
      panels.forEach(function (panel) {
        panel.classList.toggle('active', panel.id === targetId);
      });
      // Persist last-viewed tab across refreshes
      try { sessionStorage.setItem('activeTab', targetId); } catch (e) {}
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        activateTab(btn.dataset.tab);
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
