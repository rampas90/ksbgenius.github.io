---
layout: post
title:  "[Composer] 설치하기"
description: "데비안 계열(Ubuntu, Mint 등)에서 Composer 설치하기"
date:   2021-01-13 09:00:00 +0900
categories: Composer
---
## 소개

컴포저는 PHP의 의존성 관리도구입니다.

필요한 확장 기능을 쉽게 설치해주는 기능도 제공하지만,  
프로젝트에서 필요한 확장 기능을 통합해서 관리해주는 도구입니다.

## 다운로드

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

```

## 전역등록
```bash
mv composer.phar /usr/local/bin/composer
```

## 설치확인

```bash
composer
```

![Composer 설치하기-1](/assets/images/2021-01-13/composer-install-1.png)

&nbsp;

이상으로 데비안 계열(Ubuntu, Mint 등)에서 Composer 설치하기였습니다.
