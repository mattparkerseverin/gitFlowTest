$(document).ready(function(){

	var t = TweenMax;
	var hovering;

	function setImages(myArray) {
	    for (i = 0; i < myArray.length; i++) {
	        $('.container-thumbnails > .row').append('<div class="col-lg-3 col-md-3 col-s-3 col-xs-4 thumb" id="item_' + i + '"><img src="media/img/' + myArray[i] + '.jpg" width="250" height="250"></div>');

	        $('#item_' + i + '').append('<div class="description" id="description_' + i + '"></div>');

			showDescription();

	        $('#description_' + i + '').append('<p>'+descriptionArray[i].description+'<span><img src='+descriptionArray[i].icon+' width="20" height="20" style="margin-left:5px"></span></p>');

	        $('#item_' + i + '').click(
	            function() {
	                t.set($('.content-overlay'), {display:'block'});
	                t.from($('.content-overlay'), .5, {opacity:0, ease:Power1.easeInOut});

	                var num = $(this).attr('id').replace(/item_/, '');
	                // console.log(num);
	                t.delayedCall(.5, writeContent, [iframeArray[num], descriptionArray[num], iframeDetailsArray[num]]);
	                t.from([$('.row-content'), $('.row-details')], .5, {opacity:0, ease:Power1.easeInOut, delay:.5});

	                $('body').css({'overflow':'hidden'});
	            }
	        );

	        $('#item_' + i + '').hover(
	            function() {
	            	if(hovering){
	                	t.to($(this).children('img'), .5, {y:-25, ease:Power3.easeOut});
	                	t.to($(this).children('.description'), .5, {y:0, ease:Power3.easeOut});
	                }
	            },
	            function() {
	            	if(hovering){
		                t.to($(this).children('img'), .5, {y:0, ease:Power3.easeOut});
		                t.to($(this).children('.description'), .5, {y:50, ease:Power3.easeOut});
		            }
	            }
	        );
	    }
	}

	function showDescription(){
		if($(window).width() <= 767){
			hovering = false;
        	t.set($('.description'), {y:0});
        	t.set($('.thumb').children('img'), {y:-25});
        }

        else {
        	hovering = true;
        	t.set($('.description'), {y:50});
        	t.set($('.thumb').children('img'), {y:0});
        }
	}

	function writeContent(myContent, myContent2, myContent3){
		var prefix = myContent.contentPath.slice(0,24);
		buttonsShowHide();
		$(window).off("resize");

		if(prefix == "https://player.vimeo.com"){
			$('.col-content').prepend('<div class="wrap-content"><iframe class="video-width" src='+myContent.contentPath+' width='+myContent.contentWidth+' height='+myContent.contentHeight+' scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>');
		}

		else {
			$('.col-content').prepend('<div class="wrap-content"><iframe src='+myContent.contentPath+' width='+myContent.contentWidth+' height='+myContent.contentHeight+' scrolling="no" frameBorder="0"></iframe></div>');

			if($('.wrap-content > iframe').width() > 300) {
				$('.wrap-content > iframe').addClass('banner-lg');

				resizeiFrameWrapper();

				$(window).resize(function() {
					resizeiFrameWrapper();
				});
			}

			function resizeiFrameWrapper(){
				if($(window).width() <= 767){
					$('.wrap-content').css('width',''+myContent.contentWidthMin+'');
					$('.wrap-content').css('height',''+myContent.contentHeightMin+'');
				}

				else {
					$('.wrap-content').css('width',''+myContent.contentWidth+'');
					$('.wrap-content').css('height',''+myContent.contentHeight+'');
				}
			}
		}

		$(window).resize(function() {
			buttonsShowHide();
		});

		$('.wrap-content > iframe').contents().find('body').css({'background-color': '#000'});

		$('.row-title').append('<p>'+myContent2.description+'<span><img src='+myContent2.icon+' width="20" height="20" style="margin-left:3px"></span></p>');
		$('.row-details').append('<p>'+myContent3+'</p>');
	}

	function buttonsShowHide(){
		if($(window).width() <= 767){
			$('.btn-wrapper').css('display', 'none');
			$('.row-buttons').show();
		}

		else {
			$('.btn-wrapper').css('display', 'inline');
			$('.row-buttons').hide();
		}
	}

	$('.close-btn').click(
	    function() {
	        $('.content-overlay').hide();
	        $('.wrap-content').remove();
	        $('.row-details > p').remove();
	        $('.row-title > p').remove();

	        $('body').css({'overflow':'visible'});
	    }
	);

	$('.replay-btn').click(
	    function() {
	        $('.wrap-content > iframe').attr( 'src', function ( i, val ) { return val; });
	    }
	);

    window.onresize = function(event) {
        showDescription();
    }

	window.orientationchange = function(event) {
		showDescription();
	}

	setImages(contentArray);


});