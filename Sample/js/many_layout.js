// flip 컨텐츠
// let list_wrap = document.querySelector(".flip_banner ul");
// let list_array = [];
// for(let i = 0; i < 65; i++){    
//     list_array.push(`<li><a href="#">링크${i + 1}</a></li>`)
// }
// list_wrap.innerHTML = list_array.join('');
// for(let i = 0; i<65; i++){  
//     let list = document.querySelectorAll(".flip_banner li a");
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);      
//     const color = `rgb(${r},${g},${b},0.7)`;
//     list[i].style.backgroundColor = color;
// }

// tab 컨텐츠
// let tablist = document.querySelectorAll(".tab_head>li");
// let tabcontent = document.querySelectorAll(".tab_body>div");
// for(let i = 0; i < tablist.length; i++){    
//     tablist[i].addEventListener("click", function(){             
//         for(let i = 0; i < tablist.length; i++){
//             tablist[i].classList.remove("on");
//             tabcontent[i].classList.remove("on");
//         }
//         tablist[i].classList.add("on");
//         tabcontent[i].classList.add("on");
//     });
// }