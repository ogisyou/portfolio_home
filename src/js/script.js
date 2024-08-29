  /*
Slider
  ================================================ */
$(document).ready(function() {
  // 自動で画像のスライド移動させる
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000, // スライド切り替えの間隔（ミリ秒）
    speed: 1000, // スライド切り替えのアニメーション速度（ミリ秒）
    fade: true, // フェード効果を有効にする
    cssEase: 'linear' // アニメーションのイージング
  });


    /*
  Burger menu
  ================================================ */
  $(document).ready(function() {
    const menuButton = $('.fa-bars');
    const closeButton = $('#close-menu');
    const mobileMenu = $('#mobile-menu');
  
    // メニューを開く
    menuButton.click(function() {
      mobileMenu.removeClass('-translate-x-full'); // メニューを開く
      $('body').css('overflow', 'hidden'); // スクロールバーを非表示にする
    });
  
    // メニューを閉じる（閉じるボタンをクリック）
    closeButton.click(function() {
      mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
      $('body').css('overflow', ''); // スクロールバーを元に戻す
    });
  
    // メニューのリンクをクリックした際にメニューを閉じる
    $('#mobile-menu a').click(function() {
      mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
      $('body').css('overflow', ''); // スクロールバーを元に戻す
    });
  
    // メニュー以外をクリックした場合にメニューを閉じる
    $(document).click(function(event) {
      if (!$(event.target).closest('#mobile-menu, .fa-bars').length) {
        if (!mobileMenu.hasClass('-translate-x-full')) {
          mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
          $('body').css('overflow', ''); // スクロールバーを元に戻す
        }
      }
    });
  });
  
  
});


  /*
  Sticky header
  ================================================ */
$(document).ready(function() {
  // sticky header
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
 
      if (value > fvHeight) {
        $header.addClass(fixedClass);
      } else {
        $header.removeClass(fixedClass);
      }
    
  });



  /*
  Loading screen
  ================================================ */

  $(window).on('load', function() {
    const $loadingAreaBlack = $('.loading');
    const $loadingAreaWhite = $('.loading-screen');
    const $loadingText = $('.loading-screen p');
  
    // ローディング中（ブラック）
    setTimeout(function() {
      $loadingAreaBlack.addClass('fadeOut');
      setTimeout(function() {
        $loadingAreaBlack.css('visibility', 'hidden');
      }, 2000); // アニメーションの時間に合わせる
    }, 1200); // ディレイ時間
  
    // ローディング中（ホワイト）
    setTimeout(function() {
      $loadingAreaWhite.addClass('slideInOut');
    }, 800); // ディレイ時間
  
    // ローディング中テキスト
    $loadingText.addClass('textFadeOut');
  });
  
  
  /*
  Darkmode screen
  ================================================ */

  // ヘッダーのスイッチ
  $('#header-switch').on('click', function() {
    $('body').toggleClass('dark'); // ダークモードをトグル
    const isOn = $(this).toggleClass('on').hasClass('on');
    $('#header-switchBall').css('transform', isOn ? 'translateX(30px)' : 'translateX(0)').attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });

  // モバイルメニューのスイッチ
  $('#mobile-switch').on('click', function() {
    $('body').toggleClass('dark'); // ダークモードをトグル
    const isOn = $(this).toggleClass('on').hasClass('on');
    $('#mobile-switchBall').css('transform', isOn ? 'translateX(30px)' : 'translateX(0)').attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });



  /*
  Header stand out
  ================================================ */


// ヘッダーの文字を浮き上がらせる
$(document).ready(function() {
  const startValue = -50; // 初期のY軸の位置
  const endValue = 0;     // 最終のY軸の位置

  $({ y: startValue, opacity: 0 }).animate({ y: endValue, opacity: 1 }, {
    duration: 5000,
    easing: 'swing',  // easingを設定する
    step: function(now, fx) {
      if (fx.prop === 'y') {
        $('.header').css('transform', 'translateY(' + now + 'px)');
      } else if (fx.prop === 'opacity') {
        $('.header').css('opacity', now);
      }
    }
  });
});


  /*
  Screen enalaregemnt
  ================================================ */
// worksの画像を順番に表示
$(document).ready(function() {
  const $items = $('.works-img');

  const showWorks = () => {
    $items.each(function(index) {
      const $item = $(this);
      const windowHeight = $(window).height();
      const itemTop = $item.offset().top;
      const scrollTop = $(window).scrollTop();

      if (scrollTop + windowHeight > itemTop) {
        setTimeout(function() {
          $item.addClass('revealed');
        }, index * 300);
      }
    });
  };

  $(window).on('scroll', showWorks);
  showWorks();

  // hover拡大効果
  $items.on('mouseover', function() {
    $(this).addClass('hovered');
  }).on('mouseout', function() {
    $(this).removeClass('hovered');
  });
});




  /*
Section-title stand out 
  ================================================ */


// section-titleを下から浮き上がらせる

$(document).ready(function() {
  function checkVisibility() {
    $('.section-title').each(function() {
      const $this = $(this);
      const elementTop = $this.offset().top;
      const windowTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (elementTop < windowTop + windowHeight) {
        $this.addClass('visible');
      }
    });
  }

  $(window).on('scroll', checkVisibility);
  $(window).on('load', checkVisibility); // For initial load
});
});




