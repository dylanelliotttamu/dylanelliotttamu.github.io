// scripts/papers.js
// Renders papersData (data/papers.js) into #papers-mount as .paper-entry cards.

(function () {
  function renderPapers() {
    const mount = document.getElementById('papers-mount');
    if (!mount) return;

    if (!Array.isArray(papersData) || papersData.length === 0) {
      mount.innerHTML = '<p>No papers listed yet.</p>';
      return;
    }

    const sorted = [...papersData].sort((a, b) => b.year - a.year);

    const listEl = document.createElement('div');
    listEl.className = 'papers-list';

    sorted.forEach((paper) => {
      const entry = document.createElement('div');
      entry.className = 'paper-entry';

      const title = document.createElement('h3');
      title.textContent = paper.title;

      const meta = document.createElement('p');
      meta.className = 'mono paper-meta';
      meta.textContent = `${paper.authors} \u00B7 ${paper.venue} \u00B7 ${paper.year}`;

      const desc = document.createElement('p');
      desc.textContent = paper.description;

      const linksEl = document.createElement('p');
      (paper.links || []).forEach((link, i) => {
        if (i > 0) {
          linksEl.appendChild(document.createTextNode(' \u00A0|\u00A0 '));
        }
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = link.label;
        linksEl.appendChild(a);
      });

      entry.appendChild(title);
      entry.appendChild(meta);
      entry.appendChild(desc);
      if ((paper.links || []).length > 0) {
        entry.appendChild(linksEl);
      }

      listEl.appendChild(entry);
    });

    mount.innerHTML = '';
    mount.appendChild(listEl);
  }

  document.addEventListener('DOMContentLoaded', renderPapers);
})();
