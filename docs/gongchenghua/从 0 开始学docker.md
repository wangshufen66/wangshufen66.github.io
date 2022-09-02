---

title: 从 0 开始学 docker
date: 2022-08-31
header_img: https://www.bing.com/th?id=OHR.BannerPeak_ZH-CN2693006060_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
headerMask: rgba(40, 57, 101, .4)
tags:
  - Docker
  - Linux
---

```
dockerHub:  
username:waynewang1
Email:15295502569@163.com
password：wsf123456
```

#### 前言

------

先来看一段简单的基础架构历史

- 90年代是传统服务器，在一些公司都会买小型机、塔式服务器、刀片式服务器，一个服务器上跑一个服务（一种应用），缺点是大量服务器资源被浪费；
- 2000年开始流行虚拟化技术，代表是VMware和VirtualBox软件，在一个服务器上可以模拟出多台虚拟服务器，缺点是占有服务器资源较多，需要虚拟内存和CPU，占有服务器大量资源；
- 2005年-2015年云技术Cloud开始流行，这个时候产生了很多大型云服务商，国际的有亚马逊、国内的阿里云，都是这个时期成长起来的公司。云技术也为容器技术提供了良好的生长土壤。
- 2015年以后Container（容器）时代，现在无论是国际还是国内大厂，无一例外的都在使用容器技术。那最为出名的就是Docker。

| Docker | 面向对象 |
| ------ | -------- |
| 容器   | 对象     |
| 镜像   | 类       |

#### 一、容器技术（container）的概念

```tex
Linux Container容器技术的诞生(2008年)就解决了IT世界里“集装箱运输”的问题。Linux Container（简称LXC），它是一种内核轻量级的操作系统层虚拟化技术。Linux Container主要由Namespace和Cgroup两大机制保证实现。
```

> 用我的话解释一下，其实**容器就想一个打包工具，打包的不仅是你的程序，也包括运行环境。**就好比你把你的开发主机和开发程序完全复制了一份，别人拿到后就不需要搭建环境，也不需要根据环境进行调试，直接就可以运行了。

#### 二、安装 docker

```
可以直接使用curl命令下载这个shell脚本
curl -fsSL get.docker.com -o get-docker.sh

可以使用ls命令查看一下。如果已经存在了，就可以使用sh命令，直接执行这个脚本了。
sh get-docker.sh
安装过程大概要3-4分钟左右，也是主要看网速和服务器性能。

安装完成后，通过docker version命令检查是否安装成功。
这时候要使用systemctl start命令，开启Docker服务端
sudo systemctl start docker
开启后，再使用sudo docker version来看一下，如果有类似下面的信息，说明已经安装成功了。
```



#### 二、容器相关命令

```
在服务器启动 docker
systemctl daemon-reload   
systemctl restart docker.service
```



```
docker search mysql 查找容器

1.创建容器命令：
docker container run < image name >   eg：docker container run nginx

2.查看容器列表
docker container ls    ||		docker container ls -a

3.停止容器
docker container stop <name or ID>

4.删除容器
docker container rm <name or ID>

容器的创建：docker container run nginx 简写方法 docker run nginx
容器的列出(up): docker container ls 简写方法 docker ps
容器的列出（up和exit）：docker container ls -a 简写方法 docker ps -a
容器的停止 ： docker container stop 简写方法 docker stop
容器的删除：docker container rm 简写方法 docker rm


只查看现在所有容器的ID
docker container ps -aq

停止所有容器
docker container stop $(docker container ps -qa)
删除所有容器
docker container rm $(docker container ps -aq)
```

端口映射：(nginx 默认端口 80)

