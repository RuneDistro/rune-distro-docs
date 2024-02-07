"use strict";(self.webpackChunkdocasauro_teste=self.webpackChunkdocasauro_teste||[]).push([[658],{6925:(A,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>q});var n=o(5893),t=o(1151),a=o(1224),s=o(9042),r=o(5282);const d=(0,a.tv)({base:"w-full my-4 px-3 pt-3 pb-1 rounded-lg outline outline-1",variants:{contentStyle:{"tool-tip":"text-blue-text dark:text-white bg-light-blue dark:bg-dark-blue outline-blue","good-to-know":"text-green-text dark:text-white bg-light-green dark:bg-dark-green outline-green",warning:"text-red-text dark:text-white bg-light-red dark:bg-dark-red outline-red"}},defaultVariants:{contentStyle:"tool-tip"}}),i=(0,a.tv)({base:"w-fit flex items-start justify-center m-0 p-1 rounded-full dark:bg-white dark:bg-opacity-10",variants:{contentStyle:{"tool-tip":"text-blue","good-to-know":"text-green",warning:"text-red"}},defaultVariants:{contentStyle:"tool-tip"}});function c(A){let{description:e,contentStyle:o}=A;return(0,n.jsxs)("div",{className:d({contentStyle:o}),children:[(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)("div",{className:i({contentStyle:o}),children:"tool-tip"===o?(0,n.jsx)(s.sJz,{size:18}):"good-to-know"===o?(0,n.jsx)(s.BIp,{size:18}):(0,n.jsx)(r.ite,{size:18})}),(0,n.jsx)("h2",{className:"text-base font-semibold m-0",children:"tool-tip"===o?"Dica":"good-to-know"===o?"Bom saber":"Aten\xe7\xe3o"})]}),(0,n.jsx)("p",{className:"mt-3 text-sm font-medium",children:e})]})}const m={id:"components",sidebar_position:3,title:"Componentes com React",slug:"/react-components"},u="Componentes com React",p={id:"components",title:"Componentes com React",description:"Durante a constru\xe7\xe3o de uma documenta\xe7\xe3o, podemos enfrentar momentos onde iremos repetir alguns trechos de conte\xfado ou",source:"@site/docs/components.mdx",sourceDirName:".",slug:"/react-components",permalink:"/rune-distro-docs/react-components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"components",sidebar_position:3,title:"Componentes com React",slug:"/react-components"},sidebar:"tutorialSidebar",previous:{title:"Requisitos N\xe3o Funcionais",permalink:"/rune-distro-docs/system-requirements/non-functional-requirements"}},l={},q=[{value:"Escrevendo Componentes em React",id:"escrevendo-componentes-em-react",level:2},{value:"Importando Componentes em Arquivos Markdown",id:"importando-componentes-em-arquivos-markdown",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function j(A){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"componentes-com-react",children:"Componentes com React"}),"\n",(0,n.jsx)(e.p,{children:"Durante a constru\xe7\xe3o de uma documenta\xe7\xe3o, podemos enfrentar momentos onde iremos repetir alguns trechos de conte\xfado ou\nestiliza\xe7\xe3o de algo, o que pode ser um pouco chato por ter que criar o mesmo trecho de c\xf3digo/ texto diversas vezes."}),"\n",(0,n.jsx)(e.p,{children:"Pensando nisso que o Docussauros permite que escrevamos nossos pr\xf3prios componentes e utiliz\xe1-los, inclusive,\nem arquivos Markdown. Com isto, escrevemos apenas uma vez este trecho de c\xf3digo repetitivo e repassamos sua tag em\nqualquer lugar que quisermos."}),"\n",(0,n.jsx)(c,{contentStyle:"warning",description:"\nAtente-se que para componentes React funcionarem em arquivos Markdown \xe9 necess\xe1rio que o arquivo esteja com a\nextens\xe3o em .mdx, caso n\xe3o esteja o arquivo n\xe3o ir\xe1 entender c\xf3digo Javascript e retornar\xe1 erros na p\xe1gina.\n"}),"\n",(0,n.jsx)(e.h2,{id:"escrevendo-componentes-em-react",children:"Escrevendo Componentes em React"}),"\n",(0,n.jsxs)(e.p,{children:["Aqui n\xe3o muda muita coisa em rela\xe7\xe3o a cria\xe7\xe3o normal de componentes usando React em sua forma mais pura, ou seja, a\nmelhor maneira de escrever componentes em React \xe9 pela ",(0,n.jsx)(e.a,{href:"https://react.dev/learn/typescript#typescript-with-react-components",children:"documenta\xe7\xe3o oficial"}),"."]}),"\n",(0,n.jsx)(e.p,{children:"Lembrando que estamos usando Typescript, ent\xe3o a forma de escrever componentes muda um pouquinho."}),"\n",(0,n.jsxs)(e.p,{children:["Para mantermos o projeto organizado, iremos colocar os arquivos de componentes dentro de ",(0,n.jsx)(e.code,{children:"src/components/"}),", cada\ncomponente ter\xe1 sua pasta, que leva o nome do componente (com as iniciais em letras mai\xfasculas), com um arquivo\n",(0,n.jsx)(e.code,{children:"index.tsx"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Neste arquivo ",(0,n.jsx)(e.code,{children:"index.tsx"})," voc\xea ir\xe1 criar seu desejado componente."]}),"\n",(0,n.jsxs)(e.p,{children:["Estamos utilizando ",(0,n.jsx)(e.a,{href:"https://tailwindcss.com/",children:"TailwindCSS"})," como framework de estiliza\xe7\xe3o, pela sua facilidade e\nprodutividade. Recomendo seu uso para mantermos um padr\xe3o de desenvolvimento."]}),"\n",(0,n.jsxs)(e.p,{children:["Finalizado o componente, voc\xea agora ir\xe1 importar este arquivo onde desejar. Nesta documenta\xe7\xe3o irei abordar apenas como\nimportar componentes em arquivos ",(0,n.jsx)(e.code,{children:".mdx"}),", pois sua importa\xe7\xe3o em diferentes extens\xf5es j\xe1 \xe9 conhecida. Caso tenha alguma\nd\xfavida visite a ",(0,n.jsx)(e.a,{href:"https://react.dev/learn/your-first-component",children:"documenta\xe7\xe3o oficial"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"importando-componentes-em-arquivos-markdown",children:"Importando Componentes em Arquivos Markdown"}),"\n",(0,n.jsxs)(e.p,{children:["Com seu arquivo Markdown com a extens\xe3o ",(0,n.jsx)(e.code,{children:".mdx"}),", realize a importa\xe7\xe3o padr\xe3o do componente abaixo das keywords de\nconfigura\xe7\xe3o dos arquivos Markdown."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"exemplo-print1",src:o(9155).Z+"",width:"530",height:"150"})}),"\n",(0,n.jsx)(e.p,{children:"Ap\xf3s importado, s\xf3 us\xe1-lo da forma convencional, abrindo sua tag e setando, caso exista, as propriedades do componente."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"exemplo-print2",src:o(6339).Z+"",width:"512",height:"204"})}),"\n",(0,n.jsxs)(e.p,{children:["Neste caso, estamos usando o componente de nome ",(0,n.jsx)(e.em,{children:"EmphasisText"}),", que possui tr\xeas propriedades:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"contentStyle"}),": Define o tipo de estiliza\xe7\xe3o do cont\xe9udo. Existem tr\xeas tipos: ",(0,n.jsx)(e.em,{children:"tool-tip"}),", ",(0,n.jsx)(e.em,{children:"good-to-know"})," e ",(0,n.jsx)(e.em,{children:"warning"}),";"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"description"}),": Descri\xe7\xe3o do cont\xe9udo;"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"key"}),": Propriedade opcional, define uma chave \xfanica para cada componente de mesmo nome. Interessante coloc\xe1-lo quando\ntiver mais de um componente de mesmo nome no mesmo arquivo."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Este componente foi criado no intuito de definir, de forma enf\xe1tica, alguns pontos que podem ser interessantes de serem\nmostrados. Como dicas, curiosidades e avisos."}),"\n",(0,n.jsx)(e.p,{children:"A importa\xe7\xe3o do componente acima resulta no seguinte:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"exemplo-print3",src:o(8897).Z+"",width:"803",height:"210"})}),"\n",(0,n.jsx)(e.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,n.jsx)(e.p,{children:"Basicamente, \xe9 isto, n\xe3o h\xe1 muito segredo em rela\xe7\xe3o a constru\xe7\xe3o padr\xe3o de componentes React, apenas uma aten\xe7\xe3o na\nhora de fazer sua importa\xe7\xe3o."}),"\n",(0,n.jsx)(e.p,{children:"Sempre que houver algum trecho de c\xf3digo/ texto que se repita muito (mais de duas vezes), \xe9 interessante e considerado\nboa pr\xe1tica realizar sua refatora\xe7\xe3o e transform\xe1-lo em um componente reutiliz\xe1vel."}),"\n",(0,n.jsx)(c,{contentStyle:"warning",description:"\nNo Docussauros n\xe3o \xe9 permitido a cria\xe7\xe3o de um componente dentro de outro componente, pr\xe1tica que \xe9 muito comum\nno mundo React.\n"})]})}function h(A={}){const{wrapper:e}={...(0,t.a)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(j,{...A})}):j(A)}},6339:(A,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/import-component-in-mdx-2-ff85c74cb75ac8989fe0ebdf558199ce.png"},8897:(A,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,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"},9155:(A,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/import-component-in-mdx-b9b84d86f31d858d7d34b45f7d843529.png"}}]);