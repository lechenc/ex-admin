#!/bin/bash
rm -r ./dist # 清空dist目录
currentDate=$(date +%Y%m%d-%H%M) # 获取当前日期

npm run build:stage  # 打包项目
echo "连接服务器"
# 连接服务器->进入指定目录->将当前的包备份一份
ssh root@8.210.161.110 "cd /usr/local/nginx/web/admin;cp -r dist bak_dist/dist_${currentDate};"
echo "连接服务器成功"

# 上传本地的包到服务器指定的目录
scp -r ./dist/* root@8.210.161.110:/usr/local/nginx/web/admin/dist
echo "***************部署成功***************"
