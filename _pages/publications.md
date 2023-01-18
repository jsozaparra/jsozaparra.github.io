---
layout: page
permalink: /publications/
title: publications
description: You can also find also a <i>(probably more updated)</i> list of my publications in my <a href='https://scholar.google.com/citations?user=NYOBdJQAAAAJ&hl=en'> <b><u>Google Scholar</b></u></a> 
years: [2023, 2022, 2021, 2020, 2019, 2018]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
