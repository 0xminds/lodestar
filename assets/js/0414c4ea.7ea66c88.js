"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[3235],{8633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const o={},r="Testing",a={id:"contribution/testing/index",title:"Testing",description:"Testing is critical to the Lodestar project and there are many types of tests that are run to build a product that is both effective AND efficient. This page will help to break down the different types of tests you will find in the Lodestar repo.",source:"@site/pages/contribution/testing/index.md",sourceDirName:"contribution/testing",slug:"/contribution/testing/",permalink:"/lodestar/contribution/testing/",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/contribution/testing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/lodestar/contribution/dev-cli"},next:{title:"End-To-End Tests",permalink:"/lodestar/contribution/testing/end-to-end-tests"}},c={},d=[{value:"Unit Tests",id:"unit-tests",level:3},{value:"Spec Tests",id:"spec-tests",level:3},{value:"Performance Tests",id:"performance-tests",level:3},{value:"End-To-End Tests",id:"end-to-end-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Simulation Tests",id:"simulation-tests",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(t.p,{children:"Testing is critical to the Lodestar project and there are many types of tests that are run to build a product that is both effective AND efficient. This page will help to break down the different types of tests you will find in the Lodestar repo."}),"\n",(0,s.jsx)(t.h3,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(t.p,{children:["This is the most fundamental type of test in most code bases. In all instances mocks, stubs and other forms of isolation are used to test code on a functional, unit level. See the ",(0,s.jsx)(t.a,{href:"/lodestar/contribution/testing/unit-tests",children:"Unit Tests"})," page for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"spec-tests",children:"Spec Tests"}),"\n",(0,s.jsxs)(t.p,{children:["The Ethereum Consensus Specifications are what ensure that the various consensus clients do not diverge on critical computations and will work harmoniously on the network. See the ",(0,s.jsx)(t.a,{href:"/lodestar/contribution/testing/spec-tests",children:"Spec Tests"})," page for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"performance-tests",children:"Performance Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Node.js is an unforgiving virtual machine when it comes to high performance, multi-threaded applications. In order to ensure that Lodestar can not only keep up with the chain, but to push the boundary of what is possible, there are lots of performance tests that benchmark programming paradigms and prevent regression. See the ",(0,s.jsx)(t.a,{href:"/lodestar/contribution/testing/performance-tests",children:"Performance Testing"})," page for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"end-to-end-tests",children:"End-To-End Tests"}),"\n",(0,s.jsxs)(t.p,{children:["E2E test are where Lodestar is run in its full form, often from the CLI as a user would to check that the system as a whole works as expected. These tests are meant to exercise the entire system in isolation and there is no network interaction, nor interaction with any other code outside of Lodestar. See the ",(0,s.jsx)(t.a,{href:"/lodestar/contribution/testing/end-to-end-tests",children:"End-To-End Testing"})," page for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Integration tests are meant to test how Lodestar interacts with other clients, but are not considered full simulations. This is where Lodestar may make API calls or otherwise work across the process boundary, but there is required mocking, stubbing, or class isolation. An example of this is using the ",(0,s.jsx)(t.code,{children:"ExecutionEngine"})," class to make API calls to a Geth instance to check that the http requests are properly formatted."]}),"\n",(0,s.jsx)(t.h3,{id:"simulation-tests",children:"Simulation Tests"}),"\n",(0,s.jsxs)(t.p,{children:["These are the most comprehensive types of tests. They aim to test Lodestar in a fully functioning ephemeral devnet environment. See the ",(0,s.jsx)(t.a,{href:"/lodestar/contribution/testing/simulation-tests",children:"Simulation Testing"})," page for more information."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);