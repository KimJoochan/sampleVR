$(document).ready(() => {
    //마우스 휠로 화면 이동
    let mWel = 0;
    let wst = $(window).scrollTop();
    let bh = $("#ban").height() + 80;
    let ih = $("#introduce").height();
    let gh = $("#graph").height();
    let inth = $("#interview").height();
    let eh = $("#employee").height();
    let hb = $('html,body');
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
    /*배너의 크기 변화*/
    $('.banner1But').click(function () {
        $('#mask').addClass('one');
        $('#banWrap').addClass('one');
        $('#maskMark').addClass('one');
        $('#scroll').css({
            top: '-150px',
            opacity: '0.7'
        })
        bh = $("#ban").height() + 80;
    });
    $('.banner2But').click(function () {
        $('#mask').removeClass('one');
        $('#banWrap').removeClass('one');
        $('#maskMark').removeClass('one');
        bh = $("#ban").height() + 80;
        $('#scroll').css({
            top: '0',
            opacity: '1'
        })
    });
    $('#scroll').click(function () {
        $('html,body').animate({
            scrollTop: bh
        });
    })
    //그래프 제이쿼리
    /*$('#canvas').mouseenter(() => {
        $('#arrow').animate({
            top: '90%'
        });
        $('#arrow2').animate({
            top: '60%'
        });
        $('#arrow3').animate({
            top: '40%'
        }, function () {
            $('#co').animateNumber({
                number: 100
            })
        });

    });
    $('#canvas').mouseleave(() => {
        $('#arrow').animate({
            top: '100%'
        });
        $('#arrow2').animate({
            top: '100%'
        });
        $('#arrow3').animate({
            top: '100%'
        });
        $('#co').text(0)
    });*/
    //직원 제이쿼라
    $('.emCir').mouseenter(function () {
        $(this).find('.c_left').animate({
            left: '-51%'
        });
        $(this).find('.c_right').animate({
            right: '-51%'
        });
    });
    $('.emCir').mouseleave(function () {
        $('.c_left').stop().animate({
            left: 0
        });
        $('.c_right').stop().animate({
            right: 0
        })
    });
    //링크 제이쿼리
    $('#linkIcon>li').mouseenter(function () {
        $(this).find('.bubble').fadeIn()
    });
    $('#linkIcon>li').mouseleave(function () {
        $('.bubble').fadeOut()
    });
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
