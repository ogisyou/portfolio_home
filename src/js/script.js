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


// ライトモード・ダークモード切り替え

// ヘッダーのスイッチ
const headerSwitchElement = document.getElementById('header-switch');
const headerSwitchBall = document.getElementById('header-switchBall');

headerSwitchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // ダークモードをトグル
  const isOn = headerSwitchElement.classList.toggle('on');
  headerSwitchBall.style.transform = isOn ? `translateX(30px)` : `translateX(0)`;
  headerSwitchBall.src = isOn ? 'img/dark.png' : 'img/light.png';
});

// モバイルメニューのスイッチ
const mobileSwitchElement = document.getElementById('mobile-switch');
const mobileSwitchBall = document.getElementById('mobile-switchBall');

mobileSwitchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // ダークモードをトグル
  const isOn = mobileSwitchElement.classList.toggle('on');
  mobileSwitchBall.style.transform = isOn ? `translateX(30px)` : `translateX(0)`;
  mobileSwitchBall.src = isOn ? 'img/dark.png' : 'img/light.png';
});



  /*
  Header Section-title stand out
  ================================================ */


// ヘッダーの文字を浮き上がらせる
const header = document.querySelector('.header');
header.animate({
  opacity: [0, 1],
  translate: ['0 -50px', 0]
}, {
  duration: 5000,
  easing: 'ease'
});


  /*
  Screen enalaregemnt
  ================================================ */
// worksの画像を順番に表示
const items = document.querySelectorAll('.works-img');

const showWorks = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const item = entry.target;
      const index = Array.from(items).indexOf(item);
      const keyframes = {
        opacity: [0, 1],
        transform: ['rotateY(180deg)', 'rotateY(0deg)']
      };
      const options = {
        duration: 1000,
        delay: index * 300,
        fill: 'forwards'
      };
      item.animate(keyframes, options);
      observer.unobserve(item);
    }
  });
};

const worksObserver = new IntersectionObserver(showWorks);
items.forEach(item => worksObserver.observe(item));


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




