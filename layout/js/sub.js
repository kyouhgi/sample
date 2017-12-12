/*인클루드 헤더, 푸터 파일, sub파일내 우측아래영역*/
$("#header").load("header.html");
$("#footer").load("footer.html");
$("#collectedLink").load("collectedLink.html");

$(document).ready(function(){
	

/*인클루드해서 서브페이지 불러오고 불러온 버튼에 포커싱 */
	var val = location.href.substr(-1);		//다른 페이지에서 전달받은 인자
	val = Number(val) + 1;					//숫자1를 더하는 것은 서브메뉴 lnb의 자식노드중 li들은 3번째부터 시작하기 때문에 더해준 것이다.(0이 첫번째)
	var val2 = location.href.substr(-2);
	var include = "temp/temp" + val2 + ".html";
	$('#contents').load(include);
    $("#lnb :nth-child(" + val + ") a").addClass("checked");


/****클릭시 포커싱하고 서브페이지를 에이젝스이용해서 불러오기 ****/
//링크를 없에고 concordia라는 속성을만들고 그 속성으로 인클루드를 구현했으나
//리로드하면 클릭속성이 없는 관계로 인클루드 되지 않는 문제가 생김.
// 따라서 잠성 보류
   //$("#loading").hide();	//페이지 처음접근할 때  안보이게
   //$("#lnb li a").click(function(){
   //    $("#lnb li a").removeClass("checked");	//클릭시 포커싱(모든버튼 비활성화)2-1
   //    $(this).addClass("checked");				//클릭시 포커싱(버튼활성화)2-2
       
   //   $.ajax({
   //      url : $(this).attr("concordia"),
   //      success: function(result){
   //          $("#contents").html(result);
   //      },
   //      beforeSend: function(){	//(더 확인요)컨텐츠 나오기 전에 나오는 이미지영역
   //      	$("#loading").show();
   //      },
   //      complete: function(){	//(더확인요)
   //      	$("#loading").hide();
   //      }
   //   });
   //});

   
   
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
	$layer.css('z-index', 1);  
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
			yPosition = $doc.scrollTop();
			$layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});
			$('.toTop').fadeIn();                     //modify
		}
	});


      
});
