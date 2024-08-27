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
  closeButton.click(function() {
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



