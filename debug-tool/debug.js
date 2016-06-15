// Setup boLP debug tool.

var boLP = {
	'events' : {},
	'apps' : {}
};



boLP.debug = function (){
	//get IP
	boLP.apps.getIP();
	return 'DEBUG STARTED';
}


// listener to events
boLP.events.listener = function () {
	console.info("Event listener set");
	lpTag.events.bind("*","*",function(eventData,eventInfo){ 
		console.log( "Event:\nName: " + eventInfo.appName + " - " + eventInfo.eventName + "\nInfo: " + JSON.stringify(eventData) );
	});
}
// show past events
boLP.events.pastEvent = function(){

	// needs a filter
	var list = lpTag.events.hasFired('*');

	console.info("Past events:")
	console.log(list);
	// Set listener for upcoming events 
	boLP.events.listener();
}

// Get IP of user

boLP.apps.getIP = function () {
	(function() {
      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = 'https://api.ipify.org/?format=jsonp&callback=boLP.apps.showIP';
      document.getElementsByTagName('head')[0].appendChild(newScript);
    })(boLP.apps.showIP = function(ip){console.info("IP Customer: " + ip.ip)
    	// start Checklp
	    boLP.apps.lpCheck();
	}); 
}

// Checks if lpTag is active 
boLP.apps.lpCheck = function () {
	if (typeof lpTag === 'undefined' || lpTag === null) {
		console.error('Status: no lpTag found');
	} else {
		console.info('Status: lpTag active');
		// Load lpTag info
		boLP.apps.showLPinfo();
	}
}
boLP.apps.showLPinfo = function () {

	console.info('Site ID: '+ lpTag.site);
	console.info('lpTag version: '+ lpTag._v);
	console.info('lpTag start Time: ' + lpTag._timing.start);
	console.info('lpTag contReady Time: ' + lpTag._timing.contReady);
	console.info('lpTag domReady Time: ' + lpTag._timing.domReady);

	// show past events
	boLP.events.pastEvent();

}
boLP.apps.showVars = function () {
	// console.info(lpTag.sdes.get("ctmrinfo"));

	if(typeof lpTag.sdes.get("ctmrinfo") === 'undefined' || lpTag.sdes.get("ctmrinfo") === null){
		console.warn('no customer info');
	} else {

		var info = lpTag.sdes.get("ctmrinfo");
		console.info(JSON.stringify(info[0].info));
	}
}
