(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{183:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),l=t(199),s=t.n(l),o=t(203),i=t(200),u=t(198),m=t(208),p=t(184),d=t.n(p),h=[{title:c.a.createElement(c.a.Fragment,null),imageUrl:"",description:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"These are companion notes to my [",c.a.createElement("a",{href:"https://github.com/rsapkf/dotfiles/"},"dotfiles"),"] and [",c.a.createElement("a",{href:"https://github.com/rsapkf/42/"},"links"),"] where I keep short snippets of code, shell scripts, tricks and tips to remember stuff."))},{title:c.a.createElement(c.a.Fragment,null),imageUrl:"img/undraw_taking_notes.svg",description:c.a.createElement(c.a.Fragment,null)}];function b(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(m.a)(a);return c.a.createElement("div",{className:s()("col",d.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(u.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(o.a,{title:""+a.title,description:"@rsapkf\\'s notes."},c.a.createElement("header",{className:s()("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(i.a,{className:s()("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/")},"View Notes"),"\xa0\xa0",c.a.createElement("a",{className:s()("button button--outline button--secondary button--lg",d.a.getStarted),href:"https://github.com/rsapkf/notes/"},"GitHub")))),c.a.createElement("main",null,c.a.createElement("section",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}},c.a.createElement("blockquote",null,c.a.createElement("p",{style:{fontSize:"1.3rem"}},c.a.createElement("i",null,"I'm writing this down. This is good stuff.")),c.a.createElement("footer",null,"- George McFly, Back to the Future (1985), at precisely 1:03:59"))),h&&h.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},h.map((function(e,a){return c.a.createElement(b,Object(n.a)({key:a},e))})))))))}},204:function(e,a,t){"use strict";t(50),t(23),t(18),t(17),t(70);var n=t(0),r=t.n(n),c=t(199),l=t.n(c),s=t(198),o=t(201),i=t(202),u=t(126),m=t.n(u);a.a=function(e){var a,c,u=e.handleSearchBarToggle,p=e.isSearchBarExpanded,d=Object(n.useState)(!1),h=d[0],b=d[1],f=Object(n.useRef)(null),g=Object(s.a)().siteConfig,E=(void 0===g?{}:g).themeConfig.algolia,v=Object(o.b)(),k=Object(i.a)().navigateToSearchPage;var N=function(e){void 0===e&&(e=!0),h||Promise.all([Promise.all([t.e(4),t.e(63)]).then(t.t.bind(null,205,7)),t.e(44).then(t.t.bind(null,207,7))]).then((function(a){var t=a[0].default;b(!0),window.docsearch=t,function(e){window.docsearch({appId:E.appId,apiKey:E.apiKey,indexName:E.indexName,inputSelector:"#search_input_react",algoliaOptions:E.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:function(e,a,t){a.stopPropagation();var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;v.push(r)}}),e&&f.current.focus()}(e)}))},y=Object(n.useCallback)((function(){N(),h&&f.current.focus(),u(!p)}),[p]),w=Object(n.useCallback)((function(){u(!p)}),[p]),O=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;N(a)})),_=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||k(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:m.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()(m.a.searchIconButton,(a={},a[m.a.searchIconButtonHidden]=p,a)),onClick:y,onKeyDown:y,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",m.a.searchInput,(c={},c[m.a.searchInputExpanded]=p,c)),onMouseOver:O,onFocus:O,onBlur:w,onKeyDown:_,ref:f})))}}}]);