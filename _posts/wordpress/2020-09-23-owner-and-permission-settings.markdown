---
layout: post
title:  "[Wordpress] 테마 만들기 - 기본 구조"
description: "워드프레스에서 테마 기본 구조 만드는 방법"
date:   2020-09-23 09:00:00 +0900
categories: Wordpress
---
워드프레스 테마를 직접 만들어 사용 하기 위한  
필수 기본 작업에 어떤 것들이 있는지 알아 보겠습니다.

## 테마 인식 조건

* `wp-content > themes` 하위 폴더에 테마에 필요한 파일 존재

* 테마에 필요한 필수 파일 저장
  * index.php  
  * style.css  
  * screenshot.png  

* style.css 파일에 테마에 대한 정보 기록

## index.php

테마가 어떤 내용을 보여줄 지에 대한  
모든 정보를 담는 파일입니다.

이 파일은 내용이 아무것도 없어도 상관 없지만,  
파일은 반드시 존재해야 합니다.

## style.css

워드프레스 블로그가 어떤 레이아웃과 디자인으로  
방문자에게 내용을 전달할 것인가를 결정하는 CSS 파일입니다.

전체적인 디자인을 담당하는 부분입니다.

이 파일도 아무 내용이 없어도 상관은 없지만,  
테마로 인식하기 위해서는  
테마에 대한 정보를 담은  
몇 가지 필수 내용이 포함되어 있어야 합니다.

`style.css`에 들어갈 필수 내용입니다.

```css
/*
Theme Name: Twenty Thirteen
Theme URI: http://wordpress.org/themes/twentythirteen
Author: the WordPress team
Author URI: http://wordpress.org/
Description: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready
Text Domain: twentythirteen

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/
```

위 예제는 [워드프레스 테마 개발 – StyleSheet](https://codex.wordpress.org/Theme_Development#Theme_Stylesheet){: target="_blank"} 에 나와 있는 예시입니다.

CSS 파일 최상단에 주석으로 테마에 대한 정보를 담아 두어야 합니다.

위 예시는 뭔가 굉장히 많이 적혀 있지만,  
그냥 간단하게 각 항목에 대해 작성해도 됩니다.

몇가지 중요한 항목에 대해 알아봅시다.

* Theme Name: 워드프레스 대시보드에서 보이는 테마 이름 (필수)
* Theme URI: wordpress.org 에 올라갈 테마 주소 (선택)
* Author, Author URI: 테마 제작자의 이름과 주소 (필수)
* Version: 테마 개발 버전 (선택)
* Description: 테마에 대한 간단한 설명 (필수)
* Text Domain: 다국어 개발을 위해 필요한 텍스트 도메인 (선택)

## screenshot.png

워드프레스 대시보드의 테마 설정 화면으로 이동해보면  
각 테마들의 스크린샷을 보여주는 역할을 하는 파일입니다.

어떤 테마는 실제로 테마가 어떻게 보이는지를 보여주기도 하고,  
어떤 테마들은 대표 이미지라고 할만한 이미지를 넣어두기도 합니다.

### screenshot.png 파일의 기본 요소

이 파일은 1200×900 크기의 png 파일로 만들어져야 합니다.

jpg 혹은 jpeg 파일로 사용 가능하다고 나와 있지만  
굳이 추천 하지는 않는다고 하네요.

[워드프레스 테마 개발 – Screenshot](https://codex.wordpress.org/Theme_Development#Screenshot){: target="_blank"} 항목을 참고 하세요.

이상으로 워드프레스에서 테마 기본 구조 만드는 방법이었습니다.
