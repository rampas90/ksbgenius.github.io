---
layout: post
title:  "[SSL] Let’s Encrypt 인증서 수동 발급(Nginx)"
description: "Nginx 우분투 20.04.1에서 Let’s Encrypt 인증서 수동으로 발급하는 방법"
date:   2020-10-06 09:00:00 +0900
categories: SSL
---

## 인증서 발급 프로그램 설치하기

letsencrypt를 설치합니다.

```bash
sudo apt-get install letsencrypt
```

![Let’s Encrypt 인증서 수동 발급-1](/assets/images/2020-10-06/letsencrypt-certificates-manually-issue-1.png)

&nbsp;

## 인증서 발급 프로그램을 사용하여 인증서 발급받기

인증서는 Domain Control Validation 을 거쳐야 발급받을 수 있습니다.

만약 도메인이 없다면 인증서를 발급받을 수 없습니다.

Domain Control Validation 은 주로 다음의 3가지 방법으로 이루어집니다.

* Validation by DNS
* Validation by Email
* Validation by Fil

참고 : [Domain Control Validation 방법](https://docs.gandi.net/en/ssl/common_operations/dcv.html){: target="_blank"}

Let’s Encrypt는 위의 도메인 인증방법 중 3번째인  
Validation by File 을 사용하여 인증을 합니다.

&nbsp;

따라서 먼저 도메인에 대한 HTTP 접속이 가능해야 합니다.

서버를 처음 세팅하는 경우  
HTTP 설정 -> 인증서 발급 -> HTTPS 추가 설정하는 단계
  
이미 HTTPS 를 사용하고 있을 경우  
인증서 발급 -> HTTPS 인증서 교체 하는 단계

&nbsp;

## 인증서 발급받기

원본 도메인과 www 도메인 동시인증

```bash
letsencrypt certonly --webroot --webroot-path=/home/sample/www -d sample.com -d www.sample.com
```

`-d`는 도메인명을 지정하면 됩니다.

한 인증서가 서로 다른 100개의 도메인을 인증 할 수 있지만  
보통 기본도메인과 www 도메인 두개를 지정합니다.

`--webroot` 는 웹인증을 받을 것이라는 겁니다.

외부 인증프로그램이 -d 에 지정된 도메인 사이트에 접속합니다.

`--webroot-path` 는 웹루트의 경로입니다.

보통 index 페이지가 위치하는 경로입니다.  
인증 프로그램이 이 경로에 임시 랜덤 파일을 생성하고,  
외부 인증프로그램이 이 파일을 접근할 수 있다면 Domain Validation 이 되는 것입니다.

* 이메일 주소 : 인증에 문제가 생겼거나, 인증서 만료기간이 가까웠을때 갱신 알림 메일을 수신할 주소를 입력해줍니다.

* 약관동의 : 약관 동의를 위해 A를 입력해줍니다.

* 공유여부 : 이메일 주소 공유는 따로 하지 않기 위해 N을 입력해줍니다.

![Let’s Encrypt 인증서 수동 발급-2](/assets/images/2020-10-06/letsencrypt-certificates-manually-issue-2.png)

인증서는 `/etc/letsencrypt/live/도메인명/` 위치에 발급됩니다.

* cert.pem - 인증서 파일
* chain.pem - 인증서 발급자 파일
* fullchain.pem - cert.pem, chain.pem을 하나로 합쳐놓은 파일
* privkey.pem - 인증암호를 해독하는 개인키

디피-헬만 파라미터(이하 dhparam)는  
SSL 통신시 암호화를 도와주는 방식중 하나로  
dhparam 키를 이용해 암호화 복잡도를 높여  
보안을 강화하는것이 목적으로  
각종 WAS의 SSL 통신에서 dhparam을 지원합니다.

dhparam.pem 파일은 한번만 생성하면 됩니다. (중복하여 생성해도 문제가 발생하지는 않습니다)

```bash
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096
```

![Let’s Encrypt 인증서 수동 발급-3](/assets/images/2020-10-06/letsencrypt-certificates-manually-issue-3.png)

Nginx 설정

```bash
listen       443 ssl http2;
server_name  sample.com www.sample.com;
root   /home/sample/www;
client_max_body_size 10M;

ssl_certificate "/etc/letsencrypt/live/sample.com/fullchain.pem";
ssl_certificate_key "/etc/letsencrypt/live/sample.com/privkey.pem";
ssl_dhparam "/etc/ssl/certs/dhparam.pem";

# Enable HSTS. This forces SSL on clients that respect it, most modern browsers. The includeSubDomains flag is optional.
add_header Strict-Transport-Security "max-age=31536000";
```

&nbsp;

## 인증서 발급 프로그램을 통해 인증서 갱신하기

Let’s Encrypt는 3개월짜리 인증서를 발급해줍니다.

즉 인증서를 3개월마다 주기적으로 갱신(renewal)해 주어야 합니다.  
갱신은 만료일 기준 1개월 전부터 할 수 있습니다.

갱신할 인증서가 있다면 자동으로 갱신 작업을 진행합니다.

```bash
sudo letsencrypt renew
```

![Let’s Encrypt 인증서 수동 발급-4](/assets/images/2020-10-06/letsencrypt-certificates-manually-issue-4.png)

&nbsp;

## 인증서 갱신 프로그램 주기적으로 실행하기

매주 월요일 새벽 5시 10분에 인증서 갱신을,  
매주 월요일 새벽 5시 15분에 웹서버 프로그램 변경사항 적용을 실행하도록 설정합니다.

```bash
sudo crontab -e
```

에디터 선택문구가 출력된다면 3번(vim)을 누르면 됩니다. (재선택 명령어 : select-editor)

```bash
10 5 * * 1 /usr/bin/letsencrypt renew >> /var/log/letsencrypt/letsencrypt-renew.log
15 5 * * 1 /usr/sbin/service nginx reload
```

![Let’s Encrypt 인증서 수동 발급-5](/assets/images/2020-10-06/letsencrypt-certificates-manually-issue-5.png)

이상으로 Nginx Ubuntu 20.04.1에서 Let’s Encrypt 인증서 수동으로 발급하는 방법이었습니다.
