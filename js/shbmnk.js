$(document).ready(function(){
if (window.console) console.log('ШБМНК.js v1.3 загрузилось!'); // Если активна консоль отладки браузера, показать текст
    $("button").click(function(){ // Если была нажата кнопка
        $("body").css({"font-size": "175%"});
        $("h2").css({"font-size": "150%"});
        $("h3").css({"font-size": "155%"});
        $("h4").css({"font-size": "165%"});
        $('body').css('background-image', 'url(../images/theme-okulist/back.png)'); // Поменять фон на окулистический
        document.getElementById("theme").src = "../images/theme-okulist/lesopark.png"; // Поменять лесопарк на ЧБ
        document.getElementById("borago").src = "../images/theme-okulist/borago.gif"; // Поменять бораго на простое
    });
});
