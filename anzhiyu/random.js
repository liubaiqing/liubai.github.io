var posts=["2024/12/08/hexod上传报错解决自用/","2024/12/03/newstar ctf复现/","2024/11/03/my blog/","2024/12/02/php反序列化/","2024/11/17/basectf learn/","2024/11/15/regex learn/","2026/04/11/phyphox的二次开发/","2024/11/19/sql刷题记录/","2024/11/23/后端学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };