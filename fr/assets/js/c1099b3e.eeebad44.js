"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3419],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Infrastructure de la cha\xeene de blocs",l={unversionedId:"basics/infra",id:"basics/infra",title:"Infrastructure de la cha\xeene de blocs",description:"In traditional web services, a front-end application (like a webpage or an app) interacts with a back-end application (like an API or a database server). In blockchain infrastructure, a front-end speaks directly with the blockchain network, visualizing the state of the chain or interacts with a back-end that is in connection with the blockchain network.",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/02-infra.md",sourceDirName:"basics",slug:"/basics/infra",permalink:"/fr/dev-academy/basics/infra",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Qu'est-ce que la blockchain ?",permalink:"/fr/dev-academy/basics/what-is-blockchain"},next:{title:"Les bases de Cosmos SDK et CosmWasm",permalink:"/fr/dev-academy/basics/cosmos-sdk-cw"}},d={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"infrastructure-de-la-cha\xeene-de-blocs"},"Infrastructure de la cha\xeene de blocs"),(0,o.kt)("p",null,"In traditional web services, a front-end application (like a webpage or an app) interacts with a back-end application (like an API or a database server). In blockchain infrastructure, a front-end speaks directly with the blockchain network, visualizing the state of the chain or interacts with a back-end that is in connection with the blockchain network."),(0,o.kt)("p",null,"A blockchain network consists of ",(0,o.kt)("em",{parentName:"p"},"nodes"),", a collection of computers to store and verify data. Nodes validate transactions and add them together to build blocks. Each node has a copy of the data that has been stored on the blockchain since its inception, which gets updated as fresh blocks are confirmed and added to the chain. This decentralized network of computers takes the place of databases and APIs used in traditional web services. The blockchain itself serves as a data store, while the application (or state machine) run by the nodes takes the place of data-store APIs (by ingesting transactions and defining transitions between states)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": In some cases, blockchain applications can also interact with a back-end that is in connection with the blockchain network. For instance, a blockchain-connected back-end infrastructure can save information to an external database to serve complex queries that would be expensive to perform on the chain itself."))}f.isMDXComponent=!0}}]);