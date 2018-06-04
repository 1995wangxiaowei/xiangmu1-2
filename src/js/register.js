	var	oTxt1 = document.getElementById("txt1");
			var oTxt2 = document.getElementById("txt2");
			var oTxt3 = document.getElementById("txt3");
			var oCon1 = document.getElementById("con1");
			var oCon2 = document.getElementById("con2");
			var oCon3 = document.getElementById("con3");
			var oCon4 = document.getElementById("con4")
	
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
			
	var codeV = document.getElementById('code');
   	function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;       
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 6
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.value = code;
    }
   	var oTxt4 = document.getElementById("txt4");
   	oTxt4.onblur = function(){   		
   		if(codeV.value ===oTxt4.value){
   			oCon4.style.display="none";
   		}else{
   			oCon4.style.display="inline";
   		}
   	}
   	
   	
			
			