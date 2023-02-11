---
layout: pageII
title:  personal life
titledisp: personal life
description: a brief summary of my life as a gradstudent
tags: formatting images
categories: sample-posts
nav: true
nav_order: 5
---

## fibromyalgia
<p align="justify">
By the end of 2015 I was about to get my Transportation Engineering professional title when I started to see myself working in academia in the near future. As I wanted to make some kind of contribution to my home town’s public transport system, I decided to enrol the PhD program in the Department of Transportation Engineering and Logistics, at PUC, Chile, under the supervision of Juan Carlos Muñoz and Sebastián Raveau.<br><br>
During 2016 I worked defining my dissertation research, which ended up focused on the causes and effects of public transport reliability. In August, I also had the chance to participate in the “Modeling and Simulation of Transportation Networks” MIT short course, as well as to attend the TransitData16 conference in Boston.
</p>

This is an example post with image galleries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://me-pedia.org/images/9/99/Spoon-theory.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all.
</div>

Images can be made zoomable.
Simply add `data-zoomable` to `<img>` tags that you want to make zoomable.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/8.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/10.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

The rest of the images in this post are all zoomable, arranged into different mini-galleries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/12.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/7.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>