/* 
 Created on : 16/09/2016
 Author     : Juliano
 */

/*
 * MUDAR A COR DA NAVBAR AO ROLAR A PÁGINA
 */
function color() {
    var scroll = $(window).scrollTop() / 750;
    var diff = Math.round(0 + (255 * (1 - scroll)));
    $(".navbar").css("background-color", "rgba(255,255,255," + scroll + ")");
    $(".navbar").css("border-color", "rgba(230,230,230," + scroll + ")");
    $(".navbar *").css("color", "rgb(" + diff + "," + diff + "," + diff + ")");
}
$(document).ready(function () {
    color();
});
$(window).scroll(function () {
    color();
});

/*
 * DEIXAR A ROLAGEM SUAVE
 */
$(document).ready(function () {
    $("a").click(function (event) {
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 800);
    });
});