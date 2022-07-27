/*
SocialStory.JS
Copyright (c) 2018 TK Dewjee / iamtk
*/

(function() {

    // Declare plugin's variables
    var defaults;
    var video;
    var thisTimeline;
    var start = 0;
    var storyTime;
    var storySpinner;
    var percentage = 0;

    this.Story = function() {

    	// Default parameters if non provided.
        defaults = {
            playlist: null
        };

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        try {
            if (defaults.playlist == null || defaults.playlist == '') {
                console.log('[SocialStories] No playlist provided.');
                return false;
            }
        } catch (e) {
            console.log(e);
            return false;
        }

        var Div = document.getElementById('storytime');

        // HTML for story popup to be added to page
        var baseHTML = '<div class="storytime" style="opacity: 0; display: none;">' +
			'<div class="story-cover"></div>' +
			'<div class="story-window">' +
			'<a href="#" class="story-arrow left" onclick="socialStory.prev();"></a><a href="#" class="story-arrow right" onclick="socialStory.next();"></a>' +
				'<div class="story-nav">' +
					'<div class="story-nav-left"><img class="story-icon" src="" /> <span class="story-text"></span><span class="story-date"></span></div><div class="story-nav-right"><a href="#" class="close story-close" onclick="socialStory.close();"></a></div>' +
				'</div>' +
				'<div class="story-timeline"></div>' +
				'<div class="story-video" onclick="socialStory.next();">' +
					'<video class="story-next" src="" playsinline></video>' +
				'</div>' +
				'<div class="spinner">' +
					'<div class="bounce1"></div>' +
					'<div class="bounce2"></div>' +
					'<div class="bounce3"></div>' +
				'</div>' +
			'</div>' +
		'</div>';

        var timelineHTML = '';

        // Add HTML to storytime div element
        Div.innerHTML = baseHTML;

        // Create timeline elements by looping thorugh story items
        var i;
        for (i = 0; i < defaults.playlist.length; i++) {
            timelineHTML = timelineHTML + '<div class="story-timeline-item"><div class="story-timeline-line"></div><div class="story-timeline-line-active story-active-' + i + '" style="width: 0%;"></div></div>';
        }

        // Add timeline HTML to storytime div element
        var storyTimeline = document.getElementsByClassName('story-timeline')[0];
        storyTimeline.innerHTML = timelineHTML;
    };

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    function launch() {
    	// Get HTML elements
        storyTime = document.getElementsByClassName('storytime')[0];
        storySpinner = document.getElementsByClassName('spinner')[0];
        thisTimeline = document.getElementsByClassName('story-active-' + start)[0];
        var icon = document.getElementsByClassName('story-icon')[0];
        var text = document.getElementsByClassName('story-text')[0];
        var date = document.getElementsByClassName('story-date')[0];
        video = document.getElementsByTagName("video")[0];
        let is_video = !!defaults.playlist[start].url.startsWith("https://video.cdninstagram.com");
        percentage = 0


        // Show the Social Story Pop-up
        if (start == 0) {
            storyTime.setAttribute("style", "display: block; opacity: 0;");
        } else {
            storyTime.setAttribute("style", "display: block; opacity: 1;");
        }

        // Set CSS loading spinner to display: block (i.e. show it)
        storySpinner.style.display = 'block';
        setTimeout(function() {
            storyTime.setAttribute("style", "display: block; opacity: 1;");
        }, 10);

        // Load in the icon
        icon.src = defaults.playlist[start].icon;

        text.innerHTML = defaults.playlist[start].title;
        date.innerHTML = defaults.playlist[start].date;

        // Remove any previous videos
        video.src = ' ';

        if(!is_video){
            video.poster = defaults.playlist[start].url;
            thisTimeline.style.width = '0%';
            storySpinner.style.display = 'none';
            timeImgUpdate();
            video.addEventListener('ended', videoEnded, false);

        } else {
            video.src = defaults.playlist[start].url;
            video.load();
            // When video can play, hide spinner
            video.oncanplay = function() {
                storySpinner.style.display = 'none';
                video.play();
                document.getElementsByClassName('story-video')[0].setAttribute("style", "min-width: " + video.offsetWidth + "px;");
                video.muted = false;
            };
            // Set source for new video and load it into page
            thisTimeline.style.width = '0%';
            // Add event listener to track video progress and run function timeUpdate()
            video.addEventListener('timeupdate', timeUpdate, false);
            // Add event listerer to run function videoEnded() at end of video
            video.addEventListener('ended', videoEnded, false);
        }
    }

    function timeUpdate() {

        var percentage = Math.ceil((100 / video.duration) * video.currentTime);
        thisTimeline.style.width = percentage + '%';

    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

     function timeImgUpdate() {
        setTimeout(async function name(){
            thisTimeline.style.width = percentage + '%';
            percentage++;
            await sleep(50);
            if (percentage < 100) {
                name();
                console.log("percentage")
            } else {
                next();
            }
        }, 100)
    }

    function videoEnded() {
    	// Remove all event listeners on video end so they don't get duplicated.
        video.removeEventListener('timeupdate', timeUpdate);
        video.removeEventListener('ended', videoEnded);
        // Run next video
        next();
    }

    function next() {
    	// Set previous video timeline to 100% complete
        thisTimeline.style.width = '100%';
        percentage = 99;
        // Advance play count to next video
        start++;
        // If next video doesn't exist (i.e. the previous video was the last) then close the Social Story popup
        if (start >= defaults.playlist.length) {
            setTimeout(function() {
                close();
                return false;
            }, 400);
        } else {
        	// Otherwise run the next video
            launch(start);
        }
    }

    function prev() {
    	// If previous video was not first video set its timeline to 0%
        percentage = 0
        if (start != 0) {
            thisTimeline.style.width = '0%';
        }
        // Subtract play count to previous video
        start--;
        // If next video doesn't exist (i.e. the previous video was the last) then close the Social Story popup
        if (start < 0) {
            start = 0;
            return false;
        } else {
        	// Otherwise run the previous video
            launch(start);
        }
    }

    function close() {
    	// Pause currently playing video
        video.pause();
        percentage = -99999;
        // Hide Social Story popup
        storyTime.setAttribute("style", "opacity: 0;");
        // After 500ms set stoyrtime element to display:none and reset all video timelines to 0%
        setTimeout(function() {
            storyTime.setAttribute("style", "opacity: 0; display: none;");
            var i;
            for (i = 0; i < defaults.playlist.length; i++) {
                document.getElementsByClassName('story-timeline-line-active')[i].setAttribute("style", "width: 0%;");
            }
        }, 500);
    }

    // Plugin functions that can be called from your webpages

    // socialStory.launch()
    Story.prototype.launch = function(num) {
    	// Launch Social Stories - if no number is passed with socialStory.launch() then choose the first story.  As the stories are a javascript array the first story is 0
    	if(!num) { var num = 0;}
        start = num;
        launch();
    };

    // socialStory.next()
    Story.prototype.next = function() {
        next();
    };

    // socialStory.prev()
    Story.prototype.prev = function() {
        prev();
    };

    // socialStory.close()
    Story.prototype.close = function() {
        close();
    };

}());