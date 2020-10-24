---
layout: post
title:  "[Wordpress] MariaDB 최적화 하기 — InnoDB 설정"
description: "워드프레스에서 MariaDB 최적화를 위한 InnoDB 설정하기"
date:   2020-10-06 09:00:00 +0900
categories: Wordpress
---

>워드프레스에서 MariaDB 최적화를 위해 InnoDB를 설정해 보겠습니다.

작업은 root 계정으로 진행합니다.
```
sudo -i
```
![MariaDB 최적화 하기 — InnoDB 설정-1](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-1.png)

## MariaDB 설정파일 수정
```
vi /etc/mysql/mariadb.conf.d/50-server.cnf
```
![MariaDB 최적화 하기 — InnoDB 설정-2](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-2.png)

`[mysqld]` `Basic Settings`에 아래 두줄을 추가시켜줍니다.
```
skip-host-cache
skip-name-resolve
```
mysql에서 접속시 IP에 대한 resolving을 진행하는데  
대부분의 IP의 경우 등록되지 않아  
쓸데없는 리소스를 사용하기 때문에  
skip해줍니다.
![MariaDB 최적화 하기 — InnoDB 설정-3](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-3.png)

그다음 내리다보면 `Fine Tuning`이라고 된 부분이 보일것입니다.  
여기서는 `key buffer size`, `max_connections`만 올려주도록 하겠습니다.  

max connections이 너무 낮으면 동시접속자가 많거나  
한번에 많이 쿼리하면 에러가 나기 때문에  
최소 1000이상은 줘야할거같습니다.
![MariaDB 최적화 하기 — InnoDB 설정-4](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-4.png)

그리고 `[mysqld]` 아래에 있는 `InnoDB`부분을 찾아갑니다.

이쪽은 `innodb_buffer_pool_size`만 수정해줍니다.  
값은 메인 메모리에 50%정도가 적당합니다.

다른 서비스들을 많이 올려서 메모리가 부족하면  
Swap 까지 끌어 쓸수도 있기때문에 그거 보다는 조금 낮춰서..
![MariaDB 최적화 하기 — InnoDB 설정-5](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-5.png)

저같은 경우 wordpress 전용 웹서버기 때문에 총 2G중 1G를 할당해줬다.

옵션을 모두 변경 완료했으면 `:wq` 저장 후  
MaraiDB 재시작
```
systemctl restart mariadb.service
```

![MariaDB 최적화 하기 — InnoDB 설정-6](/assets/images/2020-10-06/optimizing-mariadb-innodb-configuration-6.png)

이상으로 MariaDB 최적화 하기 — InnoDB 설정이었습니다.