```
docker container run -p 80:80 nginx   等待项目启动后，打开浏览器窗口，在地址栏输入127.0.0.1，就可以打开nginx的默认网址
docker container run -p 90:80 nginx		等待项目启动后，打开浏览器窗口，在地址栏输入127.0.0.1:90，就可以打开nginx的默认网址

attached模式在前台运行，detached模式在后台运行。
attached模式更适用于容器和程序的调试阶段。  detached模式在后台运行这种比较适合在生产环境中运行，停掉和删除容器都需要使用Shell脚本的形式

detached模式的开启方法，就是加一个参数-d或者--detach。
docker run -d -p 80:80 nginx

在运行之后，也有需要调试的时候，Docker提供了两个模式间的转换。比如现在要把detached模式的容器，改为attched模式。
docker  attach <ID or Image Name>

查看后台日志
docker container logs <ID or Image name>

如果想动态一直跟踪日志，可以在命令上加入一个-f。
docker container logs -f <ID or Image name>

如果想关闭日志跟踪模式，直接用快捷键Ctrl+C就可以结束掉了。(mac系统中也是 ctrl+C，不是 command+C)

detached下的交互模式:
先用detached模式创建一个nginx镜像的容器。
docker container run -d -p 90:80 nginx
直接通过下面的命令就可以进入到交互模式下了。(这是我们以后要经常使用的一个命令)
docker exec -it <ID or Image name> sh 
exec是执行的意思，-it交互模式 ， sh交互的方式，用shell脚本进行交互.  整个命令的意思是：用shell脚本的方式执行交互模式。
进入后可以使用ls来查看容器的文件系统。这种模式的优点是，再使用exit退出后，服务并不会停止，而只是退出了交互模式。可以自己尝试一下退出，然后使用docker container ls -a来查看一下容器的状态，你会发现依然是 up状态。
```

三、镜像相关命令

获取镜像的三个途径：

- 从网络社区直接拉取，在Docker里这种社区叫做`Registry`(登记处)的意思。（pull from registry）
- 从Dockerfile构建一个镜像，这种像是DIY一个镜像，但是整个构建过程是需要联网，因为需要西在基础镜像，然后根据基础镜像进行构建（build from Dockerfile）。
- 自有文件的导入，可以从本地导入已经构建好的镜像文件，在没有网络的时候可以用。这个文件是通过 已有的镜像导出来的压缩包，然后就可以进行使用了。



```
拉取镜像命令：
docker image pull mysql
查看镜像列表：
docker image ls
查看具体镜像信息：
docker image  inspect <IMAGE ID>
删除镜像：
docker image rm <Image ID>

导出镜像:
docker image save
在导出之前，你最好到一个好找的路径下面，比如我这里就选择了D盘，使用mkdir命令创建一个文件夹，进入文件后输入下面的命令。比如现在要导出镜像中的busybox镜像，可以这样写命令。
docker image save mysql:latest -o mysql.image		
save是导出/保存的意思，busybox:latest是镜像名称+版本号， -o代表输出，mysql.image是导出后镜像的名字。
命令执行完成后，可以看到在执行命令所在的目录下就会多出一个mysql.image的文件，这就是刚才导出的镜像了。

导入镜像：
先删除掉本机已有的busybox镜像。
docker image rm mysql
删除后直接导入镜
docker image load -i ./mysql.image
执行完命令之后，再使用docker image ls命令查看，mysql镜像已经回来了。
```

##### 初识Dockerfile

通过Dockerfile构建镜像虽然比较麻烦，这是最常使用的一种方式，必须掌握。Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。

可以简单总结为下面三点：

- Dockerfile是用于构建docker镜像的文件
- Dockerfile里包含了构建镜像所需的”指令“
- Dockerfile有其特定的语法规则（重要学习）

```
docker image build -t <Name:tag> <file path>
```



#### Docker volume相关命令

```

```



##### 最后

```
Docker可以干嘛？

- 将一整套环境打包封装成镜像，**无需重复配置环境**，解决环境带来的种种问题。
- Docker容器间是进程隔离的，谁也不会影响谁。


一、容器技术docker的思考方式是，将环境一起打包镜像，避免部署时的环境问题。
二、dockerfile记录镜像的制作步骤
三、镜像、容器、仓库的概念可以类比代码、进程、github
```

 docker build -f Dockerfile.copy -t app .    根基 dockerfile 文件打包成镜像  名字叫 app

docker images  查看所有镜像 ，会有 app

运行镜像成一个容器

docker run -id -p 3030:3000 app   

访问 localhost：3030  即可

