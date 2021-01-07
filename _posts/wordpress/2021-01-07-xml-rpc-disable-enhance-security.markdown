---
layout: post
title:  "[Wordpress] 보안 강화하기 (XML-RPC 비활성화)"
description: "워드프레스 xmlrpc.php 비활성화를 통한 Brute Force 차단하는 방법"
date:   2021-01-07 09:00:00 +0900
categories: Wordpress
---
워드프레스에서 XML-RPC를 비활성화하여 보안을 강화할 수 있습니다.

XML-RPC란 XML을 사용하여 호출과 HTTP를 전송 메커니즘으로 인코딩하는 원격 프로시저 호출 이라고 합니다.

쉽게 말하자면  
원격으로 워드프레스 블로그에 글을 게시하도록 허용하는 시스템이라고 합니다.

이 기능을 사용하지 않는다면 XML-RPC를 비활성화하는 것이 보안상 좋다고 합니다.

XML-RPC를 통한 Brute Force 공격(DoS 공격)과 같은 해킹 공격이 자주 발생하는 것 같습니다.

## .htaccess 파일에 코드 추가하기

.htaccess 파일에 추가

```bash
# BEGIN protect xmlrpc.php
<files xmlrpc.php>
order allow,deny
deny from all
</files>
# END protect xmlrpc.php
```

특정 IP를 허용하려면 deny from all 아래에 다음 라인을 추가

```bash
allow from 123.123.123.123
```

## xmlrpc_enabled 필터 추가

테마의 `functions.php` 파일에 코드 추가

```php
add_filter('xmlrpc_enabled', false);
```

&nbsp;

이상으로 워드프레스 xmlrpc.php 비활성화를 통한 Brute Force 차단하는 방법이었습니다.
