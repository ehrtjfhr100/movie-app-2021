(this["webpackJsonpmovie-app-2021"]=this["webpackJsonpmovie-app-2021"]||[]).push([[0],{43:function(e,s,i){},45:function(e,s,i){},46:function(e,s,i){"use strict";i.r(s);var c=i(2),t=i.n(c),a=i(13),n=i.n(a),l=i(4),r=i.n(l),o=i(14),d=i(15),j=i(16),h=i(19),m=i(18),b=i(17),v=i.n(b),x=(i(43),i(0));var O=function(e){var s=e.year,i=e.rating,c=e.title,t=e.summary,a=e.poster,n=e.genres;return Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsxs)("div",{className:"upper",children:[Object(x.jsx)("div",{className:"movie__poster",children:Object(x.jsx)("img",{src:a,alt:c})}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsxs)("div",{className:"movie__title-year",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"movie__title",children:c})}),Object(x.jsx)("div",{children:Object(x.jsx)("h5",{className:"movie__year",children:s})})]}),Object(x.jsx)("ul",{className:"genres",children:n.map((function(e,s){return Object(x.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(x.jsx)("div",{className:"rating-div",children:Object(x.jsx)("span",{children:i})}),Object(x.jsx)("div",{className:"movie_summary-div",children:Object(x.jsxs)("span",{className:"movie__summary",children:[t.slice(0,140),"...",Object(x.jsxs)("svg",{className:"read-more",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#adadad",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("circle",{cx:"12",cy:"12",r:"1"}),Object(x.jsx)("circle",{cx:"19",cy:"12",r:"1"}),Object(x.jsx)("circle",{cx:"5",cy:"12",r:"1"})]})]})})]}),Object(x.jsx)("div",{className:"more",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#bbb5c1",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("circle",{cx:"12",cy:"12",r:"1"}),Object(x.jsx)("circle",{cx:"12",cy:"5",r:"1"}),Object(x.jsx)("circle",{cx:"12",cy:"19",r:"1"})]})})]}),Object(x.jsxs)("div",{className:"below",children:[Object(x.jsxs)("div",{className:"recommendation",children:[Object(x.jsxs)("span",{className:"friends",children:[Object(x.jsx)("img",{className:"friend-pf",alt:"friend",src:"https://asianwiki.com/images/b/bd/Jungkook_(BTS)-P1.jpg"}),Object(x.jsx)("img",{className:"friend-pf",alt:"friend",src:"https://upload.wikimedia.org/wikipedia/commons/0/0e/190417_V_at_the_Map_of_the_Soul_Persona_press_conference.jpg"}),Object(x.jsx)("img",{className:"friend-pf",alt:"friend",src:"https://www.thefamouspeople.com/profiles/images/j-hope-5.jpg"})]}),Object(x.jsx)("span",{children:"friend and others watching this"})]}),Object(x.jsx)("div",{className:"thums-up",children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#93ade9",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})})})]})]})},p=(i(45),i.p+"static/media/loader_img.3a31759b.svg"),g=function(e){Object(h.a)(i,e);var s=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,t=new Array(c),a=0;a<c;a++)t[a]=arguments[a];return(e=s.call.apply(s,[this].concat(t))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(r.a.mark((function s(){var i,c;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:i=s.sent,c=i.data.data.movies,e.setState({movies:c,isLoading:!1});case 5:case"end":return s.stop()}}),s)}))),e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,i=e.movies;return Object(x.jsx)("div",{className:"body",children:s?Object(x.jsx)("div",{className:"load-screen",children:Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("img",{className:"loader__img",alt:"loader__img",src:p})})}):Object(x.jsx)("div",{className:"background",children:Object(x.jsxs)("section",{className:"container",children:[Object(x.jsxs)("div",{className:"nav",children:[Object(x.jsxs)("div",{className:"nav-top",children:[Object(x.jsx)("div",{className:"word-mark-div",children:Object(x.jsxs)("div",{className:"word-mark",children:[Object(x.jsx)("span",{className:"wm watch",children:"Watch"}),Object(x.jsx)("span",{className:"wm movies",children:"Movies"})]})}),Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("div",{className:"profile-img-div",children:Object(x.jsx)("img",{className:"profile-img",alt:"profile",src:"https://hdwallpaper.move.pk/wp-content/uploads/2015/05/cute-baby-swimming.jpg"})}),Object(x.jsx)("div",{className:"id",children:"Mary Jane"})]})]}),Object(x.jsxs)("div",{className:"menu",children:[Object(x.jsxs)("div",{className:"main-tab",children:[Object(x.jsx)("span",{className:"main__txt",children:"Main"}),Object(x.jsxs)("ul",{className:"main-ul navul",children:[Object(x.jsxs)("li",{className:"main__li navli",children:[Object(x.jsxs)("svg",{className:"main svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 23 23",fill:"none",stroke:"#d2d6df",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("path",{d:"M1 12s4-8 11-8   11 8 11 8-4 8-11 8-11-8-11-8z"}),Object(x.jsx)("circle",{cx:"12",cy:"12",r:"3"})]}),"Discover"]}),Object(x.jsxs)("li",{className:"main__li navli",children:[Object(x.jsxs)("svg",{className:"main svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 23 23",fill:"none",stroke:"#d2d6df",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("path",{d:"M3 3v18h18"}),Object(x.jsx)("path",{d:"M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"})]}),"Trending"]}),Object(x.jsxs)("li",{className:"main__li navli",children:[Object(x.jsxs)("svg",{className:"main svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 23 23",fill:"none",stroke:"#d2d6df",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(x.jsx)("circle",{cx:"12",cy:"12",r:"10"}),Object(x.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"New Releases"]}),Object(x.jsxs)("li",{className:"main__li navli",children:[Object(x.jsx)("svg",{className:"main svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 23 23",fill:"none",stroke:"#d2d6df",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("path",{d:"M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"})}),"Activity"]})]})]}),Object(x.jsx)("div",{className:"line-div",children:Object(x.jsx)("div",{className:"line"})}),Object(x.jsxs)("div",{className:"labels-tab",children:[Object(x.jsx)("span",{className:"labels__txt",children:"Labels"}),Object(x.jsxs)("ul",{className:"labels-ul navul",children:[Object(x.jsxs)("li",{className:"labels__li navli",children:[Object(x.jsx)("svg",{className:"label svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#ffab57",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("circle",{cx:"12",cy:"12",r:"10"})}),"See with  Bobbie"]}),Object(x.jsxs)("li",{className:"labels__li navli",children:[Object(x.jsx)("svg",{className:"label svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#5cfffc",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("circle",{cx:"12",cy:"12",r:"10"})}),"Just for fun"]}),Object(x.jsxs)("li",{className:"labels__li navli",children:[Object(x.jsx)("svg",{className:"label svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#c5bfff",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("circle",{cx:"12",cy:"12",r:"10"})}),"Motivation"]})]})]})]})]}),Object(x.jsxs)("div",{className:"main-container",children:[Object(x.jsx)("div",{className:"movies",children:i.map((function(e){return Object(x.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating},e.id)}))}),Object(x.jsx)("div",{className:"nav-container",children:Object(x.jsxs)("div",{className:"search-filter",children:[Object(x.jsxs)("label",{className:"search-label",children:[Object(x.jsx)("svg",{className:"search svg-icon",xmlns:"http://www. w3.org/2000/svg",fill:"#bfc7df",viewBox:"0 0 23 23",children:Object(x.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})}),Object(x.jsx)("input",{className:"search-input",placeholder:"Search Movies"})]}),Object(x.jsxs)("label",{className:"filter-label",children:[Object(x.jsxs)("select",{name:"order-filter",dir:"rtl",defaultValue:"selected",className:"order-filter",children:[Object(x.jsx)("option",{value:"latest",children:"Latest"}),Object(x.jsx)("option",{value:"rating",children:"Rating"}),Object(x.jsx)("option",{value:"download_count",children:"Downloads"}),Object(x.jsx)("option",{value:"like_count",children:"Likes"})]}),Object(x.jsx)("svg",{className:"filter svg-icon",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#bfc7df",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:Object(x.jsx)("path",{d:"M6 9l6 6 6-6"})})]})]})})]})]})})})}}]),i}(t.a.Component);n.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1f8234a8.chunk.js.map