//オープニングアニメーション　改修
const loadingElement = document.querySelector(".p-loading");
if (document.body.classList.contains("home") || document.body.classList.contains("page-template-page-en-php") || document.body.classList.contains("page-template-page-cn-php") || document.body.classList.contains("page-template-page-kr-php")) {
    if (Cookies.get('access_sample') == undefined) {
        loadingElement.style.display = 'flex';
    } else {
        loadingElement.style.display = 'none';
    }
}

window.addEventListener("load", (event) => {
    if (document.body.classList.contains("home") || document.body.classList.contains("page-template-page-en-php") || document.body.classList.contains("page-template-page-cn-php") || document.body.classList.contains("page-template-page-kr-php")) {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(0, 0, 0);
        if (Cookies.get('access_sample') == undefined) {
            Cookies.set('access_sample', 'access', {
                expires: date
            });
            loadingElement.style.display = 'flex';
            endLoading();
        } else {
            loadingElement.style.display = 'none';
            startFadeInAnimations();
        }
    }
});


// js-loadingのフェードアウト処理
function endLoading() {
    setTimeout(function() {
        var loadingElement = document.getElementById("js-loading");
        if (loadingElement) {
            $(loadingElement).fadeOut(1000, function() {
                // 特定のクラスがbodyにある場合のみアニメーションを開始
                if (document.body.classList.contains("home") || document.body.classList.contains("page-template-page-en-php") || document.body.classList.contains("page-template-page-cn-php") || document.body.classList.contains("page-template-page-kr-php")) {
                    startFadeInAnimations();
                }
            });
        }
    }, 2000); // 2秒後にフェードアウト開始
}

// アニメーションの開始
function startFadeInAnimations() {
    // すべての要素の初期状態を設定
    console.log("3");
    gsap.set(".js-fade", {
        opacity: 0,
        y: 30,
    });

    // ロゴとメニューのアニメーションを定義
    const video = document.querySelector(".p-fv__video");
    const logo = document.querySelector(".p-fv__nav-logo");
    const menu = document.querySelector(".p-fv__nav-menu");

    // タイムラインを作成し、順番に要素をフェードイン
    const tl = gsap.timeline();

    // p-fv__videoを最初にフェードイン
    tl.to(video, {
            opacity: 1,
            y: 0,
            duration: 1.5,
        })
        // p-fv__nav-logoとp-fv__nav-menuを同時にフェードイン
        .to([logo, menu], {
            opacity: 1,
            y: 0,
            duration: 1.5,
        }, "+=0.3"); // p-fv__videoが表示された後0.3秒遅らせて表示
}


jQuery(function($) { // $はjQueryを表す
    // この中にコードを書く

    // 例：クラスがc-btnのcolorを黒色にする
    // $(".c-btn").css("color","black")

    // 例：idがbuttonのテキストを変更
    // $("#button").text("ボタンのテキストを変更");

    // 例：クラスがc-btnをクリックした場合、コンソールログを出力
    // $(".c-btn").click(function() {
    //   console.log("ボタンがクリックされました！");
    // });

    $(document).ready(function() {
        // 初期幅を取得
        var previousWidth = $(window).width();

        $(window).resize(function() {
            var currentWidth = $(window).width();

            // 画面幅が768pxより大きかった状態から768px以下に切り替わる、または768px以下から768pxより大きくなる場合にリロード
            if ((currentWidth <= 768 && previousWidth > 768) || (currentWidth > 768 && previousWidth <= 768)) {
                location.reload(); // ページをリロード
            }

            // 幅の更新
            previousWidth = currentWidth;
        });
    });


    jQuery(function($) {
        // ハンバーガーメニュー
        $(function() {
            $(".js-hamburger").click(function() {
                $(this).toggleClass("is-open");
                $(".js-drawer").toggleClass("is-open");
            });

            // ドロワーナビのaタグをクリックで閉じる
            $(".js-drawer a[href]").on("click", function() {
                $(".js-hamburger").removeClass("is-open");
                $(".js-drawer").removeClass("is-open");
            });

            // resizeイベント
            $(window).on('resize', function() {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    $(".js-hamburger").removeClass("is-open");
                    $(".js-drawer").removeClass("is-open");
                }
            });
        });
    });

    $(window).on("scroll", function() {
        var scrollTriggerHeight = window.innerHeight; // 100vhの値を取得
        var scrollTop = $(window).scrollTop();

        // homeまたはpage-template-page-en-phpクラスがあるかチェック
        if ($("body").hasClass("home") || $("body").hasClass("page-template-page-en-php") || $("body").hasClass("page-template-page-cn-php") || $("body").hasClass("page-template-page-kr-php")) {
            // home または page-template-page-en-php クラスがある場合、js-fvクラスを通過したらis-scrollを付与
            var fvHeight = $(".js-fv").outerHeight(); // js-fvの高さを取得
            if (scrollTop > fvHeight) {
                $(".js-header").addClass("is-scroll");
                $(".js-video").addClass("is-scroll");
            } else {
                $(".js-header").removeClass("is-scroll");
                $(".js-video").removeClass("is-scroll");
            }
        } else {
            // 上記クラスがない場合、100vhを超えたらis-scrollを付与
            if (scrollTop > scrollTriggerHeight) {
                $(".js-header").addClass("is-scroll");
            } else {
                $(".js-header").removeClass("is-scroll");
            }
        }
    });

    const path = location.pathname;
    for (let opt of document.getElementById("select_lang").options) {
        if (opt.value == path) {
            opt.selected = true;
            break;
        }
    }











    gsap.set(".js-fadeIn", {
        opacity: 0,
        y: 30,
    });
    gsap.utils.toArray(".js-fadeIn").forEach(elm => {
        gsap.to(elm, {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
                trigger: elm,
                start: "top 90%",
                once: true,
            }
        });
    });

    jQuery(function($) {
        // サムネイル
        const menu_swiperThumbnail = new Swiper(".js-menu-slide-swiper-thumbnail", {
            slidesPerView: 1,
            spaceBetween: 50,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            },
        });

        // メイン
        const menu_swiperMain = new Swiper(".js-menu-slide-swiper-main", {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });


});

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        let target;

        // 条件分岐で#fixationの場合とそれ以外を分ける
        if (href === "#fixation") {
            target = rect + offset - 200; // #fixationはそのままの位置でスクロール
        } else {
            const headerHeight = document.querySelector(".p-header").offsetHeight; // ヘッダーの高さ
            target = rect + offset - headerHeight; // 他はヘッダーの高さを引いてスクロール
        }

        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}



