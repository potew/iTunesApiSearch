(this.webpackJsonpitunesearch=this.webpackJsonpitunesearch||[]).push([[0],{11:function(e,a,t){},18:function(e,a,t){e.exports=t(46)},23:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),i=(t(23),t(3)),o=t(9),m=t.n(o),s=t(16),u=t(8);function p(e){if(!e.ok)throw Error(e.statusText);return e}var h=function(e,a,t){return fetch("\n    https://itunes.apple.com/search?term=".concat(e,"&entity=").concat(a,"&limit=").concat(t)).then(p).then((function(e){return e.json()}))};var E=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"Carregando",src:"media/wloadinghourglass.gif",width:"100px"}),r.a.createElement("h3",null,"Carregamento"))},d=t(4),g=t(5),b=t(7),v=t(6),f=(t(11),function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={playing:!1,played:0,loaded:0},e.handlePlayState=function(){e.setState({playing:!e.state.playing})},e.handleProgress=function(a){return e.setState(a)},e}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props.item,a=e.artistName,t=e.artworkUrl100,n=e.collectionName,l=e.copyright,c=e.country,i=e.releaseDate,o=e.trackCount,m=e.collectionViewUrl,s=e.primaryGenreName;return r.a.createElement("div",{className:"album-card"},r.a.createElement("img",{className:"track-album-cover",alt:"Capa do \xe1lbum",src:t.replace("100x100","800x800"),width:"350px"}),r.a.createElement("div",{className:"track-info"},r.a.createElement("h2",null,n),r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"artist"},"\ud83c\udfa4")," ",a),r.a.createElement("h4",null,r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"site"},"\ud83c\udf10"))),r.a.createElement("h4",null,"Faixas: ",o," - Ano: ",i.slice(0,4)),r.a.createElement("h4",null,"G\xeanero: ",s," - Pa\xeds: ",c),r.a.createElement("h4",null,l)))}}]),t}(r.a.Component)),y=t(17),k=t.n(y),w=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={playing:!1,played:0,loaded:0},e.handlePlayState=function(){e.setState({playing:!e.state.playing})},e.handleProgress=function(a){return e.setState(a)},e}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props.item,a=e.artistName,t=e.artworkUrl100,n=e.collectionName,l=e.previewUrl,c=e.releaseDate,i=e.trackName,o=e.trackNumber,m=e.trackCount,s=e.trackViewUrl,u=e.primaryGenreName,p=this.state,h=p.playing,E=p.played;return r.a.createElement("div",{className:"track-card"},r.a.createElement("img",{className:"track-album-cover",alt:"Capa do \xe1lbum",src:t.replace("100x100","600x600"),width:"250px"}),r.a.createElement("div",{className:"track-info"},r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"artist"},"\ud83c\udfa4")," ",a),r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"name"},"\ud83c\udfb5")," ",i),r.a.createElement("h4",null,r.a.createElement("span",{onClick:this.handlePlayState,role:"img"},h?"\u23f9":"\u25b6"),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"site"},"\ud83c\udf10"))),r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"album"},"\ud83d\udcbf ",n)),r.a.createElement("h4",null,"Faixa ",o,"/",m," - Ano: ",c.slice(0,4)),r.a.createElement("h4",null,"G\xeanero: ",u),r.a.createElement("progress",{max:1,value:E}),r.a.createElement(k.a,{url:l,width:"0",height:"0",playing:h,onProgress:this.handleProgress})))}}]),t}(r.a.Component);var x=function(e){var a=e.items;switch(e.type){case"musicTrack":return a.map((function(e){return r.a.createElement(w,{key:e.trackID,item:e})}));case"album":return a.map((function(e){return r.a.createElement(f,{key:e.trackID,item:e})}));default:return r.a.createElement("div",null,"Exibindo ",a.length," resultados")}};t(45);var j=function(){var e=Object(n.useState)({name:"",category:"musicTrack",limit:33}),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),p=o[0],d=o[1],g=Object(n.useState)([]),b=Object(u.a)(g,2),v=b[0],f=b[1],y=function(){var e=Object(s.a)(m.a.mark((function e(){var a,n,r,l,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),a=t.name,n=t.category,r=t.limit,e.next=4,h(a,n,r);case 4:l=e.sent,c=l.results,f(c),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-bar"},r.a.createElement("header",null),r.a.createElement("div",{className:"search-panel"},r.a.createElement("label",{htmlFor:"searchbox"},"Termo"),r.a.createElement("input",{name:"searchBox",type:"text",placeholder:"Ex.: Oasis",onChange:function(e){return l(Object(i.a)(Object(i.a)({},t),{},{name:e.target.value}))}}),r.a.createElement("label",{htmlFor:"mediaType"},"Tipo de m\xeddia"),r.a.createElement("select",{name:"mediaType",onChange:function(e){return l(Object(i.a)(Object(i.a)({},t),{},{category:e.target.value}))}},r.a.createElement("option",{value:"musicTrack"},"Faixa"),r.a.createElement("option",{value:"musicArtist"},"Artista"),r.a.createElement("option",{value:"album"},"\xc1lbum"),r.a.createElement("option",{value:"musicVideo"},"Clipe"),r.a.createElement("option",{value:"mix"},"Remix")),r.a.createElement("label",{htmlFor:"resultCount"},"M\xe1x. resultados"),r.a.createElement("input",{name:"resultCount",type:"number",min:"9",max:"200",value:t.limit,onChange:function(e){return l(Object(i.a)(Object(i.a)({},t),{},{limit:e.target.value}))}}),r.a.createElement("button",{onClick:y},"Procurar")),r.a.createElement("div",{className:"results"},p?r.a.createElement(E,null):r.a.createElement(x,{items:v,type:t.category})))};var O=function(){return r.a.createElement("center",null,r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2aac9c1a.chunk.js.map