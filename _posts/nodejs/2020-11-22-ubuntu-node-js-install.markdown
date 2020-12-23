---
layout: post
title:  "[NodeJS] Ubuntu 20.04 Node.JS 설치"
description: "Ubuntu 20.04에 Node.JS 설치하는 방법"
date:   2020-11-22 09:00:00 +0900
categories: NodeJS
---
## 설치환경

Ubuntu 20.04 LTS Server

&nbsp;

## Nodesource PPA(개인아카이브) 등록

다른 버전의 Node.js를 설치하려면 NodeSource에서 유지 관리 하는 PPA (개인 패키지 아카이브)를 사용할 수 있습니다.

PPA에는 공식 Ubuntu 리포지토리보다 더 많은 버전의 Node.js가 있습니다.

여기서는 14 버전으로 설치할 예정이며

이전 버전을 설치하고 싶으면 숫자만 변경하면 됩니다.

참고사항 : [https://github.com/nodesource/distributions](https://github.com/nodesource/distributions){: target="_blank"}

### Node.js v14.x

```bash
sudo curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

### Node.js v12.x

```bash
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

![Ubuntu 20.04 Node.JS 설치-1](/assets/images/2020-11-22/1.png)

&nbsp;

## 설치

위에서 등록한 레포지터리에서 최신버전의 node.js를 설치하게됩니다.

```bash
sudo apt-get install -y nodejs
```

![Ubuntu 20.04 Node.JS 설치-2](/assets/images/2020-11-22/2.png)

&nbsp;

### 버전확인

```bash
node -v
```

14.15.3 버전이 설치되었습니다.

![Ubuntu 20.04 Node.JS 설치-3](/assets/images/2020-11-22/3.png)

&nbsp;

## 테스트

테스트에 사용할 디렉터리 생성

```bash
mkdir -p test
vi test/test.js
```

![Ubuntu 20.04 Node.JS 설치-4](/assets/images/2020-11-22/4.png)

테스트 코드 작성

```javascript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('------------------------' + "\n");
  res.write('node.js test!' + "\n");
  res.write('------------------------' + "\n");
  res.end();
}).listen(7777);
```

![Ubuntu 20.04 Node.JS 설치-5](/assets/images/2020-11-22/5.png)

node로 실행

```bash
node test/test.js &
```

![Ubuntu 20.04 Node.JS 설치-6](/assets/images/2020-11-22/6.png)

네트워크 상태 확인

```bash
sudo netstat -lntp
```

![Ubuntu 20.04 Node.JS 설치-7](/assets/images/2020-11-22/7.png)

curl 또는 웹 접속으로 동작 확인

![Ubuntu 20.04 Node.JS 설치-7](/assets/images/2020-11-22/8.png)

![Ubuntu 20.04 Node.JS 설치-7](/assets/images/2020-11-22/9.png)

&nbsp;

이상으로 Ubuntu 20.04에 Node.JS 설치하는 방법이었습니다.
