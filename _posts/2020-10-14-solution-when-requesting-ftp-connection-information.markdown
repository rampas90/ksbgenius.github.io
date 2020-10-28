---
layout: post
title:  "[Wordpress] FTP 연결 정보 요청 시 해결 방법"
description: "워드프레스에서 FTP 연결 정보 요청 시 해결 방법"
date:   2020-10-14 09:00:00 +0900
categories: Wordpress
---

워드프레스 테마나 플러그인을 설치, 업데이트, 삭제 할 때  
FTP 연결 정보를 요청하는 경우가 있습니다.

아래와 같은 메세지가 뜹니다.

![FTP 연결 정보 요청 시 해결 방법-1](/assets/images/2020-10-14/solution-when-requesting-ftp-connection-information-1.png)

요청 작업을 수행하려면 웹서버에 접속해야하므로  
FTP 증명서를 입력하라고 나옵니다.

이러한 메세지가 나오는 원인에 대해서 명확히 밝혀진게 없습니다.

저의 경우는 플러그인 설치 중에 위와 같은 현상이 발생하였습니다.

이런 문제를 해결하기 위한 방안을 정리해 봅니다.

## FTP 인증 생략 코드 추가

이 방법은 근본적인 해결은 아니지만  
워드프레스 테마나 플러그인을 설치, 업데이트, 삭제 시 등  
연결 정보를 요청하는 경우 만을 해결한다면 좋은 대안입니다.

워드프레스가 설치된 경로에서 설정파일을 수정합니다.

여기서는 /home/drc/www 경로 밑에  
워드프레스가 설치되어 있습니다.

```bash
vi /home/drc/www/wp-config.php
```

![FTP 연결 정보 요청 시 해결 방법-2](/assets/images/2020-10-14/solution-when-requesting-ftp-connection-information-2.png)

제일 하단에 아래 우회 코드를 넣고 `:wq` 저장합니다.

```php
/* FTP 연결정보 요구 우회 */
define('FS_METHOD', 'direct');
```

![FTP 연결 정보 요청 시 해결 방법-3](/assets/images/2020-10-14/solution-when-requesting-ftp-connection-information-3.png)

새로고침 후 다시 요청해보면  
더이상 FTP 연결정보를 요청하지 않습니다.

![FTP 연결 정보 요청 시 해결 방법-4](/assets/images/2020-10-14/solution-when-requesting-ftp-connection-information-4.png)

그러나 이 경우도 워드프레스 폴더에 충분한 `권한`이 부여되지 않았다면  
FTP 인증 요구는 하지 않겠지만  
디렉토리를 생성할 수 없다는 메세지가 나오면서  
테마나 플러그인 설치 등이 제대로 되지 않습니다.

이상으로 워드프레스에서 FTP 연결 정보 요청 시 해결 방법이었습니다.
