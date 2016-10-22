(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        bg = document.getElementById('bg'),
        lock = document.getElementById('lock'),
        wheel = document.getElementById('wheel'),
        helmet = document.getElementById('helmet'),
        tablet = document.getElementById('tablet'),
        landscape = document.getElementById('landscape'),
        portrait = document.getElementById('portrait'),
        calendar_wrapper = document.getElementById('calendar_wrapper'),
        pump = document.getElementById('pump'),
        gloves = document.getElementById('gloves'),
        txt1 = document.getElementById('txt1'),
        txt2 = document.getElementById('txt2'),
        txt3 = document.getElementById('txt3'),
        logo = document.getElementById('logo'),
        logo2 = document.getElementById('logo2'),
        txt_from = document.getElementById('txt_from'),

        txt_footer = document.getElementById('txt_footer'),

        button = document.getElementById('button'),
        arrow = document.getElementById('arrow'),

        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false, //disables cta rollover animation until cta is visible

        t = TweenMax;

    function bannerInit()
    {
      t.set(
        [
          bg,
          lock,
          wheel,
          helmet,
          tablet,
          pump,
          gloves,
          txt1,
          txt2,
          txt3,
          txt_from,

          logo2,

          txt_footer,

          button,
          arrow,

        ],
      setValues);

      t.set(tablet, {scale:.6, x:125, y:123, rotation:-90});
      t.set(txt_footer, {y:8});
      t.set(tablet, {boxShadow:"-3px 3px 10px 0px rgba(0,0,0,.8)"});
      t.set([tablet, calendar_wrapper], {rotationX:180});
      //set unique positions and other values you plan to animate here
      //t.set(tablet, {y:100, x:120, scale:.7, rotation:90, autoAlpha:1}); // this is an example custom positioning that isn't 0,0, easier to set here than refer back to the css to see what the element's initial position value is
     
      //init animation
      animation();
    }

    function animation()
    {
        //animation
        t.set([bg, lock, wheel, helmet, pump, gloves, tablet, txt_footer], {autoAlpha:1});

        t.from(tablet, .7, {x:"+=150", ease:Power1.easeOut});

        t.from(lock, .8, {x:"-=100", ease:Power3.easeOut});

        t.from(wheel, .9, {x:"+=100", y:"-=200", ease:Power3.easeOut});

        t.from(helmet, 1, {y:"-=200", ease:Power3.easeOut});

        t.from(pump, 1.1, {x:"-=200", ease:Power3.easeOut});

        t.from(gloves, 1.2, {x:"+=100", ease:Power3.easeOut});


        t.to(txt1, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:1.75});

        t.to(txt1, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:3.75});

        t.to(txt2, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:4.25});

        t.to(txt2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:6.25});


        t.to(lock, .5, {x:"-=100", ease:Power1.easeIn, delay:6.7});

        t.to(wheel, .5, {x:"+=100", y:"-=200", ease:Power1.easeIn, delay:6.8});

        t.to(helmet, .5, {y:"-=200", ease:Power1.easeIn, delay:6.9});

        t.to(pump, .5, {x:"-=200", ease:Power1.easeIn, delay:7});

        t.to(gloves, .5, {x:"+=100", ease:Power1.easeIn, delay:7.1});


        t.to(tablet, .5, {x:78, y:20, rotation:0, scale:1, ease:Power2.easeOut, delay:7.1});
        t.to(tablet, .5, {boxShadow:"-3px 3px 10px 0px rgba(0,0,0,1)", delay:7.1});
        t.set([tablet, calendar_wrapper], {rotationX:0, delay:7.2});

        t.to(portrait, .75, {x:"+=117", ease:Power1.easeOut, delay:7.6});
        t.from(landscape, .75, {x:"-=117", ease:Power1.easeOut, delay:7.6});

        t.to(logo, .5, {x:"155", y:"-85", scale:1.4, ease:Power1.easeInOut, delay:8.});

        t.to(txt3, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:8.1});

        t.to(txt_from, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:8.2});



        t.to(txt_footer, .5, {y:0, ease:Power1.easeInOut, delay:8.7});
        t.from(txt_footer2, .5, {y:"+=8", autoAlpha:0, ease:Power1.easeInOut, delay:8.7});

        t.to(button, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:9});

        t.to(arrow, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:9, onComplete:function(){rolloverActive = true}});
  
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      if(rolloverActive)
      {
        t.to(arrow, .25, {x:2, ease:Power1.easeOut});
      }
    }

    function ctaOut()
    {
      if(rolloverActive)
      {
        t.to(arrow, .25, {x:0, ease:Power1.easeOut});
      }
    }

    bannerInit();

})();