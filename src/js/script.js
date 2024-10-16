/*
Slider
  ================================================ */
$(document).ready(function () {
  // 自動で画像のスライド移動させる
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000, // スライド切り替えの間隔（ミリ秒）
    speed: 1000, // スライド切り替えのアニメーション速度（ミリ秒）
    fade: true, // フェード効果を有効にする
    cssEase: 'linear', // アニメーションのイージング
  });

  /*
  Burger menu
  ================================================ */
  $(document).ready(function () {
    const menuButton = $('.fa-bars');
    const closeButton = $('#close-menu');
    const mobileMenu = $('#mobile-menu');

    // メニューを開く
    menuButton.click(function () {
      mobileMenu.removeClass('-translate-x-full'); // メニューを開く
      $('body').css('overflow', 'hidden'); // スクロールバーを非表示にする
    });

    // メニューを閉じる（閉じるボタンをクリック）
    closeButton.click(function () {
      mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
      $('body').css('overflow', ''); // スクロールバーを元に戻す
    });

    // メニューのリンクをクリックした際にメニューを閉じる
    $('#mobile-menu a').click(function () {
      mobileMenu.addClass('-translate-x-full'); // メニューを閉じる
      $('body').css('overflow', ''); // スクロールバーを元に戻す
    });

    // メニュー以外をクリックした場合にメニューを閉じる
    $(document).click(function (event) {
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
$(document).ready(function () {
  // sticky header
  var $win = $(window),
    $fv = $('.fv'),
    $header = $('.header'),
    fvHeight = $fv.outerHeight(),
    fixedClass = 'fixed';

  $win.on('load scroll', function () {
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

  $(window).on('load', function () {
    const $loadingAreaBlack = $('.loading');
    const $loadingAreaWhite = $('.loading-screen');
    const $loadingText = $('.loading-screen p');

    // ローディング中（ブラック）
    setTimeout(function () {
      $loadingAreaBlack.addClass('fadeOut');
      setTimeout(function () {
        $loadingAreaBlack.css('visibility', 'hidden');
      }, 2000); // アニメーションの時間に合わせる
    }, 1200); // ディレイ時間

    // ローディング中（ホワイト）
    setTimeout(function () {
      $loadingAreaWhite.addClass('slideInOut');
    }, 800); // ディレイ時間

    // ローディング中テキスト
    $loadingText.addClass('textFadeOut');
  });

  /*
  Darkmode screen
  ================================================ */
  // ヘッダーのスイッチ
  $('#header-switch').on('click', function () {
    $('body').toggleClass('dark'); // ダークモードをトグル
    const isOn = $(this).toggleClass('on').hasClass('on');
    console.log('Dark mode:', $('body').hasClass('dark')); // デバッグ用
    $('#header-switchBall')
      .css('transform', isOn ? 'translateX(30px)' : 'translateX(0)')
      .attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });

  // モバイルメニューのスイッチ
  $('#mobile-switch').on('click', function () {
    $('body').toggleClass('dark'); // ダークモードをトグル
    const isOn = $(this).toggleClass('on').hasClass('on');
    console.log('Dark mode:', $('body').hasClass('dark')); // デバッグ用
    $('#mobile-switchBall')
      .css('transform', isOn ? 'translateX(30px)' : 'translateX(0)')
      .attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });

  /*
  Header stand out
  ================================================ */

  // ヘッダーの文字を浮き上がらせる
  $(document).ready(function () {
    const startValue = -50; // 初期のY軸の位置
    const endValue = 0; // 最終のY軸の位置

    $({ y: startValue, opacity: 0 }).animate(
      { y: endValue, opacity: 1 },
      {
        duration: 5000,
        easing: 'swing', // easingを設定する
        step: function (now, fx) {
          if (fx.prop === 'y') {
            $('.header').css('transform', 'translateY(' + now + 'px)');
          } else if (fx.prop === 'opacity') {
            $('.header').css('opacity', now);
          }
        },
      }
    );
  });

  /*
  Works-img Screen enalaregemnt
  ================================================ */
  // worksの画像を順番に表示
  $(document).ready(function () {
    const $items = $('.works-img');

    const showWorks = () => {
      $items.each(function (index) {
        const $item = $(this);
        const windowHeight = $(window).height();
        const itemTop = $item.offset().top;
        const scrollTop = $(window).scrollTop();

        if (scrollTop + windowHeight > itemTop) {
          setTimeout(function () {
            $item.addClass('revealed');
          }, index * 300);
        }
      });
    };

    $(window).on('scroll', showWorks);
    showWorks();

    // hover拡大効果
    $items
      .on('mouseover', function () {
        $(this).addClass('hovered');
      })
      .on('mouseout', function () {
        $(this).removeClass('hovered');
      });
  });

  /*
Section-title stand out 
  ================================================ */

  // section-titleを下から浮き上がらせる

  $(document).ready(function () {
    function checkVisibility() {
      $('.section-title').each(function () {
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


/*
  Work Image Modal
  ================================================ */
  $(document).ready(function () {
    const modalHTML = `
      <div id="imageModal" style="display: none; position: fixed; inset: 0; z-index: 50; background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);">
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 1rem; border-radius: 0.5rem; width: 60%; max-width: 1200px; height: 80%; max-height: 90vh; overflow: auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <img id="modalImage" src="" alt="モーダル画像" style="max-width: 100%; height: auto;">
          <h3 id="modalTitle" style="margin-top: 1rem; text-align: center; font-weight: bold; font-size: 1.2rem;"></h3>
          <p id="modalDescription" style="margin-top: 1rem; text-align: justify; font-weight: bold;"></p>
          <p id="modalDetailedDescription" style="margin-top: 1rem; text-align: justify;"></p>
          <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
            <button id="closeModal" style="background-color: #D1D5DB; color: black; font-weight: bold; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; transition: background-color 0.3s;">
              閉じる
            </button>
          </div>
        </div>
      </div>
    `;
    $('body').append(modalHTML);
  
    const $modal = $('#imageModal');
    const $modalImage = $('#modalImage');
    const $modalTitle = $('#modalTitle');
    const $modalDescription = $('#modalDescription');
    const $modalDetailedDescription = $('#modalDetailedDescription');
    const $closeModal = $('#closeModal');
    const $workItems = $('.works-img');
  
    $workItems.on('click', function (e) {
      e.preventDefault();
      const $item = $(this);
      const imgSrc = $item.find('img').attr('src');
      const title = $item.find('.text-lg').text();
      const description = $item.find('.text-justify').text();
      const detailedDescription = $item.find('.detailed-description').text();
  
      $modalImage.attr('src', imgSrc);
      $modalTitle.text(title);
      $modalDescription.text(description);
      $modalDetailedDescription.text(detailedDescription);
      $modal.show();
    });
  
    $closeModal.on('click', function () {
      $modal.hide();
    });
  
    $modal.on('click', function (e) {
      if (e.target === this) {
        $modal.hide();
      }
    });
  
    // ホバー効果を追加
    $closeModal.hover(
      function () {
        $(this).css('background-color', '#9CA3AF');
      },
      function () {
        $(this).css('background-color', '#D1D5DB');
      }
    );
  });