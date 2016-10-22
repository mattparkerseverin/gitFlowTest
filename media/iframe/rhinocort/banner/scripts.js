(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',
        hit = '#hit',

        hero = '#hero',
        copy1 = '#copy1',
        copy2 = '#copy2',
        copyWrapper = '#copyWrapper',
          copy3 = '#copy3',
          copy4 = '#copy4',
          cta = '#cta',
          cta_rollover = '#cta_rollover',
        pack = '#pack',
        logo = '#logo',
        logo2 = '#logo2',

        setValues = {x:0, y:0, autoAlpha:0},
        ctaReset = {x:25, y:165},

        rolloverActive = false,

        newpath,

        t = TweenMax;

    function bannerAnim()
    {
      t.set(hero,   setValues);
      t.set(copy1,  setValues);
      t.set(copy2,  setValues);
      t.set(copy3,  setValues);
      t.set(copy4,  setValues);
      t.set(pack,   setValues);
      t.set(logo,   setValues);
      t.set(logo2,  setValues);

      t.set(copyWrapper, {left:25});
      t.set([copy3, copy4, cta], {left:-25});
      t.set(cta_rollover, ctaReset);
      t.set(cta_rollover, {autoAlpha:0});

      //init animation
      seq1();

      function seq1()
      {
        t.set(hero, {autoAlpha:1});

        t.from([hero, logo], .5, {opacity:0, ease:Power1.easeInOut});
        t.set(copy1, {autoAlpha:1, delay:.5});
        t.from(copy1, .25, {x:"-=300", y:"+=30", ease:Power4.easeOut, delay:1});
        t.set(copy2, {autoAlpha:1, delay:2});
        t.from(copy2, .25, {x:"-=300", y:"+=30", ease:Power4.easeOut, delay:2});

        t.to(logo, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:2.25});
        // t.from(logo, .5, {x:"+=200", ease:Power3.easeOut, delay:2.75});

        t.to([hero, logo, copy1, copy2], .5, {autoAlpha:0, ease:Power1.easeInOut, delay:5.25});
        t.set(logo2, {autoAlpha:1, delay:5.5});
        t.to(pack, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:6});

        t.set(copy3, {autoAlpha:1, delay:7});
        t.from(copy3, .25, {x:"-=300", y:"+=30", ease:Power4.easeOut, delay:7});

        t.set(copy4, {autoAlpha:1, delay:8});
        t.from(copy4, .25, {x:"-=300", y:"+=30", ease:Power4.easeOut, delay:8});

        t.set([cta, cta_rollover], {autoAlpha:1, delay:9});
        t.from(cta, .25, {x:"-=300", y:"+=30", ease:Power4.easeOut, delay:9, onComplete:function(){rolloverActive=true;}});
      }
    }

    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
          if(rolloverActive)
          {
            t.to(cta_rollover, .25, {x:"+=200", y:"-=20", ease:Power1.easeOut, onComplete:
              function()
              {
                t.set(cta_rollover, ctaReset);
              }
            });
          }
        }
      };

    // document.getElementById('hit').onmouseout =
    //   function(event)
    //   {
    //     {
    //       if(rolloverActive)
    //       {
    //         t.to(copy2, .25, {x:-15, y:0, ease:Power1.easeOut});
    //       }
    //     }
    //   };

    bannerAnim();

})();