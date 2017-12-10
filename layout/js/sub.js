$(document).ready(function(){
/****클릭시 포커싱하고 서브페이지를 에이젝스이용해서 불러오기 ****/
   $("#lnb li a").click(function(){
       $("#lnb li a").removeClass("checked");
       $(this).addClass("checked");
      $.ajax({
         url : $(this).attr("concordia"),
         success: function(result){
             $("#contents").html(result);
         }
      });
   });


   
   
/****스크롤 따라다니는 레이어와 탑버튼 페이드인/아웃*****/   
    var $doc           = $(document);  
	var position       = 0;  
	var top            = $doc.scrollTop();  
	var screenSize     = 0;
	var halfScreenSize = 0;  	
	/*사용자 설정 값 시작*/  
	var pageWidth      = 1000; 
	var leftOffet      = 250; 	
	var leftMargin     = 10;	  
	var speed          = 100;   
	var easing         = 'swing';	// linear, swing  
	var $layer         = $('#rightSide');              //modify
	$layer.css("position", "absolute");
// 	var $basisLayer	= $('#');	                  //modify(상위에 있는 기준레이어)
// 	var basisPosition= $basisLayer.offset().top;

	
// 	var layerTopOffset = basisPosition + 230;   
	var layerTopOffset =  167;   
	$layer.css('z-index', 10);  
	$('.toTop').hide();                              //modify

	function resetXPosition()  
	{  
	$screenSize = $('body').width();	
	halfScreenSize = $screenSize/2;
	xPosition = halfScreenSize + leftOffet;  
	if ($screenSize < pageWidth)  
	  xPosition = leftMargin;  
	$layer.css('left', xPosition);  
	}  
	
// 스크롤 바를 내린 상태에서 리프레시 했을 경우를 위해  
	if (top > 0 )  
	$doc.scrollTop(layerTopOffset+top);  
	else  
	$doc.scrollTop(0);  
	
// 최초 레이어가 있을 자리 세팅  
	$layer.css('top',layerTopOffset);  
	resetXPosition();  
	
//윈도우 크기 변경 이벤트가 발생하면  
	$(window).resize(resetXPosition);  
	

//스크롤이벤트가 발생하면
	$(window).scroll(function(){
			yPosition = $doc.scrollTop();
		if(layerTopOffset > yPosition){
			$layer.css('top',layerTopOffset);	
			$('.toTop').fadeOut();                    //modify
		}else{	
			yPosition = $doc.scrollTop() 
			$layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});
			$('.toTop').fadeIn();                     //modify
		}
	});


      
});
