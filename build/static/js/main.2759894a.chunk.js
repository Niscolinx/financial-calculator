(this["webpackJsonpfinancial-calculator"]=this["webpackJsonpfinancial-calculator"]||[]).push([[0],{13:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(20),n=c.n(s),l=c(10),r=c(2),i=c(14),d=c(15),o=c.n(d),b=c(21),j=c(8),u=c(1),p=function(){var e,t=Object(a.useState)(""),c=Object(j.a)(t,2),s=c[0],n=c[1],l=Object(a.useState)(""),r=Object(j.a)(l,2),d=r[0],p=r[1],x=Object(a.useState)(""),m=Object(j.a)(x,2),h=m[0],O=m[1],f=Object(a.useState)(0),v=Object(j.a)(f,2),N=v[0],g=v[1],y=Object(a.useState)(""),C=Object(j.a)(y,2),w=C[0],k=C[1],I=Object(a.useState)([]),S=Object(j.a)(I,2),$=S[0],q=S[1],F=function(){var e=Object(b.a)(o.a.mark((function e(t){var c,a,n,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),s=Number(s),d=Number(d),h=Number(h),a=s+(c=s*(d/100)),g(c),k(a),n=[],l=0;l<=h;l++)s=a,c=Math.floor(s*(d/100)),a=Math.floor(s+c),n.push({capital:s,profit:c,finalCapital:a}),console.log(s,c,a);console.log(n),q(n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log($),Object(u.jsxs)("div",{className:"grid w-full place-content-stretch bg-white py-8 px-12 ",children:[Object(u.jsx)("h2",{className:"font-medium text-center text-[#1c124d] mb-4 text-2xl",children:"Financial Calculator"}),Object(u.jsxs)("div",{className:"grid gap-8",children:[Object(u.jsxs)("form",{className:"grid w-full",onSubmit:F,children:[Object(u.jsx)("input",{type:"number",id:"capital",className:"text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4",required:!0,value:s,placeholder:"Capital to Invest",onChange:function(e){n(e.target.value)}}),Object(u.jsx)("input",{type:"number",id:"percent",className:"text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4",required:!0,value:d,onChange:function(e){p(e.target.value)},placeholder:"Percentage"}),Object(u.jsx)("input",{type:"number",id:"duration",className:"text-black outline-none text-lg p-1 rounded-md justify-self-stretch placeholder-[#b2b7be] focus:border-black mb-4",required:!0,value:h,onChange:function(e){O(e.target.value)},placeholder:"duration"}),Object(u.jsx)("button",{className:" rounded-md outline-none  bg-[#0059dd] text-white text-sm",style:{padding:".5rem 3rem",lineHeight:2.5},children:"Calculate"})]}),Object(u.jsxs)("div",{className:"text-[#1c124d] border-2 rounded-md border-[#ccc] w-full py-4 px-6",children:[Object(u.jsx)("h4",{className:"font-medium text-center text-[#1c124d] mb-4 text-2xl",children:"Investment Details"}),Object(u.jsxs)("p",{children:["Invested Capital:"," ",Object(u.jsxs)("span",(e={className:"font-bold"},Object(i.a)(e,"className","font-bold"),Object(i.a)(e,"children",["$",s]),e))]}),Object(u.jsxs)("p",{children:["Percentage Increase:"," ",Object(u.jsx)("span",{className:"font-bold",children:d})]}),Object(u.jsxs)("div",{className:"mt-6",children:[Object(u.jsxs)("div",{className:"border-t",children:[Object(u.jsxs)("p",{children:["Initial Capital:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",s]})]}),Object(u.jsxs)("p",{children:["profit:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",N]})]}),Object(u.jsxs)("p",{children:["Final Capital:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",w]})]})]}),$&&$.map((function(e,t){return Object(u.jsxs)("div",{className:"border-t mt-2 relative",children:[Object(u.jsx)("span",{className:"absolute right-0 bg-[#1c124d] text-white p-1",children:t}),Object(u.jsxs)("p",{children:["Initial Capital:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",e.capital]})]}),Object(u.jsxs)("p",{children:["profit:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",e.profit]})]}),Object(u.jsxs)("p",{children:["Final Capital:"," ",Object(u.jsxs)("span",{className:"font-bold",children:["$",e.finalCapital]})]})]},t)}))]})]})]})]})},x=(c(13),c.p,function(){return Object(u.jsx)("div",{className:"grid ",children:Object(u.jsx)("div",{className:" grid gap-7",children:Object(u.jsx)("div",{className:"mx-2",children:Object(u.jsx)(p,{})})})})});var m=function(){return Object(u.jsx)("div",{className:"h-screen overflow-x-hidden justify-items-center",children:Object(u.jsx)("div",{className:"grid w-full md:mx-auto",children:Object(u.jsx)("div",{className:" mx-auto my-9",children:Object(u.jsx)(x,{})})})})};var h=Object(r.g)((function(){var e=Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{path:"/",exact:!0,component:m}),Object(u.jsx)(r.a,{to:"/"})]});return Object(u.jsx)("div",{className:"rootApp",children:e})})),O=(c(33),Object(u.jsx)(l.a,{children:Object(u.jsx)(h,{})}));n.a.render(O,document.getElementById("root"))}},[[34,1,2]]]);