(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{437:function(a,s,t){"use strict";t.r(s);var e=t(9),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("本篇文章不会涉及如何安装 docker 和 docker-compose，以及如何获取 Clash 配置文件，以上部分请自行解决。")]),a._v(" "),s("p",[s("em",[a._v("涉及工具：")])]),a._v(" "),s("ul",[s("li",[a._v("docker")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[a._v("docker-compose")])]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Dreamacro/clash/wiki",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dreamacro/clash")])]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/haishanh/yacd",target:"_blank",rel:"noopener noreferrer"}},[a._v("haishanh/yacd")])])]),a._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[a._v("#")]),a._v(" 步骤")]),a._v(" "),s("h3",{attrs:{id:"_1-准备-clash-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备-clash-配置文件"}},[a._v("#")]),a._v(" 1.准备 Clash 配置文件")]),a._v(" "),s("p",[a._v("在获取到 Clash 配置文件（"),s("code",[a._v("config.yaml")]),a._v("）后，需要确认以下配置：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config.yaml")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7890")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("socks-port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7891")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("allow-lan")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("external-controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.0.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v("\n")])])]),s("div",{staticClass:"custom-block info"},[s("p",{staticClass:"custom-block-title"},[a._v("INFO")]),a._v(" "),s("p",[s("code",[a._v("7890")]),a._v(" 为 "),s("code",[a._v("http/https")]),a._v(" 监听端口，"),s("code",[a._v("7891")]),a._v(" 为 "),s("code",[a._v("socks5")]),a._v(" 监听端口，"),s("code",[a._v("9090")]),a._v(" 为 UI 监听端口，"),s("code",[a._v("allow-lan")]),a._v(" 为允许局域网访问。")])]),a._v(" "),s("h3",{attrs:{id:"_2-创建并运行-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建并运行-container"}},[a._v("#")]),a._v(" 2.创建并运行 Container")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行 Clash")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/clash\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ./config.yaml ~/clash/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# config.yaml 是 Clash 的配置文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" clash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5090")]),a._v(":9090 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5890")]),a._v(":7890 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5891")]),a._v(":7891 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" ~/clash/config.yaml:/root/.config/clash/config.yaml "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" dreamacro/clash\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("如果修改过 "),s("code",[a._v("config.yaml")]),a._v(" 中相关端口的配置，请确保以上端口和 "),s("code",[a._v("config.yaml")]),a._v(" 中的端口对应。")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行 Clash UI")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" clash-ui "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5080")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" haishanh/yacd\n")])])]),s("p",[a._v("🚀 如果顺利完成以上步骤，那么 Clash 和 Clash UI 就已经成功运行了。")]),a._v(" "),s("h3",{attrs:{id:"_3-通过-clash-ui-管理、监控-clash-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过-clash-ui-管理、监控-clash-服务"}},[a._v("#")]),a._v(" 3.通过 Clash UI 管理、监控 Clash 服务")]),a._v(" "),s("p",[a._v("使用浏览器打开地址："),s("code",[a._v("http://[主机IP]:5080")]),a._v("，然后在输入框内输入 "),s("code",[a._v("http://[主机IP]:5090")]),a._v("，再点击 "),s("code",[a._v("ADD")]),a._v(" 按钮，然后点击下方新增的 "),s("code",[a._v("http://[主机IP]:5090")]),a._v(" 链接进入监控界面。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/in-post/2022-06-24/clash-ui.png",alt:""}}),a._v(" "),s("img",{attrs:{src:"/img/in-post/2022-06-24/clash-dashboard.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_4-使用-docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用-docker-compose"}},[a._v("#")]),a._v(" 4.使用 docker-compose")]),a._v(" "),s("p",[a._v("如果觉得上面手动敲命令行的方式太麻烦，可以使用 "),s("code",[a._v("docker-compose")]),a._v(" 来运行 Clash 和 Clash UI。")]),a._v(" "),s("p",[a._v("根据 "),s("a",{attrs:{href:"#_1-%E5%87%86%E5%A4%87-clash-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"}},[a._v("步骤1")]),a._v(" 准备好 Clash 的配置文件 "),s("code",[a._v("config.yaml")]),a._v(" 后，在 "),s("code",[a._v("config.yaml")]),a._v(" 的同级目录下创建 "),s("code",[a._v("docker-compose.yml")]),a._v(" 文件，并写入以下内容：")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker-compose.yml")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.7'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("clash-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dreamacro/clash\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" clash\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5090:9090"')]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5890:7890"')]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5891:7891"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./config.yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/root/.config/clash/config.yaml\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("clash-ui")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" haishanh/yacd\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" clash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("ui\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 5080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n")])])]),s("p",[a._v("然后在当前目录下执行命令："),s("code",[a._v("docker-compose up -d")]),a._v(" 即可创建并运行 Clash 和 Clash UI 了。")]),a._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[a._v("#")]),a._v(" References")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://roov.org/2020/07/docker-clash-ui/",target:"_blank",rel:"noopener noreferrer"}},[s("em",[a._v("群晖docker安装并运行Clash+UI")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);