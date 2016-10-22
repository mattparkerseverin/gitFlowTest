(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        svg_path_wrapper = document.getElementById('svg_path_wrapper'),

        $path0 = document.getElementById('path0'),
        $path1 = document.getElementById('path1'),
        $lines = document.getElementById('lines'),

        linesRed = document.getElementById('linesRed'),
        txt_Personalize = document.getElementById('txt_Personalize'),
        linesWhite = document.getElementById('linesWhite'),
        linesWhite2 = document.getElementById('linesWhite2'),
        car_red = document.getElementById('car_red'),
        car_black = document.getElementById('car_black'),
        car_gold = document.getElementById('car_gold'),
        gradient = document.getElementById('gradient'),

        sprayGun = document.getElementById('sprayGun'),

        sprayCan = document.getElementById('sprayCan'),
        txt_SprayIt = document.getElementById('txt_SprayIt'),

        peel = document.getElementById('peel'),

        logo1 = document.getElementById('logo1'),
        logo1_color = document.getElementById('logo1_color'),
        logo2 = document.getElementById('logo2'),
        logo2_color = document.getElementById('logo2_color'),
        paint1 = document.getElementById('paint1'),
        paint2 = document.getElementById('paint2'),
        txt_Duplicolor = document.getElementById('txt_Duplicolor'),
        txt_NowAvailable = document.getElementById('txt_NowAvailable'),
        CTA_box = document.getElementById('CTA_box'),
        CTA_txt = document.getElementById('CTA_txt'),


        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax;

    function bannerInit()
    {
      t.set(
        [
          linesRed,
          txt_Personalize,
          linesWhite,
          linesWhite2,
          car_red,
          car_black,
          car_gold,
          gradient,

          sprayGun,

          sprayCan,
          txt_SprayIt,

          peel,

          logo1,
          logo1_color,
          logo2,
          logo2_color,
          paint1,
          paint2,
          txt_Duplicolor,
          txt_NowAvailable,
          CTA_box,
          CTA_txt, 

        ],
      setValues);

      //set unique positions and other values you plan to animate here
      t.set(sprayGun, {y:310, x:-150, autoAlpha:1}); // this is an example custom positioning that isn't 0,0, easier to set here than refer back to the css to see what the element's initial position value is
      t.set(peel, {x:300, autoAlpha:1}); // this is an example custom positioning that isn't 0,0, easier to set here than refer back to the css to see what the element's initial position value is
      t.set(CTA_box, {y:159, x:178, autoAlpha:1}); // this is an example custom positioning that isn't 0,0, easier to set here than refer back to the css to see what the element's initial position value is
      t.set($path0, {opacity:0});
      t.set($path1, {opacity:0});
      t.set($lines, {opacity:.5});
      t.set(svg_path_wrapper, {x:0, y:0});
      //init animation
      animation();
    }

    function animation()
    {

        // // animation
        t.set(car_red, {autoAlpha:1});
        // t.set(txt_SprayIt, {autoAlpha:1});
        // t.set(sprayCan, {autoAlpha:1});
        // t.set(paint1, {autoAlpha:1});
        // t.set(paint2, {autoAlpha:1});
        // t.set(CTA_box, {autoAlpha:1});
        // t.set(CTA_txt, {autoAlpha:1});
        t.set(gradient, {autoAlpha:1});
        t.set(linesWhite, {autoAlpha:1});
        // t.set(logo2_color, {autoAlpha:1});

        t.from(txt_SprayIt, .25, {y:"+=15", alpha:0, ease:Power1.easeInOut});

        // t.to(sprayGun, 1, {y:10, x:-15, ease:Power3.easeOut, delay:.25});

        t.to(car_black, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:1});

        t.to(sprayGun, .7, {x:"-=150", ease:Power1.easeInOut, delay:1.75});

        t.from(sprayCan, .5, {x:"-=100", y:"+=100", ease:Power1.easeOut, delay:3});

        t.to(car_gold, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:3.5});

        t.to(peel, 2, {x:-166, ease:Power2.easeInOut, delay:5});
        t.to($path0, 2, {morphSVG:$path1, ease:Power2.easeInOut, delay:5});

        t.set([car_black, car_gold, car_red, sprayCan, txt_SprayIt], {autoAlpha:0, delay:7.5});

        t.to(svg_path_wrapper, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:9});

        // Cross fade logo1_color & logo2_color
        t.to([logo1,logo2], .5, {autoAlpha:0, ease:Power1.easeInOut, delay:9});
        t.to([logo1_color, logo2_color], .5, {autoAlpha:1, ease:Power1.easeInOut, delay:9});

        t.from(paint1, .5, {autoAlpha:0, x:"+=50", ease:Power3.easeOut, delay:10.2});
        t.from(paint2, .5, {autoAlpha:0, x:"+=50", ease:Power3.easeOut, delay:10.5});
        t.to(txt_Duplicolor, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:11});

        t.to(txt_Duplicolor, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:13});
        t.to(txt_NowAvailable, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:13.5});

        t.from([CTA_txt, CTA_box], .5, {autoAlpha:0, y:"+=30", ease:Power2.easeOut, delay:14, onComplete:function(){rolloverActive = true}});
  
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      if(rolloverActive)
      {
        t.to(CTA_box, .25, {backgroundColor:"#000", ease:Power1.easeOut});
      }
    }

    function ctaOut()
    {
      if(rolloverActive)
      {
        t.to(CTA_box, .25, {backgroundColor:"#e02027", ease:Power1.easeOut});
      }
    }

    bannerInit();

})();