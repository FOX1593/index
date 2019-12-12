$(function(){
   // 轮播图

   var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
         el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         autoplay:true
   }) 

   // 悬浮球移动
   $('.BlackTop').click(function(){
      // html，body取并级，处理浏览器兼容
         $("html,body").animate({
         scrollTop: 0,
         screenLeft: 0,
         }, 400); 
         console.log(11)
   });






})   
