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

// overcheck 컨텐츠
// const chk = document.querySelectorAll('input');
// for(let i = 0; i < chk.length; i++){
//     chk[i].addEventListener("mouseover",function(){
//         if(this.checked){
//             this.checked = false;
//             return false
//         }
//         this.checked = true;
//     })
// }

// drag 컨텐츠

// document.getElementById('drag').ondragstart = function(e) {
//     console.log(e);
//     e.dataTransfer.setData('data', this.innerHTML); // 드래그해보세요 문자열 전달
//   };
  
//   document.getElementById('drop').ondragover = function(e) {
//     e.preventDefault(); // 필수 이 부분이 없으면 ondrop 이벤트가 발생하지 않습니다.
//   };
//   document.getElementById('drop').ondrop = function(e) {
//     alert(e.dataTransfer.getData('data')); // 데이터를 가져옵니다.
//   };

// 스크롤시 채팅처럼 나오는 레이아웃 구현



// 마우스 인터랙션1 커서변경,클릭 애니메이션
// let grow = document.querySelectorAll(".mouse_interactive li");
// for(let i =0; i < grow.length; i++){;
//     let plan = [0,0,0];
//     grow[i].addEventListener('click',function(){
//         console.log(plan[i]);
//         let leaf = grow[i].querySelector(".leaf");
//         let tree = grow[i].querySelector(".tree");
//         if(!plan[i]){
//             leaf.style.display = "none";
//             tree.style.display = "inline-block";
//             plan[i] += 1;
//             return false;
//         }
//         if(plan[i]){
//             leaf.style.display = "inline-block";
//             tree.style.display = "none";
//             plan[i] = 0;
//             return false;
//         }
//     });
// }
// var animation = bodymovin.loadAnimation({
//     container: document.getElementById("bm"),
//     renderer: "svg",
//     loop: true,
//     autoplay: true,
//     path: "data/26403-smiley.json"
// });

//프로토타입 응용 숫자 카운팅
function numberCounter(target_frame, target_number) {

    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20);
    } else {
        clearTimeout(this.timer);
    }
};

new numberCounter("counter1", 121554864865);