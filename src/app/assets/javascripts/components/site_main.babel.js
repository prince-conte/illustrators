$(function(){

    var $siteMain = $('main');
    var sitePromo = $('.js-site-promo');
    var sitePromoHeight = sitePromo.outerHeight();

    $siteMain.css('top',sitePromoHeight);
});
