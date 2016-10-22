(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',

        gradient = '#gradient',
        bar0 = '#bar0',
          sun_small = '#sun_small',
        bar1 = '#bar1',
          snow_small = '#snow_small',
        bar2 = '#bar2',
          rain_small = '#rain_small',

        copy1 = '#copy1',
        copy2 = '#copy2',
        copy3 = '#copy3',
        copy4 = '#copy4',

        path0 = '#path0',
        path1 = '#path1',
        path2 = '#path2',
        path3 = '#path3',
        path4 = '#path4',
        path5 = '#path5',
        path6 = '#path6',
        path7 = '#path7',

        _sun = '#sun',
          rays = [ray0, ray1, ray2, ray3, ray4, ray5, ray6, ray7],
          // rays_2 = [ray_2_0, ray_2_1, ray_2_2, ray_2_3, ray_2_4, ray_2_5, ray_2_6, ray_2_7],
        sunRays = '#sunRays',
        rain = '#rain',
        snow = '#snow',
          snowContainer = '#snowContainer',

        _screen = '#screen',
        screen_container = '#screen_container',
        screen_content = '#screen_content',

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
          gradient,
          bar0,
          bar1,
          bar2,
          copy1,
          copy2,
          copy3,
          copy4,
          _sun,
          rain,
          snow,
          _screen,
          screen_container,
          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      t.set(bar0, {x:0, y:89});
        t.set(sun_small, {x:7, y:5});
      t.set(bar1, {x:0, y:123});
        t.set(snow_small, {x:6, y:8});
      t.set(bar2, {x:0, y:157});
        t.set(rain_small, {x:6, y:7});

      t.set([_screen, screen_container, screen_content, screen_copy], {perspective:800, z:.1, rotationZ:.1, force3d:true});
      t.set(screen_container, {x:41, y:79});
      t.set(screen_content, {x:-5, y:0});
      t.set(screen_copy, {x:44, y:23});

      t.set(rays, {drawSVG:"50%"});
      // t.set(rays_2, {drawSVG:"100% 100%"});

      //init animation
      seq1();

      function seq1()
      {
          t.set([logo, breadcrumbs, copy1], {autoAlpha:1})

          t.from([logo, breadcrumbs], .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy1, 1.25, {y:"+=50", ease:Power2.easeOut});
          t.from(copy1, 1, {autoAlpha:0, ease:Power1.easeInOut});

          t.to(copy1, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});
          t.set(_sun, {autoAlpha:1, delay:2.5});
          t.from(_sun, 1, {x:"-=300", ease:Power4.easeInOut, delay:2.5});

          t.from(rays, .1, {opacity:0, ease:Linear.easeNone, delay:3});
          t.from(rays, .5, {drawSVG:"0%", ease:Power1.easeInOut, delay:3});
          t.to(rays, .5, {drawSVG:"100% 100%", ease:Power1.easeInOut, delay:3.75});
          t.to(rays, .25, {opacity:0, ease:Linear.easeNone, delay:4});

          t.to(_sun, 1, {x:"+=250", ease:Power4.easeInOut, delay:4});

          t.delayedCall(4, snowCreate);
          t.set(snow, {autoAlpha:1, delay:4});
          t.from(snow, 1, {x:"-=250", ease:Power4.easeInOut, delay:4});

          t.delayedCall(3.25, snowAnimate, ["#snowFlake0", "#snowFlake1", "#snowFlake2", "#snowFlake3"]);
          t.delayedCall(3.65, snowAnimate, ["#snowFlake4", "#snowFlake5", "#snowFlake6", "#snowFlake7"]);
          t.delayedCall(4.05, snowAnimate, ["#snowFlake8", "#snowFlake9", "#snowFlake10", "#snowFlake11"]);
          t.delayedCall(4.55, snowAnimate, ["#snowFlake12", "#snowFlake13", "#snowFlake14", "#snowFlake15"]);
          t.delayedCall(5.05, snowAnimate, ["#snowFlake16", "#snowFlake17", "#snowFlake18", "#snowFlake19"]);
          t.delayedCall(5.55, snowAnimate, ["#snowFlake20", "#snowFlake21", "#snowFlake22", "#snowFlake23"]);
          t.delayedCall(6.05, snowAnimate, ["#snowFlake24", "#snowFlake25", "#snowFlake26", "#snowFlake27"]);
          t.delayedCall(6.55, snowAnimate, ["#snowFlake28", "#snowFlake29", "#snowFlake30", "#snowFlake31"]);

          t.delayedCall(5, rainCreate);
          t.to(snow, 1, {x:"+=250", ease:Power4.easeInOut, delay:5.5});
          t.set(rain, {autoAlpha:1, delay:5.5});
          t.from(rain, 1, {x:"-=250", ease:Power4.easeInOut, delay:5.5});

          t.delayedCall(5.25, rainAnimate, ["#rainDrop0", "#rainDrop1", "#rainDrop2"]);
          t.delayedCall(5.75, rainAnimate, ["#rainDrop3", "#rainDrop4", "#rainDrop5"]);
          t.delayedCall(6.25, rainAnimate, ["#rainDrop6", "#rainDrop7", "#rainDro8"]);
          t.delayedCall(6.75, rainAnimate, ["#rainDrop9", "#rainDrop10", "#rainDrop11"]);
          t.delayedCall(7.25, rainAnimate, ["#rainDrop12", "#rainDrop13", "#rainDrop14"]);
          t.delayedCall(7.75, rainAnimate, ["#rainDrop15", "#rainDrop16", "#rainDrop17"]);
          t.delayedCall(8.25, rainAnimate, ["#rainDrop18", "#rainDrop19", "#rainDrop20"]);
          t.delayedCall(8.75, rainAnimate, ["#rainDrop21", "#rainDrop22", "#rainDrop23"]);

          t.to(rain, 1, {x:"+=250", ease:Power4.easeInOut, delay:7});

          t.set([bar0, bar1, bar2], {autoAlpha:1, delay:7.25});
          t.set(gradient, {autoAlpha:.75, delay:7.25});
          t.from(bar2, .75, {x:"-300", ease:Power3.easeInOut, delay:7.25});
          t.from(bar1, 1.25, {x:"-300", ease:Power3.easeInOut, delay:7.25});
          t.from(bar0, 1.75, {x:"-300", ease:Power3.easeInOut, delay:7.25});

          t.to([_screen, screen_container], 1, {autoAlpha:1, delay:8.5});
          t.from([_screen, screen_container], 2, {x:"+=25", rotationY:"+=45", ease:Power3.easeOut, delay:8.5});
          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:8.5});
          t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:8.5});

          t.from([screen_copy, screen_content], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:8.5});
          // t.from(screen_copy, 4, {scale:1.1, y:"+=5", ease:Linear.easeNone, delay:8.5});
          t.from(screen_content, 4, {scale:1.1, ease:Linear.easeNone, delay:8.5});

          t.from(copy3, 1, {y:"+=15", ease:Power2.easeOut, delay:10.25});
          t.to(copy3, 1, {autoAlpha:1, ease:Power2.easeOut, delay:10.25});

          t.to(copy3, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:12.75});
          t.from(copy4, 1, {y:"+=15", ease:Power2.easeOut, delay:13.25});
          t.to(copy4, 1, {autoAlpha:1, ease:Power2.easeOut, delay:13.25});
          t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:14.25});
          t.set([cta, cta_carat], {autoAlpha:1, delay:14.5});
          t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:14.5, onComplete:function(){rolloverActive=true;}});
      }
    }

    //
    function snowCreate()
    {
      for(var i=0; i<32; i++)
      {
        var element = document.createElement("div");
            element.className = "snowFlake";
            element.id = "snowFlake"+i.toString();
            console.log(element.id);

        document.getElementById("snowContainer").appendChild(element);

        t.set("#"+element.id, {opacity:0, x:0, y:0});
      }
    }

    function snowAnimate(ID0, ID1, ID2, ID3)
    {
        t.set(ID0, {x:130, y:0, opacity:1});
        t.set(ID1, {x:150, y:0, opacity:1});
        t.set(ID2, {x:170, y:0, opacity:1});
        t.set(ID3, {x:190, y:0, opacity:1});
        t.to(ID0, 2, {x:"-=100", y:"+=150", rotation:"-=90", ease:Linear.easeNone, delay:0});
        t.to(ID1, 2, {x:"-=90", y:"+=150", rotation:"-=90", ease:Linear.easeNone, delay:.1});
        t.to(ID2, 2, {x:"-=80", y:"+=150", rotation:"-=90", ease:Linear.easeNone, delay:.2});
        t.to(ID3, 2, {x:"-=70", y:"+=150", rotation:"-=90", ease:Linear.easeNone, delay:.3});

        t.to(ID0, .5, {autoAlpha:0, ease:Linear.easeNone, delay:.9});
        t.to(ID1, .5, {autoAlpha:0, ease:Linear.easeNone, delay:1});
        t.to(ID2, .5, {autoAlpha:0, ease:Linear.easeNone, delay:1.1});
        t.to(ID3, .5, {autoAlpha:0, ease:Linear.easeNone, delay:1.2});
    }

    function rainCreate()
    {
      for(var i=0; i<32; i++)
      {
        var element = document.createElement("div");
            element.className = "rainDrop";
            element.id = "rainDrop"+i.toString();
            console.log(element.id);

        document.getElementById("rainContainer").appendChild(element);

        t.set("#"+element.id, {opacity:0, x:0, y:0});
      }
    }

    function rainAnimate(ID0, ID1, ID2)
    {
        t.set(ID0, {x:130, y:0, opacity:1, scale:.7});
        t.set(ID1, {x:160, y:0, opacity:1, scale:.7});
        t.set(ID2, {x:190, y:0, opacity:1, scale:.7});

        t.to(ID0, 1.5, {x:"-=100", y:"+=150", scale:1, ease:Linear.easeNone, delay:0});
        t.to(ID1, 1.5, {x:"-=100", y:"+=150", scale:1, ease:Linear.easeNone, delay:.2});
        t.to(ID2, 1.5, {x:"-=100", y:"+=150", scale:1, ease:Linear.easeNone, delay:.1});

        t.to(ID0, .5, {autoAlpha:0, ease:Linear.easeNone, delay:.7});
        t.to(ID1, .5, {autoAlpha:0, ease:Linear.easeNone, delay:.9});
        t.to(ID2, .5, {autoAlpha:0, ease:Linear.easeNone, delay:.8});
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