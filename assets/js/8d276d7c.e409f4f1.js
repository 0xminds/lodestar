"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[7934],{5854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var o=a(4848),s=a(8453);const n={title:"Dependency Graph"},r=void 0,i={id:"contribution/depgraph",title:"Dependency Graph",description:"Lodestar monorepo dependency graph",source:"@site/pages/contribution/depgraph.md",sourceDirName:"contribution",slug:"/contribution/depgraph",permalink:"/lodestar/contribution/depgraph",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/contribution/depgraph.md",tags:[],version:"current",frontMatter:{title:"Dependency Graph"},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Testnet",permalink:"/lodestar/contribution/advanced-topics/setting-up-a-testnet"},next:{title:"CLI Reference",permalink:"/lodestar/contribution/dev-cli"}},c={},d=[{value:"Lodestar monorepo dependency graph",id:"lodestar-monorepo-dependency-graph",level:2},{value:"<code>@lodestar/params</code>",id:"lodestarparams",level:2},{value:"<code>@lodestar/types</code>",id:"lodestartypes",level:2},{value:"<code>@lodestar/config</code>",id:"lodestarconfig",level:2},{value:"<code>@lodestar/utils</code>",id:"lodestarutils",level:2},{value:"<code>@lodestar/state-transition</code>",id:"lodestarstate-transition",level:2},{value:"<code>@lodestar/db</code>",id:"lodestardb",level:2},{value:"<code>@lodestar/fork-choice</code>",id:"lodestarfork-choice",level:2},{value:"<code>@lodestar/validator</code>",id:"lodestarvalidator",level:2},{value:"<code>@lodestar/beacon-node</code>",id:"lodestarbeacon-node",level:2},{value:"<code>@chainsafe/lodestar</code>",id:"chainsafelodestar",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",mermaid:"mermaid",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"lodestar-monorepo-dependency-graph",children:"Lodestar monorepo dependency graph"}),"\n",(0,o.jsxs)(t.p,{children:["This is a diagram of the various ",(0,o.jsx)(t.code,{children:"lodestar-*"})," packages in the Lodestar monorepo and how they fit together:"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["note: this dependency graph only applies to dependencies as they are used in the ",(0,o.jsx)(t.code,{children:"src/"})," folders of each package, not in ",(0,o.jsx)(t.code,{children:"test/"})]})}),"\n",(0,o.jsx)(t.mermaid,{value:'graph TD\n    lodestar["lodestar"]:::nodemodule\n    cli["lodestar-cli"]:::nodemodule\n    config["lodestar-config"]:::nodemodule\n    db["lodestar-db"]:::nodemodule\n    fork-choice["lodestar-fork-choice"]:::nodemodule\n    params["lodestar-params"]:::nodemodule\n    types["lodestar-types"]:::nodemodule\n    utils["lodestar-utils"]:::nodemodule\n    validator["lodestar-validator"]:::nodemodule\n    state-trans["lodestar-state-transition"]:::nodemodule\n\n    params--\x3econfig\n    params--\x3etypes\n\n    types--\x3elodestar\n    types--\x3ecli\n    types--\x3econfig\n    types--\x3evalidator\n    types--\x3efork-choice\n\n    config--\x3elodestar\n    config--\x3ecli\n    config--\x3evalidator\n    config--\x3efork-choice\n    config--\x3estate-trans\n    config--\x3edb\n\n    utils--\x3elodestar\n    utils--\x3edb\n    utils--\x3ecli\n    utils--\x3evalidator\n    utils--\x3efork-choice\n    utils--\x3estate-trans\n\n    state-trans--\x3elodestar\n    state-trans--\x3evalidator\n    state-trans--\x3efork-choice\n\n    db--\x3elodestar\n    db--\x3evalidator\n\n    fork-choice--\x3elodestar\n\n    lodestar--\x3ecli\n    validator--\x3ecli\n\n    click cli "https://github.com/ChainSafe/lodestar/tree/unstable/packages/cli"\n    click lodestar "https://github.com/ChainSafe/lodestar/tree/unstable/packages/beacon-node"\n    click validator "https://github.com/ChainSafe/lodestar/tree/unstable/packages/validator"\n    click db "https://github.com/ChainSafe/lodestar/tree/unstable/packages/db"\n    click params "https://github.com/ChainSafe/lodestar/tree/unstable/packages/params"\n    click state-trans "https://github.com/ChainSafe/lodestar/tree/unstable/packages/state-transition"\n    click fork-choice "https://github.com/ChainSafe/lodestar/tree/unstable/packages/fork-choice"\n    click types "https://github.com/ChainSafe/lodestar/tree/unstable/packages/types"\n    click utils "https://github.com/ChainSafe/lodestar/tree/unstable/packages/utils"\n    click config "https://github.com/ChainSafe/lodestar/tree/unstable/packages/config"\n\n    classDef nodemodule fill:grey,stroke-width:2px,stroke:black,color:white;\n    linkStyle default stroke:grey, fill:none,stroke-width:1.5px;'}),"\n",(0,o.jsxs)(t.p,{children:["For a list of all the packages in the monorepo and a description for each, click ",(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar#packages",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Let's talk about how each package fits together in finer detail, from top to bottom, following the chart."}),"\n",(0,o.jsx)(t.h2,{id:"lodestarparams",children:(0,o.jsx)(t.code,{children:"@lodestar/params"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/params",children:"@lodestar/params"})," contains the parameters for configuring an Ethereum Consensus network. For example, the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/v1.1.10/specs/phase0/beacon-chain.md#configuration",children:"mainnet params"})]}),"\n",(0,o.jsx)(t.h2,{id:"lodestartypes",children:(0,o.jsx)(t.code,{children:"@lodestar/types"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/types",children:"@lodestar/types"})," contains Ethereum Consensus ssz types and data structures."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarconfig",children:(0,o.jsx)(t.code,{children:"@lodestar/config"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/config",children:"@lodestar/config"})," combines ",(0,o.jsx)(t.code,{children:"@lodestar/params"})," and ",(0,o.jsx)(t.code,{children:"@lodestar/types"})," together to be used as a single config object across the other Lodestar packages."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarutils",children:(0,o.jsx)(t.code,{children:"@lodestar/utils"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/utils",children:"@lodestar/utils"})," contains various utilities that are common among the various Lodestar monorepo packages."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarstate-transition",children:(0,o.jsx)(t.code,{children:"@lodestar/state-transition"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/state-transition",children:"@lodestar/state-transition"})," contains the Lodestar implementation of the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/v1.1.10/specs/phase0/beacon-chain.md#beacon-chain-state-transition-function",children:"beacon state transition function"}),", which is used by ",(0,o.jsx)(t.code,{children:"@lodestar/beacon-node"})," to perform the actual beacon state transition. This package also contains various functions used to calculate info about the beacon chain (such as ",(0,o.jsx)(t.code,{children:"computeEpochAtSlot"}),") which are used by ",(0,o.jsx)(t.code,{children:"@lodestar/fork-choice"})," and ",(0,o.jsx)(t.code,{children:"@lodestar/validator"})]}),"\n",(0,o.jsx)(t.h2,{id:"lodestardb",children:(0,o.jsx)(t.code,{children:"@lodestar/db"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/db",children:"@lodestar/db"})," is where all persistent data about the beacon node is stored. Any package that needs to read or write persistent beacon node data depends on ",(0,o.jsx)(t.code,{children:"lodestar-db"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarfork-choice",children:(0,o.jsx)(t.code,{children:"@lodestar/fork-choice"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/fork-choice",children:"@lodestar/fork-choice"})," holds the methods for reading/writing the fork choice DAG. The ",(0,o.jsx)(t.code,{children:"@lodestar/beacon-node"})," package is the sole consumer of this package because the beacon node itself is what controls when the fork choice DAG is updated.\nFor a good explanation on how the fork choice itself works, see the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/annotated-spec/blob/master/phase0/fork-choice.md",children:"annotated fork choice spec"}),". This is an annotated version of the ",(0,o.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/v1.1.10/specs/phase0/fork-choice.md",children:"Ethereum Consensus fork choice spec"})," which ",(0,o.jsx)(t.code,{children:"lodestar-fork-choice"})," is based on."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarvalidator",children:(0,o.jsx)(t.code,{children:"@lodestar/validator"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/validator",children:"@lodestar/validator"})," contains the validator client. The sole consumer of this package is ",(0,o.jsx)(t.code,{children:"@chainsafe/lodestar"}),", which provides CLI access to run and configure the validator client. However, the validator client communicates to a REST API that is contained in ",(0,o.jsx)(t.code,{children:"@lodestar/beacon-node"})," (specifically in the ",(0,o.jsx)(t.code,{children:"api"})," module) to perform the validator duties."]}),"\n",(0,o.jsx)(t.h2,{id:"lodestarbeacon-node",children:(0,o.jsx)(t.code,{children:"@lodestar/beacon-node"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/beacon-node",children:"@lodestar/beacon-node"}),' contains the actual beacon node process itself, which is the aggregate of all the above packages and the "brain" of the Lodestar beacon chain implementation. All of the node modules live in this package as well.']}),"\n",(0,o.jsx)(t.h2,{id:"chainsafelodestar",children:(0,o.jsx)(t.code,{children:"@chainsafe/lodestar"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/ChainSafe/lodestar/tree/unstable/packages/cli",children:"@chainsafe/lodestar"})," combines everything together for CLI usage and configuration of the beacon node and validator."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var o=a(6540);const s={},n=o.createContext(s);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);