/* =========================================================
   AWAG Leadership — Static site interactivity (jQuery)
   ========================================================= */

$(function () {
  var $win = $(window);
  var $nav = $('#navbar');
  var $progress = $('#scrollProgress');

  // ---------- Current year in footer ----------
  $('#year').text(new Date().getFullYear());

  // ---------- Sticky / scroll progress ----------
  function onScroll() {
    var y = $win.scrollTop();
    if (y > 24) { $nav.addClass('scrolled'); } else { $nav.removeClass('scrolled'); }

    var doc = $(document).height() - $win.height();
    var pct = doc > 0 ? (y / doc) * 100 : 0;
    $progress.css('width', pct + '%');
  }
  $win.on('scroll', onScroll);
  onScroll();

  // ---------- Mobile menu ----------
  var $toggle = $('#navToggle');
  var $menu = $('#mobileMenu');
  $toggle.on('click', function () {
    var isOpen = $menu.hasClass('open');
    $menu.toggleClass('open', !isOpen);
    $toggle.toggleClass('open', !isOpen);
    $toggle.attr('aria-expanded', String(!isOpen));
    $toggle.attr('aria-label', !isOpen ? 'Close menu' : 'Open menu');
  });
  $menu.on('click', 'a', function () {
    $menu.removeClass('open');
    $toggle.removeClass('open').attr('aria-expanded', 'false').attr('aria-label', 'Open menu');
  });

  // ---------- Reveal on scroll ----------
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });
    $('.reveal').each(function () { io.observe(this); });
  } else {
    $('.reveal').addClass('in');
  }

  // ---------- Counters (animate when in view) ----------
  function animateCounter($el) {
    var to = parseInt($el.attr('data-to'), 10) || 0;
    var dur = 1600;
    var start = performance.now();
    function tick(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(to * eased);
      $el.text(val.toLocaleString());
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter($(entry.target));
          cio.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-60px' });
    $('.counter').each(function () { cio.observe(this); });
  } else {
    $('.counter').each(function () { animateCounter($(this)); });
  }

  // ---------- Marquee: duplicate items for seamless loop ----------
  var $track = $('#marqueeTrack');
  if ($track.length) {
    $track.append($track.children().clone());
  }

  // ---------- Hero parallax ----------
  var $heroBg = $('.hero-bg');
  if ($heroBg.length) {
    $win.on('scroll', function () {
      var y = $win.scrollTop();
      if (y > $win.height()) return;
      var t = Math.min(1, y / $win.height());
      $heroBg.css('transform', 'translate3d(0,' + (t * 140) + 'px,0) scale(' + (1.05 + t * 0.13) + ')');
    });
  }

  // ---------- Contact form: open mail client ----------
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    var first = $('#first').val();
    var last = $('#last').val();
    var email = $('#email').val();
    var org = $('#org').val();
    var msg = $('#message').val();
    var interests = $('.chip input:checked').map(function () { return this.value; }).get().join(', ');

    var body =
      'Name: ' + first + ' ' + last + '\n' +
      'Email: ' + email + '\n' +
      (org ? 'Organization: ' + org + '\n' : '') +
      (interests ? 'Interested in: ' + interests + '\n' : '') +
      '\n' + msg;

    var mailto = 'mailto:info@awagleadership.org' +
      '?subject=' + encodeURIComponent('AWAG Leadership Inquiry') +
      '&body=' + encodeURIComponent(body);
    window.location.href = mailto;
  });

  // ---------- Smooth scroll fallback (older browsers) ----------
  $('a[href^="#"]').on('click', function (e) {
    var href = $(this).attr('href');
    if (!href || href === '#') return;
    var $target = $(href);
    if (!$target.length) return;
    e.preventDefault();
    var top = $target.offset().top - 70;
    $('html, body').animate({ scrollTop: top }, 500);
  });
});
