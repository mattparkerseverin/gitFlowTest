(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var $banner = document.getElementById("banner"),
        $hit = document.getElementById("hit"),

        $pwc = document.getElementById("pwc"),
        $fallback = document.getElementById("fallback"),

        $s0 = document.getElementById("s0"),
        $s1 = document.getElementById("s1"),
        $s2 = document.getElementById("s2"),
        $s3 = document.getElementById("s3"),
        $s4 = document.getElementById("s4"),
        $s5 = document.getElementById("s5"),
          $boxes = [$s0, $s1, $s2, $s3, $s4, $s5];

        $legal = document.getElementById("legal"),

        $legal2 = document.getElementById("legal2"),
        $ctaOuter = document.getElementById("ctaOuter"),
        $ctaInner = document.getElementById("ctaInner"),

        $bg = document.getElementById("bg"),
        $bg_reveal = document.getElementById("bg_reveal"),
          $c0 = document.getElementById("c0"),
          $c1 = document.getElementById("c1"),
          $c2 = document.getElementById("c2"),
          $c3 = document.getElementById("c3"),
          $c4 = document.getElementById("c4"),
          $c5 = document.getElementById("c5"),
          $c6 = document.getElementById("c6"),
        $teacher0 = document.getElementById("teacher0"),
        $teacher1 = document.getElementById("teacher1"),
        $kids = document.getElementById("kids"),

        $content_blocker = document.getElementById("content_blocker"),

        $copy0 = document.getElementById("copy0"),
        $logoWhite = document.getElementById("logoWhite"),

        // http://greweb.me/bezier-easing-editor/example/
        customEase = new Ease(BezierEasing( 0.5, 0, 0.5, 1)),

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false,

        t = TweenMax;

    function bannerInit()
    {
      //set unique positions and other values you plan to animate here
      t.set([$bg, $bg_reveal, $teacher0, $teacher1, $kids],{x:0, scale:.65, force3D:true, z:.001, transformOrigin:"right bottom"});
      t.set($teacher1, {autoAlpha:0});
      t.set($content_blocker, {x:0, y:0});

      t.set([$legal2, $logoWhite, $copy0, $ctaOuter], setValues);

      t.set([$bg, $bg_reveal], {y:-25});
      t.set([$teacher0, $teacher1], {y:0});
      t.set($kids, {y:25});

      t.set($legal, {bottom:0, autoAlpha:0});
      t.set($legal2, {bottom:0, right:5, autoAlpha:0});
      t.set($ctaOuter, {autoAlpha:0, x:78, y:167});

      //init animation
      intro();
    }

    function intro()
    {
      function checkMixBlendMode() {
        if ('CSS' in window && 'supports' in window.CSS) {
          var supportsMixBlendMode = window.CSS.supports('mix-blend-mode', 'multiply');
          return supportsMixBlendMode;
          //var supportsBackgroundBlendMode = window.CSS.supports('background-blend-mode', 'multiply');
          //var supportsIsolation = window.CSS.supports('isolation', 'isolate');
        }
      }

      // if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) || (navigator.userAgent.indexOf('MSIE') != -1){
      if (checkMixBlendMode()) {
        var s0w = $s0.offsetWidth,
            s0h = $s0.offsetHeight,
            s1w = $s1.offsetWidth,
            s1h = $s1.offsetHeight,
            s2w = $s2.offsetWidth,
            s2h = $s2.offsetHeight,
            s3w = $s3.offsetWidth,
            s3h = $s3.offsetHeight,
            s4w = $s4.offsetWidth,
            s4h = $s4.offsetHeight,
            s5w = $s5.offsetWidth,
            s5h = $s5.offsetHeight;

          //sets pre animation widths and heights of boxes before they animate across the banner
          t.set($pwc, {right:400, y:139, transformOrigin:"top right"});
          t.set($s0, {width:192, height:6, transformOrigin:"right top"});
          t.set($s1, {width:75, height:0, transformOrigin:"left bottom"});
          t.set($s4, {width:150, height:0, transformOrigin:"left bottom"});
          t.set($s3, {width:225, height:0, transformOrigin:"left bottom"});
          t.set($s5, {width:0, height:80, transformOrigin:"left bottom"});
          t.set($s2, {width:0, height:160, transformOrigin:"left bottom"});

          //animates boxes across or up
          t.to($s1, 0.5, {height:250, ease:Power3.easeInOut, delay:0});
          t.to($s4, 0.5, {height:250, ease:Power3.easeInOut, delay:0.1});
          t.to($s3, 0.5, {height:250, ease:Power3.easeInOut, delay:0.2});
          t.to($s5, 0.5, {width:300, ease:Power3.easeInOut, delay:0.2});
          t.to($s2, 0.5, {width:300, ease:Power3.easeInOut, delay:0.3});

          //sets 2nd position of box animation
          t.to([$s1, $s2, $s3, $s4, $s5], 1, {left:171, bottom:129, ease:Power3.easeInOut, delay:0.8});
          t.to($s0, 1, {top:119, right:127, ease:Power3.easeInOut, delay:0.8});

          //box animation contracting into lockup, references the box height/width variables declared at the top
          t.to($s5, 0.6, {height:s5h, width:s5w, ease:Power3.easeInOut, delay:1.2});
          t.to($s1, 0.6, {height:s1h, width:s1w, ease:Power3.easeInOut, delay:1.1});
          t.to($s2, 0.8, {height:s2h, width:s2w, ease:Power3.easeInOut, delay:1.0});
          t.to($s4, 0.9, {height:s4h, width:s4w, ease:Power3.easeInOut, delay:0.9});
          t.to($s3, 1,  {height:s3h, width:s3w, ease:Power3.easeInOut, delay:0.8});

          //left box pulls in, logo (pwc) enters
          t.to($s0, 1,  {width:24, ease:Power3.easeInOut, delay:1.05});
          t.to($pwc, 1, {right:114, ease:Power3.easeInOut, delay:1.05, onComplete:animation});

          t.to($legal, .5, {bottom:0, autoAlpha:1, delay:1.5});
      }

      else {
        //Show static animation if browser doesn't support blend modes
        $s0.style.display = "none";
        $s1.style.display = "none";
        $s2.style.display = "none";
        $s3.style.display = "none";
        $s4.style.display = "none";
        $s5.style.display = "none";
        $pwc.style.display = "none";
        $fallback.style.display = "block";

        t.set($fallback, {x:-590, y:-42, scale:1, transformOrigin:"top left", rotationZ:.01, force3D:true});

        t.to($fallback, 1.5, {x:87, y:76, scale:1/7, ease:Power4.easeInOut, delay:1});

        t.to($legal, .5, {bottom:0, autoAlpha:1, delay:1});

        t.delayedCall(3, animation);
      }

      function animation()
      {
        t.to([$legal, $boxes, $pwc, $fallback, $legal], .25, {autoAlpha:0, delay:1.5});
        t.to($banner, .5, {css:{backgroundColor:"#aba398"}, delay:1.5});
        t.to($content_blocker, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:1.5});

        //if browser is IE
        if(IEversion !== false)
        {
          t.set([$bg, $bg_reveal, $teacher0, $teacher1, $kids], {x:20, y:0, scale:.65, ease:Power1.easeInOut, delay:1.5});

          t.to($c0, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});
          t.to([$c1, $c4], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:3.5});
          t.to([$c2, $c5], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:4.5});
          t.to([$c3, $c6], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:5.5});

          t.to($teacher0, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:4.5});
          t.to($teacher1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:4.5});

          t.delayedCall(7, animation2);
        }

        //if browser isn't IE
        else {
          t.to([$bg, $bg_reveal, $teacher0, $teacher1, $kids], 6, {x:20, y:0, scale:.65, ease:Power1.easeInOut, delay:1.5});

          t.to($c0, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:2.5});
          t.to([$c1, $c4], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:3.5});
          t.to([$c2, $c5], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:4.5});
          t.to([$c3, $c6], 1, {autoAlpha:0, ease:Power1.easeInOut, delay:5.5});

          t.to($teacher0, 1, {autoAlpha:0, ease:Power1.easeInOut, delay:4.5});
          t.to($teacher1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:4.5});

          t.delayedCall(9, animation2);
        }
      }

      function animation2()
      {
        t.to([$bg, $bg_reveal, $teacher0, $teacher1, $kids], .5, {autoAlpha:0, ease:Power1.easeInOut});

        t.to([$legal2, $logoWhite], .25, {autoAlpha:1, ease:Power1.easeInOut, delay:.5});
        t.from($copy0, 1.25, {y:"+=50", ease:Power1.easeOut});
        t.to($copy0, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:.5});
        t.to($ctaOuter, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:1.75, onComplete:function(){rolloverActive=true;}});
      }
    }

    hit.onmouseover = ctaOver;
    hit.onmouseout = ctaOut;

    function ctaOver()
    {
      if(rolloverActive)
      {
        t.to($ctaInner, .25, {css:{backgroundColor:"#8E141F"}, ease:Power1.easeInOut});
      }
    }

    function ctaOut()
    {
      if(rolloverActive)
      {
        t.to($ctaInner, .25, {css:{backgroundColor:"#ba1b26"}, ease:Power1.easeInOut});
      }
    }

    bannerInit();

})();