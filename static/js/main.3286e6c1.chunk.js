(this["webpackJsonpjs-band-store"]=this["webpackJsonpjs-band-store"]||[]).push([[0],[,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return p})),n.d(e,"e",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"h",(function(){return g})),n.d(e,"i",(function(){return A})),n.d(e,"j",(function(){return _})),n.d(e,"k",(function(){return x})),n.d(e,"l",(function(){return y}));var r=n(4),c=n.n(r),a=n(8),i=n(16),u=n(17),s=n(19),o=n(12),l=n(25),d=n(24),j=new(function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).entity="purchase",t}return Object(u.a)(n,[{key:"purchase",value:function(t,e){return Object(s.a)(Object(o.a)(n.prototype),"post",this).call(this,this.entity,{books:e},{Authorization:"Bearer ".concat(t)})}}]),n}(n(22).a)),b="ADD_PRODUCT_TO_THE_CART",O="GET_CART_FROM_LOCALSTORAGE",f="GET_TOTAL_PRICE",h="PURCHASE_STARTED",p="PURCHASE_SUCCESS",m="PURCHASE_FAILED",v="CART_RESET",g=function(t){return function(e){return e({type:b,payload:t})}},A=function(){return function(t){return t({type:O})}},_=function(){return function(t){return t({type:f})}},x=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r().auth.currentUser.token,n({type:h}),e.abrupt("return",j.purchase(a,t).then((function(){return n({type:p})})).catch((function(t){return n({type:m,payload:t})})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},y=function(){return function(t){return t({type:v})}}},,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"ADD_GOOD_TO_THE_CART",(function(){return u})),n.d(e,"GET_PRODUCTS_STARTED",(function(){return s})),n.d(e,"GET_PRODUCTS_SUCCESS",(function(){return o})),n.d(e,"GET_PRODUCTS_FAILURE",(function(){return l})),n.d(e,"RESET_PRODUCTS",(function(){return d})),n.d(e,"getProducts",(function(){return j})),n.d(e,"resetProducts",(function(){return b}));var r=n(4),c=n.n(r),a=n(8),i=n(30),u="ADD_GOOD_TO_THE_CART",s="GET_PRODUCTS_STARTED",o="GET_PRODUCTS_SUCCESS",l="GET_PRODUCTS_FAILURE",d="RESET_PRODUCTS",j=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.currentUser.token,e({type:s}),t.prev=2,t.next=5,i.a.getBooks(r);case 5:if(!(a=t.sent).message){t.next=8;break}throw new Error(a.message);case 8:return t.abrupt("return",e({type:o,payload:a}));case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",e({type:l,payload:t.t0}));case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}()},b=function(){return function(t){return t({type:d})}}},,,,,,,function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(2),i=n(8),u=n(16),s=n(17),o=function(){function t(){Object(u.a)(this,t),this.path="https://js-band-store-api.glitch.me",this.headers={"Content-Type":"application/json"}}return Object(s.a)(t,[{key:"post",value:function(){var t=Object(i.a)(c.a.mark((function t(e,n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(this.path,"/").concat(e),{method:"POST",body:JSON.stringify(n),headers:Object(a.a)(Object(a.a)({},this.headers),r)}).then((function(t){if(!t.ok)throw Error(t.status);return t.json()})));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"get",value:function(t,e){return fetch("".concat(this.path,"/").concat(t),{method:"GET",headers:Object(a.a)(Object(a.a)({},this.headers),e)}).then((function(t){if(!t.ok)throw Error(t.status);return t.json()}))}}]),t}();e.a=o},function(t,e,n){"use strict";n(1),n(63);var r=n(0);e.a=function(){return Object(r.jsx)("div",{className:"loader-wrapper",children:Object(r.jsx)("div",{className:"loader",children:"Loading..."})})}},,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"reducer",(function(){return C})),n.d(e,"actions",(function(){return r}));var r={};n.r(r),n.d(r,"GET_CURRENT_USER_FROM_LOCAL",(function(){return m})),n.d(r,"USER_LOGIN_STARTED",(function(){return v})),n.d(r,"USER_LOGIN_SUCCESS",(function(){return g})),n.d(r,"USER_LOGIN_FAILURE",(function(){return A})),n.d(r,"USER_LOGOUT",(function(){return _})),n.d(r,"userLogin",(function(){return x})),n.d(r,"logoutUser",(function(){return y})),n.d(r,"getUserFromLocalStorage",(function(){return T}));var c=n(14),a=(n(64),n(6)),i=n(1),u=n(2),s=n(4),o=n.n(s),l=n(8),d=n(16),j=n(17),b=n(19),O=n(12),f=n(25),h=n(24),p=new(function(t){Object(f.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).entity="signin",t}return Object(j.a)(n,[{key:"login",value:function(){var t=Object(l.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(b.a)(Object(O.a)(n.prototype),"post",this).call(this,this.entity,{username:e}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),n}(n(22).a)),m="GET_CURRENT_USER_FROM_LOCAL",v="USER_LOGIN_STARTED",g="USER_LOGIN_SUCCESS",A="USER_LOGIN_FAILURE",_="USER_LOGOUT",x=function(t){return function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:v}),e.abrupt("return",p.login(t).then((function(t){return n({type:g,payload:t})})).catch((function(t){return n({type:A,payload:t.response&&t.response.data.message?t.response.data.message:t.message})})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(t){return t({type:_})}},T=function(){return function(t){return t({type:m})}},N={currentUser:{},isLoading:!1,errorMessage:null},E=function(){var t=localStorage.getItem("currentUser");return t?JSON.parse(t):{}},S=function(t){return localStorage.removeItem("currentUser"),Object(u.a)(Object(u.a)({},t),{},{currentUser:{},isLoading:!1,errorMessage:null})},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(u.a)(Object(u.a)({},t),{},{isLoading:!0});case g:return localStorage.setItem("currentUser",JSON.stringify(e.payload)),Object(u.a)(Object(u.a)({},t),{},{currentUser:e.payload,isLoading:!1});case A:return Object(u.a)(Object(u.a)({},t),{},{isLoading:!1,errorMessage:e.payload});case m:return t.currentUser&&t.currentUser.username?t:Object(u.a)(Object(u.a)({},t),{},{currentUser:E()});case _:return S(t);default:return t}},R=(n(65),n(0)),D=function(t){var e=t.onSubmit,n=t.setName,r=t.name,a=Object(i.useState)(),u=Object(c.a)(a,2),s=u[0],o=u[1],l=function(t){return t?(n(t),t.length<4||t.length>16?o("Username is not valid"):(o(),!0)):o("Username is not valid")};return Object(R.jsxs)("form",{className:"auth-form",onSubmit:function(t){return t.preventDefault(),!!l(r)&&e(r)},children:[s&&Object(R.jsx)("div",{className:"auth-form__error",children:s}),Object(R.jsx)("label",{className:"auth-form__label",htmlFor:"username",children:"Name"}),Object(R.jsx)("input",{type:"text",onChange:function(t){return l(t.target.value)},className:"auth-form__input",name:"username",id:"username"}),Object(R.jsx)("input",{type:"submit",className:"auth-form__submit",name:"submit",value:"Log In"})]})};D.defaultProps={name:void 0,onSubmit:function(){},setName:function(){}};var I=D;e.default=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.auth.currentUser})),n=Object(i.useState)(e&&e.username),r=Object(c.a)(n,2),u=r[0],s=r[1];return Object(R.jsx)("div",{className:"login-page",children:Object(R.jsx)(I,{onSubmit:function(e){return t(x(e))},type:"login",name:u,setName:s})})}},function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(8),i=n(16),u=n(17),s=n(19),o=n(12),l=n(25),d=n(24),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).entity="books",t}return Object(u.a)(n,[{key:"getBooks",value:function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.a)(Object(o.a)(n.prototype),"get",this).call(this,this.entity,{Authorization:"Bearer ".concat(e)}));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getBookById",value:function(){var t=Object(a.a)(c.a.mark((function t(e,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(s.a)(Object(o.a)(n.prototype),"get",this).call(this,"".concat(this.entity,"/").concat(r),{Authorization:"Bearer ".concat(e)}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),n}(n(22).a);e.a=new j},,,,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"reducer",(function(){return S})),n.d(e,"actions",(function(){return r}));var r={};n.r(r),n.d(r,"GET_PRODUCT_DETAILS_STARTED",(function(){return A})),n.d(r,"GET_PRODUCT_DETAILS_SUCCESS",(function(){return _})),n.d(r,"GET_PRODUCT_DETAILS_FAILURE",(function(){return x})),n.d(r,"RESET_PRODUCT_DETAILS",(function(){return y})),n.d(r,"getProductDetails",(function(){return T})),n.d(r,"resetProductDetails",(function(){return N}));var c=n(1),a=n(6),i=n(5),u=(n(73),n(74),n(0)),s=function(t){var e=t.data;return Object(u.jsxs)("div",{className:"product-tags",children:[Object(u.jsx)("img",{className:"product-tags__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAALiMAAC4jAXilP3YAAATtaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDMtMjZUMDI6MDA6MzUrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAzLTI2VDAyOjAxOjA4KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTI2VDAyOjAxOjA4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMDYwNDcyZC1iMzZhLTZlNDAtYTE5OC0xNzdkOWE4OWE4ZDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YTA2MDQ3MmQtYjM2YS02ZTQwLWExOTgtMTc3ZDlhODlhOGQ0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTA2MDQ3MmQtYjM2YS02ZTQwLWExOTgtMTc3ZDlhODlhOGQ0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMDYwNDcyZC1iMzZhLTZlNDAtYTE5OC0xNzdkOWE4OWE4ZDQiIHN0RXZ0OndoZW49IjIwMjEtMDMtMjZUMDI6MDA6MzUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vKY2rAAAEZ0lEQVRogdWaX4gVZRjGf2sW/UUkyxu9yKy1lt2LktAsDCvBQLGNZMXMo4QiYhdG2EXeVEIUhRKRFAqKaYWF/YHCP5HdRClRgiJbKIooKpStZspq08U3p/POO+9858zfPT4wsGeeb9/3ec4zM2fm+6YDh7nAy8BNwD8kYxgwCJwHOsLtPHAZuCbkBoFrgX+BH4C1wADwCLAVOAL8AQTAdmC9p1+hWBA2LXN7NOz1vsGdBDrLteiws0BDvq037PeiwQ0Ad5ZpsgPYC0wMP+8HNgMjQ04iAK4Dhod/y/3DcYdrXfgFXEozVY2ngW3APGANMEpwF4AHgAM5/HjxoxC4oeDaC4mnN1vwX1BhsmUaBdtsr+C/VNzfQFcJOko3Cu6qrs3OFfzHirsCTC5ahDS62TPuNqAPWAHMB25P2aeG36xOdhC4P2UPL6TRLQlj+gyRAbA4Za+0yQbAgyl7JGKfKPqhwUuT54CDuCtkfd+ylP1qDFGy3+M3eijk9gK3hvvGAL+F+08BN6bsOSTJ7iLZ6FTB9ShusuCezNB3Hn6zn1Bwsj6jT9G45N+iuBE0DuH5GXtXmqzPaI/gpipumuDuy9qcxpcpt5rgNxn8tCyNfEYB9oTcCeDhcN+k8HOAO8fzwkq2JvhCkm1mdALu0LV+Xs4C49M2TICV7LOCz51sM6MA44g/5WwHxqZp1AKsZPsEnyvZVozWMRp3Po5utXgGWMnKC1TmZKXRbcXpzYU5+JPdaPBNk5VGPy1Wby7MxJ+sZXaGr2A7JlrHLOJmFgr+A4OflVRMGv2sHL25YCX7nOCtZE2zH4kBx4HrS5OcHYUku1QN+KpUydmRJdnInFUH0K8G7CpbdUY8QdyMfKB4z+AnygITgItqwDdlq86IGUR1ngBuFvw6xcdmFXtws/RXQ7K9RHW+rnh9GD+jC3QRT3ZneXpzQd4h/aK4kTSWPQLgc6uAlex3pUjNh9lENd6h+LWC+z2pyNWQ7AjchHfSXZE8lweGJRQ5gFseuCj2PUZ7JXsFt2JXh15CuZSmWCfRby3APWgnfUFVYjpRXXpFbpXgjrVS8F7gL9rvnF1DQ0+/wf8s+G9bLXo37ZXsFKVlneL10uQLaYpbye7JpzcTuolO7VwmugKnn2X/xP3cpIKV7D7csn4VqF8gZf/nBV9TXEB03ikVhirZHuIm3xH8AuIm38jbtOpkrSTfFnyNuMm3imo+Djitiv+EW+YvEpPwm1hs8K8VrIG7iN5TFp3skCapMYZykrWSfFXwlSSpUXSyWZJcnbFXaljJ/kr6OagpuHvYtkpSI2+y+o5HJ7nE4CtLUsNKdj/Nk32IeJKvCN4yWXmSGmOBM0RFHQPuSRi/CH9Sqw1+VRnCs8BKNgB24N4kXQ68iUtbj6kn2YWba267JDVGAUeJC/VtL4X/2417uNb8yurkp8MNuDWdZgYHaEw4P27wZ3EP222PTuBd3Atch3GH5EHga6Ive3TT+A3tB3aT/WWQ//EfRNXx3WCJlF4AAAAASUVORK5CYII=",alt:"Tags icon"}),e.join(", ")]})};s.defaultProps={data:[]};var o=s,l=function(t){var e=t.data;return Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsxs)("div",{className:"product-info__container",children:[Object(u.jsx)("img",{src:e.cover,alt:"Product cover",className:"product-info__img"}),Object(u.jsx)("span",{className:"product-info__description",children:e.description})]}),Object(u.jsxs)("div",{className:"product-info__container",children:[Object(u.jsx)("h1",{className:"product-info__title",children:e.title}),Object(u.jsx)("span",{className:"product-info__author",children:e.author}),Object(u.jsx)(o,{data:e.tags})]})]})};l.defaultProps={data:{}};var d=l,j=n(2),b=n(14),O=n(7),f=(n(75),function(t){var e=t.data,n=Object(a.b)(),r=Object(c.useState)(1),i=Object(b.a)(r,2),s=i[0],o=i[1];return Object(u.jsxs)("div",{className:"cart-widget",children:[Object(u.jsxs)("div",{className:"cart-widget__field",children:[Object(u.jsx)("span",{className:"cart-widget__title",children:"Price, $"}),Object(u.jsx)("div",{className:"cart-widget__value",children:e.price})]}),Object(u.jsxs)("div",{className:"cart-widget__field",children:[Object(u.jsx)("span",{className:"cart-widget__title",children:"Count"}),Object(u.jsx)("input",{type:"number",name:"counter",id:"counter",value:s,className:"cart-widget__value cart-widget__counter",onChange:function(t){var n=t.target.value;return n<1?o(1):n>=e.count?o(e.count):o(n)}})]}),Object(u.jsxs)("div",{className:"cart-widget__field",children:[Object(u.jsx)("span",{className:"cart-widget__title",children:"Total Price, $"}),Object(u.jsx)("div",{className:"cart-widget__value",children:(e.price*s).toFixed(2)})]}),Object(u.jsx)("button",{type:"button",className:"cart-widget__button button",onClick:e.title&&function(){var t=Object(j.a)(Object(j.a)({},e),{},{quantity:s});n(Object(O.h)(t))},children:"Add to Cart"})]})});f.defaultProps={data:{}};var h=f,p=n(4),m=n.n(p),v=n(8),g=n(30),A="GET_PRODUCT_DETAILS_STARTED",_="GET_PRODUCT_DETAILS_SUCCESS",x="GET_PRODUCT_DETAILS_FAILURE",y="RESET_PRODUCT_DETAILS",T=function(t){return function(){var e=Object(v.a)(m.a.mark((function e(n,r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r().auth.currentUser.token,n({type:A}),e.abrupt("return",g.a.getBookById(c,t).then((function(t){return n({type:_,payload:t})})).catch((function(t){return n({type:x,payload:t})})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},N=function(){return function(t){return t({type:y})}},E={productDetails:{},errorMessage:null},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:return Object(j.a)(Object(j.a)({},t),{},{isLoading:!0});case _:return Object(j.a)(Object(j.a)({},t),{},{productDetails:e.payload,isLoading:!1});case x:return Object(j.a)(Object(j.a)({},t),{},{errorMessage:e.payload,isLoading:!1});case y:return Object(j.a)(Object(j.a)({},t),{},{productDetails:{}});default:return t}},C=(n(76),n(23));e.default=function(){var t=Object(i.g)().id,e=Object(a.b)(),n=Object(a.c)((function(t){return t.details})),r=n.productDetails,s=n.isLoading;return Object(c.useEffect)((function(){return e(T(t)),function(){return e(N())}}),[t,e]),s?Object(u.jsx)(C.a,{}):Object(u.jsx)("div",{className:"product-details",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{data:r}),Object(u.jsx)(h,{data:r})]})})}},function(t,e,n){"use strict";n.r(e),n.d(e,"reducer",(function(){return b}));var r=n(6),c=n(1),a=n(2),i=n(44),u=n(7),s={list:[],count:0,totalPrice:0,purchaseResult:!1,isLoading:!1},o=function(t,e){var n=t.find((function(t){return t.id===e.id}));return n?t.map((function(t){return t.id===n.id?e:t})):[].concat(Object(i.a)(t),[e])},l=function(t){var e=localStorage.getItem("cart");return t.list.length?t:e?Object(a.a)(Object(a.a)({},t),{},{list:JSON.parse(e)}):t},d=function(t,e){return t+e},j=function(t){var e=t.map((function(t){return t.price*t.quantity}));return e.length&&e.reduce(d)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.a:var n=o(t.list,e.payload);return localStorage.setItem("cart",JSON.stringify(n)),Object(a.a)(Object(a.a)({},t),{},{list:n});case u.c:return l(t);case u.d:return Object(a.a)(Object(a.a)({},t),{},{totalPrice:j(t.list)});case u.f:return Object(a.a)(Object(a.a)({},t),{},{isLoading:!0});case u.g:return Object(a.a)(Object(a.a)({},t),{},{purchaseResult:!0,isLoading:!1});case u.e:return Object(a.a)(Object(a.a)({},t),{},{isLoading:!1});case u.b:return localStorage.removeItem("cart"),Object(a.a)(Object(a.a)({},t),{},{isLoading:!1,purchaseResult:!1,list:[]});default:return t}},O=n(20),f=n(0),h=function(t){var e=t.item;return Object(f.jsxs)("tr",{className:"cart-list-item",children:[Object(f.jsx)("td",{className:"cart-list-item__name",children:Object(f.jsx)(O.b,{to:"/catalog/".concat(e.id),children:e.title})}),Object(f.jsx)("td",{className:"cart-list-item__count",children:e.quantity}),Object(f.jsx)("td",{className:"cart-list-item__price",children:e.price}),Object(f.jsx)("td",{className:"cart-list-item__total",children:e.price*e.quantity})]})};h.defaultProps={item:{}};var p=h,m=(n(70),function(t){var e=t.data;return Object(f.jsxs)("table",{className:"cart-list",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"cart-list-item",children:[Object(f.jsx)("td",{className:"cart-list-item__name",children:"Name"}),Object(f.jsx)("td",{className:"cart-list-item__count",children:"Quantity"}),Object(f.jsx)("td",{className:"cart-list-item__price",children:"Price, $"}),Object(f.jsx)("td",{className:"cart-list-item__total",children:"Total, $"})]})}),Object(f.jsx)("tbody",{children:e.map((function(t){return Object(f.jsx)(p,{item:t},t.id)}))})]})});m.defaultProps={data:[]};var v=m,g=(n(71),n(72),function(t){var e=t.children,n=t.closeWindow;return Object(c.useEffect)((function(){return function(){return n()}}),[n]),Object(f.jsx)("div",{className:"modal-window",onClick:n,role:"presentation",children:Object(f.jsxs)("div",{className:"modal-window__container",children:[e,Object(f.jsx)("button",{type:"button",className:"modal-window__close",onClick:n,children:"Close"})]})})});g.defaultProps={children:null,closeWindow:function(){}};var A=g,_=function(t){var e=t.closeWindow,n=t.list,r=t.totalPrice;return Object(f.jsxs)(A,{closeWindow:e,children:[Object(f.jsx)("div",{className:"title",children:"You successfully placed an order!"}),Object(f.jsx)(v,{data:n}),Object(f.jsxs)("div",{className:"cart__total-price",children:["Total Price:",Object(f.jsxs)("b",{children:[r.toFixed(2),"$"]})]})]})};_.defaultProps={closeWindow:function(){},list:[],totalPrice:0};var x=_;e.default=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.cart})),n=e.list,a=e.totalPrice,i=e.purchaseResult;Object(c.useEffect)((function(){t(Object(u.j)())}),[n,t]);return n.length?Object(f.jsxs)("div",{className:"cart",children:[i&&Object(f.jsx)(x,{closeWindow:function(){t(Object(u.l)())},list:n,totalPrice:a}),Object(f.jsxs)("div",{className:"cart__header",children:[Object(f.jsx)("h1",{className:"cart__title",children:"In your cart:"}),Object(f.jsx)("button",{type:"button",onClick:function(){var e=[];n.forEach((function(t){for(var n=0;n<t.quantity;n+=1)e.push(t.id)})),t(Object(u.k)(e))},className:"cart__button button",children:"Purchase"})]}),Object(f.jsx)(v,{data:n}),Object(f.jsxs)("div",{className:"cart__total-price",children:["Total Price:",Object(f.jsxs)("b",{children:[a.toFixed(2),"$"]})]})]}):Object(f.jsx)("div",{className:"cart-empty",children:"Cart is empty"})}},function(t,e,n){"use strict";n.r(e),n.d(e,"reducer",(function(){return O})),n.d(e,"actions",(function(){return j}));var r=n(14),c=n(1),a=n(6),i=(n(66),n(0)),u=function(t){var e=t.data,n=t.onClick;return Object(i.jsxs)("div",{className:"product-card",children:[Object(i.jsx)("div",{className:"product-card__img-container",children:Object(i.jsx)("img",{src:e.cover,alt:"Product cover",className:"product-card__img",onClick:function(){return n(e.id)},role:"presentation"})}),Object(i.jsx)("span",{role:"presentation",className:"product-card__title",onClick:function(){return n(e.id)},children:e.title}),Object(i.jsx)("span",{className:"product-card__author",children:e.author}),Object(i.jsxs)("div",{className:"product-card__price-container",children:[Object(i.jsx)("span",{className:"product-card__price",children:e.price}),Object(i.jsx)("button",{type:"button",className:"product-card__button",onClick:function(){return n(e.id)},children:"View"})]})]})};u.defaultProps={data:{},onClick:function(){}};var s=u,o=(n(67),function(t){var e=t.data,n=function(t){window.location.hash="/catalog/".concat(t)};return Object(i.jsx)("div",{className:"product-list",children:e&&e.map((function(t){return Object(i.jsx)(s,{data:t,onClick:n},t.id)}))})});o.defaultProps={data:[]};var l=o,d=n(2),j=n(15),b={productList:[],errorMessage:null},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j.GET_PRODUCTS_STARTED:return Object(d.a)(Object(d.a)({},t),{},{isLoading:!0});case j.GET_PRODUCTS_SUCCESS:return Object(d.a)(Object(d.a)({},t),{},{productList:e.payload,isLoading:!1});case j.GET_PRODUCTS_FAILURE:return Object(d.a)(Object(d.a)({},t),{},{errorMessage:e.payload,isLoading:!1});case j.RESET_PRODUCTS:return Object(d.a)(Object(d.a)({},t),{},{productList:[]});default:return t}},f=(n(68),n(23)),h=(n(69),function(t){var e=t.filterByName,n=t.filterByPrice;return Object(i.jsxs)("div",{className:"search-bar",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search",className:"search-bar__name",onChange:e}),Object(i.jsxs)("select",{type:"text",className:"search-bar__price",onChange:n,children:[Object(i.jsx)("option",{value:"null",children:"Price"}),Object(i.jsx)("option",{value:"<25",children:"Up to 25$"}),Object(i.jsx)("option",{value:"<50",children:"From 25$ to 50$"}),Object(i.jsx)("option",{value:">50",children:"More then 50$"})]})]})});h.defaultProps={filterByName:function(){},filterByPrice:function(){}};var p=h;e.default=function(){var t=Object(a.c)((function(t){return t.catalog})),e=t.productList,n=t.isLoading,u=Object(c.useState)(null),s=Object(r.a)(u,2),o=s[0],d=s[1],j=Object(c.useState)(null),b=Object(r.a)(j,2),O=b[0],h=b[1],m=Object(c.useState)(null),v=Object(r.a)(m,2),g=v[0],A=v[1];return Object(c.useEffect)((function(){return d(e),function(){return d(null)}}),[e]),Object(c.useEffect)((function(){var t,n=e;O&&(t=O,n=n.filter((function(e){return e.title.toLowerCase().includes(t)}))),g&&(n=function(t,e){switch(e){case"<25":return t.filter((function(t){return t.price<25}));case"<50":return t.filter((function(t){return t.price>25&&t.price<50}));case">50":return t.filter((function(t){return t.price>50}));default:return t}}(n,g)),d(n)}),[g,O,e]),n?Object(i.jsx)(f.a,{}):Object(i.jsxs)("div",{className:"catalog",children:[Object(i.jsx)(p,{filterByName:function(t){return h(t.target.value.toLowerCase())},filterByPrice:function(t){return A(t.target.value)}}),Object(i.jsx)(l,{data:o})]})}},,,,,,,function(t,e,n){},,,,,,,function(t,e,n){},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(28),i=n.n(a),u=(n(50),n(6)),s=(n(57),n(20)),o=n(5),l=n(2),d=n(45),j=n(0),b=function(t){var e=t.auth,n=t.children,r=t.redirectTo,c=Object(d.a)(t,["auth","children","redirectTo"]);return Object(j.jsx)(o.b,Object(l.a)(Object(l.a)({},c),{},{children:e?Object(j.jsx)(j.Fragment,{children:n}):Object(j.jsx)(o.a,{to:r})}))};b.defaultProps={auth:!1,children:null,redirectTo:""};var O=b,f=n(7),h=n(15),p=n(23),m=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,85))})),v=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,82))})),g=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,29))})),A=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,42))})),_=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,43))})),x=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,41))})),y=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,83))})),T=function(){var t=Object(u.c)((function(t){return t.auth})).currentUser,e=Object(u.b)();return Object(r.useEffect)((function(){e(Object(f.i)())}),[e]),Object(r.useEffect)((function(){t.username&&e(Object(h.getProducts)())}),[t,e]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)(p.a,{}),children:[t.username&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{currentUser:t}),Object(j.jsx)(m,{})]}),Object(j.jsx)("div",{className:"App__main",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",children:Object(j.jsx)(o.a,{to:"/catalog"})}),Object(j.jsx)(O,{path:"/login",auth:!t.username,redirectTo:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(O,{path:"/catalog/:id",auth:!!t.username,redirectTo:"/login",children:Object(j.jsx)(x,{})}),Object(j.jsx)(O,{path:"/catalog",auth:!!t.username,redirectTo:"/login",children:Object(j.jsx)(_,{})}),Object(j.jsx)(O,{path:"/cart",auth:!!t.username,redirectTo:"/login",children:Object(j.jsx)(A,{})}),Object(j.jsx)(o.b,{path:"/404",children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{to:"/404"})]})})]})})})},N=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,84)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),a(t),i(t)}))},E=n(29),S=n(18),C=n(40),R=n(43),D=n(42),I=n(41),w=Object(S.c)({auth:E.reducer,catalog:R.reducer,cart:D.reducer,details:I.reducer}),L=Object(S.d)(w,Object(S.a)(C.a));L.dispatch(E.actions.getUserFromLocalStorage()),i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u.a,{store:L,children:Object(j.jsx)(T,{})})}),document.getElementById("root")),N()}],[[77,1,2]]]);
//# sourceMappingURL=main.3286e6c1.chunk.js.map