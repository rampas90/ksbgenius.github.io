---
layout: post
title:  "[도메인] 후이즈 A레코드 설정하기"
description: "후이즈에서 도메인의 A레코드 설정하는 방법"
date:   2020-09-29 09:00:00 +0900
categories: Domain
---

도메인 서비스를 제공하는 대표업체인 후이즈에서  
도메인의 A레코드를 설정하는 방법을 알아보겠습니다.

## A레코드 설정이란?

사용자의 도메인 또는 서브도메인(하위도메인)에  
IP주소를 지정하는 것을 말합니다.

예를들어 sample.co.kr이라는 도메인을 소유하고 있다면

- www.sample.co.kr
- blog.sample.co.kr
- test.sample.co.kr

도메인 앞에 서브도메인명을 추가로 설정할 수 있고,  
여기에 IP주소를 지정하는 것을 `A레코드를 설정`이라고 합니다.

## 후이즈 A레코드설정(서브도메인 설정)

1. 도메인 > 내 도메인 관리 클릭
![후이즈 A레코드 설정하기-1](/assets/images/2020-09-29/setting-a-record-1.png)

2. 변경할 도메인 선택 후, 네임서버 변경 클릭  
![후이즈 A레코드 설정하기-2](/assets/images/2020-09-29/setting-a-record-2.png)

3. 네임서버 고급설정 클릭  
![후이즈 A레코드 설정하기-3](/assets/images/2020-09-29/setting-a-record-3.png)

4. 네임서버 고급설정 바로가기 클릭  
![후이즈 A레코드 설정하기-4](/assets/images/2020-09-29/setting-a-record-4.png)

5. 변경할 도메인 선택 후, 네임서버 고급설정 클릭  
![후이즈 A레코드 설정하기-5](/assets/images/2020-09-29/setting-a-record-5.png)

6. A레코드 관리(네임서버 호스팅) 관리화면에  
도메인 및 IP 정보 입력 후  
다음단계로 클릭  
![후이즈 A레코드 설정하기-6](/assets/images/2020-09-29/setting-a-record-6.png)

7. 서비스 신청내역 확인 후 신청하기 클릭  
![후이즈 A레코드 설정하기-7](/assets/images/2020-09-29/setting-a-record-7.png)

8. 설정완료  
![후이즈 A레코드 설정하기-8](/assets/images/2020-09-29/setting-a-record-8.png)

이상으로 후이즈에서 도메인의 A레코드 설정하는 방법이었습니다.
