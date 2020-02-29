var nameList;
var listOfImages;
		

$(function() {
  ad.preload(['https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TimelineMax.min.js']);
});



// Wait for the adReady event
$(document).on('adReady', function () {
  console.log("document.on adReady fired");
  //mraid.setAutoClose(15 * 1000);
	detectDevice();
  
	$('body').append('<div class="mainBackground"></div>');

	$('body').append('<div class="expandedCreative"></div>');
	
	$('.expandedCreative').html('

	<div class="mainBackground"></div>
	<div class="header">
		<div class="undertoneLogo"><img src="undertoneLogo.png" class="images vertAlign"/></div>
		<!--<div class="buttonGroup">
			<button class="js-copy-button copy-button">Copy JS</button>
		  <button class="css-copy-button copy-button">Copy CSS</button>
			<button class="preload-copy-button copy-button">Copy Preload List</button>
		</div>-->
	</div>
	

	
  <div class="container">
	  
	  
	  <!-- Start Box -->
	  <div class="lineCounter">
		  <ul class="line-list">				  					  			  
			</ul>
	  </div>
	  <textarea class="startTextArea column" placeholder="Insert Image List"></textarea>
	  
	  <!-- JS Selector Box Results -->
	  <div class="jsResults column">
		  <label class="list-labels">JS Selectors</label>
		  <div class="leftdivider"></div>
		  <!--<div class="divider"></div>-->
		  <span id="jsResults"></span>
		</div>
		
	  <!-- CSS Selector Box Results -->
	  <div class="cssResults column">
		  <label class="list-labels">CSS Selectors</label>
			<div class="leftdivider"></div>
		 <!-- <div class="divider"></div>-->
		  <span id="cssResults"></span>
	  </div>
	  
		<div class="preloadResults column">
			<label class="list-labels">Preload List</label>
			<div class="leftdivider"></div>
		  <!--<div class="divider"></div>-->
		  <span id="preloadResults"></span>
		</div>

  </div><!--/ container -->
  
	<div class="footer">
		
		
		<div class="selecterType">
			<label><input type="radio" name="selecterType" value="ids" id="idChoice" checked>ID\'s</label>
			<label><input type="radio" name="selecterType" value="classes">Classes</label>
		</div>
		
		
		<div class="buttonGroup">
			<button class="copy-button convert-button">Convert</button>
			<button class="js-copy-button copy-button">Copy JS</button>
		  <button class="css-copy-button copy-button">Copy CSS</button>
			<button class="preload-copy-button copy-button">Copy Preload List</button>
		</div>
	</div>  
  
	');	
	
  setTimeout( function() {
      adReadyDelay();
  }, 100);  

  $(document).on('adInteraction', function () {
    //Fires every time the ad receives a user interaction, like a click, swipe or tap in any interactive element.
    console.log("document.on adInteraction fired");
    mraid.cancelAutoClose();
  });

  $(document).on('adClick', function () {
    //Fires every time a user clicks an exit link and opens a new page.
    console.log("document.on adClick fired");
    mraid.setAutoClose(15 * 1000);
  });
  
});

function adReadyDelay() {
  console.log("function adReadyDelay called");
  //certain objects such as the video player are not in the dom until a delay after the adReady event is called
  
  
  //set up variable names and initial state of all elements
  initializeImages();
  //set up all events
  initializeEvents();

}

function initializeImages() {
  console.log("function initializeImages called, remember to add pointerEvents:'auto' here");
  //pointerEvents are turned to none by default. if you need things to click, set pointerEvents to auto (or in the css)
  
}

function initializeEvents() {
  console.log("function intalizeEvents() called");
  //set up general events across the whole ad
  
					var colorCoded = true;		
					var IdSelected = false;		
			
				for (i = 0; i < 80; i++) {
					
					$('.line-list').append('<li>'+[i]+'</li>')
				    //text += "The number is " + i + "<br>";
				}					
			
	function convertArraysToResults(){					
  		fileNameArray = [];    
  		fullFileNameArray = [];    
  	 	nameList = $(".startTextArea").val();
  	 	
  	 	
  	 	
			if($('#idChoice').is(':checked')){ 
				console.log("Convert to IDS"); 
				IdSelected = true;
			}	else{
				console.log("Convert to CLASSES"); 
				IdSelected = false;
			}							    	 	
  	 	
	
			//Checks for extension .jpg, .png, etc
		  $.each(nameList.split(/\n/), function (i, name) {  
				var fileName = name.replace(/\.[^/.]+$/, "");
	      // empty string check
	      if(name != ""){
	         fileNameArray.push(fileName);
	      }      
			});
			
			
				//Create Array to make full file name list (includes 
	  $.each(nameList.split(/\n/), function (i, name) {  
			var fullFileName = name;							
        fullFileNameArray.push(' &nbsp; \''+fullFileName+'\'');
        
		});

		console.log('listOfImages: '+fileNameArray);
		console.log('fullFileNameArray: '+fullFileNameArray);		
			
			
			
			console.log(listOfImages);
		
			//Creates Selector Statement in Array
			var newJsArray = fileNameArray.map(function(fileName){
				var prefix1 = ' = ';
				var prefix2 = '$';
				var prefix3 = '(';
				var prefix4 = '"div[id^=\''; //use backslah to include single and double quotes
				var prefix4b = '\'.';
				var prefix5 = '\']\"'; //use backslah to include single and double quotes
				var prefix5b = '\''; //use backslah to include single and double quotes
				var prefix6 = ");";
				
			if(IdSelected){
				var result = fileName + prefix1.fontcolor('#c3bc25') + prefix2.fontcolor('#b1778d') + prefix3 + 
			  prefix4.fontcolor('#b4c978') + fileName.fontcolor('#b4c978') +prefix5.fontcolor('#b4c978') +prefix6+'</br>';
			}else{
				var result = fileName + prefix1.fontcolor('#c3bc25') + prefix2.fontcolor('#b1778d') + prefix3 + 
			  prefix4b.fontcolor('#b4c978') + fileName.fontcolor('#b4c978') +prefix5b.fontcolor('#b4c978')+prefix6+'</br>';	
			}
				return result; 
			});	
			
			var newCssArray = fileNameArray.map(function(fileName){
					var prefix0 = 'div';
					var prefix1 = '[';
					var prefix2 = 'id^';
					var prefix3 = '=';
					var prefix4 = '],';
					var prefix4b = '.';
					var prefix4c = ',';			

				if(IdSelected){
					var result = prefix0+prefix1 + prefix2.fontcolor('#80aac6') + prefix3 + fileName.fontcolor('#b4c978') + prefix4 +'</br>';
				}else{
					var result = prefix4b+fileName+prefix4c+'</br>';	
				}							
	
				
				return result;
			});		
			
			//Convert it to a string and write out on HTML CSS Selectors
			$('.cssResults span').html( newCssArray.join(' ').toString() );
					
			//Convert it to a string and write out on HTML JS Selectors
			$('.jsResults span').html( newJsArray.join(' ').toString() );
			
			
			//Convert it to a string and write out on Preload list JS Selectors
			$('.preloadResults span').html( 'ad.'+'preload'.fontcolor('#b1778d')+'('+'[<br>'.fontcolor('#c3bc25') +fullFileNameArray.join(', <br>').toString()+'<br>]'.fontcolor('#c3bc25')+');<br>' );				
			
	}
	
	
		$('.convert-button').click(function(){
			console.log('convertArraysToResults');
			convertArraysToResults();
		});
	
		$('.js-copy-button').click(function(){
			copyDivToClipboard('jsResults');
		});	
		
		$('.css-copy-button').click(function(){
			copyDivToClipboard('cssResults');
		});	
		
		$('.preload-copy-button').click(function(){
			copyDivToClipboard('preloadResults');
		});	  		
				
		
			  		
    function copyDivToClipboard(divId) {
        var range = document.getSelection().getRangeAt(0);
        range.selectNode(document.getElementById(divId));
        window.getSelection();
        document.execCommand("copy");
    }		

	
	
    
}




// use this if you need to tell people to rotate their phones in landscape otherwise ignore
// might take this out of template
function mobileOrientationCheck() {
  
  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if (window.orientation == 90 || window.orientation == -90) {
    console.log("landscape");
    if(window.mobilecheck()) {
      rotateYourDevice(true);
    } else {
      rotateYourDevice(false);
    }
  }

  window.addEventListener("orientationchange", function() {
    console.log("orientation change");
    if( window.mobilecheck() ) {
      if (window.orientation == 90 || window.orientation == -90) {
        rotateYourDevice(true);
      } else {
         rotateYourDevice(false);
      }
    }
  });  
}

function rotateYourDevice(state) {
  console.log ("function rotateYourDevice called with parameter " + state); 
   tl = new TimelineMax();
   tl.to("#rotateYourDeviceImage", .5, {autoAlpha:1});
   tl.to("#rotateYourDeviceImage", .5, {rotation:0});
   tl.pause();
  

  if (state == true) {
    
    TweenMax.to("#rotateYourDeviceBackground", 0, {autoAlpha:1});
    TweenMax.to("#rotateYourDeviceCopy", 0, {autoAlpha:1});
    TweenMax.to("#rotateYourDeviceLogo", 0, {autoAlpha:1});
    TweenMax.to("#rotateYourDeviceImage", 0, {autoAlpha:1});

  } else if (state == false) {
    
    TweenMax.to("#rotateYourDeviceBackground", 0, {autoAlpha:0});
    TweenMax.to("#rotateYourDeviceCopy", 0, {autoAlpha:0});
    TweenMax.to("#rotateYourDeviceImage", 0, {autoAlpha:0});
    TweenMax.to("#rotateYourDeviceLogo", 0, {autoAlpha:0});
  

  }  
}



//////////////////////////////
//// Browser & Device Sniffers
getOS();

var ua = window.navigator.userAgent.toLowerCase();//alert(ua);
window.platform = {
    isiPad: ua.match(/ipad/i) !== null,
    isiPhone: ua.match(/iphone/i) !== null,
    isAndroid: ua.match(/android/i) !== null,
    isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
    isAndroid404: ua.match(/android 4\.0\.4/i) !== null,
    isAndroid412: ua.match(/android 4\.1\.2/i) !== null,
    isAndroid422: ua.match(/android 4\.2\.2/i) !== null,
    isAndroid43: ua.match(/android 4\.3/i) !== null,
    galaxyTab4: ua.match(/sm\-t530nn/i) !== null,
    isNexus: ua.match(/nexus/i) !== null,
    isDuos: ua.match(/gt\-s7562/i) !== null,
    isS3a: ua.match(/gt\-i9300/i) !== null,
    isS3b: ua.match(/sch\-i535/i) !== null,
    isS4: ua.match(/gt\-i9500/i) !== null,
    isS5: ua.match(/gt\-i9600/i) !== null,
    isS5b: ua.match(/sm\-g900p/i) !== null,
    isS6: ua.match(/sm\-g920v/i) !== null,  
    isS7: ua.match(/sm\-g930f/i) !== null,
    isS8: ua.match(/sm\-g955u/i) !== null,
    isNote3: ua.match(/sm\-n900/i) !== null,
    isSMT210: ua.match(/sm\-t210/i) !== null,
    isIE: /(msie|trident)/i.test(navigator.userAgent), //window.navigator.appName.indexOf("Microsoft") !== -1,
    isIE8: ua.match(/msie 8/) !== null,
    ltIE9 : $("html").hasClass("lt-ie9"),
    isChrome: ua.match(/Chrome/gi) !== null,
    isFirefox: ua.match(/firefox/gi) !== null,
    isWebkit: ua.match(/webkit/gi) !== null,
    isGecko: ua.match(/gecko/gi) !== null,
    isOpera: ua.match(/opera/gi) !== null,
    isMobile: navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) && navigator.userAgent.match(/Mobile/i) !== null,
    hasTouch: ('ontouchstart' in window),
    supportsSvg: !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
};

