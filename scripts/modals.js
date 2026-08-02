/* ============================================================
   modals.js — card click-to-modal functionality
   ============================================================ */

(function () {
  'use strict';

  var modal = null;
  var modalTitle = null;
  var modalBody = null;
  var modalClose = null;
  var modalOverlay = null;
  var cards = null;

  function init() {
    modal = document.getElementById('card-modal');
    modalTitle = document.getElementById('modal-title');
    modalBody = document.getElementById('modal-body');
    modalClose = document.querySelector('.modal-close');
    modalOverlay = document.querySelector('.modal-overlay');
    cards = document.querySelectorAll('.card');

    if (!modal || !cards.length) return;

    // Only attach modal to cards in Home and Contact tabs
    var modalEnabledTabs = ['tab-home', 'tab-contact'];

    cards.forEach(function (card) {
      // Check if card is in an enabled tab
      var tabPanel = card.closest('.tab-panel');
      if (!tabPanel || !modalEnabledTabs.includes(tabPanel.id)) {
        return; // Skip this card
      }

      card.style.cursor = 'pointer';
      card.addEventListener('click', function (e) {
        // Don't open modal if clicking on links or buttons inside card
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }
        openModal(card);
      });
    });

    // Close button
    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    // Backdrop click
    if (modalOverlay) {
      modalOverlay.addEventListener('click', closeModal);
    }

    // Keyboard: ESC to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });
  }

  function openModal(card) {
    if (!modal) return;

    // Extract heading
    var heading = card.querySelector('h2') || card.querySelector('h3');
    var headingText = heading ? heading.textContent : 'Card Details';

    // Extract first paragraph (description)
    var paragraph = card.querySelector('p');
    var bodyText = paragraph ? paragraph.textContent : '';

    // Populate modal
    modalTitle.textContent = headingText;
    modalBody.textContent = bodyText;

    // Show modal
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (modalClose) {
      setTimeout(function () {
        modalClose.focus();
      }, 50);
    }
  }

  function closeModal() {
    if (!modal) return;

    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('DOMContentLoaded', init);
})();
