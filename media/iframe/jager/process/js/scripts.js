$(document).ready(function() {

    var $banner = $("#banner"),
        $scene_1 = $("#scene_1"),
          $wheel = $("#wheel"),
          $diagonalBase = $("#diagonalBase"),
          $conveyor = $("#conveyor"),
          $disco = $("#disco"),
          $hotPlate = $("#hotPlate"),

        $scene_2 = $("#scene_2"),
          $yellowBg = $("#yellowBg"),
          
          $drip_1 = $("#drip_1"),
          $drip_2 = $("#drip_2"),
          $drip_3 = $("#drip_3"),
          $drip_4 = $("#drip_4"),
          $drip_5 = $("#drip_5"),
          $drip_6 = $("#drip_6"),

          $tree_1 = $("#tree_1"),
          $tree_2 = $("#tree_2"),
          $tree_3 = $("#tree_3"),
          $tree_4 = $("#tree_4"),
          $tree_5 = $("#tree_5"),
          $tree_6 = $("#tree_6"),

          $tube_1 = $("#tube_1"),
          $tube_2 = $("#tube_2"),
          $tube_3 = $("#tube_3"),
          $tube_4 = $("#tube_4"),
          $tube_5 = $("#tube_5"),
          $tube_6 = $("#tube_6"),

          $root_1 = $("#root_1"),
          $root_2 = $("#root_2"),
          $root_3 = $("#root_3"),
          $root_4 = $("#root_4"),
          $root_5 = $("#root_5"),
          $root_6 = $("#root_6"),

        $scene_3 = $("#scene_3"),
          $speaker = $("#speaker"),
          $speakerMic = $("#speakerMic"),
          $antlers = $("#antlers"),
          $tubing = $("#tubing"),
          $bubbler = $("#bubbler"),

          $beaker_1 = $("#beaker_1"),
          $beaker_2 = $("#beaker_2"),
          $beaker_3 = $("#beaker_3"),
          $beaker_4 = $("#beaker_4"),
          $beaker_5 = $("#beaker_5"),

        $scene_4 = $("#scene_4"),
          $barrel_1 = $("#barrel_1"),
          $barrel_1_legs = $("#barrel_1_legs"),
          $barrel_2 = $("#barrel_2"),
          $barrel_2_legs = $("#barrel_2_legs"),
          $cup = $("#cup"),

        $scene_5 = $("#scene_5"),
          $rivet_1 = $("#rivet_1"),
          $rivet_3 = $("#rivet_3"),
          $copy_1 = $("#copy_1"),
          $copy_2 = $("#copy_2"),

        $scene_6 = $("#scene_6"),
          $copy_3 = $("#copy_3"),
          $rivet_2 = $("#rivet_2"),
          $legal = $("#legal"),

        $border = $("#border"),
        $innerBorder = $("#innerBorder"),
        // $innerBorder_2 = $("#innerBorder_2"),
        $bottleEnd = $("#bottleEnd"),
        $ctaOver = $("#ctaOver"),
        $ctaOut = $("#ctaOut"),

        $hit = $("#hit"),
        $logo_black = $("#logo_black"),

        rolloverActive = false,

        t = TweenMax,
        tl = new TimelineLite({onComplete:
          function()
          {
            t.killAll();
            rolloverActive=true;
          }
        });

    onInit();

    function onInit()
    {
    //init positions
    t.set($scene_1, {left:0, top:-32});
      t.set($wheel, {left:52, top:20});
      t.set($diagonalBase, {left:134, top:26});
      t.set($disco, {left:190, top:38});
      t.set($conveyor, {left:0, top:239});
      t.set($hotPlate, {left:60, top:127});

    t.set($scene_2, {left:0, top:-20, autoAlpha:0});
      t.set($yellowBg, {left:3, top:43});
      
      t.set($tree_1, {left:8, top:33});
      t.set($tree_3, {left:98, top:33});
      t.set($tree_5, {left:188, top:33});
      t.set($tree_2, {left:56, top:16});
      t.set($tree_4, {left:148, top:16});
      t.set($tree_6, {left:238, top:16});

      t.set($tube_1, {left:13, top:186});
      t.set($tube_3, {left:103, top:186});
      t.set($tube_5, {left:193, top:186});
      t.set($tube_2, {left:58, top:186});
      t.set($tube_4, {left:148, top:186});
      t.set($tube_6, {left:238, top:186});

      t.set($drip_1, {left:26, top:165});
      t.set($drip_3, {left:116, top:165});
      t.set($drip_5, {left:206, top:165});
      t.set($drip_2, {left:74, top:165});
      t.set($drip_4, {left:164, top:165});
      t.set($drip_6, {left:254, top:165});

      t.set($root_1, {left:16, top:145});
      t.set($root_3, {left:106, top:145});
      t.set($root_5, {left:196, top:145});
      t.set($root_2, {left:64, top:115});
      t.set($root_4, {left:154, top:115});
      t.set($root_6, {left:244, top:115});

    t.set($scene_3, {left:0, top:-20, autoAlpha:0});
      t.set($speaker, {left:1, top:183});
      t.set($speakerMic, {left:0, top:2});
      t.set($antlers, {left:46, top:47});
      t.set($tubing, {left:126, top:20});
      t.set($bubbler, {left:305, top:53});

      t.set($beaker_1, {left:118, top:43});
      t.set($beaker_2, {left:144, top:44});
      t.set($beaker_3, {left:170, top:43});
      t.set($beaker_4, {left:196, top:44});
      t.set($beaker_5, {left:222, top:43});

    t.set($scene_4, {left:-30, top:-20, autoAlpha:0});
      t.set($barrel_1, {left:0, top:28});
      t.set($barrel_1_legs, {left:124, top:150});
      t.set($barrel_2, {left:181, top:27});
      t.set($barrel_2_legs, {left:181, top:27});
      t.set($cup, {left:37, top:194});

    t.set($scene_5, {left:0, top:0, autoAlpha:0});
      t.set($copy_1, {left:38, top:54});
      t.set($copy_2, {left:34, top:64, opacity:0});
      t.set($rivet_1, {left:21, top:19});
      t.set($rivet_3, {left:265, top:184});

      t.set($innerBorder, {left:9, top:9, autoAlpha:0});
      // t.set($innerBorder_2, {left:20, top:19, autoAlpha:0});

    t.set($scene_6, {left:0, top:0, autoAlpha:0});
      t.set($copy_3, {left:20, top:23});
      t.set($legal, {left:24, top:158});
      t.set($rivet_2, {left:265, top:19});

      t.set($bottleEnd, {left:175, top:16, autoAlpha:0});
      t.set([$ctaOver, $ctaOut], {left:22, top:107, autoAlpha:0});

      t.set($border, {left:0, top:0});

      t.set($hit, {left:0, top:0});
      t.set($logo_black, {left:0, top:218});


    //init sprite loops
    t.to($wheel, .25, {backgroundPosition:"-"+($wheel.width()*5)+"px 0px", ease:SteppedEase.config(5), repeat:-1});
    t.to($disco, 1, {backgroundPosition:"-"+($disco.width()*23)+"px 0px", ease:SteppedEase.config(23), repeat:-1});
    t.to($conveyor, .25, {backgroundPosition:"-"+($conveyor.width()*6)+"px 0px", ease:SteppedEase.config(6), repeat:-1});
    t.to($hotPlate, .5, {backgroundPosition:"-"+($hotPlate.width()*12)+"px 0px", ease:SteppedEase.config(12), repeat:-1});

    t.to([$tree_1, $tree_3, $tree_5], 1.8, {backgroundPosition:"-"+($tree_1.width()*46)+"px 0px", ease:SteppedEase.config(46), repeat:-1});
    t.to([$tree_2, $tree_4, $tree_6], 1.8, {backgroundPosition:"-"+($tree_2.width()*46)+"px 0px", ease:SteppedEase.config(46), repeat:-1});
    t.to([$tube_1, $tube_3, $tube_5], 1.8, {backgroundPosition:"-"+($tube_1.width()*46)+"px 0px", ease:SteppedEase.config(46), repeat:-1});
    t.to([$tube_2, $tube_4, $tube_6], 1.8, {backgroundPosition:"-"+($tube_2.width()*46)+"px 0px", ease:SteppedEase.config(46), repeat:-1});

    t.to([$root_1, $root_3, $root_5], .9, {top:"-=30", yoyo:true, repeat:-1, ease:Quad.easeInOut})
    t.to([$drip_1, $drip_3, $drip_5], .9, {top:"+=30", repeat:-1, ease:Quad.easeInOut, repeatDelay:.9})
    t.to([$drip_2, $drip_4, $drip_6], .9, {top:"+=30", repeat:-1, ease:Quad.easeInOut, repeatDelay:.9, delay:.9})
    t.to([$root_2, $root_4, $root_6], .9, {top:"+=30", yoyo:true, repeat:-1, ease:Quad.easeInOut})

    t.to($tubing, .1, {scaleY:1.05, yoyo:true, transformOrigin:"right bottom", repeat:-1})

    t.to([$beaker_1, $beaker_2, $beaker_3, $beaker_4, $beaker_5], 2.2, {backgroundPosition:"-"+($beaker_1.width()*53)+"px 0px", ease:SteppedEase.config(53), repeat:-1});

    // t.to($barrel_1, 2.2, {scale:1.05, yoyo:true, transformOrigin:"left center"})
    // t.to($barrel_1_legs, 2.2, {backgroundPosition:"-"+($barrel_1_legs.width()*53)+"px 0px", ease:SteppedEase.config(53));

    //init global animation
    tl.from($scene_1, 2.2, {left:"-=30", ease:Linear.easeNone})

      .set($scene_1, {autoAlpha:0})
      .set($scene_2, {autoAlpha:1})
        .from($scene_2, 2.2, {scale:1.1, ease:Linear.easeNone})

      .set($scene_2, {autoAlpha:0})
      .set($scene_3, {autoAlpha:1})
        .from($scene_3, 2.2, {left:"-=30", ease:Linear.easeNone})

      .set($scene_3, {autoAlpha:0})
      .set($scene_4, {autoAlpha:1})
        .from($scene_4, 2.2, {left:"+=30", ease:Linear.easeNone}, "scene_4")
        .to($barrel_1, 2.2, {scale:1.05}, "scene_4")
        .add(t.to($barrel_1_legs, 2.2, {backgroundPosition:"-"+($barrel_1_legs.width()*52)+"px 0px", ease:SteppedEase.config(52)}), "scene_4")
        .add(t.to($barrel_2, .075, {top:"+=1", ease:Quad.easeInOut, yoyo:true, repeat:2.2/.075}), "scene_4")

      .set($scene_4, {autoAlpha:0})
      .set($scene_5, {autoAlpha:1})
        .set($innerBorder, {autoAlpha:1})
        .from(copy_1, .25, {opacity:0})
        .to(copy_1, .25, {opacity:0}, "+=2")
        .to(copy_2, .25, {opacity:1})
        .to(copy_2, .25, {opacity:0}, "+=2")

      .set($scene_5, {autoAlpha:0})
      .set($scene_6, {autoAlpha:1})
        .from([copy_3, $rivet_2, $legal], 1, {opacity:0}, "end")
        .set($bottleEnd, {autoAlpha:1}, "end")
        .from($bottleEnd, .5, {top:""+$bottleEnd.height()+"", ease:Quart.easeOut}, "end")
        .to($ctaOut, .5, {autoAlpha:1})
      ;

      // tl.seek(14);
      console.log(tl.totalDuration());

      $hit.hover(
        function(event)
        {
          if(rolloverActive)
          {
            t.set($ctaOver, {autoAlpha:1});
          }
        },

        function(event)
        {
          if(rolloverActive)
          {
            t.set($ctaOver, {autoAlpha:0});
          }
        }
      );

      $hit.click(function(event)
      {
        EB.clickthrough();
      });
    }
  });