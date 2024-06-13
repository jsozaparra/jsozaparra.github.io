describe("refreshClusters",function(){function e(e,o){for(var t=e.__parent;t&&t._zoom!==o;)t=t.__parent;return t}function o(){d.fitBounds(new L.LatLngBounds([[1,1],[2,2]]))}function t(e){var o=e.getAllChildMarkers();for(var t in o)if(o[t].changed)return new L.DivIcon({className:"changed"});return new L.DivIcon({className:"original"})}function n(){i=L.markerClusterGroup({maxClusterRadius:2}).addTo(d),b.addTo(i),m.addTo(i),U.addTo(i),f.addTo(i),g.addTo(i),h.addTo(i),o(),s=e(b,8),r=e(b,3),p=e(b,5),k=e(U,8),l=e(U,3),_=e(U,5),x=e(g,8),N=e(g,3),u=e(g,5),expect(r._childCount).to.equal(2),expect(l._childCount).to.equal(2),expect(N._childCount).to.equal(2),expect(s._iconNeedsUpdate).to.not.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(x._iconNeedsUpdate).to.not.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(l._iconNeedsUpdate).to.be.ok(),expect(N._iconNeedsUpdate).to.be.ok(),d.setZoom(3,{animate:!1}),expect(r._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok(),expect(N._iconNeedsUpdate).to.not.be.ok(),expect(p._iconNeedsUpdate).to.be.ok(),expect(_._iconNeedsUpdate).to.be.ok(),expect(u._iconNeedsUpdate).to.be.ok(),d.setZoom(5,{animate:!1}),expect(p._iconNeedsUpdate).to.not.be.ok(),expect(_._iconNeedsUpdate).to.not.be.ok(),expect(u._iconNeedsUpdate).to.not.be.ok(),a.tick(1e3)}var a,c,d,i;beforeEach(function(){a=sinon.useFakeTimers(),(c=document.createElement("div")).style.width="200px",c.style.height="200px",document.body.appendChild(c),(d=L.map(c,{maxZoom:18,trackResize:!1})).fitBounds(new L.LatLngBounds([[1,1],[2,2]]))}),afterEach(function(){i instanceof L.MarkerClusterGroup&&(i.clearLayers(),d.removeLayer(i)),d.remove(),c.remove(),a.restore(),a=c=d=i=null}),it("flags all non-visible parent clusters of a given marker",function(){i=L.markerClusterGroup().addTo(d);var t=L.marker([1.5,1.5]).addTo(i);L.marker([1.5,1.5]).addTo(i);o();var n=e(t,10),c=e(t,2),s=e(t,5);expect(n._iconNeedsUpdate).to.be.ok(),d.setZoom(10,{animate:!1}),expect(n._iconNeedsUpdate).to.not.be.ok(),expect(c._iconNeedsUpdate).to.be.ok(),d.setZoom(2,{animate:!1}),expect(c._iconNeedsUpdate).to.not.be.ok(),expect(s._iconNeedsUpdate).to.be.ok(),d.setZoom(5,{animate:!1}),expect(s._iconNeedsUpdate).to.not.be.ok(),a.tick(1e3),i.refreshClusters(t),expect(n._iconNeedsUpdate).to.be.ok(),expect(c._iconNeedsUpdate).to.be.ok(),expect(s._iconNeedsUpdate).to.not.be.ok()}),it("re-draws visible clusters",function(){i=L.markerClusterGroup({iconCreateFunction:function(e){var o=e.getAllChildMarkers();for(var t in o)if(o[t].changed)return new L.DivIcon({className:"changed"});return new L.DivIcon({className:"original"})}}).addTo(d);var t=L.marker([1.5,1.5]).addTo(i);L.marker([1.5,1.5]).addTo(i);o();var n=e(t,9);expect(n._iconNeedsUpdate).to.be.ok(),d.setZoom(9,{animate:!1}),expect(n._iconNeedsUpdate).to.not.be.ok(),expect(n._icon.className).to.contain("original"),expect(n._icon.className).to.not.contain("changed"),a.tick(1e3),t.changed=!0,i.refreshClusters(t),expect(n._icon.className).to.contain("changed"),expect(n._icon.className).to.not.contain("original")}),it("re-draws markers in singleMarkerMode",function(){i=L.markerClusterGroup({singleMarkerMode:!0,iconCreateFunction:t}).addTo(d);var e=L.marker([1.5,1.5]).addTo(i);o(),expect(e._icon.className).to.contain("original"),e.changed=!0,i.refreshClusters(e),expect(e._icon.className).to.contain("changed"),expect(e._icon.className).to.not.contain("original")}),it("does not modify markers that do not belong to the current group (in singleMarkerMode)",function(){i=L.markerClusterGroup({singleMarkerMode:!0,iconCreateFunction:t}).addTo(d);var e=L.marker([1.5,1.5]).addTo(i),n=L.marker([1.5,1.5],{icon:t({getAllChildMarkers:function(){return n}})}).addTo(d);o(),expect(e._icon.className).to.contain("original"),expect(n._icon.className).to.contain("original"),e.changed=!0,n.changed=!0,i.refreshClusters([e,n]),expect(e._icon.className).to.contain("changed"),expect(e._icon.className).to.not.contain("original"),expect(n._icon.className).to.contain("original"),expect(n._icon.className).to.not.contain("changed")});var s,r,p,k,l,_,x,N,u,b=L.marker([1.5,1.5]),m=L.marker([1.5,1.5]),U=L.marker([1.1,1.1]),f=L.marker([1.1,1.1]),g=L.marker([1.9,1.9]),h=L.marker([1.9,1.9]);it("does not flag clusters of other markers",function(){n(),i.refreshClusters(b),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok(),expect(x._iconNeedsUpdate).to.not.be.ok(),expect(N._iconNeedsUpdate).to.not.be.ok()}),it("processes itself when no argument is passed",function(){n(),i.refreshClusters(),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.be.ok(),expect(l._iconNeedsUpdate).to.be.ok(),expect(x._iconNeedsUpdate).to.be.ok(),expect(N._iconNeedsUpdate).to.be.ok()}),it("accepts an array of markers",function(){n(),i.refreshClusters([b,g]),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(x._iconNeedsUpdate).to.be.ok(),expect(N._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok()}),it("accepts a mapping of markers",function(){n(),i.refreshClusters({id1:b,id2:g}),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(x._iconNeedsUpdate).to.be.ok(),expect(N._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok()}),it("accepts an L.LayerGroup",function(){n();var e=new L.LayerGroup([b,g]);i.refreshClusters(e),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(x._iconNeedsUpdate).to.be.ok(),expect(N._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok()}),it("accepts an L.MarkerCluster",function(){n(),i.refreshClusters(s),expect(s._iconNeedsUpdate).to.be.ok(),expect(r._iconNeedsUpdate).to.be.ok(),expect(k._iconNeedsUpdate).to.not.be.ok(),expect(l._iconNeedsUpdate).to.not.be.ok(),expect(x._iconNeedsUpdate).to.not.be.ok(),expect(N._iconNeedsUpdate).to.not.be.ok()})});