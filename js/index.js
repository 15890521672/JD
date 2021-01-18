$(function() {

	// 吸顶效果

	$(function() {
		$(window).scroll(function() {
			var scr = $(document).scrollTop();
			if (scr > 44) {
				$(".pageHeader").addClass("fixed");
			} else {
				$(".pageHeader").removeClass("fixed");
			}
		})
	})

	var mySwiper = new Swiper('.slide .swiper-container', {
		// direction: 'vertical', // 垂直切换选项
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
			delay: 3000, //1秒切换一次
			disableOnInteraction: false,
		},
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
	})
	var mySwiper = new Swiper('.menuBox .swiper-container', {
		// direction: 'vertical', // 垂直切换选项
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
		observeParents: true, //修改swiper的父元素时，自动初始化swiper
	})

	//商品列表
	goodsList()

	function goodsList() {
		$.ajax({
			type: "get",
			url: "./data/goodsList.json",
			dataType: "json",
			success: function(res) {
				console.log(res);
				var oGoodsList = $(".goods-list");
				var arr = res.data;
				$.each(arr, function(index, item) {
					oGoodsList.append(
						`<li ip=${item.ip}>
						<a href="#">
							<img data-original=${item.dataSrc} class="lazy" alt="">
							<div class="goods-msg">
								<p class="goods-name">${item.dic}</p>
								<div class="money">
									<span class="price">￥<b>${item.price}</b></span>
									<span class="xs">看相似</span>
								</div>
							</div>
						</a>
					</li>`
					)
				})
				
				$('.lazy').lazyload({
					threshold: 200, //滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉  
					effect: 'fadeIn' //show fadeIn slideDown  
					//placeholder: '',//设置加载中的占位图片路径，如image.load.gif，个人建议不设置，可以通过css设置背景图片加提前设置src=reload.gif的方式，来达到图片正在加载中的效果  
					// container: $(".a3"), //如果是滚动某个div，一定要在这里设置  
				});
			}
		})
	}


	function lazyload() {
		


	}

})
