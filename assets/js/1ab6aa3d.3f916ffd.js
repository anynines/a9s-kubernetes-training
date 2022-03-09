"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5359],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34335:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a,r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],l={id:"docker-basics",title:"Docker Basics"},c=void 0,p={unversionedId:"docker/docker-basics",id:"docker/docker-basics",isDocsHomePage:!1,title:"Docker Basics",description:"Related Videos",source:"@site/docs/docker/20-docker-basics.md",sourceDirName:"docker",slug:"/docker/docker-basics",permalink:"/docker/docker-basics",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"docker-basics",title:"Docker Basics"},sidebar:"docs",previous:{title:"Docker Installation",permalink:"/docker/installation"},next:{title:"Creating Container Images",permalink:"/docker/creating-images"}},u=[{value:"Related Videos",id:"related-videos",children:[]},{value:"Starting a Container",id:"starting-a-container",children:[{value:"List Running Containers",id:"list-running-containers",children:[]}]},{value:"Starting and Stopping Containers With a Port Mapping",id:"starting-and-stopping-containers-with-a-port-mapping",children:[]},{value:"Starting an Interactive Container",id:"starting-an-interactive-container",children:[]},{value:"Starting a Detached Container",id:"starting-a-detached-container",children:[{value:"Obtaining an Interactive Shell to a Detached Container",id:"obtaining-an-interactive-shell-to-a-detached-container",children:[]}]},{value:"Links",id:"links",children:[]}],d=(a="VideoContainer",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"related-videos"},"Related Videos"),(0,i.kt)(d,{list:[{src:"https://www.youtube-nocookie.com/embed/5L_i-WxhQr8",title:"Docker Basics Part 2"},{src:"https://www.youtube-nocookie.com/embed/8SsTh3kC7-Y",title:"Docker Basics Part 3"}],mdxType:"VideoContainer"}),(0,i.kt)("p",null,"In this lesson you will start, stop, list and access containers in various ways."),(0,i.kt)("h2",{id:"starting-a-container"},"Starting a Container"),(0,i.kt)("p",null,"Starting a container is as simple as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker container run busybox printf "Hello World\\n"\n')),(0,i.kt)("p",null,"The output ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," will appear in your terminal."),(0,i.kt)("p",null,"Note, Busybox ","[8]"," is a tiny bundle of UNIX utilities. Consequently, the official Busybox container image ","[9]"," is also very small. Another interesting light-weight Linux container image is Alpine ","[10][11]","."),(0,i.kt)("p",null,"Small container images are beneficial as they reduce the time to distribute new versions across the network. Large images have hundreds of MBs whereas small images comprise a few megabytes only."),(0,i.kt)("h3",{id:"list-running-containers"},"List Running Containers"),(0,i.kt)("p",null,"After starting the container as described previously, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container ls\n")),(0,i.kt)("p",null,"To list running containers."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do you see that no container is running?")),(0,i.kt)("p",null,"This is because the container has been started, did what it was told to do and finally ",(0,i.kt)("strong",{parentName:"p"},"terminated"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"printf")," command is not a daemon - not a long running process - and once the command exited, the container reach its end of life."),(0,i.kt)("p",null,"In order to see stopped containers execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container ls --all\n")),(0,i.kt)("p",null,"This will show you the container along with some metadata such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                      PORTS               NAMES\n47e4a58fbf81        busybox                           "printf \'Hello World\u2026"   2 minutes ago       Exited (0) 2 minutes ago                        hopeful_hoover\n')),(0,i.kt)("h2",{id:"starting-and-stopping-containers-with-a-port-mapping"},"Starting and Stopping Containers With a Port Mapping"),(0,i.kt)("p",null,"In case a process within the container opens a port, the container port may interfere with a daemon running on your local computer. For this reason a port mapping is required that maps the container port to a vacant port on your machine:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container run -p 8081:8080 fischerjulian/smpl-go-web:1.0.0\n")),(0,i.kt)("p",null,"This will map the port ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),"of the container to the port ",(0,i.kt)("inlineCode",{parentName:"p"},"8081"),". Open your browser and navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8081"),". You should see a simple web app."),(0,i.kt)("p",null,"As this container starts a long-running process, the container will not automatically terminate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker container ls\n\nCONTAINER ID        IMAGE               COMMAND               CREATED             STATUS              PORTS                    NAMES\nf535c41de16f        smpl-go-web         "/bin/sh -c ./main"   12 minutes ago      Up 12 minutes       0.0.0.0:8081->8080/tcp   dazzling_swanson\n')),(0,i.kt)("p",null,"As you can see the output also described the port mapping from your local machine to the container."),(0,i.kt)("p",null,"You can use the automatically assigned container name ",(0,i.kt)("inlineCode",{parentName:"p"},"dazzling_swanson")," to stop the container with a SIGTERM ","[6]"," signal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container stop dazzling_swanson\n")),(0,i.kt)("p",null,"Alternatively you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," interchangeably with the container name to stop the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container stop a1eecf6fa762\n")),(0,i.kt)("p",null,"And in case the container doesn't stop you can escalate from SIGTERM to a forceful SIGKILL which should terminate the container process immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container kill dazzling_swanson\n")),(0,i.kt)("h2",{id:"starting-an-interactive-container"},"Starting an Interactive Container"),(0,i.kt)("p",null,"It is possible to start a container with an interactive terminal, e.g. for exploring or debugging a container (image):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container run -it busybox /bin/sh\n")),(0,i.kt)("p",null,"You can terminate the interactive terminal with the ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL+D")," shortcut. The container will stop automatically."),(0,i.kt)("h2",{id:"starting-a-detached-container"},"Starting a Detached Container"),(0,i.kt)("p",null,"You can start a container and detach the terminal from it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container run -d busybox sleep 600\n")),(0,i.kt)("p",null,"This will start a container that sits there for 10 minutes and return its full ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),". The container IDs you see in most CLI commands such as ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container ls")," is just the truncated tail of the actual ID."),(0,i.kt)("h3",{id:"obtaining-an-interactive-shell-to-a-detached-container"},"Obtaining an Interactive Shell to a Detached Container"),(0,i.kt)("p",null,"You can obtain an interactive shell and access the container assuming its ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"dc1945b3fa961f556d059c569460e18ba16a10c8bb5524653d27df101de49d73"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it affectionate_wright /bin/sh\n")),(0,i.kt)("p",null,"In the shell you can enter ",(0,i.kt)("inlineCode",{parentName:"p"},"ps")," to list running Linux processes, and you see something similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PID   USER     TIME  COMMAND\n 1 root      0:00 sleep 600\n 6 root      0:00 /bin/sh\n12 root      0:00 ps\n")),(0,i.kt)("p",null,"The process with ",(0,i.kt)("inlineCode",{parentName:"p"},"PID 1")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep 600")," command and argument passed during the container start. This tells you that you actually logged into the existing container and did not start a new one."),(0,i.kt)("p",null,"While being in the interactive shell, create a new file within the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/ # touch test.txt\n")),(0,i.kt)("p",null,"Stop the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker container stop dc1945b3fa96\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What do you think happened to your file?")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NmFo-LKHGY0"},"Poof! It's gone!")," Containers do not persist changes made to the filesystem."),(0,i.kt)("p",null,"Docker supports so called ",(0,i.kt)("inlineCode",{parentName:"p"},"volumes")," ","[7]"," to persist files if no data service such as a database or persisting message broker is being used."),(0,i.kt)("p",null,"However, as this training does not aim to use Docker but Kubernetes, ",(0,i.kt)("strong",{parentName:"p"},"persistency will be covered in the subsequent Kubernetes Training"),"."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"iTerm2, ",(0,i.kt)("a",{parentName:"li",href:"https://www.iterm2.com/"},"https://www.iterm2.com/")),(0,i.kt)("li",{parentName:"ol"},"GNU Bash, ",(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/bash/"},"https://www.gnu.org/software/bash/")),(0,i.kt)("li",{parentName:"ol"},"Zsh, ",(0,i.kt)("a",{parentName:"li",href:"https://www.zsh.org/"},"https://www.zsh.org/")),(0,i.kt)("li",{parentName:"ol"},"Cygwin, ",(0,i.kt)("a",{parentName:"li",href:"https://www.cygwin.com/"},"https://www.cygwin.com/")),(0,i.kt)("li",{parentName:"ol"},"Docker Desktop, ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop")),(0,i.kt)("li",{parentName:"ol"},"Linux Programmer's Manual, SIGNAL(7), POSIX Signals, ",(0,i.kt)("a",{parentName:"li",href:"http://www.man7.org/linux/man-pages/man7/signal.7.html"},"http://www.man7.org/linux/man-pages/man7/signal.7.html")),(0,i.kt)("li",{parentName:"ol"},"Docker Volumes, ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/volumes/"},"https://docs.docker.com/storage/volumes/")),(0,i.kt)("li",{parentName:"ol"},"BUSYBOX, ",(0,i.kt)("a",{parentName:"li",href:"https://www.busybox.net/"},"https://www.busybox.net/")),(0,i.kt)("li",{parentName:"ol"},"BusyBox Container Image, ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/busybox"},"https://hub.docker.com/_/busybox")),(0,i.kt)("li",{parentName:"ol"},"Alpine Linux, ",(0,i.kt)("a",{parentName:"li",href:"https://alpinelinux.org/"},"https://alpinelinux.org/")),(0,i.kt)("li",{parentName:"ol"},"Alpine Linux Image, ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/alpine"},"https://hub.docker.com/_/alpine"))))}h.isMDXComponent=!0}}]);