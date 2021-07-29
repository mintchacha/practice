$(document).ready(function() {
	// function tests(){
  var fridge_air =
    '<li class="fridge_air"><img src="../images/product/fridge_01.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_02.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_03.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_04.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_05.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_06.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/fridge_07.jpg" alt=""/></li>' +
	'<li class="fridge_air"><img src="../images/product/fridge_08.jpg" alt=""/></li>'+
	'<li class="fridge_air"><img src="../images/product/fridge_09.jpg" alt=""/></li>'+
	'<li class="fridge_air"><img src="../images/product/fridge_10.jpg" alt=""/></li>'+
	'<li class="fridge_air"><img src="../images/product/fridge_11.jpg" alt=""/></li>'+
	'<li class="fridge_air"><img src="../images/product/fridge_12.jpg" alt=""/></li>'+
	'<li class="fridge_air"><img src="../images/product/air_01.jpg" alt=""/></li>' +
	'<li class="fridge_air"><img src="../images/product/air_02.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/air_03.jpg" alt=""/></li>' +
    '<li class="fridge_air"><img src="../images/product/air_04.jpg" alt=""/></li>' +
	'<li class="fridge_air"><img src="../images/product/air_05.jpg" alt=""/></li>' ;
		
	var note =
    '<li class="note"><img src="../images/product/note_01.jpg" alt=""/></li>' +
    '<li class="note"><img src="../images/product/note_02.jpg" alt=""/></li>' +
    '<li class="note"><img src="../images/product/note_03.jpg" alt=""/></li>' +
    '<li class="note"><img src="../images/product/note_04.jpg" alt=""/></li>';
    // '<li class="note"><img src="../images/product/note_05.jpg" alt=""/></li>' +
    // '<li class="note"><img src="../images/product/note_06.jpg" alt=""/></li>' +
	// '<li class="note"><img src="../images/product/note_07.jpg" alt=""/></li>';
	var clothing_mask =
    '<li class="clothing_mask"><img src="../images/product/clothing_01.jpg" alt=""/></li>' +
    '<li class="clothing_mask"><img src="../images/product/clothing_02.jpg" alt=""/></li>' +
	'<li class="clothing_mask"><img src="../images/product/mask_01.jpg" alt=""/></li>' +
	'<li class="clothing_mask"><img src="../images/product/mask_02.jpg" alt=""/></li>';
	var tv =
		'<li class="tv"><img src="../images/product/tv_01.jpg" alt=""/></li>' +
		'<li class="tv"><img src="../images/product/tv_02.jpg" alt=""/></li>' +
    '<li class="tv"><img src="../images/product/tv_03.jpg" alt=""/></li>' +
    '<li class="tv"><img src="../images/product/tv_04.jpg" alt=""/></li>' +
		'<li class="tv"><img src="../images/product/tv_05.jpg" alt=""/></li>';
	var washer =
		'<li class="washer"><img src="../images/product/washer_01.jpg" alt=""/></li>' +
		'<li class="washer"><img src="../images/product/washer_02.jpg" alt=""/></li>' +
		'<li class="washer"><img src="../images/product/washer_03.jpg" alt=""/></li>' +
    '<li class="washer"><img src="../images/product/washer_04.jpg" alt=""/></li>' +
    '<li class="washer"><img src="../images/product/washer_05.jpg" alt=""/></li>' +
		'<li class="washer"><img src="../images/product/washer_06.jpg" alt=""/></li>';
  var vacuum =
		// '<li class="vacuum"><img src="../images/product/vacuum_01.jpg" alt=""/></li>' +
		'<li class="vacuum"><img src="../images/product/vacuum_02.jpg" alt=""/></li>' +
		'<li class="vacuum"><img src="../images/product/vacuum_03.jpg" alt=""/></li>' +
		'<li class="vacuum"><img src="../images/product/vacuum_04.jpg" alt=""/></li>' +
		'<li class="vacuum"><img src="../images/product/vacuum_05.jpg" alt=""/></li>';
  var ride =
		'<li class="vacuum"><img src="../images/product/ride_01.jpg" alt=""/></li>' +
		'<li class="vacuum"><img src="../images/product/ride_02.jpg" alt=""/></li>' +

  
	sliderInit();

	$('.checkbox_wrap input[type=checkbox]').on('change', function(e) {
		if ($('.checkbox_wrap input[type=checkbox]:checked').length > 2) {
			$(this).prop('checked', false);
		}
	});

	$('.checkbox_wrap li').each(function() {
		var ckID = $(this)
			.find('input[type=checkbox]')
			.attr('id');

		$(this)
			.find('input[type=checkbox]')
			.change(function() {
				if (ckID == 'fridge_air') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', fridge_air);
					} else {
						$('.slider li.fridge_air').remove();
					}
				} else if (ckID == 'note') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', note);
					} else {
            $('.slider li.note').remove();
					}
				} else if (ckID == 'clothing_mask') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', clothing_mask);
					} else {
						$('.slider li.clothing_mask').remove();
					}
				} else if (ckID == 'tv') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', tv);
					} else {
						$('.slider li.tv').remove();
					}
				} else if (ckID == 'washer') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', washer);
					} else {
						$('.slider li.washer').remove();
					}
				} else if (ckID == 'vacuum') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', vacuum);
					} else {
						$('.slider li.vacuum').remove();
					}
				} else if (ckID == 'ride') {
					if ($(this).is(':checked')) {
						$('.slider').slick('slickAdd', ride);
					} else {
						$('.slider li.vacuum').remove();
					}
				}
			});
	});

	// $('.step01 .next_btn').click(function() {
    // $('.slider').slick('reinit');
		// $('.slider').slick('setPosition');
		// setTimeout(function() {
		// 	if($('.slider').hasClass('slick-initialized')) {
    //     $('.slider').slick("unslick");
    //   }
		// }, 50);
	// });
});
function sliderInit() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		initialSlide: 0
	});

	$(".slider").on('afterChange', function(event, slick, currentSlide){
		gtag('event', '가전종류_다음_btn', {
				'event_category': '가전종류',
				'event_label': '가전종류_다음_btn'
		});
		gtag('config', 'UA-136518726-1', {
				'page_title': '가전종류'
		});
  });
}
