$(function(){
				$(".width").hover(function(){
					$(".cang").css("display","block");
				},function(){
					$(".cang").css("display","none");
				})
				,$(".xian").hover(function(){
					$(".width1").css("display","block")
				},function(){
					$(".width1").css("display","none")
				})
				,$(".xian1").hover(function(){
					$(".he").css("display","block")
				},function(){
					$(".he").css("display","none")
				})
			})	
			$(function(){
				 var $div= $(".img2 ul div");
				 $.each($div, function(){
					$(this).hover(function(){
						var $img = $(this).find("img");
						$img.animate({width : 250,height :250},200)
					},function(){
						var $img = $(this).find("img");
						$img.animate({width : 240,height :240},200)
						})
					})
				 })
			$(function(){
				 var $div= $(".img3 ul div");
				 $.each($div, function(){
					$(this).hover(function(){
						var $img = $(this).find("img");
						$img.animate({width : 250,height :250},200)
					},function(){
						var $img = $(this).find("img");
						$img.animate({width : 240,height :240},200)
						})
					})
				 })
			$(function(){
				 var $div= $(".img4 ul div");
				 $.each($div, function(){
					$(this).hover(function(){
						var $img = $(this).find("img");
						$img.animate({width : 250,height :250},200)
					},function(){
						var $img = $(this).find("img");
						$img.animate({width : 240,height :240},200)
						})
					})
				 })

			$(function(){
				 var $div= $(".img5 ul div");
				 $.each($div, function(){
					$(this).hover(function(){
						var $img = $(this).find("img");
						$img.animate({width : 250,height :250},200)
					},function(){
						var $img = $(this).find("img");
						$img.animate({width : 240,height :240},200)
						})
					})
				 })

			$(function(){
				  $("#top").click(function() {
				      $("html,body").animate({Top:0},100);
				  }); 
				 })
			
			