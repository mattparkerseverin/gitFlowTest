(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = '#banner',

        temperature_wrapper = '#temperature_wrapper',
        temperature = '#temperature',

        ring_bg = '#ring_bg',
        ring_outer = '#ring_outer',
        ring_inner = '#ring_inner',
        _sun = '#sun',
        dot_wrapper = '#dot_wrapper',
        dot = '#dot',
        triangle_wrapper = '#triangle_wrapper',
        triangle = '#triangle',

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

        display = '#display',
        display_content = '#display_content',
        display_copy = '#display_copy',

        display2 = '#display2',
        display2_content = '#display2_content',

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
          copy0,
          copy1,
          copy2,
          copy3,

          temperature_wrapper,

          display,
          display_content,
          display_copy,

          display2,
          display2_content,

          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],

      setValues);

      t.set([temperature_wrapper, dot_wrapper, triangle_wrapper], {x:72, y:47}); //all the svgs have the same bounding box (156x156) so they're all set at the same position, and so that the gauges can rotate on their center, properly, see the folder /svg_for_reference_for_MH for visual reference, you may need to use these for your resizes
      t.set([temperature], {rotation:-89.9}); // this has to be set at 89.9 instead of 90 because of a GSAP bug, mentioned in the forums

      t.set(ring_inner, {drawSVG:"75% 100%"}); //sets initial positions and rotations of the gauge
      t.set(ring_outer, {drawSVG:"77.5% 100%"});
      t.set(triangle, {rotation:360*.75});
      t.set(dot, {rotation:360*.78});

      t.set([display, display_content, display_copy], {perspective:800, z:.01, rotationZ:.01, force3d:true});

      //init animation
      seq1();

      function seq1()
      {
          t.set([logo, breadcrumbs, copy0], {autoAlpha:1})

          //intro animation
          t.from([logo, breadcrumbs], .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy0, 1.25, {y:"+=25", ease:Power2.easeOut});
          t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

          //step 2 animation (display)
          t.to([display, display_copy, display_content], 1, {autoAlpha:1});
          t.from([display, display_copy, display_content], 2, {x:"+=25", rotationY:"+=45", ease:Power3.easeOut});

          t.from(display_content, 4, {scale:1.05, ease:Linear.easeNone});

          t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});

          //gauge appears on screen
          t.set([temperature_wrapper, dot_wrapper, triangle], {autoAlpha:1, delay:2.5});
          t.from([temperature_wrapper, dot_wrapper, triangle], 1, {x:"-=300", ease:Power4.easeInOut, delay:2.5});
          t.to([display_copy, display_content, display], 1, {x:"+=300", ease:Power4.easeInOut, delay:2.5});

          //inits gauge animation
          t.to(ring_inner, 2, {drawSVG:"7% 100%", ease:Linear.easeNone, delay:3});
          t.to(triangle, 2, {rotation:360*.07, ease:Linear.easeNone, delay:3});
          t.to(_sun, 2, {scale:1.4, ease:Linear.easeNone, transformOrigin:"50% 50%", delay:3});

          t.to(ring_outer, 2, {drawSVG:"9.5% 100%", ease:Linear.easeNone, delay:3});
          t.to(dot, 2, {rotation:360*.095, transformOrigin:"50% 50%", ease:Linear.easeNone, delay:3});

          //outer ring interupts previous animation and begins takeover
          t.to(ring_outer, .5, {drawSVG:"5% 100%", ease:Power1.easeOut, delay:4.5});
          t.to(dot, .5, {rotation:360*.05, transformOrigin:"50% 50%", ease:Power1.easeOut, delay:4.5});

          //changes the yellow to orange to red on sun
          t.to(ring_inner, 2, {stroke:"#f8b92c", ease:Power1.easeInOut, delay:2.25});
          t.to(ring_inner, 2.5, {stroke:"#ff0000", ease:Linear.easeNone, delay:3});

          //changes the yellow to orange to red on sun, tweening the class because the triangle doesn't seem to want to be identified by its ID
          t.to([_sun, ".st2"], 2, {fill:"#f8b92c", ease:Linear.easeNone, delay:2.25});
          t.to([_sun, ".st2"], 2.5, {fill:"#ff0000", ease:Linear.easeNone, delay:3});


          t.to(ring_inner, 2.1, {drawSVG:"27% 100%", ease:Power4.easeInOut, delay:5});
          t.to(triangle, 2.1, {rotation:360*.27, ease:Power4.easeInOut, delay:5});
          t.to(ring_inner, 2.1, {stroke:"#f8b92c", ease:Power4.easeInOut, delay:5});

          t.to([_sun, ".st2"], 2.1, {fill:"#f8b92c", ease:Power4.easeInOut, delay:5});
          t.to(_sun, 2.1, {scale:1, ease:Power4.easeInOut, delay:5});
          t.to(ring_outer, 2.1, {drawSVG:"25% 100%", ease:Power4.easeInOut, delay:5});
          t.to(dot, 2.1, {rotation:360*.25, ease:Power4.easeInOut, delay:5});

          t.to([temperature_wrapper, dot, triangle], 1, {x:"+=50", y:"+=12", ease:Power3.easeOut, delay:7.5});

          t.from(copy1, 1, {y:"+=15", ease:Power2.easeOut, delay:7.5});
          t.to(copy1, 1, {autoAlpha:1, ease:Power2.easeOut, delay:7.5});

          t.to([display2, display2_content], 1, {autoAlpha:1, delay:7.5});
          t.from([display2, display2_content], 1, {x:"+=25", rotationY:"-=45", transformOrigin:"35% 50%", ease:Power3.easeOut, delay:7.5});

          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:8.5});
          t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:8.5});

          t.to(copy2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:11.5});
          t.from(copy3, 1, {y:"+=15", ease:Power2.easeOut, delay:12});
          t.to(copy3, 1, {autoAlpha:1, ease:Power2.easeOut, delay:12});
          t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:13.25});
          t.set([cta, cta_carat], {autoAlpha:1, delay:13.5});
          t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:13.5, onComplete:function(){rolloverActive=true;}});
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