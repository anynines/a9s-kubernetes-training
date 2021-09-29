"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1377],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"replication-user",title:"Creating a Replication User"},l=void 0,c={unversionedId:"postgresql/building-the-pg-stateful-set/replication-user",id:"postgresql/building-the-pg-stateful-set/replication-user",isDocsHomePage:!1,title:"Creating a Replication User",description:"Previously we have created a StatefulSet that now requires a replication user on the Primary to allow Secondaries to connect. In order to achieve this the following steps are taken:",source:"@site/docs/postgresql/40-building-the-pg-stateful-set/40-replication-user.md",sourceDirName:"postgresql/40-building-the-pg-stateful-set",slug:"/postgresql/building-the-pg-stateful-set/replication-user",permalink:"/postgresql/building-the-pg-stateful-set/replication-user",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"replication-user",title:"Creating a Replication User"},sidebar:"docs",previous:{title:"Initializing the StatefulSet",permalink:"/postgresql/building-the-pg-stateful-set/streaming-replication-sfs-init"},next:{title:"Verifying the Replication",permalink:"/postgresql/building-the-pg-stateful-set/verify-replication"}},p=[{value:"The Script",id:"the-script",children:[{value:"Containerizing the Script",id:"containerizing-the-script",children:[]},{value:"Executing the Script",id:"executing-the-script",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Links",id:"links",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Previously we have created a StatefulSet that now requires a replication user on the Primary to allow Secondaries to connect. In order to achieve this the following steps are taken:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Determine the SQL commands to create the replication user"),(0,a.kt)("li",{parentName:"ol"},"Write and test an idempotent script to create the user"),(0,a.kt)("li",{parentName:"ol"},"Containerize and test the script")),(0,a.kt)("p",null,"This follows the principle ",(0,a.kt)("em",{parentName:"p"},"Operational Model First, Automation Second")," ","[1]",". Before the automation is written, it must be clear what to achieve and how a sysop would do it. This it the operational model. What needs to be done and which exceptions are to be expected. This it the input for automating the procedure with a script."),(0,a.kt)("p",null,"The script should be idempotent so that it can be executed several times causing the desired effect only once. Running the script repeatedly may happen when:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Running a script during Pod startup."),(0,a.kt)("li",{parentName:"ul"},"Retrying to execute a script that failed to run earlier.")),(0,a.kt)("p",null,"In order to make the script idempotent it must be checked if the replication user already exists:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(rolname) FROM pg_catalog.pg_roles WHERE rolname = 'replicator'\n")),(0,a.kt)("p",null,"The goal is to create a replication user by executing the following SQL command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER replicator WITH REPLICATION ENCRYPTED PASSWORD 'aREPL1C4Ti0NxLI6Eeth'\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aREPL1C4Ti0NxLI6Eeth")," should be replaced with a value from the corresponding Kubernetes Secret:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret generic postgresql-replication-user --from-literal=POSTGRES_REPLICATION_PASSWORD=aREPL1C4Ti0NxLI6Eeth --from-literal=POSTGRES_REPLICATION_USERNAME=replicator\n")),(0,a.kt)("p",null,"Obviously - as with all passwords in this tutorial - a different password should be chosen."),(0,a.kt)("p",null,"The replication user ",(0,a.kt)("inlineCode",{parentName:"p"},"replicator")," will be created in a seaparate container. Note, that the usage of initContainers here is tricky as the initContainer is executed before PostgreSQL has been started. This doesn't work as creating a user obviously require the database to be running. Theoretically, PostgreSQL could be started temporarily but this appears to be inelegant. We'll come back to this matter later."),(0,a.kt)("p",null,"In order to prepare each Pod to become the Primary, the replication user will be created in all Pods of the StatefulSet. Before such a container can be instantiated, an idempotent script for creating the replication user needs to be created."),(0,a.kt)("h2",{id:"the-script"},"The Script"),(0,a.kt)("p",null,"The script ",(0,a.kt)("inlineCode",{parentName:"p"},"create-replication-user.rb")," is written in Ruby ","[4]","."),(0,a.kt)("p",null,"It reads the environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_HOSTNAME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_DATABASE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_USERNAME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_PASSWORD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_REPLICATION_USERNAME")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_REPLICATION_PASSWORD"))),(0,a.kt)("p",null,'The script can be executed in two "directions": ',(0,a.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"down"),". Similar to database migrations in Ruby on Rails ",(0,a.kt)("inlineCode",{parentName:"p"},"up")," will create the replication user while ",(0,a.kt)("inlineCode",{parentName:"p"},"down")," will remove it. The script is idempotent which means running the script several times in either direction won't change the result neither will it raise an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"#!/usr/bin/ruby\n\n# https://bundler.io/v2.0/guides/bundler_in_a_single_file_ruby_script.html\nrequire 'bundler/inline'\n\ngemfile do\n  source 'https://rubygems.org'\n  gem 'pg'\nend\n\n# https://deveiate.org/code/pg/\nrequire 'pg'\nrequire 'pp'\n\n\n# One possible abstraction of this class would be a Rails-Migration like pattern \n# to execute SQL statements in both directions create/delete, forward/backward, ...\nclass CreateReplicationUserIfNotExistsAction\n\n  def initialize\n    # Required environment variables\n    @postgres_hostname = ENV['POSTGRES_HOSTNAME'] || 'localhost'\n    @postgres_database = ENV['POSTGRES_DATABASE'] || 'postgres'\n    @postgres_username = ENV['POSTGRES_USERNAME'] || 'postgres'\n    @postgres_password = ENV['POSTGRES_PASSWORD'] || 'tes6Aev8'\n    @postgres_replication_username = ENV['POSTGRES_REPLICATION_USERNAME'] || 'replicator'\n    @postgres_replication_password = ENV['POSTGRES_REPLICATION_PASSWORD'] || 'aREPL1C4Ti0NxLI6Eeth'\n  end\n\n  protected\n\n  # True if the replication user exists, false otherwise\n  # Improves readability.\n  def replication_user_exists?(connection)\n      result = connection.exec \"SELECT COUNT(rolname) FROM pg_catalog.pg_roles WHERE rolname = '#{@postgres_replication_username}'\";\n      if result[0][\"count\"].to_i == 1 then\n        # Does exist\n        return true\n      elsif result[0][\"count\"].to_i == 0\n        # Does not exist    \n        return false\n      end\n  end\n\n  # Idempotency. Checks if the user exists and creates it if not.\n  def create_replication_user_if_not_exists(connection)      \n      if replication_user_exists?(connection) then\n        puts \"The replication user #{@postgres_replication_username} already exists. Doing nothing.\"\n      else\n        puts \"The replication user #{@postgres_replication_username} doesn't exist. Creating it...\" \n        create_replication_user(connection)\n        puts \"Done creating the replication user.\"\n      end\n  end\n\n  def delete_replication_user_if_exists(connection)\n    if replication_user_exists?(connection) \n      puts \"The replication user #{@postgres_replication_username} exists and will now be deleted...\"\n      delete_replication_user(connection)\n      puts \"Done deleting the replication user.\"\n    else\n      puts \"The replication user #{@postgres_replication_username} doesn't exist. There is nothing to delete. Done.\"\n    end    \n  end\n\n  # Creates the user imperatively without checking.\n  def create_replication_user(connection)\n    result = connection.exec \"CREATE USER #{@postgres_replication_username} WITH REPLICATION ENCRYPTED PASSWORD '#{@postgres_replication_password}'\"    \n  end\n\n  def delete_replication_user(connection)\n    result = connection.exec \"DROP ROLE #{@postgres_replication_username}\"    \n  end\n\n  public\n\n  # Create the replication user idempotently.\n  def up    \n    begin\n      connection = PG.connect :host => @postgres_hostname, :dbname => @postgres_database, :user => @postgres_username, :password => @postgres_password    \n      create_replication_user_if_not_exists(connection)      \n    rescue PG::Error => e\n        puts \"PG::Error occurred: \" + e.message     \n        exit(false) # signal a failure by using a non-zero exit code.\n    ensure\n        connection.close if connection        \n    end\n  end\n\n  # Delete the replication user idempotently.\n  def down\n    begin\n      connection = PG.connect :host => @postgres_hostname, :dbname => @postgres_database, :user => @postgres_username, :password => @postgres_password\n      delete_replication_user_if_exists(connection)\n    rescue PG::Error => e\n        puts \"PG::Error occurred: \" + e.message            \n        exit(false) # signal a failure by using a non-zero exit code.\n    ensure\n        connection.close if connection \n    end\n  end\nend\n\n#TODO Add Unit Tests\nputs \"Executing CreateReplicationUserIfNotExistsAction.\"\ndirection = ARGV[0] || \"up\"\nputs \"Direction: #{direction}...\"\n\naction = CreateReplicationUserIfNotExistsAction.new\n\nif direction.eql?(\"up\") then\n  action.up\nelse\n  action.down\nend\n\nputs \"Done executing CreateReplicationUserIfNotExistsAction.\"\nexit(true)\n")),(0,a.kt)("p",null,"Now that the script is ready, it must be injected into the Primary Pod. Previously we have used a ConfigMap to inject a script into a container. This has the disadvantage that the script is duplicated for each service instance to keep instance lifecycles independent from another. While this works at a small scale and during development, it can be doubted whether this approach will hold up at a large scale."),(0,a.kt)("p",null,"We therefore chose a different route for the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-replication-user.rb")," script and will containerize it."),(0,a.kt)("h3",{id:"containerizing-the-script"},"Containerizing the Script"),(0,a.kt)("p",null,"In order to containerize the script, the first step is choosing a base image.\nThen a container image must be created and published. Finally, the container image must be executed using a Kubernetes resource to schedule a Pod."),(0,a.kt)("h4",{id:"selecting-the-base-image"},"Selecting the Base Image"),(0,a.kt)("p",null,"For executing Ruby the official Docker images can be used ","[2]",".\nThey come in different variants such as the default (",(0,a.kt)("inlineCode",{parentName:"p"},"<version>"),"), slim (",(0,a.kt)("inlineCode",{parentName:"p"},"<version>-slim"),") and alpine (",(0,a.kt)("inlineCode",{parentName:"p"},"<version>-alpine"),")."),(0,a.kt)("p",null,"The default and slim variants are based on Debian. They provide many useful tools and the full power of ",(0,a.kt)("inlineCode",{parentName:"p"},"apt"),". However, they are very bug.\nFor this reason the preferred base image variant is ",(0,a.kt)("inlineCode",{parentName:"p"},"alpine"),". Use it whenever possible with meaningful effort."),(0,a.kt)("p",null,"In order to build the ",(0,a.kt)("inlineCode",{parentName:"p"},"pg")," Gem ","[3]"," the regular Debian base image is convenient to use as it ships the necessary dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM ruby:2.7\nWORKDIR /app\nCOPY create-replication-user.rb /app\nCMD ["/usr/local/bin/ruby", "/app/create-replication-user.rb", "up"]\n')),(0,a.kt)("p",null,"The workflow to build and publish the container image is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t a8s-pg-utilities .\ndocker tag create-replication-user:latest fischerjulian/a8s-pg-utilities:latest\ndocker push fischerjulian/a8s-pg-utilities:latest\n")),(0,a.kt)("p",null,"The container image will allow the creation and deletion of the given replication user by specifying an optional argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'...\ncommand: ["/usr/local/bin/ruby"]\nargs:\n- "/app/create-replication-user.rb"\n- "down"\n...\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"up"')," will create the replication user while ",(0,a.kt)("inlineCode",{parentName:"p"},'"down"')," will delete it.\nThe action is idempotent in both directions."),(0,a.kt)("h3",{id:"executing-the-script"},"Executing the Script"),(0,a.kt)("p",null,"The next decision to be made is: how to execute the script."),(0,a.kt)("p",null,"So it's worth thinking about what and when a replication user has to be created. For single node databases - that is ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 1")," - a replication user ",(0,a.kt)("strong",{parentName:"p"},"is not needed"),". Only if ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas")," is set to a value ",(0,a.kt)("inlineCode",{parentName:"p"},"2n * 1")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"n>=1")," such as ",(0,a.kt)("inlineCode",{parentName:"p"},"3, 5, ...")," a replication user is required. "),(0,a.kt)("p",null,"If you want to be prepared for automation failovers - where a Primary fails and one of the Secondaries is being elected and promoted to become the new leader - we need to create a replication user on each cluster node."),(0,a.kt)("p",null,"This is necessary to turn a Secondary into a primary node. In a ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas: 3")," scenario, this means 3 replica users will have to be created. One on each node."),(0,a.kt)("p",null,"It would therefore be desirable to have a way to declare wether a replication user is necessary or not. Then - comparing the desired vs. actual state - some kind of ",(0,a.kt)("em",{parentName:"p"},"controller")," could ensure that the script is run."),(0,a.kt)("p",null,"Withouth such a controller one way to execute the script is using a Job."),(0,a.kt)("p",null,"The Job description pasted into ",(0,a.kt)("inlineCode",{parentName:"p"},"70-job-create-replication-user.yaml")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: pg-create-replication-user\nspec:\n  template:\n    spec:\n      containers:\n      - name: create-replication-user\n        image: fischerjulian/a8s-pg-utilities:0.1.0\n        env:\n        # if the username is not set the script will assume the user "postgres"\n        # - name: POSTGRES_USERNAME\n        #   valueFrom:\n        #     secretKeyRef:\n        #       name: postgresql-secret-2\n        #       key: POSTGRES_USERNAME\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-secrets\n              key: POSTGRES_PASSWORD\n        - name: POSTGRES_HOSTNAME\n          value: postgresql-primary.pg.svc.cluster.local\n        - name: POSTGRES_REPLICATION_USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-replication-user\n              key: POSTGRES_REPLICATION_USERNAME\n        - name: POSTGRES_REPLICATION_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql-replication-user\n              key: POSTGRES_REPLICATION_PASSWORD\n                           \n        # imagePullPolicy: Always\n        command: ["/usr/local/bin/ruby"]\n        args:\n        - "/app/create-replication-user.rb"\n        - "up"\n      restartPolicy: OnFailure\n')),(0,a.kt)("p",null,"For now it will be sufficient to run the Job to target the Primary. Later, when leader election will be implemented, the replication user must be created on all Pods."),(0,a.kt)("p",null,"Create the Job to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"create-replication-user.rb")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f 70-job-create-replication-user.yaml\n")),(0,a.kt)("p",null,"Verfiy this by connecting to the Primary and executing the following SQL command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT rolname FROM pg_catalog.pg_roles;\n")),(0,a.kt)("p",null,"You should see the replication user."),(0,a.kt)("p",null,"After a few seconds your StatefulSet should have converged into the following state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                               READY   STATUS      RESTARTS   AGE\npg-create-replication-user-zxt5c   0/1     Completed   0          139m\npostgresql-sfs-0                   1/1     Running     0          138m\npostgresql-sfs-1                   1/1     Running     0          138m\npostgresql-sfs-2                   1/1     Running     0          138m\n")),(0,a.kt)("p",null,"We have now covered all necessary steps to set up the streaming replication."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"After defining the StatefulSet with its ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," replicas, a script to create the replication user had to be created. The script has been implemented to be idempotent which allows running it several times while the replication user is only created once. We had to make a decision how to deliver the script to the StatefulSet's Pods and chose to use containerize it as a ",(0,a.kt)("em",{parentName:"p"},"utility")," container image. This makes sense as the script will be shared across all data service instances and is unlikely to be changed very often."),(0,a.kt)("p",null,"With all the work you have invested so far, it is now time to use the streaming replication and verify that it's working as expected."),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An Introduction to Data Service Automation, Julian Fischer, {LINK TO BE DONE}"),(0,a.kt)("li",{parentName:"ol"},"Ruby Docker Image on Dockerhub, ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/ruby"},"https://hub.docker.com/_/ruby")),(0,a.kt)("li",{parentName:"ol"},"Ruby PostgreSQL ",(0,a.kt)("inlineCode",{parentName:"li"},"pg")," Gem, ",(0,a.kt)("a",{parentName:"li",href:"https://rubygems.org/gems/pg"},"https://rubygems.org/gems/pg")),(0,a.kt)("li",{parentName:"ol"},"Ruby, ",(0,a.kt)("a",{parentName:"li",href:"https://www.ruby-lang.org/"},"https://www.ruby-lang.org/"))))}d.isMDXComponent=!0}}]);