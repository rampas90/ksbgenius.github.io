---
layout: post
title:  "[Wordpress] 설치하기 3부 - MariaDB 설치"
description: "Ubuntu 20.04.1 LTS에 워드프레스 설치를 위한 MariaDB 설치"
date:   2020-08-19 09:00:00 +0900
categories: Wordpress
---
## MariaDB 설치

[공식사이트](https://downloads.mariadb.org/mariadb/repositories/#distro=Ubuntu&distro_release=focal%E2%80%93ubuntu_focal&mirror=yongbok&version=10.5){: target="_blank"}에서 현재 최신버전과 그에 맞는 Stable 버전을 확인할 수있습니다.

![MariaDB 설치-1](/assets/images/2020-08-19/mariadb-installation-1.png)

여기서 지시하는대로 설치를 진행하겠습니다.

아래 명령어는 레포지토리 등록입니다.

```bash
sudo apt-get install software-properties-common
sudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'
sudo add-apt-repository 'deb [arch=amd64,arm64,ppc64el] https://mirror.yongbok.net/mariadb/repo/10.5/ubuntu focal main'
```

![MariaDB 설치-2](/assets/images/2020-08-19/mariadb-installation-2.png)
![MariaDB 설치-3](/assets/images/2020-08-19/mariadb-installation-3.png)
![MariaDB 설치-4](/assets/images/2020-08-19/mariadb-installation-4.png)

apt 업데이트

```bash
sudo apt update
```

![MariaDB 설치-5](/assets/images/2020-08-19/mariadb-installation-5.png)

mariadb 서버 설치

```bash
sudo apt install -y mariadb-server
```

![MariaDB 설치-6](/assets/images/2020-08-19/mariadb-installation-6.png)

설치확인

```bash
mariadb -V
```

![MariaDB 설치-7](/assets/images/2020-08-19/mariadb-installation-7.png)

상태조회

```bash
systemctl status mariadb.service
```

![MariaDB 설치-8](/assets/images/2020-08-19/mariadb-installation-8.png)

DB 접속 확인  
root 비밀번호를 아직 설정하지 않았기 때문에  
비밀번호는 그냥 엔터를 쳐줍니다.

```bash
sudo mysql -u root -p
```

![MariaDB 설치-9](/assets/images/2020-08-19/mariadb-installation-9.png)

이상으로 Wordpress 설치하기 3부 - MariaDB 설치였습니다.
