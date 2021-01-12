---
layout: post
title:  "[Apache] 리눅스에 아파치 설치하기 (우분투, 민트)"
description: "데비안 계열(Ubuntu, Mint)에 아파치 설치하는 방법"
date:   2021-01-12 09:00:00 +0900
categories: Apache
---
## 기본 패키지 업데이트 및 최신화

```bash
sudo apt update && apt upgrade -y
```

![리눅스에 아파치 설치하기-1](/assets/images/2021-01-12/apache-install-on-linux-1.png)

## 아파치2 설치

```bash
sudo apt install -y apache2
```

![리눅스에 아파치 설치하기-1](/assets/images/2021-01-12/apache-install-on-linux-2.png)

## 서비스 상태 확인

```bash
systemctl status apache2.service
```

![리눅스에 아파치 설치하기-1](/assets/images/2021-01-12/apache-install-on-linux-3.png)

## 웹접속 확인

`localhost` 또는 `127.0.0.1`

![리눅스에 아파치 설치하기-1](/assets/images/2021-01-12/apache-install-on-linux-4.png)

## 서비스 명령어

시작
```bash
systemctl start apache2.service
```

종료
```bash
systemctl stop apache2.service
```

재시작
```bash
systemctl restart apache2.service
```

상태확인
```bash
systemctl status apache2.service
```

&nbsp;

이상으로 데비안 계열(우분투, 민트)에 아파치 설치하는 방법이었습니다.
