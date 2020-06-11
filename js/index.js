/************************ 사전지식 ****************************/





/************************	전역변수 ****************************/


/************************ 사용자함수 ****************************/




/************************ 이벤트함수 ****************************/


function onResize(){
	this.wid = $(this).innerWidth();
	this.hei = $(this).innerHeight();
}


function onSCroll(){
	this.scTop = $(this).scrollTop();
	if(scTop > hei){
		$(".header").css({"top": 0 , "bottom" : "auto", "position": "fixed"});
	}
	else{
		$(".header").css({"top": "auto", "bottom": 0, "position": "absoulte"});
	}
}



/************************ 이벤트설정 ****************************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onSCroll).trigger("scroll");