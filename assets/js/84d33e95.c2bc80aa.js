"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3481],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"simple-web-app",title:"Containerizing a Simple Web App"},l=void 0,s={unversionedId:"docker/simple-web-app",id:"docker/simple-web-app",isDocsHomePage:!1,title:"Containerizing a Simple Web App",description:"In the previous lesson you have created your first container image. This trivial examples has outlined the workflow on how to create a container image.",source:"@site/docs/docker/40-simple-web-app.md",sourceDirName:"docker",slug:"/docker/simple-web-app",permalink:"/docker/simple-web-app",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"simple-web-app",title:"Containerizing a Simple Web App"},sidebar:"docs",previous:{title:"Creating Container Images",permalink:"/docker/creating-images"},next:{title:"Publishing a Container Image",permalink:"/docker/publish-image"}},c=[{value:"The Web App",id:"the-web-app",children:[]},{value:"The <code>Dockerfile</code>",id:"the-dockerfile",children:[]},{value:"Takeaways",id:"takeaways",children:[]},{value:"<code>Dockerfile</code> Reference",id:"dockerfile-reference",children:[]},{value:"Links",id:"links",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous lesson you have created your first container image. This trivial examples has outlined the workflow on how to create a container image."),(0,r.kt)("p",null,"In this lesson you will containerize a simple web application to illustrate essential aspects of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," notation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Go to your training workspace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd workspace-ct\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a new container image working directory"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir 20-simple-web-app\ncd 20-simple-web-app\n")),(0,r.kt)("h2",{id:"the-web-app"},"The Web App"),(0,r.kt)("p",null,"In order to demonstrate how to build a container image for a web application, obviously a web application is needed."),(0,r.kt)("p",null,"It doesn't really matter which language or framework is used for this demo as long as it is simplistic and that the code can be understood even if you don't know the language nor the the framework well."),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"simple-sinatra-app.rb"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"require 'sinatra'\n\nget '/' do\n'<h1>Hello World!</h1>'\nend\n")),(0,r.kt)("p",null,"That's your web app."),(0,r.kt)("p",null,"Optionally and in case you have Ruby ","[2]"," installed you could run the app locally by installing the Sinatra gem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gem install sinatra\n")),(0,r.kt)("p",null,"And then execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ruby simple-sinatra-app.rb\n")),(0,r.kt)("p",null,"The app is then running on port ",(0,r.kt)("inlineCode",{parentName:"p"},"4567")," and can be reached via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:4567"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But don't exhaust yourself in installing Ruby or trying to run the app, locally"),". This is not the focus of the lesson. Instead, proceed with creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,r.kt)("h2",{id:"the-dockerfile"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"Dockerfile")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"strong"},"Dockerfile")),"."),(0,r.kt)("p",null,"Again we startwith a container image specification:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM ruby:2.5-alpine\n\nWORKDIR /app\n\nRUN gem install sinatra\n\nCOPY simple-sinatra-app.rb /app\n\nCMD ["ruby", "simple-sinatra-app.rb"]\n')),(0,r.kt)("p",null,"Again, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," statement specifies which container image is to be used as the ",(0,r.kt)("strong",{parentName:"p"},"base image"),". Instead, of going through the hussle of setting up a Ruby environment within the container, it is much easer to earch for a well-maintained Ruby base image, e.g. on DockerHub ","[3]",". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby:2.5-alpine")," does the trick. In constrast to the regular ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby:2.5")," image the Alpine ","[4]"," version is much smaller. You can try it yourself and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"-alpine")," at the end of the container image specification and build a container from it. The initial pull will take much longer as the ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby:2.5")," image - based on the Debian image ","[5]"," - is much larger."),(0,r.kt)("p",null,"Within the container we define a working directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/app"),"."),(0,r.kt)("p",null,"Now we face a ",(0,r.kt)("strong",{parentName:"p"},"challenge: how to get our application into the container"),"?"),(0,r.kt)("p",null,"That's what the line ",(0,r.kt)("inlineCode",{parentName:"p"},"COPY simple-sinatra-app.rb /app")," does. It's important to understand that the container image during its building interacts with your local filesystem. Copy transfers a file from your container image working directory into the container image and thus - later - into the running container. "),(0,r.kt)("p",null,"The line ",(0,r.kt)("inlineCode",{parentName:"p"},'CMD ["ruby", "simple-sinatra-app.rb"]')," starts the application on container startup."),(0,r.kt)("p",null,"Now build the container image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker image build -t simple-web-app:0.1.0 .\n")),(0,r.kt)("p",null,"And run the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker container run simple-web-app:0.1.0\n")),(0,r.kt)("p",null,"You should see the app starting up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[2020-03-16 09:38:02] INFO  WEBrick 1.4.2\n[2020-03-16 09:38:02] INFO  ruby 2.5.7 (2019-10-01) [x86_64-linux-musl]\n== Sinatra (v2.0.8.1) has taken the stage on 4567 for development with backup from WEBrick\n[2020-03-16 09:38:02] INFO  WEBrick::HTTPServer#start: pid=1 port=4567\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Point your browser to ",(0,r.kt)("inlineCode",{parentName:"strong"},"http://localhost:4567"),". What do you observe?")),(0,r.kt)("p",null,"It doesn't work. But why?"),(0,r.kt)("p",null,"The reason why it is not working is a ",(0,r.kt)("strong",{parentName:"p"},"missing port mapping"),". The local container using Docker Desktop ","[7]"," runs a light-weight virtual machine (VM) or your computer. So your container has been started within a VM. That's why a port mapping is necessary. The purpose of the port mapping is to map the container port ",(0,r.kt)("inlineCode",{parentName:"p"},"4567")," to a local port of your machine."),(0,r.kt)("p",null,"So press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL+C")," and stop the existing container. The web app will be shutdown along with the container."),(0,r.kt)("p",null,"Although ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE")," does not perform a port mapping, it is recommended to declare which port is intended to be published. So using ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE")," is a best practice of the container image author telling the container image user which port may need a port mapping."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM ruby:2.5-alpine\n\nWORKDIR /app\n\nRUN gem install sinatra\n\nCOPY simple-sinatra-app.rb /app\n\nCMD ["ruby", "simple-sinatra-app.rb"]\n\nEXPOSE 4567\n')),(0,r.kt)("p",null,"Now, start the container again with a port mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker container run -p 8081:4567 simple-web-app:0.1.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It still doesn't work!")," You may ask yourselve whether the the port mapping wrong but it isn't!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Excercise"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Determine the container id by using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker container ps")),(0,r.kt)("li",{parentName:"ol"},"Get a shell access into your container with ",(0,r.kt)("inlineCode",{parentName:"li"},"docker container exec -it <container-id> /bin/sh"),". ",(0,r.kt)("strong",{parentName:"li"},"Obviously, you have to insert your container id"),"."),(0,r.kt)("li",{parentName:"ol"},"Within the container execute ",(0,r.kt)("inlineCode",{parentName:"li"},"wget localhost:4567")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cat index.html"),".")),(0,r.kt)("p",null,"To your surprise the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," says ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Container World")," which means that the app works fine. Which brings us back to the idea that something is wrong with the container mapping. But it still isn't! So what is going on?"),(0,r.kt)("p",null,"Admittedly, there is nothing wrong with neither the container image nor the ",(0,r.kt)("inlineCode",{parentName:"p"},"container run")," command. In fact, ",(0,r.kt)("strong",{parentName:"p"},"it's an application configuration issue")," but the issue is very common and therefore it makes sense to know about it."),(0,r.kt)("p",null,"The current version of our web app binds to the loopback network device ","[8]"," referred to by the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," inside the container. While you are within the container, e.g. using a shell ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh")," and issue a command against the loop device such as ",(0,r.kt)("inlineCode",{parentName:"p"},"wget localhost:4567")," the application responds as you are accessing it through the network device it is bound to."),(0,r.kt)("p",null,"If you are inside the container (",(0,r.kt)("inlineCode",{parentName:"p"},"docker container exec -it <container-id> /bin/sh"),") and type ",(0,r.kt)("inlineCode",{parentName:"p"},"ifconfig")," to list existing network devices, you will see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/app # ifconfig\neth0      Link encap:Ethernet  HWaddr 02:42:AC:11:00:02\n        inet addr:172.17.0.2  Bcast:172.17.255.255  Mask:255.255.0.0\n        UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n        RX packets:28 errors:0 dropped:0 overruns:0 frame:0\n        TX packets:11 errors:0 dropped:0 overruns:0 carrier:0\n        collisions:0 txqueuelen:0\n        RX bytes:2803 (2.7 KiB)  TX bytes:961 (961.0 B)\n\nlo        Link encap:Local Loopback\n        inet addr:127.0.0.1  Mask:255.0.0.0\n        UP LOOPBACK RUNNING  MTU:65536  Metric:1\n        RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n        TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n        collisions:0 txqueuelen:1000\n        RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n")),(0,r.kt)("p",null,"This means that there is the loopback device ",(0,r.kt)("inlineCode",{parentName:"p"},"lo")," but also the device ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),". No guess which device needs to be used to make the app available for a port mapping. Exactly, ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),"."),(0,r.kt)("p",null,"In the case of the Sintra app this can be achieved with a code change. In a production grade web application, this would be implemented as a configuration option but for our example, the code change will suffice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"require 'sinatra'\n\nset :bind, '0.0.0.0'\n\nget '/' do\n'<h1>Hello World!</h1>'\nend\n")),(0,r.kt)("p",null,"Binding to the special IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," is a general way to bind a process to all IP addresses. While this is convenient, it may be dangerous if the machine had a public IP address and binding to it would be unintended. In this case, there are only two network device and it is ok to bind to both of them, so binding to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," is acceptable."),(0,r.kt)("p",null,"Create a new container image version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2.0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker image build -t simple-web-app:0.2.0 .\n")),(0,r.kt)("p",null,"And run it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker container run -p 8081:4567 simple-web-app:0.2.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Point your browser to ",(0,r.kt)("inlineCode",{parentName:"strong"},"http://localhost:8081"),". Voil\xe0! It works!")),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"This section contains a few lessons worth pointing out:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"By using existing images as base images, it is fairly easy to provide the required runtime environment for an application."),(0,r.kt)("li",{parentName:"ol"},"If you want expose a port, ensure that the process to be exposed is bound to the right network interface and not only to the loopback device.")),(0,r.kt)("h2",{id:"dockerfile-reference"},(0,r.kt)("inlineCode",{parentName:"h2"},"Dockerfile")," Reference"),(0,r.kt)("p",null,"There are many more instructions allowed in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". The Docker documentation contains a Dockerfile Reference section ","[6]"," which is worth a read."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Computerhope, Linux, Printf, ",(0,r.kt)("a",{parentName:"li",href:"https://www.computerhope.com/unix/uprintf.htm"},"https://www.computerhope.com/unix/uprintf.htm")),(0,r.kt)("li",{parentName:"ol"},"Ruby, ",(0,r.kt)("a",{parentName:"li",href:"https://www.ruby-lang.org"},"https://www.ruby-lang.org")),(0,r.kt)("li",{parentName:"ol"},"DockerHub, ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"https://hub.docker.com/")),(0,r.kt)("li",{parentName:"ol"},"Alpine Linux, ",(0,r.kt)("a",{parentName:"li",href:"https://alpinelinux.org/"},"https://alpinelinux.org/")),(0,r.kt)("li",{parentName:"ol"},"Debian on DockerHub, ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/debian"},"https://hub.docker.com/_/debian")),(0,r.kt)("li",{parentName:"ol"},"Docker Documentation, Dockerfile Reference, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/builder/"},"https://docs.docker.com/engine/reference/builder/")),(0,r.kt)("li",{parentName:"ol"},"Docker Desktop, ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/blog/get-to-know-docker-desktop/"},"https://www.docker.com/blog/get-to-know-docker-desktop/")),(0,r.kt)("li",{parentName:"ol"},"Wikipedia, Loopback Device, ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Loop_device"},"https://en.wikipedia.org/wiki/Loop_device"))))}d.isMDXComponent=!0}}]);