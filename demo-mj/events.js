// example function 
lpTag.events.bind(appName, eventName, function);

// function to read cookie
function LPreadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


// Show Chat button or invite
// If button/invite is on multiple pages it'll repeat itself every time.
lpTag.events.bind("LP_OFFERS", "OFFER_DISPLAY", function(data, eventInfo){
		
		// type sticky button
	if(data.engagementType == 6) {
		console.log("showing button: " + data.engagementName); // replace with GA Event
		// type invite
	} else if(data.engagementType == 1) {
		console.log("showing invite: " + data.engagementName); // replace with GA Event
	}

});

// Click on invite or button (accept)
lpTag.events.bind("LP_OFFERS", "OFFER_CLICK", function(data, eventInfo){

		// type sticky button
	if(data.engagementType == 6) {
		console.log("clicked button: " + data.engagementName); // replace with GA Event
		// type invite
	} else if(data.engagementType == 1) {
		console.log("clicked invite: " + data.engagementName); // replace with GA Event
	}
});

// Decline invite
lpTag.events.bind("LP_OFFERS", "OFFER_DECLINED", function(data, eventInfo){
	console.log("declined invite: " + data.engagementName); // replace with GA Event
});

// Different chat statuses (waiting, interactive, postChat, End)
lpTag.events.bind("lpUnifiedWindow", "state", function(data, eventInfo){

	// check the state of customer.
	if(data.state == "waiting") {

		// check if person is already waiting, chatting or past chatting
		if(LPreadCookie("chatstate") == "waiting" || LPreadCookie("chatstate") == "interactive" || LPreadCookie("chatstate") == "postChat"){
			// do nothing
		} else {
			console.log("waiting for chat"); // replace with GA Event
			// set cookie that person is waiting
			document.cookie = "chatstate=waiting;";
		}
		
	} else if(data.state == "interactive") {

		//check if person is already chatting or past chatting
		if(LPreadCookie("chatstate") == "interactive" || LPreadCookie("chatstate") == "postChat"){
			// do nothing
		} else {
			console.log("chat is interactive"); // replace with GA Event
			// set cookie that person is chatting
			document.cookie = "chatstate=interactive;";
		}
	} else if(data.state == "postChat") {

		// check if person already opened survey
		if(LPreadCookie("chatstate") == "postChat"){
			// do nothing
		} else {
			console.log("Survey opened"); // replace with GA Event
			// set cookie that person is in survey
			document.cookie = "chatstate=postChat;";
		}
	} else if(data.state == "applicationEnded"){

		// check if person is filling out the postChat
		if(LPreadCookie("chatstate") == "postChat"){
			console.log("survey filled out"); // replace with GA Event
			// set cookie that person filled out survey
			document.cookie = "chatstate=applicationEnded;";
		} else {
			console.log("Chat ended"); // replace with GA Event
			// set cookie that chat ended so we can start over again.
			document.cookie = "chatstate=chatEnded;";
		}
	}
});
