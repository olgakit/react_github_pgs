(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(350)},149:function(e,t,n){},151:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(60),s=n.n(r),o=(n(149),n(10)),l=n(11),c=n(16),u=n(14),p=n(15),f=n(39),y=(n(151),function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2"}},{key:"auth",value:function(){var e={client_id:"RKAGNFDO10DLQAG34Y0VJSRN3TQSTAYZWFDVKYWDS3TXSJ1Q",client_secret:"OMZ4PHNVOSXGHI5WTHG34AAVQJZDRXCNAD3AVVOQAV3HVQH0",v:"20181009"};return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"simpleFetch",value:function(t,n,i){var a={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t,"?").concat(e.auth(),"&").concat(e.urlBuilder(i)),a).then(function(e){return e.json()})}}]),e}()),d=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"search",value:function(e){return y.simpleFetch("/venues/search","GET",e)}},{key:"getVenueDetails",value:function(e){return y.simpleFetch("/venues/".concat(e),"GET")}},{key:"getVenuePhotos",value:function(e){return y.simpleFetch("/venues/".concat(e,"/photos"),"GET")}}]),e}(),h=n(34),m=Object(h.withScriptjs)(Object(h.withGoogleMap)(function(e){return a.a.createElement(h.GoogleMap,{defaultZoom:10,zoom:e.zoom,style:e.styles,defaultCenter:{lat:55.819851,lng:37.611695},center:e.center,defaultOptions:{styles:[{featureType:"administrative.locality",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:7},{lightness:19},{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text",stylers:[{visibility:"on"},{saturation:"-3"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#748ca3"}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:-100},{lightness:100},{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:"23"},{lightness:"20"},{visibility:"off"}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{color:"#ffdbda"},{saturation:"0"},{visibility:"on"}]},{featureType:"road",elementType:"geometry",stylers:[{hue:"#ff0200"},{saturation:"100"},{lightness:31},{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#f39247"},{saturation:"0"}]},{featureType:"road",elementType:"labels",stylers:[{hue:"#008eff"},{saturation:-93},{lightness:31},{visibility:"on"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#ffe5e5"},{saturation:"0"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{hue:"#bbc0c4"},{saturation:-93},{lightness:-2},{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{hue:"#ff0200"},{saturation:-90},{lightness:-8},{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:10},{lightness:69},{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:-78},{lightness:67},{visibility:"simplified"}]}]}},e.markers&&e.markers.filter(function(e){return e.isVisible}).map(function(t,n){var i=e.venues.find(function(e){return e.id===t.id});return a.a.createElement(h.Marker,{tabIndex:"1",id:"marker",key:n,position:{lat:t.lat,lng:t.lng},onClick:function(){return e.handleMarkerClick(t)},onKeyDown:function(){return e.handleMarkerClick(t)},animation:!0===t.isOpen?google.maps.Animation.BOUNCE:null},t.isOpen&&i.bestPhoto&&a.a.createElement(h.InfoWindow,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:"".concat(i.bestPhoto.prefix,"175x175").concat(i.bestPhoto.suffix),alt:i.categories[0].name}),a.a.createElement("p",null,i.name))))}))})),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(m,Object.assign({},this.props,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC6N51tzFpr0eYV83a2uOIQhGW6DkTVAuc",loadingElement:a.a.createElement("div",{style:{height:"100%"}}),containerElement:a.a.createElement("div",{style:{height:"95%",width:"100%"}}),mapElement:a.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(i.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("li",{className:"oneLocation",tabIndex:"2",onClick:function(){return e.props.handleOneLocationClick(e.props)},onKeyDown:function(){return e.props.handleOneLocationClick(e.props)}},this.props.name)}}]),t}(i.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("ul",{className:"locations"},this.props.venues&&this.props.venues.map(function(t,n){return a.a.createElement(v,Object.assign({key:n},t,{handleOneLocationClick:e.props.handleOneLocationClick}))}))}}]),t}(i.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleFilter=function(){return""!==e.state.query.trim()?e.props.venues.filter(function(t){return t.name.toLowerCase().includes(e.state.query.toLowerCase())}):e.props.venues},e.handleChange=function(t){e.setState({query:t.target.value});var n=e.props.venues.map(function(n){var i=n.name.toLowerCase().includes(t.target.value.toLowerCase()),a=e.props.markers.find(function(e){return e.id===n.id});return a.isVisible=!!i,a});e.props.updateSuperState({markers:n})},e.state={query:"",venues:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"sidebar"},a.a.createElement("h2",null,"Moscow Museums"),a.a.createElement("input",{tabIndex:"1",type:"search",id:"search",placeholder:"Filter Locations",onChange:this.handleChange}),a.a.createElement(g,Object.assign({},this.props,{venues:this.handleFilter(),handleOneLocationClick:this.props.handleOneLocationClick})))}}]),t}(i.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"upperMenuContainer"},a.a.createElement("div",{className:"upperMenu"},a.a.createElement("i",{className:"fas fa-bars fa-2x",id:"menu",tabIndex:"2",onClick:function(){e.props.toggleSideBar()},onKeyDown:function(){e.props.toggleSideBar()}})))}}]),t}(i.Component),T=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).closeAllMarkers=function(){var t=e.state.markers.map(function(e){return e.isOpen=!1,e});e.setState({markers:Object.assign(e.state.markers,t)})},e.handleMarkerClick=function(t){e.closeAllMarkers(),t.isOpen=!0,e.setState({markers:Object.assign(e.state.markers,t)});var n=e.state.venues.find(function(e){return e.id===t.id});d.getVenueDetails(t.id).then(function(t){var i=Object.assign(n,t.response.venue);e.setState({venues:Object.assign(e.state.venues,i)})});var i=document.getElementById("sidebar");window.matchMedia("(max-width: 499px)").matches?(i.style.maxWidth="0%")&&(i.style.minWidth="0%"):window.matchMedia("(mix-width: 500px)").matches&&(i.style.maxWidth="25%")&&(i.style.minWidth="250px"),document.addEventListener("keyup",function(t){27===t.keyCode&&e.closeAllMarkers()})},e.handleOneLocationClick=function(t){var n=e.state.markers.find(function(e){return e.id===t.id});e.handleMarkerClick(n)},e.state={venues:[],markers:[],center:[],zoom:12.9,styles:[{featureType:"administrative.locality",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:7},{lightness:19},{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text",stylers:[{visibility:"on"},{saturation:"-3"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#748ca3"}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:-100},{lightness:100},{visibility:"simplified"}]},{featureType:"poi",elementType:"all",stylers:[{hue:"#ff0200"},{saturation:"23"},{lightness:"20"},{visibility:"off"}]},{featureType:"poi.school",elementType:"geometry.fill",stylers:[{color:"#ffdbda"},{saturation:"0"},{visibility:"on"}]},{featureType:"road",elementType:"geometry",stylers:[{hue:"#ff0200"},{saturation:"100"},{lightness:31},{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#f39247"},{saturation:"0"}]},{featureType:"road",elementType:"labels",stylers:[{hue:"#008eff"},{saturation:-93},{lightness:31},{visibility:"on"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"#ffe5e5"},{saturation:"0"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{hue:"#bbc0c4"},{saturation:-93},{lightness:-2},{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{hue:"#ff0200"},{saturation:-90},{lightness:-8},{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:10},{lightness:69},{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#e9ebed"},{saturation:-78},{lightness:67},{visibility:"simplified"}]}],updateSuperState:function(t){e.setState(t)}},e.toggleSideBar=e.toggleSideBar.bind(Object(f.a)(Object(f.a)(e))),e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.search({near:"Moscow, Russia",query:"\u043c\u0443\u0437\u0435\u0438",limit:30}).then(function(t){var n=t.response.venues,i=t.response.geocode.feature.geometry.center,a=n.map(function(e){return{lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,id:e.id}});e.setState({venues:n,center:i,markers:a})}).catch(function(e){alert("The following error occurred while loading: "+e)})}},{key:"toggleSideBar",value:function(){var e=document.getElementById("sidebar");"25%"===e.style.maxWidth||"250px"===e.style.minWidth?(e.style.maxWidth="0%")&&(e.style.minWidth="0%"):(e.style.maxWidth="25%")&&(e.style.minWidth="250px")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,Object.assign({},this.state,{handleOneLocationClick:this.handleOneLocationClick})),a.a.createElement("div",{className:"rightSide"},a.a.createElement(O,{toggleSideBar:this.toggleSideBar}),a.a.createElement(b,Object.assign({},this.state,{handleMarkerClick:this.handleMarkerClick}))))}}]),t}(i.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(a.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-github-pgs",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-github-pgs","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(t,e)})}}()}},[[144,2,1]]]);
//# sourceMappingURL=main.a33d6d54.chunk.js.map