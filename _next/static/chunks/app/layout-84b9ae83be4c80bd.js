(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6942:function(e,t,n){Promise.resolve().then(n.t.bind(n,7477,23)),Promise.resolve().then(n.bind(n,1618)),Promise.resolve().then(n.bind(n,1939)),Promise.resolve().then(n.t.bind(n,4601,23)),Promise.resolve().then(n.t.bind(n,540,23))},1939:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9268),i=n(9497),s=n.n(i),a=n(5846),o=n.n(a);function l(e){let{navigationList:t}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("nav",{className:"hidden md:flex md:grow",children:(0,r.jsx)("ul",{className:"flex grow justify-end flex-wrap items-center",children:t.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:e.href,className:"font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out",children:e.title})},t))})})})}l.propTypes={navigationList:s().arrayOf(s().shape({title:s().string.isRequired,href:s().string.isRequired})).isRequired}},1618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(9268),i=n(6006),s=n(9497),a=n.n(s),o=n(5846),l=n.n(o);function c(){var e;let[t,n]=(0,i.useState)(!1),s=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{let{target:r}=e;a.current&&s.current&&(!t||a.current.contains(r)||s.current.contains(r)||n(!1))};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),(0,i.useEffect)(()=>{let e=e=>{let{keyCode:r}=e;t&&27===r&&n(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),(0,r.jsxs)("div",{className:"md:hidden",children:[(0,r.jsxs)("button",{ref:s,className:"hamburger ".concat(t&&"active"),"aria-controls":"mobile-nav","aria-expanded":t,onClick:()=>n(!t),children:[(0,r.jsx)("span",{className:"sr-only",children:"Menu"}),(0,r.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{y:"4",width:"24",height:"2",rx:"1"}),(0,r.jsx)("rect",{y:"11",width:"24",height:"2",rx:"1"}),(0,r.jsx)("rect",{y:"18",width:"24",height:"2",rx:"1"})]})]}),(0,r.jsx)("nav",{id:"mobile-nav",ref:a,className:"absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",style:t?{maxHeight:null===(e=a.current)||void 0===e?void 0:e.scrollHeight,opacity:1}:{maxHeight:0,opacity:.8},children:(0,r.jsxs)("ul",{className:"bg-gray-800 px-4 py-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/signin",className:"flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center",onClick:()=>n(!1),children:"Sign in"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/signup",className:"font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out",onClick:()=>n(!1),children:"Sign up"})})]})})]})}c.propTypes={navigationList:a().arrayOf(a().shape({title:a().string.isRequired,href:a().string.isRequired})).isRequired}},540:function(){},4601:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},7611:function(e,t,n){"use strict";var r=n(6054);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,a){if(a!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},9497:function(e,t,n){e.exports=n(7611)()},6054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[629,253,769,744],function(){return e(e.s=6942)}),_N_E=e.O()}]);