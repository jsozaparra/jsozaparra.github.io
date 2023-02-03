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
Leaflet map talks. TODO: json   script src="locations.js"> /script> ; var locations={type ....} ; L.geoJSON(locations).addTo(map) check

TODO: check other example, add name of conference, link, etc

<!-- 
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ZUGyEz0YdJGIT4ADAWnAZv6qLwp1rzY&ehbc=2E312F" width="640" height="480"></iframe>
-->

<div id="map" style="width: 1200px; height: 500px;"></div>

<script>

	var map = L.map('map').setView([1, 15], 1);

	var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

// L.geoJSON(locations).addTo(map);
var markers = L.markerClusterGroup();

L.geoJSON(locations, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h2 style="color:black;"><a href=“https://www.google.com”>'+feature.properties.Conference+'</a></h2><p style="color:black;">name: '+feature.properties.Location+'</p>');
  }
}).addTo(markers);

map.addLayer(markers);

map.zoomIn();

</script>

<!-- 
<script type="text/javascript">
    
var addressPoints = [
  [
    "Berkeley CA, USA",
    37.8708393,
    -122.2728638
  ],
  [
    "London, UK",
    51.5073219,
    -0.1276473
  ],
  [
    "San Francisco, California",
    37.7792808,
    -122.4192362
  ],
  [
    "Los Angeles, CA",
    34.0543942,
    -118.2439408
  ]
];
            
var tiles = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', 
{maxZoom: 18,
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}),
latlng = L.latLng(30, 10);
    		
var map = L.map('map', {center: latlng, zoom: 0.7, layers: [tiles]});

var markers = L.markerClusterGroup({
    			showCoverageOnHover: false,
    			maxClusterRadius: 80
    			});

for (var i = 0; i < addressPoints.length; i++) {
    			var a = addressPoints[i];
    			var title = a[0];
    			var marker = L.marker(new L.LatLng(a[1], a[2]), { title: title });
    			marker.bindPopup(title);
    			markers.addLayer(marker);
    		}

map.addLayer(markers);
map.zoomIn();
    	
</script>

var addressPoints = [
  [
    "Berkeley CA, USA",
    37.8708393,
    -122.2728638
  ],
  [
    "London, UK",
    51.5073219,
    -0.1276473
  ],
  [
    "San Francisco, California",
    37.7792808,
    -122.4192362
  ],
  [
    "Los Angeles, CA",
    34.0543942,
    -118.2439408
  ]
];

var markers = L.markerClusterGroup();

    for (var i = 0; i < addressPoints.length; i++) {
    			var a = addressPoints[i];
    			var title = a[0];
    			var marker = L.marker(new L.LatLng(a[1], a[2]), { title: title });
    			marker.bindPopup(title);
    			markers.addLayer(marker);
    		}

map.addLayer(markers);



-->
