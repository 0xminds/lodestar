"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[1959],{9376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const o={},r="Introduction",a={id:"introduction",title:"Introduction",description:"Ethereum is one of the most profoundly important inventions in recent history. It is a decentralized, open-source blockchain featuring smart contract functionality. It is the second-largest cryptocurrency by market capitalization, after Bitcoin, and is the most actively used blockchain. Ethereum was proposed in 2013 by programmer Vitalik Buterin. Development was crowdfunded in 2014, and the network went live on 30 July 2015, with 72 million coins premined. ChainSafe was founded not too long afterwards and has been actively working in the Ethereum space ever since. We are proud to develop Lodestar and to present this documentation as a resource for the Ethereum community.",source:"@site/pages/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/lodestar/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/lodestar/"},next:{title:"Security Policy",permalink:"/lodestar/security"}},l={},c=[{value:"Proof of Stake",id:"proof-of-stake",level:2},{value:"Consensus Clients",id:"consensus-clients",level:2},{value:"Why Client Diversity?",id:"why-client-diversity",level:2},{value:"Ethereum Reading List",id:"ethereum-reading-list",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Ethereum is one of the most profoundly important inventions in recent history. It is a decentralized, open-source blockchain featuring smart contract functionality. It is the second-largest cryptocurrency by market capitalization, after Bitcoin, and is the most actively used blockchain. Ethereum was proposed in 2013 by programmer Vitalik Buterin. Development was crowdfunded in 2014, and the network went live on 30 July 2015, with 72 million coins premined. ChainSafe was founded not too long afterwards and has been actively working in the Ethereum space ever since. We are proud to develop Lodestar and to present this documentation as a resource for the Ethereum community."}),"\n",(0,i.jsx)(t.h2,{id:"proof-of-stake",children:"Proof of Stake"}),"\n",(0,i.jsx)(t.p,{children:"In Ethereum's Proof of Stake (PoS) model, validators replace miners from the Proof of Work (PoW) system. Validators are Ethereum stakeholders who lock up a portion of their Ether as a stake. The protocol randomly selects these validators to propose new blocks. The chance of being chosen is tied to the size of their stake: the more Ether staked, the higher the probability of being selected to propose the block. Proposers receive transaction fees and block rewards as incentives. Validators are also responsible for voting on the validity of blocks proposed by other validators. However, they face penalties, known as slashing, for actions like double-signing, votes on a block that is not in the majority or going offline, ensuring network integrity and reliability. The PoS mechanism significantly reduces energy consumption compared to PoW, because it does not require extensive computational power. Moreover, PoS tends to facilitate faster transaction validations and block creations, enhancing the overall performance and scalability of the network."}),"\n",(0,i.jsx)(t.h2,{id:"consensus-clients",children:"Consensus Clients"}),"\n",(0,i.jsx)(t.p,{children:"In an effort to promote client diversity there are several beacon-nodes being developed. Each is programmed in a different language and by a different team. The following is a list of the current beacon-node clients:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://lodestar.chainsafe.io/",children:"Lodestar"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://prysmaticlabs.com/",children:"Prysm"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://lighthouse.sigmaprime.io/",children:"Lighthouse"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://consensys.net/knowledge-base/ethereum-2/teku/",children:"Teku"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://nimbus.team/",children:"Nimbus"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://grandine.io",children:"Grandine"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"why-client-diversity",children:"Why Client Diversity?"}),"\n",(0,i.jsx)(t.p,{children:"The Ethereum network's robustness is significantly enhanced by its client diversity, whereby multiple, independently-developed clients conforming to a common specification facilitate seamless interaction and function equivalently across nodes. This client variety not only fosters a rich ecosystem but also provides a buffer against network-wide issues stemming from bugs or malicious attacks targeted at particular clients. For instance, during the Shanghai denial-of-service attack in 2016, the diversified client structure enabled the network to withstand the assault, underscoring the resilience afforded by multiple client configurations."}),"\n",(0,i.jsx)(t.p,{children:"On the consensus layer, client distribution is crucial for maintaining network integrity and finality, ensuring transactions are irreversible once validated. A balanced spread of nodes across various clients helps mitigate risks associated with potential bugs or attacks that could, in extreme cases, derail the consensus process or lead to incorrect chain splits, thereby jeopardizing the network's stability and trust. While the data suggests a dominance of Prysm client on the consensus layer, efforts are ongoing to promote a more even distribution among others like Lighthouse, Teku, Nimbus and Grandine. Encouraging the adoption of minority clients, bolstering their documentation, and leveraging real-time client diversity dashboards are among the strategies being employed to enhance client diversity, which in turn fortifies the Ethereum consensus layer against adversities and fosters a healthier decentralized network ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"The non-finality event in May 2023 on the Ethereum network posed a significant challenge. The issue arose from attestations for a fork, which necessitated state replays to validate the attestations, causing a notable strain on system resources. As a result, nodes fell out of sync, which deterred the accurate tracking of the actual head of the chain. This situation was exacerbated by a decline in attestations during specific epochs, further hampering the consensus mechanism. The Lodestar team noticed late attestations several weeks prior to the event and implemented a feature that attempted to address such challenges by not processing untimely attestations, and thus not requiring expensive state replays\u200b. While it was done for slightly different reasons, the result was the same. Lodestar was able to follow the chain correctly and helped to stabilize the network. This example underscored the importance of client diversity and network resilience against potential forks and replay attacks. These are considered realistic threats, especially in the context of system complexity like in Ethereum's consensus mechanism."}),"\n",(0,i.jsx)(t.h2,{id:"ethereum-reading-list",children:"Ethereum Reading List"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/",children:"Ethereum Docs"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://eth2book.info/capella/",children:"Upgrading Ethereum"})," by Ben Edgington"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/ethereumbook/ethereumbook",children:"Ethereum Book"})," by Andreas M. Antonopoulos and Gavin Wood"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/ethereum/consensus-specs",children:"Ethereum Consensus Specification"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://browse.arxiv.org/pdf/1710.09437.pdf",children:"Casper the Friendly Finality Gadget"})," by Vitalik Buterin and Virgil Griffith"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/protolambda/lmd-ghost",children:"LMD Ghost"})," by protolambda"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);