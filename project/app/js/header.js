require(["config"], function(){
	require(["jquery", "template","tools", "header", "footer","jquerycookie"], function($,template,tools,header,footer,jquerycookie){
	 var products=$.cookie("username");
	 
				 console.log(products)
				 if(products){
				 	 tools.$(".portal")[0].style.display="none";
				 tools.$(".info")[0].innerHTML =products;
				  tools.$(".login_active")[0].style.display="block";
				 }else{
				 	 tools.$(".portal")[0].style.display="block";
				 }
				   tools.$(".info")[0].onclick=function(){
				   	tools.$(".plist")[0].style.display="block";
				   }
				    tools.$(".login_active")[0].onmouseleave=function(){
				   	tools.$(".plist")[0].style.display="none";
				   }
				    tools.$(".tuichu")[0].onclick =function(){
				    	$.cookie("username",products,{
						
								expires:-1,path:"/"
							})
				    }
				
				  
				 
})
})