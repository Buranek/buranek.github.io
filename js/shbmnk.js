$(document).ready(function(){
if (window.console) console.log("ШБМНК.js версии 1.4.4 загрузилось!"); // Если активна консоль отладки браузера, показать текст
	// Режим окулиста
	$("button-brown").click(function(){ // Если была нажата кнопка увеличения (исхитрожопился через css)
		// Поменять размеры шрифтов, задействованных на главной странице сайта
		$("body").css({"font-size": "175%"});
		$("h2").css({"font-size": "150%"});
		$("h3").css({"font-size": "155%"});
		$("h4").css({"font-size": "165%"});
		// Поменять картинки
		$("body").css("background-image", "url(../images/theme-okulist/back.png)"); // Поменять общий фон на окулистический
		$("#left").css("background-image", "url(../images/theme-okulist/left-body.png)"); // Поменять левый фон на окулистический
		$("#content").css("background", "#FFF"); // Поменять фон шапки на белый
		$("#right").css("background", "grey"); // Поменять фон правого блока на серый
		$("#footer p").css("background-image", "url(../images/theme-okulist/footerback.png)"); // Поменять подвальный фон на окулистический
		$(".newsbox").css("background-image", "url(../images/theme-okulist/newsbox.png)"); // Поменять фон новостей на простой
		$("#lesopark").attr("src","images/theme-okulist/lesopark.png"); //Поменять лесопарк на ЧБ
		$("#borago").attr("src","images/theme-okulist/bogaro.png"); //Поменять бораго на простое
		$("#FlagRF").attr("src","images/theme-okulist/FlagRF.png"); //Поменять флаг РФ тем, который без эффектов
    });
    
	//Режим НЕ-окулиста
    $("button-green").click(function(){ // Если была нажата кнопка уменьшения (исхитрожопился через css)
		
		// Поменять размеры шрифтов, задействованных на главной странице сайта
		$("body").css({"font-size": "100%"});
		$("h2").css({"font-size": "100%"});
		$("h3").css({"font-size": "100%"});
		$("h4").css({"font-size": "100%"});
		// Поменять картинки
		$("body").css("background-image", "url(../images/theme/back.png)"); // Поменять общий фон на обычный
		$("#left").css("background-image", "url(../images/theme/left-body.png)"); // Поменять левый фон на обычный
		$("#content").css("background", "#faf6f6"); // Поменять фон шапки на обычный
		$("#right").css("background", "#ccc2ab"); // Поменять фон правого блока на обычный
		$("#footer p").css("background-image", "url(../images/theme/footerback.jpg)"); // Поменять подвальный фон на обычный
		$("#newsbox").css("background-image", "url(../images/theme/newsbox.png)"); // Поменять фон новостей на обычный
		$("#lesopark").attr("src","images/theme/lesopark.png"); //Поменять лесопарк на обычный
		$("#borago").attr("src","images/theme/bogaro.gif"); //Поменять бораго на обычное
		$("#FlagRF").attr("src","images/theme/FlagRF.png"); //Поменять флаг РФ тем, который с эффектами
    });
});
