(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var $banner = document.getElementById('banner'),
        $hit = document.getElementById('hit'),

        $hero1_svg = document.getElementById('hero1_svg'),
          $hero1 = document.getElementById('hero1'),
        $hero2 = document.getElementById('hero2'),

        $logo = document.getElementById('logo'),
        $copy1 = document.getElementById('copy1'),
        $copy2 = document.getElementById('copy2'),
        $cta = document.getElementById('cta'),
        $cta_copy = document.getElementById('cta_copy'),

        $svgPath = document.getElementById('svgPath'),

        $path0 = document.getElementById('path0'),
        $path1 = document.getElementById('path1'),

        rolloverActive = false,

        t = TweenMax;

    function bannerAnim()
    {
      t.set([
        $copy1,
        $copy2,
        $cta_copy,
        $logo,
      ],

      {x:0, y:0, autoAlpha:1});

      t.set($cta, {x:18, y:200});

      t.set($path0, {opacity:0});
      t.set($path1, {opacity:0});

      t.set($hero1_svg, {x:0, y:0});
      t.set($hero2, {x:0, y:0});

      //init animation
      seq1();

      function seq1()
      {
        // MorphSVGPlugin.convertToPath("#path1");
        t.from($hero2, 9, {scale:1.4, transformOrigin:"100% 0%", rotationZ:.01, force3D:true});

        t.to($path0, 2, {morphSVG:$path1, ease:Power3.easeOut, delay:.5});

        t.from($hero1, 9, {x:"+=25", y:"+=50", rotationZ:.01, force3D:true});

        t.from($copy1, 1, {width:0, ease:Power3.easeOut});

        t.from($copy2, 1, {width:0, ease:Power3.easeOut, delay:3});
      }
    }

    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
            t.set(cta, {backgroundColor:"#0f81ff", ease:Power1.easeInOut});
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
            t.set(cta, {backgroundColor:"#ff51c9", ease:Power1.easeInOut});
        }
      };

    bannerAnim();

})();