(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[6],{240:function(t,e,n){"use strict";var r=n(21),i=n(103);function o(t,e){return e&&"string"===typeof e?e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:null}),t):null}e.a=function(t){var e=t.prop,n=t.cssProperty,a=void 0===n?t.prop:n,c=t.themeKey,u=t.transform,s=function(t){if(null==t[e])return null;var n=t[e],s=o(t.theme,c)||{};return Object(i.b)(t,n,(function(t){var e;return"function"===typeof s?e=s(t):Array.isArray(s)?e=s[t]||t:(e=o(s,t)||t,u&&(e=u(e))),!1===a?e:Object(r.a)({},a,e)}))};return s.propTypes={},s.filterProps=[e],s}},241:function(t,e,n){"use strict";n(2);var r=n(75);e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=function(t){return e.reduce((function(e,n){var i=n(t);return i?Object(r.a)(e,i):e}),{})};return i.propTypes={},i.filterProps=e.reduce((function(t,e){return t.concat(e.filterProps)}),[]),i}},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return l}));var r=n(240),i=n(241);function o(t){return"number"!==typeof t?t:"".concat(t,"px solid")}var a=Object(r.a)({prop:"border",themeKey:"borders",transform:o}),c=Object(r.a)({prop:"borderTop",themeKey:"borders",transform:o}),u=Object(r.a)({prop:"borderRight",themeKey:"borders",transform:o}),s=Object(r.a)({prop:"borderBottom",themeKey:"borders",transform:o}),p=Object(r.a)({prop:"borderLeft",themeKey:"borders",transform:o}),d=Object(r.a)({prop:"borderColor",themeKey:"palette"}),l=Object(r.a)({prop:"borderRadius",themeKey:"shape"}),f=Object(i.a)(a,c,u,s,p,d,l);e.h=f},244:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"k",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return p})),n.d(e,"n",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return m})),n.d(e,"c",(function(){return b})),n.d(e,"l",(function(){return j})),n.d(e,"m",(function(){return g}));var r=n(240),i=n(241),o=Object(r.a)({prop:"flexBasis"}),a=Object(r.a)({prop:"flexDirection"}),c=Object(r.a)({prop:"flexWrap"}),u=Object(r.a)({prop:"justifyContent"}),s=Object(r.a)({prop:"alignItems"}),p=Object(r.a)({prop:"alignContent"}),d=Object(r.a)({prop:"order"}),l=Object(r.a)({prop:"flex"}),f=Object(r.a)({prop:"flexGrow"}),m=Object(r.a)({prop:"flexShrink"}),b=Object(r.a)({prop:"alignSelf"}),j=Object(r.a)({prop:"justifyItems"}),g=Object(r.a)({prop:"justifySelf"}),O=Object(i.a)(o,a,c,u,s,p,d,l,f,m,b,j,g);e.d=O},245:function(t,e,n){"use strict";n.d(e,"h",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"j",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"b",(function(){return j}));var r=n(240),i=n(241),o=Object(r.a)({prop:"gridGap"}),a=Object(r.a)({prop:"gridColumnGap"}),c=Object(r.a)({prop:"gridRowGap"}),u=Object(r.a)({prop:"gridColumn"}),s=Object(r.a)({prop:"gridRow"}),p=Object(r.a)({prop:"gridAutoFlow"}),d=Object(r.a)({prop:"gridAutoColumns"}),l=Object(r.a)({prop:"gridAutoRows"}),f=Object(r.a)({prop:"gridTemplateColumns"}),m=Object(r.a)({prop:"gridTemplateRows"}),b=Object(r.a)({prop:"gridTemplateAreas"}),j=Object(r.a)({prop:"gridArea"}),g=Object(i.a)(o,a,c,u,s,p,d,l,f,m,b,j);e.a=g},246:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return p}));var r=n(240),i=n(241),o=Object(r.a)({prop:"position"}),a=Object(r.a)({prop:"zIndex",themeKey:"zIndex"}),c=Object(r.a)({prop:"top"}),u=Object(r.a)({prop:"right"}),s=Object(r.a)({prop:"bottom"}),p=Object(r.a)({prop:"left"});e.b=Object(i.a)(o,a,c,u,s,p)},247:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(240),i=n(241),o=Object(r.a)({prop:"color",themeKey:"palette"}),a=Object(r.a)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),c=Object(i.a)(o,a);e.c=c},248:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return p})),n.d(e,"f",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(240),i=n(241);function o(t){return t<=1?"".concat(100*t,"%"):t}var a=Object(r.a)({prop:"width",transform:o}),c=Object(r.a)({prop:"maxWidth",transform:o}),u=Object(r.a)({prop:"minWidth",transform:o}),s=Object(r.a)({prop:"height",transform:o}),p=Object(r.a)({prop:"maxHeight",transform:o}),d=Object(r.a)({prop:"minHeight",transform:o}),l=Object(r.a)({prop:"size",cssProperty:"width",transform:o}),f=Object(r.a)({prop:"size",cssProperty:"height",transform:o}),m=Object(r.a)({prop:"boxSizing"}),b=Object(i.a)(a,c,u,s,p,d,m);e.b=b},249:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return p})),n.d(e,"h",(function(){return d}));var r=n(240),i=n(241),o=Object(r.a)({prop:"fontFamily",themeKey:"typography"}),a=Object(r.a)({prop:"fontSize",themeKey:"typography"}),c=Object(r.a)({prop:"fontStyle",themeKey:"typography"}),u=Object(r.a)({prop:"fontWeight",themeKey:"typography"}),s=Object(r.a)({prop:"letterSpacing"}),p=Object(r.a)({prop:"lineHeight"}),d=Object(r.a)({prop:"textAlign"}),l=Object(i.a)(o,a,c,u,s,p,d);e.a=l},255:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),i=(n(0),n(313)),o=n(221),a=n(276),c=n(215),u=n(73);function s(t){var e=t.children,n=t.action,o=t.title;return Object(r.jsxs)(i.a,{children:[o&&Object(r.jsx)(p,{title:o,action:n}),e]})}function p(t){var e=t.title,n=t.action,i=d();return Object(r.jsxs)(a.a,{container:!0,spacing:2,className:i.root,children:[Object(r.jsx)(a.a,{item:!0,xs:10,children:Object(r.jsx)(u.a,{className:i.title,variant:"h3",color:"textSecondary",children:e})}),n&&Object(r.jsx)(a.a,{item:!0,xs:2,className:i.endAlign,children:n}),Object(r.jsx)(a.a,{item:!0,xs:12,children:Object(r.jsx)(o.a,{})})]})}var d=Object(c.a)((function(t){return{root:{marginBottom:t.spacing(2)},title:{paddingBottom:t.spacing(1)},endAlign:{textAlign:"end"}}}))},256:function(t,e,n){"use strict";var r=n(46),i=n(2),o=(n(9),n(75));e.a=function(t){var e=function(e){var n=t(e);return e.css?Object(i.a)({},Object(o.a)(n,t(Object(i.a)({theme:e.theme},e.css))),function(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}(e.css,[t.filterProps])):n};return e.propTypes={},e.filterProps=["css"].concat(Object(r.a)(t.filterProps)),e}},257:function(t,e,n){"use strict";var r=n(240),i=n(241),o=Object(r.a)({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),a=Object(r.a)({prop:"display"}),c=Object(r.a)({prop:"overflow"}),u=Object(r.a)({prop:"textOverflow"}),s=Object(r.a)({prop:"visibility"}),p=Object(r.a)({prop:"whiteSpace"});e.a=Object(i.a)(o,a,c,u,s,p)},258:function(t,e,n){"use strict";var r=n(240),i=Object(r.a)({prop:"boxShadow",themeKey:"shadows"});e.a=i},275:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(2),i=n(6),o=n(0),a=n.n(o),c=n(7),u=(n(9),n(76)),s=n.n(u),p=n(137);function d(t,e){var n={};return Object.keys(t).forEach((function(r){-1===e.indexOf(r)&&(n[r]=t[r])})),n}function l(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.name,u=Object(i.a)(n,["name"]);var l,f=o,m="function"===typeof e?function(t){return{root:function(n){return e(Object(r.a)({theme:t},n))}}}:{root:e},b=Object(p.a)(m,Object(r.a)({Component:t,name:o||t.displayName,classNamePrefix:f},u));e.filterProps&&(l=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var j=a.a.forwardRef((function(e,n){var o=e.children,u=e.className,s=e.clone,p=e.component,f=Object(i.a)(e,["children","className","clone","component"]),m=b(e),j=Object(c.a)(m.root,u),g=f;if(l&&(g=d(g,l)),s)return a.a.cloneElement(o,Object(r.a)({className:Object(c.a)(o.props.className,j)},g));if("function"===typeof o)return o(Object(r.a)({className:j},g));var O=p||t;return a.a.createElement(O,Object(r.a)({ref:n,className:j},g),o)}));return s()(j,t),j}}},276:function(t,e,n){"use strict";var r=n(6),i=n(2),o=n(0),a=(n(9),n(7)),c=n(8),u=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=o.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,u=t.alignItems,s=void 0===u?"stretch":u,p=t.classes,d=t.className,l=t.component,f=void 0===l?"div":l,m=t.container,b=void 0!==m&&m,j=t.direction,g=void 0===j?"row":j,O=t.item,x=void 0!==O&&O,h=t.justify,v=void 0===h?"flex-start":h,y=t.lg,w=void 0!==y&&y,S=t.md,C=void 0!==S&&S,q=t.sm,K=void 0!==q&&q,P=t.spacing,W=void 0===P?0:P,A=t.wrap,N=void 0===A?"wrap":A,z=t.xl,k=void 0!==z&&z,E=t.xs,T=void 0!==E&&E,I=t.zeroMinWidth,H=void 0!==I&&I,B=Object(r.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(a.a)(p.root,d,b&&[p.container,0!==W&&p["spacing-xs-".concat(String(W))]],x&&p.item,H&&p.zeroMinWidth,"row"!==g&&p["direction-xs-".concat(String(g))],"wrap"!==N&&p["wrap-xs-".concat(String(N))],"stretch"!==s&&p["align-items-xs-".concat(String(s))],"stretch"!==c&&p["align-content-xs-".concat(String(c))],"flex-start"!==v&&p["justify-xs-".concat(String(v))],!1!==T&&p["grid-xs-".concat(String(T))],!1!==K&&p["grid-sm-".concat(String(K))],!1!==C&&p["grid-md-".concat(String(C))],!1!==w&&p["grid-lg-".concat(String(w))],!1!==k&&p["grid-xl-".concat(String(k))]);return o.createElement(f,Object(i.a)({className:D,ref:e},B))})),l=Object(c.a)((function(t){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return u.forEach((function(r){var i=t.spacing(r);0!==i&&(n["spacing-".concat(e,"-").concat(r)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var r={};s.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=l},313:function(t,e,n){"use strict";var r=n(256),i=n(241),o=n(243),a=n(257),c=n(244),u=n(245),s=n(246),p=n(247),d=n(258),l=n(248),f=n(186),m=n(249),b=n(2),j=n(275),g=n(53),O=function(t){var e=Object(j.a)(t);return function(t,n){return e(t,Object(b.a)({defaultTheme:g.a},n))}},x=Object(r.a)(Object(i.a)(o.h,a.a,c.d,u.a,s.b,p.c,d.a,l.b,f.b,m.a)),h=O("div")(x,{name:"MuiBox"});e.a=h},323:function(t,e,n){"use strict";n.r(e);var r=n(4),i=(n(0),n(73)),o=n(255);e.default=function(){return Object(r.jsxs)(o.a,{title:"About this project",children:[Object(r.jsx)(i.a,{variant:"h3",component:"h1",children:"About page"}),Object(r.jsx)(i.a,{variant:"body1",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(r.jsx)(i.a,{variant:"body1",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(r.jsx)(i.a,{variant:"body1",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(r.jsx)(i.a,{variant:"body1",paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(r.jsx)(i.a,{variant:"h1",component:"h1",children:"Heading1"}),Object(r.jsx)(i.a,{variant:"h2",component:"h2",children:"Heading2"}),Object(r.jsx)(i.a,{variant:"h3",component:"h3",children:"Heading3"}),Object(r.jsx)(i.a,{variant:"h4",component:"h4",children:"Heading4"}),Object(r.jsx)(i.a,{variant:"h5",component:"h5",children:"Heading5"}),Object(r.jsx)(i.a,{variant:"h6",component:"h6",children:"Heading6"})]})}}}]);
//# sourceMappingURL=6.5d27ccec.chunk.js.map