(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),

        phone = document.getElementById('phone'),
        graph = document.getElementById('graph'),
          spiral = document.getElementById('spiral'),
          lines = document.getElementById('lines'),

        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        cta_carat = document.getElementById('cta_carat'),

        hit = document.getElementById('hit'),

        linesArray = [],
        ringsArray = [],

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false, //disables cta rollover animation until cta is visible

        // http://greweb.me/bezier-easing-editor/example/
        customEase = new Ease(BezierEasing( 0.5, 0, 0.5, 1)),

        t = TweenMax;

    function bannerInit()
    {
      t.set(
        [
          copy1,
          copy2,
          copy3,
          phone,
          graph,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      //set unique positions and other attributes you plan to animate here
      for (var i = 0; i < 180; i++)
      {
          linesArray.push("#line"+i);
      }

      for (var i = 0; i < 9; i++)
      {
          ringsArray.push("#ring"+i);
      }

      t.set(lines, {rotation:146, y:"+=2", transformOrigin:"50% 50%"});

      //init animation
      animation();
    }

    function animation()
    {
      // animation
      t.set([logo, copy0], {autoAlpha:1})

      t.from(logo, .25, {y:"+=15", ease:Power1.easeOut});
      t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
      t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

      t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:3});

      t.to(graph, 1.5, {autoAlpha:1, ease:Power1.easeInOut, delay:3.5});
      t.from(graph, 3, {scale:5, rotation:"-=360", transformOrigin:"150px 136px", ease:Power3.easeInOut, delay:3.5});
      t.from(spiral, 3, {stroke:"#2ec2f1", ease:Power3.easeInOut, delay:3.5});
      t.from(linesArray, 2, {drawSVG:"100% 100%", ease:Power4.easeInOut, delay:4});
      t.from(ringsArray, 2, {attr:{rx:200, ry:200}, ease:Power4.easeInOut, delay:4.5});
      t.from(lines, 3, {scale:1.5, ease:Power3.easeInOut, delay:4.5});
      t.from(phone, 1.25, {y:"+=50", ease:Power2.easeOut, delay:6});
      t.to(phone, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:6});

      t.from(copy1, 1, {y:"+=50", ease:Power2.easeOut, delay:7.5});
      t.to(copy1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7.5});

      t.to(copy1, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:11});
      t.from(copy2, 1, {y:"+=50", ease:Power2.easeOut, delay:11.5});
      t.to(copy2, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:11.5});
      t.to([cta, cta_carat], .5, {autoAlpha:1, delay:13});
      t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:13, onComplete:function(){rolloverActive=true;}});
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      if(rolloverActive)
      {
        t.to(cta_carat, .25, {x:"+=3", ease:Power1.easeOut});
      }
    }

    function ctaOut()
    {
      if(rolloverActive)
      {
        t.to(cta_carat, .25, {x:0, ease:Power1.easeOut});
      }
    }

    bannerInit();

})();