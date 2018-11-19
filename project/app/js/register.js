require(["config"], function(){
	require(["jquery", "tools", "header", "footer"], function($,tools,header,footer){

		//promise
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				resolve();
			});
		}).then(function(){
			$("footer").load("/html/component/footer.html", function(){
//				resolve();
			});
		}).then(function(){
			tools.$('.btn_register')[0].onclick = function(e){
				var input1 = tools.$('.u_phone')[0].value,
					input2 = tools.$('.u_pwd')[0].value;
					if(input1==""||input2==""){
//						alert("请输入手机号")
						return;
					}
					console.log(input1,input2)
				var options = {
					"u_phone" : input1,
					"u_pwd" : input2
				};
				console.log(options)
			tools.ajax("POST", "http://localhost/twopractice/second/pratice/day5/user/v1/register.php",options, function(data){
				console.log(data)
				if(data.code===1){
					window.location.href="/index.html";
				}else{
			      alert("添加失败！");
		         }
			      
			     
			  },true);
//			  e.preventDefault();
			  return false;
			}

		})

         .then(function(){
	         var name = tools.$(".u_phone")[0];
	         var ltelphone = tools.$("#lname");
	         var pass = tools.$(".u_pwd")[0];
	         var pwds = tools.$(".u_pwds")[0];
	         var lpass  =tools.$("#lpass");
	         var lpass2 = tools.$("#lpass2");
	        name.onblur = function(){
				var telValue = name.value;
				var pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(pattern.test(telValue)){
					ltelphone.innerHTML="正确"
				}
				else if(telValue =="" || telValue==null){
					ltelphone.innerHTML="手机号码不能为空!" ;
				}
				else{
					ltelphone.innerHTML="手机号输入错误" ;
				}
			}
	        pass.onblur = function(){
				var passValue = pass.value;
				var pattern = /^.{6,}$/;  
				if(!pattern.test(passValue)){
					 lpass.innerHTML="密码长度在六位以上";
				}else{
					lpass.innerHTML="正确";
				}
				

			}
	        
	       pwds.onblur = function(){
				
				var passValue = pass.value;	
			var pass2Value = pwds.value;
				if(pass2Value =="" || pass2Value==null){
					lpass2.innerHTML="密码不能为空";
				}
				else if(passValue == pass2Value){
					lpass2.innerHTML="输入正确";
				}
				else if(passValue!=pass2Value){
					lpass2.innerHTML="两次输入不一致";
				}

			}
	        
	        
	        
	        

			});

	})
})