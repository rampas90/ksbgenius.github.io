---
layout: post
title:  "[Nuxt] 소개 및 설치하기"
description: "Nuxt 소개 및 NodeJS 환경에서 설치하기"
date:   2020-12-20 09:00:00 +0900
categories: Nuxt
---
## Nuxt란?

Nuxt는 Vue 개발을 보다 강력하고 사용하기 쉽게 만들어 주는 프레임워크입니다.

&nbsp;

## 특징

1. 자동 변환 및 번들링 (웹팩 및 바벨 포함)
2. 코드 Hot reload
3. SSR, SPA, 정적 생성 선택 가능
4. 정적 파일 제공 (./static/은 /에 매핑됩니다)
5. nuxt.config.js 파일로 구성 가능
6. 사용자 정의 레이아웃 (layouts/ 디렉토리 )
7. 미들웨어 제공
8. 모든 페이지에 대한 코드 분할
9. 중요한 CSS 만로드 (페이지 수준)
10. 전 처리기 지원 : SASS, LESS, Stylus 등
11. \<head\> 요소 관리 (\<title\>, \<meta\>, 기타)
12. ES2015+ 지원

&nbsp;

## 설치

### 전제조건

1. Node - 최소 v10.13 최신 LTS 버전
2. 텍스트 편집기 - VS Code(Vuter 확장) 또는 WebStorm
3. 터미널 - VS Code의 통합 터미널 또는 WebStorm 터미널

&nbsp;

### create-nuxt-app 사용

빠르게 시작하려면 `create-nuxt-app`을 사용할 수 있습니다.

npx가 설치되어 있어야 합니다.(npx는 NPM 5.2.0부터 기본적으로 제공)

```bash
npx create-nuxt-app <project-name>
```

설치 시  
이름, Nuxt 옵션, UI 프레임 워크, TypeScript, linter, 테스트 프레임 워크 등을 선택하는데  
필요에 맞게 선택 후 설치하면 됩니다.

모든 옵션에 대한 자세한 내용은 [Create Nuxt app](https://github.com/nuxt/create-nuxt-app/blob/master/README.md){: target="_blank"}을 참고하면 됩니다.

```bash
create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in test

# 프로젝트명 입력
? Project name: (test) 

# 프로그래밍 언어 선택
? Programming language: (Use arrow keys)
> JavaScript 
  TypeScript 

# 패키지 매니저 선택  
? Package manager: (Use arrow keys)
> Yarn 
  Npm 
  
# UI 프레임워크 선택
? UI framework: (Use arrow keys)
> None 
  Ant Design Vue 
  Bootstrap Vue 
  Buefy 
  Bulma 
  Chakra UI 
  Element 
  Framevuerk 
  iView 
  Tachyons 
  Tailwind CSS 
  Vuesax 
  Vuetify.js 
  
# Nuxt 모듈 선택
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>◯ Axios
 ◯ Progressive Web App (PWA)
 ◯ Content
 
# Linting 도구 선택
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>◯ ESLint
 ◯ Prettier
 ◯ Lint staged files
 ◯ StyleLint
 ◯ Commitlint
 
# 테스트 프레임워크 선택
? Testing framework: (Use arrow keys)
> None 
  Jest 
  AVA 
  WebdriverIO 
  
# 렌더링 모드 선택 (SSR / SPA)
? Rendering mode: (Use arrow keys)
> Universal (SSR / SSG) 
  Single Page App 
  
# 배포 대상 선택 (서버 호스팅 / 정적 호스팅)
? Deployment target: (Use arrow keys)
> Server (Node.js hosting) 
  Static (Static/JAMStack hosting) 
  
# 개발 도구 선택
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>◯ jsconfig.json (Recommended for VS Code if you're not using typescript)
 ◯ Semantic Pull Requests
 ◯ Dependabot (For auto-updating dependencies, GitHub only)
 
# GitHub 사용자명 입력
? What is your GitHub username? (username) 
  
# 버전 관리 시스템 선택
? Version control system: (Use arrow keys)
> Git 
  None
```

개발용 실행

```bash
cd <project-name>
npm run dev
```

빌드 및 배포용 실행

```bash
cd <project-name>
npm run build
npm run start
```

브라우저에서 `localhost:3000` 접속이 된다면  
설치가 완료 된 것입니다.

이상으로 Nuxt 소개 및 NodeJS 환경에서 설치하기였습니다.
