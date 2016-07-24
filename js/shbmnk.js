$(document).ready(function(){
if (window.console) console.log('ШБМНК.js v1.3 загрузилось!'); // Если активна консоль отладки браузера, показать текст
	// Режим окулиста
	$("button").click(function(){ // Если была нажата кнопка
		// Поменять размеры шрифтов, задействованных на главной странице сайта
		$("body").css({"font-size": "175%"});
		$("h2").css({"font-size": "150%"});
		$("h3").css({"font-size": "155%"});
		$("h4").css({"font-size": "165%"});
		$('body').css('background-image', 'url(../images/theme-okulist/back.png)'); // Поменять общий фон на окулистический
		$('#left').css('background-image', 'url(../images/theme-okulist/left-body.png)'); // Поменять левый фон на окулистический
		$('#footer p').css('background-image', 'url(../images/theme-okulist/footerback.jpg)'); // Поменять подвальный фон на окулистический
		$('#lesopark').attr('src','images/theme-okulist/lesopark.png'); //Поменять лесопарк на ЧБ (НЕ РАБОТАЕТ)
		$('#borago').attr('src','images/theme-okulist/bogaro.png'); //Поменять бораго на простое (НЕ РАБОТАЕТ)
		
		
        //$('borago').src = "../images/theme-okulist/borago.gif"; // Поменять бораго на простое (НЕ РАБОТАЕТ)
    });
});
