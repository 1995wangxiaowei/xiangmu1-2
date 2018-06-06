
		//获取大盒子
		let oBigdiv=document.getElementById("box");
		//获取右边的ul
		let oRightUl=document.getElementById("right1");
		//获取所有的大图
		let oBigImg=oRightUl.getElementsByTagName("li");
		//获取左部分
		let oLeft=document.getElementById("left1");
		//获取小图ul
		let oXiaUl=document.getElementById("small-ul");
		//获取所有的小图
		let oXiaoImg=oLeft.getElementsByTagName("li");
		//记录当前图片的下标(点那个就是记录哪个，哪个下标就是初始化为0)
		let nowPic=0;
		//记录层级的变量
		let zIndex=1;
		//记录计时器
		var timer=null;
		slider();   //调用轮播函数
		autoPlay(); //调用自动轮播函数

		//给所有小图添加移入移出点击事件
		for(var i=0,len=oXiaoImg.length;i<len;i++){
			oXiaoImg[i].index=i;//索引
			oXiaoImg[i].onmouseover=function(){
				nowPic=this.index;
				slider();
				
			}
		}
		
	//轮播函数
	function slider(){
		//给大图做轮播
		oBigImg[nowPic].style.zIndex= ++zIndex;
		//小图轮播
		if(nowPic===0){
			sport;
		}else{
			sport
		}
		//初始化小图的透明度
		for(var i=0,len=oXiaoImg.length;i<len;i++){
			sport(oXiaoImg[i],{opacity : 100});
		}
			sport(oXiaoImg[nowPic],{opacity : 60});
	}	
	function autoPlay(){
		timer = setInterval(function(){
			nowPic ++;
			if(nowPic ===oBigImg.length){
				nowPic=0;
			}
			slider()
		},3000)
	}
		//给大盒子添加移入移出事件
	oBigdiv.onmouseenter=function(){
		clearInterval(timer);
	}
	oBigdiv.onmouseleave=function(){
		autoPlay();
	}

$(function(){
	$(".erweima").hover(function(){
		$(".erweima1").css("display","inline");
	},function(){
		$(".erweima").css("display","none")
	})
	$(".erweima1").hover(function(){
		$(".erweima").css("display","inline");
	},function(){
		$(".erweima1").css("display","none")
	})
})