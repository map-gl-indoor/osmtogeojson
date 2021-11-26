!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).osmtogeojson=e()}(function(){return function r(o,i,a){function u(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(s)return s(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return u(o[t][1][e]||e)},n,n.exports,r,o,i,a)}return i[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,n){var F=e("./lodash.custom.js"),L=e("@mapbox/geojson-rewind"),r={};function o(e,t){return(e.version||t.version)&&e.version!==t.version?(+e.version||0)>(+t.version||0)?e:t:F.merge(e,t)}e("osm-polygon-features").forEach(function(e){var t,n;"all"===e.polygon?r[e.key]=!0:(t="whitelist"===e.polygon?"included_values":"excluded_values",n={},e.values.forEach(function(e){n[e]=!0}),r[e.key]={},r[e.key][t]=n)});e={};function P(e){function t(e){return e[e.length-1]}function n(e,t){return void 0!==e&&void 0!==t&&e.id===t.id}for(var r,o,i,a,u,s,l=[];e.length;)for(r=e.pop().nodes.slice(),l.push(r);e.length&&!n(r[0],t(r));){for(o=r[0],i=t(r),a=0;a<e.length;a++){if(n(i,(s=e[a].nodes)[0])){u=r.push,s=s.slice(1);break}if(n(i,t(s))){u=r.push,s=s.slice(0,-1).reverse();break}if(n(o,t(s))){u=r.unshift,s=s.slice(0,-1);break}if(n(o,s[0])){u=r.unshift,s=s.slice(1).reverse();break}s=u=null}if(!s)break;e.splice(a,1),u.apply(r,s)}return l}e=function(e,N,S){var t,a,u,s,l,c;function f(e,t,n){e.hasAttribute(n)&&(t[n]=e.getAttribute(n))}function p(e,t){e=F.clone(e);f(t,e,"lat"),f(t,e,"lon"),e.__is_center_placeholder=!0,s.push(e)}function y(e,t){var r=F.clone(e);function n(e,t,n){t={type:"node",id:"_"+r.type+"/"+r.id+"bounds"+n,lat:e,lon:t};r.nodes.push(t.id),s.push(t)}r.nodes=[],n(t.getAttribute("minlat"),t.getAttribute("minlon"),1),n(t.getAttribute("maxlat"),t.getAttribute("minlon"),2),n(t.getAttribute("maxlat"),t.getAttribute("maxlon"),3),n(t.getAttribute("minlat"),t.getAttribute("maxlon"),4),r.nodes.push(r.nodes[0]),r.__is_bounds_placeholder=!0,l.push(r)}function d(r,e){F.isArray(r.nodes)||(r.nodes=[],F.each(e,function(e,t){r.nodes.push("_anonymous@"+e.getAttribute("lat")+"/"+e.getAttribute("lon"))})),F.each(e,function(e,t){var n;e.getAttribute("lat")&&(n=e.getAttribute("lat"),e=e.getAttribute("lon"),t=r.nodes[t],e={type:"node",id:t,lat:n,lon:e},s.push(e),e.id)})}function g(i,e){function a(e,t){var n;l.some(function(e){return"way"==e.type&&e.id==t})||(n={type:"way",id:t,nodes:[]},F.each(e,function(e){var t;e.getAttribute("lat")?(t=e.getAttribute("lat"),e=e.getAttribute("lon"),e={type:"node",id:"_anonymous@"+t+"/"+e,lat:t,lon:e},n.nodes.push(e.id),s.push(e)):n.nodes.push(void 0)}),l.push(n))}F.each(e,function(e,t){var n,r,o;"node"==i.members[t].type?e.getAttribute("lat")&&(n=e.getAttribute("lat"),r=e.getAttribute("lon"),o=i.members[t].ref,s.push({type:"node",id:o,lat:n,lon:r})):"way"==i.members[t].type&&0<e.getElementsByTagName("nd").length&&(i.members[t].ref="_fullGeom"+i.members[t].ref,a(e.getElementsByTagName("nd"),i.members[t].ref))})}return N=F.merge({verbose:!1,flatProperties:!0,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:r,deduplicator:o},N),"undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?(t=e,s=new Array,l=new Array,c=new Array,F.each(t.getElementsByTagName("node"),function(e,t){var n={};F.each(e.getElementsByTagName("tag"),function(e){n[e.getAttribute("k")]=e.getAttribute("v")});var r={type:"node"};f(e,r,"id"),f(e,r,"lat"),f(e,r,"lon"),f(e,r,"version"),f(e,r,"timestamp"),f(e,r,"changeset"),f(e,r,"uid"),f(e,r,"user"),F.isEmpty(n)||(r.tags=n),s.push(r)}),F.each(t.getElementsByTagName("way"),function(e,t){var n={},r=[];F.each(e.getElementsByTagName("tag"),function(e){n[e.getAttribute("k")]=e.getAttribute("v")});var o=!1;F.each(e.getElementsByTagName("nd"),function(e,t){var n;(n=e.getAttribute("ref"))&&(r[t]=n),!o&&e.getAttribute("lat")&&(o=!0)});var i={type:"way"};f(e,i,"id"),f(e,i,"version"),f(e,i,"timestamp"),f(e,i,"changeset"),f(e,i,"uid"),f(e,i,"user"),0<r.length&&(i.nodes=r),F.isEmpty(n)||(i.tags=n),(a=e.getElementsByTagName("center")[0])&&p(i,a),o?d(i,e.getElementsByTagName("nd")):(u=e.getElementsByTagName("bounds")[0])&&y(i,u),l.push(i)}),F.each(t.getElementsByTagName("relation"),function(e,t){var n={},r=[];F.each(e.getElementsByTagName("tag"),function(e){n[e.getAttribute("k")]=e.getAttribute("v")});var o=!1;F.each(e.getElementsByTagName("member"),function(e,t){r[t]={},f(e,r[t],"ref"),f(e,r[t],"role"),f(e,r[t],"type"),(!o&&"node"==r[t].type&&e.getAttribute("lat")||"way"==r[t].type&&0<e.getElementsByTagName("nd").length)&&(o=!0)});var i={type:"relation"};f(e,i,"id"),f(e,i,"version"),f(e,i,"timestamp"),f(e,i,"changeset"),f(e,i,"uid"),f(e,i,"user"),0<r.length&&(i.members=r),F.isEmpty(n)||(i.tags=n),(a=e.getElementsByTagName("center")[0])&&p(i,a),o?g(i,e.getElementsByTagName("member")):(u=e.getElementsByTagName("bounds")[0])&&y(i,u),c.push(i)}),h(s,l,c)):function(e){var a=new Array,o=new Array,t=new Array;function n(e){var t=F.clone(e);t.lat=e.center.lat,t.lon=e.center.lon,t.__is_center_placeholder=!0,a.push(t)}function r(e){var r=F.clone(e);function t(e,t,n){t={type:"node",id:"_"+r.type+"/"+r.id+"bounds"+n,lat:e,lon:t};r.nodes.push(t.id),a.push(t)}r.nodes=[],t(r.bounds.minlat,r.bounds.minlon,1),t(r.bounds.maxlat,r.bounds.minlon,2),t(r.bounds.maxlat,r.bounds.maxlon,3),t(r.bounds.minlat,r.bounds.maxlon,4),r.nodes.push(r.nodes[0]),r.__is_bounds_placeholder=!0,o.push(r)}function i(r){F.isArray(r.nodes)||(r.nodes=r.geometry.map(function(e){return null!==e?"_anonymous@"+e.lat+"/"+e.lon:"_anonymous@unknown_location"})),r.geometry.forEach(function(e,t){var n;e&&(n=e.lat,e=e.lon,t=r.nodes[t],a.push({type:"node",id:t,lat:n,lon:e}))})}function u(e){function i(e,t){var n;o.some(function(e){return"way"==e.type&&e.id==t})||(n={type:"way",id:t,nodes:[]},e.forEach(function(e){var t;e?(t=e.lat,e=e.lon,e={type:"node",id:"_anonymous@"+t+"/"+e,lat:t,lon:e},n.nodes.push(e.id),a.push(e)):n.nodes.push(void 0)}),o.push(n))}e.members.forEach(function(e,t){var n,r,o;"node"==e.type?e.lat&&(n=e.lat,r=e.lon,o=e.ref,a.push({type:"node",id:o,lat:n,lon:r})):"way"==e.type&&e.geometry&&(e.ref="_fullGeom"+e.ref,i(e.geometry,e.ref))})}for(var s=0;s<e.elements.length;s++)switch(e.elements[s].type){case"node":var l=e.elements[s];a.push(l);break;case"way":var c=F.clone(e.elements[s]);c.nodes=F.clone(c.nodes),o.push(c),c.center&&n(c),c.geometry?i(c):c.bounds&&r(c);break;case"relation":l=F.clone(e.elements[s]);l.members=F.clone(l.members),t.push(l);c=l.members&&l.members.some(function(e){return"node"==e.type&&e.lat||"way"==e.type&&e.geometry&&0<e.geometry.length});l.center&&n(l),c?u(l):l.bounds&&r(l)}return h(a,o,t)}(e);function h(e,t,n){function r(e,t){if("object"!=typeof t&&(t={}),"function"==typeof N.uninterestingTags)return!N.uninterestingTags(e,t);for(var n in e)if(!0!==N.uninterestingTags[n]&&!0!==t[n]&&t[n]!==e[n])return 1}function p(e){var t,n={timestamp:e.timestamp,version:e.version,changeset:e.changeset,user:e.user,uid:e.uid};for(t in n)void 0===n[t]&&delete n[t];return n}for(var o=new Object,i=new Object,a=0;a<e.length;a++)void 0!==(o[(f=void 0!==o[(f=e[a]).id]?N.deduplicator(f,o[f.id]):f).id]=f).tags&&r(f.tags)&&(i[f.id]=!0);for(a=0;a<n.length;a++)if(F.isArray(n[a].members))for(var u=0;u<n[a].members.length;u++)"node"==n[a].members[u].type&&(i[n[a].members[u].ref]=!0);for(var y=new Object,s=new Object,a=0;a<t.length;a++){var l=t[a];if(y[l.id]&&(l=N.deduplicator(l,y[l.id])),y[l.id]=l,F.isArray(l.nodes))for(u=0;u<l.nodes.length;u++)"object"!=typeof l.nodes[u]&&(s[l.nodes[u]]=!0,l.nodes[u]=o[l.nodes[u]])}var c=new Array;for(g in o){var f=o[g];s[g]&&!i[g]||c.push(f)}for(var d=new Array,a=0;a<n.length;a++)d[(m=d[(m=n[a]).id]?N.deduplicator(m,d[m.id]):m).id]=m;var g,h,b={node:{},way:{},relation:{}};for(g in d){var m=d[g];if(F.isArray(m.members))for(u=0;u<m.members.length;u++){var v=m.members[u].type,_=m.members[u].ref;"number"!=typeof _&&(_=_.replace("_fullGeom","")),b[v]?(void 0===b[v][_]&&(b[v][_]=[]),b[v][_].push({role:m.members[u].role,rel:m.id,reltags:m.tags})):N.verbose&&console.warn("Relation",m.type+"/"+m.id,"member",v+"/"+_,"ignored because it has an invalid type")}else N.verbose&&console.warn("Relation",m.type+"/"+m.id,"ignored because it has no members")}var w=[];for(a=0;a<c.length;a++)void 0!==c[a].lon&&void 0!==c[a].lat?(E={type:"Feature",id:c[a].type+"/"+c[a].id,properties:{type:c[a].type,id:c[a].id,tags:c[a].tags||{},relations:b.node[c[a].id]||[],meta:p(c[a])},geometry:{type:"Point",coordinates:[+c[a].lon,+c[a].lat]}},c[a].__is_center_placeholder&&(E.properties.geometry="center"),S?S(E):w.push(E)):N.verbose&&console.warn("POI",c[a].type+"/"+c[a].id,"ignored because it lacks coordinates");for(var j=[],A=[],a=0;a<n.length;a++)if(d[n[a].id]===n[a]){if(void 0!==n[a].tags&&("route"==n[a].tags.type||"waterway"==n[a].tags.type)){if(!F.isArray(n[a].members)){N.verbose&&console.warn("Route",n[a].type+"/"+n[a].id,"ignored because it has no members");continue}if(n[a].members.forEach(function(e){y[e.ref]&&!r(y[e.ref].tags)&&(y[e.ref].is_skippablerelationmember=!0)}),!1===(E=function(n){var e,r=!1;t=(t=n.members.filter(function(e){return"way"===e.type})).map(function(t){var e=y[t.ref];return void 0===e||void 0===e.nodes?(N.verbose&&console.warn("Route "+n.type+"/"+n.id,"tainted by a missing or incomplete  way",t.type+"/"+t.ref),void(r=!0)):{id:t.ref,role:t.role,way:e,nodes:e.nodes.filter(function(e){return void 0!==e||(r=!0,N.verbose&&console.warn("Route",n.type+"/"+n.id,"tainted by a way",t.type+"/"+t.ref,"with a missing node"),!1)})}}),t=F.compact(t),e=P(t);var t=[];if(0==(t=F.compact(e.map(function(e){return F.compact(e.map(function(e){return[+e.lon,+e.lat]}))}))).length)return N.verbose&&console.warn("Route",n.type+"/"+n.id,"contains no coordinates"),!1;t={type:"Feature",id:n.type+"/"+n.id,properties:{type:n.type,id:n.id,tags:n.tags||{},relations:b[n.type][n.id]||[],meta:p(n)},geometry:{type:1===t.length?"LineString":"MultiLineString",coordinates:1===t.length?t[0]:t}};r&&(N.verbose&&console.warn("Route",n.type+"/"+n.id,"is tainted"),t.properties.tainted=!0);return t}(n[a]))){N.verbose&&console.warn("Route relation",n[a].type+"/"+n[a].id,"ignored because it has invalid geometry");continue}S?S(L(E)):A.push(E)}if(void 0!==n[a].tags&&("multipolygon"==n[a].tags.type||"boundary"==n[a].tags.type)){if(F.isArray(n[a].members)){for(var k=0,u=0;u<n[a].members.length;u++)"outer"==n[a].members[u].role?k++:N.verbose&&"inner"!=n[a].members[u].role&&console.warn("Multipolygon",n[a].type+"/"+n[a].id,"member",n[a].members[u].type+"/"+n[a].members[u].ref,'ignored because it has an invalid role: "'+n[a].members[u].role+'"');if(n[a].members.forEach(function(e){y[e.ref]&&("outer"!==e.role||r(y[e.ref].tags,n[a].tags)||(y[e.ref].is_skippablerelationmember=!0),"inner"!==e.role||r(y[e.ref].tags)||(y[e.ref].is_skippablerelationmember=!0))}),0!=k){var O=!1,E=null;if(O=1==k&&!r(n[a].tags,{type:!0})?!0:O){var x=n[a].members.filter(function(e){return"outer"===e.role})[0];if(void 0===(x=y[x.ref])){N.verbose&&console.warn("Multipolygon relation",n[a].type+"/"+n[a].id,"ignored because outer way",x.type+"/"+x.ref,"is missing");continue}x.is_skippablerelationmember=!0,E=T(x,n[a])}else E=T(n[a],n[a]);!1!==E?S?S(L(E)):A.push(E):N.verbose&&console.warn("Multipolygon relation",n[a].type+"/"+n[a].id,"ignored because it has invalid geometry")}else N.verbose&&console.warn("Multipolygon relation",n[a].type+"/"+n[a].id,"ignored because it has no outer ways")}else N.verbose&&console.warn("Multipolygon",n[a].type+"/"+n[a].id,"ignored because it has no members");function T(e,t){var n=!1,r=O?"way":"relation",o="number"==typeof e.id?e.id:+e.id.replace("_fullGeom","");function i(e){function t(e){return e.map(function(e){return[+e.lat,+e.lon]})}var n;for(e=t(e),n=0;n<a.length;n++)if(function(e,t){for(var n=0;n<t.length;n++)if(function(e,t){for(var n=e[0],r=e[1],o=false,i=0,a=t.length-1;i<t.length;a=i++){var u=t[i][0],s=t[i][1];var l=t[a][0],c=t[a][1];var f=s>r!=c>r&&n<(l-u)*(r-s)/(c-s)+u;if(f)o=!o}return o}(t[n],e))return!0;return!1}(t(a[n]),e))return n}f=(f=t.members.filter(function(e){return"way"===e.type})).map(function(t){var e=y[t.ref];return void 0===e||void 0===e.nodes?(N.verbose&&console.warn("Multipolygon",r+"/"+o,"tainted by a missing or incomplete way",t.type+"/"+t.ref),void(n=!0)):{id:t.ref,role:t.role||"outer",way:e,nodes:e.nodes.filter(function(e){return void 0!==e||(n=!0,N.verbose&&console.warn("Multipolygon",r+"/"+o,"tainted by a way",t.type+"/"+t.ref,"with a missing node"),!1)})}});for(var a=P((f=F.compact(f)).filter(function(e){return"outer"===e.role})),u=P(f.filter(function(e){return"inner"===e.role})),s=a.map(function(e){return[e]}),l=0;l<u.length;l++){var c=i(u[l]);void 0!==c?s[c].push(u[l]):N.verbose&&console.warn("Multipolygon",r+"/"+o,"contains an inner ring with no containing outer")}t=[];if(0==(t=F.compact(s.map(function(e){e=F.compact(e.map(function(e){return e.length<4?void(N.verbose&&console.warn("Multipolygon",r+"/"+o,"contains a ring with less than four nodes")):F.compact(e.map(function(e){return[+e.lon,+e.lat]}))}));if(0!=e.length)return e;N.verbose&&console.warn("Multipolygon",r+"/"+o,"contains an empty ring cluster")}))).length)return N.verbose&&console.warn("Multipolygon",r+"/"+o,"contains no coordinates"),!1;var f="MultiPolygon";1===t.length&&(f="Polygon",t=t[0]);t={type:"Feature",id:e.type+"/"+o,properties:{type:e.type,id:o,tags:e.tags||{},relations:b[e.type][e.id]||[],meta:p(e)},geometry:{type:f,coordinates:t}};return n&&(N.verbose&&console.warn("Multipolygon",r+"/"+o,"is tainted"),t.properties.tainted=!0),t}}}for(a=0;a<t.length;a++)if(y[t[a].id]===t[a])if(F.isArray(t[a].nodes)){if(!t[a].is_skippablerelationmember){"number"!=typeof t[a].id&&(t[a].id=+t[a].id.replace("_fullGeom","")),t[a].tainted=!1,t[a].hidden=!1;var M,B=new Array;for(u=0;u<t[a].nodes.length;u++)"object"==typeof t[a].nodes[u]?B.push([+t[a].nodes[u].lon,+t[a].nodes[u].lat]):(N.verbose&&console.warn("Way",t[a].type+"/"+t[a].id,"is tainted by an invalid node"),t[a].tainted=!0);B.length<=1?N.verbose&&console.warn("Way",t[a].type+"/"+t[a].id,"ignored because it contains too few nodes"):(M="LineString",void 0!==t[a].nodes[0]&&void 0!==t[a].nodes[t[a].nodes.length-1]&&t[a].nodes[0].id===t[a].nodes[t[a].nodes.length-1].id&&(void 0!==t[a].tags&&function(e){var t,n=N.polygonFeatures;if("function"==typeof n)return n(e);if("no"===e.area)return!1;for(t in e){var r=e[t],o=n[t];if(void 0!==o&&"no"!==r){if(!0===o)return!0;if(o.included_values&&!0===o.included_values[r])return!0;if(o.excluded_values&&!0!==o.excluded_values[r])return!0}}return!1}(t[a].tags)||t[a].__is_bounds_placeholder)&&(M="Polygon",B=[B]),E={type:"Feature",id:t[a].type+"/"+t[a].id,properties:{type:t[a].type,id:t[a].id,tags:t[a].tags||{},relations:b.way[t[a].id]||[],meta:p(t[a])},geometry:{type:M,coordinates:B}},t[a].tainted&&(N.verbose&&console.warn("Way",t[a].type+"/"+t[a].id,"is tainted"),E.properties.tainted=!0),t[a].__is_bounds_placeholder&&(E.properties.geometry="bounds"),S?S(L(E)):("LineString"==M?j:A).push(E))}}else N.verbose&&console.warn("Way",t[a].type+"/"+t[a].id,"ignored because it has no nodes");return!!S||((h={type:"FeatureCollection",features:[]}).features=h.features.concat(A),h.features=h.features.concat(j),h.features=h.features.concat(w),N.flatProperties&&h.features.forEach(function(e){e.properties=F.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id})}),h=L(h))}},t.exports=e.toGeojson=e},{"./lodash.custom.js":2,"@mapbox/geojson-rewind":3,"osm-polygon-features":4}],2:[function(e,Ht,Jt){!function(Xt){!function(){!function(){var m,r="__lodash_hash_undefined__",g=1,v=2,n=1/0,o=9007199254740991,y="[object Arguments]",f="[object Array]",d="[object Boolean]",h="[object Date]",p="[object Error]",b="[object Function]",_="[object GeneratorFunction]",w="[object Map]",j="[object Number]",A="[object Object]",i="[object Promise]",k="[object RegExp]",O="[object Set]",E="[object String]",x="[object Symbol]",a="[object WeakMap]",T="[object ArrayBuffer]",M="[object DataView]",B="[object Float32Array]",N="[object Float64Array]",S="[object Int8Array]",F="[object Int16Array]",L="[object Int32Array]",P="[object Uint8Array]",R="[object Uint8ClampedArray]",I="[object Uint16Array]",$="[object Uint32Array]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,t=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,C=/\w*$/,D=/^\[object .+?Constructor\]$/,G=/^(?:0|[1-9]\d*)$/,U={};U[B]=U[N]=U[S]=U[F]=U[L]=U[P]=U[R]=U[I]=U[$]=!0,U[y]=U[f]=U[T]=U[d]=U[M]=U[h]=U[p]=U[b]=U[w]=U[j]=U[A]=U[k]=U[O]=U[E]=U[a]=!1;var z={};z[y]=z[f]=z[T]=z[M]=z[d]=z[h]=z[B]=z[N]=z[S]=z[F]=z[L]=z[w]=z[j]=z[A]=z[k]=z[O]=z[E]=z[x]=z[P]=z[R]=z[I]=z[$]=!0,z[p]=z[b]=z[a]=!1;var e="object"==typeof Xt&&Xt&&Xt.Object===Object&&Xt,W="object"==typeof self&&self&&self.Object===Object&&self,q=e||W||Function("return this")(),V="object"==typeof Jt&&Jt&&!Jt.nodeType&&Jt,X=V&&"object"==typeof Ht&&Ht&&!Ht.nodeType&&Ht,H=X&&X.exports===V,J=H&&e.process,K=function(){try{return J&&J.binding("util")}catch(e){}}(),Q=K&&K.isTypedArray;function Y(e,t){return e.set(t[0],t[1]),e}function Z(e,t){return e.add(t),e}function ee(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););return e}function te(e,t,n,r){var o=-1,i=e?e.length:0;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function ne(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function re(e){var n=-1,r=Array(e.size);return e.forEach(function(e,t){r[++n]=[t,e]}),r}function oe(t,n){return function(e){return t(n(e))}}function ie(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var ae=Array.prototype,ue=Function.prototype,se=Object.prototype,W=q["__core-js_shared__"],le=(e=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"",ce=ue.toString,fe=se.hasOwnProperty,pe=ce.call(Object),ye=se.toString,de=RegExp("^"+ce.call(fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=H?q.Buffer:m,W=q.Symbol,ge=q.Uint8Array,he=oe(Object.getPrototypeOf,Object),be=Object.create,me=se.propertyIsEnumerable,ve=ae.splice,e=Object.getOwnPropertySymbols,ue=K?K.isBuffer:m,_e=oe(Object.keys,Object),we=Math.max,H=st(q,"DataView"),je=st(q,"Map"),ae=st(q,"Promise"),K=st(q,"Set"),q=st(q,"WeakMap"),Ae=st(Object,"create"),ke=!me.call({valueOf:1},"valueOf"),Oe=mt(H),Ee=mt(je),xe=mt(ae),Te=mt(K),Me=mt(q),W=W?W.prototype:m,Be=W?W.valueOf:m,Ne=W?W.toString:m;function Se(){}function Fe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Le(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Pe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Re(e){var t=-1,n=e?e.length:0;for(this.__data__=new Pe;++t<n;)this.add(e[t])}function Ie(e){this.__data__=new Le(e)}function $e(e,t){var n,r=At(e)||jt(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],o=r.length,i=!!o;for(n in e)!t&&!fe.call(e,n)||i&&("length"==n||ft(n,o))||r.push(n);return r}function Ce(e,t,n){(n===m||wt(e[t],n))&&("number"!=typeof t||n!==m||t in e)||(e[t]=n)}function De(e,t,n){var r=e[t];fe.call(e,t)&&wt(r,n)&&(n!==m||t in e)||(e[t]=n)}function Ge(e,t){for(var n=e.length;n--;)if(wt(e[n][0],t))return n;return-1}function Ue(n,r,o,i,e,t,a){var u;if((u=i?t?i(n,e,t,a):i(n):u)!==m)return u;if(!Mt(n))return n;var s,l=At(n);if(l){if(u=function(e){var t=e.length,n=e.constructor(t);t&&"string"==typeof e[0]&&fe.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(n),!r)return ot(n,u)}else{var c=ct(n),f=c==b||c==_;if(Et(n))return function(e,t){if(t)return e.slice();t=new e.constructor(e.length);return e.copy(t),t}(n,r);if(c==A||c==y||f&&!t){if(ne(n))return t?n:{};if(u="function"!=typeof(s=f?{}:n).constructor||yt(s)?{}:function(e){return Mt(e)?be(e):{}}(he(s)),!r)return f=e=n,s=(s=u)&&it(f,Ct(f),s),it(e,lt(e),s)}else{if(!z[c])return t?n:{};u=function(e,t,n,r){var o=e.constructor;switch(t){case T:return rt(e);case d:case h:return new o(+e);case M:return function(e,t){t=t?rt(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}(e,r);case B:case N:case S:case F:case L:case P:case R:case I:case $:return function(e,t){t=t?rt(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}(e,r);case w:return function(e,t,n){return te(t?n(re(e),!0):re(e),Y,new e.constructor)}(e,r,n);case j:case E:return new o(e);case k:return function(e){var t=new e.constructor(e.source,C.exec(e));return t.lastIndex=e.lastIndex,t}(e);case O:return function(e,t,n){return te(t?n(ie(e),!0):ie(e),Z,new e.constructor)}(e,r,n);case x:return function(e){return Be?Object(Be.call(e)):{}}(e)}}(n,c,Ue,r)}}var p,c=(a=a||new Ie).get(n);return c||(a.set(n,u),ee((p=!l?o?function(e,t,n){t=t(e);return At(e)?t:function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}(t,n(e))}(n,Ct,lt):Ct(n):p)||n,function(e,t){p&&(e=n[t=e]),De(u,t,Ue(e,r,o,i,t,n,a))}),u)}Fe.prototype.clear=function(){this.__data__=Ae?Ae(null):{}},Fe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Fe.prototype.get=function(e){var t=this.__data__;if(Ae){var n=t[e];return n===r?m:n}return fe.call(t,e)?t[e]:m},Fe.prototype.has=function(e){var t=this.__data__;return Ae?t[e]!==m:fe.call(t,e)},Fe.prototype.set=function(e,t){return this.__data__[e]=Ae&&t===m?r:t,this},Le.prototype.clear=function(){this.__data__=[]},Le.prototype.delete=function(e){var t=this.__data__;return!((e=Ge(t,e))<0)&&(e==t.length-1?t.pop():ve.call(t,e,1),!0)},Le.prototype.get=function(e){var t=this.__data__;return(e=Ge(t,e))<0?m:t[e][1]},Le.prototype.has=function(e){return-1<Ge(this.__data__,e)},Le.prototype.set=function(e,t){var n=this.__data__,r=Ge(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},Pe.prototype.clear=function(){this.__data__={hash:new Fe,map:new(je||Le),string:new Fe}},Pe.prototype.delete=function(e){return ut(this,e).delete(e)},Pe.prototype.get=function(e){return ut(this,e).get(e)},Pe.prototype.has=function(e){return ut(this,e).has(e)},Pe.prototype.set=function(e,t){return ut(this,e).set(e,t),this},Re.prototype.add=Re.prototype.push=function(e){return this.__data__.set(e,r),this},Re.prototype.has=function(e){return this.__data__.has(e)},Ie.prototype.clear=function(){this.__data__=new Le},Ie.prototype.delete=function(e){return this.__data__.delete(e)},Ie.prototype.get=function(e){return this.__data__.get(e)},Ie.prototype.has=function(e){return this.__data__.has(e)},Ie.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Le){var r=n.__data__;if(!je||r.length<199)return r.push([e,t]),this;n=this.__data__=new Pe(r)}return n.set(e,t),this};var ze,We,qe,Ve=(ze=function(e,t){return e&&Xe(e,t,Ct)},function(e,t){if(null==e)return e;if(!kt(e))return ze(e,t);for(var n=e.length,r=We?n:-1,o=Object(e);(We?r--:++r<n)&&!1!==t(o[r],r,o););return e}),Xe=function(e,t,n){for(var r=-1,o=Object(e),i=n(e),a=i.length;a--;){var u=i[qe?a:++r];if(!1===t(o[u],u,o))break}return e};function He(e,t){for(var n=0,r=(t=pt(t,e)?[t]:nt(t)).length;null!=e&&n<r;)e=e[bt(t[n++])];return n&&n==r?e:m}function Je(e,t){return null!=e&&t in Object(e)}function Ke(e,t,n,r,o){return e===t||(null==e||null==t||!Mt(e)&&!Bt(t)?e!=e&&t!=t:function(e,t,n,r,o,i){var a=At(e),u=At(t),s=f,l=f;a||(s=(s=ct(e))==y?A:s);u||(l=(l=ct(t))==y?A:l);var c=s==A&&!ne(e),u=l==A&&!ne(t),l=s==l;if(l&&!c)return i=i||new Ie,a||Lt(e)?at(e,t,n,r,o,i):function(e,t,n,r,o,i,a){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case T:return e.byteLength==t.byteLength&&r(new ge(e),new ge(t))?!0:!1;case d:case h:case j:return wt(+e,+t);case p:return e.name==t.name&&e.message==t.message;case k:case E:return e==t+"";case w:var u=re;case O:var s=i&v;if(u=u||ie,e.size!=t.size&&!s)return!1;s=a.get(e);if(s)return s==t;i|=g,a.set(e,t);u=at(u(e),u(t),r,o,i,a);return a.delete(e),u;case x:if(Be)return Be.call(e)==Be.call(t)}return!1}(e,t,s,n,r,o,i);if(!(o&v)){c=c&&fe.call(e,"__wrapped__"),u=u&&fe.call(t,"__wrapped__");if(c||u){c=c?e.value():e,u=u?t.value():t;return i=i||new Ie,n(c,u,r,o,i)}}return l&&(i=i||new Ie,function(e,t,n,r,o,i){var a=o&v,u=Ct(e),s=u.length,l=Ct(t).length;if(s!=l&&!a)return!1;var c=s;for(;c--;){var f=u[c];if(!(a?f in t:fe.call(t,f)))return!1}var p=i.get(e);if(p&&i.get(t))return p==t;var y=!0;i.set(e,t),i.set(t,e);var d=a;for(;++c<s;){f=u[c];var g,h=e[f],b=t[f];if(!((g=r?a?r(b,h,f,t,e,i):r(h,b,f,e,t,i):g)===m?h===b||n(h,b,r,o,i):g)){y=!1;break}d=d||"constructor"==f}y&&!d&&(l=e.constructor,p=t.constructor,l!=p&&"constructor"in e&&"constructor"in t&&!("function"==typeof l&&l instanceof l&&"function"==typeof p&&p instanceof p)&&(y=!1));return i.delete(e),i.delete(t),y}(e,t,n,r,o,i))}(e,t,Ke,n,r,o))}function Qe(e){var t;return Mt(e)&&(t=e,!(le&&le in t))&&(xt(e)||ne(e)?de:D).test(mt(e))}function Ye(e){return"function"==typeof e?e:null==e?Ut:"object"==typeof e?At(e)?function(n,r){if(pt(n)&&dt(r))return gt(bt(n),r);return function(e){var t=It(e,n);return t===m&&t===r?$t(e,n):Ke(r,t,m,g|v)}}(e[0],e[1]):function(t){var n=function(e){var t=Ct(e),n=t.length;for(;n--;){var r=t[n],o=e[r];t[n]=[r,o,dt(o)]}return t}(t);if(1==n.length&&n[0][2])return gt(n[0][0],n[0][1]);return function(e){return e===t||function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var u=n[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){var s=(u=n[o])[0],l=e[s],c=u[1];if(a&&u[2]){if(l===m&&!(s in e))return!1}else{var f,p=new Ie;if(!((f=r?r(l,c,s,e,t,p):f)===m?Ke(c,l,r,g|v,p):f))return!1}}return!0}(e,t,n)}}(e):Wt(e)}function Ze(e){if(!Mt(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t,n=yt(e),r=[];for(t in e)("constructor"!=t||!n&&fe.call(e,t))&&r.push(t);return r}function et(p,y,d,g,h){var b;p!==y&&ee((b=!At(y)&&!Lt(y)?Ze(y):b)||y,function(e,t){var n,r,o,i,a,u,s,l,c,f;Mt(e=b?y[t=e]:e)?(h=h||new Ie,r=y,i=d,a=et,u=g,s=h,l=(n=p)[o=t],c=r[o],(f=s.get(c))?Ce(n,o,f):(f=u?u(l,c,o+"",n,r,s):m,(r=f===m)&&(At(f=c)||Lt(c)?f=At(l)?l:Ot(l)?ot(l):Ue(c,!(r=!1)):Nt(c)||jt(c)?f=jt(l)?Pt(l):!Mt(l)||i&&xt(l)?Ue(c,!(r=!1)):l:r=!1),r&&(s.set(c,f),a(f,c,i,u,s),s.delete(c)),Ce(n,o,f))):(f=g?g(p[t],e,t+"",p,y,h):m,Ce(p,t,f=f===m?e:f))})}function tt(i,a){return a=we(a===m?i.length-1:a,0),function(){for(var e=arguments,t=-1,n=we(e.length-a,0),r=Array(n);++t<n;)r[t]=e[a+t];for(var t=-1,o=Array(a+1);++t<a;)o[t]=e[t];return o[a]=r,function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(i,this,o)}}function nt(e){return At(e)?e:ht(e)}function rt(e){var t=new e.constructor(e.byteLength);return new ge(t).set(new ge(e)),t}function ot(e,t){var n=-1,r=e.length;for(t=t||Array(r);++n<r;)t[n]=e[n];return t}function it(e,t,n,r){n=n||{};for(var o=-1,i=t.length;++o<i;){var a=t[o],u=r?r(n[a],e[a],a,n,e):m;De(n,a,u===m?e[a]:u)}return n}function at(e,t,n,r,o,i){var a=o&v,u=e.length,s=t.length;if(u!=s&&!(a&&u<s))return!1;s=i.get(e);if(s&&i.get(t))return s==t;var l=-1,c=!0,f=o&g?new Re:m;for(i.set(e,t),i.set(t,e);++l<u;){var p,y=e[l],d=t[l];if((p=r?a?r(d,y,l,t,e,i):r(y,d,l,e,t,i):p)!==m){if(p)continue;c=!1;break}if(f){if(!function(e,t){for(var n=-1,r=e?e.length:0;++n<r;)if(t(e[n],n,e))return 1}(t,function(e,t){return!f.has(t)&&(y===e||n(y,e,r,o,i))&&f.add(t)})){c=!1;break}}else if(y!==d&&!n(y,d,r,o,i)){c=!1;break}}return i.delete(e),i.delete(t),c}function ut(e,t){var n,r=e.__data__;return("string"==(e=typeof(n=t))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map}function st(e,t){t=t,t=null==(e=e)?m:e[t];return Qe(t)?t:m}var lt=e?oe(e,Object):qt,ct=function(e){return ye.call(e)};function ft(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||G.test(e))&&-1<e&&e%1==0&&e<t}function pt(e,t){if(!At(e)){var n=typeof e;return"number"==n||"symbol"==n||"boolean"==n||null==e||St(e)||(s.test(e)||!u.test(e)||null!=t&&e in Object(t))}}function yt(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||se)}function dt(e){return e==e&&!Mt(e)}function gt(t,n){return function(e){return null!=e&&(e[t]===n&&(n!==m||t in Object(e)))}}(H&&ct(new H(new ArrayBuffer(1)))!=M||je&&ct(new je)!=w||ae&&ct(ae.resolve())!=i||K&&ct(new K)!=O||q&&ct(new q)!=a)&&(ct=function(e){var t=ye.call(e),e=t==A?e.constructor:m,e=e?mt(e):m;if(e)switch(e){case Oe:return M;case Ee:return w;case xe:return i;case Te:return O;case Me:return a}return t});var ht=_t(function(e){e=Rt(e);var o=[];return t.test(e)&&o.push(""),e.replace(l,function(e,t,n,r){o.push(n?r.replace(c,"$1"):t||e)}),o});function bt(e){if("string"==typeof e||St(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function mt(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function vt(e,t){return(At(e)?ee:Ve)(e,function(e,t){var n=(n=Se.iteratee||zt)===zt?Ye:n;return arguments.length?n(e,t):n}(t,3))}function _t(r,o){if("function"!=typeof r||o&&"function"!=typeof o)throw new TypeError("Expected a function");function i(){var e=arguments,t=o?o.apply(this,e):e[0],n=i.cache;return n.has(t)?n.get(t):(e=r.apply(this,e),i.cache=n.set(t,e),e)}return i.cache=new(_t.Cache||Pe),i}function wt(e,t){return e===t||e!=e&&t!=t}function jt(e){return Ot(e)&&fe.call(e,"callee")&&(!me.call(e,"callee")||ye.call(e)==y)}_t.Cache=Pe;var At=Array.isArray;function kt(e){return null!=e&&Tt(e.length)&&!xt(e)}function Ot(e){return Bt(e)&&kt(e)}var Et=ue||Vt;function xt(e){e=Mt(e)?ye.call(e):"";return e==b||e==_}function Tt(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=o}function Mt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Bt(e){return!!e&&"object"==typeof e}function Nt(e){if(!Bt(e)||ye.call(e)!=A||ne(e))return!1;e=he(e);if(null===e)return!0;e=fe.call(e,"constructor")&&e.constructor;return"function"==typeof e&&e instanceof e&&ce.call(e)==pe}function St(e){return"symbol"==typeof e||Bt(e)&&ye.call(e)==x}var Ft,Lt=Q?(Ft=Q,function(e){return Ft(e)}):function(e){return Bt(e)&&Tt(e.length)&&!!U[ye.call(e)]};function Pt(e){return it(e,Dt(e))}function Rt(e){return null==e?"":function(e){if("string"==typeof e)return e;if(St(e))return Ne?Ne.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}(e)}function It(e,t,n){t=null==e?m:He(e,t);return t===m?n:t}function $t(e,t){return null!=e&&function(e,t,n){for(var r,o=-1,i=(t=pt(t,e)?[t]:nt(t)).length;++o<i;){var a=bt(t[o]);if(!(r=null!=e&&n(e,a)))break;e=e[a]}return r||!!(i=e?e.length:0)&&Tt(i)&&ft(a,i)&&(At(e)||jt(e))}(e,t,Je)}function Ct(e){return(kt(e)?$e:function(e){if(!yt(e))return _e(e);var t,n=[];for(t in Object(e))fe.call(e,t)&&"constructor"!=t&&n.push(t);return n})(e)}function Dt(e){return kt(e)?$e(e,!0):Ze(e)}var Gt,Q=(Gt=function(e,t,n){et(e,t,n)},tt(function(e,t){var n=-1,r=t.length,o=1<r?t[r-1]:m,i=2<r?t[2]:m,o=3<Gt.length&&"function"==typeof o?(r--,o):m;for(i&&function(e,t,n){if(!Mt(n))return!1;var r=typeof t;if("number"==r?kt(n)&&ft(t,n.length):"string"==r&&t in n)return wt(n[t],e);return!1}(t[0],t[1],i)&&(o=r<3?m:o,r=1),e=Object(e);++n<r;){var a=t[n];a&&Gt(e,a,n,o)}return e}));function Ut(e){return e}function zt(e){return Ye("function"==typeof e?e:Ue(e,!0))}function Wt(e){return pt(e)?(n=bt(e),function(e){return null==e?m:e[n]}):(t=e,function(e){return He(e,t)});var t,n}function qt(){return[]}function Vt(){return!1}Se.compact=function(e){for(var t=-1,n=e?e.length:0,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o},Se.iteratee=zt,Se.keys=Ct,Se.keysIn=Dt,Se.memoize=_t,Se.merge=Q,Se.property=Wt,Se.toPlainObject=Pt,Se.clone=function(e){return Ue(e,!1,!0)},Se.eq=wt,Se.forEach=vt,Se.get=It,Se.hasIn=$t,Se.identity=Ut,Se.isArguments=jt,Se.isArray=At,Se.isArrayLike=kt,Se.isArrayLikeObject=Ot,Se.isBuffer=Et,Se.isEmpty=function(e){if(kt(e)&&(At(e)||"string"==typeof e||"function"==typeof e.splice||Et(e)||jt(e)))return!e.length;var t,n=ct(e);if(n==w||n==O)return!e.size;if(ke||yt(e))return!_e(e).length;for(t in e)if(fe.call(e,t))return!1;return!0},Se.isFunction=xt,Se.isLength=Tt,Se.isObject=Mt,Se.isObjectLike=Bt,Se.isPlainObject=Nt,Se.isSymbol=St,Se.isTypedArray=Lt,Se.stubArray=qt,Se.stubFalse=Vt,Se.toString=Rt,Se.each=vt,Se.VERSION="4.15.0",X&&((X.exports=Se)._=Se,V._=Se)}.call(this)}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,n){function i(e,t){if(0!==e.length){r(e[0],t);for(var n=1;n<e.length;n++)r(e[n],!t)}}function r(e,t){for(var n=0,r=0,o=0,i=e.length,a=i-1;o<i;a=o++){var u=(e[o][0]-e[a][0])*(e[a][1]+e[o][1]),s=n+u;r+=Math.abs(n)>=Math.abs(u)?n-s+u:u-s+n,n=s}0<=n+r!=!!t&&e.reverse()}t.exports=function e(t,n){var r,o=t&&t.type;if("FeatureCollection"===o)for(r=0;r<t.features.length;r++)e(t.features[r],n);else if("GeometryCollection"===o)for(r=0;r<t.geometries.length;r++)e(t.geometries[r],n);else if("Feature"===o)e(t.geometry,n);else if("Polygon"===o)i(t.coordinates,n);else if("MultiPolygon"===o)for(r=0;r<t.coordinates.length;r++)i(t.coordinates[r],n);return t}},{}],4:[function(e,t,n){t.exports=e("./polygon-features.json")},{"./polygon-features.json":5}],5:[function(e,t,n){t.exports=[{key:"building",polygon:"all"},{key:"highway",polygon:"whitelist",values:["services","rest_area","escape","elevator"]},{key:"natural",polygon:"blacklist",values:["coastline","cliff","ridge","arete","tree_row"]},{key:"landuse",polygon:"all"},{key:"waterway",polygon:"whitelist",values:["riverbank","dock","boatyard","dam"]},{key:"amenity",polygon:"all"},{key:"leisure",polygon:"all"},{key:"barrier",polygon:"whitelist",values:["city_wall","ditch","hedge","retaining_wall","wall","spikes"]},{key:"railway",polygon:"whitelist",values:["station","turntable","roundhouse","platform"]},{key:"area",polygon:"all"},{key:"boundary",polygon:"all"},{key:"man_made",polygon:"blacklist",values:["cutline","embankment","pipeline"]},{key:"power",polygon:"whitelist",values:["plant","substation","generator","transformer"]},{key:"place",polygon:"all"},{key:"shop",polygon:"all"},{key:"aeroway",polygon:"blacklist",values:["taxiway"]},{key:"tourism",polygon:"all"},{key:"historic",polygon:"all"},{key:"public_transport",polygon:"all"},{key:"office",polygon:"all"},{key:"building:part",polygon:"all"},{key:"military",polygon:"all"},{key:"ruins",polygon:"all"},{key:"area:highway",polygon:"all"},{key:"craft",polygon:"all"},{key:"golf",polygon:"all"},{key:"indoor",polygon:"all"}]},{}]},{},[1])(1)});