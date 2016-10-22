(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),
        lockup = document.getElementById('lockup'),

        phone = document.getElementById('phone'),
        droplets = document.getElementById('droplets'),

        graph = document.getElementById('graph'),
        graph2 = document.getElementById('graph2'),
          wave0_path0 = document.getElementById('wave0_path0'),
          wave1_path0 = document.getElementById('wave1_path0'),
          wave0_path1 = document.getElementById('wave0_path1'),
          wave1_path1 = document.getElementById('wave1_path1'),
          nodes = document.getElementById('nodes'),

        wave1_group = document.getElementById('wave1_group'),

        breadcrumbs = document.getElementById('breadcrumbs'),
        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        cta_carat = document.getElementById('cta_carat'),

        hit = document.getElementById('hit'),

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
          lockup,
          phone,
          droplets,
          graph,
          graph2,
          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      //set unique positions and other attributes you plan to animate here
      t.set([wave0_path1, wave1_path1], {autoAlpha:0});
      t.set(graph2, {opacity:.35});
      t.set(phone, {y:1});
      t.set(nodes, {autoAlpha:0});
      t.set(droplets, {autoAlpha:1, clip:"rect(100px 300px 300px 0px)"});

      //init animation
      animation();
    }

    function animation()
    {
        // animation
        t.set([logo/*, breadcrumbs*/, copy0], {autoAlpha:1})

        t.from([logo/*, breadcrumbs*/], .25, {y:"+=15", ease:Power1.easeOut});
        t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
        t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

        t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:4});

        t.from(phone, 1.25, {y:"+=50", ease:Power2.easeOut, delay:4.5});
        t.to([phone, graph, graph2], 1, {autoAlpha:1, ease:Power1.easeInOut, delay:4.5});

        t.from(wave0_path0, 2.5, {y:"+=150", ease:Power4.easeOut, delay:5});
        t.to(wave0_path0, 2.25, {morphSVG:wave0_path1, ease:Power2.easeOut, delay:5.25});
        t.from(wave1_path0, 2.5, {y:"+=150", ease:Power4.easeOut, delay:5.5});
        t.to(wave1_path0, 2.25, {morphSVG:wave1_path1, ease:Power2.easeOut, delay:5.75});

        t.to(wave1_path0, 1.5, {y:"+=10", ease:customEase, delay:7.5});
        t.to(wave1_path0, 1.5, {y:"-=10", ease:customEase, delay:9});
        t.to(wave1_path0, 1.5, {y:"+=10", ease:customEase, delay:10.5});
        t.to(wave1_path0, 1.5, {y:"-=10", ease:customEase, delay:12});

        t.from(droplets, 2.5, {clip:"rect(350px 300px 600px 0px)", ease:Power2.easeOut, delay:5.5});

        t.to(wave0_path0, 1.5, {y:"+=10", ease:customEase, delay:8});
        t.to(wave0_path0, 1.5, {y:"-=10", ease:customEase, delay:9.5});
        t.to(wave0_path0, 1.5, {y:"+=10", ease:customEase, delay:11});
        t.to(wave0_path0, 1.5, {y:"-=10", ease:customEase, delay:12.5});

        t.to(nodes, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:14});

        t.to([phone, graph, graph2, droplets], 1, {y:0, ease:Power2.easeInOut, delay:7.5});
        t.from(copy1, 1, {y:"+=25", ease:Power2.easeOut, delay:7.5});
        t.to(copy1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7.5});

        t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:8.5});
        t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:8.5});

        t.to(copy2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:12});
        t.from(copy3, 1, {y:"+=15", ease:Power2.easeOut, delay:12.75});
        t.to(copy3, 1, {autoAlpha:1, ease:Power2.easeOut, delay:12.75});
        // t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:13.25});
        t.to([cta, cta_carat], .5, {autoAlpha:1, delay:13.5});
        t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:13.5, onComplete:function(){rolloverActive=true;}});
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