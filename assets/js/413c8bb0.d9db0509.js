"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[3370],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=l(e.components);return o.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||n;return t?o.createElement(f,s(s({ref:r},m),{},{components:t})):o.createElement(f,s({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<n;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const n={},s="Sockets",c={unversionedId:"RC/Camadas_de_protocolos/Exercicios/Sockets",id:"RC/Camadas_de_protocolos/Exercicios/Sockets",title:"Sockets",description:"1. O que s\xe3o sockets? para qu\xea servem?",source:"@site/docs/RC/02-Camadas_de_protocolos/99-Exercicios/05-Sockets.md",sourceDirName:"RC/02-Camadas_de_protocolos/99-Exercicios",slug:"/RC/Camadas_de_protocolos/Exercicios/Sockets",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Exercicios/Sockets",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/RC/02-Camadas_de_protocolos/99-Exercicios/05-Sockets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebarRC",previous:{title:"Protocolos",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Exercicios/Protocolos"},next:{title:"Apresenta\xe7\xf5es",permalink:"/materiais/docs/RC/Apresentacoes"}},i={},l=[],m={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sockets"},"Sockets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"O que s\xe3o sockets? para qu\xea servem?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Descreva como \xe9 realizada a comunica\xe7\xe3o entre cliente e servidor utilizando sockets.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Escreva um programa que crie um cliente simples que conecta a um servidor em uma porta espec\xedfica e envia uma mensagem, utilizando sockets.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Escreva um programa que crie um servidor simples que escuta em uma porta espec\xedfica e recebe uma mensagem, utilizando sockets. Ap\xf3s receber a mensagem, mostre a mensagem na tela.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modifique o cliente e o servidor do exerc\xedcio 1 e 2 para que eles possam enviar e receber mensagens de forma bidirecional, ou seja, o cliente envia uma mensagem para o servidor e o servidor responde.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Escreva um cliente e um servidor utilizando sockets, em que o cliente e o servidor trocam mensagens um de cada vez, formando um ",(0,a.kt)("em",{parentName:"p"},"chat")," s\xedncrono. ")),(0,a.kt)("li",{parentName:"ol"})))}u.isMDXComponent=!0}}]);