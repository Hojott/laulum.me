(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{621:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/songs/[slug]",function(){return n(8542)}])},9418:function(e,t,n){"use strict";n.d(t,{x:function(){return i}});var r=n(5893),l=n(7294),a=n(1163),s=n(7966),o=n(7427),c=n.n(o);let i=()=>{let e=function(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>t(!0),[]),e}(),t=(0,a.useRouter)(),n=(0,l.useCallback)(()=>t.back(),[t]);return e?(0,r.jsx)("button",{onClick:n,className:"".concat(c().link," ").concat(c().primary),style:{cursor:"pointer"},children:"Back"}):(0,r.jsx)(s.r,{variant:"primary",href:"/",children:"Back"})}},4260:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893);let l=e=>{let{style:t,...n}=e;return(0,r.jsx)("footer",{style:{marginBlock:"2rem",...t},...n})}},6767:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var r=n(5893),l=n(5675),a=n.n(l),s=n(8141),o=n.n(s);let c=e=>{let{size:t=72,...n}=e;return(0,r.jsx)("a",{href:"https://tko-aly.fi",target:"_blank",rel:"noreferrer noopener",...n,children:(0,r.jsx)(a(),{className:o().logo,src:"/logo.svg",width:t,height:t,alt:"Logo of TKO-\xe4ly ry"})})},i=e=>{let{children:t,style:n,...l}=e;return(0,r.jsxs)("header",{style:{display:"flex",gap:"1rem",alignItems:"center",height:"5rem",...n},...l,children:[t,(0,r.jsx)(c,{style:{marginLeft:"auto"}})]})}},6798:function(e,t,n){"use strict";n.d(t,{Aj:function(){return o},R8:function(){return s}});var r=n(9881);let l="https://laulum.me/",a=(e,t)=>{let n=new URL("https://t.me/share/url");return n.searchParams.set("url",e),t&&n.searchParams.set("text",t),n.toString()},s=(e,t)=>{let n=new URL("/songs/".concat((0,r.Z)(e.title)),null!=t?t:l).toString(),s="**".concat(e.title,"**\n");e.melody&&(s+="(melody ".concat(e.melody,")"));let o=s;o+="\n\n"+e.lyrics;let c=a(n,o);return new TextEncoder().encode(c).length<4096?c:a(n,s)},o=(e,t)=>{let n=new URL("/books/".concat(e.name),null!=t?t:l);return a(n.toString())}},9881:function(e,t){"use strict";let n=e=>{e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();let t="\xe0\xe1\xe4\xe2\xe8\xe9\xeb\xea\xec\xed\xef\xee\xf2\xf3\xf6\xf4\xf9\xfa\xfc\xfb\xf1\xe7\xb7/_,:;";for(let n=0,r=t.length;n<r;n++)e=e.replace(RegExp(t.charAt(n),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(n));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")};t.Z=n},8542:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h}});var r=n(5893),l=n(9008),a=n.n(l),s=n(4260),o=n(6767),c=n(7966),i=n(6798),u=n(9881),m=n(9418);let x=e=>{let{song:t}=e,n="".concat(t.title," | laulum.me"),l=(0,u.Z)(t.title);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:"".concat(t.title," on laulum.me")}),(0,r.jsx)("meta",{name:"description",content:"Lyrics for ".concat(t.title).concat(t.writers?" by ".concat(t.writers):"")}),(0,r.jsx)("meta",{name:"keywords",content:"".concat(t.title,", sitsit, laulu, sitsilaulu, sanat, lyrics, laulum.me, tko-\xe4ly, sitz, table party, academic table party, p\xf6yt\xe4juhla")}),(0,r.jsx)("meta",{name:"og:title",content:"♫ ".concat(t.title)}),(0,r.jsx)("meta",{name:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"og:image",content:"https://laulum.me/icons/apple-touch-icon.png"}),(0,r.jsx)("meta",{name:"og:url",content:"https://laulum.me/songs/".concat(l)}),(0,r.jsx)("meta",{name:"og:description",content:"Lyrics for the song ".concat(t.title,".")}),(0,r.jsx)("meta",{name:"og:site_name",content:"laulum.me"})]}),(0,r.jsxs)(o.h,{children:[(0,r.jsx)(m.x,{}),(0,r.jsx)(c.r,{href:(0,i.R8)(t),variant:"telegram",target:"_blank",rel:"noreferrer noopener",children:"Share on Telegram"})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)("h1",{children:t.title}),t.writers&&(0,r.jsxs)("em",{style:{display:"block"},children:["Written by ",t.writers]}),t.melody&&(0,r.jsxs)("em",{style:{display:"block"},children:["Melody: ",t.melody]}),(0,r.jsx)("pre",{style:{fontFamily:"Times New Roman, serif",maxWidth:"fit-content",whiteSpace:"pre-line",fontSize:"1.3rem",lineHeight:"2rem"},children:t.lyrics})]}),(0,r.jsx)(s.$,{children:(0,r.jsx)(c.r,{href:"https://github.com/TKOaly/laulum.me/edit/main/songs/".concat(t.filename),target:"_blank",rel:"noreferrer noopener",variant:"secondary",children:"Suggest an edit to this song"})})]})};var h=!0;t.default=x},8141:function(e){e.exports={logo:"Logo_logo__HEXJH"}}},function(e){e.O(0,[873,774,888,179],function(){return e(e.s=621)}),_N_E=e.O()}]);