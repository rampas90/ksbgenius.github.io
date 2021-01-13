---
layout: post
title:  "[Linux] apt와 apt-get 차이점"
description: "데비안 계열(Ubuntu, Mint 등)에서 사용하는 apt와 apt-get의 차이점"
date:   2021-01-13 09:00:00 +0900
categories: Linux
---
우분투(Ubuntu)에서 패키지를 설치할 때는  
`apt install`이나 `apt-get install`을 사용합니다.

apt와 apt-get의 차이를 모르고 사용해 왔었는데  
갑지가 둘의 차이가 궁금해졌습니다.

## apt vs apt-get

여러 리눅스 패키지들의 문서를 읽다보면
어떤 것은 `apt install`을 사용해서 설치하라고 하고
어떤 것은 `apt-get install`을 사용해서 설치하라고 합니다.

사실 `apt`를 쓰든 `apt-get`을 쓰든 큰 차이는 없습니다.


## 그럼 apt와 apt-get의 차이가 뭘까?

apt를 쓰든 apt-get(또는 apt-cache)을 쓰든 내부 동작의 차이는 거의 없습니다.

apt-get에서는 옵션들이 많아지다 보니  
apt에서는 자주 사용하는 옵션들을 추출해서 사용자들이 사용하고 보기 편하게 만들었습니다.

그래서 apt가 더 예쁘고 추가적인 정보를 출력해줍니다.

## 뭐를 쓰는게 좋을까?

둘 중 아무거나 써도 됩니다.

하지만 터미널에서 apt를 사용하면
더 예쁘고 유익한 메시지를 출력 받을 수 있는데  
굳이 apt-get을 사용할 필요는 없는 것 같습니다.


하지만 script를 작성할 때는 apt-get를 사용하는게 유리합니다.

위에서 언급했듯이 apt-get이 더 많은 옵션들을 가지고 있기 때문에  
우리에게 더 많은 기능을 제공해줍니다.

apt-get은 오래전부터 존재해왔기 때문에  
더 안정적이고 호환성이 높기도 합니다.

굳이 예쁜 출력을 확인하지 않아도 되는데 
제한된 기능을 가진 apt를 쓸 필요는 없다고 생각합니다.

&nbsp;

이상으로 데비안 계열(Ubuntu, Mint 등)에서 사용하는 apt와 apt-get의 차이점이었습니다.
