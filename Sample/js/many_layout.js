$('.chat_slide').slick({    
    slidesToShow: 5,
    vertical: true,
    autoplay:true,
    autoplaySpeed:1000,    
    draggable:false,
    pauseOnHover : false
});
$(".slick-arrow").hide();

// var count = 0;
// var price = [4523,16000,5422,7896]
// function random_price(){
//     var target = document.querySelector('.change_money');
//     var write = price[count]
//     target.innerText = write
//     count ++;
//     if(count > 3){
//         count = 0
//     }
// }
// setInterval(random_price,1000);

var text = document.querySelector('.change_money');

