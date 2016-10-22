(function() {

    //this gives simple names to your div ids so you can use them in greensock, it also serves as a nice list/library
    var banner = document.getElementById('banner'),

        copy0 = document.getElementById('copy0'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),

        breadcrumbs = document.getElementById('breadcrumbs'),
        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        cta_carat = document.getElementById('cta_carat'),

        gradient = document.getElementById('gradient'),

        hit = document.getElementById('hit'),

        phone_and_animation_wrapper = document.getElementById('phone_and_animation_wrapper'),

        asterisk_wrapper = document.getElementById('asterisk_wrapper'),
        asteriskPaper = Raphael("asterisk_wrapper", 1000, 500),
        asteriskPath = "M31,100L9.4,83.3c6.9-7.7,26.3-26.8,27-27.6C34.1,55.3,2.6,47.4,0,46.5l8.4-25.2C20.9,26.4,32.1,32,41.9,38.1 C39.6,22.5,38.5,9.8,38.5,0H64c0,7-1.3,19.7-3.9,38.3c1.9-0.8,28.8-12.8,36.1-15.6l7.6,25.9c-10.6,2.4-22.8,4.7-36.8,7 c0,0,23.3,26.4,25.3,28.9L70.4,99L51.1,67.1C45.3,77.4,38.6,88.4,31,100z",

        binary_wrapper = document.getElementById('binary_wrapper'),
        binaryPaper = Raphael("binary_wrapper", 1000, 500),
        onePath = "M43.8,100H24.7V28.1C17.7,34.6,9.5,39.4,0,42.5V25.2c5-1.6,10.4-4.7,16.2-9.3c5.8-4.6,9.9-9.9,12-15.9h15.5V100",
        zeroPath = "M31.8,0C41.3,0,48.7,3.4,54,10.2c6.4,8,9.6,21.3,9.6,39.9c0,18.5-3.2,31.8-9.6,39.9c-5.3,6.7-12.7,10-22.2,10c-9.5,0-17.2-3.7-23-11C2.9,81.7,0,68.6,0,49.8C0,31.4,3.2,18.1,9.6,10C14.9,3.3,22.3,0,31.8,0z M31.8,15.6c-2.3,0-4.3,0.7-6.1,2.2c-1.8,1.4-3.2,4-4.1,7.8c-1.3,4.9-1.9,13-1.9,24.5s0.6,19.4,1.7,23.7c1.2,4.3,2.6,7.2,4.4,8.6c1.8,1.4,3.8,2.1,6,2.1s4.3-0.7,6.1-2.2c1.8-1.4,3.2-4,4.1-7.8c1.3-4.8,1.9-13,1.9-24.4s-0.6-19.4-1.7-23.7c-1.2-4.3-2.6-7.2-4.4-8.6C36.1,16.3,34.1,15.6,31.8,15.6z",

        binaryArray = [zeroPath, onePath],

        distanceArray = [750, 1050, 850, 700, 900, 1000, 850, 750, 1150, 750],

        makeBlue = false,

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

          gradient,

          phone,

          phone_and_animation_wrapper,

          breadcrumbs,
          logo,
          cta,
          cta_carat
        ],
      setValues);

      t.set([phone_and_animation_wrapper, phone], {autoAlpha:1});
      t.set(gradient, {autoAlpha:.5});
      t.set(binary_wrapper, {left:-135, top:-5, x:0, y:0, scale:.5, rotationY:-55, transformPerspective:500});
      t.set(asterisk_wrapper, {left:45, top:-5, x:0, y:0, scale:.8, rotationY:-50, transformPerspective:500});

      //init animation
      seq1();

      function seq1()
      {
          t.set([logo/*, breadcrumbs*/, copy0], {autoAlpha:1})

          t.from([logo/*, breadcrumbs*/], .25, {y:"+=15", ease:Power1.easeOut});
          t.from(copy0, 1.25, {y:"+=50", ease:Power2.easeOut});
          t.from(copy0, 1, {autoAlpha:0, ease:Power1.easeInOut});

          t.to(copy0, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:3});

          t.from(phone, .5, {opacity:0, delay:3.5, ease:Power1.easeInOut});
          t.delayedCall(3.5, initEncryption);

          t.to(gradient, .5, {autoAlpha:1, delay:6});
          t.to(phone_and_animation_wrapper, 1, {scale:.75, y:"+=15", ease:Power1.easeInOut, delay:6});

          t.from(copy1, 1, {y:"+=15", ease:Power2.easeOut, delay:7});
          t.to(copy1, 1, {autoAlpha:1, ease:Power1.easeInOut, delay:7});

          t.delayedCall(8.3, function(){makeBlue=true;});

          t.to(copy1, .5, {autoAlpha:0, ease:Power1.easeInOut, delay:10});
          t.from(copy2, 1, {y:"+=15", ease:Power2.easeOut, delay:10.5});
          t.to(copy2, 1, {autoAlpha:1, ease:Power2.easeOut, delay:10.5});
          // t.to(breadcrumbs, .25, {y:"+=15", ease:Power1.easeOut, delay:12});
          t.to([cta, cta_carat], .5, {autoAlpha:1, delay:11.5});
          t.from([cta, cta_carat], .5, {y:"+=15", ease:Power1.easeOut, delay:11.5, onComplete:function(){rolloverActive=true;}});
      }
    }

      function svgRowAsterisk(name, yNum, distance)
      {
        for(var i=0; i<=40; i++)
        {
          var shape = asteriskPaper.path(asteriskPath).attr({fill:'#E5E5E5', stroke:'none'});
              shape.node.id = "asterisk_"+name+"_"+i;

          var mySVG = document.getElementById("asterisk_"+name+"_"+i);

          t.set(mySVG, {scale:.2, x:(-25*i)-370, y:yNum});
          //edit custom ease with this - http://greweb.me/bezier-easing-editor/example/
          t.to(mySVG, 5, {x:"+="+distance, ease:new Ease(BezierEasing(0.82, 1.00, 0.81, 1.00)), onUpdateParams:[mySVG], onUpdate:function(myThingie)
            {
              if(makeBlue)
              {
                if(name == 9){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut});}
                if(name == 8){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.1});}
                if(name == 7){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.175});}
                if(name == 6){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.25});}
                if(name == 5){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.325});}
                if(name == 4){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.4});}
                if(name == 3){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.475});}
                if(myThingie._gsTransform.x > 50 && name == 2){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.55});}
                if(myThingie._gsTransform.x > 100 && name == 1){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.625});}
                if(myThingie._gsTransform.x > 150 && name == 0){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.7});}
              }
            }
          });
        }
      }

      function svgRowBinary(name, yNum, distance)
      {
        for(var i=0; i<=80; i++)
        {
          var binaryPath = binaryArray[Math.round(Math.random() * (binaryArray.length - 1))];
          var shape = binaryPaper.path(binaryPath).attr({fill:'#E5E5E5', stroke:'none'});
              shape.node.id = "binary_"+name+"_"+i;

          var mySVG = document.getElementById("binary_"+name+"_"+i);

          t.set(mySVG, {scale:.2, x:-16*i, y:yNum});
          //edit custom ease with this - http://greweb.me/bezier-easing-editor/example/
          t.to(mySVG, 5, {x:"+="+distance, ease:new Ease(BezierEasing(0.82, 1.00, 0.81, 1.00)), onUpdateParams:[mySVG], onUpdate:function(myThingie)
            {
              if(makeBlue)
              {
                if(myThingie._gsTransform.x > 25 && name == 9){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut});}
                if(myThingie._gsTransform.x > 75 && name == 8){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.1});}
                if(myThingie._gsTransform.x > 125 && name == 7){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.175});}
                if(myThingie._gsTransform.x > 175 && name == 6){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.25});}
                if(myThingie._gsTransform.x > 225 && name == 5){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.325});}
                if(myThingie._gsTransform.x > 275 && name == 4){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.4});}
                if(myThingie._gsTransform.x > 325 && name == 3){t.to(myThingie, .25, {fill:"#67aad2", ease:Power1.easeInOut, delay:.4});}
              }
            }
          });
        }
      }

      function initEncryption()
      {
        for(var i=0; i<10; i++)
        {
          svgRowBinary(i, i*25, distanceArray[i]);
          svgRowAsterisk(i, i*25, distanceArray[i]);
        }
      }

      function animateGraphRow2(graphic, row, range, xPos)
      {
        for(var i=0; i<=range; i++)
        {
          if(document.getElementById(graphic+'_'+row+'_'+i+'') > xPos)
          {
            t.to(document.getElementById(graphic+'_'+row+'_'+i+''), .5, {fill:"#67aad2"});
          }
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