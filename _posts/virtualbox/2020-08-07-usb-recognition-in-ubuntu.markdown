---
layout: post
title:  "[VirtualBox] 우분투에서 USB 인식"
description: "우분투에서 VirtualBox 설치 후 USB인식이 되지 않는 현상 해결방법"
date:   2020-08-07 09:00:00 +0900
categories: VirtualBox
---
결론부터 말하자면 `권한문제`입니다.

## 설치환경

호스트 - 우분투 20.04.1 LTS  
게스트 - Windows 10 Pro

## VirtualBox 환경

설치 파일 - [VirtualBox 6.1.14 platform packages](https://www.virtualbox.org/wiki/Downloads){: target="_blank"}  
확장팩 - [VirtualBox 6.1.14 Oracle VM VirtualBox Extension Pack](https://www.virtualbox.org/wiki/Downloads){: target="_blank"}

## 호스트 PC 우분투 권한 설정

`우분투 소프트웨어`에서 `users and groups` 어플리케이션 설치

![우분투에서 USB 인식-1](/assets/images/2020-08-07/usb-recognition-in-ubuntu-1.png)

`사용자와 그룹`이란 이름으로 설치된 프로그램 실행

그룹관리 -> vboxusers 선택 -> 속성 버튼 클릭 -> 그룹구성원에 추가할 사용자 체크

![우분투에서 USB 인식-2](/assets/images/2020-08-07/usb-recognition-in-ubuntu-2.png)

![우분투에서 USB 인식-3](/assets/images/2020-08-07/usb-recognition-in-ubuntu-3.png)

![우분투에서 USB 인식-4](/assets/images/2020-08-07/usb-recognition-in-ubuntu-4.png)

로그아웃 또는 재부팅

VirtualBox에서 USB2.0 - 3.0 번갈아 가면서 테스팅

이상으로 우분투에 VirtualBox 설치 후 USB인식 방법이었습니다.
