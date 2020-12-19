---
layout: post
title:  "[Wordpress] 게시물 첫 번째 이미지를 자동으로 특성 이미지로 설정하는 방법"
description: "워드프레스 게시물 작성 시 첫 번째 이미지를 자동으로 썸네일로 설정하는 방법"
date:   2020-11-08 09:00:00 +0900
categories: Wordpress
---
워드프레스에서 특성 이미지가 없는 글이 많은 경우에 
테마에 따라 카테고리나 블로그 페이지에 특성 이미지(썸네일)가 표시되지 않을 수 있습니다.

특성 이미지가 없을 경우 체크하여  
해당 글에서 첫 번째로 업로드된 이미지를  
특성 이미지로 설정하도록 하면 이런 문제가 해결될 것입니다.

특성 이미지가 없는 경우에  
글의 첫 번째 이미지를 자동으로 특성 이미지로 설정하는 방법으로  
직접 코드를 사용 중인 함수 파일에 추가하거나 플러그인을 사용할 수 있습니다.

## 사용자 코드 사용

다음과 같은 코드를 테마의 함수 파일(`functions.php`)에 추가하여 테스트해보시기 바랍니다.

가급적 차일드 테마를 만들어 작업하는 것이 좋습니다.

```php
function auto_featured_image() {
  global $post;
  if (!has_post_thumbnail($post->ID)) {
    $attached_image = get_children( "post_parent=$post->ID&amp;post_type=attachment&amp;post_mime_type=image&amp;numberposts=1" );
    
    if ($attached_image) {
      foreach ($attached_image as $attachment_id => $attachment) {
        set_post_thumbnail($post->ID, $attachment_id);
      }
    }
  }
}
// Use it temporary to generate all featured images; 모든 특성 이미지를 임시 생성하는 데 사용
add_action('the_post', 'auto_featured_image');
// Used for new posts, 새 포스트에 사용
add_action('save_post', 'auto_featured_image');
add_action('draft_to_publish', 'auto_featured_image');
add_action('new_to_publish', 'auto_featured_image');
add_action('pending_to_publish', 'auto_featured_image');
add_action('future_to_publish', 'auto_featured_image');

```

## 플러그인 사용

위의 방법이 잘 안 되거나 차일드 테마를 사용하는 것이 번거롭게 여겨지는 경우 플러그인을 사용해볼 수 있습니다.

[Easy Add Thumbnail](https://wordpress.org/plugins/easy-add-thumbnail/){: target="_blank"}이라는 플러그인이 이러한 역할을 하는 플러그인입니다.

플러그인 설명을 보면 "자동으로 특정 이미지를 글에 업로드된 첫 번째 이미지로 설정합니다(썸네일을 지원하는 모든 포스트 타입 지원).

플러그인을 사용하는 것은 바람직하지 않지만 간편하게 원하는 기능을 구현할 수 있습니다.

이상으로 워드프레스 게시물 작성 시 첫 번째 이미지를 자동으로 썸네일로 설정하는 방법이었습니다.
