(function() {
    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),

        phone_wrapper = document.getElementById('phone_wrapper'),
        phone = document.getElementById('phone'),

        bottom_wrapper = document.getElementById('bottom_wrapper'),
        bottom = document.getElementById('bottom'),

        chart = document.getElementById('chart'),
        chart2 = document.getElementById('chart2'),

        bars_wrapper_1 = document.getElementById('bars_wrapper_1'),
        bars_wrapper_2 = document.getElementById('bars_wrapper_2'),
        // bar0 = document.getElementById('bar0'),

        breadcrumbs = document.getElementById('breadcrumbs'),
        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        cta_carat = document.getElementById('cta_carat'),

        hit = document.getElementById('hit'),

        setValues = {x:0, y:0, autoAlpha:0},

        rolloverActive = false,

        t = TweenMax;

    function bannerAnim()
    {
      t.set(
        [
          copy0,
          copy1,
          copy2,
          copy3,

          chart,
          chart2,

          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      t.set(phone_wrapper, {x:0, y:0, autoAlpha:0});
        t.set(phone, {x:0, y:0});

      t.set(bottom_wrapper, {x:102, y:32});
        t.set(bottom, {x:0, y:66});

      t.set(bars_wrapper_1, {x:48, y:64, autoAlpha:0});
        t.set(bar0, {x:0, y:54, height:52, backgroundColor:"#fdf3b2"});
        t.set(bar1, {x:17, y:48, height:58, backgroundColor:"#fdf3b2"});
        t.set(bar2, {x:34, y:41, height:65, backgroundColor:"#fdf3b2"});
      t.set(bars_wrapper_2, {x:206, y:64, autoAlpha:0});
        t.set(bar3, {x:0, y:36, height:70, backgroundColor:"#faba13"});
        t.set(bar4, {x:17, y:19, height:87, backgroundColor:"#fdf3b2"});
        t.set(bar5, {x:34, y:0, height:106, backgroundColor:"#fdf3b2"});
        t.set(chart2, {y:"+=10"});
      //init animation
      seq1();

      function seq1()
      {
          t.set([logo, breadcrumbs, copy0], {autoAlpha:1})

          t.from(logo, .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
          t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

          t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:3});

          t.from(phone_wrapper, 1.25, {y:"+=50", ease:Power2.easeOut, delay:3.5});
          t.to(phone_wrapper, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:3.5});

          t.to(bottom, 1, {y:18, ease:Power4.easeInOut, delay:4.75});
          t.to(chart, .5, {autoAlpha:1, ease:Power1.easeInOut, delay:5.25});
          t.from(chart, .5, {y:"+=25", ease:Power2.easeOut, delay:5.25});

          t.set([bars_wrapper_1, bars_wrapper_2], {autoAlpha:1, delay:7});
          t.from([bars_wrapper_1, bars_wrapper_2], 1, {height:0, ease:Power4.easeInOut, delay:7});
          t.to(bottom, 1, {y:118, ease:Power4.easeInOut, delay:7});
          t.to(chart, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:7});
          t.to(chart, 1, {y:"+=50", ease:Power2.easeIn, delay:7});

          t.to(phone_wrapper, 1, {scale:.70, y:"+=30", ease:Power3.easeInOut, delay:9, rotationZ:.01, force3D:true});

          t.to(bottom, 1, {y:66, ease:Power4.easeInOut, delay:9});
          t.to(bars_wrapper_1, 1, {height:0, ease:Power4.easeInOut, delay:9});
          t.to(bars_wrapper_2, 1, {y:12, scaleY:.75, transformOrigin:"0% 100%", ease:Power4.easeInOut, delay:9});
          t.to(chart2, 1, {autoAlpha:1, ease:Power4.easeInOut, delay:9});
          t.from(chart2, 1, {y:"+=50", ease:Power4.easeInOut, delay:9});

          t.from(copy1, 1, {y:"+=15", ease:Power2.easeOut, delay:10});
          t.to(copy1, 1, {autoAlpha:1, ease:Power2.easeOut, delay:10});

          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:10.75});
          t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:10.75});

          t.to(copy2, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:13.25});
          // t.from(copy3, 1, {y:"+=10", ease:Power2.easeOut, delay:13.75});
          t.to(copy3, 1, {y:"-=5",autoAlpha:1, ease:Power2.easeOut, delay:13.75});
          // t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:14.25});
          t.set([cta, cta_carat], {autoAlpha:1, delay:14.25});
          t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:14.25, onComplete:function(){rolloverActive=true;}});
      }
    }

    function animateLine()
      {
        var paper = Raphael("canvas", 300, 250);
        var arrowPath = "M-4,220l58-82l36,25l60-64l58,34l94-75";

        var shape = paper.path(arrowPath).attr({
            stroke: '#F6B918',
            'stroke-width': '7',
            'arrow-end': 'classic-wide-long'
        }),
            pathLength = shape.getTotalLength(),
            drawLine = function () {
                console.log('shape.length', shape.length);
                var offset, subpath;
                offset = pathLength * (shape.length / pathLength)
                subpath = shape.getSubpath(0, offset);
                paper.clear();
                paper.path(subpath).attr({
                    stroke: "#F6B918",
                    'stroke-width': '7',
                    'arrow-end': 'block'
                });
            },
            tween = t.to(shape, 4, {
                length: pathLength,
                onUpdate: drawLine,
                ease: Power0.easeOut,
                onUpdateScope: this
            });
        shape.length = 0;
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