(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',
        bg = '#bg',
        copy1 = '#copy1',
        copy2 = '#copy2',
        copy3 = '#copy3',
        copy4 = '#copy4',
        copy5 = '#copy5',
        logo = '#logo',
        legal = '#legal',

        rolloverActive = false,

        t = TweenMax;

    function bannerAnim()
    {
      t.set(banner, {perspective:'1000px'});

      t.set(bg, {x:0, y:0, backgroundImage:"url(bg.jpg)"});
      t.set(copy1, {x:0, y:0, backgroundImage:"url(copy1.png)", autoAlpha:0});
      t.set(copy2, {x:0, y:0, backgroundImage:"url(copy2.png)", autoAlpha:0});
      t.set(copy3, {x:0, y:0, backgroundImage:"url(copy3.png)", autoAlpha:0});
      t.set(copy4, {x:0, y:0, backgroundImage:"url(copy4.png)", autoAlpha:0});
      t.set(copy5, {x:0, y:0, backgroundImage:"url(copy5.png)", autoAlpha:0});
      t.set(logo, {x:0, y:0, backgroundImage:"url(logo.png)", autoAlpha:0});
      t.set(legal, {x:0, y:0, backgroundImage:"url(legal.png)", autoAlpha:0});

      //init animation
      seq1();

      function seq1()
      {
        bounce(copy1);
        t.delayedCall(.2, bounce, [copy2]);

        t.delayedCall(3, rollOut, [copy2, "50% 60% -20"]);
        t.delayedCall(3.1, rollOut, [copy1, "50% 30% -20"]);

        t.delayedCall(3.5, rollIn, [copy3, "50% 15% -5"]);
        t.delayedCall(3.6, rollIn, [copy4, "50% 35% -5"]);
        t.delayedCall(3.7, rollIn, [copy5, "50% 50% -4"]);
        t.delayedCall(3.8, rollIn, [logo, "50% 70% -10"]);

        t.to(legal, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:4.3, onComplete:initHandlers});
      }
    }

    function bounce(myElement)
    {
      t.to(myElement, .25, {autoAlpha:1});
      t.from(myElement, .33, {scale:8, ease:Power1.easeIn});
      t.to(bg, .05, {scale:.98, delay:.33});
      t.to(bg, .05, {scale:1, delay:.38});
      t.to(myElement, .05, {scale:1.03, delay:.33});
      t.to(myElement, .05, {scale:1, delay:.38});
    }

    function rollOut(myElement, myOrigin)
    {
      t.to(myElement, .5, {rotationX:"-=90", transformOrigin:myOrigin, ease:Back.easeIn.config(3)});
      t.set(myElement, {autoAlpha:0, delay:.5});
    }

    function rollIn(myElement, myOrigin)
    {
      t.set(myElement, {autoAlpha:1});
      t.from(myElement, .5, {rotationX:"+=90", transformOrigin:myOrigin, ease:Back.easeOut.config(3)});
    }

    function initHandlers()
    {
      document.getElementById('banner').onmouseover =
          function(event)
          {
            {
              t.to(logo, .25, {scale:0, autoAlpha:0, transformOrigin:"50% 70% -10", ease:Power3.easeOut});
              t.set(logo, {scale:1, delay:.25});
              t.delayedCall(.25, bounce, [logo]);
            }
          };
    }

    bannerAnim();

})();