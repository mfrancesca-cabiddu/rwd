$(function () {
    'use strict';

    var vertigeText, vertige1, vertige2, vertige3;

    vertigeText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    vertige1 =  '<h1>Acrobatica Aerea</h1>' + vertigeText + '<img src="images/acrobatica aerea.jpg">' + vertigeText;
    vertige2 =  '<h1>Kitesurf</h1>' + vertigeText + '<img src="images/kitesurf.jpg">' + vertigeText;
    vertige3 =  '<h1>Deltaplano</h1>' + vertigeText + '<img src="images/deltaplano.jpg">' + vertigeText;
    $(".vertige-text-1").html(vertige1);
    $(".vertige-text-2").html(vertige2);
    $(".vertige-text-3").html(vertige3);
});