window.platform.isAndroidPad = platform.isAndroid && !platform.isMobile;
window.platform.isTablet = platform.isiPad || platform.isAndroidPad;
window.platform.isDesktop = !(platform.isMobile || platform.isTablet);
window.platform.isIOS = platform.isiPad || platform.isiPhone;

window.platform.isIOS5 = window.platform.isIOS && userOSver.charAt(0) == 5;
window.platform.isIOS6 = window.platform.isIOS && userOSver.charAt(0) == 6;
window.platform.isIOS7 = window.platform.isIOS && userOSver.charAt(0) == 7;
window.platform.isIOS8 = window.platform.isIOS && userOSver.charAt(0) == 8;
window.platform.isIOS9 = window.platform.isIOS && userOSver.charAt(0) == 9;



// get device OS and OS Version
// 		sets the following variables: userOS & userOSver
//		DETECTING MAJOR iOS VERSION NUMBER: userOSver.charAt(0)
//			if ( userOS === 'iOS' && Number( userOSver.charAt(0) ) >= 5 ) { ... }
function getOS() {
	var ua = navigator.userAgent;
	var uaindex;

	// determine OS
	if ( ua.match(/iPad/i) || ua.match(/iPod/i) || ua.match(/iPhone/i) ) {
		userOS = 'iOS';
		uaindex = ua.indexOf( 'OS ' );
	} else if ( ua.match(/Android/i) ) {
		userOS = 'Android';
		uaindex = ua.indexOf( 'Android ' );
	} else {
		userOS = 'unknown';
	}

	// determine version
	if ( userOS === 'iOS'  &&  uaindex > -1 ) {
		userOSver = ua.substr( uaindex + 3, 3 ).replace( '_', '.' );
	} else if ( userOS === 'Android'  &&  uaindex > -1 ) {
		userOSver = ua.substr( uaindex + 8, 3 );
	} else {
		userOSver = 'unknown';
	}
}




