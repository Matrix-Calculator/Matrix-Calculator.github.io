(this["webpackJsonpmatrix-site"]=this["webpackJsonpmatrix-site"]||[]).push([[0],{26:function(e,t,n){},35:function(e,t){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(20),i=n.n(a),o=(n(26),n(3)),s=n(4),l=n(21),u=n.n(l),d=n(44),j=n(14),b=n(15),h=function(){function e(t){Object(j.a)(this,e),this.isFailure=!1;try{this.value=Object(d.c)("undefined"!==typeof t&&null!==t&&""!==t?t:"0")}catch(n){console.log('Unable to process matrix with value "'.concat(t,'"')),this.value=Object(d.c)("0"),this.isFailure=!0}this.display=this.toString()}return Object(b.a)(e,[{key:"toString",value:function(){var e=this.value.n;return-1===this.value.s&&(e="-"+e),1!==this.value.d&&(e=e+"/"+this.value.d),e}}]),e}(),m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(j.a)(this,e),this.rowCount=t.length,this.columnCount=t[0].length,this.impactedRows=n,this.data=[];for(var c=0;c<this.rowCount;c++){for(var r=[],a=0;a<this.columnCount;a++)r.push(new h(t[c][a].display));this.data.push(r)}}return Object(b.a)(e,[{key:"hasChanged",value:function(e,t){for(var n=0;n<e.length;n++)if(!Object(d.b)(e[n].value,t[n].value))return!0;return!1}},{key:"add",value:function(t,n,c){var r=this;console.log("got inside of add");var a=Object(o.a)(this.data[c]);if(console.log("got inside of add"),a=a.map((function(e,c){return console.log(e.value,r.data[t][c].value,n),new h(Object(d.a)(e.value,Object(d.d)(r.data[t][c].value,n)))})),console.log("got inside of add"),this.hasChanged(this.data[c],a))return console.log("got inside of add"),new e(this.data.map((function(e,t){return t===c?a:e})),[c]);console.log("Nothing is changing!")}},{key:"multiply",value:function(t,n){var c=Object(o.a)(this.data[t]);if(c=c.map((function(e){return new h(Object(d.d)(e.value,n))})),this.hasChanged(this.data[t],c))return new e(this.data.map((function(e,n){return n===t?c:e})),[t]);console.log("You failure, nothing changed!!")}},{key:"swap",value:function(t,n){var c=this;if(this.hasChanged(this.data[t],this.data[n]))return new e(this.data.map((function(e,r){return r===t?c.data[n]:r===n?c.data[t]:e})),[t,n]);console.log("Those are the same! Nothing change!")}}],[{key:"fromSize",value:function(t,n){for(var c=[],r=0;r<t;r++){for(var a=[],i=0;i<n;i++)a.push(new h("123"));c.push(a)}return new e(c)}}]),e}(),f=n.p+"static/media/GoHawk.25ecaf2a.png",p=(n(36),n(0)),O=function(e){var t=e.removeBirds,n=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:"Matrix Calculator"})}),Object(p.jsx)("div",{id:"bar"}),Object(p.jsx)("div",{id:"inside",children:n}),t||Object(p.jsx)("img",{id:"leftImage",alt:"",src:f}),t||Object(p.jsx)("img",{id:"rightImage",alt:"",src:f}),Object(p.jsx)("footer",{children:Object(p.jsxs)("p",{className:"authors",children:["M",Object(p.jsx)("a",{id:"rickRoll",tabIndex:"-1",rel:"noreferrer noopener",target:"_blank",href:"https://youtu.be/dQw4w9WgXcQ",children:"a"}),"de By:"," ",Object(p.jsx)("a",{href:"mailto:wyattspree@gmail.com",rel:"noreferrer noopener",tabIndex:"-1",target:"_blank",children:"Wyatt Spree"})," & ",Object(p.jsx)("a",{href:"mailto:gaston95g@gmail.com",tabIndex:"-1",rel:"noreferrer noopener",target:"_blank",children:"Gaston Gonnerman"})]})})]})},x=(n(38),function(e){for(var t=e.onSubmit,n=[],c=1;c<11;c++)n.push(Object(p.jsx)("option",{value:c,children:c},c));return Object(p.jsx)("div",{className:"vcenter hcenter full",children:Object(p.jsxs)("div",{className:"floating front",children:[Object(p.jsx)("p",{className:"inner-text instructions",children:'Please select the dimensions for a matrix m x n then click the "Submit" button'}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"offset",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsxs)("label",{htmlFor:"rowCount",children:["Number of rows: m ="," "]}),Object(p.jsx)("select",{id:"rowCount",children:n})]}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsxs)("li",{children:[Object(p.jsxs)("label",{htmlFor:"columnCount",children:["Number of columns: n ="," "]}),Object(p.jsx)("select",{id:"columnCount",style:{marginRight:"1em"},children:n})]})]})}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"specialbutton submit",onClick:function(){var e=document.getElementById("rowCount").value,n=document.getElementById("columnCount").value;t(e,n)},children:"Submit"})]})})}),v=function(e){var t=e.id,n=e.value,c=e.onUpdate;return Object(p.jsx)("input",{value:n,onChange:function(e){return c(t,e)}})},g=function(e,t){return e.value===t.value},w=Object(c.memo)(v,g),y=function(e){var t=e.values,n=e.onUpdate;return Object(p.jsx)("div",{className:"matrix wrapper",children:t.map((function(e,t){return e.map((function(c,r){return Object(p.jsx)(w,{id:t*e.length+r,value:c,onUpdate:n},t*e.length+r)}))}))})},C=(n(39),function(e){var t=e.rowCount,n=e.columnCount,r=e.onSubmit,a=e.reset,i=[],o=Object(c.useState)([]),l=Object(s.a)(o,2),u=l[0],d=l[1];return Object(c.useEffect)((function(){for(var e=[],c=0;c<t;c++){for(var r=[],a=0;a<n;a++)r.push("");e.push(r)}d(e)}),[]),Object(p.jsx)("div",{className:"vcenter hcenter full",children:Object(p.jsxs)("div",{className:"floating front",children:[Object(p.jsxs)("div",{className:"inner-text instructions",children:[Object(p.jsx)("div",{style:{textAlign:"center"},children:"Please enter the elements of your matrix. Fields left empty will be interpreted as 0."}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{textAlign:"center"},children:'You may use any mix of fractions and decimals. When you are done please click the "Submit" button.'})]}),Object(p.jsx)("br",{}),Object(p.jsx)(y,{values:u,failures:i,onUpdate:function(e,t){var c=Math.floor(e/n),r=e%n,a=t.target.value;a.match("[^0-9-/.]")||d((function(e){return e.map((function(e,t){return e.map((function(e,n){return t===c&&n===r?a:e}))}))}))}}),Object(p.jsx)("br",{})," ",Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"specialbutton reset",tabIndex:"-1",onClick:a,children:"Reset"}),Object(p.jsx)("button",{className:"specialbutton submit",onClick:function(){for(var e=[],c=[],a=0;a<t;a++){for(var o=[],s=0;s<n;s++){var l=new h(u[a][s]);console.log(l),l.isFailure&&c.push([a,s,u[a][s]]),o.push(l)}e.push(o)}if(console.log(c),c.length>0)return i=c,void alert("Unable to processes at position: value\n"+c.map((function(e){return"    [".concat(e[0]+1,", ").concat(e[1]+1,']: "').concat(e[2],'"')})).join("\n"));r(e)},children:"Submit"})]})})}),N=(n(40),function(e){var t=e.id,n=e.matrix,c=e.onClick,r=e.ignoreTransformations;return Object(p.jsx)("div",{className:"matrix wrapper",onClick:function(){return c&&c(t)},children:n&&n.data.flat().map((function(e,t){return Object(p.jsx)("span",{style:{fontWeight:-1===n.impactedRows.indexOf(Math.floor(t/n.columnCount))||r?"normal":"bold"},children:e.display},t)}))})}),S=function(e,t){return t.activeId!==t.id},k=Object(c.memo)(N,S),I=(n(41),function(e){var t=e.options,n=e.action;return Object(p.jsxs)("div",{className:"inner-text",children:["Add row",Object(p.jsx)("select",{id:"addFrom",children:t}),Object(p.jsx)("span",{children:"multiplied by"}),Object(p.jsx)("input",{id:"addMultiplier",placeholder:"0"})," to row",Object(p.jsx)("select",{id:"addTo",children:t}),Object(p.jsx)("button",{onClick:function(){var e=Math.floor(document.getElementById("addFrom").value)-1,t=document.getElementById("addMultiplier").value,c=Math.floor(document.getElementById("addTo").value)-1;n(e,t,c)},children:"Confirm"})]})}),E=function(e){var t=e.options,n=e.action;return Object(p.jsxs)("div",{className:"inner-text",children:["Multiply row",Object(p.jsx)("select",{id:"multiplyTo",children:t}),Object(p.jsx)("span",{children:"by"}),Object(p.jsx)("input",{id:"multiplyScalar",placeholder:"1"}),Object(p.jsx)("button",{onClick:function(){var e=Math.floor(document.getElementById("multiplyTo").value)-1,t=document.getElementById("multiplyScalar").value;n(e,t)},children:"Confirm"})]})},A=function(e){var t=e.options,n=e.action;return Object(p.jsxs)("div",{className:"inner-text",children:["Swap rows",Object(p.jsx)("select",{id:"swapA",children:t}),Object(p.jsx)("span",{children:"and"}),Object(p.jsx)("select",{id:"swapB",children:t}),Object(p.jsx)("button",{onClick:function(){var e=Math.floor(document.getElementById("swapA").value)-1,t=Math.floor(document.getElementById("swapB").value)-1;n(e,t)},children:"Confirm"})]})},M=function(e){for(var t=e.height,n=e.add,c=e.multiply,r=e.swap,a=[],i=1;i<=t;i++)a.push(Object(p.jsx)("option",{value:i,children:i},i));var o=function(e){return document.getElementById(e).value=1},s=function(e){return document.getElementById(e).value=""},l=function(){o("addFrom"),s("addMultiplier"),o("addTo"),o("multiplyTo"),s("multiplyScalar"),o("swapA"),o("swapB")},u=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return e.apply(void 0,n)&&l()};return Object(p.jsxs)("div",{id:"controls",children:[Object(p.jsx)(I,{options:a,action:function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return u.apply(void 0,[n].concat(t))}}),Object(p.jsx)("br",{}),Object(p.jsx)(E,{options:a,action:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.apply(void 0,[c].concat(t))}}),Object(p.jsx)("br",{}),Object(p.jsx)(A,{options:a,action:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.apply(void 0,[r].concat(t))}}),Object(p.jsx)("br",{})]})},B=function(e){var t=e.matrix,n=e.add,r=e.multiply,a=e.swap,i=e.fakeUpdate;return Object(c.useEffect)((function(){t||i()})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"inner-text instructions",style:{textAlign:"center"},children:"Please select one of the below operations to manipulate the primary matrix."}),Object(p.jsx)(k,{matrix:t,ignoreTransformations:!0},Math.random()),Object(p.jsx)("br",{}),Object(p.jsx)(M,{height:t&&t.rowCount||0,add:n,multiply:r,swap:a})]})},U=function(e){var t=e.message;return Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{style:{fontSize:"25px"},children:"\u2193"}),t[0].toString(),Object(p.jsx)("span",{className:"standout",children:t[1]}),t[2].toString(),Object(p.jsx)("span",{className:"standout",children:t[3]}),t[4].toString(),Object(p.jsx)("span",{className:"standout",children:t[5]}),Object(p.jsx)("span",{style:{fontSize:"25px"},children:"\u2193"})]})},F=function(e){var t=e.matricies,n=e.messages,r=e.id,a=e.setId;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{style:{textAlign:"center"},children:"Dynamic History (Click on any matrix to revert to it)"}),t.map((function(e,t){return Object(p.jsxs)(c.Fragment,{children:[t>0&&Object(p.jsx)(U,{message:n[t-1]}),Object(p.jsx)("div",{id:t,className:t===r?"active":"",children:Object(p.jsx)(k,{onClick:a,matrix:e,activeId:r,id:t},t)},t)]},t)}))]})},R=function(e,t){return e.id===t.id},T=Object(c.memo)(F,R),W=function(e){var t=e.id,n=e.messages,r=e.matricies,a=e.share,i=e.setId,o=e.add,l=e.multiply,u=e.swap,d=e.reset,j=e.fakeUpdate,b=Object(c.useState)(window.innerWidth>1e3),h=Object(s.a)(b,2),m=h[0],f=h[1];return Object(c.useEffect)((function(){window.addEventListener("resize",(function(){f(window.innerWidth>1e3)}))})),Object(c.useEffect)((function(){m&&document.getElementById("bottom").scrollIntoView()}),[r,m]),m?Object(p.jsxs)("div",{id:"primaryLayout",children:[Object(p.jsx)("div",{className:"vcenter hcenter dontoverflow",children:Object(p.jsxs)("div",{className:"floating front",children:[Object(p.jsx)("div",{className:"hcenter activeMatrix",children:Object(p.jsx)(B,{matrix:r[t],add:o,multiply:l,swap:u,fakeUpdate:j})}),Object(p.jsxs)("div",{className:"tooltip",children:[Object(p.jsx)("button",{className:"specialbutton reset",onClick:d,tabIndex:"-1",children:"Reset"}),Object(p.jsxs)("button",{className:"share",onClick:a,children:[Object(p.jsx)("span",{className:"tooltiptext",id:"myTooltip",children:"Copied URL"}),"Share"]})]})]})}),Object(p.jsx)("div",{className:"vcenter hcenter dontoverflow",children:Object(p.jsx)("div",{className:"floating front scrollbarParent",children:Object(p.jsxs)("div",{className:"hcenter scrollbar",children:[Object(p.jsx)(T,{matricies:r,messages:n,id:t,setId:i}),Object(p.jsx)("div",{id:"bottom"})]})})})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"vcenter hcenter full dontoverflow",children:Object(p.jsx)("div",{className:"floating front scrollbarParent",children:Object(p.jsxs)("div",{className:"hcenter scrollbar",children:[Object(p.jsx)(B,{matrix:r[t],add:o,multiply:l,swap:u,fakeUpdate:j}),Object(p.jsxs)("div",{className:"tooltip",style:{width:"100%"},children:[Object(p.jsx)("button",{tabIndex:"-1",className:"specialbutton reset",onClick:d,children:"Reset"}),Object(p.jsxs)("button",{className:"share",onClick:a,children:[Object(p.jsx)("span",{className:"tooltiptext",id:"myTooltip",children:"Copied URL"}),"Share"]})]}),Object(p.jsx)(T,{matricies:r,messages:n,id:t,setId:i})]})})})})},P=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(s.a)(a,2),l=i[0],j=i[1],b=Object(c.useState)([]),f=Object(s.a)(b,2),v=f[0],g=f[1],w=Object(c.useState)([]),y=Object(s.a)(w,2),N=y[0],S=y[1],k=Object(c.useState)([]),I=Object(s.a)(k,2),E=I[0],A=I[1],M=Object(c.useState)([""]),B=Object(s.a)(M,2),U=B[0],F=B[1],R=function(e){j(e)},T=function(){r(0),R(0),g([]),S([]),A([]),F([])},P=function(e){return e.charCodeAt(0)-97};Object(c.useEffect)((function(){var e=new URLSearchParams(document.location.search.substring(0));window.history.replaceState("","","?");var t=e.get("share");if(t){var n=t.lastIndexOf("]")+1,c=t.substr(0,n),a=t.substr(n),i=c.split("],[").map((function(e){return e.replace("[","").replace("]","").split(",").map((function(e){return new h(e)}))}));a&&(a=a.match(new RegExp("[A-Z][^A-Z]*","g")).map((function(e){return e.toLowerCase()})),A(a.map((function(e){var t=new RegExp("[A-Za-z]+"),n=0,c=[];return c.push(P(e.charAt(0))),(e=e.substr(1))[e.length-1].match(t)&&(n=1===e.length?1:2),0!==n&&(c.push(P(e.charAt(e.length-1))),e=e.substr(0,e.length-1)),1!==n&&c.splice(1,0,e),[n].concat(c)})))),console.log("First",i),console.log("Op",E),document.documentElement.style.setProperty("--matrixColumnCount",i[0].length),R(0),r(2),S([new m(i)])}}),[]),Object(c.useEffect)((function(){if(0!==E.length){var e=Object(o.a)(E).shift(),t=e.shift();0===t?(console.log("Mult",e),H.apply(void 0,Object(o.a)(e))):1===t?J.apply(void 0,Object(o.a)(e)):2===t&&_.apply(void 0,Object(o.a)(e)),A((function(e){return e.slice(1)}))}}),[E]),Object(c.useEffect)((function(){R((function(e){return e}))}),[n,N]);var z=function(e,t){if(console.log("on op"),L(e))return G(t),R((function(e){return e+1})),!0},L=function(e){if(!e)return!1;var t=Object(o.a)(N);return t=t.slice(0,l+1),console.log("Matricies",t),S([].concat(Object(o.a)(t),[e])),!0},G=function(e){for(;e.length<6;)e.push("");g((function(t){var n=t.slice(0,l);return n.push(e.map((function(e){return e.toString()}))),console.log("Messages",n),n}))},Z=function(e){return String.fromCharCode(e+97)},_=function(e,t,n){try{return F((function(c){return[].concat(Object(o.a)(Object(o.a)(c).slice(0,l+1)),["".concat(Z(e).toUpperCase()).concat(new h(t)).concat(Z(n))])})),z(N[l].add(e,Object(d.c)(t),n),["Added row ",e+1," times ",new h(t)," to row ",n+1])}catch(c){console.log("Error when adding")}},H=function(e,t){console.log(e,t);try{return F((function(n){return[].concat(Object(o.a)(Object(o.a)(n).slice(0,l+1)),["".concat(Z(e).toUpperCase()).concat(new h(t))])})),console.log(l),console.log(N),z(N[l].multiply(e,Object(d.c)(t)),["Multiplied row ",e+1," by ",new h(t)])}catch(n){console.log("Error when multiplying")}},J=function(e,t){return F((function(n){return[].concat(Object(o.a)(Object(o.a)(n).slice(0,l+1)),["".concat(Z(e).toUpperCase()).concat(Z(t))])})),z(N[l].swap(e,t),["Swapped rows ",e+1," and ",t+1])};return 0===n?Object(p.jsx)(O,{children:Object(p.jsx)(x,{onSubmit:function(e,t){S([m.fromSize(e,t)]),document.documentElement.style.setProperty("--matrixColumnCount",t),r(1)}})}):1===n?Object(p.jsx)(O,{children:Object(p.jsx)(C,{rowCount:N[0].rowCount,columnCount:N[0].columnCount,onSubmit:function(e){S([new m(e)]),r(2)},reset:T})}):2===n?Object(p.jsx)(O,{removeBirds:!0,children:Object(p.jsx)(W,{id:l,messages:v,matricies:N,share:function(){for(var e=N[0],t=[],n=0;n<e.rowCount;n++){for(var c=[],r=0;r<e.columnCount;r++)c.push(e.data[n][r].toString());t.push("["+c.join(",")+"]")}t=t.join(",");var a=U.slice(0,l+1).join("");console.log("Cur",U),u()("https://gastongonnerman.com/?share="+t+a)},setId:R,add:_,multiply:H,swap:J,reset:T,fakeUpdate:function(){console.log("AWWWW"),R((function(e){return e}))}})}):Object(p.jsx)("p",{children:"ERROR"})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bc032cdd.chunk.js.map