$(document).ready(function() {
  // 自動で画像のスライド移動させる
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000, // スライド切り替えの間隔（ミリ秒）
    speed: 1000, // スライド切り替えのアニメーション速度（ミリ秒）
    fade: true, // フェード効果を有効にする
    cssEase: 'linear' // アニメーションのイージング
  });

  // ハンバーガーメニューのボタン
  const menuButton = $('.fa-bars');
  // メニューを閉じるボタン
  const closeButton = $('#close-menu');
  // メニュー要素
  const mobileMenu = $('#mobile-menu');

  // メニューを開く
  menuButton.click(function() {
    mobileMenu.removeClass('-translate-x-full'); // メニューを開く
  });

  // メニューを閉じる
// メニューのリンクをクリックした際にメニューを閉じつつ、アンカーリンクが機能するようにする
$('#mobile-menu a').click(function() {
  mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
});


  // メニュー以外をクリックした場合に閉じる
  $(document).click(function(event) {
    if (!$(event.target).closest('#mobile-menu, .fa-bars').length) {
      if (!mobileMenu.hasClass('-translate-x-full')) {
        mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
      }
    }
  });
});


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



// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

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



// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// ライトモード・ダークモード切り替え
const switchElement = document.getElementById('switch');
const switchBall = document.getElementById('switchBall');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // スイッチの状態を確認し、クラスをトグル
  const isOn = switchElement.classList.toggle('on');
  
  // スイッチボールの位置を変更
  switchBall.style.transform = isOn ? `translateX(30px)` : `translateX(0)`;
  
  // スイッチボールの画像を変更
  switchBall.src = isOn ? 'img/dark.png' : 'img/light.png';
});



// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// ヘッダーの文字を浮き上がらせる
const header = document.querySelector('.header');
header.animate({
  opacity: [0, 1],
  translate: ['0 -50px', 0]
}, {
  duration: 5000,
  easing: 'ease'
});

// section-titleを下から浮き上がらせる
document.addEventListener('DOMContentLoaded', () => {
  const classList = ['.section-title', '.works-img', '.introduction-text', '.profile-list', '.profile-img-wrapper', '.contact-text', '.form-wrapper'];

  const keyframes = {
    opacity: [0, 1],
    transform: ['translateY(50px)', 'translateY(0)']
  };
  const options = {
    duration: 3000,
    easing: 'ease',
    fill: 'forwards'
  };

  classList.forEach(className => {
    const elements = document.querySelectorAll(className);

    const showElement = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.animate(keyframes, options);
          observer.unobserve(element);
        }
      });
    };

    const observer = new IntersectionObserver(showElement, { threshold: 0.1 });
    elements.forEach(element => observer.observe(element));
  });
});

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

});
