(this["webpackJsonpsupra-dollar-frontend"]=this["webpackJsonpsupra-dollar-frontend"]||[]).push([[8],{827:function(n,e,t){"use strict";t.d(e,"b",(function(){return b})),t.d(e,"d",(function(){return l})),t.d(e,"a",(function(){return d})),t.d(e,"f",(function(){return j})),t.d(e,"e",(function(){return f})),t.d(e,"h",(function(){return p})),t.d(e,"c",(function(){return x})),t.d(e,"i",(function(){return O})),t.d(e,"g",(function(){return h}));var r=t(13),c=t.n(r),a=t(23),o=t(14),i=t.n(o),u=t(845),s=t(42),b=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){var o,u,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=Object(s.e)(),u=new i.a(t).times(new i.a(10).pow(18)).toString(),b=new i.a(r).times(new i.a(10).pow(18)).toString(),n.abrupt("return",e.methods.buyBonds(o,u,b).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 4:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){var o,u,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=Object(s.e)(),u=new i.a(t).times(new i.a(10).pow(18)).toString(),b=new i.a(r).times(new i.a(10).pow(18)).toString(),n.abrupt("return",e.methods.redeemBonds(o,u,b).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 4:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.approve(t.options.address,u.ethers.constants.MaxUint256).send({from:r}));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),j=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit(t,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.stakeReward(t).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r,a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(t,new i.a(r).times(new i.a(10).pow(18)).toString()).send({from:a}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,c){return n.apply(this,arguments)}}(),x=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit(t,"0").send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),O=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),h=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.stake(new i.a(t).times(new i.a(10).pow(18)).toString()).send({from:r}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},828:function(n,e,t){"use strict";t.d(e,"c",(function(){return a})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i})),t.d(e,"d",(function(){return u}));var r=t(14),c=t.n(r),a=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=s(n,e-t);return(r/Math.pow(10,t)).toFixed(t)},o=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new c.a(n).dividedBy(new c.a(10).pow(e));return t.toNumber()},i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,t=new c.a(n).dividedBy(new c.a(10).pow(e));return t},u=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return n.dividedBy(new c.a(10).pow(e)).toFixed()};function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return n.dividedBy(new c.a(10).pow(e)).toNumber()}},829:function(n,e,t){"use strict";var r=t(1),c=t(236),a=/%(.*?)%/,o=function(n,e,t){var r=n.find((function(n){return n.data.stringId===e}));if(r){var c=r.data.text;return c.includes("%")?function(n,e){var t=a.exec(n)[0],r=e.split(" ")[0];return n.replace(t,r)}(c,t):c}return t};e.a=function(){var n=Object(r.useContext)(c.a).translations;return function(e,t){return"error"===n[0]?t:n.length>0?o(n,e,t):t}}},830:function(n,e,t){"use strict";var r=t(7);function c(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}var a=t(5).e.div(c());e.a=a},832:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r=t(7),c=t(0),a=t(1),o=t(5);function i(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return i=function(){return n},n}var u=o.e.div(i(),(function(n){return n.size}),(function(n){return n.size})),s=function(n){var e,t=n.size,r=void 0===t?"md":t,i=Object(a.useContext)(o.a).spacing;switch(r){case"lg":e=i[6];break;case"sm":e=i[2];break;case"md":default:e=i[4]}return Object(c.jsx)(u,{size:e})}},833:function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return b})),t.d(e,"c",(function(){return l}));var r=t(13),c=t.n(r),a=t(23),o=t(100),i=t.n(o),u=t(78),s=function(n,e){return new(new i.a(n).eth.Contract)(u,e)},b=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(r,t.options.address).call();case 3:return a=n.sent,n.abrupt("return",a);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return","0");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t,r){return n.apply(this,arguments)}}(),l=function(){var n=Object(a.a)(c.a.mark((function n(e,t,r){var a,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=s(e,t),n.prev=1,n.next=4,a.methods.balanceOf(r).call();case 4:return o=n.sent,n.abrupt("return",o);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return","0");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,t,r){return n.apply(this,arguments)}}()},835:function(n,e,t){"use strict";t.d(e,"a",(function(){return C}));var r=t(7),c=t(0),a=(t(1),t(5)),o=t(844),i=t(105),u=t(829),s=t(2),b=t(28);function l(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return l=function(){return n},n}function d(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return d=function(){return n},n}var j=a.e.div(d(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),f=a.e.input(l(),(function(n){return n.theme.colors.primary})),p=function(n){var e=n.endAdornment,t=n.onChange,r=n.startAdornment,a=Object(b.a)(n,["endAdornment","onChange","startAdornment"]);return Object(c.jsxs)(j,{children:[!!r&&r,Object(c.jsx)(f,Object(s.a)({onChange:t},a)),!!e&&e]})};function x(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return x=function(){return n},n}function O(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return O=function(){return n},n}function h(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  width: ","px;\n"]);return m=function(){return n},n}function v(){var n=Object(r.a)([""]);return v=function(){return n},n}var w=a.e.div(v()),g=a.e.div(m(),(function(n){return n.theme.spacing[3]})),k=a.e.div(h()),y=a.e.div(O(),(function(n){return n.theme.colors.primary})),S=a.e.span(x(),(function(n){return n.theme.colors.primary})),C=function(n){var e=n.max,t=n.symbol,r=n.onChange,a=n.onSelectMax,s=n.value,b=n.depositFeeBP,l=void 0===b?0:b,d=Object(u.a)();return Object(c.jsxs)(w,{children:[Object(c.jsxs)(y,{children:[e.toLocaleString()," ",t," ",d(526,"Available")]}),Object(c.jsx)(p,{endAdornment:Object(c.jsxs)(k,{children:[Object(c.jsx)(S,{children:t}),Object(c.jsx)(g,{}),Object(c.jsx)("div",{children:Object(c.jsx)(i.Button,{size:"sm",onClick:a,children:d(452,"Max")})})]}),onChange:r,placeholder:"0",value:s}),l>0?Object(c.jsxs)(y,{children:["Deposit Fee: ",new o.a(s||0).times(l/1e4).toString()," ",t]}):null]})}},837:function(n,e,t){"use strict";t.d(e,"a",(function(){return j}));var r=t(7),c=t(0),a=t(1),o=t.n(a),i=t(5),u=t(832);function s(){var n=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return s=function(){return n},n}function b(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return b=function(){return n},n}var l=i.e.div(b(),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),d=i.e.div(s()),j=function(n){var e=n.children,t=o.a.Children.toArray(e).length;return Object(c.jsx)(l,{children:o.a.Children.map(e,(function(n,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{children:n}),e<t-1&&Object(c.jsx)(u.a,{})]})}))})}},840:function(n,e,t){"use strict";var r=t(2),c=t(0),a=(t(1),t(105)),o=t(68),i=t(829);e.a=function(n){var e=Object(i.a)(),t=Object(o.m)(),u=t.connect,s=t.reset,b=Object(a.useWalletModal)(u,s).onPresentConnectModal;return Object(c.jsx)(a.Button,Object(r.a)(Object(r.a)({onClick:b},n),{},{children:e(292,"Unlock Wallet")}))}},842:function(n,e,t){"use strict";var r=t(0),c=t(13),a=t.n(c),o=t(23),i=t(17),u=t(1),s=t(105),b=t(837),l=t(835),d=t(828);e.a=function(n){var e=n.max,t=n.onConfirm,c=n.onDismiss,j=n.tokenName,f=void 0===j?"":j,p=n.depositFeeBP,x=void 0===p?0:p,O=Object(u.useState)(""),h=Object(i.a)(O,2),m=h[0],v=h[1],w=Object(u.useState)(!1),g=Object(i.a)(w,2),k=g[0],y=g[1],S=Object(u.useMemo)((function(){return Object(d.d)(e)}),[e]),C=Object(u.useCallback)((function(n){v(n.currentTarget.value)}),[v]),T=Object(u.useCallback)((function(){v(S)}),[S,v]);return Object(r.jsxs)(s.Modal,{title:"Deposit ".concat(f," Tokens"),onDismiss:c,children:[Object(r.jsx)(l.a,{value:m,onSelectMax:T,onChange:C,max:S,symbol:f,depositFeeBP:x}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(s.Button,{variant:"secondary",onClick:c,children:"Cancel"}),Object(r.jsx)(s.Button,{disabled:k,onClick:Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.next=3,t(m);case 3:y(!1),c();case 5:case"end":return n.stop()}}),n)}))),children:k?"Pending Confirmation":"Confirm"})]})]})}},843:function(n,e,t){"use strict";t.d(e,"b",(function(){return v})),t.d(e,"c",(function(){return w}));var r=t(17),c=t(13),a=t.n(c),o=t(23),i=t(1),u=t(68),s=t(90),b=t(22),l=t(827),d=t(14),j=t.n(d),f=t(833),p=t(139),x=t(80),O=t(240),h=function(){return Object(i.useContext)(O.a)},m=function(n,e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),a=c[0],o=c[1],s=Object(u.m)().account,b=h();return Object(i.useEffect)((function(){a||Object(f.a)(n,e,s).then((function(n){if(s){var e=new j.a(n);o(e&&e.isGreaterThan(0))}}))}),[s,e,n,b,a]),a},v=function(){var n=Object(u.m)().account,e=Object(x.b)(),t=Object(x.d)(b.b.SSO),r=m(t,e);return{onApprove:Object(i.useCallback)(Object(o.a)(a.a.mark((function r(){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.a)(t,e,n);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[n,t,e]),isApproved:r}},w=function(n){var e=Object(u.m)().account,t=Object(x.e)(),r=Object(x.d)(n),c=m(r,t);return{onApprove:Object(i.useCallback)(Object(o.a)(a.a.mark((function n(){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(l.a)(r,t,e);case 3:return c=n.sent,n.abrupt("return",c);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e,r,t]),isApproved:c}};e.a=function(n,e){var t=Object(s.b)(),r=Object(u.m)().account,c=Object(x.c)(n);return{onApprove:Object(i.useCallback)(Object(o.a)(a.a.mark((function n(){var o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(l.a)(e,c,r);case 3:return o=n.sent,t(Object(p.b)(r)),n.abrupt("return",o);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",!1);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[r,t,e,c])}}},846:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return j})),t.d(e,"c",(function(){return f}));var r=t(13),c=t.n(r),a=t(23),o=t(1),i=t(68),u=t(90),s=t(827),b=t(80),l=t(139),d=function(n){var e=n.contractPid,t=n.type,r=Object(u.b)(),d=Object(i.m)().account,j=Object(b.c)(t);return{onStake:Object(o.useCallback)(function(){var n=Object(a.a)(c.a.mark((function n(t){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(s.f)(j,e,t,d);case 2:r(Object(l.b)(d));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[d,r,j,e])}},j=function(){var n=Object(i.m)().account,e=Object(b.b)();return{onStake:Object(o.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.g)(e,r,n);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[n,e])}},f=function(){var n=Object(i.m)().account,e=Object(b.b)();return{onWithdraw:Object(o.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.i)(e,r,n);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[n,e])}}},847:function(n,e,t){"use strict";var r=t(0),c=t(13),a=t.n(c),o=t(23),i=t(17),u=t(1),s=t(105),b=t(837),l=t(835),d=t(829),j=t(828);e.a=function(n){var e=n.onConfirm,t=n.onDismiss,c=n.max,f=n.tokenName,p=void 0===f?"":f,x=Object(u.useState)(""),O=Object(i.a)(x,2),h=O[0],m=O[1],v=Object(u.useState)(!1),w=Object(i.a)(v,2),g=w[0],k=w[1],y=Object(d.a)(),S=Object(u.useMemo)((function(){return Object(j.d)(c)}),[c]),C=Object(u.useCallback)((function(n){m(n.currentTarget.value)}),[m]),T=Object(u.useCallback)((function(){m(S)}),[S,m]);return Object(r.jsxs)(s.Modal,{title:"Withdraw ".concat(p),onDismiss:t,children:[Object(r.jsx)(l.a,{onSelectMax:T,onChange:C,value:h,max:S,symbol:p}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)(s.Button,{variant:"secondary",onClick:t,children:y(462,"Cancel")}),Object(r.jsx)(s.Button,{disabled:g,onClick:Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.next=3,e(h);case 3:k(!1),t();case 5:case"end":return n.stop()}}),n)}))),children:g?y(488,"Pending Confirmation"):y(464,"Confirm")})]})]})}},873:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return gn}));var r=t(0),c=t(2),a=t(1),o=t(32),i=t(90),u=t(14),s=t.n(u),b=t(68),l=t(105),d=t(844);d.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new d.a(1);var j=new d.a(10512e3),f=t(830),p=t(234),x=t(123),O=t(144),h=t(22),m=t(17),v=t(7),w=t(5);function g(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"]);return g=function(){return n},n}var k=w.e.div(g(),(function(n){return n.theme.colors.primary})),y=function(n){var e=n.onClick,t=n.expanded;return Object(r.jsxs)(k,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return e()},children:[Object(r.jsx)(l.Text,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(r.jsx)(l.ChevronUpIcon,{}):Object(r.jsx)(l.ChevronDownIcon,{})]})};y.defaultProps={expanded:!1};var S=y,C=t(55);function T(){var n=Object(v.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"]);return T=function(){return n},n}function F(){var n=Object(v.a)(["\n  margin-top: 24px;\n"]);return F=function(){return n},n}var B=w.e.div(F()),A=Object(w.e)(l.LinkExternal)(T(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.primary})),H=function(n){return n===h.c.SPOOKY?"https://spookyswap.finance/":"https://swap.spiritswap.finance/#/"},D=function(n){return[function(n){var e=n.tokenSymbol,t=n.quoteTokenSymbol,r=n.isTokenOnly,c=n.swap,a=t===h.b.WFTM?"ETH":C.a[t][250];if(r)return"".concat(H(c),"swap?outputCurrency=").concat(a);var o=C.a[e][250];return"".concat(H(c),"add/").concat(a,"/").concat(o)}(n),n.isTokenOnly?"https://ftmscan.com/token/".concat(C.a[n.tokenSymbol][250]):"https://ftmscan.com/token/".concat(n.lpAddresses)]},P=function(n){var e=n.farm,t=D(e),c=Object(m.a)(t,2),a=c[0],o=c[1],i=e.userData,u=e.total,b=e.totalValue,d=e.isTokenOnly,j=b?"$".concat(Number(b).toLocaleString(void 0,{maximumFractionDigits:0})):"-",f=new s.a(null===i||void 0===i?void 0:i.stakedBalance).div(new s.a(10).pow(18)),p=d?new s.a(u):new s.a(u).div(new s.a(10).pow(18)),x=f.div(p),O="$".concat(Number(x.multipliedBy(b)).toLocaleString(void 0,{maximumFractionDigits:0}));return Object(r.jsxs)(B,{children:[Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{children:e.swap||h.c.SPIRIT}),Object(r.jsx)(A,{href:a,children:e.lpSymbol})]}),Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{children:"Your Liquidity:"}),Object(r.jsx)(l.Text,{children:O})]}),Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{children:"Your Share:"}),Object(r.jsxs)(l.Text,{children:[x.times(100).toFixed(4),"%"]})]}),Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{children:"Total Liquidity:"}),Object(r.jsx)(l.Text,{children:j})]}),Object(r.jsx)(l.Flex,{justifyContent:"flex-start",children:Object(r.jsx)(l.Link,{external:!0,href:o,bold:!1,children:"View on FtmScan"})})]})};function L(){var n=Object(v.a)(["\n  margin-left: 4px;\n"]);return L=function(){return n},n}function M(){var n=Object(v.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);return M=function(){return n},n}var I=Object(w.e)(l.Flex)(M()),z=Object(w.e)(l.Tag)(L()),E=function(n){var e=n.lpLabel,t=n.multiplier;return Object(r.jsxs)(I,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(r.jsx)(l.Heading,{mb:"4px",children:e}),Object(r.jsx)(l.Flex,{justifyContent:"center",children:Object(r.jsx)(z,{variant:"secondary",children:t||"???"})})]})},N=t(13),R=t.n(N),W=t(23),U=t(833),q=t(840),Y=t(843),V=t(841),G=t(846),J=t(827),$=t(139),_=t(80),K=function(n){var e=n.contractPid,t=n.type,r=Object(i.b)(),c=Object(b.m)().account,o=Object(_.c)(t);return{onUnstake:Object(a.useCallback)(function(){var n=Object(W.a)(R.a.mark((function n(t){var a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.h)(o,e,t,c);case 2:a=n.sent,r(Object($.b)(c)),console.info(a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[c,r,o,e])}},X=t(828),Q=t(842),Z=t(847);function nn(){var n=Object(v.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);return nn=function(){return n},n}var en=w.e.div(nn()),tn=function(n){var e=n.stakedBalance,t=n.tokenBalance,c=n.farm,a=Object(G.a)(c).onStake,o=K(c).onUnstake,i=Object(X.b)(e),u=i.toLocaleString(),s=Object(l.useModal)(Object(r.jsx)(Q.a,{max:t,onConfirm:a,tokenName:c.lpSymbol,depositFeeBP:c.depositFeeBP})),b=Object(m.a)(s,1)[0],d=Object(l.useModal)(Object(r.jsx)(Z.a,{max:e,onConfirm:o,tokenName:c.lpSymbol})),j=Object(m.a)(d,1)[0];return Object(r.jsxs)(l.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(l.Heading,{color:0===i?"textDisabled":"text",children:u}),0===i?Object(r.jsx)(l.Button,{onClick:b,children:"Stake"}):Object(r.jsxs)(en,{children:[Object(r.jsx)(l.IconButton,{variant:"tertiary",onClick:j,mr:"6px",children:Object(r.jsx)(l.MinusIcon,{color:"primary"})}),c.type===h.a.SHARE&&Object(r.jsx)(l.IconButton,{variant:"tertiary",onClick:b,children:Object(r.jsx)(l.AddIcon,{color:"primary"})})]})]})},rn=function(n){var e=n.contractPid,t=n.type,r=Object(i.b)(),c=Object(b.m)().account,o=Object(_.c)(t);return{onReward:Object(a.useCallback)(Object(W.a)(R.a.mark((function n(){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(J.c)(o,e,c);case 2:return t=n.sent,r(Object($.b)(c)),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)}))),[c,r,e,o])}};function cn(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);return cn=function(){return n},n}var an=w.e.div(cn()),on=function(n){var e=n.earnings,t=n.farm,c=Object(a.useState)(!1),o=Object(m.a)(c,2),i=o[0],u=o[1],s=rn(t).onReward,b=Object(X.a)(e),d=Object(X.b)(e);return Object(r.jsxs)(l.Flex,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(l.Heading,{color:0===d?"textDisabled":"text",children:b.toFixed(5)}),Object(r.jsx)(an,{children:Object(r.jsx)(l.Button,{disabled:0===d||i,onClick:Object(W.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,s();case 3:u(!1);case 4:case"end":return n.stop()}}),n)}))),children:"Harvest"})})]})};function un(){var n=Object(v.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 19px auto;\n  width: 100%;\n"]);return un=function(){return n},n}function sn(){var n=Object(v.a)(["\n  padding-top: 16px;\n"]);return sn=function(){return n},n}var bn=w.e.div(sn()),ln=w.e.div(un(),(function(n){return n.theme.colors.borderColor})),dn=function(n){var e=n.farm,t=n.ethereum,c=n.account,o=n.earnToken,i=Object(a.useState)(!1),u=Object(m.a)(i,2),s=u[0],b=u[1],d=Object(x.b)(e.pid),j=d.allowance,f=d.tokenBalance,p=d.stakedBalance,O=d.earnings,v=e.lpAddresses,w=C.a[e.tokenSymbol][250],g=e.lpSymbol.toUpperCase(),k=c&&j&&j.isGreaterThan(0),y=Object(a.useMemo)((function(){return Object(U.b)(t,e.isTokenOnly?w:v)}),[t,v,w,e.isTokenOnly]),S=Object(Y.a)(e.type,y).onApprove,T=Object(a.useCallback)(Object(W.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,S();case 4:b(!1),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[S]),F=e.startTime;F||(F=0);var B=1e3*F-Date.now()<=0;return Object(r.jsxs)(bn,{children:[Object(r.jsxs)(l.Flex,{children:[Object(r.jsx)(l.Text,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:o}),Object(r.jsx)(l.Text,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Earned"})]}),Object(r.jsx)(on,{earnings:O,farm:e}),Object(r.jsxs)(l.Flex,{children:[Object(r.jsx)(l.Text,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:g}),Object(r.jsx)(l.Text,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Staked"})]}),!B&&Object(r.jsx)(V.a,{date:new Date(1e3*F),renderer:function(n){var t=n.days,c=n.hours,a=n.minutes,o=n.seconds,i=o<10?"0".concat(o):o,u=a<10?"0".concat(a):a,s=c<10?"0".concat(c):c,b=t>0?"".concat(t," days and "):"";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ln,{}),Object(r.jsxs)(l.Text,{pr:"3px",children:[e.lpSymbol," pool starts: ",b,s,":",u,":",i]}),Object(r.jsx)(l.Text,{pr:"3px",children:"You can deposit but you will not get any rewards yet."}),Object(r.jsx)(ln,{})]})}}),c?k?Object(r.jsx)(tn,{stakedBalance:p,tokenBalance:f,farm:e}):e.type===h.a.SHARE&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.Button,{mt:"8px",fullWidth:!0,disabled:s,onClick:T,children:"Approve Contract"}),Object(r.jsx)(ln,{})]}):Object(r.jsx)(q.a,{mt:"8px",fullWidth:!0})]})};function jn(){var n=Object(v.a)(["\n  height: ",";\n  overflow: hidden;\n"]);return jn=function(){return n},n}function fn(){var n=Object(v.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 16px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n  min-height: 476px;\n"]);return fn=function(){return n},n}function pn(){var n=Object(v.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return pn=function(){return n},n}function xn(){var n=Object(v.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return xn=function(){return n},n}var On=Object(w.f)(xn()),hn=w.e.div(pn(),On),mn=w.e.div(fn(),(function(n){return n.theme.card.background})),vn=w.e.div(jn(),(function(n){return n.expanded?"100%":"0px"})),wn=function(n){var e=n.farm,t=n.ethereum,c=n.account,o=n.isSSO,i=Object(a.useState)(!1),u=Object(m.a)(i,2),b=u[0],d=u[1],j=e.isTokenOnly?e.tokenSymbol.toLowerCase():"".concat(e.tokenSymbol.toLowerCase(),"-").concat(e.quoteTokenSymbol.toLowerCase()),f=o?h.b.SSO:h.b.SDO,p=e.apy&&e.apy.times(new s.a(100)).toNumber();return Object(r.jsxs)(mn,{children:[e.tokenSymbol===f&&Object(r.jsx)(hn,{}),Object(r.jsx)(E,{lpLabel:e.lpSymbol,multiplier:e.multiplier,farmImage:j,tokenSymbol:e.tokenSymbol}),Object(r.jsxs)(l.Flex,{justifyContent:"space-between",alignItems:"center",children:[Object(r.jsx)(l.Text,{children:"APR:"}),Object(r.jsx)(l.Text,{bold:!0,style:{display:"flex",alignItems:"center"},children:e.apy&&!Number.isNaN(p)?Object(r.jsxs)(r.Fragment,{children:[p.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]}):Object(r.jsx)(l.Skeleton,{height:24,width:80})})]}),Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{children:"Earn:"}),Object(r.jsx)(l.Text,{bold:!0,children:f})]}),e.type===h.a.SHARE&&Object(r.jsxs)(l.Flex,{justifyContent:"space-between",children:[Object(r.jsx)(l.Text,{style:{fontSize:"20px"},children:"Deposit Fee:"}),Object(r.jsx)(l.Text,{bold:!0,style:{fontSize:"20px"},children:e.depositFeeBP?"".concat(e.depositFeeBP/100,"%"):Object(r.jsx)(l.Skeleton,{height:24,width:80})})]}),Object(r.jsx)(dn,{farm:e,ethereum:t,account:c,earnToken:f}),Object(r.jsx)(S,{onClick:function(){return d(!b)},expanded:b}),Object(r.jsx)(vn,{expanded:b,children:Object(r.jsx)(P,{farm:e})})]})},gn=function(n){var e=n.isSSO,t=Object(o.g)().path,u=Object(x.c)(),d=Object(x.f)(),m=Object(b.m)(),v=m.account,w=m.ethereum,g=Object(i.b)(),k=Object(O.a)().fastRefresh;Object(a.useEffect)((function(){v&&g(Object($.b)(v))}),[v,g,k]);var y=e?u.filter((function(n){return n.type===h.a.SHARE})):u.filter((function(n){return n.type===h.a.DOLLAR})),S=Object(a.useCallback)((function(n){return n.map((function(n){var t=new s.a(n.tokenPerBLock||1).times(new s.a(n.poolWeight)).div(new s.a(10).pow(18)).times(j),r=e?h.b.SSO:h.b.SDO,a=d[r].times(t),o=Object(x.a)(n,d);return o.comparedTo(0)>0&&(a=a.div(o)),Object(c.a)(Object(c.a)({},n),{},{totalValue:o,apy:a})})).map((function(n){return Object(r.jsx)(wn,{farm:n,ethereum:w,account:v,isSSO:e},n.pid)}))}),[d,v,w,e]);return Object(r.jsxs)(p.a,{children:[Object(r.jsx)(f.a,{children:Object(r.jsx)(l.Heading,{as:"h1",size:"lg",mb:"50px",style:{textAlign:"center"},children:e?"\ud83c\udfe6 Pick a Share Bank":"\ud83c\udfe7 Pick a Bank"})}),Object(r.jsx)(f.a,{children:Object(r.jsx)(o.a,{exact:!0,path:"".concat(t),children:S(y)})})]})}}}]);
//# sourceMappingURL=8.501f035f.chunk.js.map