---
layout: post
title:  "[Svelte] Svelte 설치"
description: "Ubuntu 20.04에 Svelte 설치하기"
date:   2020-12-06 09:00:00 +0900
categories: Svelte
---
이 포스트는 [Svelte](https://svelte.dev/){: target="_blank"} 공식문서를 참고했습니다.

## REPL을 이용해 설치

[REPL(Real Eval Print Loop)](https://ko.wikipedia.org/wiki/REPL){: target="_blank"}이란  
사용자의 입력을 받아 실행하고 결과를 사용자에게 보여주는 프로그래밍 환경을 말합니다.

먼저 [공식사이트](https://svelte.dev/repl/hello-world?version=3.31.0){: target="_blank"}에서  
`svelte-app.zip` 파일을 다운로드합니다.

![Svelte 설치-1](/assets/images/2020-12-06/1.png)

압축을 해제한 뒤  
터미널에서 해당 디렉토리로 이동합니다.

```bash
cd /path/to/svelte-app
```

패키지 파일을 설치합니다.

```bash
npm install
```

설치가 완료되면  
아래의 명령어를 통해 개발모드를 실행합니다.

```bash
npm run dev

# 포트 변경 및 아이피 주소 접속
HOST=0.0.0.0 PORT=4000 npm run dev
```

localhost:5000에 접속 및 확인

![Svelte 설치-2](/assets/images/2020-12-06/2.png)

## degit을 이용해 설치

git clone을 하면 git history까지 다 내려 받고 git remote가 연결되고 git branch가 잡힙니다.

degit을 쓰면 단순히 repository 폴더만 가져 올 수 있습니다.

터미널에 다음과 같이 입력하여 새 svelte 프로젝트 디렉토리를 생성합니다.

```bash
npx degit sveltejs/template my-svelte-project
```

마찬가지로 해당 디렉토리로 이동해 패키지 파일을 설치한 뒤 개발모드를 실행합니다.

```bash
cd my-svelte-project
npm install
npm run dev

# 포트 변경 및 아이피 주소 접속
HOST=0.0.0.0 PORT=4000 npm run dev
```

이상으로 Ubuntu 20.04에 Svelte 설치하기였습니다.
