require(["config"], function() {
			require(["jquery", "tools", "template", "header", "footer"], function($, tools, template, header, footer) {
					new Promise(function(resolve, reject) {
						$("header").load("/html/component/header.html", function() {
							resolve();

						})
						$("footer").load("/html/component/footer.html", function() {

						})

					}).then(function() {
							var str = location.search.slice(1);
							var arr = str.split("="); // ["id","3"];
							var obj = {};
							obj[arr[0]] = arr[1];

							$.ajax({
									method: "get",
									url: "http://rap2api.taobao.org/app/mock/116947/345",
									success: function(res) {

										var html = template("pro-tem", {
											yangding: res.yangding
										});

										//						a.click(function(){
										//							alert("ff")
										//						})
										//console.log(html);
										$("#proLists").html(html);
										$("#tab-bouttom img").click(function() {
											$(this).addClass("ac").siblings().removeClass("ac");
											//$("#tab img").eq($(this).index()).addClass("ac").siblings().removeClass("ac");
											$("#pic img").eq($(this).index()).show().siblings().hide();

											//$(this).addClass("ac").siblings().removeClass("ac").parent().next().children().eq($(this).index()).show().siblings().hide();

										})
										var a = $(".fangru");
										a.click(function() {

													//获取当前需要加入购物车的商品信息
													var oct = {
														id: $(".ids").html(),
														img: $(".imgs").attr("src"),
														name: $(".name").html(),
														desc: $(".desc").children().html(),
														jiage: $(".price").html(),

														num: 1,
													};
													//						 查询cookie中是否存在已有选购的购物车数组保存，
													//						 如果有则直接使用，没有创建新数组
													var guc = $.cookie("guc");
													//存在
													if(guc)
														guc = JSON.parse(guc);
													else
														guc = [];
													for(var i = 0, len = guc.length; i < len; i++) {
														if(guc[i].id == oct.id){
																guc[i].num++;
																break;
															};
														};
														if(i == len)
															// 将当前选购商品添加保存到数组中
															guc.push(oct)

														$.cookie("guc", JSON.stringify(guc), {
															expires: 30,
															path: "/"
														//console.log($.cookie("cook1"))
														//console.log(spneirong);
													});
                                                  });
												var tab = $("#dier");
												tab.click(function() {
													$(this).addClass("spec").siblings().removeClass("spec");
													//第二 
													$("#guidss").css("display", "none");
													$("#guidsss").css("display", "none");
													$("#guids").css("display", "none");
													$("#guid").css("display", "block");
													$("#canju").css("display", "none");
													$("#canjus").css("display", "block");
													$("#canjuss").css("display", "none");
													$("#canjussss").css("display", "none");
													$("#qie").css("display", "none");
													$("#qies").css("display", "block");
													$("#qiess").css("display", "none");
													$("#qiesss").css("display", "none");
													$("#tiqian").css("display", "block");
													$("#tiqians").css("display", "none");
												});
												//第一
												$(".spec").click(function() {
													$(this).addClass("spec").siblings().removeClass("spec");
													$("#guids").css("display", "block");
													$("#guid").css("display", "none");
													$("#guidss").css("display", "none");
													$("#guidsss").css("display", "none");
													$("#canju").css("display", "block");
													$("#canjus").css("display", "none");
													$("#canjuss").css("display", "none");
													$("#canjussss").css("display", "none");
													$("#qie").css("display", "block");
													$("#qies").css("display", "none");
													$("#qiess").css("display", "none");
													$("#qiesss").css("display", "none");
													$("#tiqian").css("display", "block");
													$("#tiqians").css("display", "none");
												});
												//第三{}
												$("#disan").click(function() {
													$(this).addClass("spec").siblings().removeClass("spec");
													$("#guids").css("display", "none");
													$("#guid").css("display", "none");
													$("#guidss").css("display", "block");
													$("#guidsss").css("display", "none");
													$("#canju").css("display", "none");
													$("#canjus").css("display", "none");
													$("#canjuss").css("display", "block");
													$("#canjussss").css("display", "none");
													$("#qie").css("display", "none");
													$("#qies").css("display", "none");
													$("#qiess").css("display", "block");
													$("#qiesss").css("display", "none");
													$("#tiqian").css("display", "block");
													$("#tiqians").css("display", "none");
												});
												//第四
												$("#disi").click(function() {
													$(this).addClass("spec").siblings().removeClass("spec");
													$("#guids").css("display", "none");
													$("#guid").css("display", "none");
													$("#guidss").css("display", "none");
													$("#guidsss").css("display", "block");
													$("#canju").css("display", "none");
													$("#canjus").css("display", "none");
													$("#canjuss").css("display", "none");
													$("#canjuss").css("display", "block");
													$("#qie").css("display", "none");
													$("#qies").css("display", "none");
													$("#qiess").css("display", "none");
													$("#qiesss").css("display", "block");
													$("#tiqian").css("display", "none");
													$("#tiqians").css("display", "block");
												});
										},
											complete: function() {
												var middle = tools.$("#pic"),
													len = tools.$("#len"),
													big = tools.$("#fangda"),
													bigImg = tools.$("#img2"),
													middleX = middle.parentNode.offsetLeft,
													middleY = middle.parentNode.offsetTop;
												console.log(bigImg)
												/* 鼠标移入/移出中图盒子范围 */
												tools.on(middle, "mouseenter", function() {
													len.style.display = "block";
													big.style.display = "block";
												});
												tools.on(middle, "mouseleave", function() {
													len.style.display = "none";
													big.style.display = "none";
												});
												/* 鼠标在中图盒子内移动，镜头跟随鼠标移动 */
												tools.on(middle, "mousemove", function(event) {
													// 获取光标坐标
													var x = event.pageX - middleX - 100,
														y = event.pageY - middleY - 100;

													// 判断坐标是否在合理范围内
													if(x <= 0) // 左
														x = 0;
													else if(x >= 300) // 右
														x = 300;
													if(y <= 0) // 上
														y = 0;
													else if(y >= 300) // 下
														y = 300;
													// 镜头坐标放置到光标位置处
													len.style.left = x + "px";
													len.style.top = y + "px";
													//					console.log(x,y)
													/* div#big内图片移动 */
													bigImg.style.left = -2 * x + "px";
													bigImg.style.top = -2 * y + "px";

												});
											}

									});

							}).then(function() {

							//            var a =tools.$("#gouwu");
							//            console.log(a)
							//              a.onclick()=function(){
							//              	alert("d");
							//              }
						});

					});
			});