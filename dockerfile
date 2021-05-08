FROM node:14-stretch

# 更新apt-get源
RUN echo \
  deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib\
  deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib\
  deb http://mirrors.aliyun.com/debian-security stretch/updates main\
  deb-src http://mirrors.aliyun.com/debian-security stretch/updates main\
  deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib\
  deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib\
  deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib\
  deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib\
  > /etc/apt/sources.list

# 处理时区
ENV TZ=Asia/Shanghai

RUN echo $TZ > /etc/timezone && \
  apt-get update && apt-get install -y tzdata && \
  rm /etc/localtime && \
  ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata

# Clean up
RUN \
  apt-get autoremove -y && \
  apt-get autoclean && \
  apt-get clean


RUN yarn config set registry https://mirrors.huaweicloud.com/repository/npm/

COPY ./docker/node /node
COPY ./build/index.html /node/index.html

WORKDIR /node

RUN yarn install --production

CMD node index.js

EXPOSE 3000