jQuery(function($) {
    var fixation_swiper = new Swiper(".js-fixation-swiper", {
        speed: 1000,
        slidesPerView: 1.1,
        centeredSlides: true,
        breakpoints: {
            768: {
                slidesPerView: 1.5,
            }
        },
        navigation: {
            nextEl: ".p-fixation__next",
        },
        on: {
            slideChange: function() {
                animateSlide(this.slides[this.activeIndex]);
            }
        },
    });

    // 最初のスライドにアニメーションを適用
    animateSlide(fixation_swiper.slides[fixation_swiper.activeIndex]);

    function animateSlide(slideElement) {
        var color = slideElement.querySelector('.js-fade-right');
        var image = slideElement.querySelector('.p-fixation__slide-img-base img');
        var title01 = slideElement.querySelector('.p-fixation__slide-sub-title');
        var title02 = slideElement.querySelector('.p-fixation__slide-title');
        var speed = 1000;

        // 最初のスライドだけアニメーションを適用
        if (slideElement === fixation_swiper.slides[0] && !slideElement.classList.contains('animated')) {
            slideElement.classList.add('animated');

            // 初期スタイル設定
            if (color) color.style.width = '0%';
            if (image) image.style.opacity = '0';
            if (title01) title01.style.opacity = '0';
            if (title02) title02.style.opacity = '0';

            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        if (color) {
                            color.style.transition = 'width ' + speed / 1000 + 's ease';
                            color.style.width = '100%';

                            setTimeout(function() {
                                color.style.transition = 'opacity 1s ease';
                                color.style.opacity = '0';

                                if (image) image.style.opacity = '1';
                                if (title01) title01.style.opacity = '1';
                                if (title02) title02.style.opacity = '1';
                            }, speed);
                        }
                    }
                });
            });

            observer.observe(slideElement);
        } else {
            // 2枚目以降のスライドは画像とタイトルをそのまま表示
            if (image) image.style.opacity = '1';
            if (title01) title01.style.opacity = '1';
            if (title02) title02.style.opacity = '1';
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.p-fixation__slide-text');

    elements.forEach(function(element) {
        var counter = 0;

        if (element) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && counter === 0) {
                        element.style.transition = 'transform 1s ease, opacity 1s ease';
                        element.style.transform = 'translateY(0%)';
                        element.style.opacity = '1';
                        counter = 1;
                    }
                });
            });

            observer.observe(element);
        }
    });
});

const swiper = new Swiper(".js-fixation-sp-swiper", {
    loop: true,
    slidesPerView: 1,
    speed: 1500,
    autoplay: {
        delay: 4000,
    },
});