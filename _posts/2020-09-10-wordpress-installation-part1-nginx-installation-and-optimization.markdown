---
layout: post
title:  "[Wordpress] 설치하기 1부 - Nginx 설치 및 최적화"
description: "Ubuntu 20.04.1 LTS에 워드프레스 설치를 위한 Nginx 설치 및 최적화"
date:   2020-09-10 09:00:00 +0900
categories: Wordpress
---
>Ubuntu 20.04.1 LTS에 워드프레스 설치를 위해  
>Nginx 설치 및 최적화를 해보도록 하겠습니다.

## 기본 패키지 업데이트 및 최신화
시작하기전에 먼저 해주세요.
```
sudo apt update && apt upgrade -y
```
![Nginx 설치 및 최적화-1](/assets/images/2020-09-10/nginx-installation-and-optimization-1.png)

Nginx 패키지 설치 이전에 선행작업을 진행합니다.
```
sudo apt install curl gnupg2 ca-certificates lsb-release
```
![Nginx 설치 및 최적화-2](/assets/images/2020-09-10/nginx-installation-and-optimization-2.png)



## Nginx 설치
패키지 업데이트 후 Nginx를 설치합니다.
```
sudo apt update
sudo apt install nginx -y
```
![Nginx 설치 및 최적화-3](/assets/images/2020-09-10/nginx-installation-and-optimization-3.png)
![Nginx 설치 및 최적화-4](/assets/images/2020-09-10/nginx-installation-and-optimization-4.png)

Nginx를 시작합니다.
```
sudo systemctl start nginx.service
```
![Nginx 설치 및 최적화-5](/assets/images/2020-09-10/nginx-installation-and-optimization-5.png)

Nginx 상태 및 버전을 확인합니다.
```
systemctl status nginx.service
nginx -v
```
![Nginx 설치 및 최적화-6](/assets/images/2020-09-10/nginx-installation-and-optimization-6.png)
![Nginx 설치 및 최적화-7](/assets/images/2020-09-10/nginx-installation-and-optimization-7.png)



## Nginx 자동시작(서비스) 등록
재부팅시 자동시작을 위한 서비스를 등록합니다.
```
sudo systemctl enable nginx.service
```
![Nginx 설치 및 최적화-8](/assets/images/2020-09-10/nginx-installation-and-optimization-8.png)



## Nginx root 경로 수정  
설치시 기본 경로는 `/var/www/html`입니다.  
여기서는 `/home/ksb/www`로 변경하려고 합니다.
```
sudo vi /etc/nginx/sites-available/default
```
![Nginx 설치 및 최적화-9](/assets/images/2020-09-10/nginx-installation-and-optimization-9.png)

`root /var/www/html` 부분을 변경해줍니다.
```
#root /var/www/html;
root /home/ksb/www;
```
여기서 저는 계정명이 `ksb`입니다.
![Nginx 설치 및 최적화-10](/assets/images/2020-09-10/nginx-installation-and-optimization-10.png)

테스트를 위해 기본경로에 설치된 `index.nginx-debian.html` 파일을  
새로 변경한 `/home/ksb/www`경로로 복사해줍니다.
```
cp /var/www/html/index.nginx-debian.html /home/ksb/www/index.nginx-debian.html
```
![Nginx 설치 및 최적화-11](/assets/images/2020-09-10/nginx-installation-and-optimization-11.png)

Nginx를 재시작합니다.
```
sudo systemctl restart nginx.service
```
![Nginx 설치 및 최적화-12](/assets/images/2020-09-10/nginx-installation-and-optimization-12.png)



## Nginx 구동 테스트
80번 포트가 리스닝 되고 있는지 확인합니다.
```
sudo netstat -lntp
```
![Nginx 설치 및 최적화-13](/assets/images/2020-09-10/nginx-installation-and-optimization-13.png)

웹브라우저에서 설치된 서버 IP로 접속합니다.
![Nginx 설치 및 최적화-14](/assets/images/2020-09-10/nginx-installation-and-optimization-14.png)



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
![Nginx 설치 및 최적화-15](/assets/images/2020-09-10/nginx-installation-and-optimization-15.png)

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
    ![Nginx 설치 및 최적화-16](/assets/images/2020-09-10/nginx-installation-and-optimization-16.png)

    설정 후 Nginx 재시작
```
sudo systemctl restart nginx.service
```
![Nginx 설치 및 최적화-17](/assets/images/2020-09-10/nginx-installation-and-optimization-17.png)

    worker process 재확인
```
ps -ef | grep nginx
```
![Nginx 설치 및 최적화-18](/assets/images/2020-09-10/nginx-installation-and-optimization-18.png)
`nginx: worker process` 가 4개로 변경된 것이 보여집니다.

이상으로 Wordpress 설치하기 1부 - Nginx 설치 및 최적화였습니다.