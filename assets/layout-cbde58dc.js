import{_ as w,c as s,o,j as d,w as e,p as A,k as G,f as p,d as k,a as E,e as y,F as N,l as R,t as $,g as t,m as b,n as C,q as V,h as m,u as B,i as z,r as S,s as j,v as q,x as O,y as I,T as H,z as W}from"./index-0d643a49.js";import{u as F}from"./setting-73b75b97.js";const J="https://cdn.jsdelivr.net/gh/Nisgesb/WatchSystemDist@master/assets/logoHalf-dd8682c1.png";const K={},D=i=>(A("data-v-efb68b67"),i=i(),G(),i),P=D(()=>p("div",null,[p("img",{src:J,alt:"logo"})],-1)),Q=D(()=>p("div",{class:"right_nav_title"},[p("h1",{id:"title"},"广东东软学院"),p("span",{class:"interpret"},"NEUSOFT INSTITUTE GUANDONG")],-1));function X(i,a){const _=s("el-header");return o(),d(_,{class:"left_nav_logo"},{default:e(()=>[P,Q]),_:1})}const Y=w(K,[["render",X],["__scopeId","data-v-efb68b67"]]),Z={name:"myMenuItem"},ee=k({...Z,props:["list"],setup(i){const a=i,_=E(),l=r=>{_.push(r.index)};return(r,u)=>{const c=s("el-icon"),f=s("el-menu-item"),h=s("my-menu-item",!0),v=s("el-sub-menu");return o(),y("div",null,[(o(!0),y(N,null,R(a.list,n=>(o(),y(N,{key:n.path},[!n.children&&n.meta.showNavbar?(o(),d(f,{key:0,index:n.path,onClick:u[0]||(u[0]=g=>l(g))},{title:e(()=>[p("span",null,$(n.meta.title),1)]),default:e(()=>[t(c,null,{default:e(()=>[(o(),d(b(n.meta.icon)))]),_:2},1024)]),_:2},1032,["index"])):C("",!0),n.children&&n.children.length===1&&n.children[0].meta.showNavbar?(o(),d(f,{key:1,index:n.children[0].path,onClick:u[1]||(u[1]=g=>l(g))},{title:e(()=>[p("span",null,$(n.children[0].meta.title),1)]),default:e(()=>[t(c,null,{default:e(()=>[(o(),d(b(n.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index"])):C("",!0),n.children&&n.children.length>1&&n.meta.showNavbar?(o(),d(v,{key:2,index:n.path},{title:e(()=>[t(c,null,{default:e(()=>[(o(),d(b(n.meta.icon)))]),_:2},1024),p("span",null,$(n.meta.title),1)]),default:e(()=>[t(h,{list:n.children},null,8,["list"])]),_:2},1032,["index"])):C("",!0)],64))),128))])}}});const te=w(ee,[["__scopeId","data-v-4015a891"]]),ne=k({__name:"scrollbar",props:["menuList"],setup(i){const a=i,_=F(),l=V();return(r,u)=>{const c=s("el-menu"),f=s("el-scrollbar");return o(),d(f,{class:"scrollbar-wrap",native:""},{default:e(()=>[t(c,{"background-color":"transparent","text-color":"#fff","active-text-color":"#2980b9","default-active":m(l).path,collapse:m(_).isFold},{default:e(()=>[t(te,{list:a.menuList},null,8,["list"])]),_:1},8,["default-active","collapse"])]),_:1})}}});const oe=w(ne,[["__scopeId","data-v-cb929819"]]),T=k({__name:"roundButton",props:["iconName"],setup(i){const a=i;return(_,l)=>{const r=s("el-icon"),u=s("el-button");return o(),d(u,{circle:"",size:"large"},{default:e(()=>[t(r,null,{default:e(()=>[(o(),d(b(a.iconName)))]),_:1})]),_:1})}}}),se={class:"showCurrentLocation"},ae={key:0},le=k({__name:"showCurrentLocation",setup(i){const a=V();return(_,l)=>{const r=s("el-icon"),u=s("ArrowRight");return o(),y("div",se,[(o(!0),y(N,null,R(m(a).matched,(c,f)=>(o(),y(N,{key:c.path},[c.meta.showNavbar?(o(),y("div",ae,[t(r,{size:"16",class:"route-icon"},{default:e(()=>[(o(),d(b(c.meta.icon)))]),_:2},1024),p("span",null,$(c.meta.title),1),f!=m(a).matched.length-1?(o(),d(r,{key:0,class:"arrowRight"},{default:e(()=>[t(u)]),_:1})):C("",!0)])):C("",!0)],64))),128))])}}});const ce=w(le,[["__scopeId","data-v-d65382b3"]]),_e={class:"userAvatar"},re=["src"],ue={class:"el-dropdown-link"},ie=k({__name:"avatar",props:["avatarsrc","username"],setup(i){const a=i,_=E(),l=B(),r=async()=>{await l.logout(),_.replace("login")};return(u,c)=>{const f=s("el-avatar"),h=s("arrow-down"),v=s("el-icon"),n=s("el-dropdown-item"),g=s("el-dropdown-menu"),x=s("el-dropdown");return o(),y("div",_e,[t(f,{size:40},{default:e(()=>[p("img",{src:a.avatarsrc},null,8,re)]),_:1}),t(x,{trigger:"click"},{dropdown:e(()=>[t(g,null,{default:e(()=>[t(n,{onClick:r},{default:e(()=>[z("退出登录")]),_:1})]),_:1})]),default:e(()=>[p("span",ue,[z($(a.username)+" ",1),t(v,{class:"el-icon--right"},{default:e(()=>[t(h)]),_:1})])]),_:1})])}}});const de=w(ie,[["__scopeId","data-v-55f13ea4"]]),pe={class:"topBarContainer"},me={class:"leftBar"},fe={class:"rightBtn"},he={class:"circleBtn"},ve=k({__name:"topBar",setup(i){const a=F(),_=B(),l=S(!1);j(async()=>{await _.getUserInfo()});const r=()=>{a.clickFold()},u=()=>{a.refreshFlag=!a.refreshFlag},c=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},f=()=>{const h=document.documentElement;l.value?h.className="dark":h.className=""};return(h,v)=>{const n=s("el-icon"),g=s("el-switch");return o(),y("div",pe,[p("div",me,[p("div",{class:"collapseBar",onClick:r},[t(n,{size:"20"},{default:e(()=>[(o(),d(b(m(a).isFold?"Expand":"Fold")))]),_:1})]),t(ce)]),p("div",fe,[p("div",he,[t(T,{iconName:"Refresh",onClick:u}),t(T,{iconName:"FullScreen",onClick:c}),t(g,{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=x=>l.value=x),class:"mt-2",size:"large",style:{"margin-left":"20px","--el-switch-on-color":"#2c2c2c","--el-switch-off-color":"#f3f3f3"},"inline-prompt":"","active-action-icon":"Moon","inactive-action-icon":"Sunny",onChange:f,onClick:v[1]||(v[1]=x=>h.$emit("changeDark",l.value))},null,8,["modelValue"])]),t(de,{avatarsrc:m(_).userInfo.avatar,username:m(_).userInfo.user},null,8,["avatarsrc","username"])])])}}});const ge=w(ve,[["__scopeId","data-v-5b2b7d0d"]]),ye=k({__name:"layout",setup(i){const a=B(),_=F();let l=S(!1),r=S("rgb(255, 255, 255)"),u=S("rgb(245, 245, 245)"),c=S("#001529");q(()=>_.refreshFlag,()=>{l.value=!0,W(()=>{l.value=!1})});const f=h=>{h?(r.value="transparent",u.value="transparent",c.value="transparent"):(r.value="rgb(255, 255, 255)",u.value="rgb(245, 245, 245)",c.value="#001529")};return(h,v)=>{const n=s("el-aside"),g=s("el-header"),x=s("router-view"),M=s("el-main"),L=s("el-container");return o(),d(L,{id:"layout_container"},{default:e(()=>[t(n,{id:"layout_left",class:O({fold:m(_).isFold}),style:I({"--layout-left":m(c)})},{default:e(()=>[t(Y),t(oe,{class:"navigationBar",menuList:m(a).routes},null,8,["menuList"])]),_:1},8,["class","style"]),t(L,{id:"layout_right"},{default:e(()=>[t(g,{id:"layout_tabber",style:I({"--layout-tabber":m(r)})},{default:e(()=>[t(ge,{onChangeDark:f})]),_:1},8,["style"]),t(M,{id:"layout_main",style:I({"--layout-main":m(u)})},{default:e(()=>[t(x,null,{default:e(({Component:U})=>[t(H,{name:"fade"},{default:e(()=>[m(l)?C("",!0):(o(),d(b(U),{key:0}))]),_:2},1024)]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})}}});const ke=w(ye,[["__scopeId","data-v-20b3dd66"]]);export{ke as default};
