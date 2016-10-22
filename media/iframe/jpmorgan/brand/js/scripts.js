(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',
        hit = '#hit',

        hero = "#hero",
        hero2 = "#hero2",

        copy1 = "#copy1",
        copy2 = "#copy2",
        copy3 = "#copy3",
        copy4 = "#copy4",
        copy5 = "#copy5",
        copy6 = "#copy6",

        logo_block = "#logo_block",

        cta = "#cta",
          cta_copy = "#cta_copy",

        rolloverActive,

        t = TweenMax;

    function bannerAnim()
    {
      //set init banner values and initiates click handlers
      initHandlers();

      rolloverActive = false;

      t.set(hit, {x:0, y:0, opacity:0});

      t.set(logo_block, {x:0, y:187});

      t.set(solid, {x:0, y:0, autoAlpha:0});

      t.set(hero, {x:0, y:0, force3D:true, rotationZ:0.01});
      t.set(hero2, {x:0, y:187, force3D:true, rotationZ:0.01});

      t.set([copy1, copy2, copy3, copy4, copy5], {x:23, y:22, autoAlpha:0});

      t.set(copy6, {x:60, y:43, autoAlpha:0});

      t.set(cta, {x:104, y:126, autoAlpha:0});
        t.set(cta_copy, {x:12, y:8, force3D:true, rotationZ:0.01});

      //init animation
      seq1();

      function seq1()
      {
        t.defaultEase = Power1.easeInOut;

        t.to([hero, hero2], 15, {x:"-=100", ease:Linear.easeNone});
        t.to(copy1, 1, {autoAlpha:1});

        t.to(copy1, 1, {autoAlpha:0, delay:2});
        t.to(copy2, 1, {autoAlpha:1, delay:3});

        t.to(copy2, 1, {autoAlpha:0, delay:5});
        t.to(copy3, 1, {autoAlpha:1, delay:6});

        t.to(copy3, 1, {autoAlpha:0, delay:8});
        t.to(copy4, 1, {autoAlpha:1, delay:9});

        t.to(copy4, 1, {autoAlpha:0, delay:11});
        t.to(copy5, 1, {autoAlpha:1, delay:12});

        t.to(copy5, .5, {autoAlpha:0, delay:14});
        t.to(solid, .5, {autoAlpha:1, delay:14});

        t.to([cta, copy6], .5, {autoAlpha:1, delay:14.5, onComplete:function(){rolloverActive=true;}});
      }

      function initHandlers()
      {

        document.getElementById('hit').onmouseover =
          function(event)
          {
            {
              if(rolloverActive)
              {
                t.to(cta, .25, {scale:1.1, force3D:true, rotationZ:0.01});
              }
            }
          };

        document.getElementById('hit').onmouseout =
          function(event)
          {
            {
              if(rolloverActive)
              {
                t.to(cta, .25, {scale:1, force3D:true, rotationZ:0.01});
                t.set(".line", {drawSVG:"100%"});
              }
            }
          };
        }
      }

      bannerAnim();

})();