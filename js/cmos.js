var options = {
  controls:true,
  autoplay:false,
  preload:'auto',
  playbackRates: [0.75, 1, 1.25,1.5],
  fluid:true,
  controlBar: {
    children: [
       'playToggle',
       'volumePanel',
       'currentTimeDisplay',
       'durationDisplay',
       'progressControl',
       'remainingTimeDisplay',
       'playbackRateMenuButton',
       'subsCapsButton',
       'pictureInPictureToggle',
       'qualitySelector',
       'fullscreenToggle'
       
    ],
 }
}

var player = videojs('my-video', options);
  player.src([
    {
       src: './assets/Video/CMOS/Building logic gates from MOSFET transistor/playlist.m3u8',
       type: 'application/x-mpegURL',
       
    }
 ]);
 player.hlsQualitySelector({
  displayCurrentQuality: true
 });
 let qualityLevels = player.qualityLevels();

 
// disable quality levels with less than 720 horizontal lines of resolution when added
// to the list.
qualityLevels.on('addqualitylevel', function(event) {
  let qualityLevel = event.qualityLevel;
 
  if (qualityLevel.height >= 720) {
    qualityLevel.enabled = true;
  } else {
    qualityLevel.enabled = false;
  }
});
 
// example function that will toggle quality levels between SD and HD, defining and HD
// quality as having 720 horizontal lines of resolution or more
let toggleQuality = (function() {
  let enable720 = true;
 
  return function() {
    for (var i = 0; i < qualityLevels.length; i++) {
      let qualityLevel = qualityLevels[i];
      if (qualityLevel.width >= 720) {
        qualityLevel.enabled = enable720;
      } else {
        qualityLevel.enabled = !enable720;
      }
    }
    enable720 = !enable720;
  };
})();
 
let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex; // -1 if no level selected