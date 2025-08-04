/* Copyright (c) 2012 the authors listed at the following URL, and/or
the authors of referenced articles or incorporated external code:
http://en.literateprograms.org/Quickhull_(Javascript)?action=history&offset=20120410175256

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Retrieved from: http://en.literateprograms.org/Quickhull_(Javascript)?oldid=18434
*/
L.QuickHull={getDistant:function(n,l){var t=l[1].lat-l[0].lat;return(l[0].lng-l[1].lng)*(n.lat-l[0].lat)+t*(n.lng-l[0].lng)},findMostDistantPointFromBaseLine:function(n,l){var t,i,u,e=0,o=null,a=[];for(t=l.length-1;t>=0;t--)i=l[t],(u=this.getDistant(i,n))>0&&(a.push(i),u>e&&(e=u,o=i));return{maxPoint:o,newPoints:a}},buildConvexHull:function(n,l){var t=[],i=this.findMostDistantPointFromBaseLine(n,l);return i.maxPoint?t=(t=t.concat(this.buildConvexHull([n[0],i.maxPoint],i.newPoints))).concat(this.buildConvexHull([i.maxPoint,n[1]],i.newPoints)):[n[0]]},getConvexHull:function(n){var l,t=!1,i=!1,u=!1,e=!1,o=null,a=null,r=null,s=null,g=null,c=null;for(l=n.length-1;l>=0;l--){var v=n[l];(!1===t||v.lat>t)&&(o=v,t=v.lat),(!1===i||v.lat<i)&&(a=v,i=v.lat),(!1===u||v.lng>u)&&(r=v,u=v.lng),(!1===e||v.lng<e)&&(s=v,e=v.lng)}return i!==t?(c=a,g=o):(c=s,g=r),[].concat(this.buildConvexHull([c,g],n),this.buildConvexHull([g,c],n))}},L.MarkerCluster.include({getConvexHull:function(){var n,l,t=this.getAllChildMarkers(),i=[];for(l=t.length-1;l>=0;l--)n=t[l].getLatLng(),i.push(n);return L.QuickHull.getConvexHull(i)}});