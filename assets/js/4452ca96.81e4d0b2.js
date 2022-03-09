"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4319],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"setting-up-streaming-replication",title:"Setting up Streaming Replication"},l=void 0,p={unversionedId:"postgresql/postgresql-theory/setting-up-streaming-replication",id:"postgresql/postgresql-theory/setting-up-streaming-replication",isDocsHomePage:!1,title:"Setting up Streaming Replication",description:"Now that it has been decided which replication type to use and that you have learned how it works, it's time to investigate how streaming replication is configured.",source:"@site/docs/postgresql/20-postgresql-theory/15-setting-up-streaming-replication.md",sourceDirName:"postgresql/20-postgresql-theory",slug:"/postgresql/postgresql-theory/setting-up-streaming-replication",permalink:"/postgresql/postgresql-theory/setting-up-streaming-replication",tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"setting-up-streaming-replication",title:"Setting up Streaming Replication"},sidebar:"docs",previous:{title:"PostgreSQL Streaming Replication",permalink:"/postgresql/postgresql-theory/streaming-replication"},next:{title:"StatefulSets Revisited",permalink:"/postgresql/stateful-sets-revisited/stateful-sets-revisited"}},c=[{value:"Setting up Streaming Replication",id:"setting-up-streaming-replication",children:[{value:"Authenticating Secondaries on the Primary",id:"authenticating-secondaries-on-the-primary",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Links",id:"links",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now that it has been decided which replication type to use and that you have learned how it works, it's time to investigate how streaming replication is configured."),(0,a.kt)("p",null,"As general advice for data service automation, it is wise to understand the operational first, before diving into writing automation code."),(0,a.kt)("p",null,"Therefore, before diving into the depths of Kubernetes automation it makes to understand how a manual configuration of PostgreSQL streaming replication works. In other words, we need to understand what a database administrator would do before we can automate his work. "),(0,a.kt)("h2",{id:"setting-up-streaming-replication"},"Setting up Streaming Replication"),(0,a.kt)("p",null,"The PostgreSQL documentation ","[1]"," explains how streaming replication can be configured. "),(0,a.kt)("p",null,"The configuration procedure is similar to setting up a file-based log shipping. Remember that ",(0,a.kt)("em",{parentName:"p"},"write-ahead log shipping")," transfers entire WAL files (containing many WAL records) while streaming replication continuously ships WAL records."),(0,a.kt)("p",null,"The configuration step on a secondary that switches from ",(0,a.kt)("em",{parentName:"p"},"log shipping")," to streaming replication is setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_conninfo")," setting to point to the primary server."),(0,a.kt)("p",null,"This will tell PostgreSQL on the secondary to connect to the primary to retrieve WAL records. In order for this to work, ",(0,a.kt)("strong",{parentName:"p"},"the primary PostgreSQL must be configured to authenticate incoming replication requests from secondaries"),"."),(0,a.kt)("p",null,"To make the primary ready, the ",(0,a.kt)("inlineCode",{parentName:"p"},"listen_addresses")," must be set so that PostgreSQL will bind to the right network interface and not only to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". This ensures that secondaries can establish socket connections to the primary PostgreSQL. "),(0,a.kt)("p",null,"This can be achieved by modifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql.conf")," similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# Possible values are replica|minimal|logical\nwal_level = replica\n\n# required for pg_rewind capability when standby goes out of sync with master\n\nwal_log_hints = on\n# sets the maximum number of concurrent connections from the standby servers.\n\nmax_wal_senders = 3\n# The below parameter is used to tell the master to keep the minimum number of segments of WAL logs so that they are not deleted before standby consumes them. Each segment is 16MB.\n\nwal_keep_segments = 8\n\n# The below parameter enables read only connection on the node when it is in standby role. This is ignored when the server is running as master.\nhot_standby = on\n")),(0,a.kt)("p",null,"Furthermore, the primary must successfully authenticate these incoming network connections. ",(0,a.kt)("strong",{parentName:"p"},"As streaming replication requests are implemented as PostgreSQL connections, it is necessary to create a replication user with appropriate access privileges"),"."),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_conninfo")," is set, secondaries when starting will first replay all WAL files available in their archive and then connect to the primary. After a successful start of a secondary the process list will show a ",(0,a.kt)("inlineCode",{parentName:"p"},"walreceiver")," process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"postgres    20    15  0 Jun22 ?        00:02:21 postgres: walreceiver   streamin\n")),(0,a.kt)("p",null,"There are more details to a production grade configuration such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring WAL segments are kept on the primary long enough so that secondaries can retrieve them."),(0,a.kt)("li",{parentName:"ul"},"Ensuring that ",(0,a.kt)("inlineCode",{parentName:"li"},"max_wal_senders")," is set appropriately."),(0,a.kt)("li",{parentName:"ul"},"SSL encryption"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Just to name few. For now, these settings are left aside, and the focus is to establish a minimal streaming replication setup."),(0,a.kt)("h3",{id:"authenticating-secondaries-on-the-primary"},"Authenticating Secondaries on the Primary"),(0,a.kt)("p",null,"In order to allow secondaries to connect to the primary, a replication user (role) has to be created on the primary, e.g. with the username ",(0,a.kt)("inlineCode",{parentName:"p"},"replicator"),". "),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"replicator")," user will be granted the ",(0,a.kt)("inlineCode",{parentName:"p"},"REPLICATION")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LOGIN"),"privilege. In contrast to the ",(0,a.kt)("inlineCode",{parentName:"p"},"SUPERUSER")," privilege, the ",(0,a.kt)("inlineCode",{parentName:"p"},"REPLICATION")," privilege doesn't allow altering any data. For the purpose of replication this isn't necessary."),(0,a.kt)("p",null,"Creating the replication user on the primary server can be achieved by using ",(0,a.kt)("inlineCode",{parentName:"p"},"psql"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'secret'\n")),(0,a.kt)("p",null,"In PostgreSQL authentication is controlled by the configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_hba.conf")," so that a record for the ",(0,a.kt)("inlineCode",{parentName:"p"},"replicator")," user is necessary."),(0,a.kt)("p",null,"The necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_hba.conf")," entries have the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"host    replication  replicator  host1  md5\nhost    replication  replicator  host2  md5\nhost    replication  replicator  host3  md5\n")),(0,a.kt)("p",null,"Note, that actually we only need two hosts for two secondaries. However, we may want to enable leader election at some point. So it makes sense to have a single ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_hba.conf")," that will work if applied to any of the servers when elected to become the new primary."),(0,a.kt)("h4",{id:"configure-access-of-secondaries-to-the-primary"},"Configure Access of Secondaries to the Primary"),(0,a.kt)("p",null,"Now that the primary is configured to accept incoming replication requests from secondaries, secondaries have to be configured to do exactly this."),(0,a.kt)("p",null,"As mentioned before, the ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_conninfo")," has to be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql.conf")," config file. It is not necessary to make this adjustment manually."),(0,a.kt)("p",null,"A secondary node may join a PostgreSQL replication cluster at a later time. In this case the primary as well as older secondaries already have data but the new secondary hasn't. In order to bring such a new secondary up to speed, PostgreSQL offers the ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," command ","[2]",". Executing ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," will achieve two important goals."),(0,a.kt)("p",null,"It will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"postgresql.auto.conf")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"$PGDATA")," directory with a proper ",(0,a.kt)("inlineCode",{parentName:"li"},"primar_conninfo")," setting."),(0,a.kt)("li",{parentName:"ol"},"Retrieve a binary copy of all data files of the entire primary server. While doing so it will activate the backup mode when necessary.")),(0,a.kt)("p",null,"Hence, after running ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," the new secondary will be properly configured to connect to the primary in both regards: knowing which primary to connect to and having the dataset ready to begin streaming replication of subsequent changes."),(0,a.kt)("p",null,"Backup data directory of the primary using ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_basebackup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-h primary.hostname -U replicator -p 5432 -D $PGDATA -Fp -Xs -R\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"primary.hostname")," has to be replaced with the actual hostname."),(0,a.kt)("p",null,"Note that initializing an empty set of three cluster nodes: one primary and two secondaries requires to initialize the primary by executing ",(0,a.kt)("inlineCode",{parentName:"p"},"initdb")," while on the secondaries ",(0,a.kt)("inlineCode",{parentName:"p"},"pg_basebackup")," is to be executed."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In order to set up streaming replication both the primary and the secondary servers have to be configured."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postgresql.conf")," has to be changed to enable write-ahead logging (WAL)."),(0,a.kt)("li",{parentName:"ul"},"A replication user with ",(0,a.kt)("inlineCode",{parentName:"li"},"REPLICATION")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"LOGIN")," privileges has to be created."),(0,a.kt)("li",{parentName:"ul"},"Changes of ",(0,a.kt)("inlineCode",{parentName:"li"},"pg_hba.conf")," grant secondaries access to the primary using the replication user."),(0,a.kt)("li",{parentName:"ul"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"initdb")," on the primary and ",(0,a.kt)("inlineCode",{parentName:"li"},"pg_basebackup")," on secondaries.")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PostgreSQL 12 Documentation - Streaming Replication, ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/warm-standby.html#STREAMING-REPLICATION"},"https://www.postgresql.org/docs/12/warm-standby.html#STREAMING-REPLICATION")),(0,a.kt)("li",{parentName:"ol"},"PostgreSQL 12 Documentation - pg_basebackup, ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/12/app-pgbasebackup.html"},"https://www.postgresql.org/docs/12/app-pgbasebackup.html"))))}m.isMDXComponent=!0}}]);