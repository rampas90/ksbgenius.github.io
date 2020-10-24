---
layout: post
title:  "[Wordpress] 설치하기 4부 - DB 셋팅 및 워드프레스 설치"
description: "Ubuntu 20.04.1 LTS에 워드프레스 설치를 위한 DB 셋팅 및 워드프레스 설치"
date:   2020-09-23 09:00:00 +0900
categories: Wordpress
---
>Ubuntu 20.04.1 LTS에 워드프레스 설치를 위해  
>DB 셋팅 및 워드프레스 설치를 해보도록 하겠습니다.

## 워드프레스용 DB 및 유저 생성

워드프레스 설치시에는 DB 계정정보가 필요하기 때문에  
기본 root 계정 이외에 새로 추가 해주도록 합니다.

DB 접속
```
sudo mysql -u root -p
```

DB생성
```
create database wordpress;
```

계정 생성
```
create user 'wordpress'@'%' identified by 'password';
```

생성한 DB에 권한 부여 후 리로드
```
grant all privileges on wordpress.* to wordpress@'%';
flush privileges;
```

![DB 셋팅 및 워드프레스 설치-1](/assets/images/2020-10-23/db-setting-and-wordpress-installation-1.png)

## 워드프레스 최신버전 다운로드 및 서버 설정
현재 작성중인 시점의 최신 버전은 5.5.1입니다.  
[공식사이트](https://wordpress.org/download/){: target="_blank"}에서 우클릭 후 링크주소를 복사합니다.
![DB 셋팅 및 워드프레스 설치-2](/assets/images/2020-10-23/db-setting-and-wordpress-installation-2.png)

기본 웹루트 경로인 `/var/www/html` 경로에 설치하기 위해  
root 권한으로 변경합니다.
```
sudo -i
```
![DB 셋팅 및 워드프레스 설치-3](/assets/images/2020-10-23/db-setting-and-wordpress-installation-3.png)

wget 명령어를 사용해서 다운로드합니다.
```
wget https://wordpress.org/latest.tar.gz
```
![DB 셋팅 및 워드프레스 설치-4](/assets/images/2020-10-23/db-setting-and-wordpress-installation-4.png)


압축해제
```
gzip -d latest.tar.gz && tar xvf latest.tar
```
![DB 셋팅 및 워드프레스 설치-5](/assets/images/2020-10-23/db-setting-and-wordpress-installation-5.png)

`wordpress`란 디렉터리에 파일이 모두 압축해제 되어있습니다.
```
ll wordpress
```
![DB 셋팅 및 워드프레스 설치-6](/assets/images/2020-10-23/db-setting-and-wordpress-installation-6.png)

이걸 웹 루트 디렉터리로 이동시켜줍니다.
```
rm -rf /var/www/html/*
cp -r /root/wordpress/* /var/www/html/
```
![DB 셋팅 및 워드프레스 설치-7](/assets/images/2020-10-23/db-setting-and-wordpress-installation-7.png)

## 웹 접속 후 설정
웹에서 IP로 접속해보면 아래처럼 나옵니다.  
Let’s go!를 클릭합니다.
![DB 셋팅 및 워드프레스 설치-8](/assets/images/2020-10-23/db-setting-and-wordpress-installation-8.png)

 DB정보 입력 후 Submit
![DB 셋팅 및 워드프레스 설치-9](/assets/images/2020-10-23/db-setting-and-wordpress-installation-9.png)

`wp–config.php` 파일에 해당 내용을 붙여넣기하라고합니다.
![DB 셋팅 및 워드프레스 설치-10](/assets/images/2020-10-23/db-setting-and-wordpress-installation-10.png)


`wp-config.php`파일을 새로 만들어서 복사 붙여넣기
```
vi /var/www/html/wp-config.php
```


![DB 셋팅 및 워드프레스 설치-11](/assets/images/2020-10-23/db-setting-and-wordpress-installation-11.png)
![DB 셋팅 및 워드프레스 설치-12](/assets/images/2020-10-23/db-setting-and-wordpress-installation-12.png)

`wp-config.php`파일 생성 후, Run the installation 클릭 합니다.  
사이트 설정을 하고 마무리합니다.
![DB 셋팅 및 워드프레스 설치-13](/assets/images/2020-10-23/db-setting-and-wordpress-installation-13.png)

설치완료
![DB 셋팅 및 워드프레스 설치-14](/assets/images/2020-10-23/db-setting-and-wordpress-installation-14.png)

웹에서 IP로 접속 및 확인
![DB 셋팅 및 워드프레스 설치-15](/assets/images/2020-10-23/db-setting-and-wordpress-installation-15.png)

이상으로 Wordpress 설치하기 4부 - DB 셋팅 및 워드프레스 설치였습니다.
