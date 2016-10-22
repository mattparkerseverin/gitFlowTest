(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        hero1 = document.getElementById('hero1'),
        hero2 = document.getElementById('hero2'),

        rays = document.getElementById('rays'),
          flare0 = document.getElementById('flare0'),
          flare1 = document.getElementById('flare1'),
          flare2 = document.getElementById('flare2'),
          flare3 = document.getElementById('flare3'),
          flare0_radial = document.getElementById('flare0_radial'),
          flare1_radial = document.getElementById('flare1_radial'),
          flare2_radial = document.getElementById('flare2_radial'),
          flare3_radial = document.getElementById('flare3_radial'),

        copy1a = document.getElementById('copy1a'),
        copy1b = document.getElementById('copy1b'),
        copy2a = document.getElementById('copy2a'),
        copy2a = document.getElementById('copy2a'),
        copy2b = document.getElementById('copy2b'),
        copy3 = document.getElementById('copy3'),

        line1 = document.getElementById('line1'),
        line2 = document.getElementById('line2'),
        line3 = document.getElementById('line3'),

        cta_copy = document.getElementById('cta_copy'),
        cta_bg = document.getElementById('cta_bg'),
        legal = document.getElementById('legal'),
        pack = document.getElementById('pack'),
        logo = document.getElementById('logo'),

        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0, force3D:true, z:.001},

        // http://greweb.me/bezier-easing-editor/example/
        customEase = new Ease(BezierEasing(0.62, 0.73, 0.79, 1.00)),

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax;

    function bannerInit()
    {
      console.log("init js");
      t.set(
        [
          hero1,
          hero2,

          copy1a,
          copy1b,
          copy2a,
          copy2a,
          copy2b,
          copy3,

          line1,
          line2,
          line3,

          cta_copy,
          cta_bg,
          legal,
          pack,
          logo
      ],
      setValues);

      t.set(rays, {x:0, y:90, rotation:100});
      t.set(banner, {perspective:1000, transformPerspctive:1000});

      //set unique positions and other attributes you plan to animate here
      //init animation
      animation();
    }

    function animation()
    {
        // animation
        t.set(logo, {autoAlpha:1});

        t.to(hero1, 2, {autoAlpha:1, ease:Power1.easeInOut});
        t.from(hero1, 11, {z:100, ease:customEase, transformOrigin:"50% 35%"});

        t.from([flare0, flare1, flare2, flare3, flare0_radial, flare1_radial, flare2_radial, flare3_radial], 11, {attr:{cx:27, cy:85}, ease:customEase});

        t.to(rays, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:6});

        t.to(line1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:2});

        t.from(copy1a, 1, {y:"+=25", ease:Power3.easeOut, delay:2});
        t.to(copy1a, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:2});
        t.from(copy1b, 1.5, {y:"+=40", ease:Power3.easeOut, delay:2.25});
        t.to(copy1b, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:2.25});

        t.to([copy1a, copy1b, line1], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:6});

        t.to(line2, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7});
        t.from(copy2a, 1, {y:"+=25", ease:Power3.easeOut, delay:7});
        t.to(copy2a, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7});
        t.from(copy2b, 1.5, {y:"+=40", ease:Power3.easeOut, delay:7.25});
        t.to(copy2b, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7.25});

        t.to([copy2a, copy2b, line2, hero1], 2, {autoAlpha:0, ease:Power1.easeInOut, delay:10});

        t.set([hero2, legal], {autoAlpha:1, delay:10});
        t.from(pack, 1.5, {y:"+=50", ease:Power3.easeOut, delay:11});
        t.to(pack, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:11});

        t.to(line3, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:12});
        t.from(copy3, 1, {y:"+=25", ease:Power3.easeOut, delay:12});
        t.to(copy3, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:12});
        t.from([cta_copy, cta_bg], 1, {y:"+=40", ease:Power3.easeOut, delay:14});
        t.to([cta_copy, cta_bg], 1, {autoAlpha:1, ease:Power1.easeInOut, delay:14, onComplete:function(){rolloverActive=true;}});
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      if(rolloverActive)
      {
        t.to([cta_bg, cta_copy], .25, {scale:1.1, ease:Power1.easeOut, transformOrigin:"134px 160px"});
      }
    }

    function ctaOut()
    {
      if(rolloverActive)
      {
        t.to([cta_bg, cta_copy], .25, {scale:1, ease:Power1.easeOut});
      }
    }

    bannerInit();

})();