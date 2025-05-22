---
layout: page
permalink: /publications/
title: publications
description: You can also find a <i>(probably more updated)</i> list of my publications in my <a href='https://scholar.google.com/citations?user=NYOBdJQAAAAJ&hl=en'> <b><u>Google Scholar</b></u></a> 
years: [2025,2024,2023, 2022, 2021, 2020, 2019, 2018]
nav: true
nav_order: 1
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .chart-container {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      height: 200px;
    }
    .chart-box {
      width: 45%;
    }
  </style>

</head>
<body>

  <div class="chart-container">
    <div class="chart-box">
      <h6 align="right">total: 19 </h6>
      <canvas id="papersChart"></canvas>
    </div>
    <div class="chart-box">
      <h6 align="right">total: 409</h6>
      <canvas id="citationsChart"></canvas>
    </div>
  </div>

<script>
  const data = [
    { year: 2018, papers: 1, citations: 4 },
    { year: 2019, papers: 2, citations: 6 },
    { year: 2020, papers: 1, citations: 18 },
    { year: 2021, papers: 2, citations: 27 },
    { year: 2022, papers: 5, citations: 73 },
    { year: 2023, papers: 1, citations: 112 },
    { year: 2024, papers: 7, citations: 167 }
  ];
  const labels = data.map(entry => entry.year);
  const papersData = data.map(entry => entry.papers);
  const citationsData = data.map(entry => entry.citations);
  let papersChart, citationsChart;
  
  function getFontColor() {
    const theme = localStorage.getItem("theme") || "light";
    return (theme === "dark") ? "#ffffff" : "#000000";
  }
  
  function commonOptions(yAxisTitle, fontColor) {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            color: fontColor
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: yAxisTitle,
            color: fontColor
          },
          ticks: {
            color: fontColor
          }
        }
      }
    };
  }
  
  function updateChartColors() {
    const fontColor = getFontColor();
    
    if (papersChart) {
      // Update the options
      papersChart.options.scales.x.ticks.color = fontColor;
      papersChart.options.scales.y.ticks.color = fontColor;
      papersChart.options.scales.y.title.color = fontColor;
      // Force update
      papersChart.update('active');
    }
    
    if (citationsChart) {
      // Update the options
      citationsChart.options.scales.x.ticks.color = fontColor;
      citationsChart.options.scales.y.ticks.color = fontColor;
      citationsChart.options.scales.y.title.color = fontColor;
      // Force update
      citationsChart.update('active');
    }
  }
  
  function renderCharts() {
    const fontColor = getFontColor();
    
    if (papersChart) papersChart.destroy();
    if (citationsChart) citationsChart.destroy();
    
    papersChart = new Chart(document.getElementById('papersChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: papersData,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: commonOptions('Papers Published', fontColor)
    });
    
    citationsChart = new Chart(document.getElementById('citationsChart'), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: citationsData,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.3
        }]
      },
      options: commonOptions('Citations', fontColor)
    });
  }
  
  // Initial render
  renderCharts();
  
  // Watch for theme change - try updating colors instead of full re-render
  const observer = new MutationObserver(() => {
    // Try updating colors first
    setTimeout(() => {
      updateChartColors();
    }, 50);
    
    // Fallback: if colors don't update properly, fall back to your reload method
    setTimeout(() => {
      const currentColor = getFontColor();
      const actualColor = papersChart?.options?.scales?.x?.ticks?.color;
      
      // If colors don't match, something went wrong, use your reload method
      if (actualColor && actualColor !== currentColor) {
        console.log('Color update failed, falling back to reload');
        if (papersChart) papersChart.destroy();
        if (citationsChart) citationsChart.destroy();
        setTimeout(() => { location.reload(); }, 100);
      }
    }, 200);
  });
  
  observer.observe(document.documentElement, { 
    attributes: true, 
    attributeFilter: ['data-theme'] 
  });
</script>

</body>
</html>

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
