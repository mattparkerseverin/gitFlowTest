(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',
        bgExit = '#bg-exit',

        copy1 = "#copy1",
        copy2 = "#copy2",

        TR = "#TR",
        TL = "#TL",
        BR = "#BR",
        BL = "#BL",

        top_bar = "#top_bar",

        bot_bar = "#bot_bar",
        logo = "#logo",
        cta = "#cta",
          cta_copy = "#cta_copy",

        rolloverActive,

        t = TweenMax;

    function bannerAnim()
    {
      //set init banner values and initiates click handlers
      initHandlers();

      rolloverActive = true;

      t.set(bgExit, {x:0, y:0, opacity:0});

      t.set(TL, {x:-61, y:-38});
      t.set(TR, {x:140, y:-28});
      t.set(BL, {x:-7, y:107});
      t.set(BR, {x:124, y:103});

      t.set(top_bar, {x:0, y:0});

      t.set(bot_bar, {x:0, y:206});
      t.set(logo, {x:11, y:218});

      t.set(copy1, {x:74, y:74});
      t.set(copy2, {x:56, y:95});

      t.set(cta, {x:165, y:215});

      t.set(cta_copy, {x:194, y:223});

      //init animation
      seq1();

      function seq1()
      {
        t.from(copy1, 1, {autoAlpha:0, ease:Power1.easeInOut});

        t.from(TL, 1, {x:"-=150", y:"-=150", rotation:"-=90", transformOrigin: "top left", ease:Power3.easeOut, delay:.5});
        t.from(TR, 1.1, {x:"+=150", y:"-=150", rotation:"-=180", transformOrigin: "top left", ease:Power3.easeOut, delay:.6});
        t.from(BL, 1.2, {x:"-=150", y:"+=150", rotation:"-=90", transformOrigin: "bottom left", ease:Power3.easeOut, delay:.7});
        t.from(BR, 1.3, {x:"+=150", y:"+=150", rotation:"-=180", transformOrigin: "bottom right", ease:Power3.easeOut, delay:.8});

        t.from(copy2, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:2.1});
      }

      function initHandlers()
      {
        document.getElementById('bg-exit').onclick =
          function()
          {
            window.open(window.clickTag, "_blank");
          }

        document.getElementById('bg-exit').onmouseover =
          function(event)
          {
            {
              if(rolloverActive)
              {
                ////t.to(cta, .25, {scale:1});
t.to(cta, .25, {backgroundColor:"#ff0000"});
              }
            }
          };

        document.getElementById('bg-exit').onmouseout =
          function(event)
          {
            {
              if(rolloverActive)
              {
                ////t.to(cta, .25, {scale:1});
t.to(cta, .25, {backgroundColor:"#c6312d"});
              }
            }
          };
        }
      }


      bannerAnim();

})();