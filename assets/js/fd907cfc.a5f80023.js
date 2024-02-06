"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[92],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>f});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),u=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=t,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return r?a.createElement(f,s(s({ref:n},m),{},{components:r})):a.createElement(f,s({ref:n},m))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:t,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,n,r)=>{r.d(n,{Z:()=>s});var a=r(67294),t=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,s),hidden:r},n)}},74866:(e,n,r)=>{r.d(n,{Z:()=>x});var a=r(87462),t=r(67294),o=r(86010),s=r(12466),i=r(16550),l=r(91980),u=r(67392),m=r(50012);function c(e){return function(e){return t.Children.map(e,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??c(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function d(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,o=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=f({queryString:r,groupId:a}),[c,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,m.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=l??c;return d({value:e,tabValues:o})?e:null})();(0,t.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var b=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const n=e.currentTarget,r=m.indexOf(n),a=u[r].value;a!==i&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;n=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;n=m[r]??m[m.length-1];break}}n?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},n)},u.map((e=>{let{value:n,label:r,attributes:s}=e;return t.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>m.push(e),onKeyDown:d,onClick:p},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n})}),r??n)})))}function k(e){let{lazy:n,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],n){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function h(e){const n=v(e);return t.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},t.createElement(y,(0,a.Z)({},e,n)),t.createElement(k,(0,a.Z)({},e,n)))}function x(e){const n=(0,b.Z)();return t.createElement(h,(0,a.Z)({key:String(n)},e))}},75586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(87462),t=(r(67294),r(3905)),o=r(74866),s=r(85162);const i={},l="Par\xe2metros",u={unversionedId:"Algoritmos/Modulos/Parametros",id:"Algoritmos/Modulos/Parametros",title:"Par\xe2metros",description:"Uma das possibilidades com os procedimentos e as fun\xe7\xf5es \xe9 a passagem de par\xe2metros. Os par\xe2metros consistem nos conte\xfados a serem passados para as vari\xe1veis que est\xe3o dentro das fun\xe7\xf5es.",source:"@site/docs/Algoritmos/04-Modulos/03-Parametros.md",sourceDirName:"Algoritmos/04-Modulos",slug:"/Algoritmos/Modulos/Parametros",permalink:"/materiais/docs/Algoritmos/Modulos/Parametros",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/Algoritmos/04-Modulos/03-Parametros.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebarAlgoritmos",previous:{title:"Modulariza\xe7\xe3o",permalink:"/materiais/docs/Algoritmos/Modulos/Modularizacao"},next:{title:"Escopo de vari\xe1veis",permalink:"/materiais/docs/Algoritmos/Modulos/Escopo"}},m={},c=[],p={toc:c},d="wrapper";function f(e){let{components:n,...r}=e;return(0,t.kt)(d,(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"par\xe2metros"},"Par\xe2metros"),(0,t.kt)("p",null,"Uma das possibilidades com os procedimentos e as fun\xe7\xf5es \xe9 a passagem de par\xe2metros. Os par\xe2metros consistem nos conte\xfados a serem passados para as vari\xe1veis que est\xe3o dentro das fun\xe7\xf5es."),(0,t.kt)("p",null,"O uso dos par\xe2metros permite que o conte\xfado da fun\xe7\xe3o seja realizado de acordo com os conte\xfados das vari\xe1veis a ela passados."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Desenvolva uma fun\xe7\xe3o que retorna verdadeiro se o valor passado por par\xe2metro for par.")),(0,t.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'inicio\n  //m\xf3dulos\n  modulo par(inteiro: numero)\n      se(mod(numero,2) = 0)\n      ent\xe3o\n          retorne verdadeiro;\n      sen\xe3o\n          retorne falso;\n      fimse;\n  fimmodulo;\n\n  //vari\xe1veis\n  inteiro: x;\n\n  //entrada\n  escreva("Entre com um n\xfamero: ");\n  leia(x);\n\n  //processamento e sa\xedda\n  se(par(x))\n  ent\xe3o\n      escreva(x, "\xe9 par.");\n  sen\xe3o\n      escreva(x, "\xe9 \xedmpar.");\n  fimse.\nfim.\n'))),(0,t.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'  //m\xf3dulos\n  public static boolean par(int numero){\n      if(numero % 2 == 0){\n          return true;\n      }else{\n          return false;\n      }\n  }\n\n  //main\n  public static void main(String[] args){\n      //vari\xe1veis\n      int: x;\n      Scanner entrada = new Scanner(System.in);\n\n      //entrada\n      System.out.println("Entre com um n\xfamero: ");\n      leia(x);\n      entrada.close();\n\n      //processamento e sa\xedda\n      if(par(x)){\n          System.out.printf("%d \xe9 par.\\n");\n      }else{\n          System.out.printf("%d \xe9 \xedmpar.\\n");\n      }\n  }\n'))),(0,t.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'  #m\xf3dulos\n  def par(numero):\n      if numero%2 == 0:\n          return True\n      else:\n          return False;\n\n  #entrada\n  x = int(input("Entre com um n\xfamero: "))\n\n  #processamento e sa\xedda\n  if par(x):\n      print(f"{x} \xe9 par.");\n  else:\n      print(f"{x} \xe9 \xedmpar.");\n')))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exemplo")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Desenvolva uma fun\xe7\xe3o que retorna a soma de todos os n\xfameros \xedmpares em um intervalo.")),(0,t.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(s.Z,{value:"pseudocodigo",label:"Pseudoc\xf3digo",default:!0,mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'inicio\n  //m\xf3dulos\n  modulo par(inteiro: numero)\n      se(mod(numero,2) = 0)\n          ent\xe3o\n              retorne verdadeiro;\n          sen\xe3o\n              retorne falso;\n      fimse;\n  fimmodulo;\n\n  modulo impar(inteiro: numero)\n      retorne(n\xe3o par(numero));\n  fimmodulo;\n\n  modulo somaImparesIntervalo(inteiro: inicio, inteiro: fim)\n      inteiro: soma \u2190 0, i;\n      para i de inicio at\xe9 fim passo 1 fa\xe7a\n          se(impar(i))\n          ent\xe3o\n              soma \u2190 soma + i;\n          fimse;\n      fimpara;\n      retorne soma;\n  fimmodulo.\n\n  //vari\xe1veis\n  inteiro: ini, fim, soma;\n\n  //entrada\n  escreva("Entre com os valores de in\xedcio e fim: ");\n  leia(ini);\n  leia(fim);\n\n  //processamento\n  soma \u2190 somaImparesIntervalo(ini, fim);\n\n  //sa\xedda\n  escreva("A soma dos valores \xedmpares no intervalo [", ini, ",", fim, "] \xe9 ", soma);\nfim.\n'))),(0,t.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'  //m\xf3dulos\n  public static boolean par(int numero){\n      if(numero%2 == 0){\n          return true;\n      }else{\n          return false;\n      }\n  }\n\n  public static boolean impar(int numero){\n      return !par(numero);\n  }\n\n  public static int somaImparesIntervalo(int inicio, int fim){\n      int soma = 0, i;\n      for(i=inicio; i<=fim; i++)\n          if(impar(i)){\n              soma = soma + i;\n          }\n      return soma;\n  }\n\n  //vari\xe1veis\n  int ini, fim, soma;\n  Scanner entrada = new Scanner(System.in);\n\n  //entrada\n  System.out.println("Entre com os valores de in\xedcio e fim: ");\n  ini = entrada.nextInt();\n  fim = entrada.nextInt();\n  entrada.close();\n\n  //processamento\n  soma = somaImparesIntervalo(ini, fim);\n\n  //sa\xedda\n  System.out.printf("A soma dos valores \xedmpares no intervalo [ %d , %d \xe9 %d\\n", ini, fim, soma);\nfim.\n'))),(0,t.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'  #m\xf3dulos\n  def par(numero)\n      if numero % 2 == 0:\n          return True\n      else:\n          return False\n      \n  def impar(numero):\n      return not par(numero)\n\n  def somaImparesIntervalo(inicio, fim):\n      soma = 0\n      for i in range(ini, fim+1):\n          if impar(i):\n              soma = soma + i\n      return soma\n\n  \n  #entrada\n  print("Entre com os valores de in\xedcio e fim: ");\n  ini = int(input())\n  fim = int(input())\n\n  #processamento\n  soma \u2190 somaImparesIntervalo(ini, fim)\n\n  #sa\xedda\n  prinf(f"A soma dos valores \xedmpares no intervalo [{ini},{fim}] \xe9 {soma}")\n')))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Exerc\xedcios"),"  "),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Desenvolva fun\xe7\xf5es que realizem os seguinte c\xe1lculos:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"O maior valor entre duas vari\xe1veis do tipo inteiro;"),(0,t.kt)("li",{parentName:"ul"},"O menor valor entre duas vari\xe1veis do tipo inteiro;"),(0,t.kt)("li",{parentName:"ul"},"A soma de todos os n\xfameros impares em um intervalo, em que o usu\xe1rio pode digitar o in\xedcio e o fim do intervalo em qualquer ordem;"),(0,t.kt)("li",{parentName:"ul"},"O M\xednimo M\xfaltiplo Comum (MMC) entre dois valores;"),(0,t.kt)("li",{parentName:"ul"},"O M\xe1ximo Divisor Comum (MDC) entre dois valores.")))))}f.isMDXComponent=!0}}]);