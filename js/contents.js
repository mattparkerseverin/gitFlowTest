var h5 = 'media/type/h5.svg';
var ae = 'media/type/ae.svg';
var fla = 'media/type/flash.svg';

var bannerWidth = '300';
var bannerHeight = '250';

var videoWidth = '720';
var videoHeight = '405';

var videoEmbedSettings = '?title=0&byline=0&portrait=0&autoplay=true';

var contentArray = [];

for(var i=0; i<54; i++){
	contentArray.push('thumb'+i+'');
}

var descriptionArray = [
	{description: 'Pond 5: Five ', icon: h5 },
	{description: 'Pond 5: Space ', icon: h5 },
	{description: 'Pond 5: Surf ', icon: h5 },
	{description: 'Shutterstock: Criteo ', icon: h5 },
	{description: 'Sherwin-Williams: Cube ', icon: h5 },
	{description: 'Hawaiian Tropic: Weightless ', icon: h5 },
	{description: 'Rhinocort ', icon: h5 },
	{description: 'Jagermeister: Process ', icon: h5 },
	{description: 'Rhinocort: Quiz ', icon: h5 },
	{description: 'Sherwin-Williams: Color Card ', icon: h5 },
	{description: 'Samsung: Durability ', icon: h5 },
	{description: 'Samsung: Encryption ', icon: h5 },
	{description: 'Samsung: SSD ', icon: h5 },
	{description: 'Citrix Pitch End Card ', icon: ae },
	{description: 'PwC: Earn Your Future ', icon: h5 },
	{description: 'PNC Bank: Nano ', icon: h5 },
	{description: 'Samsung: SPen ', icon: h5 },
	{description: 'Purdy: Lasts Longer ', icon: h5 },
	{description: 'Duplicolor: Spray ', icon: h5 },
	{description: 'PwC / Strategy& ', icon: h5 },
	{description: 'The Kibitz Podcast: Ep. 2 ', icon: ae },
	{description: 'The Kibitz Podcast: Ep. 3 ', icon: ae },
	{description: 'Bloomberg: Labyrinth ', icon: ae },
	{description: 'JP Morgan: Brand ', icon: h5 },
	{description: 'The Kibitz Podcast: Ep. 1 ', icon: ae },
	{description: 'PwC: Chobani ', icon: h5 },
	{description: 'Google: Chromegen ', icon: fla },
	{description: 'Symbicort: MOA Module ', icon: h5 },
	{description: 'Shutterstock: Teams ', icon: h5 },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'FEMA: Go Bag ', icon: ae },
	{description: 'FEMA: Flood ', icon: fla },
	{description: 'Krylon: 127 ', icon: ae },
	{description: 'PNC: Brand ', icon: fla },
	{description: 'Microsoft: Efficiencies ', icon: fla },
	{description: 'Microsoft: Compete ', icon: fla },
	{description: 'Microsoft 365: CapGemini ', icon: ae },
	{description: 'Microsoft: Grid Automation ', icon: fla },
	{description: 'Microsoft: Equifax ', icon: fla },
	{description: 'Microsoft: Space ', icon: fla },
	{description: 'JP Morgan: Brand ', icon: h5 },
	{description: 'Samsung: Temperture ', icon: h5 },
	{description: 'Samsung: Weather ', icon: h5 },
	{description: 'Samsung: Sunlight ', icon: h5 },
	{description: 'Samsung: Multi Window ', icon: h5 },
	{description: 'Green Giant: Homepage Background ', icon: ae },
	{description: 'Samsung: Interoperable ', icon: h5 },
	{description: 'Zyrtec: CRM Site, Winter ', icon: fla },
	{description: 'Wilkinson Sword: Screensaver ', icon: ae },
	{description: 'US Deficit: Animation Test ', icon: ae },
	{description: 'Royal Caribbean: Virtual Seas ', icon: ae },
	{description: 'Microsoft 365: Toyota ', icon: ae },
];

