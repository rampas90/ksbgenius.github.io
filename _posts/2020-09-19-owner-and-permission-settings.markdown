---
layout: post
title:  "[Wordpress] 소유자 및 권한 설정"
description: "워드프레스에서 소유자 및 권한 설정 방법"
date:   2020-09-19 09:00:00 +0900
categories: Wordpress
---
## 증상

워드프레스를 수동으로 설치 후,  
버전 업데이트, 플러그인 및 테마 설치와 같은 작업을 할 때  
`권한이 없다`거나,  
`디렉토리를 생성할수 없습니다`와 같은 메시지가 보여질 때가 있습니다.

![소유자 및 권한 설정-1](/assets/images/2020-09-19/owner-and-permission-settings-1.png)

## 원인

`Nginx`가 `쓰기 권한`이 없기 때문입니다.

버전 업데이트, 플러그인 및 테마 설치 등은  
워드프레스가 설치된 디렉토리의 `쓰기 권한`이 필요한 작업입니다.

워드프레스 디렉토리를 생성한 사용자와  
워드프레스를 돌리는 사용자(Nginx를 실행한 사용자)가 다르기 때문에

이 상태에서는 업데이트 파일이나 플러그인, 테마 등을  
내려받는게(쓰기 권한) 불가능합니다.

이게 가능한 계정 정보를 넣음으로써  
파일을 다운로드하게 해줘야 합니다.

## 워드프레스 설치 경로

여기서는 홈 디렉토리  
`/home/test/www` 경로에 워드프레스를 설치하였습니다.

## 워드프레스 소유자, 그룹 확인

```bash
ll /home/test/www
```

`소유자`는 `test`, `그룹`은 `test`에 속해있습니다.

![소유자 및 권한 설정-2](/assets/images/2020-09-19/owner-and-permission-settings-2.png)

## Nginx 프로세스 확인

Nginx를 누가 실행했는지 확인합니다.

```bash
ps -ef | grep nginx
```

`www-data`라는 사용자입니다.  
이 사용자는 `www-data` 그룹에 속해 있습니다.

사용자가 다르고 디렉토리 소유권이 다른 것입니다.

![소유자 및 권한 설정-3](/assets/images/2020-09-19/owner-and-permission-settings-3.png)

다시 처음으로 돌아가서,

워드프레스를 업데이트 하거나  
플러그인 및 테마를 설치하는 것은  
서버의 `www-data`라는 사용자가 실행한 `Nginx 웹서버`에게  
`워드프레스가 설치된 디렉토리` 위치에 `파일을 저장`해야 한다는 것을 말합니다.

그런데 이 `워드프레스가 설치된 디렉토리`의 `소유자`가 `test`라는 사용자입니다.

그래서 워드프레스는 `파일 저장`이 가능한 `권한`을 요구하는 것입니다.

## 해결방법

원인이 디렉토리 소유자와 Nginx 실행자가 다름으로 인한  
`권한 문제`라는 것을 생각해보면  

Nginx 실행자를 바꿀 수도 있고,  
워드프레스 설치 디렉토리 소유자를 바꿀 수도 있습니다.

여기서는 `워드프레스 설치 디렉토리 소유자를 변경`하였습니다.

### 워드프레스 설치 디렉토리 소유자 변경

소유자와 그룹을 `www-data`으로 변경합니다.

```bash
sudo chown -R www-data:www-data /home/test/www
```

![소유자 및 권한 설정-4](/assets/images/2020-09-19/owner-and-permission-settings-4.png)

브라우저에서 다시 접속해 봅시다.

워드프레스 디렉토리 소유자와 Nginx 웹서버 사용자가 같기 때문에  
쓰기 권한이 생겼습니다.
![소유자 및 권한 설정-5](/assets/images/2020-09-19/owner-and-permission-settings-5.png)

### 파일 접근 문제 해결방법

이렇게 하면 반대로 `test` 사용자는  
`www-data` 소유인 `워드프레스 디렉토리`에  
접근하고 파일 쓰기가 안되게 됩니다.

설상가상으로 `www-data` 사용자는 Nginx 사용자로  
로그인이 안되는 계정입니다.

여기서는

1. www-data 그룹에 test 사용자를 추가

2. 워드프레스의 권한 설정을 그룹까지 가능하도록 수정

이렇게 되면 test 사용자는 www-data 그룹의 구성원이기도 하기 때문에  
워드프레스 설치 디렉토리에 접근하고 쓰는 것에 아무런 문제가 없게 됩니다.

#### 사용자 그룹 확인

test 사용자의 소속 그룹 보기

```bash
id test
```

![소유자 및 권한 설정-6](/assets/images/2020-09-19/owner-and-permission-settings-6.png)

www-data 사용자의 소속 그룹 보기

```bash
id www-data
```

![소유자 및 권한 설정-7](/assets/images/2020-09-19/owner-and-permission-settings-7.png)

그룹 목록 보기

```bash
groups
```

![소유자 및 권한 설정-8](/assets/images/2020-09-19/owner-and-permission-settings-8.png)

모든 사용자 보기

```bash
compgen -u
```

![소유자 및 권한 설정-9](/assets/images/2020-09-19/owner-and-permission-settings-9.png)

모든 그룹 보기

```bash
compgen -g
```

![소유자 및 권한 설정-10](/assets/images/2020-09-19/owner-and-permission-settings-10.png)

#### www-data 그룹에 test 사용자 추가

```bash
sudo usermod -a -G www-data test
```

![소유자 및 권한 설정-11](/assets/images/2020-09-19/owner-and-permission-settings-11.png)

test 사용자의 www-data 그룹 추가 확인

```bash
id test
```

![소유자 및 권한 설정-12](/assets/images/2020-09-19/owner-and-permission-settings-12.png)

#### 워드프레스 권한 설정

워드프레스 사용자 계정이 리눅스 관리자 계정과 다르다면  
폴더 권한은 775, 파일 권한은 664 로 설정합니다.

#### 워드프레스 하위 폴더 권한 일괄 설정

775로 변경합니다.  
(기본값은 755)

```bash
sudo find ./ -type d -exec chmod 0775 {} \;
```

![소유자 및 권한 설정-13](/assets/images/2020-09-19/owner-and-permission-settings-13.png)

#### 워드프레스 하위 파일 권한 일괄 설정

664로 변경합니다.  
(기본값은 644)

```bash
sudo find ./ -type f -exec chmod 0664 {} \;
```

![소유자 및 권한 설정-14](/assets/images/2020-09-19/owner-and-permission-settings-14.png)

설정 후,  
FTP로 파일 업로드시 권한 문제 없이  
정상적으로 업로드 되는 것을 확인 할 수 있습니다.

![소유자 및 권한 설정-15](/assets/images/2020-09-19/owner-and-permission-settings-15.png)

이상으로 워드프레스에서 소유자 및 권한 설정 방법이었습니다.
