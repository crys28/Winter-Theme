 
function bgs(){

	var array = new Array(1,2,3)
	var random = Math.floor(Math.random() * 3);

	if (random == 1) {
		bg1();
	} else if(random == 2){
		bg2();
	} else {
		bg3();
	}

}

function bg1(){
	var bg = "url" + "(" + "'" + "img/bg2.jpg" + "'" + ")";

	$("#main").css("background-image", bg);
	$("#main").css("background", "cover");
	$("#main").css("transition-duration", "1s");

	$("#nav").css("background", "rgba(250, 250, 250, 0.5)");
	$("#nav").css("border-bottom", "3px solid black");

	$("#home,#holi,#cinema,#title").css("color", "black");
	$("#home,#holi,#cinema").css("border", "1px solid black");
	$("#home,#holi,#cinema").css("background-color", "none");
	
	$("#content").css("color", "black");
	$("#content").css("transition-duration", "1s");
    $("#content").css("left", "8%");

	    $("#home,#holi,#cinema").hover(function(){
	  $(this).css("color", "white");
	  }, function(){
	  $(this).css("color", "black");
	});

	    $("#home,#holi,#cinema").hover(function(){
	  $(this).css("background-color", "black");
	  }, function(){
	  $(this).css("background-color", "transparent");
	});

}

function bg2(){
	var bg = "url" + "(" + "'" + "img/bg.jpg" + "'" + ")";

	$("#main").css("background-image", bg);
	$("#main").css("background", "cover");
	$("#main").css("transition-duration", "1s");

	$("#nav").css("background", "rgba(0, 0, 0, 0.5)");
	$("#nav").css("border-bottom", "none");

	$("#home,#holi,#cinema").css("background-color", "none");
	$("#home,#holi,#cinema,#title").css("color", "white");
	$("#home,#holi,#cinema").css("border", "1px solid white");

		$("#home,#holi,#cinema").hover(function(){
	  $(this).css("color", "black");
	  }, function(){
	  $(this).css("color", "white");
	});

		 $("#home,#holi,#cinema").hover(function(){
	  $(this).css("background-color", "white");
	  }, function(){
	  $(this).css("background-color", "transparent");
	});

	$("#content").css("color", "white");
	$("#content").css("transition-duration", "1s");
	$("#content").css("left", "8%");

}

function bg3(){
	var bg = "url" + "(" + "'" + "img/bg3.jpg" + "'" + ")";

	$("#main").css("background-image", bg);
	$("#main").css("background", "cover");
	$("#main").css("transition-duration", "1s");

	$("#nav").css("background", "rgba(0, 0, 0, 0.5)");
	$("#nav").css("border-bottom", "none");

	$("#home,#holi,#cinema,#title").css("color", "peachpuff");
	$("#home,#holi,#cinema").css("border", "1px solid peachpuff");
	$("#home,#holi,#cinema").css("background-color", "none");

	$("#content").css("color", "peachpuff");
	$("#content").css("transition-duration", "1s");
	$("#content").css("left", "50%");
		
		$("#home,#holi,#cinema").hover(function(){
	  $(this).css("color", "peru");
	  }, function(){
	  $(this).css("color", "peachpuff");
	});

		$("#home,#holi,#cinema").hover(function(){
	  $(this).css("background-color", "white");
	  }, function(){
	  $(this).css("background-color", "transparent");
	});

}


