---
layout: post
title:  "[Vue] 소개 및 시작하기"
description: "공식사이트에 의하면  
Vue는 사용자 인터페이스를 만들기 위한  
프로그레시브 프레임워크라고 하는데,  
쉽게말해 React, Angular와 같은  
`자바스크립트 프레임워크`의 한 종류라고  
생각하면 될것 같습니다."
date:   2020-10-17 04:45:00 +0900
categories: Vue
---
## __소개__

공식사이트에 의하면  
Vue는 사용자 인터페이스를 만들기 위한  
프로그레시브 프레임워크라고 하는데,  
쉽게말해 React, Angular와 같은  
`자바스크립트 프레임워크`의 한 종류라고  
생각하면 될것 같습니다.

Vue를 사용하려는 환경이  
Nodejs 기반으로 운영하느냐 아니냐에 따라서  
설치하고 운영하는 방식이 다를것으로 생각됩니다.  

이번 포스팅에서는
`non Nodejs` 환경에서  
설치하고 사용하는 방법에 대해서  
정리해보도록 하겠습니다.

---

## __설치__

`<script>에 추가`  

script 태그에 `https://cdn.jsdelivr.net/npm/vue`를 추가합니다.  
(해당 링크는 npm에 올라간 최신 버전입니다.)  
[여기서][npm 패키지 원본]{: target="_blank"} npm 패키지 원본을 확인 할 수 있습니다.

{% highlight html %}
{% raw %}
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
  <div id="app"> {{ message }}  </div>  
</body>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
</script>
</html>
{% endraw %}
{% endhighlight %}

위의 코드와 같이 작성하면 Vue를 사용할 수 있습니다.

## __마무리__

Vue를 사용하는 방법은 크게  
`script 태그`에 추가하는 방법과  
`NPM`을 통해 Vue를 설치하는 방법,  
`vue-cli`를 사용하여 Vue 프로젝트를 생성하는 방법이 있습니다.  

기존의 프로젝트에 Vue를 쓰는 방법으로는 가장 간단하게  
script 태그에 추가하는 방법이 좋습니다.

새로운 Vue 프로젝트를 생성할 때,  
NPM을 통해 Vue를 설치하고,  
번들러(Webpack과 같은..)와 컴파일러(babel과 같은..)를 각각 설치하여  
Vue 프로젝트를 생성하는 방법이 있습니다만,  
Vue에서 공식적으로 제공하는 vue-cli를 사용하여 Vue 프로젝트를 생성하는 것이 정신 건강에 좋을 것 같습니다.


[npm 패키지 원본]: https://cdn.jsdelivr.net/npm/vue

