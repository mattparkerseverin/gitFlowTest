(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',

        bar0 = '#bar0',
          icon0 = '#icon0',
        bar1 = '#bar1',
          icon1 = '#icon1',
        bar2 = '#bar2',
          icon2 = '#icon2',

        copy0 = '#copy0',
        copy1 = '#copy1',
        copy2 = '#copy2',
        copy3 = '#copy3',

        path0 = '#path0',
        path1 = '#path1',
        path2 = '#path2',
        path3 = '#path3',
        path4 = '#path4',
        path5 = '#path5',
        path6 = '#path6',
        path7 = '#path7',

        _sun = '#sun',
        sun_fill = '#sun_fill',
//          rays = [ray0, ray1, ray2, ray3, ray4, ray5, ray6, ray7],
          rays = '.st1',
        sunRays = '#sunRays',

        display = '#display',
        display_content = '#display_content',
        display_copy = '#display_copy',

        breadcrumbs = '#breadcrumbs',
        logo = '#logo',
        cta = '#cta',
        cta_carat = '#cta_carat',

        hit = '#hit',

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false,

        newpath,

        t = TweenMax;

    function bannerAnim()
    {
      t.set(
        [
          icon0,
          icon1,
          icon2,

          copy0,
          copy1,
          copy2,
          copy3,

          _sun,

          display,
          display_content,
          display_copy,

          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],

      setValues);

      t.set(bar0, {x:0, y:87});
      t.set(bar1, {x:0, y:124});
      t.set(bar2, {x:0, y:160});

      t.set(sun_fill, {height:160});

      t.set([display, display_content, display_copy], {perspective:800, z:.01, rotationZ:.01, force3d:true});

      t.set(rays, {drawSVG:"0%"});

      //init animation
      seq1();

      function seq1()
      {
          t.set([logo, breadcrumbs, copy0], {autoAlpha:1})

          t.from([logo, breadcrumbs], .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
          t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

          t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});
          t.set([_sun, sun_fill], {autoAlpha:1, delay:2.5});
          t.from([_sun, sun_fill], 1, {x:"-=300", ease:Power4.easeInOut, delay:2.5});

          t.to(sun_fill, 2, {height:85, ease:Linear.easeNone, delay:3});
          //color change sun fill
          t.to(".st0", 1, {fill: "rgb(212,195,117)", ease:Linear.easeNone, delay:3});
          t.to(".st0", 1, {fill: "rgb(250,235,128)", ease:Linear.easeNone, delay:4});

          //color change sun rays
          t.to(".st1", 1, {stroke: "rgb(212,195,117)", ease:Linear.easeNone, delay:3});
          t.to(".st1", 1, {stroke: "rgb(250,235,128)", ease:Linear.easeNone, delay:4});

          //sun ray length start at 0% length and 0 alpha
          t.from(rays, .25, {opacity:0, ease:Linear.easeNone, delay:3});
          t.to(rays, 2, {drawSVG:"100%", ease:Linear.easeNone, delay:3});

          //exit sun
          t.to([_sun, sun_fill], 1, {x:"+=250", ease:Power4.easeInOut, delay:5});

          //endframe animation
          t.set([bar0, bar1, bar2, icon0, icon1, icon2], {autoAlpha:1, delay:5.25});
          t.from([bar2, icon2], .75, {x:"-300", ease:Power3.easeInOut, delay:5.25});
          t.from([bar1, icon1], 1.25, {x:"-300", ease:Power3.easeInOut, delay:5.25});
          t.from([bar0, icon0], 1.75, {x:"-300", ease:Power3.easeInOut, delay:5.25});

          t.to(display, 1, {autoAlpha:1, delay:5.5});
          t.from([display, display_copy, display_content], 2, {x:"+=25", rotationY:"+=45", ease:Power3.easeOut, delay:5.5});
          t.from(copy1, 1, {y:"+=15", ease:Power2.easeOut, delay:5.5});
          t.to(copy1, 1, {autoAlpha:1, ease:Power2.easeOut, delay:5.5});

          t.to([display_copy, display_content], 1, {autoAlpha:1, ease:Power1.easeInOut, delay:5.5});
          t.from(display_content, 4, {scale:1.05, ease:Linear.easeNone, delay:5.5});

          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:7});
          t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:7});

          t.to(copy2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:10.75});
          t.from(copy3, 1, {y:"+=15", ease:Power2.easeOut, delay:11.25});
          t.to(copy3, 1, {autoAlpha:1, ease:Power2.easeOut, delay:11.25});
          t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:12.25});
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