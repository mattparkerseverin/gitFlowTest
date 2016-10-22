(function() {
    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),

        phone_wrapper = document.getElementById('phone_wrapper'),
        phone = document.getElementById('phone'),
        phone_fill = document.getElementById('phone_fill'),
        pen = document.getElementById('pen'),
        phone_2 = document.getElementById('phone_2'),

        bar0 = document.getElementById('bar0'),
        bar1 = document.getElementById('bar1'),
        bar2 = document.getElementById('bar2'),
        bar3 = document.getElementById('bar3'),
        bar4 = document.getElementById('bar4'),
        bar5 = document.getElementById('bar5'),
        bar6 = document.getElementById('bar6'),
        bar7 = document.getElementById('bar7'),
        bar8 = document.getElementById('bar8'),
        bar9 = document.getElementById('bar9'),

        write_up_0 = document.getElementById('write_up_0'),
        write_up_1 = document.getElementById('write_up_1'),
        write_up_2 = document.getElementById('write_up_2'),

        // breadcrumbs = document.getElementById('breadcrumbs'),
        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        cta_carat = document.getElementById('cta_carat'),

        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false,

        newpath,

        t = TweenMax;

    function bannerAnim()
    {
      t.set(
        [
          copy0,
          copy1,
          copy2,
          copy3,

          phone_2,

          // breadcrumbs,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      t.set(phone_wrapper, {x:21, y:18, autoAlpha:0});
      t.set(phone, {x:64});
      t.set(phone_fill, {x:64});
      t.set(write_up_0, {x:73, y:56, autoAlpha:0});
      t.set(write_up_1, {x:132, y:70, autoAlpha:0});
      t.set(write_up_2, {x:90, y:160, autoAlpha:0});
      t.set(pen, {x:44, y:60});

      t.set(phone_2, {x:110, y:69});

      t.set(bar0, {x:82, y:87});
      t.set(bar1, {x:103, y:97});
      t.set(bar2, {x:124, y:84});
      t.set(bar3, {x:145, y:78});
      t.set(bar4, {x:166, y:68});

      t.set(bar5, {x:0, y:147});
      t.set(bar6, {x:22, y:120});

      t.set(bar7, {x:198, y:58});
      t.set(bar8, {x:219, y:49});
      t.set(bar9, {x:240, y:40});

      //init animation
      seq1();

      function seq1()
      {
          t.set([logo/*, breadcrumbs*/, copy0], {autoAlpha:1})

          t.from([logo/*, breadcrumbs*/], .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
          t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

          t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});

          t.to(phone_wrapper, .5, {autoAlpha:1, ease:Linear.easeNone, delay:3});

          // t.from(bar0, .5, {y:"+=150", ease:Power3.easeOut, delay:3.5});
          // t.from(bar1, .6, {y:"+=150", ease:Power3.easeOut, delay:3.6});
          // t.from(bar2, .7, {y:"+=150", ease:Power3.easeOut, delay:3.7});
          // t.from(bar3, .8, {y:"+=150", ease:Power3.easeOut, delay:3.8});
          // t.from(bar4, .9, {y:"+=150", ease:Power3.easeOut, delay:3.9});

          t.from(pen, .5, {x:"+=50", ease:Power3.easeOut, delay:3.5});

          t.set(write_up_0, {scale:.5, autoAlpha:1, transformOrigin:"top left", delay:4});
          t.spriteSheet( write_up_0, {
              width: 264,
              offsetX: 0,
              offsetY: 0,
              stepX: 88,
              stepY: 105,
              count: 12
          }, .5, { delay:4 });

          t.set(write_up_1, {scale:.5, autoAlpha:1, transformOrigin:"top left", delay:5});
          t.spriteSheet( write_up_1, {
                width: 420,
                offsetX: 0,
                offsetY: 0,
                stepX: 84,
                stepY: 139,
                count: 24
            }, 1, { delay:5 });

          t.set(write_up_2, {scale:.5, autoAlpha:1, transformOrigin:"top left", delay:6});
          t.spriteSheet( write_up_2, {
                width: 440,
                offsetX: 0,
                offsetY: 0,
                stepX: 88,
                stepY: 71,
                count: 24
            }, 1, { delay:6 });

          t.to(phone_wrapper, 1, {scale:.63, y:"-=5", ease:Power3.easeInOut, delay:7, rotationZ:.01, force3D:true});
          t.to(white_bot, 1, {y:"+=5", ease:Power3.easeInOut, delay:7});

          // t.set(phone, {autoAlpha:0, delay:9});
          // t.set(phone_2, {autoAlpha:1, delay:9});

          t.from(bar5, .7, {y:"+=200", ease:Power3.easeOut, delay:6.5});
          t.from(bar6, .8, {y:"+=200", ease:Power3.easeOut, delay:6.6});
          t.from(bar7, .9, {y:"+=200", ease:Power3.easeOut, delay:6.7});
          t.from(bar8, 1, {y:"+=200", ease:Power3.easeOut, delay:6.8});
          t.from(bar9, 1.1, {y:"+=200", ease:Power3.easeOut, delay:6.9});

          t.from(copy1, 1, {y:"+=15", ease:Power2.easeOut, delay:8});
          t.to(copy1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:8});


          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:8.75});
          t.to(copy2, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:8.75});

          t.to(copy2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:11.25});
          t.from(copy3, 1, {y:"+=15", ease:Power2.easeOut, delay:11.75});
          t.to(copy3, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:11.75});
          // t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:13.25});
          t.set([cta, cta_carat], {autoAlpha:1, delay:12.5});
          t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:12.5, onComplete:function(){rolloverActive=true;}});
      }
    }

    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
          if(rolloverActive)
          {
            t.to(cta_carat, .25, {x:"+=3", ease:Power1.easeOut});
          }
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
          if(rolloverActive)
          {
            t.to(cta_carat, .25, {x:0, ease:Power1.easeOut});
          }
        }
      };

    bannerAnim();

})();