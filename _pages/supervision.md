---
layout: pageII
title:  supervision
permalink: /supervision/
titledisp: supervision
description: students and projects I have supervised
nav: true
nav_order: 5
---


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>
    img.profile-pic {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .phd-flex {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }

    .phd-content {
      flex: 1;
      min-width: 250px;
    }

    .simple-list {
      padding-left: 20px;
    }

    .badge {
      display: inline-block;
      padding: 0.2rem 0.45rem;
      border-radius: 0.375rem;
      font-size: 0.75rem;
      line-height: 1;
      font-weight: 600;
      vertical-align: middle;
      white-space: nowrap;
      border: 1px solid transparent;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    .badge.published      { background: #059669; }  /* verde */
    .badge.under_review   { background:rgb(27, 136, 231); }  /* naranja */
    .badge.working_paper  { background:rgb(129, 38, 220); }  /* rojo */
    .badge.in_press       { background: #2563eb; }  /* azul */
    .badge.preprint       { background: #6b7280; }  /* gris */
    .badge.accepted       { background: #059669; }

    .phd-flex { display: flex; gap: 1rem; align-items: flex-start; }
    .profile-pic { width: 96px; height: 96px; object-fit: cover; border-radius: 50%; }
    .simple-list { margin: 0; padding-left: 1.2rem; }

    @media (max-width: 600px) {
      .phd-flex {
        flex-direction: column;
      }
    }
  </style>

</head>
<body>

 <!-- PhDs -->
<div class="mt-4">
  <h2>PhD Students</h2>
  <div id="phd-container"></div>
</div>

<!-- Masters -->
<div class="mt-4">
  <h2>Master's Students</h2>
  <div class="card mt-3 p-3">
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Thesis Title</th>
            <th>University</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody id="masters-table"></tbody>
      </table>
    </div>
  </div>
</div>

<!-- Bachelors -->
<div class="mt-4">
  <h2>Bachelor's Students</h2>
  <div class="card mt-3 p-3">
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Thesis Title</th>
            <th>University</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody id="bachelors-table"></tbody>
      </table>
    </div>
  </div>
</div>


<script>
  function normalizeStatus(s) {
    if (!s) return '';
    const key = s.toLowerCase().trim()
      .replace(/\s+/g, '_')           // "Under Review" -> "under_review"
      .replace(/\[|\]/g, '');         // quita corchetes por si vienen del texto
    const allowed = new Set([
      'published', 'accepted', 'in_press', 'under_review', 'preprint', 'working_paper'
    ]);
    return allowed.has(key) ? key : '';
  }

  function statusLabel(key) {
    const map = {
      published: 'Published',
      accepted: 'Accepted',
      in_press: 'In press',
      under_review: 'Under review',
      preprint: 'Preprint',
      working_paper: 'Working paper'
    };
    return map[key] || '';
  }

  function makeBadge(status) {
    const key = normalizeStatus(status);
    if (!key) return '';
    const label = statusLabel(key);
    return `<span class="badge ${key}" aria-label="${label}">${label}</span>`;
  }

  // Soporta:
  // - Objeto: { title, url, status }
  // - Texto plano con prefijo: "[Under Review] Título del paper"
  function renderPaperItem(paper) {
  let title = '';
  let url = '';
  let status = '';

  if (typeof paper === 'string') {
    // Detecta prefijos tipo [Under Review] ...
    const m = paper.match(/^\s*\[([^\]]+)\]\s*(.+)$/i);
    if (m) {
      status = normalizeStatus(m[1]);
      title = m[2].trim();
    } else {
      title = paper.trim();
    }
  } else if (paper && typeof paper === 'object') {
    title = (paper.title || '').trim();
    url = (paper.url || '').trim();
    status = normalizeStatus(paper.status);
  }

  const badge = makeBadge(status);
  const safeTitle = title || '(untitled)';

  const linkHTML = url
    ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${safeTitle}</a>`
    : safeTitle;

  // Badge al inicio del texto
  return `<li>${badge} ${linkHTML}</li>`;
}

  async function loadPhDs() {
    const response = await fetch('{{ "/assets/phd.json" | relative_url }}', { cache: 'no-store' });
    const data = await response.json();
    const container = document.getElementById('phd-container');

    if (!Array.isArray(data) || data.length === 0) {
      container.innerHTML = '<p>No current PhD supervisions to display.</p>';
      return;
    }

    data.forEach(student => {
      const card = document.createElement('div');
      card.className = 'card mt-3 p-3';

      const papers = Array.isArray(student.papers) ? student.papers : [];
      const papersHTML = papers.length
        ? `<p><strong>Articles:</strong></p>
           <ul class="simple-list">
             ${papers.map(renderPaperItem).join('')}
           </ul>`
        : '';

      card.innerHTML = `
        <div class="phd-flex">
          <img src="${student.image}" alt="${student.name}" class="profile-pic">
          <div class="phd-content">
            <p><strong>Name:</strong> ${student.name ?? ''}</p>
            <p><strong>Project:</strong> ${student.project ?? ''}</p>
            <p><strong>Period:</strong> ${student.period ?? ''}</p>
            ${papersHTML}
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  async function loadTable(jsonFile, tableId) {
    const response = await fetch(jsonFile);
    const data = await response.json();
    const tbody = document.getElementById(tableId);

    data.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.thesis}</td>
        <td>${student.university}</td>
        <td>${student.year}</td>
      `;
      tbody.appendChild(row);
    });
  }

  // Load all data after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    loadPhDs();
    loadTable('../assets/masters.json', 'masters-table');
    loadTable('../assets/bachelors.json', 'bachelors-table');
  });
</script>


</body>
</html>
