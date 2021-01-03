---
layout: post
title:  "[Nginx] UserAgent로 로봇 접속 차단하기"
description: "Nginx에서 UserAgent로 MJ12bot, AhrefsBot, SemrushBot, ltx71 등 불필요한 로봇 접속 차단하는 방법"
date:   2021-01-02 09:00:00 +0900
categories: Nginx
---
악성봇은 robots.txt도 무시하기 때문에  
서버에서 처리를 해줘야 합니다.

`/etc/nginx/sites-available/{설정파일}`에 있는  
Nginx 설정 파일에서  
`$http_user_agent`를 이용하여  
불필요한 로봇을 차단할 수 있습니다.

map을 이용하는 방법도 있지만,  
여기서는 설정파일에 바로 입력하였습니다.

```bash
server {
  # 공백 UserAgent 차단
  if ($http_user_agent = "") {
    return 403;
  }
  
  # 불필요 로봇 차단
  if ($http_user_agent ~* (MJ12bot|AhrefsBot|SemrushBot|ltx71) ) {
    return 403;
  }
}
```

설정 저장 후 Nginx 재시작

&nbsp;

이상으로 Nginx에서 UserAgent로 로봇 접속 차단하는 방법이었습니다.
