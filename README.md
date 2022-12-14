# vue-management-system
# “手机之家”后台管理系统
## 👦作者：潘烁
## 📆日期：2022/09/12
## 💬前言
一个基于Vue开发的后台管理系统，是我个人练手的小项目，使用Vue2全家桶编写。

> 请使用PC访问 **[在线演示](https://aps-47.github.io/vue-management-system/)** (最好用Chrome)

## 👉技术栈
- Vue
- Vue Cli
- Vue Router
- Vuex
- ElementUI
- Axios
- Mock

## 📃开发详情
● 负责项目的构架和开发，使用Vue Cli快速搭建开发环境
● 使用Vue+Elemnet UI进行后台管理系统的开发和样式布局
● 使用Vue Router完成管理系统菜单栏页面之间的路由切换
● 使用Echarts对后台数据进行图形化展示
● 使用Vuex实现不同组件间的信息通讯
● 使用Mock模拟生成数据并对axios进行封装调用接口

## 🚩运行项目
#### 本项目
    # 克隆项目到本地
    Github项目地址：git clone https://github.com/APS-47/vue-management-system.git
    Gitee项目地址：git clone https://gitee.com/aps-47/vue-management-system.git

    # 进入项目文件夹
    cd vue-management-system

    # 安装依赖
    npm install

    # 启动项目
    npm run serve

    #登录
    管理员身份：admin（账号）  1（密码）
    用户身份：user（账号）  1（密码）

## 🚀功能列表
- [x] 根据不同登录者的身份赋予不同权限  
- [x] 管理员和用户均具有查看主页图表数据和浏览不同品牌手机商品详情的功能
- [x] 管理员具有管理用户列表（增删查改）的功能

## 💻部分页面截图

**登录页面**
![1 login](https://user-images.githubusercontent.com/104426986/198957925-0e2010d8-e739-4319-bd3f-65d077969989.png)

**管理员主页面**
![2 admin-main](https://user-images.githubusercontent.com/104426986/198957948-cada761d-14cf-4701-a8c2-d13a6a1fec43.png)

**用户主页面**
![3 user-main](https://user-images.githubusercontent.com/104426986/198957965-4d09ef34-6a44-47de-9d74-88737f86a4e7.png)

**用户管理页面**
![4 user-management](https://user-images.githubusercontent.com/104426986/198957983-4bf81004-9a74-4900-a959-746d09605121.png)

**商品详情页面**
![5 mall-detail](https://user-images.githubusercontent.com/104426986/198957998-01b25421-320b-4829-b961-c495710574c1.png)

## 📆历史版本
#### V1.0.0 (2022年09月12日)
- 正式版发布

## 📣结语
本项目是一个经典的Vue项目后台管理系统项目，是本人作为学习实践的项目，开发采用了Vue全家桶，使vue的特点功能与项目的需求一一匹配。
在今后还将继续完善其它后台管理的模块和功能。
