"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[2985],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),i=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(t),k=r,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return t?n.createElement(c,p(p({ref:a},m),{},{components:t})):n.createElement(c,p({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=k;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8599:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const l={},p="Arrays",o={unversionedId:"CD/Estruturas_de_dados/Arrays",id:"CD/Estruturas_de_dados/Arrays",title:"Arrays",description:"Numpy",source:"@site/docs/CD/03-Estruturas_de_dados/01-Arrays.md",sourceDirName:"CD/03-Estruturas_de_dados",slug:"/CD/Estruturas_de_dados/Arrays",permalink:"/materiais/docs/CD/Estruturas_de_dados/Arrays",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/CD/03-Estruturas_de_dados/01-Arrays.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebarCD",previous:{title:"A Linguagem",permalink:"/materiais/docs/CD/Python/A_linguagem"},next:{title:"Series e Dataframes",permalink:"/materiais/docs/CD/Estruturas_de_dados/Series"}},s={},i=[{value:"Numpy",id:"numpy",level:2},{value:"arrays numpy",id:"arrays-numpy",level:2},{value:"<em>Reshape</em>",id:"reshape",level:2},{value:"Tipos de dados",id:"tipos-de-dados",level:2},{value:"Cria\xe7\xe3o de arrays",id:"cria\xe7\xe3o-de-arrays",level:2},{value:"<em>Slicing</em>",id:"slicing",level:2},{value:"Altera\xe7\xf5es em <em>slices</em>",id:"altera\xe7\xf5es-em-slices",level:2},{value:"Opera\xe7\xf5es sobre <em>arrays</em>",id:"opera\xe7\xf5es-sobre-arrays",level:2},{value:"\xcdndices booleanos",id:"\xedndices-booleanos",level:2},{value:"Where",id:"where",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],m={toc:i},u="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arrays"},"Arrays"),(0,r.kt)("h2",{id:"numpy"},"Numpy"),(0,r.kt)("p",null,"Numpy \xe9 uma biblioteca Python voltada para computa\xe7\xe3o cient\xedfica. Possui implementa\xe7\xf5es bastante otimizadas para utiliza\xe7\xe3o de ",(0,r.kt)("em",{parentName:"p"},"arrays")," ou vetores."),(0,r.kt)("p",null,"Para que o acesso \xe0s estruturas seja poss\xedvel, \xe9 necess\xe1rio a importa\xe7\xe3o da biblioteca. \xc9 comum e uma boa pr\xe1tica renomear a biblioteca para ",(0,r.kt)("inlineCode",{parentName:"p"},"np"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Importe a biblioteca numpy.")),(0,r.kt)("h2",{id:"arrays-numpy"},"arrays numpy"),(0,r.kt)("p",null,"O ",(0,r.kt)("em",{parentName:"p"},"array")," numpy \xe9 uma lista de valores, indexada por uma tupla de inteiros n\xe3o negativos. O n\xfamero de dimens\xf5es do ",(0,r.kt)("strong",{parentName:"p"},"array")," \xe9 tamb\xe9m chamado de ",(0,r.kt)("em",{parentName:"p"},"rank")," do ",(0,r.kt)("strong",{parentName:"p"},"array"),". O ",(0,r.kt)("em",{parentName:"p"},"shape")," de um ",(0,r.kt)("em",{parentName:"p"},"array")," \xe9 uma tupla de inteiros, dado o tamanho do ",(0,r.kt)("em",{parentName:"p"},"array")," em cada dimens\xe3o definida. Nesta atividade, trataremos como sin\xf4nimos ",(0,r.kt)("strong",{parentName:"p"},"array")," e ",(0,r.kt)("strong",{parentName:"p"},"vetor"),"."),(0,r.kt)("p",null,"Para criar um ",(0,r.kt)("em",{parentName:"p"},"array"),", pode-se utilizar o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},".array()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("p",null,"Crie um vetor de uma dimens\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([1, 2, 3])\n")),(0,r.kt)("p",null,"Para observar os tipos dos dados:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(a)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o tipo do dado do ",(0,r.kt)("em",{parentName:"li"},"array")," e dos valores armazenados.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(type(a))\nprint(type(a[0]), type(a[1]),type(a[2]))\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o formato do vetor.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print (a.shape)\n")),(0,r.kt)("p",null,"Para acessar os elementos individualmente, pode-se utilizar a posi\xe7\xe3o da mesma forma como \xe9 feito com sequ\xeancias."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(a[0], a[1], a[2])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execute os c\xf3digos a seguir, e observe o resultado.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(a)\na[0]=100 #Altera o valor armazenado na posi\xe7\xe3o 0\nprint(a)\n")),(0,r.kt)("p",null,"Todos os dados armazenados devem ser do ",(0,r.kt)("strong",{parentName:"p"},"mesmo tipo"),". Caso n\xe3o sejam, ser\xe3o convertidos a um tipo em comum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr_st = np.array(['a', 5.4, 2]) #todos os dados como string\narr_ft = np.array([1  , 5.4, 2]) #todos os dados como float\n\nprint(f'{arr_st}')\nprint(f'{arr_ft}')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crie um outro vetor, com o seguinte formato  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"b = np.array([[1,2,3], [4,5,6]])\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compare os ",(0,r.kt)("em",{parentName:"li"},"arrays")," ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),". Qual \xe9 a diferen\xe7a?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execute o c\xf3digo abaixo, e o qu\xea \xe9 mostrado.  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(b[1])\nprint(b[1][1])\n")),(0,r.kt)("h2",{id:"reshape"},(0,r.kt)("em",{parentName:"h2"},"Reshape")),(0,r.kt)("p",null,"\xc9 poss\xedvel alterar o formato do ",(0,r.kt)("em",{parentName:"p"},"array"),". Execute os c\xf3digo abaixo passo a passo, observando o resultado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = np.arange(10)\nprint(arr)\nprint(arr.shape)\narr.reshape(5,2)\narr.reshape(2,5)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sintaxe")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".reshape(l,c)"),(0,r.kt)("br",{parentName:"p"}),"\n","onde:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"l"),": n\xfamero de linhas"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"c"),": n\xfamero de colunas")),(0,r.kt)("p",null,"O valor ",(0,r.kt)("inlineCode",{parentName:"p"},"l*c")," deve corresponder \xe0 quantidade total de elementos no ",(0,r.kt)("em",{parentName:"p"},"array"),"."),(0,r.kt)("p",null,"\xc9 poss\xedvel definir a ordem do ",(0,r.kt)("em",{parentName:"p"},"array")," sem conhecer uma de suas dimens\xf5es. Para isto, basta substituir o n\xfamero de linhas ou colunas por ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),".  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = np.arange(10)\narr.reshape(5,-1)\narr.reshape(-1,5)\narr.reshape(2,-1)\narr.reshape(-1,2)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crie um ",(0,r.kt)("em",{parentName:"li"},"array")," com 100 elementos contendo inteiros em sequ\xeancia. Em seguida, organize esses valores em 10 colunas.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Organize o mesmo ",(0,r.kt)("em",{parentName:"li"},"array")," em 25 colunas.")))),(0,r.kt)("h2",{id:"tipos-de-dados"},"Tipos de dados"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe os tipos de dados armazenados")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(a.dtype)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compare o resultado do c\xf3digo anterior com os tipos de dados dos vetores abaixo, e explique o que ocorreu.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x=np.array([1, 2])\ny=np.array([1.0, 2.0])\nz=np.array([1, 2], dtype=np.int64)\n")),(0,r.kt)("h2",{id:"cria\xe7\xe3o-de-arrays"},"Cria\xe7\xe3o de arrays"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teste as fun\xe7\xf5es abaixo, e observe o vetor retornado por cada fun\xe7\xe3o.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"np.zeros((2,2))\nnp.ones((3,3))\nnp.full((4,4),9)\nnp.eye(5)\nnp.random.random((6,6))\n")),(0,r.kt)("p",null,"Outras fun\xe7\xf5es podem ser utilizadas para obter valores igualmente espa\xe7ados entre si."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"np.linspace(0,10,5)\nnp.linspace(0,10,3)\nnp.linspace(0,10,11)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sintaxe")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},".linspace(i,f,n)\n")),(0,r.kt)("p",null,"Onde:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i"),": valor inicial"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"f"),": valor final"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),": quantidade de valores\nNo m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"li"},"linspace"),", os valores de sa\xedda s\xe3o do tipo ",(0,r.kt)("inlineCode",{parentName:"li"},"float")," (",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.float64"),").")),(0,r.kt)("h2",{id:"slicing"},(0,r.kt)("em",{parentName:"h2"},"Slicing")),(0,r.kt)("p",null,"Semelhantes \xe0s listas em Python, os arrays numpy possibilitam o ",(0,r.kt)("em",{parentName:"p"},"slicing"),". Como os arrays podem possuir diversas dimens\xf5es, \xe9 necess\xe1rio identificar o ",(0,r.kt)("em",{parentName:"p"},"slice")," para cada dimens\xe3o.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])\nb = a[:2, 1:3]\n")),(0,r.kt)("p",null,"Significado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},":2: linhas 0 a 1  \n1:3: colunas 1 a 2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o conte\xfado dos vetores ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Como seria para mostrar apenas as colunas ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," utilizando ",(0,r.kt)("em",{parentName:"li"},"slices"),"?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execute o c\xf3digo abaixo, e observe os resultados.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"b = a[[0,2], 2]  \nc = a[[0,2,2], [0,2,3]]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- O que ocorreu em `b` e `c`?\n")),(0,r.kt)("h2",{id:"altera\xe7\xf5es-em-slices"},"Altera\xe7\xf5es em ",(0,r.kt)("em",{parentName:"h2"},"slices")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o array ",(0,r.kt)("inlineCode",{parentName:"li"},"a")),(0,r.kt)("li",{parentName:"ul"},"Execute:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"c = a[:2, 1:3]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o array ",(0,r.kt)("inlineCode",{parentName:"li"},"c")),(0,r.kt)("li",{parentName:"ul"},"Execute:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"c[0][0]=20\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Observe o array ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," e explique o resultado.")),(0,r.kt)("h2",{id:"opera\xe7\xf5es-sobre-arrays"},"Opera\xe7\xf5es sobre ",(0,r.kt)("em",{parentName:"h2"},"arrays")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Arrays"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x = np.array([ [1, 2],[3, 4] ])  \ny = np.array([ [5, 6],[7, 8] ])  \nprint('x:',x)\nprint('y:',y)\n")),(0,r.kt)("p",null,"Opera\xe7\xf5es b\xe1sicas podem ser realizadas sobre o array  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adi\xe7\xe3o (+)"),(0,r.kt)("li",{parentName:"ul"},"subtra\xe7\xe3o (-)"),(0,r.kt)("li",{parentName:"ul"},"multiplica\xe7\xe3o (","*",")"),(0,r.kt)("li",{parentName:"ul"},"divis\xe3o (/)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x+y\nx-y\nx*y\nx/y\n")),(0,r.kt)("p",null,"A biblioteca numpy tamb\xe9m possui outras opera\xe7\xf5es, acess\xedveis por m\xe9todos:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},".add()\n.subtract()\n.multiply()\n.divide()\n.sqrt()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"np.add(x,4)\nnp.subtract(x,2)\nnp.multiply(x,5)\nnp.divide(x,2)\nnp.sqrt(x)\n\n")),(0,r.kt)("p",null,"Possui tamb\xe9m opera\xe7\xf5es sobre os valores em arrays  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},".sum()\n.mean()\n.min()\n.max()\n...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x.sum()\nx.mean()\nx.min()\nx.max()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("p",null,"Realize as seguinte opera\xe7\xf5es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([[1,2,3], [4,5,6], [7,8,9], [10, 11, 12]])  \nb = np.array([0, 2, 0, 1])  \na[np.arange(4), b] += 10\n")),(0,r.kt)("p",null,"Observe:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quais s\xe3o os conte\xfados dos ",(0,r.kt)("em",{parentName:"li"},"arrays")," ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," ap\xf3s a cria\xe7\xe3o deles?"),(0,r.kt)("li",{parentName:"ul"},"Qual \xe9 o resultado da express\xe3o ",(0,r.kt)("inlineCode",{parentName:"li"},"np.arange(4)"),"?"),(0,r.kt)("li",{parentName:"ul"},"Ao final, qual \xe9 o conte\xfado do ",(0,r.kt)("em",{parentName:"li"},"array")," ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"?"),(0,r.kt)("li",{parentName:"ul"},"Quais posi\xe7\xf5es de ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," foram alteradas?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Por que apenas essas posi\xe7\xf5es foram alteradas?")))),(0,r.kt)("h2",{id:"\xedndices-booleanos"},"\xcdndices booleanos"),(0,r.kt)("p",null,"Numpy possibilita que sejam aplicadas opera\xe7\xf5es a todos os elementos. Para operadores relacionais, \xe9 retornado um ",(0,r.kt)("em",{parentName:"p"},"array")," booleano."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("p",null,"Execute:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])  \nidx = a > 6\n")),(0,r.kt)("p",null,"Observe o conte\xfado:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do array ",(0,r.kt)("inlineCode",{parentName:"li"},"a")),(0,r.kt)("li",{parentName:"ul"},"do array ",(0,r.kt)("inlineCode",{parentName:"li"},"idx"))),(0,r.kt)("p",null,"Execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a[idx]\n")),(0,r.kt)("p",null,"Observe o resultado."),(0,r.kt)("p",null,"Execute:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a[idx] += 100\n")),(0,r.kt)("p",null,"Observe o resultado. O que aconteceu?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Qual \xe9 a soma dos n\xfameros com valor maior que ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"8")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"8")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"8")))))," no array ",(0,r.kt)("inlineCode",{parentName:"li"},"a"),"?")),(0,r.kt)("p",null,"Qual \xe9 a soma dos valores menores que ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"10")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"10")))))," no array ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"?"),(0,r.kt)("h2",{id:"where"},"Where"),(0,r.kt)("p",null,"Utilizando a fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"where()"),", \xe9 poss\xedvel descobrir quais posi\xe7\xf5es do ",(0,r.kt)("em",{parentName:"p"},"array")," correspondem a uma condi\xe7\xe3o determinada."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemplo")),(0,r.kt)("p",null,"Extrair valores maiores que 15:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = np.arange(10,20)\nnp.where(arr > 15)\n")),(0,r.kt)("p",null,"Extrair valores pares:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr = np.arange(10,20)\nnp.where(arr % 2 == 0)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Atividade")),(0,r.kt)("p",null,"Obtenha a posi\xe7\xe3o do vetor que possui o maior valor."),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41586-020-2649-2"},"HARRIS. C.R. Millman, K.J, van der Walt, S.J. et al. Array programming with NumPy. Nature 585, 357-362, 2020")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41586-020-2649-2.pdf"},"PDF")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Outros materiais")))}d.isMDXComponent=!0}}]);