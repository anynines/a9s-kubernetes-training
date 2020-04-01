(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),i=(n(0),n(138));const r={id:"simple-web-app",title:"Containerizing a Simple Web App"},o={id:"docker/simple-web-app",title:"Containerizing a Simple Web App",description:"In the previous lesson you have created your first container image. This trivial examples has outlined the workflow on how to create a container image.",source:"@site/docs/docker/40-simple-web-app.md",permalink:"/docker/simple-web-app",sidebar:"docs",previous:{title:"Creating Container Images",permalink:"/docker/creating-images"},next:{title:"Publishing a Container Image",permalink:"/docker/publish-image"}},c=[{value:"The Web App",id:"the-web-app",children:[]},{value:"The <code>Dockerfile</code>",id:"the-dockerfile",children:[]},{value:"Takeaways",id:"takeaways",children:[]},{value:"<code>Dockerfile</code> Reference",id:"dockerfile-reference",children:[]},{value:"Links",id:"links",children:[]}],p={rightToc:c};function l({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the previous lesson you have created your first container image. This trivial examples has outlined the workflow on how to create a container image."),Object(i.b)("p",null,"In this lesson you will containerize a simple web application to illustrate essential aspects of the ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," notation."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Go to your training workspace"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd workspace-ct\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create a new container image working directory"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir 20-simple-web-app\n")),Object(i.b)("h2",{id:"the-web-app"},"The Web App"),Object(i.b)("p",null,"In order to demonstrate how to build a container image for a web application, obviously a web application is needed."),Object(i.b)("p",null,"It doesn't really matter which language or framework is used for this demo as long as it is simplistic and that the code can be understood even if you don't know the language nor the the framework well."),Object(i.b)("p",null,"Create a file ",Object(i.b)("inlineCode",{parentName:"p"},"simple-sinatra-app.rb"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"require 'sinatra'\n\nget '/' do\n'<h1>Hello World!</h1>'\nend\n")),Object(i.b)("p",null,"That's your web app."),Object(i.b)("p",null,"Optionally and in case you have Ruby ","[2]"," installed you could run the app locally by installing the Sinatra gem:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"gem install sintra\n")),Object(i.b)("p",null,"And then execute:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ruby simple-sinatra-app.rb\n")),Object(i.b)("p",null,"The app is then running on port ",Object(i.b)("inlineCode",{parentName:"p"},"4567")," and can be reached via ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:4567"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"But don't exhaust yourself in installing Ruby or trying to run the app, locally"),". This is not the focus of the lesson. Instead, proceed with creating a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile"),"."),Object(i.b)("h2",{id:"the-dockerfile"},"The ",Object(i.b)("inlineCode",{parentName:"h2"},"Dockerfile")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Create a new ",Object(i.b)("inlineCode",{parentName:"strong"},"Dockerfile")),"."),Object(i.b)("p",null,"Again we startwith a container image specification:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'FROM ruby:2.5-alpine\n\nWORKDIR /app\n\nRUN gem install sinatra\n\nCOPY simple-sinatra-app.rb /app\n\nCMD ["ruby", "simple-sinatra-app.rb"]\n')),Object(i.b)("p",null,"Again, the ",Object(i.b)("inlineCode",{parentName:"p"},"FROM")," statement specifies which container image is to be used as the ",Object(i.b)("strong",{parentName:"p"},"base image"),". Instead, of going through the hussle of setting up a Ruby environment within the container, it is much easer to earch for a well-maintained Ruby base image, e.g. on DockerHub ","[3]",". The ",Object(i.b)("inlineCode",{parentName:"p"},"ruby:2.5-alpine")," does the trick. In constrast to the regular ",Object(i.b)("inlineCode",{parentName:"p"},"ruby:2.5")," image the Alpine ","[4]"," version is much smaller. You can try it yourself and remove the ",Object(i.b)("inlineCode",{parentName:"p"},"-alpine")," at the end of the container image specification and build a container from it. The initial pull will take much longer as the ",Object(i.b)("inlineCode",{parentName:"p"},"ruby:2.5")," image - based on the Debian image ","[5]"," - is much larger."),Object(i.b)("p",null,"Within the container we define a working directory ",Object(i.b)("inlineCode",{parentName:"p"},"/app"),"."),Object(i.b)("p",null,"Now we face a ",Object(i.b)("strong",{parentName:"p"},"challenge: how to get our application into the container"),"?"),Object(i.b)("p",null,"That's what the line ",Object(i.b)("inlineCode",{parentName:"p"},"COPY simple-sinatra-app.rb /app")," does. It's important to understand that the container image during its building interacts with your local filesystem. Copy transfers a file from your container image working directory into the container image and thus - later - into the running container. "),Object(i.b)("p",null,"The line ",Object(i.b)("inlineCode",{parentName:"p"},'CMD ["ruby", "simple-sinatra-app.rb"]')," starts the application on container startup."),Object(i.b)("p",null,"Now build the container image:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker image build -t simple-web-app:0.1.0 .\n")),Object(i.b)("p",null,"And run the container:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run simple-web-app:0.1.0\n")),Object(i.b)("p",null,"You should see the app starting up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"[2020-03-16 09:38:02] INFO  WEBrick 1.4.2\n[2020-03-16 09:38:02] INFO  ruby 2.5.7 (2019-10-01) [x86_64-linux-musl]\n== Sinatra (v2.0.8.1) has taken the stage on 4567 for development with backup from WEBrick\n[2020-03-16 09:38:02] INFO  WEBrick::HTTPServer#start: pid=1 port=4567\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Point your browser to ",Object(i.b)("inlineCode",{parentName:"strong"},"http://localhost:4567"),". What do you observe?")),Object(i.b)("p",null,"It doesn't work. But why?"),Object(i.b)("p",null,"The reason why it is not working is a ",Object(i.b)("strong",{parentName:"p"},"missing port mapping"),". The local container using Docker Desktop ","[7]"," runs a light-weight virtual machine (VM) or your computer. So your container has been started within a VM. That's why a port mapping is necessary. The purpose of the port mapping is to map the container port ",Object(i.b)("inlineCode",{parentName:"p"},"4567")," to a local port of your machine. "),Object(i.b)("p",null,"So press ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+C")," and stop the existing container. The web app will be shutdown along with the container."),Object(i.b)("p",null,"Although ",Object(i.b)("inlineCode",{parentName:"p"},"EXPOSE")," does not perform a port mapping, it is recommended to declare which port is intended to be published. So using ",Object(i.b)("inlineCode",{parentName:"p"},"EXPOSE")," is a best practice of the container image author telling the container image user which port may need a port mapping."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'FROM ruby:2.5-alpine\n\nWORKDIR /app\n\nRUN gem install sinatra\n\nCOPY simple-sinatra-app.rb /app\n\nCMD ["ruby", "simple-sinatra-app.rb"]\n\nEXPOSE 4567\n')),Object(i.b)("p",null,"Now, start the container again with a port mapping:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run -p 8081:4567 simple-web-app:0.1.0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"It still doesn't work!")," You may ask yourselve whether the the port mapping wrong but it isn't!"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Excercise"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Determine the container id by using `docker container ps``"),Object(i.b)("li",{parentName:"ol"},"Get a shell access into your container with ",Object(i.b)("inlineCode",{parentName:"li"},"docker container exec -it <container-id> /bin/sh"),". ",Object(i.b)("strong",{parentName:"li"},"Obviously, you have to insert your container id"),"."),Object(i.b)("li",{parentName:"ol"},"Within the container execute ",Object(i.b)("inlineCode",{parentName:"li"},"wget localhost:4567")," and ",Object(i.b)("inlineCode",{parentName:"li"},"cat index.html"),".")),Object(i.b)("p",null,"To your surprise the content of ",Object(i.b)("inlineCode",{parentName:"p"},"index.html")," says ",Object(i.b)("inlineCode",{parentName:"p"},"Hello Container World")," which means that the app works fine. Which brings us back to the idea that something is wrong with the container mapping. But it still isn't! So what is going on?"),Object(i.b)("p",null,"Admittedly, there is nothing wrong with neither the container image nor the ",Object(i.b)("inlineCode",{parentName:"p"},"container run")," command. In fact, ",Object(i.b)("strong",{parentName:"p"},"it's an application configuration issue")," but the issue is very common and therefore it makes sense to know about it."),Object(i.b)("p",null,"The current version of our web app binds to the loopback network device ","[8]"," referred to by the IP address ",Object(i.b)("inlineCode",{parentName:"p"},"127.0.0.1")," inside the container. While you are within the container, e.g. using a shell ",Object(i.b)("inlineCode",{parentName:"p"},"/bin/sh")," and issue a command against the loop device such as ",Object(i.b)("inlineCode",{parentName:"p"},"wget localhost:4567")," the application responds as you are accessing it through the network device it is bound to."),Object(i.b)("p",null,"If you are inside the container (",Object(i.b)("inlineCode",{parentName:"p"},"docker container exec -it <container-id> /bin/sh"),") and type ",Object(i.b)("inlineCode",{parentName:"p"},"ifconfig")," to list existing network devices, you will see:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/app # ifconfig\neth0      Link encap:Ethernet  HWaddr 02:42:AC:11:00:02\n        inet addr:172.17.0.2  Bcast:172.17.255.255  Mask:255.255.0.0\n        UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n        RX packets:28 errors:0 dropped:0 overruns:0 frame:0\n        TX packets:11 errors:0 dropped:0 overruns:0 carrier:0\n        collisions:0 txqueuelen:0\n        RX bytes:2803 (2.7 KiB)  TX bytes:961 (961.0 B)\n\nlo        Link encap:Local Loopback\n        inet addr:127.0.0.1  Mask:255.0.0.0\n        UP LOOPBACK RUNNING  MTU:65536  Metric:1\n        RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n        TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n        collisions:0 txqueuelen:1000\n        RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n")),Object(i.b)("p",null,"This means that there is the loopback device ",Object(i.b)("inlineCode",{parentName:"p"},"lo")," but also the device ",Object(i.b)("inlineCode",{parentName:"p"},"eth0"),". No guess which device needs to be used to make the app available for a port mapping. Exactly, ",Object(i.b)("inlineCode",{parentName:"p"},"eth0"),"."),Object(i.b)("p",null,"In the case of the Sintra app this can be achieved with a code change. In a production grade web application, this would be implemented as a configuration option but for our example, the code change will suffice."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"require 'sinatra'\n\nset :bind, '0.0.0.0'\n\nget '/' do\n'<h1>Hello World!</h1>'\nend\n")),Object(i.b)("p",null,"Binding to the special IP address ",Object(i.b)("inlineCode",{parentName:"p"},"0.0.0.0")," is a general way to bind a process to all IP addresses. While this is convenient, it may be dangerous if the machine had a public IP address and binding to it would be unintended. In this case, there are only two network device and it is ok to bind to both of them, so binding to ",Object(i.b)("inlineCode",{parentName:"p"},"0.0.0.0")," is acceptable."),Object(i.b)("p",null,"Create a new container image version ",Object(i.b)("inlineCode",{parentName:"p"},"0.2.0"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker image build -t simple-web-app:0.2.0 .\n")),Object(i.b)("p",null,"And run it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run -p 8081:4567 simple-web-app:0.2.0\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Voil\xe0! It works!")),Object(i.b)("h2",{id:"takeaways"},"Takeaways"),Object(i.b)("p",null,"This section contains a few lessons worth pointing out:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"By using existing images as base images, it is fairly easy to provide the required runtime environment for an application."),Object(i.b)("li",{parentName:"ol"},"If you want expose a port, ensure that the process to be exposed is bound to the right network interface and not only to the loopback device.")),Object(i.b)("h2",{id:"dockerfile-reference"},Object(i.b)("inlineCode",{parentName:"h2"},"Dockerfile")," Reference"),Object(i.b)("p",null,"There are many more instructions allowed in a ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile"),". The Docker documentation contains a Dockerfile Reference section ","[6]"," which is worth a read."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Computerhope, Linux, Printf, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.computerhope.com/unix/uprintf.htm"}),"https://www.computerhope.com/unix/uprintf.htm")),Object(i.b)("li",{parentName:"ol"},"Ruby, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ruby-lang.org"}),"https://www.ruby-lang.org")),Object(i.b)("li",{parentName:"ol"},"DockerHub, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/"}),"https://hub.docker.com/")),Object(i.b)("li",{parentName:"ol"},"Alpine Linux, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://alpinelinux.org/"}),"https://alpinelinux.org/")),Object(i.b)("li",{parentName:"ol"},"Debian on DockerHub, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/_/debian"}),"https://hub.docker.com/_/debian")),Object(i.b)("li",{parentName:"ol"},"Docker Documentation, Dockerfile Reference, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/engine/reference/builder/"}),"https://docs.docker.com/engine/reference/builder/")),Object(i.b)("li",{parentName:"ol"},"Docker Desktop, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/blog/get-to-know-docker-desktop/"}),"https://www.docker.com/blog/get-to-know-docker-desktop/")),Object(i.b)("li",{parentName:"ol"},"Wikipedia, Loopback Device, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Loop_device"}),"https://en.wikipedia.org/wiki/Loop_device"))))}l.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||r;return n?i.a.createElement(h,c({ref:t},l,{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);