---
layout: post
title:  "[Wordpress] 관리자 페이지 글 목록에 칼럼 추가하기"
description: "워드프레스 관리자 페이지에서 글 목록에 칼럼 추가하는 방법"
date:   2020-11-15 09:00:00 +0900
categories: wordpress
---
대표 이미지(썸네일)가 글 목록에 표시되어 있으면  
어느 글에 어떤 특성 이미지가 지정되어 있는지,  
그리고 특성 이미지가 누락된 글은 없는지 등을 쉽게 파악할 수 있어  
글을 관리하는 데 도움이 될 수 있습니다.

만약 사용 중인 워드프레스 테마에서  
위와 같은 기능을 제공하지 않는 경우에는  
다음과 같은 코드를  
테마의 함수 파일(차일드 테마를 만든 후에 작업)에 추가하면  
글 목록 개별 글에 썸네일이 추가됩니다.

```php
// 워드프레스 백엔드에서 특정 이미지(Featured Image)를 표시하는 컬럼 추가하기
add_filter('manage_posts_columns', 'columns_head');
add_action('manage_posts_custom_column', 'columns_content', 10, 2);

// ADD NEW COLUMN
function columns_head ($columns) {
  $columns['thumbnail'] = '썸네일';
  return $columns;
}

// ADD NEW COLUMN Content
function columns_content ($column, $post_id){
  switch ($column){
    case 'thumbnail':
      $post_thumbnail_id = get_post_thumbnail_id($post_id);
      if ($post_thumbnail_id) {
        $post_thumbnail_img = wp_get_attachment_image_src( $post_thumbnail_id, 'thumbnail' );
        echo '<img width="180" src="' . $post_thumbnail_img[0] . '" />'; // 크기를 적절히 조정
      }
      break;
  }
}
```

위의 코드는 일반 글과 사용자 정의 글 유형(커스텀 포스트 타입)에 적용됩니다.

그림 크기는 숫자를 바꾸어 적절히 조정하도록 합니다.

특정 커스텀 포스트 타입에만 적용하고 싶은 경우에는
아래 코드를 사용하면 됩니다.

```php
add_filter('manage_{$post_type}_posts_columns', 'columns_head');
add_action('manage_{$post_type}_posts_custom_column', 'columns_content', 10, 2);
```

함수 파일에 코드를 추가하는 작업이 쉽지 않은 경우에는 [Post List Featured Image](https://wordpress.org/plugins/post-list-featured-image){: target="_blank"}라는 플러그인을 사용할 수 있습니다.

이상으로 워드프레스 관리자 페이지에서 글 목록에 칼럼 추가하는 방법이었습니다.
