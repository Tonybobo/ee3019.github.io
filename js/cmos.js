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

var playlist = 
[{
  name: 'Video Title',
  description: 'Description goes here',
  duration: 45,
  
  sources: [{
    src: './assets/Video/CMOS/Production of Silicon/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Production of silicon.vtt'},
  thumbnail: [{
    srcset: './assets/images/background.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/background.jpg'
}]
}, {
  name: 'Video Title',
  description: 'Description goes here',
  duration: 45,
  sources: [{
    src: './assets/Video/CMOS/Wafer Manufacturing Process/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  
  poster: 'http://media.w3.org/2010/05/bunny/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
}, {
  sources: [{
    src: './assets/Video/CMOS/Basic CMOS process flow/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Basic CMOS Process flow.vtt'},
  poster: 'http://www.videojs.com/img/poster.jpg',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
}, {
  sources: [{
    src: './assets/Video/CMOS/Chip Manufacturing/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Chips Manufacturing.vtt'},
  poster: 'http://media.w3.org/2010/05/bunny/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
}, {
  sources: [{
    src: './assets/Video/CMOS/Making Memory Chip process/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Making Memory Chips Process.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png'
},
{
  sources: [{
    src: './assets/Video/CMOS/MOSFET Transistor Basics & Working principle/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/MOSFET Transistor Basics & Working Principle.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
},
{
  sources: [{
    src: './assets/Video/CMOS/MOS Regions of Operation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/ECE 3110.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
},
{
  sources: [{
    src: './assets/Video/CMOS/MOSFET IV derivation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/MOSFET IV Characteristic.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
}, {
  sources: [{
    src: './assets/Video/CMOS/Channel length Modulation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Channel Length Modulation.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
},
{
  sources: [{
    src: './assets/Video/CMOS/Building logic gates from MOSFET transistor/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Building logic gates.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
},
{
  sources: [{
    src: './assets/Video/CMOS/CMOS inverter/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/CMOS Inverter DC characteristic.vtt'},
  poster: 'http://media.w3.org/2010/05/video/poster.png',
  thumbnail: [{
    srcset: './assets/images/CMOS-min.png',
    type: 'image/png',
    media: '(min-width: 50px;)'
}, {
    src: './assets/images/CMOS-min.png'
}]
},
];
player.playlist(playlist);
player.playlist.autoadvance(0);
player.playlistUi();
player.hlsQualitySelector({
  displayCurrentQuality: true,
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
