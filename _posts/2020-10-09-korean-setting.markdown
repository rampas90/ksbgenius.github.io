---
layout: post
title:  "[Wordpress] 한글 설정하기"
description: "워드프레스에서 한글 설정하기"
date:   2020-10-09 09:00:00 +0900
categories: Wordpress
---

>워드프레스에서 한글을 설정해 보겠습니다.

워드프레스를 최초 설치하고 나서  
사이트에 접속해보면 한글이 아닌  
영문으로 되어 있는 경우가 있습니다.
![한글 설정하기-1](/assets/images/2020-10-09/korean-setting-1.png)

언어 설정만 변경해주면 쉽게 한글로 바꿀 수 있습니다.

좌측 하단에 있는 Setting 메뉴 클릭 후  
Site Language를 한국어  
Timezone을 UTC+9로 변경 후  
Save Changes만 해주면 됩니다.
![한글 설정하기-2](/assets/images/2020-10-09/korean-setting-2.png)

그런데, Site Language에 한국어 목록이 없는 경우가 있습니다.

이런 경우 [워드프레스 한글 사이트](https://ko.wordpress.org/download/releases/){: target="_blank"}에서  
최신버전을 다운받아  
언어 관련 폴더만 서버에 업로드 시켜주면 됩니다.


다운로드 받은 압축파일을 해제해서  
wp-content폴더로 이동하면  
languages폴더가 보입니다.  
```
wordpress > wp-content > languages
```

이 `languages` 폴더를
워드프레스가 설치된 서버의
`wp-content` 폴더에 그대로 업로드만 해주면 됩니다.
![한글 설정하기-3](/assets/images/2020-10-09/korean-setting-3.png)

다시 워드프레스 사이트 관리자 페이지를 보면
Site Language에 한국어 목록이 생성됩니다.

Site Language를 한국어로  
Timezone을 UTC+9로 변경 후  
Save Changes만 해주면 한글 설정이 완료 됩니다.
![한글 설정하기-4](/assets/images/2020-10-09/korean-setting-4.png)

이상으로 워드프레스에서 한글 설정하기 였습니다.