function detectDevice(){
	if(!window.platform.isDesktop && !window.platform.isTablet){
  	$('body').addClass('isMobile');
  }

  if(window.platform.isDesktop){
  	$('body').addClass('isDesktop');
  }
  
  if(window.platform.isTablet){
  	$('body').addClass('isTablet');
  }
  
	if(window.platform.isS8){		
		$('body').addClass('isS8');
	}
	
	if(window.platform.galaxyTab4){		
		$('body').addClass('galaxyTab4');
	}  

}




// Synch portrait and landscape view's scenes
var _lastSection,
  _condition = $('.landscape').length == $('.portrait').length && $('.landscape').length > 1;
$(document).on('adSceneChange adResize', function () {
  var _currentSection = $('section:visible'),
    _switchScene = function (view) {
    var _currentIndex = _currentSection.data('index'),
      _section = $('section.'+view+'[data-index='+_currentIndex+']');
    ad.switchToScene(_section.attr('class'), _currentIndex, _section.data('canvas'));
    };
  if (_condition && _currentSection[0].id != _lastSection) {
  _lastSection = _currentSection[0].id;
  if (_currentSection.hasClass('landscape')) _switchScene('portrait');
  else if (_currentSection.hasClass('portrait')) _switchScene('landscape');
  }
});


