describe("support child markers changing icon",function(){var e,n,t;beforeEach(function(){t=sinon.useFakeTimers(),(n=document.createElement("div")).style.width="200px",n.style.height="200px",document.body.appendChild(n),(e=L.map(n,{maxZoom:18,trackResize:!1})).fitBounds(new L.LatLngBounds([[1,1],[2,2]]))}),afterEach(function(){e.remove(),document.body.removeChild(n),t.restore(),e=n=t=null}),it("child markers end up with the right icon after becoming unclustered",function(){var n=new L.MarkerClusterGroup,t=new L.Marker([1.5,1.5],{icon:new L.DivIcon({html:"Inner1Text"})}),r=new L.Marker([1.5,1.5]);e.addLayer(n),n.addLayer(t),expect(t._icon.parentNode).to.be(e._panes.markerPane),expect(t._icon.innerHTML).to.contain("Inner1Text"),n.addLayer(r),expect(t._icon).to.be(null),t.setIcon(new L.DivIcon({html:"Inner2Text"})),n.removeLayer(r),expect(t._icon.innerHTML).to.contain("Inner2Text")})});