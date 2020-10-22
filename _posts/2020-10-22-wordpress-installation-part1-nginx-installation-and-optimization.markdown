---
layout: post
title:  "[Wordpress] 설치하기 1부 - Nginx 설치 및 최적화"
description: "VirtualBox에 Ubuntu 20.04.1 LTS Server 설치하기"
date:   2020-10-22 01:32:00 +0900
categories: Wordpress
---
>Ubuntu 20.04.1 LTS에 워드프레스 설치를 위해  
>Nginx 설치 및 최적화를 해보도록 하겠습니다.

## 기본 패키지 업데이트 및 최신화

1. 시작하기전에 먼저해주세요
```
sudo apt update && apt upgrade -y
```
![Nginx 설치 및 최적화-1](/assets/images/2020-10-22/nginx-installation-and-optimization-1.png)

2. nginx 패키지 설치이전에 선행작업 진행  
```
sudo apt install curl gnupg2 ca-certificates lsb-release
```
![Nginx 설치 및 최적화-2](/assets/images/2020-10-22/nginx-installation-and-optimization-2.png)

--- 

## Nginx 설치
1. 패키지 업데이트 후 Nginx 설치  
```
sudo apt update
sudo apt install nginx -y
```
![Nginx 설치 및 최적화-3](/assets/images/2020-10-22/nginx-installation-and-optimization-3.png)
![Nginx 설치 및 최적화-4](/assets/images/2020-10-22/nginx-installation-and-optimization-4.png)

2. Nginx 시작
```
sudo systemctl start nginx.service
```
![Nginx 설치 및 최적화-5](/assets/images/2020-10-22/nginx-installation-and-optimization-5.png)

3. Nginx 상태 및 버전확인
```
systemctl status nginx.service
nginx -v
```
![Nginx 설치 및 최적화-6](/assets/images/2020-10-22/nginx-installation-and-optimization-6.png)
![Nginx 설치 및 최적화-7](/assets/images/2020-10-22/nginx-installation-and-optimization-7.png)

---

## Nginx 자동시작(서비스) 등록
1. 재부팅시 자동시작을 위한 서비스 등록  
```
sudo systemctl enable nginx.service
```
![Nginx 설치 및 최적화-8](/assets/images/2020-10-22/nginx-installation-and-optimization-8.png)

---

## Nginx 구동 테스트
1. 80번 포트가 리스닝 되고 있는지 확인  
```
sudo netstat -lntp
```
![Nginx 설치 및 최적화-9](/assets/images/2020-10-22/nginx-installation-and-optimization-9.png)

2. 웹브라우저에서 설치된 서버 ip로 접속
![Nginx 설치 및 최적화-10](/assets/images/2020-10-22/nginx-installation-and-optimization-10.png)

---

## Nginx 최적화 설정
* ### worker process 확인
    Nginx의 설정파일은 `/etc/nginx/nginx.conf`에 있습니다.  

    Apache는 스레드,프로세스 기반의 아키텍처인 반면  
    Nginx의 경우 이벤트 중심의 아키텍처가 있습니다.  
    기본적으로 Nginx의 Process 구조는 아래와 같습니다
```
ps -ef | grep nginx
```

    설정 전
![Nginx 설치 및 최적화-11](/assets/images/2020-10-22/nginx-installation-and-optimization-11.png)

    현재 작업중인 서버의 CPU 프로세스 개수는 2개이며  
    worker_process가 auto로 설정되어 있어  
    `nginx: worker process` 가 2개가 보여집니다.

    만약 운영중인 서버의 CPU 개수가 다르다면,  
    `nginx: worker process` 개수가 다르게 보여질것입니다.


* ### 작업자 프로세스 설정
    Nginx는 다수의 작업자 프로세스를 실행할 수 있으며,  
    각각은 다수의 동시 연결을 처리 할 수 ​​있습니다.

    다음 지시문을 사용하여 작업자 프로세스 수와 연결을 처리하는 방법을 제어 할 수 있습니다.

    * worker_processes – Nginx 작업자 프로세스 수 (기본값은 1)  
        대부분의 경우 CPU 코어 당 하나의 작업자 프로세스를 실행하면 효과가 있으며,  
        이를 달성하기 위해 이 지정 문을 설정하는 것이 좋습니다.  
        작업자 프로세스가 많은 디스크 I / O를 수행해야하는 경우,  
        이 수를 늘리려는 경우가 있습니다.

    * worker_connections – 각 작업자 프로세스가 동시에 처리 할 수있는 최대 연결 수  
        기본값은 512이지만 대부분의 시스템에는 더 많은 수를 지원하기에  
        충분한 리소스가 있습니다.  
        적절한 설정은 서버 크기와 트래픽 특성에 따라 다르며  
        테스트를 통해 검색 할 수 있습니다.  

    위 설명을 따라서 저는 제 사양 4core에 맞춘 설정을 적용하겠습니다.

    `sudo vi /etc/nginx/nginx.conf` 명령어를 통해 아래부분과 같이 변경해주세요.   
    ```
    worker_processes 4;

    events {
        worker_connections 1024;
    }
    ```
    ![Nginx 설치 및 최적화-12](/assets/images/2020-10-22/nginx-installation-and-optimization-12.png)

    설정 후 Nginx 재시작
```
sudo systemctl restart nginx.service
```
![Nginx 설치 및 최적화-13](/assets/images/2020-10-22/nginx-installation-and-optimization-13.png)

    worker process 재확인
```
ps -ef | grep nginx
```
![Nginx 설치 및 최적화-14](/assets/images/2020-10-22/nginx-installation-and-optimization-14.png)
`nginx: worker process` 가 4개로 변경된 것이 보여집니다.

---

이상으로 Wordpress 설치하기 1부 - Nginx 설치 및 최적화였습니다.