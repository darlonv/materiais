"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[2596],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return o.createElement(p.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return t?o.createElement(k,l(l({ref:a},c),{},{components:t})):o.createElement(k,l({ref:a},c))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7353:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const n={},l="Protocolos",i={unversionedId:"RC/Camadas_de_protocolos/Protocolos",id:"RC/Camadas_de_protocolos/Protocolos",title:"Protocolos",description:"Um protocolo \xe9 um conjunto de regras que definem como ser\xe1 a realizada a comuni\xe7\xe3o entre partes envolvidas.",source:"@site/docs/RC/02-Camadas_de_protocolos/01-Protocolos.md",sourceDirName:"RC/02-Camadas_de_protocolos",slug:"/RC/Camadas_de_protocolos/Protocolos",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Protocolos",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/RC/02-Camadas_de_protocolos/01-Protocolos.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebarRC",previous:{title:"Ferramentas b\xe1sicas",permalink:"/materiais/docs/RC/Introducao/Ferramentas"},next:{title:"Sockets",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Sockets"}},p={},s=[{value:"Modelos de camadas de protocolos",id:"modelos-de-camadas-de-protocolos",level:2},{value:"OSI",id:"osi",level:3},{value:"TCP/IP",id:"tcpip",level:3},{value:"Encapsulamento",id:"encapsulamento",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],c={toc:s},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"protocolos"},"Protocolos"),(0,r.kt)("p",null,"Um protocolo \xe9 um conjunto de regras que definem como ser\xe1 a realizada a comuni\xe7\xe3o entre partes envolvidas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comunica\xe7\xe3o entre duas pessoas, A e B:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'A diz: "ol\xe1, bom dia."'),(0,r.kt)("li",{parentName:"ul"},'B diz: "bom dia."'),(0,r.kt)("li",{parentName:"ul"},'A diz: "que horas s\xe3o, por favor?"'),(0,r.kt)("li",{parentName:"ul"},'B diz: "s\xe3o 11 e 27."'),(0,r.kt)("li",{parentName:"ul"},'A diz: "obrigado."'),(0,r.kt)("li",{parentName:"ul"},'B diz: "de nada."')))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exemplo de protocolo. Comunica\xe7\xe3o entre duas pessoas A e B. A pessoa A diz: ol\xe1, bom dia. Em seguida, a pessoa B diz: bom dia. Em seguida a pessoa A diz: &quot;que horas s\xe3o, por favor?&quot;. B diz: &quot;S\xe3o 11 e 27&quot;. A diz: &quot;Obrigado&quot;. B diz: &quot;de nada&quot;.",src:t(879).Z,width:"612",height:"711"})),(0,r.kt)("h2",{id:"modelos-de-camadas-de-protocolos"},"Modelos de camadas de protocolos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/58"},"KUROSE 2013, p.35"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Por que utilizar modelos em camadas?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redes s\xe3o complexas;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Analogia com correios ou viagem a\xe9rea;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cada camada possui uma responsabilidade;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cada camada se comunica com a camada correspondente remota;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As regras definidas em cada camada s\xe3o conhecidas como ",(0,r.kt)("strong",{parentName:"p"},"protocolos"),";")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vantagens"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dividir as tarefas, diminuindo a complexidade;"),(0,r.kt)("li",{parentName:"ul"},"Modularidade, com camadas independentes;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modelo OSI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modelo de refer\xeancia;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modelo TCP/IP (Internet)"))),(0,r.kt)("h3",{id:"osi"},"OSI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aplica\xe7\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Apresenta\xe7\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Sess\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Transporte"),(0,r.kt)("li",{parentName:"ul"},"Rede"),(0,r.kt)("li",{parentName:"ul"},"Enlace"),(0,r.kt)("li",{parentName:"ul"},"F\xedsica")),(0,r.kt)("h3",{id:"tcpip"},"TCP/IP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aplica\xe7\xe3o"),(0,r.kt)("li",{parentName:"ul"},"Transporte"),(0,r.kt)("li",{parentName:"ul"},"Rede"),(0,r.kt)("li",{parentName:"ul"},"Enlace"),(0,r.kt)("li",{parentName:"ul"},"F\xedsica\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/60"},"KUROSE 2016, p.37")),(0,r.kt)("h2",{id:"encapsulamento"},"Encapsulamento"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Os pacotes da camada inferior transferem como dados os pacotes da camada superior.  "),(0,r.kt)("li",{parentName:"ul"},"O pacote em cada camada tem um nome")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/63"},"KUROSE 2016, p.40")),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/3843/pdf/"},"KUROSE, Jim; ROSS, Keith W. Redes de computadores e a internet: uma abordagem top-down. 6.ed. S\xe3o Paulo: Pearson, 2013. ISBN 9788581436777.")," (Link biblioteca online)  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/2610/pdf/17?code=vVkKzoXOaDOskeJv8esK3sZMysyPTg3HtAPyO3xsw/udBb1u+4g3HJxAzSb6zd3SV3dRGINqMpGo2TNJWfLQ8g=="},"TANENBAUM, Andrew S; WETHERAL, David. Redes de Computadores. 5.ed. S\xe3o Paulo: Pearson, 2011. ISBN 9788576059240."),"(Link biblioteca online)  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Outros materiais")))}d.isMDXComponent=!0},879:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/04-Protocolos-5a8e41c914e4e20eae3fda6210a6988f.png"}}]);