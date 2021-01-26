function modal(num){
    var modal = document.querySelector('.modal' + num);
    modal.style.display = "block";
}
function modalclose(){
    var modal = document.querySelectorAll('.modal');
    for(var i = 0; i<modal.length; i++){
        modal[i].style.display = "none";   
    }    
}
function block(target){
    var b_phone = [
        "01032912020",
        "01058280830",
        "01035601126",
        "01042712322",
        "01084980116",
        "01047123448",
        "01057431184",
        "01033344417",
        "01040272690",
        "01090933356",
        "01025974010",
        "01082008209",              
        "01042225921",
        "01067152388",
        "01092380269",
    ];
    if(b_phone.indexOf(target)>=0){
        return false
    }
    return true;
}

var submit = document.querySelector('.submit');
submit.addEventListener("click",function(){
    var name = document.querySelector('input[name=name]');
    var gender = document.querySelector('input[name=gender]:checked');
    var birth = document.querySelector('input[name=birth]');
    var phone1 = document.querySelector('input[name=phone1]');
    var phone2 = document.querySelector('input[name=phone2]');
    var phone3 = document.querySelector('input[name=phone3]');
    var phone =  phone1.value + phone2.value + phone3.value;
    var counseling = document.querySelector('input[name=counseling]:checked');
    var area = document.querySelector('select[name=area]');
    var agree1 = document.querySelector('input[id=agree1]');
    var agree2 = document.querySelector('input[id=agree2]');
    if(!name.value){
        alert("이름을 입력해주세요.");
        return false;
    }
    if(!gender){
        alert("성별을 체크해주세요");
        return false;
    }
    if(!birth.value || birth.value.length !== 8){
        alert("생년월일을 다시 확인해주세요");
        return false;
    }
    if(!phone || phone.length < 10){
        alert("연락처를 다시 확인해주세요");
        return false;
    }
    if(!counseling){
        alert("상담 목적을 체크해주세요");
        return false;
    }
    if(!area.value){
        alert("거주지역을 선택해주세요");
        return false;
    }
    if(!agree1.checked){
        alert("개인정보 수집 및 이용 동의에 체크해주세요");
        return false;
    }
    if(!agree2.checked){
        alert("필수안내사항에 체크해주세요");
        return false;
    }
    if(!block(phone.value)){
        alert("이미 신청하셨습니다.");
        return false;
    }
    phone = phone.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    var obj = {
        "name":name.value,
        "gender":gender.value,
        "birth":birth.value,
        "phone":phone,
        "counseling":counseling.value,
        "area":area.value,
    }
    var apiData = {
        "api_key": "9d665db1415c70b0f2f5b71507e899ea",
        "cust_nm": name.value,
        "sex": gender.value==='남성'?'1':'2',
        "birth_dt": birth.value,
        "mobile_no": phone,
        "category": counseling.value,
        "area": area.value,
    }
    console.log(obj);
    var url = "http://rsad.co.kr/client/kiwoomap_admin/index.php/front/Landing/regist";
    $.post(url,obj,function(returndata){
        console.log(returndata);        
        // Kium API Call
        $.ajax({
            url : "http://ga.kiwoomap.com/management/etc/api/common/db_list_insert.asp",
            dataType : "jsonp",
            type: "POST",    
            contentType: "x-www-form-urlencoded; charset=UTF-8",
            crossDomain: true,
            data: apiData,
            jsonp : "callback",
            async: false,
            success : function(data){
                console.log(data);
            },
            error : function(xhr, status, error){
                console.log(xhr);
            }
        });
    });
});

function callback(res) {
  console.log(res);
  if (res.result === "0") {
      location.href = "fin.html";
  } else {
      alert("에러가 발생했습니다(Code: " + res.result + ") ");
  }
}

function direct(el){
    var target = document.querySelector('.' + el);    
    window.scroll({
        behavior:"smooth",
        left:0,
        top:pageYOffset + target.getBoundingClientRect().top
    })
}
