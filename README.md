### demo1
1. 安装基础包webpack,webpack-cli,webpack-dev-server,html-webpack-plugin和cross-env
2. webpack配置文件webpack.dev.conf.js，指定入口和输出文件，使用html-webpack-plugin插件自动生成index.html
3. npm scripts里设置指令dev

### demo2
1. 增加loader包：css-loader,style-loader,sass-loader,node-sass,file-loader，分别处理css/sass文件和图片文件
2. npm scripts里设置指令watch，注意webpack --watch和webpack-dev-server的区别，webpack-dev-server可以热加载和模块热替换
3. 配置文件里加入rules相关配置
