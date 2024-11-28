import{_ as y}from"./UiChildCard.vue.3f44f28f.js";import{_ as D,a as o,o as l,g as m,w as e,f as n,d as k,r as x,c as C,e as t,i as V,F as B,j,b as c,t as T,k as H}from"./entry.31107928.js";const R={};function U(h,d){const s=o("v-card");return l(),m(s,{elevation:"0",title:"This is a title",subtitle:"This is a subtitle",text:"This is content"})}const L=D(R,[["render",U]]),M={};function Y(h,d){const s=o("v-card");return l(),m(s,{elevation:"0"},{title:e(()=>[n(" This is a title ")]),subtitle:e(()=>[n(" This is a subtitle ")]),text:e(()=>[n(" This is content ")]),_:1})}const I=D(M,[["render",Y]]),P=""+globalThis.__publicAssetsURL("images/blog/blog-img1.jpg"),J={class:"pa-3"},O=c("div",{class:"font-weight-bold ml-1 mb-2"},"Today",-1),q={class:"mb-4"},G={class:"font-weight-normal"},K=k({__name:"CardsContentWrap",setup(h){const d=x([{from:"You",message:"Sure, I'll see you later.",time:"10:42am",color:"primary"},{from:"John Doe",message:"Yeah, sure. Does 1:00pm work?",time:"10:37am",color:"secondary"},{from:"You",message:"Did you still want to grab lunch today?",time:"9:47am",color:"success"}]);return(s,a)=>{const i=o("v-app-bar-nav-icon"),g=o("v-toolbar-title"),_=o("v-icon"),r=o("v-app-bar"),p=o("v-layout"),u=o("v-img"),$=o("v-timeline-item"),W=o("v-timeline"),w=o("v-card-text"),b=o("v-card"),S=o("v-row");return l(),C("div",J,[t(S,{justify:"space-around"},{default:e(()=>[t(b,{elevation:"0"},{default:e(()=>[t(u,{height:"200",src:V(P),cover:"",class:"text-white"},{default:e(()=>[t(p,{"full-height":""},{default:e(()=>[t(r,{density:"comfortable",color:"rgba(0, 0, 0, 0)",flat:"",theme:"dark"},{prepend:e(()=>[t(i)]),append:e(()=>[t(_,{icon:"mdi-dots-vertical"})]),default:e(()=>[t(g,{class:"text-subtitle-1"},{default:e(()=>[n(" Messages ")]),_:1})]),_:1})]),_:1})]),_:1},8,["src"]),t(w,null,{default:e(()=>[O,t(W,{density:"compact"},{default:e(()=>[(l(!0),C(B,null,j(d.value,v=>(l(),m($,{key:v.time,"dot-color":v.color,size:"x-small"},{default:e(()=>[c("div",q,[c("div",G,[c("strong",null,T(v.from),1),n(" @"+T(v.time),1)]),c("div",null,T(v.message),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Q=""+globalThis.__publicAssetsURL("images/blog/blog-img4.jpg"),X=c("div",null,"Whitehaven Beach",-1),Z=c("div",null,"Whitsunday Island, Whitsunday Islands",-1),tt=k({__name:"CardsMedia",setup(h){return(d,s)=>{const a=o("v-card-title"),i=o("v-img"),g=o("v-card-subtitle"),_=o("v-card-text"),r=o("v-btn"),p=o("v-card-actions"),u=o("v-card");return l(),m(u,{elevation:"0"},{default:e(()=>[t(i,{class:"align-end text-white",height:"200",src:V(Q),cover:""},{default:e(()=>[t(a,null,{default:e(()=>[n("Top 10 Australian beaches")]),_:1})]),_:1},8,["src"]),t(g,{class:"pt-4"},{default:e(()=>[n(" Number 10 ")]),_:1}),t(_,null,{default:e(()=>[X,Z]),_:1}),t(p,null,{default:e(()=>[t(r,{color:"orange"},{default:e(()=>[n(" Share ")]),_:1}),t(r,{color:"orange"},{default:e(()=>[n(" Explore ")]),_:1})]),_:1})]),_:1})}}}),et={class:"d-flex py-3 justify-space-between"},ot={key:0},nt={class:"py-2"},st=k({__name:"CardsWeather",setup(h){const d=x({0:"SU",1:"MO",2:"TU",3:"WED",4:"TH",5:"FR",6:"SA"}),s=x(!1),a=x(0),i=x([{day:"Tuesday",icon:"mdi-white-balance-sunny",temp:"24°/12°"},{day:"Wednesday",icon:"mdi-white-balance-sunny",temp:"22°/14°"},{day:"Thursday",icon:"mdi-cloud",temp:"25°/15°"}]);return(g,_)=>{const r=o("v-icon"),p=o("v-card-item"),u=o("v-col"),$=o("v-row"),W=o("v-card-text"),w=o("v-list-item-subtitle"),b=o("v-list-item"),S=o("v-slider"),v=o("v-list"),F=o("v-expand-transition"),N=o("v-divider"),z=o("v-btn"),A=o("v-card-actions"),E=o("v-card");return l(),m(E,{class:"mx-auto",elevation:"0"},{default:e(()=>[t(p,{title:"Florida"},{subtitle:e(()=>[t(r,{icon:"mdi-alert",size:"18",color:"error",class:"me-1 pb-1"}),n(" Extreme Weather Alert ")]),_:1}),t(W,{class:"py-0"},{default:e(()=>[t($,{align:"center","no-gutters":""},{default:e(()=>[t(u,{class:"text-h3",cols:"6"},{default:e(()=>[n(" 64°F ")]),_:1}),t(u,{cols:"6",class:"text-right"},{default:e(()=>[t(r,{color:"error",icon:"mdi-weather-hurricane",size:"40"})]),_:1})]),_:1})]),_:1}),c("div",et,[t(b,{density:"compact","prepend-icon":"mdi-weather-windy"},{default:e(()=>[t(w,null,{default:e(()=>[n("123 km/h")]),_:1})]),_:1}),t(b,{density:"compact","prepend-icon":"mdi-weather-pouring"},{default:e(()=>[t(w,null,{default:e(()=>[n("48%")]),_:1})]),_:1})]),t(F,null,{default:e(()=>[s.value?(l(),C("div",ot,[c("div",nt,[t(S,{modelValue:a.value,"onUpdate:modelValue":_[0]||(_[0]=f=>a.value=f),max:6,step:1,ticks:d.value,class:"mx-4",color:"primary",density:"compact","hide-details":"","show-ticks":"always","thumb-size":"10"},null,8,["modelValue","ticks"])]),t(v,{class:"bg-transparent"},{default:e(()=>[(l(!0),C(B,null,j(i.value,f=>(l(),m(b,{key:f.day,title:f.day,"append-icon":f.icon,subtitle:f.temp},null,8,["title","append-icon","subtitle"]))),128))]),_:1})])):H("",!0)]),_:1}),t(N),t(A,null,{default:e(()=>[t(z,{onClick:_[1]||(_[1]=f=>s.value=!s.value)},{default:e(()=>[n(T(s.value?"Hide Report":"Full Report"),1)]),_:1})]),_:1})]),_:1})}}}),at={},ct={class:"justify-self-end"},lt=c("span",{class:"subheading me-2"},"256",-1),_t=c("span",{class:"me-1"},"·",-1),it=c("span",{class:"subheading"},"45",-1);function rt(h,d){const s=o("v-icon"),a=o("v-card-text"),i=o("v-avatar"),g=o("v-list-item-title"),_=o("v-list-item-subtitle"),r=o("v-list-item"),p=o("v-card-actions"),u=o("v-card");return l(),m(u,{class:"mx-auto",color:"#26c6da",theme:"dark","max-width":"450","prepend-icon":"mdi-twitter",title:"Twitter",elevation:"0"},{prepend:e(()=>[t(s,{size:"x-large"})]),default:e(()=>[t(a,{class:"text-h5 py-2"},{default:e(()=>[n(' "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well." ')]),_:1}),t(p,null,{default:e(()=>[t(r,{class:"w-100"},{prepend:e(()=>[t(i,{color:"grey-darken-3",image:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"})]),append:e(()=>[c("div",ct,[t(s,{class:"me-1",icon:"mdi-heart"}),lt,_t,t(s,{class:"me-1",icon:"mdi-share-variant"}),it])]),default:e(()=>[t(g,null,{default:e(()=>[n("Evan You")]),_:1}),t(_,null,{default:e(()=>[n("Vue Creator")]),_:1})]),_:1})]),_:1})]),_:1})}const dt=D(at,[["render",rt]]),pt=k({__name:"Cards",setup(h){return(d,s)=>{const a=o("v-col"),i=o("v-row");return l(),m(i,null,{default:e(()=>[t(a,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(y,{title:"With Props"},{default:e(()=>[t(L)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(y,{title:"With Slots"},{default:e(()=>[t(I)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{title:"Content Wrap"},{default:e(()=>[t(K)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{title:"Card Media"},{default:e(()=>[t(tt)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"6",class:"d-flex align-items-stretch"},{default:e(()=>[t(y,{title:"Weather Card"},{default:e(()=>[t(st)]),_:1})]),_:1}),t(a,{cols:"12",sm:"12",lg:"6"},{default:e(()=>[t(y,{title:"Twitter Card"},{default:e(()=>[t(dt)]),_:1})]),_:1})]),_:1})}}});export{pt as default};
