/*인클루드 헤더, 푸터 파일*/
//$("#header").load("header.html");
//$("#footer").load("footer.html")

$(document).ready(function(){

//초기화
var current = 0;
var _auto, autoNum = 0;
var speed = 4000;
var target = $('#rollingBanner #bannerMask li');
var mask = $('#rollBanner #bannerMask');
var btn = $('#rollingBanner #buttons li');
var btnLength = btn.length;
btn.eq(current).addClass('checked');	//현재버튼활성
target.eq(current).css({left:'0px'});	//현재그림보임
	
function autoMove(){
	_auto = setInterval(function(){
		if(autoNum == btnLength) autoNum = 0;
		btn.eq(autoNum).trigger('click');
		autoNum++;
	}, speed)
	
	btn.bind('click', function(){ //ver1.4.4에서 on()사용안되고 bind()사용가능.
		var nIdx = btn.index(this);
		slide(nIdx);
	});
}
function slide(nldx){
	if(nldx != current){
		target.eq(nldx).css({left:'1000px'}).stop().animate({left:'0px'}, 500, 'easeOutQuint');
		target.eq(current).stop().animate({left:'-1000px'}, 500, 'easeOutQuint');
		btn.eq(nldx).addClass('checked');
		btn.eq(current).removeClass('checked');
		current = nldx;
	}
	
}


function overMouse(){
	mask.mouseenter(function(){
		clearInterval(_auto);
	});
	mask.mouseleave(function(){
		autoMove();
	});
}
	autoMove();
	overMouse();
});