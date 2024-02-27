"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[8727],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>v});var s=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,s,r=function(e,a){if(null==e)return{};var o,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)o=i[s],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)o=i[s],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var n=s.createContext({}),l=function(e){var a=s.useContext(n),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},m=function(e){var a=l(e.components);return s.createElement(n.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},p=s.forwardRef((function(e,a){var o=e.components,r=e.mdxType,i=e.originalType,n=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(o),p=r,v=c["".concat(n,".").concat(p)]||c[p]||u[p]||i;return o?s.createElement(v,t(t({ref:a},m),{},{components:o})):s.createElement(v,t({ref:a},m))}));function v(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=o.length,t=new Array(i);t[0]=p;var d={};for(var n in a)hasOwnProperty.call(a,n)&&(d[n]=a[n]);d.originalType=e,d[c]="string"==typeof e?e:r,t[1]=d;for(var l=2;l<i;l++)t[l]=o[l];return s.createElement.apply(null,t)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6761:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>n,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=o(7462),r=(o(7294),o(3905));const i={},t="Descoberta de Conhecimento em Bases de Dados",d={unversionedId:"CD/intro/kdd",id:"CD/intro/kdd",title:"Descoberta de Conhecimento em Bases de Dados",description:"A Descoberta de Conhecimento em Bases de Dados (KDD, do ingl\xeas Knowledge Discovery on Databases) (FAYYAD et al 1996) \xe9 uma metodologia para extra\xe7\xe3o de informa\xe7\xf5es a partir de bases de dados.",source:"@site/docs/CD/01-intro/02-kdd.md",sourceDirName:"CD/01-intro",slug:"/CD/intro/kdd",permalink:"/materiais/docs/CD/intro/kdd",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/CD/01-intro/02-kdd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebarCD",previous:{title:"Ci\xeancia de Dados",permalink:"/materiais/docs/CD/intro/introducao"},next:{title:"Ambientes de desenvolvimento",permalink:"/materiais/docs/CD/Python/Ambientes"}},n={},l=[{value:"Fases do processo",id:"fases-do-processo",level:2},{value:"Sele\xe7\xe3o",id:"sele\xe7\xe3o",level:3},{value:"Pr\xe9-processamento",id:"pr\xe9-processamento",level:3},{value:"Limpeza de Dados",id:"limpeza-de-dados",level:4},{value:"Integra\xe7\xe3o de Dados",id:"integra\xe7\xe3o-de-dados",level:4},{value:"Tratamento de valores ausentes",id:"tratamento-de-valores-ausentes",level:4},{value:"Remo\xe7\xe3o de Dados",id:"remo\xe7\xe3o-de-dados",level:5},{value:"Preenchimento de Valores Ausentes",id:"preenchimento-de-valores-ausentes",level:5},{value:"Preenchimento com a M\xe9dia/Mediana/Moda",id:"preenchimento-com-a-m\xe9diamedianamoda",level:5},{value:"Preenchimento por Imputa\xe7\xe3o",id:"preenchimento-por-imputa\xe7\xe3o",level:5},{value:"Preenchimento por Valor Fixo",id:"preenchimento-por-valor-fixo",level:5},{value:"Imputa\xe7\xe3o Multivariada",id:"imputa\xe7\xe3o-multivariada",level:5},{value:"Modelagem de Aprendizado de M\xe1quina",id:"modelagem-de-aprendizado-de-m\xe1quina",level:5},{value:"Transforma\xe7\xe3o",id:"transforma\xe7\xe3o",level:3},{value:"Normaliza\xe7\xe3o",id:"normaliza\xe7\xe3o",level:4},{value:"Padroniza\xe7\xe3o",id:"padroniza\xe7\xe3o",level:4},{value:"Discretiza\xe7\xe3o de Dados",id:"discretiza\xe7\xe3o-de-dados",level:4},{value:"Redu\xe7\xe3o de Dimensionalidade",id:"redu\xe7\xe3o-de-dimensionalidade",level:4},{value:"Codifica\xe7\xe3o de vari\xe1veis categ\xf3ricas",id:"codifica\xe7\xe3o-de-vari\xe1veis-categ\xf3ricas",level:4},{value:"Codifica\xe7\xe3o One-Hot (One-Hot Encoding)",id:"codifica\xe7\xe3o-one-hot-one-hot-encoding",level:5},{value:"Codifica\xe7\xe3o de N\xfameros Inteiros (Integer Encoding)",id:"codifica\xe7\xe3o-de-n\xfameros-inteiros-integer-encoding",level:5},{value:"Codifica\xe7\xe3o de Frequ\xeancia (Frequency Encoding)",id:"codifica\xe7\xe3o-de-frequ\xeancia-frequency-encoding",level:5},{value:"Codifica\xe7\xe3o Ordinal",id:"codifica\xe7\xe3o-ordinal",level:5},{value:"Minera\xe7\xe3o de Dados",id:"minera\xe7\xe3o-de-dados",level:3},{value:"Tarefas na Minera\xe7\xe3o de Dados",id:"tarefas-na-minera\xe7\xe3o-de-dados",level:4},{value:"Tarefas preditivas",id:"tarefas-preditivas",level:5},{value:"Tarefas descritivas",id:"tarefas-descritivas",level:5},{value:"Avalia\xe7\xe3o e interpreta\xe7\xe3o de resultados",id:"avalia\xe7\xe3o-e-interpreta\xe7\xe3o-de-resultados",level:3},{value:"Avalia\xe7\xe3o de Modelos",id:"avalia\xe7\xe3o-de-modelos",level:4},{value:"Valida\xe7\xe3o Cruzada",id:"valida\xe7\xe3o-cruzada",level:4},{value:"Interpreta\xe7\xe3o de Resultados",id:"interpreta\xe7\xe3o-de-resultados",level:4},{value:"Visualiza\xe7\xe3o de Dados",id:"visualiza\xe7\xe3o-de-dados",level:4},{value:"Compara\xe7\xe3o de Modelos",id:"compara\xe7\xe3o-de-modelos",level:4},{value:"Documenta\xe7\xe3o dos Resultados",id:"documenta\xe7\xe3o-dos-resultados",level:4},{value:"Comunica\xe7\xe3o dos Resultados",id:"comunica\xe7\xe3o-dos-resultados",level:4},{value:"Conhecimento descoberto",id:"conhecimento-descoberto",level:3},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],m={toc:l},c="wrapper";function u(e){let{components:a,...i}=e;return(0,r.kt)(c,(0,s.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"descoberta-de-conhecimento-em-bases-de-dados"},"Descoberta de Conhecimento em Bases de Dados"),(0,r.kt)("p",null,"A Descoberta de Conhecimento em Bases de Dados (KDD, do ingl\xeas ",(0,r.kt)("em",{parentName:"p"},"Knowledge Discovery on Databases"),") (",(0,r.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/pdf/10.1609/aimag.v17i3.1230"},"FAYYAD et al 1996"),") \xe9 uma metodologia para extra\xe7\xe3o de informa\xe7\xf5es a partir de bases de dados. "),(0,r.kt)("p",null,"O KDD \xe9 um processo interdisciplinar que envolve conhecimentos e t\xe9cnicas de diversas \xe1reas. Entre elas est\xe3o a Computa\xe7\xe3o, a Matem\xe1tica e a Estat\xedstica. Os conhecimentos aplicados s\xe3o variados, como Bancos de Dados, Aprendizado de M\xe1quina, T\xe9cnicas de visualiza\xe7\xe3o de dados, entre outros."),(0,r.kt)("h2",{id:"fases-do-processo"},"Fases do processo"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fases do processo KDD",src:o(1898).Z,width:"637",height:"259"})),(0,r.kt)("p",null,"Imagem: ",(0,r.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/308995146_Utilizando_Mineracao_de_Dados_e_Sistemas_Multiagentes_na_Analise_da_Evasao_em_Educacao_a_Distancia_por_meio_do_Perfil_dos_Alunos"},"Fayyad et Al, 1996 via Lira et al, 2016")),(0,r.kt)("h3",{id:"sele\xe7\xe3o"},"Sele\xe7\xe3o"),(0,r.kt)("p",null,"Nesta primeira fase do processo s\xe3o selecionados os dados relevantes para a an\xe1lise. Aqui podemos incluir os crit\xe9rios de escolha dos dados, os meios de coleta e as fontes de dados utilizadas."),(0,r.kt)("p",null,"Aqui s\xe3o definidos os conjuntos de dados contendo as poss\xedveis vari\xe1veis (atributos) e registros (inst\xe2ncias) que ser\xe3o objeto de an\xe1lise. Muitas vezes, este processo \xe9 realizado por um especialista da \xe1rea de dom\xednio dos dados (",(0,r.kt)("a",{parentName:"p",href:"https://abepro.org.br/biblioteca/TN_STO_263_509_36492.pdf"},"FERREIRA et al, 2018"),"). Podem ser envolvidas  consultas em bancos de dados, filtragem de dados com base em certos atributos ou caracter\xedsticas, ou outra t\xe9cnica de sele\xe7\xe3o apropriada"),(0,r.kt)("h3",{id:"pr\xe9-processamento"},"Pr\xe9-processamento"),(0,r.kt)("p",null,"Esta fase consiste em transformar os dados de maneira adequada para serem analisados, de forma a garantir que estejam em em formato adequado para as fases seguintes do processo."),(0,r.kt)("p",null,"Algumas das atividades que podem ocorrer nesta fase:"),(0,r.kt)("h4",{id:"limpeza-de-dados"},"Limpeza de Dados"),(0,r.kt)("p",null,"Esta etapa envolve a identifica\xe7\xe3o e corre\xe7\xe3o de erros nos dados, como valores ausentes, ",(0,r.kt)("em",{parentName:"p"},"outliers"),", ru\xeddos e inconsist\xeancias. Isso pode incluir t\xe9cnicas como preenchimento de valores ausentes, remo\xe7\xe3o de ",(0,r.kt)("em",{parentName:"p"},"outliers")," e corre\xe7\xe3o de erros de digita\xe7\xe3o."),(0,r.kt)("h4",{id:"integra\xe7\xe3o-de-dados"},"Integra\xe7\xe3o de Dados"),(0,r.kt)("p",null,"Caso os dados sejam provenientes de v\xe1rias fontes, pode ser necess\xe1rio integr\xe1-los em um \xfanico conjunto de dados coeso. Isso envolve mapear esquemas de dados, resolver inconsist\xeancias nos formatos dos dados e combinar diferentes conjuntos de dados em um \xfanico conjunto."),(0,r.kt)("h4",{id:"tratamento-de-valores-ausentes"},"Tratamento de valores ausentes"),(0,r.kt)("p",null,"Valores ausentes s\xe3o comuns em conjuntos de dados do mundo real devido a v\xe1rios motivos, como erros de medi\xe7\xe3o, falhas na coleta de dados, ou simplesmente porque as informa\xe7\xf5es n\xe3o est\xe3o dispon\xedveis."),(0,r.kt)("p",null,"\xc9 importante lidar com valores ausentes antes de realizar qualquer an\xe1lise ou modelagem de dados, pois a presen\xe7a de valores faltantes pode levar a resultados incorretos ou enviesados. A escolha da t\xe9cnica de tratamento de valores ausentes depende da natureza dos dados, do problema abordado e do algoritmo de minera\xe7\xe3o de dados. Algumas t\xe9cnicas para tratamento de valores ausentes s\xe3o:"),(0,r.kt)("h5",{id:"remo\xe7\xe3o-de-dados"},"Remo\xe7\xe3o de Dados"),(0,r.kt)("p",null,"Uma abordagem simples \xe9 remover as observa\xe7\xf5es (linhas) ou os atributos (colunas) que cont\xeam valores ausentes. Isso \xe9 vi\xe1vel quando os valores ausentes s\xe3o apenas uma pequena parte do conjunto de dados e sua remo\xe7\xe3o n\xe3o causa perda significativa de informa\xe7\xf5es."),(0,r.kt)("h5",{id:"preenchimento-de-valores-ausentes"},"Preenchimento de Valores Ausentes"),(0,r.kt)("p",null,"Esta abordagem envolve substituir os valores ausentes por valores estimados. Isso pode ser feito de v\xe1rias maneiras, incluindo:"),(0,r.kt)("h5",{id:"preenchimento-com-a-m\xe9diamedianamoda"},"Preenchimento com a M\xe9dia/Mediana/Moda"),(0,r.kt)("p",null,"Os valores ausentes s\xe3o substitu\xeddos pela m\xe9dia, mediana ou moda dos valores existentes na mesma vari\xe1vel."),(0,r.kt)("h5",{id:"preenchimento-por-imputa\xe7\xe3o"},"Preenchimento por Imputa\xe7\xe3o"),(0,r.kt)("p",null,"Os valores ausentes s\xe3o estimados com base em outras vari\xe1veis correlacionadas. Isso pode ser feito usando t\xe9cnicas como regress\xe3o, k-vizinhos mais pr\xf3ximos (KNN) ou algoritmos de aprendizado de m\xe1quina."),(0,r.kt)("h5",{id:"preenchimento-por-valor-fixo"},"Preenchimento por Valor Fixo"),(0,r.kt)("p",null,"Os valores ausentes s\xe3o substitu\xeddos por um valor fixo escolhido manualmente, como 0 ou -1. Essa abordagem \xe9 adequada quando a aus\xeancia dos valores \xe9 informativa."),(0,r.kt)("h5",{id:"imputa\xe7\xe3o-multivariada"},"Imputa\xe7\xe3o Multivariada"),(0,r.kt)("p",null,"Nesta abordagem, os valores ausentes s\xe3o estimados com base em todas as outras vari\xe1veis do conjunto de dados. Isso leva em considera\xe7\xe3o a rela\xe7\xe3o entre as vari\xe1veis e pode fornecer estimativas mais precisas dos valores ausentes."),(0,r.kt)("h5",{id:"modelagem-de-aprendizado-de-m\xe1quina"},"Modelagem de Aprendizado de M\xe1quina"),(0,r.kt)("p",null,"Em algumas situa\xe7\xf5es, \xe9 poss\xedvel utilizar modelos de aprendizado de m\xe1quina para prever os valores ausentes com base nos padr\xf5es existentes nos dados. Isso pode ser feito treinando um modelo nos dados completos e usando-o para prever os valores ausentes."),(0,r.kt)("h3",{id:"transforma\xe7\xe3o"},"Transforma\xe7\xe3o"),(0,r.kt)("p",null,"Esta fase consiste em preparar os dados para serem analisados, de forma a auxiliar os algoritmos na fase posterior, a Minera\xe7\xe3o de Dados."),(0,r.kt)("h4",{id:"normaliza\xe7\xe3o"},"Normaliza\xe7\xe3o"),(0,r.kt)("p",null,"Normalizar os dados \xe9 uma etapa comum na transforma\xe7\xe3o de dados. Isso envolve a escala dos valores dos atributos para que fiquem em uma faixa espec\xedfica, como 0 a 1 ou -1 a 1. A normaliza\xe7\xe3o \xe9 \xfatil quando os atributos possuem escalas diferentes e quando algoritmos de aprendizado de m\xe1quina podem ser sens\xedveis a essas diferen\xe7as."),(0,r.kt)("h4",{id:"padroniza\xe7\xe3o"},"Padroniza\xe7\xe3o"),(0,r.kt)("p",null,"A padroniza\xe7\xe3o \xe9 semelhante \xe0 normaliza\xe7\xe3o, mas em vez de escalar os valores para uma faixa espec\xedfica, os dados s\xe3o transformados para que tenham uma m\xe9dia zero e um desvio padr\xe3o de um. Isso \xe9 \xfatil para algoritmos que assumem que os dados est\xe3o distribu\xeddos de forma normal."),(0,r.kt)("h4",{id:"discretiza\xe7\xe3o-de-dados"},"Discretiza\xe7\xe3o de Dados"),(0,r.kt)("p",null,"Em alguns casos, pode ser \xfatil transformar dados cont\xednuos em dados discretos, especialmente para algoritmos que requerem vari\xe1veis categ\xf3ricas. Isso pode ser feito por meio de t\xe9cnicas de discretiza\xe7\xe3o, como a divis\xe3o em intervalos fixos ou com base em crit\xe9rios estat\xedsticos."),(0,r.kt)("h4",{id:"redu\xe7\xe3o-de-dimensionalidade"},"Redu\xe7\xe3o de Dimensionalidade"),(0,r.kt)("p",null,"Em alguns casos, pode ser \xfatil reduzir a dimensionalidade dos dados, especialmente se houver muitos atributos ou se alguns atributos forem redundantes. T\xe9cnicas como An\xe1lise de Componentes Principais (PCA) ou Sele\xe7\xe3o de Caracter\xedsticas podem ser utilizadas para este fim."),(0,r.kt)("h4",{id:"codifica\xe7\xe3o-de-vari\xe1veis-categ\xf3ricas"},"Codifica\xe7\xe3o de vari\xe1veis categ\xf3ricas"),(0,r.kt)("p",null,"\xc9 um processo no qual as vari\xe1veis categ\xf3ricas s\xe3o convertidas em uma forma num\xe9rica que pode ser utilizada por algoritmos de aprendizado de m\xe1quina. As vari\xe1veis categ\xf3ricas s\xe3o aquelas que representam diferentes categorias ou grupos e n\xe3o t\xeam uma ordem natural entre elas. Por exemplo, cores (vermelho, azul, verde), tipos de produtos (eletr\xf4nicos, vestu\xe1rio, alimentos) ou estados civis (solteiro, casado, divorciado)."),(0,r.kt)("p",null,"Alguns algoritmos requerem que os dados de entrada sejam num\xe9ricos, o que significa que as vari\xe1veis categ\xf3ricas precisam ser convertidas em n\xfameros antes de serem utilizadas. A escolha da t\xe9cnica de codifica\xe7\xe3o depende do tipo de vari\xe1vel categ\xf3rica e do algoritmo que est\xe1 sendo utilizado. Algumas t\xe9cnicas para realizar a codifica\xe7\xe3o de vari\xe1veis categ\xf3ricas s\xe3o:"),(0,r.kt)("h5",{id:"codifica\xe7\xe3o-one-hot-one-hot-encoding"},"Codifica\xe7\xe3o One-Hot (One-Hot Encoding)"),(0,r.kt)("p",null,"Nesta abordagem, cada categoria \xfanica \xe9 representada por uma vari\xe1vel bin\xe1ria (0 ou 1). Para uma vari\xe1vel com ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," n categorias \xfanicas, s\xe3o criadas ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),' novas vari\xe1veis, onde cada vari\xe1vel indica se a observa\xe7\xe3o pertence \xe0 categoria correspondente. Por exemplo, se tivermos a vari\xe1vel categ\xf3rica "cor" com tr\xeas categorias \xfanicas (vermelho, azul, verde), ela seria codificada como tr\xeas vari\xe1veis bin\xe1rias: cor_vermelho, cor_azul e cor_verde.'),(0,r.kt)("h5",{id:"codifica\xe7\xe3o-de-n\xfameros-inteiros-integer-encoding"},"Codifica\xe7\xe3o de N\xfameros Inteiros (Integer Encoding)"),(0,r.kt)("p",null,'Nesta abordagem, cada categoria \xfanica \xe9 mapeada para um n\xfamero inteiro. Por exemplo, se tivermos a vari\xe1vel categ\xf3rica "estado civil" com tr\xeas categorias \xfanicas (solteiro, casado, divorciado), elas podem ser mapeadas para os n\xfameros 1, 2 e 3, respectivamente.'),(0,r.kt)("h5",{id:"codifica\xe7\xe3o-de-frequ\xeancia-frequency-encoding"},"Codifica\xe7\xe3o de Frequ\xeancia (Frequency Encoding)"),(0,r.kt)("p",null,"Nesta t\xe9cnica, cada categoria \xe9 substitu\xedda pela frequ\xeancia com que aparece no conjunto de dados. Isso pode ser \xfatil quando a frequ\xeancia das categorias \xe9 informativa para o modelo."),(0,r.kt)("h5",{id:"codifica\xe7\xe3o-ordinal"},"Codifica\xe7\xe3o Ordinal"),(0,r.kt)("p",null,'Esta t\xe9cnica \xe9 usada quando as categorias t\xeam uma ordem natural entre elas. Neste caso, as categorias s\xe3o codificadas como n\xfameros inteiros de acordo com a ordem natural. Por exemplo, para uma vari\xe1vel categ\xf3rica "tamanho de roupa" com categorias pequeno, m\xe9dio e grande, elas podem ser codificadas como 1, 2 e 3, respectivamente.'),(0,r.kt)("h3",{id:"minera\xe7\xe3o-de-dados"},"Minera\xe7\xe3o de Dados"),(0,r.kt)("p",null,"Esta etapa consiste em aplicar algoritmos de minera\xe7\xe3o de dados para descobrir padr\xf5es e rela\xe7\xf5es presentes nos dados. Os algoritmos s\xe3o executados com dados preparados nas fases anteriores para extrair padr\xf5es, rela\xe7\xf5es e informa\xe7\xf5es \xfateis. Essa fase \xe9 central no processo de descoberta de conhecimento, visto que novos dados e informa\xe7\xf5es s\xe3o obtidos."),(0,r.kt)("h4",{id:"tarefas-na-minera\xe7\xe3o-de-dados"},"Tarefas na Minera\xe7\xe3o de Dados"),(0,r.kt)("p",null,"Nesta fase, diferentes algoritmos podem ser aplicados, de acordo com os dados dispon\xedveis e o objeto de estudo. A organiza\xe7\xe3o destes algoritmos podem ser abordados de maneira preditiva ou descritiva."),(0,r.kt)("h5",{id:"tarefas-preditivas"},"Tarefas preditivas"),(0,r.kt)("p",null,"As tarefas preditivas se concentram na previs\xe3o de resultados futuros com base em dados hist\xf3ricos, as tarefas descritivas se concentram em entender e descrever os padr\xf5es presentes nos dados. "),(0,r.kt)("p",null,"As tarefas preditivas visam prever um resultado futuro com base em dados hist\xf3ricos e caracter\xedsticas conhecidas."),(0,r.kt)("p",null,"Exemplos de tarefas preditivas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classifica\xe7\xe3o: envolve atribuir categorias ou r\xf3tulos a inst\xe2ncias de dados com base em suas caracter\xedsticas. Por exemplo, classificar e-mails como spam ou n\xe3o spam, prever se um paciente tem uma determinada doen\xe7a com base em seus sintomas, ou classificar transa\xe7\xf5es financeiras como fraudulentas ou leg\xedtimas."),(0,r.kt)("li",{parentName:"ul"},"Regress\xe3o: o objetivo \xe9 prever um valor cont\xednuo com base em vari\xe1veis de entrada. Por exemplo, prever o pre\xe7o de uma casa com base em caracter\xedsticas como tamanho, localiza\xe7\xe3o e n\xfamero de quartos, ou prever a demanda por um produto com base em fatores como pre\xe7o, promo\xe7\xf5es e \xe9poca do ano."),(0,r.kt)("li",{parentName:"ul"},"An\xe1lise de S\xe9ries Temporais: Prever valores futuros com base em padr\xf5es observados em dados temporais passados. Por exemplo, prever a demanda por um produto ao longo do tempo.")),(0,r.kt)("h5",{id:"tarefas-descritivas"},"Tarefas descritivas"),(0,r.kt)("p",null,"As tarefas descritivas visam descrever os padr\xf5es e rela\xe7\xf5es presentes nos dados, geralmente sem a preocupa\xe7\xe3o de prever resultados futuros."),(0,r.kt)("p",null,"Exemplos de Tarefas Descritivas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Agrupamento: envolve identificar grupos ou clusters de inst\xe2ncias de dados que compartilham caracter\xedsticas semelhantes. Isso \xe9 \xfatil para descobrir estruturas subjacentes nos dados e identificar padr\xf5es naturais de agrupamento. Por exemplo, segmentar clientes em grupos com base em seus h\xe1bitos de compra, agrupar documentos semelhantes em cole\xe7\xf5es de texto, ou identificar grupos de genes com express\xe3o semelhante em dados gen\xf4micos."),(0,r.kt)("li",{parentName:"ul"},"Associa\xe7\xe3o: A associa\xe7\xe3o envolve descobrir padr\xf5es de rela\xe7\xe3o entre diferentes itens em conjuntos de dados transacionais. Isso \xe9 comumente usado em an\xe1lise de cestas de compras para identificar produtos que s\xe3o frequentemente comprados juntos. Por exemplo, identificar que clientes que compram p\xe3o tamb\xe9m tendem a comprar manteiga..")),(0,r.kt)("h3",{id:"avalia\xe7\xe3o-e-interpreta\xe7\xe3o-de-resultados"},"Avalia\xe7\xe3o e interpreta\xe7\xe3o de resultados"),(0,r.kt)("p",null,"Ap\xf3s os resultados obtidos na fase de minera\xe7\xe3o de dados, \xe9 necess\xe1rio analisar tais resultados e apresent\xe1-los de maneira que compreens\xedvel."),(0,r.kt)("p",null,"Algumas das atividades que podem ocorrer durante esta fase s\xe3o:"),(0,r.kt)("h4",{id:"avalia\xe7\xe3o-de-modelos"},"Avalia\xe7\xe3o de Modelos"),(0,r.kt)("p",null,"Os modelos gerados durante a fase de minera\xe7\xe3o de dados s\xe3o avaliados quanto \xe0 sua qualidade e desempenho. Isso pode ser feito usando m\xe9tricas apropriadas para o tipo de an\xe1lise realizada, como acur\xe1cia, precis\xe3o, recall, F1-score, erro m\xe9dio quadr\xe1tico, entre outras."),(0,r.kt)("h4",{id:"valida\xe7\xe3o-cruzada"},"Valida\xe7\xe3o Cruzada"),(0,r.kt)("p",null,"A valida\xe7\xe3o cruzada \xe9 uma t\xe9cnica comum usada para avaliar a capacidade de generaliza\xe7\xe3o dos modelos. Os dados s\xe3o divididos em conjuntos de treinamento e teste m\xfaltiplos, e o modelo \xe9 treinado e testado v\xe1rias vezes, com diferentes divis\xf5es dos dados."),(0,r.kt)("h4",{id:"interpreta\xe7\xe3o-de-resultados"},"Interpreta\xe7\xe3o de Resultados"),(0,r.kt)("p",null,"Os resultados dos modelos s\xe3o interpretados para extrair insights e conhecimentos \xfateis. Isso pode envolver identificar padr\xf5es interessantes nos dados, entender as rela\xe7\xf5es entre as vari\xe1veis, descobrir insights sobre o comportamento dos clientes ou usu\xe1rios, entre outros."),(0,r.kt)("h4",{id:"visualiza\xe7\xe3o-de-dados"},"Visualiza\xe7\xe3o de Dados"),(0,r.kt)("p",null,"A visualiza\xe7\xe3o de dados \xe9 uma ferramenta poderosa para comunicar os resultados da an\xe1lise de forma compreens\xedvel e intuitiva. Gr\xe1ficos, tabelas, mapas e outras t\xe9cnicas de visualiza\xe7\xe3o s\xe3o utilizados para apresentar os resultados de maneira eficaz."),(0,r.kt)("h4",{id:"compara\xe7\xe3o-de-modelos"},"Compara\xe7\xe3o de Modelos"),(0,r.kt)("p",null,"Se foram testados v\xe1rios modelos durante a fase de minera\xe7\xe3o de dados, \xe9 importante comparar seus desempenhos e identificar o modelo mais adequado para os objetivos da an\xe1lise."),(0,r.kt)("h4",{id:"documenta\xe7\xe3o-dos-resultados"},"Documenta\xe7\xe3o dos Resultados"),(0,r.kt)("p",null,"Todos os resultados obtidos durante a fase de avalia\xe7\xe3o e interpreta\xe7\xe3o s\xe3o documentados de maneira clara e completa. Isso inclui os m\xe9todos utilizados, as m\xe9tricas de avalia\xe7\xe3o, as conclus\xf5es tiradas e qualquer insight ou descoberta relevante."),(0,r.kt)("h4",{id:"comunica\xe7\xe3o-dos-resultados"},"Comunica\xe7\xe3o dos Resultados"),(0,r.kt)("p",null,"Os resultados da an\xe1lise s\xe3o comunicados \xe0s partes interessadas de maneira clara e acess\xedvel. Isso pode envolver a prepara\xe7\xe3o de relat\xf3rios, apresenta\xe7\xf5es ou outros materiais de comunica\xe7\xe3o que ajudem a transmitir os insights obtidos de forma eficaz."),(0,r.kt)("h3",{id:"conhecimento-descoberto"},"Conhecimento descoberto"),(0,r.kt)("p",null,"Esta \xe9 a fase final, em que trata utiliza\xe7\xe3o dos resultados obtidos. Nesta, o conhecimento descoberto \xe9 interpretado, validado e utilizado para tomar decis\xf5es informadas e gerar valor em um contexto espec\xedfico."),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("p",null,"FACELI, Katti et al. Intelig\xeancia artificial: Uma abordagem de aprendizado de m\xe1quina. 2. ed.\nS\xe3o Paulo: LTC, 2021. 304 p. ISBN 978-8521637349."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/pdf/10.1609/aimag.v17i3.1230"},"FAYYAD, U.; PIATETSKY-SHAPIRO, G.; SMITH P. From Data Mining to Knowledge Discovery in Databases. AI Magazine. Vol. 17, n. 3. 1996")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://abepro.org.br/biblioteca/TN_STO_263_509_36492.pdf"},"FERREIRA, J.C.; ROSA, C.R.M.; STEINER, M.T.A. Knowledge Discovery in Database e Data Mining: Uma contribui\xe7\xe3o bibliom\xe9tica. In: Anais do XXXVIII Encontro Nacional de Engenharia de Produ\xe7\xe3o. Macei\xf3, Alagoas, Brasil. 2018.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://onlinelibrary.wiley.com/doi/pdf/10.1609/aimag.v13i3.1011"},"FRAWLEY, W.J.; PIATETSKY-SHAPIRO, G.; MATHEUS, C.J. Knowledge Discovery in Databases: An Overview. AI Magazine. Vol. 13, n. 3. 1992.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/308995146_Utilizando_Mineracao_de_Dados_e_Sistemas_Multiagentes_na_Analise_da_Evasao_em_Educacao_a_Distancia_por_meio_do_Perfil_dos_Alunos"},"LIRA, K.C.; de OLIVEIRA, M.A.; MAGALH\xc3ES, R.P.; GON\xc7ALVES, E.J.T. Utilizando Minera\xe7\xe3o de Dados e Sistemas Multiagentes na An\xe1lise da Evas\xe3o em Educa\xe7\xe3o a Dist\xe2ncia por Meio do Perfil dos Alunos. In: Anais do Encontro Nacional de Intelig\xeancia Artificial e Computacional. Recife, 2016.")))}u.isMDXComponent=!0},1898:(e,a,o)=>{o.d(a,{Z:()=>s});const s=o.p+"assets/images/processo_kdd-f47cf8b5c0fc9ad87b210dba8015883f.png"}}]);