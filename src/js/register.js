	var	oTxt1 = document.getElementById("txt1");
			var oTxt2 = document.getElementById("txt2");
			var oTxt3 = document.getElementById("txt3");
			var oCon1 = document.getElementById("con1");
			var oCon2 = document.getElementById("con2");
			var oCon3 = document.getElementById("con3");
	
			oTxt1.onblur = function(){
				var str = oTxt1.value;
				var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if(re.test(str)){
					oCon1.style.display="none";				
				}else{
					oCon1.style.display="inline";
				}
			}	
			//设置密码
			oTxt2.onblur = function(){
				var str = oTxt2.value;
				var re = /^\w{6,18}$/;
				if(re.test(str)){
					oCon2.style.display="none";			
				}else{
					oCon2.style.display="inline";
				}
			}
			//确认密码
			oTxt3.onblur = function(){
				var str = oTxt3.value;
				var re = /^\w{6,18}$/;
				if(re.test(str)){
					oCon3.style.display="none";
				
				}else{
					oCon3.style.display="inline";
				}if(oTxt2.value ===oTxt3.value){
					oCon3.style.display="none";
				}
			
			}
			
			