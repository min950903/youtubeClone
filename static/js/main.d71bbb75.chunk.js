(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{2:function(e,t,a){e.exports={container:"videoItem_container__33C3Y",list:"videoItem_list__1nXuU",grid:"videoItem_grid__PyRWG",video:"videoItem_video__2kWKN",thumbnail:"videoItem_thumbnail__3OWI4",title:"videoItem_title__17kXc",channelTitle:"videoItem_channelTitle__1TG1M"}},21:function(e,t,a){e.exports={videos:"videoList_videos__n_5h6"}},22:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},3:function(e,t,a){e.exports={header:"header_header__1hUBH",logo:"header_logo__3xRdy",img:"header_img__m-XuP",logoText:"header_logoText__1XOiN",input:"header_input__2LNMV"}},46:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsSAAALEgHS3X78AAAEU0lEQVRYw+2W31MbVRTHd0nHjtoXxxn/gD5YWgIUgkgh0pLw+0eh/GipAi2UAjL8CC0hdGiI1lIIKaGU+uaMT+10cBzfdcTxxadKggjhV4AmARJotaMzNGTDHs+9uxuB6UZ0fMyZ+cz3ezf3nD333p3sMkwkIhEJmdgYiGY2zMcEj0rHlN0+et/1vfOkOj7RHyh8d06EbuzrP47J0QoR9l8i5YUWIfmwsf5JAlXv7Vj2/9pNX18MreW9FR9+4uqNFGkXaMKm9egR7LwOuY88RL46IGTuKMndHDr6pribtOZaT3L4JqSVez+Le9vbp5zYHo4DwpY1FraGRIi3KmV5OayE7XtKCIwoARfzBHfgrd0Lk401YxLhkOgNQXMKoPqRwFqvittFYL1X5Ue2EY5iStxPAPEHLcmAx3qNHq8p4ZB0xK8Mj17NeLrUUdR3qb/8w3gGUAMIUV7QNH69Ww0vbp6G326mg8eQtrNqSAui8qiwakjlKd2pgAT+NKUT/YIecfepKPTyDbjaMpEsVvBZj3/vzAW8xiE8Aq72zB1vRxaqdtndkVHn0mnHn3fmwOb1bEAfRHi3Tks8L6DhXhiywa3TPKI1dVoWvXwDKw1FzEpjESv6sWct5wDHHMKvNBaiLwxutpQQ/U7KedqcV7rSVPDkWWsJuD7GOU0FPCIp97ytmPjHtGZTPotevgHnpQpm6VIFK/qxjfoPAcccAiJBb30lLF0uH8eHNMqj/yCUu3ylpHLpctnL5dpy/L2MX6otA4TbbKgkShtAZRH5BhYu1BBY0Y95q64AKrdwoRooldXB1apaouP2hAF2tqA5SsqdL6/NWays2nJerIbFi1U8QpTz1dSifkQbwDGLXr6BueIGAiv6sdXyFpgraeAQHiE+6ClvRr36bSjnbGMGXv/eXdEEi6VXYf5cPY9Iyq2db4b50nraAI5Z9PINOHLaGUduG23Akdv+yF2oBxxzCI8Qv+PM7yC64MjWFaN+7SzQgavoGjjyWncQfjavlXiekt/Cec5eh9n8loekJiqL1+QbmM7oYn493a2g/ozhgTvTBKgBBLWLx98B4R0aAyxqb8BKVg8dI9x0hh5VD9MaVAHiA54cI9FRWlOjV8xoO8P/E06dMtEGplJMNU/VZsCxH+GQHYFeiSASmEpFvwejRHAqzeh3pd8B1DpaM82oCHvz2aImBh8u6ieTbr9mT+j/0f3e5zCXaIWZRAtMhxj8G9V+zDCDOptkAc/7ozCp6puYTL71Bq2p6mPweZFvALefqi3OQp+DieiRI7YYaw/yA7KAeMIz5LEpKU7kJ1vs3UHUd0gte7yZlY45bPyS/ClV+8mBPS+OieP3DiOvC4wIREvcp/x8TOTdB4e/YSCUa0/sZ4Xj7f3nd7f9pJmxKe8KOxFrYXEVCmfN+f/0HWCPH1QgrLireLz9B0+2nRgOqS2GYGUmUA8CmSsh1CC51sh3biQi8cr4C42RbWBQXJUhAAAAAElFTkSuQmCC"},5:function(e,t,a){e.exports={app:"app_app__1kV47",container:"app_container__3ohym",detail:"app_detail__2pbJw",videos:"app_videos__1sN8N"}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(19),r=a.n(c),l=(a(27),a(6)),o=a(9),s=a(4),p=a.n(s),u=a(8),m=a(20),d=a.n(m).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyB2exF5SMz3EHL7_cbzgCx0mXdlG_r09p0"}}),v=function(){var e=Object(u.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/videos",{params:{part:"snippet",chart:"mostPopular",maxResults:20,regionCode:"KR"}});case 3:return t=e.sent,e.abrupt("return",t.data.items);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=void 0!==t?t:"bts",e.next=4,d.get("/search",{params:{part:"snippet",maxResults:20,q:{query:a},type:"video"}});case 4:return n=e.sent,e.abrupt("return",n.data.items);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=a(5),f=a.n(h),b=a(7),_=a.n(b),g=function(e){var t=e.selectedVideo;return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("div",{className:_.a.detail},i.a.createElement("iframe",{className:_.a.videoPlayer,type:"text/html",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0,title:t.id}),i.a.createElement("h2",null,t.snippet.title),i.a.createElement("pre",{className:_.a.description},t.snippet.description)))},E=a(3),x=a.n(E),C=Object(n.memo)((function(e){var t=e.onClickHome,n=e.onSearch,c=e.inputRef;return i.a.createElement("form",{onSubmit:n,className:x.a.header},i.a.createElement("div",{className:x.a.logo},i.a.createElement("img",{src:a(46),className:x.a.img,onClick:t,alt:""}),i.a.createElement("h1",{className:x.a.logoText,onClick:t},"YOUTUBE")),i.a.createElement("input",{ref:c,placeholder:"\uac80\uc0c9",className:x.a.input,name:"search"}))})),j=a(2),N=a.n(j),k=Object(n.memo)((function(e){var t=e.video,a=e.onVideoClick,n="list"===e.display?N.a.list:N.a.grid;return i.a.createElement("li",{className:"".concat(N.a.container," ").concat(n),onClick:function(){a(t)}},i.a.createElement("div",{className:N.a.video},i.a.createElement("img",{className:N.a.thumbnail,src:t.snippet.thumbnails.medium.url,alt:"video thumbnail"}),i.a.createElement("div",null,i.a.createElement("p",{className:N.a.title},t.snippet.title),i.a.createElement("p",{className:N.a.channelTitle},t.snippet.channelTitle))))})),y=a(21),O=a.n(y),w=function(e){var t=e.videoList,a=e.onVideoClick,n=e.display;return i.a.createElement("ul",{className:O.a.videos},void 0!==t&&t.map((function(e){return i.a.createElement(k,{key:e.etag,video:e,onVideoClick:a,display:n})})))},I=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(),p=Object(o.a)(s,2),u=p[0],m=p[1],d=Object(n.useRef)(null),h=a(47),b=Object(n.useCallback)((function(e){return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{snippet:Object(l.a)(Object(l.a)({},e.snippet),{},{description:h(e.snippet.description),channelTitle:h(e.snippet.channelTitle)})})}))}),[h]);Object(n.useEffect)((function(){v().then((function(e){r(b(e))}))}),[b]);var _=Object(n.useCallback)((function(e){m(e)}),[]),E=Object(n.useCallback)((function(){m(null)}),[]),x=Object(n.useCallback)((function(e){e.preventDefault(),m(null);var t=d.current.value;A(t).then((function(e){r(b(e))})),d.current.value=""}),[b]);return i.a.createElement("div",{className:f.a.app},i.a.createElement(C,{onClickHome:E,onSearch:x,inputRef:d}),i.a.createElement("div",{className:f.a.container},u&&i.a.createElement("div",{className:f.a.detail},i.a.createElement(g,{selectedVideo:u})),i.a.createElement("div",{className:f.a.videos},i.a.createElement(w,{videoList:c,onVideoClick:_,display:u?"list":"grid"}))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={videoPlayer:"detail_videoPlayer__1pxe5",description:"detail_description__28eND"}}},[[22,1,2]]]);
//# sourceMappingURL=main.d71bbb75.chunk.js.map