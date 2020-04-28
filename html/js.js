$(document).ready(() => {
    /*배너 제이쿼리*/
    let ww = $(window).width();
    let baCount = 0;
    $('#b_right').click(() => {
        baCount++;
        if (baCount == 3) {
            baCount = 2;
        }
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
    //그래프 제이쿼리
    $('#canvas').mouseenter(() => {
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
    });
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
    })
    $('#linkIcon>li').mouseleave(function () {
        $('.bubble').fadeOut()
    })
    //모바일 제이쿼리
    //메뉴
    $('#nt_ham').click(function () {
        $('#mb_nav').slideToggle();
    })
    $('#mb_link_tag').click(function (e) {
        e.preventDefault();
        $('#mb_nav').slideToggle();
        $('#mb_link_modal').modal('show')
    })
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
                        },1000)
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
                        },1000)
                    }
                }).modal('show');
                break;
        }
    })
})
