var posts=["posts/adc9b3fe.html","posts/7c62e317.html","posts/cd52224a.html","posts/8f1686ee.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };