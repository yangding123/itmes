//require(["config"], function(){
//	require(["jquery", "template","tools", "header", "footer"], function($,template,tools,header,footer){
//
//		//异步加载header.html
//		tools.ajax("GET", "/html/component/header.html",null, function(data){
//			document.getElementsByTagName("header")[0].innerHTML = data;
//		},false);
//		tools.ajax("GET", "/html/component/footer.html",null, function(data){
//			document.getElementsByTagName("footer")[0].innerHTML = data;
//		},false);
//		
require(["config"], function(){
	require(["jquery", "template","tools", "header", "footer","jquerycookie"], function($,template,tools,header,footer,){

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
			
			tools.$('.btn_logo')[0].onclick = function(){
				var input1 = tools.$('.uName')[0].value,
					input2 = tools.$('.uPwd')[0].value;
				var options = {
					"uName" : input1,
					"uPwd" : input2
				};
			tools.ajax("POST", "http://localhost/twopractice/second/pratice/day5/user/v1/login.php",options, function(data){
				if(data.code){
					$.cookie("username",input1,{
						
								path:"/"
							})
					console.log(input1);
					location.href="/index.html";
//					 var products=$.cookie("username");
//					 console.log(products)
//					 var pp =  tools.$(".portal")[0];
//
//					 console.log(pp);
					 
				}
			     
			      
			      else  tools.$("#rer_tip").style.display="block";
			  },true);
			}
		})



	})
})