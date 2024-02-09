"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[3905],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>k});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},m=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(o),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||s;return o?t.createElement(k,n(n({ref:a},m),{},{components:o})):t.createElement(k,n({ref:a},m))}));function k(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=o.length,n=new Array(s);n[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:r,n[1]=i;for(var p=2;p<s;p++)n[p]=o[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7813:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=o(7462),r=(o(7294),o(3905));const s={},n="Tipos primitivos de dados",i={unversionedId:"Algoritmos/Basicos/Tipos_primitivos_de_dados",id:"Algoritmos/Basicos/Tipos_primitivos_de_dados",title:"Tipos primitivos de dados",description:"Os dados compreendem a mat\xe9ria-prima b\xe1sica a execu\xe7\xe3o dos sistemas computacionais. Com eles podemos process\xe1-los, transform\xe1los, armazen\xe1-los e apresent\xe1-los, ou seja, as tarefas que um computador \xe9 capaz de realizar.",source:"@site/docs/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.md",sourceDirName:"Algoritmos/02-Basicos",slug:"/Algoritmos/Basicos/Tipos_primitivos_de_dados",permalink:"/materiais/docs/Algoritmos/Basicos/Tipos_primitivos_de_dados",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebarAlgoritmos",previous:{title:"Estrutura b\xe1sica",permalink:"/materiais/docs/Algoritmos/Basicos/Estrutura_basica"},next:{title:"Constantes e Vari\xe1veis",permalink:"/materiais/docs/Algoritmos/Basicos/Variaveis"}},l={},p=[{value:"Inteiro",id:"inteiro",level:2},{value:"Real",id:"real",level:2},{value:"Caractere",id:"caractere",level:2},{value:"L\xf3gico",id:"l\xf3gico",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2},{value:"Apresenta\xe7\xf5es",id:"apresenta\xe7\xf5es",level:2}],m={toc:p},u="wrapper";function d(e){let{components:a,...o}=e;return(0,r.kt)(u,(0,t.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tipos-primitivos-de-dados"},"Tipos primitivos de dados"),(0,r.kt)("p",null,"Os dados compreendem a mat\xe9ria-prima b\xe1sica a execu\xe7\xe3o dos sistemas computacionais. Com eles podemos process\xe1-los, transform\xe1los, armazen\xe1-los e apresent\xe1-los, ou seja, as tarefas que um computador \xe9 capaz de realizar."),(0,r.kt)("p",null,"\xc9 necess\xe1rio observar a diferen\xe7a entre ",(0,r.kt)("strong",{parentName:"p"},"dado")," e ",(0,r.kt)("strong",{parentName:"p"},"informa\xe7\xe3o"),". Uma informa\xe7\xe3o \xe9 um dado com valor. Por exemplo quando observamos a data 19 de abril, temos um dado. Ao sabermos que este \xe9 o dia do \xedndio, temos uma informa\xe7\xe3o."),(0,r.kt)("h2",{id:"inteiro"},"Inteiro"),(0,r.kt)("p",null,"Um ",(0,r.kt)("strong",{parentName:"p"},"inteiro")," \xe9 uma informa\xe7\xe3o num\xe9rica, que compreende valores que correspondem ao conjunto dos n\xfameros inteiros (positivos, nulo e negativos)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O Campus possui 4 constru\xe7\xf5es;"),(0,r.kt)("li",{parentName:"ul"},"Est\xe3o construindo 22 casas novas no bairro vizinho;"),(0,r.kt)("li",{parentName:"ul"},"O cachorro tem 8 anos de idade.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,r.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo inteiro como ",(0,r.kt)("strong",{parentName:"p"},"int"),"."),(0,r.kt)("h2",{id:"real"},"Real"),(0,r.kt)("p",null,"O tipo de dado ",(0,r.kt)("strong",{parentName:"p"},"real")," \xe9 aquele que possui um valor que est\xe1 compreendido no conjunto dos n\xfameros reais. S\xe3o abordados os n\xfameros negativos, positivos e nulo, considerando as casas decimais."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A dist\xe2ncia do port\xe3o at\xe9 a sala \xe9 de 25,7 metros."),(0,r.kt)("li",{parentName:"ul"},"O saldo banc\xe1rio \xe9 de R","$"," 357,32."),(0,r.kt)("li",{parentName:"ul"},"O saldo banc\xe1rio \xe9 de R","$"," -169,20.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,r.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo real como ",(0,r.kt)("strong",{parentName:"p"},"float")," ou ",(0,r.kt)("strong",{parentName:"p"},"double"),"."),(0,r.kt)("h2",{id:"caractere"},"Caractere"),(0,r.kt)("p",null,"Os dado do tipo ",(0,r.kt)("strong",{parentName:"p"},"caractere")," s\xe3o aqueles que pertencem ao conjunto de valores alfanum\xe9ricos (0-9), alfab\xe9ticos (a-z, A-Z) e especiais (","!","\\@","#","$","\\%","*","+-/, dentre outros)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'O professor disse: "N\xe3o use o celular durante a aula!".'),(0,r.kt)("li",{parentName:"ul"},'Ao final do jornal, ele sempre fala "Boa noite".'),(0,r.kt)("li",{parentName:"ul"},'O nome do presidente do clube \xe9 "Celso da Silva".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,r.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo caractere como ",(0,r.kt)("strong",{parentName:"p"},"string")," (ou str)."),(0,r.kt)("h2",{id:"l\xf3gico"},"L\xf3gico"),(0,r.kt)("p",null,"Um dado do tipo ",(0,r.kt)("strong",{parentName:"p"},"l\xf3gico")," \xe9 aquele em que dois valores podem ser asssumidos: verdadeiro ou falso."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A janela est\xe1 aberta."),(0,r.kt)("li",{parentName:"ul"},"O carro est\xe1 ligado."),(0,r.kt)("li",{parentName:"ul"},"A bicicleta est\xe1 parada.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),(0,r.kt)("br",{parentName:"p"}),"\n","Nas linguagens de programa\xe7\xe3o, \xe9 comum observarmos o tipo l\xf3gico como ",(0,r.kt)("strong",{parentName:"p"},"bool")," (ou boolean)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exerc\xedcios"),(0,r.kt)("br",{parentName:"p"}),"\n","Observe qual \xe9 o tipo de dado em cada situa\xe7\xe3o (",(0,r.kt)("a",{parentName:"p",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/44"},"FORBELLONE, pg. 20"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'A placa "Pare!" tinha 2 furos de bala.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Josefina subiu 5 degraus para pegar uma ma\xe7\xe3 boa.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Alberta levou 3,5 horas para chegar ao hospital.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Astrogilda mandou pintar em um lote de 10 camisetas: "Preserve o meio ambiente", e ficou devendo R',"$"," 150,00 para a estamparia Pinte e Borde a ser pago em 3 parcelas.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Felisberto recebeu sua 18\xaa medalha por ter alcan\xe7ado a marca de 578,3 segundos nos 100 metros rasos."))),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf"},"FORBELLONE, Andr\xe9 Luiz Villar; EBERSP\xc4TCHER, Henri Frederico. L\xf3gica de programa\xe7\xe3o: A constru\xe7\xe3o de algoritmoss e estruturas de dados com aplica\xe7\xf5es em Python. 4.ed. S\xe3o Paulo: Pearson; Porto Alegre: Bookman, 2022"))),(0,r.kt)("h2",{id:"apresenta\xe7\xf5es"},"Apresenta\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///slides/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.html"},"HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///slides/Algoritmos/02-Basicos/04-Tipos_primitivos_de_dados.pdf"},"PDF"))))}d.isMDXComponent=!0}}]);