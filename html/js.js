$(document).ready(() => {
    //마우스 휠로 화면 이동
    let mWel = 0;
    let wst = $(window).scrollTop();
    let bh = Math.ceil($("#ban").height() + 80);
    let ih = $("#introduce").height();
    let gh = $("#graph").height();
    let inth = $("#interview").height();
    let eh = $("#employee").height();
    let hb = $('html,body');
    /*네비 제이쿼리*/
    $('#showForm').click(function () {
        $('#form').fadeToggle()
    })
    $('#alwaysTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        })
    })

    //퀵버튼 제이쿼리
    let plus = true;
    $('#plus').click(function () {
        if (plus) {
            $('#alwaysDis').animate({
                height: 345
            });
            $('#alwaysDis > li').animate({
                marginTop: '15px'
            }, 500)
            $('#alwaysDis').append($(this))
        } else {
            $('#alwaysDis').animate({
                height: 50
            });
            $('#alwaysDis > li').animate({
                marginTop: '0'
            }, 500)
            $('#alwaysDis').prepend($(this))
        }
        plus = !plus;
    })
    $('#scroll').click(function () {
        $('html,body').animate({
            scrollTop: bh
        });
    })
    //폼 화면에서의 제이쿼리
    $("#close").click(function () {
        $('#form').fadeToggle()
    })
    /*배너 제이쿼리*/
    let ww = $(window).width();
    let baCount = 0;
    $('#b_right').click(() => {
        baCount++;
        if (baCount >= 4) {
            baCount = 4;
        }
        console.log(baCount)
        $('#banWrap').animate({
            left: -ww * baCount
        }, 1000, 'easeOutQuad')
    })
    $('#b_left').click(() => {
        baCount--;
        if (baCount == -1) {
            baCount = 0;
        }
        $('#banWrap').animate({
            left: -ww * baCount
        }, 1000, 'easeInQuad')
    })
    $(window).scroll(function () {
        wst = $(window).scrollTop();
        ww = $(window).width();
        if (ww >= 1200) {
            if (wst == 0) {
                $('#scroll').show()
            } else {
                $('#scroll').fadeOut(500)
            }
        }
    })
    //브랜드 리스트 제이쿼리
    for (let i = 1; i <= 59; i++) {
        if(i<10){   
            i='0'+i;
        }
        $('#listImg').append(`<li><img src="img/list/list_${i}.gif"></li>`);
    }
    //모바일 제이쿼리
    //메뉴
    $('#nt_ham').click(function () {
        $('#mb_nav').slideToggle();
    });
    if (ww >= 1185) {
        $('#mb_nav').hide();
    } else if (ww < 1185 && ww >= 684) {
        $('#mb_nav').show();
    } else if (ww < 684) {
        $('#mb_nav').hide();
    }
    $(window).resize(function () {
        ww = $(window).width();
        console.log(ww)
        if (ww >= 1185) {
            $('#mb_nav').hide();
        } else if (ww < 1185 && ww >= 684) {
            $('#mb_nav').show();
        } else if (ww < 684) {
            $('#mb_nav').hide();
        }
    });
    $('#mb_link_tag').click(function (e) {
        e.preventDefault();
        if (ww < 1185 && ww >= 684) {
            $('#mb_nav').show();
        } else if (ww < 684) {
            $('#mb_nav').hide();
        }
        $('#mb_link_modal').modal('show')
    });
    //스와이퍼
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //모바일 나는 누구인가 자세 설명
    $('#mb_more').click(function () {
        $('#mb_more_dis').modal('show')
    });
    /*모바일 인터뷰*/
    $("#mb_pag>li").click(function () {
        var ind = $(this).index();
        $("#mb_pag>li").removeClass('on');
        $(this).addClass('on');
        $('#mb_int_wrap>li').fadeOut();
        $('#mb_int_wrap>li').eq(ind).fadeIn(500);
    })
    /*모바일 클립보드에 문자 저장*/
    var clipboard = new Clipboard('.mbtn');
    clipboard.on('success', function (e) {
        console.log("Success");
        /*
        아래 함수를 통해서 블록지정을 없앨 수 있습니다.
        */
        var selection = window.getSelection();
        selection.removeAllRanges();
    });
    clipboard.on('error', function (e) {
        console.log("Fail");
    });
    //모바일 modal
    $('.mblinkBut>li').click(function () {
        let ind = $(this).index();
        switch (ind) {
            case 0:
                $("#kakao").modal('setting', {
                    closable: false,
                    onDeny: function () {
                        return true;
                    },
                    onApprove: function () {
                        $('.tool_kakao').css({
                            visibility: 'visible'
                        });
                        setTimeout(function () {
                            $('.tooltiptext').css({
                                visibility: 'hidden'
                            });
                        }, 1000)
                    }
                }).modal('show');
                break;
            case 1:
                $("#phone").modal('setting', {
                    closable: false,
                    onDeny: function () {
                        return true;
                    },
                    onApprove: function () {
                        document.location.href = 'tel:010-1234-1234'
                    }
                }).modal('show');
                break;
            case 2:
                $("#email").modal('setting', {
                    closable: false,
                    onDeny: function () {
                        return true;
                    },
                    onApprove: function () {
                        $('.tool_email').css({
                            visibility: 'visible'
                        });
                        setTimeout(function () {
                            $('.tooltiptext').css({
                                visibility: 'hidden'
                            });
                        }, 1000)
                    }
                }).modal('show');
                break;
        }
    })
})
