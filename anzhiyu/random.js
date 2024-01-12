var posts=["posts/49a026b8.html","posts/adc9b3fe.html","posts/7c62e317.html","posts/cd52224a.html","posts/8f1686ee.html","posts/6d3a0a06.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };