---
layout: post
title:  "[Wordpress] MariaDB 최적화 하기 — InnoDB 설정"
description: "워드프레스에서 MariaDB 최적화를 위한 InnoDB 설정하기"
date:   2020-09-06 09:00:00 +0900
categories: Wordpress
---
## MariaDB 설정파일 수정

### 설정파일 열기

```bash
sudo vi /etc/mysql/mariadb.conf.d/50-server.cnf
```

![MariaDB 최적화 하기 — InnoDB 설정-1](/assets/images/2020-09-06/optimizing-mariadb-innodb-configuration-1.png)

### Basic Settings 설정

mysql에서 접속시 IP에 대한 resolving을 진행하는데  
대부분의 IP의 경우 등록되지 않아  
쓸데없는 리소스를 사용하기 때문에 skip해주기 위해  
아래 2줄을 추가해줍니다.

```bash
skip-host-cache
skip-name-resolve
```

![MariaDB 최적화 하기 — InnoDB 설정-2](/assets/images/2020-09-06/optimizing-mariadb-innodb-configuration-2.png)

### Fine Tuning 설정  

max connections이 너무 낮으면 동시접속자가 많거나  
한번에 많이 쿼리하면 에러가 나기 때문에  
최소 1000이상은 줘야할 것 같습니다.

아래 2줄을 수정해줍니다.

```bash
key_buffer_size = 256M
max_connections = 10000
```

![MariaDB 최적화 하기 — InnoDB 설정-3](/assets/images/2020-09-06/optimizing-mariadb-innodb-configuration-3.png)

### InnoDB 설정

`innodb_buffer_pool_size`값은 메인 메모리의 50%정도가 적당합니다.

다른 서비스들을 많이 올려서 메모리가 부족하면  
Swap 까지 끌어 쓸수도 있기 때문에  
그거 보다는 조금 낮춰서 설정합니다.

여기서는 총 메모리 4G중 2G를 할당해줬습니다.

```bash
innodb_buffer_pool_size = 2G
```

![MariaDB 최적화 하기 — InnoDB 설정-4](/assets/images/2020-09-06/optimizing-mariadb-innodb-configuration-4.png)

옵션을 모두 변경 완료했으면 `:wq`로 저장합니다.

### MaraiDB 재시작

```bash
sudo systemctl restart mariadb.service
```

![MariaDB 최적화 하기 — InnoDB 설정-5](/assets/images/2020-09-06/optimizing-mariadb-innodb-configuration-5.png)

이상으로 MariaDB 최적화 하기 — InnoDB 설정이었습니다.
