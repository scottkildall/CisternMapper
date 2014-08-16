/**
* Common UI for Waterworks elements
* User: scottkildall
*
*	Common Elements:
*	(1) contact_tab.gif: the slider image on the left, need to include imageHeight and imageWidth
* (2) left-panel.html: html of the material inside the panel
*/

// Tab-slider initialization functions
$(function(){
		$('.slide-out-div').tabSlideOut({
				tabHandle: '.handle',                     //class of the element that will become your tab
				pathToTabImage: 'images/left_panel_tab.jpg', //path to the image for the tab //Optionally can be set using css
				imageHeight: '600px',                     //height of tab image           //Optionally can be set using css
				imageWidth: '107px',                       //width of tab image            //Optionally can be set using css
				tabLocation: 'left',                      //side of screen where tab lives, top, right, bottom, or left
				speed: 300,                               //speed of animation
				action: 'click',                          //options: 'click' or 'hover', action to trigger animation
				topPos: '120px',                          //position from the top/ use if tabLocation is left or right
				leftPos: '20px',                          //position from left/ use if tabLocation is bottom or top
				fixedPosition: false                      //options: true makes it stick(fixed position) on scroll
		});

});


$(function(){
    $("#leftPanel").load("left-panel.html");
});

$(function(){
		$("#splashScreen").load("splash-screen.html");
});
