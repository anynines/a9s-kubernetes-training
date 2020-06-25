(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(185)),o={id:"docker-basics",title:"Docker Basics"},c={id:"docker/docker-basics",isDocsHomePage:!1,title:"Docker Basics",description:"In this lesson you will start, stop, list and access containers in various ways.",source:"@site/docs/docker/20-docker-basics.md",permalink:"/docker/docker-basics",sidebar:"docs",previous:{title:"Docker Installation",permalink:"/docker/installation"},next:{title:"Creating Container Images",permalink:"/docker/creating-images"}},l=[{value:"Starting a Container",id:"starting-a-container",children:[{value:"List Running Containers",id:"list-running-containers",children:[]}]},{value:"Starting and Stopping Containers With a Port Mapping",id:"starting-and-stopping-containers-with-a-port-mapping",children:[]},{value:"Starting an Interactive Container",id:"starting-an-interactive-container",children:[]},{value:"Starting a Detached Container",id:"starting-a-detached-container",children:[{value:"Obtaining an Interactive Shell to a Detached Container",id:"obtaining-an-interactive-shell-to-a-detached-container",children:[]}]},{value:"Links",id:"links",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this lesson you will start, stop, list and access containers in various ways."),Object(i.b)("h2",{id:"starting-a-container"},"Starting a Container"),Object(i.b)("p",null,"Starting a container is as simple as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'docker container run busybox printf "Hello World\\n"\n')),Object(i.b)("p",null,"The output ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World")," will appear in your terminal."),Object(i.b)("p",null,"Note, Busybox ","[8]"," is a tiny bundle of UNIX utilities. Consequently, the official Busybox container image ","[9]"," is also very small. Another interesting light-weight Linux container image is Alpine ","[10][11]","."),Object(i.b)("p",null,"Small container images are beneficial as it reduces the time to distribute new versions across the network. Large images have hundreds of MBs whereas small images comprise a few megabytes only."),Object(i.b)("h3",{id:"list-running-containers"},"List Running Containers"),Object(i.b)("p",null,"After starting the container as described previously, run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container ls\n")),Object(i.b)("p",null,"To list running containers."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Do you see that no container is running?")),Object(i.b)("p",null,"This is because the container has been started, did what it was told to do and finally ",Object(i.b)("strong",{parentName:"p"},"terminated"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," command is not a daemon - not a long running process - and once the command exited, the container reach its end of life."),Object(i.b)("p",null,"In order to see stopped containers execute:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container ls --all\n")),Object(i.b)("p",null,"This will show you the container along with some meta data such as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                      PORTS               NAMES\n47e4a58fbf81        busybox                           "printf \'Hello World\u2026"   2 minutes ago       Exited (0) 2 minutes ago                        hopeful_hoover\n')),Object(i.b)("h2",{id:"starting-and-stopping-containers-with-a-port-mapping"},"Starting and Stopping Containers With a Port Mapping"),Object(i.b)("p",null,"In case the process to start within the container opens a port, the container port may interfere with a daemon running on your local computer. For this reason a port mapping is required that maps the container port to a vacant port on your machine:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run -p 8081:8080 fischerjulian/smpl-go-web:1.0.0\n")),Object(i.b)("p",null,"This will map the port ",Object(i.b)("inlineCode",{parentName:"p"},"8080"),"of the container to the port ",Object(i.b)("inlineCode",{parentName:"p"},"8081"),". Open your browser and navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:8081"),". You should see a simple web app."),Object(i.b)("p",null,"As this container starts a long running process, the container will not automatically terminate:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'docker container ls\n\nCONTAINER ID        IMAGE               COMMAND               CREATED             STATUS              PORTS                    NAMES\nf535c41de16f        smpl-go-web         "/bin/sh -c ./main"   12 minutes ago      Up 12 minutes       0.0.0.0:8081->8080/tcp   dazzling_swanson\n')),Object(i.b)("p",null,"As you can see the output also described the port mapping from your local machine to the container."),Object(i.b)("p",null,"You can use the automatically assigned container name ",Object(i.b)("inlineCode",{parentName:"p"},"dazzling_swanson")," to stop the container with a SIGTERM ","[6]"," signal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container stop dazzling_swanson\n")),Object(i.b)("p",null,"Alternatively you can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINER ID")," interchangeably with the container name to stop the container:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container stop a1eecf6fa762\n")),Object(i.b)("p",null,"And in case the container doesn't stop you can escalate from SIGTERM to a forcefull SIGKILL which should terminate the container process immediately:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container kill dazzling_swanson\n")),Object(i.b)("h2",{id:"starting-an-interactive-container"},"Starting an Interactive Container"),Object(i.b)("p",null,"It is possible to start a container with an interactive terminal, e.g. for exploring or debugging a container (image):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run -it busybox /bin/sh\n")),Object(i.b)("p",null,"You can terminate the interactive terminal with the ",Object(i.b)("inlineCode",{parentName:"p"},"CTRL+D")," shortcut. The container will stop automatically."),Object(i.b)("h2",{id:"starting-a-detached-container"},"Starting a Detached Container"),Object(i.b)("p",null,"You can start a container and detach the terminal from it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container run -d busybox sleep 600\n")),Object(i.b)("p",null,"This will start a container that sits there for 10 minutes and return its full ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINER ID"),". The container ids you see in most CLI commands such as ",Object(i.b)("inlineCode",{parentName:"p"},"docker container ls")," is just the a truncated tail of the actual id."),Object(i.b)("h3",{id:"obtaining-an-interactive-shell-to-a-detached-container"},"Obtaining an Interactive Shell to a Detached Container"),Object(i.b)("p",null,"You can obtain an interactive shell and access the container assuming its ",Object(i.b)("inlineCode",{parentName:"p"},"CONTAINER ID")," is ",Object(i.b)("inlineCode",{parentName:"p"},"dc1945b3fa961f556d059c569460e18ba16a10c8bb5524653d27df101de49d73"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker exec -it affectionate_wright /bin/sh\n")),Object(i.b)("p",null,"In the shell you can enter ",Object(i.b)("inlineCode",{parentName:"p"},"ps")," to list running linux processes and you see something similar to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"PID   USER     TIME  COMMAND\n 1 root      0:00 sleep 600\n 6 root      0:00 /bin/sh\n12 root      0:00 ps\n")),Object(i.b)("p",null,"The process with ",Object(i.b)("inlineCode",{parentName:"p"},"PID 1")," is the ",Object(i.b)("inlineCode",{parentName:"p"},"sleep 600")," command and argumend passed during the container start. This tells you that you actually logged into the existing container and did not start a new one."),Object(i.b)("p",null,"While being in the interactive shell, create a new file within the container:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"/ # touch test.txt\n")),Object(i.b)("p",null,"Stop the container:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker container stop dc1945b3fa96\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What do you think happened to your file?")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=NmFo-LKHGY0"}),"Poof! It's gone!")," Containers do not persist changes made to the filesystem."),Object(i.b)("p",null,"Docker supports so called ",Object(i.b)("inlineCode",{parentName:"p"},"volumes")," ","[7]"," to persist files if no data service such as a database or persisting message broker is being used."),Object(i.b)("p",null,"However, as this training does not aim to use Docker but Kubernetes, ",Object(i.b)("strong",{parentName:"p"},"persistency will be covered in the subsequent Kubernetes Training"),"."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"iTerm2, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.iterm2.com/"}),"https://www.iterm2.com/")),Object(i.b)("li",{parentName:"ol"},"GNU Bash, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.gnu.org/software/bash/"}),"https://www.gnu.org/software/bash/")),Object(i.b)("li",{parentName:"ol"},"Zsh, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.zsh.org/"}),"https://www.zsh.org/")),Object(i.b)("li",{parentName:"ol"},"Cygwin, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cygwin.com/"}),"https://www.cygwin.com/")),Object(i.b)("li",{parentName:"ol"},"Docker Desktop, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"https://www.docker.com/products/docker-desktop")),Object(i.b)("li",{parentName:"ol"},"Linux Programmer's Manual, SIGNAL(7), POSIX Signals, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.man7.org/linux/man-pages/man7/signal.7.html"}),"http://www.man7.org/linux/man-pages/man7/signal.7.html")),Object(i.b)("li",{parentName:"ol"},"Docker Volumes, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/storage/volumes/"}),"https://docs.docker.com/storage/volumes/")),Object(i.b)("li",{parentName:"ol"},"BUSYBOX, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.busybox.net/"}),"https://www.busybox.net/")),Object(i.b)("li",{parentName:"ol"},"BusyBox Container Image, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/_/busybox"}),"https://hub.docker.com/_/busybox")),Object(i.b)("li",{parentName:"ol"},"Alpine Linux, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://alpinelinux.org/"}),"https://alpinelinux.org/")),Object(i.b)("li",{parentName:"ol"},"Alpine Linux Image, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/_/alpine"}),"https://hub.docker.com/_/alpine"))))}b.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);