/************* History ***********************
 * LiveEngage 2.0 Customisation
 *  This file SHOULD be included on ALL webpages: this file contains client specific code
 * Note to developer: please return modifications for administration
 *--------------------------------------------
 * 08-04-2016 Paul Molensky: initial version
 * dd-mm-yyyy <name>: <short description>
 *********************************************/


/************* Chat events *******************/
// @@dev: assuming the use of Google Analytics for Web (ga.js)
	var evLPstate;
	lpTag.events.bind(
	{
		appName: 'ChatAPIV3',
		eventName: 'state',
		func: function(e)
		{
			switch(e)
			{
				case "init": break;                                            //visitor clicked engagement offer
				case "initialised": break;
				case "preChat": break;                                         //pre-chat survey shown to visitor
				case "waiting": break;                                         //waiting for available agent
				case "resume":                                                 //existing chat is resumed
					evLPstate = true;
					break;
				case "chatting":                                               //visitor is connected to an CSP
					(!evLPstate) ? _gaq.push(['_trackEvent', 'chats', 'started', undefined, undefined, false]) : undefined;
					break;
				case "ended":                                                  //chat was ended
					_gaq.push(['_trackEvent', 'chats', 'ended', undefined, undefined, false]);
					break;
				case "postChat":                                               //post-chat survey shown to visitor
					_gaq.push(['_trackEvent', 'chats', 'postchatsurveysubmitted', undefined, undefined, false]);
					break;
				case "applicationEnded": break;                                //visitor submitted post-chat survey
				default:
					break;
			}
		}
	});

  
/************* Single Page Applications ******/
  var loadLPNewPage = function(pageUrl, data) {
    var section, sdes;
    // Making sure lpTag.newPage() has all its parameters at least defined.
    section = data.section || [];
    sdes = data.sdes || [];

    if (window.lpTag && window.lpTag.newPage) {
      // taglets are ready
      lpTag.newPage(
        pageUrl,
        {
          section: section,
          sdes: sdes
        }
      );
    } else {
      // taglets not ready; wait for LE Tag to start before executing lpTag.newPage() function
      window.lpMTagConfig = window.lpMTagConfig || {};
      lpMTagConfig.onLoadCode = lpMTagConfig.onLoadCode || []; // this is for listening to a special event when the LE Tag code finally starts

      // push lpTag.newPage() function into the array defined above and it will be executed when LE Tag finally starts
      lpMTagConfig.onLoadCode.push(function() {
        lpTag.newPage(
          pageUrl,
          {
            section: section,
            sdes: sdes
          }
        );
      });
    } // end of if (window.lpTag && window.lpTag.newPage)
  }; // end of loadLPNewPage


/************* brightONE customisations ******/
// determine environment identifier
// @@dev: below values are fictitious. Please create correct syntax for determining DTAP-environments
  if      (window.location.hostname.indexOf('www.@@klant@@.nl') > -1)                                    { var _env = 'PRODUCTION';  }
  else if (window.location.hostname.indexOf('.a.@@klant@@.nl') > -1)                                     { var _env = 'UAT';         }
  else if (window.location.hostname.indexOf('.t.@@klant@@.nl') > -1)                                     { var _env = 'TESTING';     }
  else                                                                                                   { var _env = 'DEVELOPMENT'; }

  lpTag.sdes = lpTag.sdes||[];
  lpTag.sdes.push(
     {
      "type": "mrktInfo",
        "info": {
        "channel": "0", // DIRECT
        "affiliate": _env  //Using affiliate to distinguish environments
      }
     }
  );
