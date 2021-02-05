const state = {
    ev: ''
}

const handleData = {
    get: () => {
        getBanner()
        .then(c => {
            if (c.CODE === 1) {
                alert('오류가 발생하였습니다')
                return
            }

            const { main, main_mobile, popup, popup_mobile } = c.DATA

            $('#banner-pc').html(
                main.map(c => {
                    const click = c.link && `onclick='window.open("${c.link}")'`
                    return (`<li><img src="${c.src}" alt="" ${click} /></li>`)
                })
            )

            $('#banner-mobile').html(
                main_mobile.map(c => {
                    const click = c.link && `onclick='window.open("${c.link}")'`
                    return (`<li><img src="${c.src}" alt="" ${click} /></li>`)
                })
            )


            $('.banner_slide > ul').slick({
                autoplay: false,
                infinite: true,
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: false,
                responsive: [{
                  breakpoint: 991,
                  settings: {
                    arrows: false,
                  }
                }
                ]
              });


            state.ev = DETECT === 'pc' ? popup.src : popup_mobile.src

            const link = DETECT === 'pc' ? popup.link : popup_mobile.link



            if (cookies.get('ev') !== state.ev) {
                $('.event_pop_con').html(`<img src='${state.ev}' ${link && `onclick=location.href='${link}'`} />`)
                if (state.ev) $('.event_pop').show()
            } 

        })
        .catch(e => {
            console.log(e)
            alert(`오류가 발생하였습니다.n\n관리자에게 문의하세요`)
        })
    }
}


const handleEvent = {
    hide: () => {
        cookies.set('ev', state.ev)
        $('.event_pop').hide()
    }
}
handleData.get()


$('#check1').bind('click', () => handleEvent.hide())