 $(function(){
    //  $('.lentren').click(function(){
    //      $('body').animate({scrollTop:0});
    //      return false;
    //  })
   $(window).scroll(function(){
    var pos_body = $('html,body').scrollTop();
    //    if($('body').scrollTop()>400)
    //    {
        if(pos_body>200){ 
       $('.logo').addClass('logodoimau')
       $('.chumenu ').addClass('logodoimau')
       $('.menutren').addClass('nenmenu')
       }
       else 
       {
        $('.logo').removeClass('logodoimau')
        $('.chumenu ').removeClass('logodoimau')
        $('.menutren').removeClass('nenmenu')
       }
   })
})  
 