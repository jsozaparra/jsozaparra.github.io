---
layout: pageII
title:  talks
titledisp: talks and conferences
description: Interactive Leaflet map with the conferences where I have presented my work
nav: true
nav_order: 2
---
<div style="display: inline-block">
<div id="map" style="width: 900px; height: 600px;"></div>
</div>


<script>

	var map = L.map('map').setView([15, 15], 1);

	var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

var markers = L.markerClusterGroup();

L.geoJSON(locations, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h2 style="color:black;"><a href='+feature.properties.Link+' target="_blank" rel="noopener noreferrer">'+feature.properties.Conference+'</a></h2><p style="color:black;">'+feature.properties.Location+' | '+feature.properties.Date+'</p><p style="color:black;">'+feature.properties.Title+'</p>');
  }
}).addTo(markers);

map.addLayer(markers);

map.zoomIn();

</script>

