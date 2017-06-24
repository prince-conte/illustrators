$(function(){

    var $siteMain = $('main');
    var sitePromo = $('.js-site-promo');
    var sitePromoHeight = sitePromo.outerHeight();

    $(window).on('load', function() {




        $siteMain.css('top',sitePromoHeight);


    })

});
