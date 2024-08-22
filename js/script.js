// $(document).ready(function() {
//   // sticky header
//   var $win = $(window),
//       $fv = $('.fv'),
//       $header = $('.header'),
//       fvHeight = $fv.outerHeight(),
//       fixedClass = 'fixed';

//   $win.on('load scroll', function() {
//     var value = $(this).scrollTop();
//     if ($win.width() > 768) {
//       if (value > fvHeight) {
//         $header.addClass(fixedClass);
//       } else {
//         $header.removeClass(fixedClass);
//       }
//     }
//   });

  // slider
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

//   // ハンバーガーメニューの開閉とリサイズ対応
//   var $headerNav = $('.header-nav'),
//       $burgerBtn = $('.burger-btn');

//   $win.on('resize', function() {
//     if ($win.width() > 768) {
//       $headerNav.show();
//     } else {
//       if (!$burgerBtn.hasClass('cross')) {
//         $headerNav.hide();
//       }
//     }
//   });

//   $burgerBtn.on('click', function() {
//     $headerNav.fadeToggle(300);
//     $burgerBtn.toggleClass('cross');
//     $('body').toggleClass('noscroll');
//   });

//   // メニューリンクのクリックイベント
//   $('.header-nav a').on('click', function() {
//     // ハンバーガーメニューが表示されている場合だけ閉じる
//     if ($burgerBtn.hasClass('cross')) {
//       $headerNav.fadeOut(300);
//       $burgerBtn.removeClass('cross');
//       $('body').removeClass('noscroll');
//     }
//   });
// });

// // ローディング画面の処理
// window.addEventListener('load', () => {
//   const loadingAreaGrey = document.querySelector('.loading');
//   const loadingAreaGreen = document.querySelector('.loading-screen');
//   const loadingText = document.querySelector('.loading p');

//   // ローディング中（ブラック）
//   loadingAreaGrey.animate(
//     { opacity: [1, 0] },
//     { duration: 2000, delay: 1200, easing: 'ease', fill: 'forwards' }
//   ).onfinish = () => {
//     loadingAreaGrey.style.visibility = 'hidden';
//   };

//   // ローディング中（ホワイト）
//   loadingAreaGreen.animate(
//     { transform: ['translateY(100vh)', 'translateY(0)', 'translateY(-100vh)'] },
//     { duration: 2000, delay: 800, easing: 'ease', fill: 'forwards' }
//   );

//   // ローディング中テキスト
//   loadingText.animate(
//     [{ opacity: 1, offset: 0.8 }, { opacity: 0, offset: 1 }],
//     { duration: 1200, easing: 'ease', fill: 'forwards' }
//   );
// });

// // ライトモード・ダークモード切り替え
// const switchElement = document.getElementById('switch');
// const switchBall = document.getElementById('switchBall');

// switchElement.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');

//   if (switchBall.src.includes('img/light.png')) {
//     switchBall.src = 'img/dark.png';
//   } else {
//     switchBall.src = 'img/light.png';
//   }

//   switchElement.classList.toggle('on');
// });

// // ヘッダーの文字を浮き上がらせる
// const header = document.querySelector('.header');
// header.animate({
//   opacity: [0, 1],
//   translate: ['0 -50px', 0]
// }, {
//   duration: 5000,
//   easing: 'ease'
// });

// // section-titleを下から浮き上がらせる
// document.addEventListener('DOMContentLoaded', () => {
//   const classList = ['.section-title', '.works-img', '.introduction-text', '.profile-list', '.profile-img-wrapper', '.contact-text', '.form-wrapper'];

//   const keyframes = {
//     opacity: [0, 1],
//     transform: ['translateY(50px)', 'translateY(0)']
//   };
//   const options = {
//     duration: 3000,
//     easing: 'ease',
//     fill: 'forwards'
//   };

//   classList.forEach(className => {
//     const elements = document.querySelectorAll(className);

//     const showElement = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           const element = entry.target;
//           element.animate(keyframes, options);
//           observer.unobserve(element);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(showElement, { threshold: 0.1 });
//     elements.forEach(element => observer.observe(element));
//   });
// });

// // worksの画像を順番に表示
// const items = document.querySelectorAll('.works-img');

// const showWorks = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const item = entry.target;
//       const index = Array.from(items).indexOf(item);
//       const keyframes = {
//         opacity: [0, 1],
//         transform: ['rotateY(180deg)', 'rotateY(0deg)']
//       };
//       const options = {
//         duration: 1000,
//         delay: index * 300,
//         fill: 'forwards'
//       };
//       item.animate(keyframes, options);
//       observer.unobserve(item);
//     }
//   });
// };

// const worksObserver = new IntersectionObserver(showWorks);
// items.forEach(item => worksObserver.observe(item));
