// scripts/papers.js
// Renders papersData (data/papers.js) into #papers-mount as a GitHub-tree-style
// expandable list of papers, each row showing a 📄 icon, title, and year,
// which expands into a detail panel with authors, venue, description, and links.
(function () {
  function renderPapers() {
    const mount = document.getElementById('papers-mount');
    if (!mount) return;
    if (!Array.isArray(papersData) || papersData.length === 0) {
      mount.innerHTML = '<p>No papers listed yet.</p>';
      return;
    }
    const sorted = [...papersData].sort((a, b) => b.year - a.year);

    const container = document.createElement('div');
    container.className = 'paper-tree-container';

    const listEl = document.createElement('div');
    listEl.className = 'paper-list';

    sorted.forEach((paper) => {
      const node = document.createElement('div');
      node.className = 'paper-node';

      // ---- Row (clickable) ----
      const row = document.createElement('div');
      row.className = 'paper-node-row is-file';
      row.setAttribute('role', 'button');
      row.setAttribute('tabindex', '0');
      row.setAttribute('aria-expanded', 'false');

      const chevron = document.createElement('span');
      chevron.className = 'paper-chevron';
      chevron.textContent = '\u25B8'; // ▸
      chevron.setAttribute('aria-hidden', 'true');

      const icon = document.createElement('span');
      icon.className = 'paper-icon';
      icon.textContent = '\uD83D\uDCC4'; // 📄
      icon.setAttribute('aria-hidden', 'true');

      const name = document.createElement('span');
      name.className = 'paper-name';
      name.textContent = paper.title;

      const meta = document.createElement('span');
      meta.className = 'paper-meta';
      meta.textContent = `${paper.authors} \u00B7 ${paper.venue}`;

      const date = document.createElement('span');
      date.className = 'paper-date';
      date.textContent = paper.year;

      row.appendChild(chevron);
      row.appendChild(icon);
      row.appendChild(name);
      row.appendChild(meta);
      row.appendChild(date);

      // ---- Detail panel ----
      const detail = document.createElement('div');
      detail.className = 'paper-detail';

      const desc = document.createElement('p');
      desc.className = 'paper-detail-desc';
      desc.textContent = paper.description;
      detail.appendChild(desc);

      if ((paper.links || []).length > 0) {
        const tags = document.createElement('div');
        tags.className = 'detail-tags';
        paper.links.forEach((link) => {
          const a = document.createElement('a');
          a.className = 'tag detail-link';
          a.href = link.url;
          a.target = '_blank';
          a.rel = 'noopener';
          a.textContent = link.label;
          tags.appendChild(a);
        });
        detail.appendChild(tags);
      }

      // ---- Toggle behavior ----
      function toggle() {
        const isOpen = node.classList.toggle('open');
        row.setAttribute('aria-expanded', String(isOpen));
      }
      row.addEventListener('click', toggle);
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      node.appendChild(row);
      node.appendChild(detail);
      listEl.appendChild(node);
    });

    container.appendChild(listEl);
    mount.innerHTML = '';
    mount.appendChild(container);
  }
  document.addEventListener('DOMContentLoaded', renderPapers);
})();