"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8537],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"replication-outline",title:"Replication Outline"},l=void 0,c={unversionedId:"postgresql/postgresql-theory/replication-outline",id:"postgresql/postgresql-theory/replication-outline",isDocsHomePage:!1,title:"Replication Outline",description:"Before looking into how a highly available PostgreSQL using streaming replication is build, let's draw an outline of what is to be achieved. Then in subsequent sections the design goals will be iteratively approximated.",source:"@site/docs/postgresql/20-postgresql-theory/05-replication-outline.md",sourceDirName:"postgresql/20-postgresql-theory",slug:"/postgresql/postgresql-theory/replication-outline",permalink:"/a9s-kubernetes-training/postgresql/postgresql-theory/replication-outline",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"replication-outline",title:"Replication Outline"},sidebar:"docs",previous:{title:"Why use Replication?",permalink:"/a9s-kubernetes-training/postgresql/postgresql-theory/why-use-replication"},next:{title:"PostgreSQL Streaming Replication",permalink:"/a9s-kubernetes-training/postgresql/postgresql-theory/streaming-replication"}},p=[{value:"Primary and Secondary PostgreSQL Servers",id:"primary-and-secondary-postgresql-servers",children:[]},{value:"Asynchronous Replication",id:"asynchronous-replication",children:[]},{value:"Automatic Failure Detection",id:"automatic-failure-detection",children:[]},{value:"Consensus and Leader Election",id:"consensus-and-leader-election",children:[]},{value:"Leader Promotion",id:"leader-promotion",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Links and Sources",id:"links-and-sources",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before looking into ",(0,i.kt)("strong",{parentName:"p"},"how")," a highly available PostgreSQL using streaming replication is build, let's draw an outline of ",(0,i.kt)("strong",{parentName:"p"},"what")," is to be achieved. Then in subsequent sections the design goals will be iteratively approximated."),(0,i.kt)("p",null,"In the remainder of this training the focus will be to create an asynchronous streaming replication with PostgreSQL. This will lead to certain characteristics and challenges."),(0,i.kt)("p",null,"Let's assume a cluster consisting of three (3) PostgreSQL replicas in a StatefulSet setup with asynchronous streaming replication."),(0,i.kt)("h2",{id:"primary-and-secondary-postgresql-servers"},"Primary and Secondary PostgreSQL Servers"),(0,i.kt)("p",null,"In PostgreSQL there is not client awareness that replication is used. When configuring an application to connect to a PostgreSQL server server credentials have to be provided. These credentials usually include the ",(0,i.kt)("strong",{parentName:"p"},"hostname"),", username, password, port and other configuration options."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Only a single hostname pointing to a single PostgreSQL server can be supplied to a standard PostgreSQL client"),"."),(0,i.kt)("p",null,"Per default, all write and read requests will be issued against this particular server. "),(0,i.kt)("h2",{id:"asynchronous-replication"},"Asynchronous Replication"),(0,i.kt)("p",null,"With ",(0,i.kt)("em",{parentName:"p"},"asynchronous")," replication changes made to a PostgreSQL's dataset are replicated ",(0,i.kt)("strong",{parentName:"p"},"after")," the actual transaction."),(0,i.kt)("p",null,"Let's assume an application inserts a record into a table. At the exact moment the transaction has been comitted only the server accepting the incoming SQL statement reflects the change. None of the two other PostgreSQL servers in the StatefulSet will take notice, instantly. It takes a bit for them to retrieve changes."),(0,i.kt)("p",null,"If asynchronous streaming replication is setup properly, the remaining servers will retrieve changes made to their peer and store them locally. The time delay in which the servers are out of sync is called ",(0,i.kt)("strong",{parentName:"p"},"replication lag"),". In case of a failure this data - lagging behind - would be lost."),(0,i.kt)("p",null,"As asynchronous streaming replication in PostgreSQL means applying data changes of a particular server to a number of other servers which act as ",(0,i.kt)("em",{parentName:"p"},"followers")," a clear topology is established. The server receiving all read and write requests is called the ",(0,i.kt)("strong",{parentName:"p"},"Primary")," and its followers are called ",(0,i.kt)("strong",{parentName:"p"},"Secondaries"),". Other terminologies use ",(0,i.kt)("strong",{parentName:"p"},"Leader & Followers")," and (obsolete) ",(0,i.kt)("strong",{parentName:"p"},"Master and Slaves"),"."),(0,i.kt)("p",null,"The simplest approach is to determine the roles of primary and secondary servers statically. However, in a failure scenario it would be desirable to have ",(0,i.kt)("strong",{parentName:"p"},"automatic failure detection"),", ",(0,i.kt)("strong",{parentName:"p"},"leader election")," and ",(0,i.kt)("strong",{parentName:"p"},"leader promotion"),"."),(0,i.kt)("h2",{id:"automatic-failure-detection"},"Automatic Failure Detection"),(0,i.kt)("p",null,"Detecting a failure in a distributed system is a non-trivial problem which can be traced by to the well known Byzantine Generals Problem ","[1]",". Overly simplifying, it is hard to distinguish between a failed server and a failing network connection."),(0,i.kt)("p",null,"Consider a simple scenario where the Primary server has failed due to the failure of the underlying infrastructure availability zone. In this scenario, the failed Primary is down and will stay down. No other Pod can replace it as the entire availability zone is affected.\nIn such as case a surving Secondary pod could detect that the Primary is missing and initiate a leader election. But how can the Secondary be sure that the Primary is really down and distinguish this scenario from the scenario where only the Secondary can't reach the Primary? In the latter case, a falsely triggered leader election could do harm. The worst case would be to have multiple Primaries receving incoming requests resulting into data inconsistencies which cannot be resolve automatically."),(0,i.kt)("h2",{id:"consensus-and-leader-election"},"Consensus and Leader Election"),(0,i.kt)("p",null,"In distrbuted systems engineering the solution to the Byzantine Generals Problems is sometimes referred to as ",(0,i.kt)("strong",{parentName:"p"},"consensus algorithms"),". Without going too much into details two algorithms dominate the scene: ",(0,i.kt)("em",{parentName:"p"},"Paxos")," and ",(0,i.kt)("em",{parentName:"p"},"RAFT")," ","[2]",". The essence here is: a cluster requires an odd number of nodes (3, 5, ...) to reach consensus by forming a quorum - imagine it as a majority vote."),(0,i.kt)("p",null,"Implementations of consensus algorithms are all over the place. Kubernetes itself, etcd, Zookeeper and the alike are all equipped with them."),(0,i.kt)("p",null,"With an implementation of a consensus algorithm at hand, being certain of a failed node and forming a quorum to elect a new leader is possible."),(0,i.kt)("h2",{id:"leader-promotion"},"Leader Promotion"),(0,i.kt)("p",null,"Once a leader has been elected, it also has to be promoted. In technical terms: during leader promition it is ensured that database clients will exclusively connect to the newly promoted Primary. Not to the old Primary (which may still be around) and not to any of the Secondaries."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"As you can see: things get complicated quickly. Therefore, following the ",(0,i.kt)("em",{parentName:"p"},"divide and conquer")," paradigm, the PostgreSQL replication endeavour is split into manageble steps."),(0,i.kt)("p",null,"In the next step, you'll look into how replication works with PostgreSQL and ",(0,i.kt)("strong",{parentName:"p"},"the first milestone is to setup a static three node Primary / Secondary StatefulSet")," that will replicate changes to the Primary to all it's Secondaries."),(0,i.kt)("h2",{id:"links-and-sources"},"Links and Sources"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wikipedia, Byzantine Fault, ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"https://en.wikipedia.org/wiki/Byzantine_fault")),(0,i.kt)("li",{parentName:"ol"},"Cornell University, Paxos vs Raft: Have we reached consensus on distributed consensus?, Heidi Howard, Richard Mortier\n, ",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.05074"},"https://arxiv.org/abs/2004.05074"))))}d.isMDXComponent=!0}}]);