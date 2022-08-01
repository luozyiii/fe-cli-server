# fe-cli-server

fe-cli 脚手架服务

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### 部署

```bash
# 提前删除 node_mudules等忽略文件 再上传
scp -r ./** root@112.74.201.142:/home/fe-cli-server
cd /home/fe-cli-server
# 创建镜像
docker build -t fe-cli-server:v1.0 ./
# 创建启动容器
docker run -d -p 7003:7001 --name fe-cli-server b0e98d755076(镜像id)
# 7003 外网映射端口
# 7001 容器内部端口
```
