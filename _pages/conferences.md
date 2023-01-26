---
layout: pageII
title:  talks
titledisp: Talks and Conferences
description: this is what included images could look like
tags: formatting images
categories: sample-posts
nav: true
nav_order: 2
---
This is an example post with image galleries.

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZUGyEz0YdJGIT4ADAWnAZv6qLwp1rzY&ehbc=2E312F" width="640" height="480"></iframe>

Leaflet (?)

<div id="map" style="width: 1200px; height: 400px;"></div>
<script>

	const map = L.map('map').setView([51.505, -0.09], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

</script>
