[TOC]

## 基础准备

### install npm & node
```markdown
#安装npm
sudo apt-get install npm
#清理缓存
sudo npm cache clean --force
#安装n
sudo npm install -g n
#安装最新稳定版
sudo n stable 

### 项目部署：　
```markdown
#创建项目文件夹
sudo mkdir /projects
sudo chown username:username /projects/
ln -s /projects/ ~
cd projects

###下载项目
git clone ssh://git@xxx/~/xx.git
执行 
npm install #初始化node_modules
npm run dev #运行程序
