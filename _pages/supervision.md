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
  async function loadPhDs() {
    const response = await fetch('../assets/phd.json');
    const data = await response.json();
    const container = document.getElementById('phd-container');

    data.forEach(student => {
      const card = document.createElement('div');
      card.className = 'card mt-3 p-3';

      card.innerHTML = `
        <div class="phd-flex">
          <img src="${student.image}" alt="${student.name}" class="profile-pic">
          <div class="phd-content">
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Project:</strong> ${student.project}</p>
            <p><strong>Period:</strong> ${student.period}</p>
            <p><strong>Published Papers:</strong></p>
            <ul class="simple-list">
              ${student.papers.map(p => `<li>${p}</li>`).join('')}
            </ul>
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
