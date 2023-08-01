# 使用node镜像
FROM node:20-alpine3.18
# 在容器中新建目录文件夹 egg
RUN mkdir -p /egg
# 将 /egg 设置为默认工作目录
WORKDIR /egg
# 将 package.json 复制默认工作目录
COPY package.json /egg/package.json

# npm 源，选用国内镜像源以提高下载速度
RUN npm config set registry https://registry.npm.taobao.org/
# 安装依赖
RUN npm install
# 再copy代码至容器
COPY ./ /egg
#7001端口
EXPOSE 7001
#等容器启动之后执行脚本
CMD npm run prod