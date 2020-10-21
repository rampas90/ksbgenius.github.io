---
layout: post
title:  "[VirtualBox] 우분투에서 USB 인식"
description: "우분투에서 VirtualBox 설치 후 USB인식이 되지 않는 현상 해결방법"
date:   2020-10-20 12:27:00 +0900
categories: VirtualBox
---

## 우분투에서 VirtualBox 설치 후 USB인식이 되지 않는 현상 해결방법
결론부터 말하자면 `권한문제`입니다.

---

### 설치환경
호스트 - 우분투 20.04.1 LTS  
게스트 - Windows 10 Pro

---

### VirtualBox 환경
설치 파일 - [VirtualBox 6.1.14 platform packages][버추얼박스 다운로드 링크]{: target="_blank"}  
확장팩 - [VirtualBox 6.1.14 Oracle VM VirtualBox Extension Pack][버추얼박스 다운로드 링크]{: target="_blank"}

---

### 호스트 PC 우분투 권한 설정
1. `우분투 소프트웨어`에서 `users and groups` 어플리케이션 설치
![우분투 소프트웨어 users and groups 설치](/assets/images/usb-recognition-in-ubuntu-1.png)
2. `사용자와 그룹`이란 이름으로 설치된 프로그램 실행
3. 그룹관리 -> vboxusers 선택 -> 속성 버튼 클릭 -> 그룹구성원에 추가할 사용자 체크
![그룹관리](/assets/images/usb-recognition-in-ubuntu-2.png)
![vboxusers 선택](/assets/images/usb-recognition-in-ubuntu-3.png)
![그룹구성원 추가](/assets/images/usb-recognition-in-ubuntu-4.png)
4. 로그아웃 또는 재부팅
5. VirtualBox에서 USB2.0 - 3.0 번갈아 가면서 테스팅

---

이상으로 우분투에 VirtualBox 설치 후 USB인식 방법이었습니다.

[버추얼박스 다운로드 링크]: https://www.virtualbox.org/wiki/Downloads
