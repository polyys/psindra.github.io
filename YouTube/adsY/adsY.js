javascript: f = async function() {
    if (await document.querySelector(".ytp-ad-skip-button")) {
        await document.querySelector(".ytp-ad-skip-button").click()
    } else { 
	    if (await document.querySelector(".ytp-ad-text")) {
		    /* document.querySelector(".html5-main-video") */ // para usarse en vez de "#movie_player > div.html5-video-container > video"
		    // document.querySelector("#movie_player > div.html5-video-container > video").currentTime = document.querySelector("#movie_player > div.html5-video-container > video").getDuration() + 1
		    var video_duration = await document.querySelector(".html5-main-video").getDuration()
		    document.querySelector(".html5-main-video").currentTime = video_duration + 1;
	    }
    };
    if (await document.querySelector(".ytp-ad-overlay-close-button")) {
        await document.querySelector(".ytp-ad-overlay-close-button").click()
    }
    
    if (await document.querySelector(".ytp-ad-image-overlay")) {
        await document.querySelector(".ytp-ad-image-overlay").remove()	}
		
    if (await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer")) {
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").click();
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").remove();	}

    if (await document.querySelector("#player-ads")) {
        await document.querySelector("#player-ads").remove();
    }
	var1 = await setTimeout(f,20);
};
a1 = setTimeout(f, 20);
