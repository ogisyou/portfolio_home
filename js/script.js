/*
Slider
  ================================================ */
$(document).ready(function () {
  // 自動で画像のスライド移動させる
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000, 
    speed: 1000, 
    fade: true, 
    cssEase: 'linear',
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
      mobileMenu.removeClass('-translate-x-full'); 
      $('body').css('overflow', 'hidden'); 
    });

    // メニューを閉じる（閉じるボタンをクリック）
    closeButton.click(function () {
      mobileMenu.addClass('-translate-x-full');
      $('body').css('overflow', ''); 
    });

    // メニューのリンクをクリックした際にメニューを閉じる
    $('#mobile-menu a').click(function () {
      mobileMenu.addClass('-translate-x-full'); 
      $('body').css('overflow', '');
    });

    // メニュー以外をクリックした場合にメニューを閉じる
    $(document).click(function (event) {
      if (!$(event.target).closest('#mobile-menu, .fa-bars').length) {
        if (!mobileMenu.hasClass('-translate-x-full')) {
          mobileMenu.addClass('-translate-x-full'); 
          $('body').css('overflow', ''); 
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
  window.addEventListener('load', function () {
    const loadingAreaBlack = document.querySelector('.loading');
    const loadingAreaWhite = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-screen p');

    function hideLoadingScreen() {
        loadingAreaBlack.style.display = 'none';
        loadingAreaWhite.style.display = 'none';
    }

    // ローディング中（ブラック）
    setTimeout(function () {
        loadingAreaBlack.classList.add('fadeOut');
    }, 1200);

    // ローディング中（ホワイト）
    setTimeout(function () {
        loadingAreaWhite.classList.add('slideInOut');
    }, 800);

    // ローディング中テキスト
    loadingText.classList.add('textFadeOut');

    // アニメーション完了後にローディング画面を非表示
    setTimeout(hideLoadingScreen, 3500);

    // バックアップタイマー（6秒後に強制的に非表示）
    setTimeout(hideLoadingScreen, 6000);
});
  /*
  Darkmode screen
  ================================================ */
  // ヘッダーのスイッチ
  $('#header-switch').on('click', function () {
    $('body').toggleClass('dark');
    const isOn = $(this).toggleClass('on').hasClass('on');
    console.log('Dark mode:', $('body').hasClass('dark')); 
    $('#header-switchBall')
      .css('transform', isOn ? 'translateX(30px)' : 'translateX(0)')
      .attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });

  // モバイルメニューのスイッチ
  $('#mobile-switch').on('click', function () {
    $('body').toggleClass('dark'); 
    const isOn = $(this).toggleClass('on').hasClass('on');
    console.log('Dark mode:', $('body').hasClass('dark')); 
    $('#mobile-switchBall')
      .css('transform', isOn ? 'translateX(30px)' : 'translateX(0)')
      .attr('src', isOn ? 'img/dark.png' : 'img/light.png');
  });

  /*
  Header stand out
  ================================================ */

  // ヘッダーの文字を浮き上がらせる
  $(document).ready(function () {
    const startValue = -50;
    const endValue = 0; 

    $({ y: startValue, opacity: 0 }).animate(
      { y: endValue, opacity: 1 },
      {
        duration: 5000,
        easing: 'swing', 
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
    $(window).on('load', checkVisibility);
  });
});



/*
  Work Image Modal
  ================================================ */
  $(document).ready(function () {
    const modalHTML = `
      <div id="imageModal" style="display: none; position: fixed; inset: 0; z-index: 50; background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);">
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 1rem; border-radius: 0.5rem; width: 60%; max-width: 1200px; height: 80%; max-height: 90vh; overflow: auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <img id="modalImage" src="" alt="モーダル画像" style="max-width: 100%; height: auto; cursor: pointer;">
          <h3 id="modalTitle" style="margin-top: 1rem; text-align: center; font-weight: bold; font-size: 1.2rem;"></h3>
          <p id="modalDetailedDescription" style="margin-top: 1rem; text-align: justify;"></p>
          <div id="modalIcons" style="display: none; justify-content: center; margin-top: 1rem;">
            <a id="githubLink" href="#" target="_blank" style="margin: 0 1rem; display: flex; align-items: center; text-decoration: none; color: inherit;">
              <i class="fab fa-github fa-2x"></i>
              <span style="margin-left: 0.5rem;">GitHub</span>
            </a>
            <a id="demoLink" href="#" target="_blank" style="margin: 0 1rem; display: flex; align-items: center; text-decoration: none; color: inherit;">
              <i class="fas fa-camera fa-2x"></i>
              <span style="margin-left: 0.5rem;">Demo</span>
            </a>
          </div>
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
    const $modalIcons = $('#modalIcons');
    const $closeModal = $('#closeModal');
    const $workItems = $('.works-img');
    const $githubLink = $('#githubLink');
    const $demoLink = $('#demoLink');
  
    let currentImageUrl = '';
    let isPortfolioModal = false;
  
    $workItems.on('click', function (e) {
      e.preventDefault();
      const $item = $(this);
      const imgSrc = $item.find('img').attr('src');
      const title = $item.find('.text-lg').text();
      const description = $item.find('.detailed-description').text();
      const githubUrl = $item.find('.github-url').text() || $item.data('github-url');
      const demoUrl = $item.find('.demo-url').text() || $item.data('demo-url');
      currentImageUrl = $item.find('.image-url').text();
      isPortfolioModal = title.trim() === "Ogiwara's Portfolio";
  
      $modalImage.attr('src', imgSrc);
      $modalTitle.text(title);
      $modalDescription.text($item.find('p:not(.detailed-description)').text());
      $modalDetailedDescription.text(description);
  
      if (githubUrl || demoUrl) {
        $modalIcons.css('display', 'flex');
        if (githubUrl) {
          $githubLink.attr('href', githubUrl).show();
        } else {
          $githubLink.hide();
        }
        if (demoUrl) {
          $demoLink.attr('href', demoUrl).show();
        } else {
          $demoLink.hide();
        }
      } else {
        $modalIcons.hide();
      }
  
      $modal.show();
    });
  
    $modalImage.on('click', function() {
      if (isPortfolioModal) {
        location.reload();
      } else if (currentImageUrl) {
        window.open(currentImageUrl, '_blank');
      }
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
