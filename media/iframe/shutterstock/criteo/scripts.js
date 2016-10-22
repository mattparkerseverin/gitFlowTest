(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        heroWrapper = document.getElementById('heroWrapper'),
          hero0 = document.getElementById('hero0'),
          hero1 = document.getElementById('hero1'),
          hero2 = document.getElementById('hero2'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),

        white = document.getElementById('white'),
        logo = document.getElementById('logo'),

        cta_bg = document.getElementById('cta_bg'),
        cta_bg_over = document.getElementById('cta_bg_over'),
        cta_copy = document.getElementById('cta_copy'),

        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0, force3D:true, z:.001},

        // http://greweb.me/bezier-easing-editor/example/
        customEase = new Ease(BezierEasing(0.62, 0.73, 0.79, 1.00)),

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax;

    function bannerInit()
    {
      t.set(
        [
          hero0,
          hero1,
          hero2,

          copy0,
          copy1,
          copy2,

          white,
          logo,

          cta_bg,
          cta_bg_over,
          cta_copy
      ],
      setValues);

      //set unique positions and other attributes you plan to animate here
      t.set([cta_bg, cta_bg_over], {x:166, y:209});
      t.set(cta_bg_over, {scaleX:0, autoAlpha:1});
      t.set(heroWrapper, {perspective:1000, transformPerspctive:1000});

      //init animation
      animation();
    }

    function animation()
    {
        // animation
        t.set([logo, white, cta_copy, cta_bg, hero0], {autoAlpha:1});
        t.from(hero0, 6, {z:100, ease:Linear.easeNone});
        t.to(copy0, 1, {autoAlpha:1, ease:Power1.easeInOut});
        t.to(copy1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:1.5});
        t.to(copy2, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:3});

        t.to(hero1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:5});
        t.from(hero1, 6, {z:100, ease:Linear.easeNone, delay:5});

        t.to(hero2, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:10});
        t.from(hero2, 5, {z:100, ease:customEase, delay:10});

        t.to(cta_bg_over, .5, {scaleX:1, ease:Power3.easeOut, transformOrigin:"0% 50%", delay:14});
        t.to(cta_bg_over, .5, {scaleX:0, ease:Power3.easeOut, transformOrigin:"100% 50%", delay:14.5, onComplete:function(){rolloverActive=true;}});
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      t.to(cta_bg_over, .5, {scaleX:1, ease:Power3.easeOut, transformOrigin:"0% 50%"});
      if(rolloverActive){t.to(hero2, .5, {z:50})};
    }

    function ctaOut()
    {
      t.to(cta_bg_over, .5, {scaleX:0, ease:Power3.easeOut, transformOrigin:"100% 50%"});
      if(rolloverActive){t.to(hero2, .5, {z:0})};
    }

    bannerInit();

})();