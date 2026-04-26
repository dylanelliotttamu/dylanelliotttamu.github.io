/* ============================================================
   timeline.js — renders and controls the git commit timeline
   ============================================================ */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  function formatDate(yyyyMm) {
    if (!yyyyMm || yyyyMm === 'Present') return yyyyMm;
    var parts = yyyyMm.split('-');
    var months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];
    var m = parseInt(parts[1], 10) - 1;
    return months[m] + ' ' + parts[0];
  }

  function dateRange(start, end) {
    var s = formatDate(start);
    var e = end === 'Present' ? 'Present' : formatDate(end);
    return s + ' – ' + e;
  }

  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;')
              .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ---- Build a single commit node ---- */
  function buildCommit(job) {
    var div = document.createElement('div');
    div.className = 'commit';

    /* Dot */
    var dot = document.createElement('div');
    dot.className = 'commit-dot' + (job.type === 'education' ? ' education' : '');
    dot.setAttribute('aria-hidden', 'true');

    /* Header row */
    var header = document.createElement('div');
    header.className = 'commit-header';

    var title = document.createElement('span');
    title.className = 'commit-title';

    var roleSpan = document.createElement('span');
    roleSpan.className = 'commit-role' + (job.type === 'education' ? ' education' : '');
    roleSpan.textContent = job.role;

    var sep = document.createTextNode(' — ');

    var compSpan = document.createElement('span');
    compSpan.className = 'commit-company';
    compSpan.textContent = job.company;

    var locSpan = document.createElement('span');
    locSpan.className = 'commit-location';
    locSpan.textContent = '📍 ' + job.location;

    title.appendChild(roleSpan);
    title.appendChild(sep);
    title.appendChild(compSpan);
    title.appendChild(document.createTextNode(' '));
    title.appendChild(locSpan);

    var tag = document.createElement('span');
    tag.className = 'commit-tag mono';
    tag.textContent = dateRange(job.start, job.end);

    var chevron = document.createElement('span');
    chevron.className = 'commit-chevron';
    chevron.textContent = '▶';
    chevron.setAttribute('aria-hidden', 'true');

    header.appendChild(title);
    header.appendChild(tag);
    header.appendChild(chevron);

    /* Body (collapsible) */
    var body = document.createElement('div');
    body.className = 'commit-body';
    body.setAttribute('aria-hidden', 'true');

    var bullets = document.createElement('ul');
    bullets.className = 'commit-bullets' + (job.type === 'education' ? ' education' : '');

    job.bullets.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      bullets.appendChild(li);
    });

    body.appendChild(bullets);

    /* Toggle */
    function toggle() {
      var isOpen = div.classList.toggle('open');
      header.setAttribute('aria-expanded', String(isOpen));
      body.setAttribute('aria-hidden', String(!isOpen));
    }

    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('click', toggle);
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    div.appendChild(dot);
    div.appendChild(header);
    div.appendChild(body);

    return div;
  }

  /* ---- Build the full timeline ---- */
  function buildTimeline(mountId) {
    var mount = document.getElementById(mountId);
    if (!mount || typeof jobs === 'undefined') return;

    /* HEAD branch label */
    var headLabel = document.createElement('div');
    headLabel.className = 'branch-head mono';
    headLabel.textContent = 'HEAD → main';

    var timeline = document.createElement('div');
    timeline.className = 'timeline';
    timeline.setAttribute('role', 'list');

    /* Find the "head" job for the HEAD label */
    var headJob = jobs.find(function (j) { return j.head; });
    if (headJob) {
      var headBadge = document.createElement('div');
      headBadge.className = 'branch-head mono';
      headBadge.textContent = '⎇ HEAD → ' + headJob.id;
      timeline.appendChild(headBadge);
    }

    jobs.forEach(function (job) {
      var node = buildCommit(job);
      node.setAttribute('role', 'listitem');
      timeline.appendChild(node);
    });

    mount.appendChild(timeline);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildTimeline('timeline-mount');
  });
})();
