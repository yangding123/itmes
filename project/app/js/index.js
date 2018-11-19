require(["config"], function() {
	require(["jquery", "template", "tools", "header", "footer"], function($, template, tools, header, jquerycookie) {

		//异步加载header.html
		tools.ajax("GET", "/html/component/header.html", null, function(data) {
			document.getElementsByTagName("header")[0].innerHTML = data;
		}, false);
		$.ajax({
			method: "get",
			url: "http://rap2api.taobao.org/app/mock/116510/12345",
			success: function(res) {
				//					console.log(res);
				var html = template("pro-template", {
					yangding: res.yangding
				});
				//					console.log(html);
				$("#proList").html(html);
				var lis = $("#nav li");
				for(let i=0;i<lis.length;i++){
					lis[i].onclick = function(){
						var index = i;
						var floor = $(".floor")[index];
						var end = floor.offsetTop;
						var start = document.documentElement.scrollTop;
						var speed = 1000;
						var range = end - start;
						var startTime = +new Date();
						var timer = setInterval(function(){
					var elapsed = Math.min(+new Date() - startTime, speed);
					var result = elapsed * range / speed + start;
					// 设置滚动位置
					document.documentElement.scrollTop = result;
					// 判断停止计时器
					if (elapsed === speed)
						clearInterval(timer);
				}, 1000/60);
					};
				};
				console.log(lis)
				$(".join").on("click", function() {

					
					var img = $(".pic img")[0].src;
						
					var id = $(this).parent(".operits").siblings(".id").html();
					var name =$("#proList .name").html();
					var jiage = $("#proList .price").html();
				
							console.log( $(this).parent(".operits").siblings(".name").html(),)
								console.log($(this).parent(".operits").siblings(".price").html())
				
					var oct = {
//						id: $("#proList .id").html(),
                        id:$(this).parent(".operits").siblings(".id").html(),
						name:$(this).parent(".operits").siblings(".name").html(),
						img: $(".pic img").attr("src"),
						jiage: $(this).parent(".operits").siblings(".price").html(),
						num: 1
					};
					
					var guc = $.cookie("guc");
					if(guc) // 存在 
						guc = JSON.parse(guc);
					else // 不存在
						guc = [];
//						console.log(guc);
					for(var i = 0, len = guc.length; i < len; i++) {
						if(guc[i].id == oct.id) {
							console.log(guc[i].num);
							guc[i].num++;
							break;
						}
					}
					
					if(i == len) // 将当前选购商品添加保存到数组中			
						guc.push(oct);
						console.log(guc)
				
					$.cookie("guc", JSON.stringify(guc), {
						expires: 30,
						path: "/"
					});
//					console.log("11")
				});

				
var tab = $(".imagss");
				//             console.log(tab)
				tab.click(function() {
					//             	$("p").slideUp("slow");
					$(this).siblings(".operits").slideToggle("slow");
					$(this).siblings(".pic").animate({
						opacity: '0.5'
					}, "slow");
				});

				//             console.log( $(".operits"));
			}

		})

		//promise
		//		new Promise(function(resolve, reject){
		//			tools.ajax("GET", "/html/component/header.html",null, function(data){
		//				document.getElementsByTagName("header")[0].innerHTML = data;
		//				resolve();
		//			},false);
		//		}).then(function(){
		//			header.nav();
		//		}).then(function(){
		//			alert("header交互执行完成之后的代码");
		//		})

	})
})
require(["config"], function() {
	require(["jquery", "tools", "header", "footer"], function($, tools, header, footer) {

		//异步加载header.html
		tools.ajax("GET", "/html/component/footer.html", null, function(data) {
			document.getElementsByTagName("footer")[0].innerHTML = data;
		}, false);

	})
})
require(["config"], function() {
	require(["jquery", "tools", "header", "footer"], function($, tools, header) {

		//promise
		new Promise(function(resolve, reject) {
			$("header").load("/html/component/header.html", function() {
				resolve();
			});
		}).then(function() {
			//			header.nav();
		}).then(function() {
			$(function() {

				var $ul = $("#div1 ul"),
					$imgs = $("#div1 ul li"),
					$ol = $("#div1 ol");

				var index = 0,
					len = $imgs.length,
					flag = false,
					timer = null,
					imgWidth = $imgs.eq(0).width();

				$imgs.each(function() {
					$("<li>")

						.addClass($(this).index() == 0 ? "ac" : "")
						.appendTo($ol);

				});
				$imgs.eq(0).clone(true).appendTo($ul);
				$ul.css("width", imgWidth * (len + 1));

				$ol.on("click", "li", function() {
					if(!flag) {
						flag = true;
						$(this).addClass("ac").siblings().removeClass("ac");
						index = $(this).index();
						$ul.animate({
							"left": -index * imgWidth
						}, "slow", function() {
							flag = false;
						});
					}

				})

				$("#goPrev").click(function() {
					if(!flag) {
						flag = true;
						if(--index < 0) {
							$ul.css("left", -len * imgWidth);
							index = len - 1;
							$ul.animate({
								"left": -index * imgWidth
							}, "slow", function() {
								flag = false;
							});
						} else {
							$ul.animate({
								"left": -index * imgWidth
							}, "slow", function() {
								flag = false;
							});
						}
						$ol.children().eq(index).addClass("ac").siblings().removeClass("ac");
					}
				})

				$("#goNext").click(function() {
					if(!flag) {
						flag = true;
						if(++index >= len) {
							$ul.animate({
								"left": -len * imgWidth
							}, "slow", function() {
								$ul.css("left", 0);
								//$ul.css({"left": 0});
								flag = false;
							})
							index = 0;
						} else {
							$ul.animate({
								"left": -index * imgWidth
							}, "slow", function() {
								flag = false;
							})
						}
						$ol.children().eq(index).addClass("ac").siblings().removeClass("ac");
					}
				})

				$("#div1").hover(function() {
					clearInterval(timer);
				}, (function autoPlay() {
					timer = setInterval(function() {
						$("#goNext").trigger("click");
					}, 8000);
					return autoPlay;
				})());

			})
		}).then(function() {

			//});
		})

	})
})