<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
         document.title = 'ヽ(●-`Д´-)ノ瓜棚不好玩吗？';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Yafine/cdn@2.5/source/favicon.png");
         document.title = 'ヾ(Ő∀Ő3)ノ欢迎来到我的瓜棚！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });