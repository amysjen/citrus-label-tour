/**
 * v1.0 - Copyright 2014 Madden Media - All rights reserved.
 *
 * Content-specific layout functionality. These functions
 *	make many assumptions about content contained in the page.
 *
 * NOTE: Assumes that madden-content-frameworks-v1.0.js has been loaded and
 *	that the initial view types (mobile, tablet, etc.) have been defined.
 */

// mobile can call resize during scroll - we can cache width
//	and check if an actual resize happens
var _winWidth = 0;

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// STOCK EVENT FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//
// Called on document ready
//
contentOnReady = function () {
	
	// set the window width
	_winWidth = $(window).width();
	
	
	if ( (getIsLarge()) || (getIsNewerIPad()) ) {
		var adjust = (getIsNewerIPad()) ? .12 : .18;	
		$("#ci0").parallaxBG({ adjustY: adjust, bgXPosition: 'center' });	
	}
		
	// recommended Reads links
	buildRelatedLinks([
		{ "title": "Your Ultimate Guide to U-Pick-Farms", "link": "https://blog.visitlakefl.com/your-ultimate-guide-to-u-pick-farms/" },
		{ "title": "5 Ways to Explore the Dora Canal", "link": "https://blog.visitlakefl.com/5-ways-to-explore-the-dora-canal/" },
		{ "title": "Dine by the Lakes", "link": "https://blog.visitlakefl.com/dine-by-the-lakes-at-these-7-waterside-restaurants/" }
	]);
	
	// ipad pro will use large size, but needs backgrounds set to scroll, not fixed
	unFixBGImagesForIPads();
	
	customAdjustLayout(true);
	
	//blurredImages();
	
	// add the complete class to the loader
	$('#loading').addClass('complete');


	// slideshow
	const swiper = new Swiper('.swiper', {
	  loop: true,
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },
	});

}
  
//
// Called on document scroll
//
contentOnScroll = function () {	
	//blurredImages();
}

//
// Called on a touch move on mobile
//
contentOnTouchMove = function () { }

//
// Called on document resize
//
contentOnResize = function () { 
	customAdjustLayout();
}

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
// CUSTOM FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//
// The frameworks was given this function to handle setting chapter buttons 
//	when the chapter is set
//
// chapterEl: The chapter link DOM element 
// on: Is it being turned on? (true|false)
//
customChapterLinkAdjust = function (chapterEl, on) {
	$(chapterEl).attr("class", ((on) ? "navLink chapterLink noGA on" : "navLink chapterLink noGA"));
}

//
// Adjust this specific layout after a load or resize event
//
// isLoad: Is this being called by a load or resize event?
//
customAdjustLayout = function (isLoad) {

	var localNotJustTouchScroll = isLoad;

	equalizeElementHeightsToTallest($(".linkTitleWrapper"));
	
	// is it really a resize?
	if ($(window).width() != _winWidth) {
    	// yes
		localNotJustTouchScroll = true;
		_winWidth = $(window).width();
	}

	if ( (localNotJustTouchScroll) || (isLoad) ) {
		// resize footer links to be equal height of the tallest one
		//equalizeRelatedLlinks();	
	}
	
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 1) { 
			$("#topBar").addClass("active");
			$(".sponsorLogo").addClass("active");			
		} else {
			$("#topBar").removeClass("active");
			$(".sponsorLogo").removeClass("active");
		}
	});	


	// Put markers on all location on map
	var chapterNames = Object.keys(chapters);
	for (var i = 0; i < chapterNames.length; i++) {
		var chapterName = chapterNames[i];
		setActiveChapter(chapterName);
	}

}


// On every scroll event, check which element is on screen
window.onscroll = function() {
	var chapterNames = Object.keys(chapters);
	for (var i = 0; i < chapterNames.length; i++) {
		var chapterName = chapterNames[i];
		if (isElementOnScreen(chapterName)) {
			setActiveChapter(chapterName);
			break;
		}
	}
};

 
var activeChapterName = 'baker',
	currentMarkers=[];
function setActiveChapter(chapterName) {
	if (chapterName === activeChapterName) return;
	 
	map.flyTo(chapters[chapterName]);

	console.log(chapterName);

	var el = document.createElement('div');
	el.className = 'marker';
	el.style.backgroundImage = 'url(https://maddencdn.com/content/images/2022/lake-county/citrus-label-tour/map-marker-'+chapterName+'.png)';

	var lat = chapters[chapterName].center[1],
		lon = chapters[chapterName].center[0],
		marker = new mapboxgl.Marker(el)
		.setLngLat([lon, lat])
		.addTo(map);
	currentMarkers.push(marker);
	document.getElementById(chapterName).setAttribute('class', 'listing active');
	// document.getElementById(activeChapterName).setAttribute('class', '');
	 
	activeChapterName = chapterName;

}


function isElementOnScreen(id) {
	var element = document.getElementById(id);
	var bounds = element.getBoundingClientRect();
	return bounds.top < window.innerHeight && bounds.bottom > 0;
}



// Top Hero Photo Grid 
$( document ).ready(function() {
  var ids = [];

  function initArray() {
    $(".imgArray").each(function() {
      ids.push($(this).attr("src"));
    })    
  }

  function randomArray() {
    // copie du tableau d'ids car il va etre modifié
    var tempIds = ids.slice();
    // init du tableau de resultat
    var myIds = [];
    for (var i = 0; i < 6; i++) {
      // Recupere un int random
      var randomId = (Math.floor(Math.random() * tempIds.length) + 1);
      // Recupere la valeur random
      var myId = tempIds[randomId - 1];
      // Ajout de la valeur random au tableau de resultat
      myIds.push(myId);
      // Recupere l'index de la valeur random pour la suppression
      var pos = tempIds.indexOf(myId);
      // Suppression de la valeur choisie pour eviter de retomber dessus
      tempIds.splice(pos, 1);
    }
    return myIds;
  }

  initArray();
  
  function changeSrc() {
    var result = randomArray();
    var cells = $(".gallery .col-4");
    var randomId = (Math.floor(Math.random() * cells.length));
    var cell = cells.eq(randomId);
    cell.find("img:hidden").each(function(index) {
      $(this).attr("src", result[index]);   
    });
    cell.find("img").fadeToggle(1500);
  }  
  
  setInterval(function() {
    changeSrc();
  }, 2000);
  
});


