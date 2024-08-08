$(function(){
    $("#faq h3").click(function(){
        $(this).parent().addClass('open').siblings().removeClass('open')
    })
})