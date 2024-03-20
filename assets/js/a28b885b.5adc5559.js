"use strict";(self.webpackChunkalgoritmos=self.webpackChunkalgoritmos||[]).push([[218],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(v,s(s({ref:n},u),{},{components:t})):a.createElement(v,s({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),o=t(7294),r=t(6010),s=t(2466),l=t(6550),i=t(1980),c=t(7392),u=t(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,c]=v({queryString:t,groupId:a}),[d,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),b=(()=>{const e=i??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==l&&(d(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function h(e){const n=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(g,(0,a.Z)({},e,n)),o.createElement(y,(0,a.Z)({},e,n)))}function T(e){const n=(0,b.Z)();return o.createElement(h,(0,a.Z)({key:String(n)},e))}},9994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(7462),o=(t(7294),t(3905)),r=t(4866),s=t(5162);const l={},i="Sockets",c={unversionedId:"RC/Camadas_de_protocolos/Sockets",id:"RC/Camadas_de_protocolos/Sockets",title:"Sockets",description:"App v1",source:"@site/docs/RC/02-Camadas_de_protocolos/05-Sockets.md",sourceDirName:"RC/02-Camadas_de_protocolos",slug:"/RC/Camadas_de_protocolos/Sockets",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Sockets",draft:!1,editUrl:"https://github.com/darlonv/algoritmos/tree/main/docs/RC/02-Camadas_de_protocolos/05-Sockets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebarRC",previous:{title:"Protocolos",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Protocolos"},next:{title:"Modelos de camadas",permalink:"/materiais/docs/RC/Camadas_de_protocolos/Modelos camadas"}},u={},d=[{value:"App v1",id:"app-v1",level:2},{value:"App v2",id:"app-v2",level:2},{value:"App v3",id:"app-v3",level:2},{value:"App v4",id:"app-v4",level:2}],p={toc:d},m="wrapper";function v(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sockets"},"Sockets"),(0,o.kt)("h2",{id:"app-v1"},"App v1"),(0,o.kt)("p",null,"Nesta vers\xe3o, temos uma aplica\xe7\xe3o simples cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com outra mensagem."),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{groupId:"cliente-servidor",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cliente",label:"Cliente",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sockets_client_v1.py"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import socket\n\n#Porta do servidor\nport = 10110\n\n#Endere\xe7o do servidor\ndest = '127.0.0.1'\n\n#Mensagem que o cliente envia\nmsg = 'Ol\xe1. Sou o cliente.'\n\n#Objeto socket\nclient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n#Conecta ao servidor\nprint(f'== Conectando a {dest}:{port}==')\nclient.connect((dest, port))\n\n#Envia mensagem ao servidor\nprint('== Enviando mensagem ==')\nclient.send(msg.encode())\n\n#Recebe mensagem do servidor\nprint('==Recebendo mensagem do servidor ==')\nfrom_server = client.recv(4096)\nprint(from_server.decode())\n\n#Fecha a conex\xe3o\nclient.close()\n"))),(0,o.kt)(s.Z,{value:"servidor",label:"Servidor",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sockets_server_v1.py"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#Biblioteca sockets\nimport socket\n\n#Porta do servidor\nport = 10110\n\n#Mensagem que o servidor envia\nmsg = '** Ol\xe1. Sou o servidor. **'\n\n#Objeto socket\nserv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEPORT, 1)\n\n#Associa o socket a uma porta local\nserv.bind(('0.0.0.0',port))\nserv.listen()\n\n#Servidor aguarda conex\xe3o\n\nprint(f'== Servidor aguardando conex\xe3o na porta {port} ==')\nconn, addr = serv.accept()\nprint(f'== Conexao recebida de {addr} ==')\n\n#Recebe os dados\ndata = conn.recv(4096)\n\n#Trata os dados recebidos\nfrom_client = data\nprint('== Dados recebidos: ==')\nprint(from_client.decode())\n\n#Envia uma mensagem\nprint('== Enviando mensagem ==')\nconn.send(msg.encode())\nprint('== Mensagem enviada ==')\n\n#Fecha a conexao\nconn.close()\nprint('== Cliente desconectado ==')\n\n#encerra o socket\nserv.shutdown(socket.SHUT_RDWR)\n")))))),(0,o.kt)("h2",{id:"app-v2"},"App v2"),(0,o.kt)("p",null,"Nesta vers\xe3o, temos uma aplica\xe7\xe3o cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com outra mensagem. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliente: envia uma mensagem ao servidor"),(0,o.kt)("li",{parentName:"ul"},"Servidor: a mensagem recebida na tela e encerra a conex\xe3o. Ap\xf3s isso, aguarda por uma nova conex\xe3o.")),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{groupId:"cliente-servidor",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cliente",label:"Cliente",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sockets_client_v2.py"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import socket\n\n#Porta do servidor\nport = 10110\n\n#Endere\xe7o do servidor\ndest = '127.0.0.1'\n\n#Mensagem que o cliente envia\nmsg = 'Ol\xe1. Sou o cliente.'\n\n#Objeto socket\nclient = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n#Conecta ao servidor\nprint(f'== Conectando a {dest}:{port}==')\nclient.connect((dest, port))\n\n#Envia mensagem ao servidor\nprint('== Enviando mensagem ==')\nclient.send(msg.encode())\n\n#Fecha a conex\xe3o\nclient.close()\n"))),(0,o.kt)(s.Z,{value:"servidor",label:"Servidor",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sockets_server_v2.py"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#Biblioteca sockets\nimport socket\n\n#Porta do servidor\nport = 10110\n\n#Mensagem que o servidor envia\nmsg = '** Ol\xe1. Sou o servidor. **'\n\n#Objeto socket\nserv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nserv  = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n\n#Associa o socket a uma porta local\nserv.bind(('0.0.0.0',port))\nserv.listen()\n\n#Servidor fica aguardando conex\xf5es\nwhile True:\n    print(f'== Servidor aguardando conex\xf5es na porta {port} ==')\n    conn, addr = serv.accept()\n    print(f'== Conexao recebida de {addr} ==')\n \n    #Recebe os dados\n    data = conn.recv(4096)\n\n    #Trata os dados recebidos\n    from_client = data\n    print('== Dados recebidos: ==')\n    print(from_client.decode())\n\n    #Fecha a conexao\n    conn.close()\n    print('== Cliente desconectado ==')\n\n#encerra o socket\nserv.shutdown(socket.SHUT_RDWR)\n")))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Atividade")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Utilizando sockets, desenvolva uma aplica\xe7\xe3o que opere como um servidor de mensagens, em que o servidor recebe a mensagem de um cliente e apresenta na tela o endere\xe7o IP do cliente seguido da mensagem.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Modifique a aplica\xe7\xe3o, cadastrando um determinado n\xfamero de IPs. Apresente na tela apenas mensagens origindas de endere\xe7os IP cadastrados. "),(0,o.kt)("li",{parentName:"ul"},"Modifique a aplica\xe7\xe3o, cadastrando o nome do usu\xe1rio em cada IP. Ao apresentar a mensagem na tela, exiba o nome do usu\xe1rio ao inv\xe9s do endere\xe7o IP.")))),(0,o.kt)("h2",{id:"app-v3"},"App v3"),(0,o.kt)("p",null,"Nesta vers\xe3o, temos uma aplica\xe7\xe3o cliente/servidor, em que o cliente envia uma mensagem ao servidor e o servidor responde com a mesma mensagem escrita em mai\xfasculas. "),(0,o.kt)("h2",{id:"app-v4"},"App v4"),(0,o.kt)("p",null,"Nesta vers\xe3o, temos uma aplica\xe7\xe3o cliente/servidor, em que o cliente envia uma mensagem ao servidor utilizando um conte\xfado no formato ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),". O servidor interpreta o conte\xfado e resolve uma determinada opera\xe7\xe3o. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliente -> Servidor:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "operacao": "+",\n    "operandos": [4,5]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Servidor -> Cliente:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resposta": 9\n}\n')))}v.isMDXComponent=!0}}]);