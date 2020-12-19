---
layout: post
title:  "[SSL] Let's Encrypt SSL 인증서 자동 갱신 설정 방법 (crontab)"
description: "우분투 20.04.1에서 Let's Encrypt SSL 인증서 자동 갱신 설정 방법"
date:   2020-11-01 09:00:00 +0900
categories: SSL
---

Let’s Encrypt에서 발급하는 인증서는 90일짜리 인증서입니다.  
적어도 3개월에 한 번은 갱신을 해야 한다는 뜻이기도 합니다.  
이 인증서를 갱신하는 방법에 대해 알아보겠습니다.

## 갱신 테스트

아래 명령어로 실제 갱신이 아니라  
잘 갱신되는지, 명령에 오류가 나진 않는지 등을 테스트 해 볼 수 있습니다.

```bash
sudo letsencrypt renew --dry-run
```

## 갱신하기

`--dry-run`만 빼고 실행하시면 됩니다.

```bash
sudo letsencrypt renew
```

## 인증서 만료일 확인하기

letsencrypt로 부터 발급받은 인증서들에 대한 정보를 표시합니다.

```bash
sudo letsencrypt certificates
```

## 자동 갱신하기

Crontab은 정해진 일시에 반복적으로 특정 작업을 할 수 있는 프로그램이고  
우분투에 기본적으로 설치되어 있습니다.

간단한 Crontab 명령과 규칙을 살펴보겠습니다.

```bash
# Crontab 보기
sudo crontab -l

# Crontab 편집
sudo crontab -e

# Crontab 실행 로그
sudo view /var/log/syslog
```

crontab 명령어 앞에 sudo를 써준 것은 root 권한의 크론탭을 수정하고 보겠다는 의미입니다.

각자 웹서버와 인증서를 관리하는 사용자 계정의 크론탭을 이용하면 됩니다.

letsencrypt를 그냥 설치했을 때 /etc/letsencrypt에 인증서를 쓸 권한이 필요하므로 여기서는 sudo 를 붙여주었습니다.

규칙
![Let's Encrypt SSL 인증서 자동 갱신 설정 방법 (crontab)-1](/assets/images/2020-11-01/cron-job-format.png)

위 그림처럼 분, 시, 일, 월, 요일, 명령 순서로 기재하면 됩니다.
예를 들어, /home/user/run.sh를 실행하고 싶다면

```bash
# 매 시 10분에 
$ 10 * * * * /home/user/run.sh

# 10분 마다 주기적으로 
$ */10 * * * * /home/user/run.sh

# 토요일 새벽 3시에
$ 0 3 * * 6 /home/user/run.sh
```

이렇게 하면 됩니다.

## 인증서 갱신하기

만약 매주 월요일 새벽 5시 10분에 인증서를 갱신 및 로그를 출력하고  
싶다면 아래와 같이 설정하면 됩니다.

```bash
10 5 * * 1 /usr/bin/letsencrypt renew --deploy-hook="sudo service nginx reload" >> /var/log/letsencrypt/letsencrypt-renew.log
```

뒤에 나오는 `--deploy-hook`은 인증서 갱신을 성공적으로 마치면 Nginx를 재시작하기 위해 넣어주었습니다.

인증서 갱신 전에 실행되는 `--pre-hook`도 있습니다.

이상으로 우분투 20.04.1에서 Let's Encrypt SSL 인증서 자동 갱신 설정 방법이었습니다.
