/* ============================================================
   tree.js — renders and controls the GitHub-style file tree
   ============================================================ */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  function formatDate(yyyyMm) {
    if (!yyyyMm) return '';
    var parts = yyyyMm.split('-');
    var months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];
    var m = parseInt(parts[1], 10) - 1;
    return months[m] + ' ' + parts[0];
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;')
              .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ---- Build DOM for a single project folder node ---- */
  function buildProjectNode(proj) {
    var li = document.createElement('li');
    li.className = 'tree-node';
    li.dataset.id = proj.id;

    /* --- Folder row --- */
    var row = document.createElement('div');
    row.className = 'tree-node-row is-folder';
    row.setAttribute('role', 'button');
    row.setAttribute('aria-expanded', 'false');
    row.setAttribute('tabindex', '0');

    var chevron = document.createElement('span');
    chevron.className = 'tree-chevron';
    chevron.textContent = '▶';
    chevron.setAttribute('aria-hidden', 'true');

    var icon = document.createElement('span');
    icon.className = 'tree-icon';
    icon.textContent = '📁';
    icon.setAttribute('aria-hidden', 'true');

    var name = document.createElement('span');
    name.className = 'tree-name';
    name.textContent = proj.name + '/';

    var meta = document.createElement('span');
    meta.className = 'tree-meta';
    meta.textContent = proj.status;

    var date = document.createElement('span');
    date.className = 'tree-date';
    date.textContent = formatDate(proj.date);

    row.appendChild(chevron);
    row.appendChild(icon);
    row.appendChild(name);
    row.appendChild(meta);
    row.appendChild(date);

    /* --- Detail panel (shown when folder is open) --- */
    var detail = document.createElement('div');
    detail.className = 'tree-detail';

    detail.innerHTML =
      '<p>' + escapeHtml(proj.description) + '</p>' +
      '<div class="detail-tags">' +
        proj.tech.map(function (t) {
          return '<span class="tag">' + escapeHtml(t) + '</span>';
        }).join('') +
      '</div>' +
      (proj.link
        ? '<a class="detail-link" href="' + escapeHtml(proj.link) +
          '" target="_blank" rel="noopener">🔗 ' + escapeHtml(proj.link) + '</a>'
        : '');

    /* --- Children file list --- */
    var children = document.createElement('ul');
    children.className = 'tree-children';
    children.setAttribute('role', 'group');

    var files = proj.files || [];
    files.forEach(function (f, idx) {
      var fli = document.createElement('li');
      fli.className = 'tree-node';

      var frow = document.createElement('div');
      frow.className = 'tree-node-row is-file';

      var findent = document.createElement('span');
      findent.className = 'tree-chevron';
      findent.innerHTML = '&nbsp;';

      var ficon = document.createElement('span');
      ficon.className = 'tree-icon';
      ficon.setAttribute('aria-hidden', 'true');

      if (f.name === 'README.md') {
        ficon.textContent = '📄';
      } else if (f.name.endsWith('.txt')) {
        ficon.textContent = '📝';
      } else {
        ficon.textContent = '📄';
      }

      var fname = document.createElement('span');
      fname.className = 'tree-name';
      fname.textContent = f.name;

      var fmeta = document.createElement('span');
      fmeta.className = 'tree-meta';
      fmeta.textContent = f.desc;

      frow.appendChild(findent);
      frow.appendChild(ficon);
      frow.appendChild(fname);
      frow.appendChild(fmeta);

      fli.appendChild(frow);
      children.appendChild(fli);
    });

    /* --- Toggle open/close --- */
    function toggle() {
      var isOpen = li.classList.toggle('open');
      row.setAttribute('aria-expanded', String(isOpen));
      icon.textContent = isOpen ? '📂' : '📁';
      detail.classList.toggle('open', isOpen);
    }

    row.addEventListener('click', toggle);
    row.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    li.appendChild(row);
    li.appendChild(detail);
    li.appendChild(children);

    return li;
  }

  /* ---- Build the full tree ---- */
  function buildTree(mountId) {
    var mount = document.getElementById(mountId);
    if (!mount || typeof projects === 'undefined') return;

    var container = document.createElement('div');
    container.className = 'tree-container';

    /* Root label */
    var rootLabel = document.createElement('div');
    rootLabel.className = 'tree-root-label';
    rootLabel.innerHTML = '<span class="tree-icon" aria-hidden="true">📁</span>' +
                          '<span>Projects/</span>';

    var list = document.createElement('ul');
    list.className = 'tree-list';
    list.setAttribute('role', 'tree');

    projects.forEach(function (proj) {
      list.appendChild(buildProjectNode(proj));
    });

    container.appendChild(rootLabel);
    container.appendChild(list);
    mount.appendChild(container);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildTree('tree-mount');
  });
})();
