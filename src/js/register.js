			var	oTxt1 = document.getElementById("txt1");
			var oTxt2 = document.getElementById("txt2");
			var oTxt3 = document.getElementById("txt3");
			var oCon1 = document.getElementById("con1");
			var oCon2 = document.getElementById("con2");
			var oCon3 = document.getElementById("con3");
			var oCon4 = document.getElementById("con4")
			var oBtn = document.getElementById("btn1")
	
			var num = 0;
			oTxt1.onblur= function(){
				var str = oTxt1.value;
				var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if(re.test(str)){
					oCon1.style.display="none";	
					num ++;
				}else{
					oCon1.style.display="inline";
				}
			}	
			//设置密码
			oTxt2.onblur= function(){
				var str = oTxt2.value;
				var re = /^\w{6,18}$/;
				if(re.test(str)){
					oCon2.style.display="none";	
					num ++;
				}else{
					oCon2.style.display="inline";
				}
			}
			//确认密码
			oTxt3.onblur= function(){
				var str = oTxt3.value;
				var re = /^\w{6,18}$/;
				if(re.test(str)){
					oCon3.style.display="none";
					num ++;
				}else{
					oCon3.style.display="inline";
				}if(oTxt2.value ===oTxt3.value){
					oCon3.style.display="none";
				}
			
			}
			
	var codeV = document.getElementById('code');
   	function createCode(){
        code = '';
        var codeLength = 4;       
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        for(var i = 0; i < codeLength; i++){
             var index = Math.floor(Math.random()*36);
             code += random[index]; 
        }
        codeV.value = code;
    }
   	var oTxt4 = document.getElementById("txt4");
   	oTxt4.onblur = function(){   		
   		if(codeV.value ===oTxt4.value){
   			oCon4.style.display="none";
   			num ++
   		}else{
   			oCon4.style.display="inline";
   		}
   	}
   	//提交
		oBtn.onclick = function(){
			if(num==4){
				alert("注册成功！");
			}else{
				alert("注册失败！请完善信息！")
			}
				
			}

   	
   	
   	
			
			