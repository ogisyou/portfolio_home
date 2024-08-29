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

  // うまくできていない？？？？？？？？？？

// ローディング画面の処理
window.addEventListener('load', () => {
  const loadingAreaGrey = document.querySelector('.loading');
  const loadingAreaGreen = document.querySelector('.loading-screen');
  const loadingText = document.querySelector('.loading p');

  // ローディング中（ブラック）
  loadingAreaGrey.animate(
    { opacity: [1, 0] },
    { duration: 2000, delay: 1200, easing: 'ease', fill: 'forwards' }
  ).onfinish = () => {
    loadingAreaGrey.style.visibility = 'hidden';
  };

  // ローディング中（ホワイト）
  loadingAreaGreen.animate(
    { transform: ['translateY(100vh)', 'translateY(0)', 'translateY(-100vh)'] },
    { duration: 2000, delay: 800, easing: 'ease', fill: 'forwards' }
  );

  // ローディング中テキスト
  loadingText.animate(
    [{ opacity: 1, offset: 0.8 }, { opacity: 0, offset: 1 }],
    { duration: 1200, easing: 'ease', fill: 'forwards' }
  );
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
  Header Section-title stand out
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



// Section-title stand out 
// ================================================ 
// section-titleを下から浮き上がらせる

const sectionTitleItems = document.querySelectorAll('.section-title'); // 変数名を変更

const showSectionTitles = (entries, observer) => { // 関数名を変更
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const item = entry.target;
      const index = Array.from(sectionTitleItems).indexOf(item); // items を sectionTitleItems に変更
      const keyframes = {
        opacity: [0, 1],
        transform: ['translateY(50px)', 'translateY(0)'] // アニメーションはそのまま
      };
      const options = {
        duration: 3000,
        easing: 'ease',
        fill: 'forwards'
      };
      item.animate(keyframes, options);
      observer.unobserve(item);
    }
  });
};

const sectionTitleObserver = new IntersectionObserver(showSectionTitles); // 監視用のObserverも変更
sectionTitleItems.forEach(item => sectionTitleObserver.observe(item)); // items を sectionTitleItems に変更

});




