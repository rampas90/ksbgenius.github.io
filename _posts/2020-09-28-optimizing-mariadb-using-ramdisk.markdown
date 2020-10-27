---
layout: post
title:  "[Wordpress] MariaDB 최적화 하기 — 램디스크 설정"
description: "워드프레스에서 MariaDB 최적화를 위한 램디스크 설정하기"
date:   2020-09-28 09:00:00 +0900
categories: Wordpress
---
램디스크란 간단하게 말해서 메모리를 디스크처럼 사용하는 것입니다.

메모리가 디스크보다 I/O 속도가 월등히 빠르기 때문에  
램디스크를 설정해주게 되면  
많은 수의 쿼리를 빠르게 처리 할 수 있기 때문에  
큰 성능 향상을 도모할 수 있습니다.

여기서는 리눅스에서 기본적으로 지원하는 램디스크를 사용해서  
MariaDB용 폴더를 따로 생성해주도록 하겠습니다.

## 진행 환경

Ubuntu 20.04.1 LTS Server

## 설정 전 확인

DB접속

```bash
sudo mysql -u root -p
```

![MariaDB 최적화 하기 — 램디스크 설정-1](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-1.png)

확인

```bash
SHOW VARIABLES LIKE 'tmpdir';
```

현재 `tmpdir`이 `/tmp`로 설정되어 있습니다.  
이 값을 `/dev/shm`으로 변경 할 예정입니다.

![MariaDB 최적화 하기 — 램디스크 설정-2](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-2.png)

## 램디스크 확인

```bash
df -h
```

`tmpfs`가 램디스크입니다.
![MariaDB 최적화 하기 — 램디스크 설정-3](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-3.png)

여기서는 `/dev/shm` 폴더를 사용하도록 하겠습니다.

## /dev/shm 권한 설정

```bash
sudo chmod 1777 /dev/shm
```

![MariaDB 최적화 하기 — 램디스크 설정-4](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-4.png)

## MariaDB 설정파일 변경(my.cnf)

```bash
sudo vi /etc/mysql/mariadb.conf.d/50-server.cnf
```

![MariaDB 최적화 하기 — 램디스크 설정-5](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-5.png)

`[mysqld]`아래 `tmpdir` 경로를  
방금 설정한 `/dev/shm`로 변경 후  
`:wq` 로 저장 합니다.

![MariaDB 최적화 하기 — 램디스크 설정-6](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-6.png)

MariaDB 재시작

```bash
sudo systemctl restart mariadb.service
```

![MariaDB 최적화 하기 — 램디스크 설정-7](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-7.png)

## 동작 확인

DB접속

```bash
sudo mysql -u root -p
```

![MariaDB 최적화 하기 — 램디스크 설정-8](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-8.png)

확인

```bash
SHOW VARIABLES LIKE 'tmpdir';
```

`tmpdir`이 `/tmp`에서 `/dev/shm`으로 변경된 것을 확인할 수 있습니다.

![MariaDB 최적화 하기 — 램디스크 설정-9](/assets/images/2020-09-28/optimizing-mariadb-using-ramdisk-9.png)

이상으로 MariaDB 최적화 하기 — 램디스크 설정이었습니다.
