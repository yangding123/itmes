require(["config"], function() {
	require(["jquery", "template", "tools", "header", "footer", "jquerycookie"], function($, template, tools, header, footer, ) {

		//promise
		new Promise(function(resolve, reject) {
				$("header").load("/html/component/header.html", function() {
					resolve();
				});

			}).then(function() {
				$("footer").load("/html/component/footer.html", function() {
					//			resolve();
				});
			}).then(function() {
				//			alert("dd")
				//			 //读取cooke
				var tbody = $(".list_container");

				var guc = $.cookie("guc");
				var html = "";
				//			console.log("11");
								//			console.log(11)
				if(guc)
					guc = JSON.parse(guc);
				else
					guc = [];

				//			$(".empty").css({ "display": "block" });
                 	
				if(guc.length===0){
					   
						$(".tu").show().siblings(".list_container").hide()
						
					}else{
						$(".tu").hide().siblings(".list_container").show()
					}	
				guc.forEach(function(prod) {
					html += `<ul class="da">
					
				<li class="erer">
				<p class="ids">${prod.id}</p>
				
				<div class="item_contem">
					<div class ="c_cbox"><a href="#" class="btnss"></a></div>
					<div class="c_products"><a href="#" class="imgf"><img src="${prod.img}"></a>
						<div class="text">
							<div class="children_d"><p class="cn">${prod.name}</p></div>
						</div>
				</div> 
				<div class="c_amount">
					<div class="content_c"><a href="javascript:;" class="btn_jian"></a>
						<input type="text_t" class="txt-amount" value="${prod.num}">
						<a href="javascript:;" class="btnss_add"></a>
					</div>
				</div>
				<div class="c_price">${prod.jiage}</div>
				
				<div class="o_operates"><a href="javascript:;"class="btn_del">删除</a></div>
			  			 	
				</li>
				
				

				</div>
				
				</ul>`
    zongs();
				});
                 tbody.html(html);
                 
                 //删除商品
                 
                 $(".da").on("click",$(".btn_del"),function(event){
                 	
				var src = event.target;
				if (src.className === "btn_del") { // 删除
					var _tr = src.parentNode.parentNode.parentNode;
					console.log(_tr)
					
					var _id = _tr.children[0].innerText;
					var name = _tr.children[1].innerHtml;
					// 查找当前商品行元素在数组中的下标
					console.log(_id)
					
					for (var i = 0, len = guc.length; i < len; i++) {
						console.log(1)
						if (guc[i].id == _id||guc[i].name == name) {
							// 从 products 数组中删除当前行商品对应的数组元素
							
							guc.splice(i, 1);
							break;
						}
					};
//					console.log(guc)
					// 从 cookie 中将当前商品行的数据移除
					$.cookie("guc", JSON.stringify(guc), {expires:30, path:"/"});
				if(guc.length===0){
						location.reload(true);
					}
				
					_tr.parentNode.removeChild(_tr);
					zongs();
				}
				
			});
			
			//修改商品数量
	$(".da").on("click",$(".content_c"),function(event){
		             var zong = $("#mons");
				
				var src = event.target;
				if(src.className === "btn_jian"||src.className === "btnss_add"){
					var _tr = src.parentNode.parentNode.parentNode.parentNode;
					var _id = _tr.children[0].innerText;
					
 // 					console.log(3333)
// 					console.log(_id)
					// 获取修改数量的商品对象
					var currProd = null;
					for (var i = 0; i < guc.length; i++) {
						if(guc[i].id == _id) {
							currProd = guc[i];
							break;
						}
					}
					
					// 修改当前商品对象的数量
					if (src.className === "btnss_add"){
						var num = currProd.num++; 
					}	
					else {
						if (currProd.num <= 1)
							return;
						currProd.num--;
					}
					$.cookie("guc", JSON.stringify(guc), {expires:30, path:"/"});
					// 显示的商品数量与小计修改
					_tr.children[1].children[2].children[0].children[1].value = currProd.num;
					zongs();
				} 
		});
			//计算总价
			function zongs(){
				
						var allPrice = 0;
						//遍历json，累加每一条商品的总价
						for(var item of guc){
							allPrice += item.num * item.jiage;
						}
						
						$("#mons").html(allPrice);
						
			
			};

			              
	});		

	});
});