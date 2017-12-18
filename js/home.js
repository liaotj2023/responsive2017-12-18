$(function(){
	$('.maxLi').hover(function(){
		$('.maxSubnav').show();
		$('.maxSubnav').stop().animate({'top':'60px','opacity':1},500);
	},function(){
		$('.maxSubnav').hide();
		$('.maxSubnav').css({'top':'100px','opacity':0});
	})
	$(window).load(function(){
		resizeNav();
		limove();
	})
	$(window).resize(function(){
		resizeNav();
		$('body').css({'height':$('.main').height(),'overflow':'auto'});
//		$('body').css({'height':$(document).height(),'overflow':'auto'});
			$('.hen3').fadeIn(400);
			$('.hen1').css({'transform':'rotate(0deg)','top':'10px'});
			$('.hen2').css({'transform':'rotate(0deg)','top':'26px'});
			$('.minNavBox').css('background','transparent');
			$('.minNavBox .minNav').stop().animate({'right':'-200px'},300,function(){
				$('.minNavBox').hide();
			});
			if(fenNum%2 == 1){
				fenNum += 1;
			}
	})
	function resizeNav(){
		if($(window).width() > 768){
			$('.maxNav').show()
			$('.minNavBox').hide();
			$('.hen1').css({'transform':'rotate(0deg)','top':'10px'});
			$('.hen2').css({'transform':'rotate(0deg)','top':'26px'});
			$('.hen3').show();
			$('#fen').hide();
			if(fenNum%2 == 1){
				fenNum += 1;
			}
		}else{
			$('#fen').show();
			$('.maxNav').hide()
		}
		$('.minNavBox').width($(window).width());
		$('.minNavBox').height($(window).height());
	}
	
	var fenNum = 0;
	$('.minNavBox').width($(window).width());
	$('.minNavBox').height($(window).height());
	$('#fen').hover(function(){
		$('.hen1').stop().animate({'top':'6px'},400);
		$('.hen2').stop().animate({'top':'30px'},400);
	},function(){
		if(fenNum%2 == 0){
			$('.hen1').stop().animate({'top':'10px'},400);
			$('.hen2').stop().animate({'top':'26px'},400);
		}
	})
	$('#fen').click(function(){
		fenNum++;
		if(fenNum%2 == 1){
			$('body').css({'height':$(window).height(),'overflow':'hidden'});
			$('.minNavBox').width($('body').width());
			$('.minNavBox').height($('body').height());
			$('.hen3').fadeOut(400);
			$('.hen1').css({'transform':'rotate(45deg)','top':'6px'});
			$('.hen2').css({'transform':'rotate(-45deg)','top':'30px'});
			$('.minNavBox').show();
			$('.minNavBox').css('background','rgba(0,0,0,.5)');
			$('.minNavBox .minNav').stop().animate({'right':'0'},500);
		}else{
			$('body').css({'height':$(document).height(),'overflow':'auto'});
			$('.hen3').fadeIn(400);
			$('.hen1').css({'transform':'rotate(0deg)','top':'10px'});
			$('.hen2').css({'transform':'rotate(0deg)','top':'26px'});
			$('.minNavBox').css('background','transparent');
			$('.minNavBox .minNav').stop().animate({'right':'-200px'},500,function(){
				$('.minNavBox').hide();
			});
		}
	})
	$('.minLi').mouseenter(function(){
		$('.minSubnav').slideDown();
	})
	$('.minLi').mouseleave(function(){
		$('.minSubnav').slideUp();
	})
	$('.carousel').carousel({
	  interval: 2000
	})
	$('#banText').stop().animate({'bottom':100,'opacity':1},500);
	
	//fourBox阴影效果
//	$('.fourBox li .liBox').hover(function(){
//		$(this).children('.liTop').children('img').css({'transform':'scale(1.5)'});
//		$(this).stop().animate({'top':'-10px'},500);
//		$(this).css('box-shadow','5px 5px 30px #aaa');
//	},function(){
//		$(this).children('.liTop').children('img').css({'transform':'scale(1)'});
//		$(this).stop().animate({'top':'0'},500);
//		$(this).css('box-shadow','none')
//	})
	//滚动条
	$('.twoUl li').css({'opacity':'0',"left":"-50px"});
	$('.twoBox .twoRightBox img').css({'opacity':'0','left':'50px'})
	$('.threeLeftImg img').css({'opacity':'0','left':'-50px'})
	$('.threeRightBox li').css({'opacity':'0',"left":"50px"});
	$(window).scroll(function(){
		limove();
	})
	
	function limove(){
		if($(window).width() > 992){
			if($(window).scrollTop()>300){
				twoLi();
				$('.twoBox .twoRightBox img').stop().animate({'opacity':'1','left':'0'},500);
			}
			if($(window).scrollTop()>1500){
				threeLi();
				$('.threeLeftImg img').stop().animate({'opacity':'1','left':'0'},500);
			}
		}else if($(window).width()>768 && $(window).width()<992){
			if($(window).scrollTop()>300){
				twoLi();
			}
			if($(window).scrollTop()>700){
				$('.twoBox .twoRightBox img').stop().animate({'opacity':'1','left':'0'},500);
			}
			if($(window).scrollTop()>1800){
				$('.threeLeftImg img').stop().animate({'opacity':'1','left':'0'},500);
			}
			if($(window).scrollTop()>3500){
				threeLi();
			}
		}else if($(window).width()<768){
			if($(window).scrollTop()>100){
				twoLi();
			}
			if($(window).scrollTop()>700){
				$('.twoBox .twoRightBox img').stop().animate({'opacity':'1','left':'0'},500);
			}
			if($(window).scrollTop()>1200){
				$('.threeLeftImg img').stop().animate({'opacity':'1','left':'0'},500);
			}
			if($(window).scrollTop()>2200){
				threeLi();
			}
		}
	}
	
	function twoLi(){
//		$('.twoUl li').eq(0).stop().animate({'opacity':'1','left':'0'},400,function(){
//			$('.twoUl li').eq(1).stop().animate({'opacity':'1','left':'0'},400,function(){
//				$('.twoUl li').eq(2).stop().animate({'opacity':'1','left':'0'},400,function(){
//					$('.twoUl li').eq(3).stop().animate({'opacity':'1','left':'0'},400)
//				})
//			})
//		});
		$('.twoUl li').eq(0).animate({'opacity':'1','left':'0'},400);
		$('.twoUl li').eq(1).delay(200).animate({'opacity':'1','left':'0'},400);
		$('.twoUl li').eq(2).delay(400).animate({'opacity':'1','left':'0'},400);
		$('.twoUl li').eq(3).delay(600).animate({'opacity':'1','left':'0'},400);
	}
	function threeLi(){
//		$('.threeRightBox li').eq(0).stop().animate({'opacity':'1','left':'0'},400,function(){
//			$('.threeRightBox li').eq(1).stop().animate({'opacity':'1','left':'0'},400,function(){
//				$('.threeRightBox li').eq(2).stop().animate({'opacity':'1','left':'0'},400,function(){
//					$('.threeRightBox li').eq(3).stop().animate({'opacity':'1','left':'0'},400,function(){
//						$('.threeRightBox li').eq(4).stop().animate({'opacity':'1','left':'0'},400,function(){
//							$('.threeRightBox li').eq(5).stop().animate({'opacity':'1','left':'0'},400)
//						})
//					})
//				})
//			})
//		});
		$('.threeRightBox li').eq(0).animate({'opacity':'1','left':'0'},400);
		$('.threeRightBox li').eq(1).delay(200).animate({'opacity':'1','left':'0'},400);
		$('.threeRightBox li').eq(2).delay(400).animate({'opacity':'1','left':'0'},400);
		$('.threeRightBox li').eq(3).delay(600).animate({'opacity':'1','left':'0'},400);
		$('.threeRightBox li').eq(4).delay(800).animate({'opacity':'1','left':'0'},400);
		$('.threeRightBox li').eq(5).delay(1000).animate({'opacity':'1','left':'0'},400);
		
	}
	
	//输入框
	$('#inp').focus(function(){
		$(this).css('border-color','#ccc')
	})
	$('#inp').blur(function(){
		$(this).css('border-color','#32acf2')
	})
})
