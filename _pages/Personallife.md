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
Fibromyalgia is a chronic condition that causes widespread pain and tenderness in the muscles, joints, and soft tissues of the body  <a href="https://www.nature.com/articles/nrdp201522">(Häuser et al., 2015)</a>. It can also cause fatigue, sleep problems, cognitive difficulties, and brain fog. The exact cause of fibromyalgia is unknown, but it is believed to involve a complex interaction between genetic, environmental, and psychological factors  <a href="https://jamanetwork.com/journals/jama/article-abstract/1860480">(Holton et al., 2010)</a>.
These findings suggest that dietary glutamate may be contributing to FM symptoms in some patients <a href="https://www.sciencedirect.com/science/article/pii/S1526590010002373">(Clauw, 2014)</a>
</p>

This is an example post with image galleries.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://me-pedia.org/images/9/99/Spoon-theory.jpg" class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="https://www.verywellhealth.com/thmb/x26bvm2-3ufDYG8IBrTXGZzbSZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fibromyalgia-symptoms-5aec9feceb97de003668abb7.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple, elegant caption looks good between image rows, after each row, or doesn't have to be there at all. Sourves to the images <a href="https://me-pedia.org/wiki/Spoon_theory">here</a> and <a href="https://www.verywellhealth.com/fibromyalgia-symptoms-716139">here.</a>
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