var iframeArray = [
    { contentPath: 'media/iframe/pond5/five/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pond5/astro/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pond5/surf/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/shutterstock/criteo/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/sherwin/cube/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/hawaiian/weightless/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/rhinocort/banner/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/jager/process/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/rhinocort/quiz/index.html', contentWidth: 600, contentHeight: 250, contentWidthMin: 400, contentHeightMin: 166 },
    { contentPath: 'media/iframe/sherwin/colorcard/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/durability/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/encryption/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/ssd/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/183869729'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/pwc/eyf/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pnc/nano/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/spen/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/purdy/lasts/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/duplicolor/banner/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pwc/strategyand/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/153823822'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/184060633'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/184061297'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/jpmorgan/brand/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/149073718'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/pwc/chobani/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: '', contentWidth: '', contentHeight: ''},
    { contentPath: 'media/iframe/symbicort/moa/index.html', contentWidth: 430, contentHeight: 383, contentWidthMin: 400, contentHeightMin: 356 },
    { contentPath: 'media/iframe/shutterstock/teams/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/112938633'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112936342'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112934488'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112321184'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/186000285'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/186179405'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/186366156'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/186366722'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/186423841'+videoEmbedSettings, contentWidth: 640, contentHeight: 480, contentWidthMin: 400, contentHeightMin: 224  },
    { contentPath: 'https://player.vimeo.com/video/116448216'+videoEmbedSettings, contentWidth: 640, contentHeight: 480, contentWidthMin: 400, contentHeightMin: 224  },
    { contentPath: 'https://player.vimeo.com/video/186450616'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/186452045'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/186452513'+videoEmbedSettings, contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/jpmorgan/brand/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/temperature/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/weather/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/sunlight/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/multiwindow/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/187712601'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: 480 },
    { contentPath: 'media/iframe/samsung/interoperable/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/187886781'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: 573 },
    { contentPath: 'https://player.vimeo.com/video/187886080'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/187885815'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/187884108'+videoEmbedSettings, contentWidth: videoWidth, contentHeight: videoHeight },
 	{ contentPath: 'https://player.vimeo.com/video/116448218'+videoEmbedSettings, contentWidth: 640, contentHeight: 480, contentWidthMin: 400, contentHeightMin: 224  },
];



var iframeDetailsArray = [

	// Pond5:Five
	"Created vector line animation of the '5' based off an exisiting After Effects file. Multiple lines are layered and trimmed at different lengths to apear like a multicolored line.",

	// Pond5:Astro
	"The only way to accomplish custom masking in HTML5, across all browsers (including IE), is by using SVG vector shapes, like in the example above.",

	// Pond5:Surf
	"Vector shape and image animation, I include retina 2x resolution images for high density displays in almost all of my banners. This is especially important for clients whose product itself is imagery.",

	//Shutterstock
	"IE does a poor job of scaling images very slowly, to get around this, I animated the image in z space, I bring the image slowly away from the user to give the appearance of scaling down.",

	//SW:Cube
	"Created this without any 3d libraries which often have large file sizes. The banner is interactive and works across all browsers.",

	//Hawaiian Tropic
	"I took lens flare art which was created with the Adobe Illustrator lens flare tool, broke it apart and removed the unsupported blendmodes to a vector SVG asset. I was able to animate the individual flare circles, seperately, giving the look of an expanding flare.",

	//Zyrtec
	"A very straight forward banner. I began using a new workflow where all the images are placed on a single spritesheet, so less assets have to be loaded per impression.",

	//Jager
	"One of the earliest and most difficult HTML5 banners I've ever worked on. Originally created in Flash, I had to recreate numerous micro-animations as looping spritesheets. Today I would do many things differently, under the hood, but I'm satisfied with the finish" ,

	//Rhinocort Quiz
	"This is an expandable rich banner for on DoubleClick Studio.",

	//SW Color Card
	"This is one of my earliest HTML5 banners. I no longer build banners under-the-hood the way I did this one, but I’m happy with how the animation came out. This banner was also featured in a Greensock (the developers who created TweenMax/TweenLite) email campaigns.",

	//Samsung Durability
	"Every Samsung banner I’ve worked on has had it’s own unique challenges, I learned a lot about vector animation. This is one of the simpler ones.",

	//Samsung Encryption
	"This was one of the more challenging banners I’ve worked on, I had to append hundreds of orderly asterisks and randomly ordered and spaced binary digits, then have the rows animate at different speeds, on a 3D plane, then tween only certain characters to blue.",

	//Samsung SSD
	"This banner, like most Samsung banners had some element of shape and line animation, which is typically more difficult to do since transitioning from Flash to HTML5.",

	//Citrix
	"Created a 'hand drawn' style of animation using wiggle effects and low frame rate, the smaller animations were done manually frame by frame.",

	//pwc eyf (reference Shane Akins)
	"The intro animation for this was difficult, I originally created it in Flash, long before the HTML5 switchover. It was easy to make in Flash because developers have a visual environment to work in. In HTML5 it’s all code, no static visuals. Friend and developer Shane Akins did the tedious work of the recreating the 1-to-1 assets, measuring each rectangle asset and placing it. He also brought in the basic animations. I refined his work, specifically the easing and timing to reflect my original animation. Side note: When the client saw the original Flash animation years ago, they decided to include it in all their motion work (video, website, etc).",

	//pnc nano
	"This was a straightfoward banner except for the tablet portrait to landscape transition, I had to use CSS to rotate the cast shadow to that it would consistently cast left and down, easier said than done.",

	//Samsung Spen
	"I used After Effects to model the 'drawing on' effect of the text on the phone. I rendered those out to still images sequences which I then recombined into a 2x resolution spritesheet.",

	//Purdy Lasts
	"A straight forward banner that includes some subtle masking.",

	//Duplicolor Spray
	"This banner uses vector/SVG clipping to pull off the wipe animation.",

	//Strategy & (reference Joe Barille)
	"In this piece the ampersand mark had to be converted from a shape to a single line so that it could be 'drawn on'.",

	//The Kibitz Ep 2
	"This is the 2nd of a series of 3 animations I did for the launch of a podcast series called 'The Kibbitz', illustrations by Joshua Sasson.",


	//The Kibitz Ep 3
	"This is the 3rd of a series of 3 animations I did for the launch of a podcast series called 'The Kibbitz', illustrations by Joshua Sasson.",

	//Bloomberg
	"This is a trailer for a was a game created specifically for Bloomberg employees, it is a reskin of the well known 'World's Hardest Game'.",

	//JP Morgan
	"An early HTML5 banner using retina display quality images.",

	//The Kibitz Ep 1
	"This is the 1st (an most complex) of a series of 3 animations I did for the launch of a podcast series called 'The Kibbitz', illustrations by Joshua Sasson.",

	//PwC 
	"",

	//Google Chromegen
	"",

	//MOA Symbicort
	"This is an HTML5 animated module of ruse on a website, all SVG/Vector.",

	//Shutterstock
	"A simple HTML5 animation using SVG assets.",

	//PNC Achievement Sessions
	"This is a part of a series of animations to educate users on their personal finances. The style appears hand drawn",
	
	//PNC Achievement Sessions
	"This is a part of a series of animations to educate users on their personal finances. The style appears hand drawn",

	//PNC Achievement Sessions
	"This is a part of a series of animations to educate users on their personal finances. The style appears hand drawn",

	//FEMA Go Bag
	"This was a quick prototype of a drag and drop game for a FEMA emergency preparedness campaign. I did the illustrations as well.",

	//FEMA Floos
	"This is a Flash banner for FEMA's emergency preparedness campaign. I used scaling animation to give the family a more 3D look at the beginiing",

	//Krylon 127
	"Krylon logo animation, using some light 3D in After Effects",

	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	""
];

// contentArray.prototype.move(0,3);
// descriptionArray.prototype.move(0,3);
// iframeArray.prototype.move(0,3);
// iframeDetailsArray.prototype.move(0,3);
