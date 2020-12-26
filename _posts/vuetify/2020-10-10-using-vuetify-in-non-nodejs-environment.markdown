---
layout: post
title:  "[Vuetify] Node.js 환경이 아닌 곳에서 사용하기"
description: "Node.js 환경이 아닌 non Node.js 환경에서 Vuetify 사용하는 방법"
date:   2020-10-10 09:00:00 +0900
categories: Vuetify
---

## 문제점

Vuetify 컴포넌트가  
크롬 개발자 콘솔(F12)에서는 정상적으로 렌더링이 되지만,  
소스보기에서는 렌더링이 되지 않고 컴포넌트 그대로 출력이 됩니다.

Vuetify 버튼 컴포넌트 사용 시

```html
<v-btn>Sample Button</v-btn>
```

크롬 개발자 콘솔(F12)에서는 정상적으로 렌더링이 됩니다.

```html
<button type="button" class="v-btn v-btn--contained theme--light v-size--default">
    <span class="v-btn__content">Sample Button</span>
</button>
```

소스보기에서는  
렌더링이 되지 않고  
Vuetify 버튼 컴포넌트가 그대로 출력됩니다.

```html
<v-btn>Sample Button</v-btn>
```

다른 여러가지 Vuetify 컴포넌트도 사용해보면  
결과는 마찬가지입니다.

이렇게 렌더링이 되지 않으면  
검색엔진 최적화(SEO)에 영향이 있을 겁니다.

&nbsp;

## 해결방법

컴포넌트를 엘리먼트의 속성형태로 사용하는  
Vue의 `is` 속성을 사용하는 겁니다.

참고: [Vue.js is 속성](https://vuejs.org/v2/api/#is){: target="_blank"}

Vuetify 버튼 컴포넌트를  
Vue의 is 속성을 사용해보면

```html
<v-btn>Sample Button</v-btn>
```

위 코드 대신  
아래와 같이 사용해줍니다.

```html
<button is="v-btn">Sample Button</button>
```

`is`를 사용한 버튼이  
크롬 개발자 콘솔(F12) 및 소스보기에서  
아래와 같이 렌더링이 됩니다.

```html
<button type="button" class="v-btn v-btn--contained theme--light v-size--default">
    <span class="v-btn__content">Sample Button</span>
</button>
```

Vueitfy 컴포넌트의 옵션도 그대로 사용 가능합니다.

`block` `large` 옵션 사용

```html
<v-btn block large>Sample Button</v-btn>
```

```html
<button is="v-btn" block large>Sample Button</button>
```

```html
<button type="button" class="v-btn v-btn--block v-btn--contained theme--light v-size--large">
    <span class="v-btn__content">sample</span>
</button>
```

이 게시물 내용은 지극히 개인적인 생각이며  
non Node.js 환경인  
설치형 워드프레스, 쌩PHP(코드이그나이터, 라라벨이 아닌)에서  
적용하고 배포한 경험을 바탕으로 작성하였습니다.

이상으로 Node.js 환경이 아닌 non Node.js 환경에서 Vuetify 사용하는 방법이었습니다.
