var posts=["posts/adc9b3fe.html","posts/4a17b156.html","posts/7c62e317.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };