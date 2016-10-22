(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var $banner = document.getElementById('banner'),
        $hit = document.getElementById('hit'),

        $hero1 = document.getElementById('hero1'),

        $logo = document.getElementById('logo'),
        $copy0 = document.getElementById('copy0'),
        $copy1 = document.getElementById('copy1'),
        $copy2 = document.getElementById('copy2'),
        $cta = document.getElementById('cta'),
        $cta_copy = document.getElementById('cta_copy'),

        $halfOff = document.getElementById('halfOff'),
        $pattern = document.getElementById('pattern'),

        $svgGroup = document.getElementById('svgGroup'),
          $path0 = document.getElementById('path0'),
          $path1 = document.getElementById('path1'),
          $path2 = document.getElementById('path2'),

        t = TweenMax;

    function bannerAnim()
    {
      t.set(
      [
        $copy0,
        $copy1,
        $copy2,
        $logo,
        $cta,
        $cta_copy,
        $halfOff,
        $pattern,
        $svgGroup,
        $halfOff
      ], {x:0, y:0});

      t.set([$copy0, $copy1, $copy2], {width:200});

      t.set($path0, {x:-100, y:0});

      t.set($hero1, {x:20, y:-20, force3D:true, rotationZ:.01});
      t.set($cta, {x:12, y:202});

      t.set($path0, {opacity:1});
      t.set($path1, {opacity:0});
      t.set($path2, {opacity:0});

      // //init animation
      seq1();

      function seq1()
      {
        t.to($path0, 1, {morphSVG:$path1, ease:Power3.easeInOut});
        t.from($hero1, 1, {x:"+=200", y:"-=50", ease:Power3.easeOut});
        t.to($hero1, 9, {x:"-=40", y:"+=20", ease:Linear.easeNone, delay:.75});

        t.from($copy0, 1, {width:0, ease:Power3.easeOut, delay:1});

        t.to($copy0, 1, {width:0, ease:Power4.easeIn, delay:5});
        t.from($copy1, 1, {width:0, ease:Power3.easeOut, delay:6.5});
        t.from($copy2, 1, {width:0, ease:Power3.easeOut, delay:7.5, onComplete:function(){rolloverActive=true;}});
      }
    }

    document.getElementById('hit').onmouseover =
      function(event)
      {
        {
            t.set(cta, {backgroundColor:"#ff51c9", ease:Power1.easeInOut});
        }
      };

    document.getElementById('hit').onmouseout =
      function(event)
      {
        {
            t.set(cta, {backgroundColor:"#0f81ff", ease:Power1.easeInOut});
        }
      };

    bannerAnim();

})();