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
player.aspectRatio('16:9')

var playlist = 
[{
  name: 'Production of Silicon',
  duration: 476,
  sources: [{
    src: './assets/Video/CMOS/Production of Silicon/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Production of silicon.vtt'},
  poster: './assets/Poster/CMOS/Production of Silicon.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/The production of Silicon.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/The production of Silicon.jpg'
}]
}, {
  name: 'Wafer Manufacturing Process',
  duration: 240,
  sources: [{
    src: './assets/Video/CMOS/Wafer Manufacturing Process/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  
  poster: './assets/Poster/CMOS/Wafer Manufacturing.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/Wafer Manufacturing Process.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/Wafer Manufacturing Process.jpg'
}]
}, {
  name: 'Basic CMOS Process Flow',
  duration: 804,
  sources: [{
    src: './assets/Video/CMOS/Basic CMOS process flow/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Basic CMOS Process flow.vtt'},
  poster: './assets/Poster/CMOS/CMOS Process Flow.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/CMOS Process Flow.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/CMOS Process Flow.jpg'
}]
}, {
  name: 'Chip Manufacturing',
  duration: 811,
  sources: [{
    src: './assets/Video/CMOS/Chip Manufacturing/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Chips Manufacturing.vtt'},
  poster: './assets/Poster/CMOS/Chips Manufacturing.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/Chips Manufacturing.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/Chips Manufacturing.jpg'
}]
}, {
  name: 'Making Memory Chip process',
  duration: 260,
  sources: [{
    src: './assets/Video/CMOS/Making Memory Chip process/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Making Memory Chips Process.vtt'},
  poster: './assets/Poster/CMOS/Making Memory Chip.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/Making Memory Chip process.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/Making Memory Chip process.jpg'
}]
},
{
  name: 'MOSFET Transistor Basics & Working principle',
  duration: 429,
  sources: [{
    src: './assets/Video/CMOS/MOSFET Transistor Basics & Working principle/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/MOSFET Transistor Basics & Working Principle.vtt'},
  poster: './assets/Poster/CMOS/MOSFET Basic Principle.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/MOSFET Basic Principle.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/MOSFET Basic Principle.jpg'
}]
},
{
  name: 'MOS Regions of Operation',
  duration: 375,
  sources: [{
    src: './assets/Video/CMOS/MOS Regions of Operation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/ECE 3110.vtt'},
  poster: './assets/Poster/CMOS/MOS region of operation.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/MOS Region of Operation.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/MOS Region of Operation.jpg'
}]
},
{
  name: 'MOSFET IV derivation',
  duration: 949,
  sources: [{
    src: './assets/Video/CMOS/MOSFET IV derivation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/MOSFET IV Characteristic.vtt'},
  poster: './assets/Poster/CMOS/MOSFET IV Characteristic.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/MOSFET IV characteristic.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/MOSFET IV characteristic.jpg'
}]
}, {
  name: 'Channel length Modulation',
  duration: 500,
  sources: [{
    src: './assets/Video/CMOS/Channel length Modulation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Channel Length Modulation.vtt'},
  poster: './assets/Poster/CMOS/Channel Length Modulation.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/Channel Length Modulation.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/Channel Length Modulation.jpg'
}]
},{
  name: 'Lab simulation of Channel length Modulation',
  duration: 156,
  sources: [{
    src: './assets/Lab simulation/CMOS/Channel Length Modulation/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  poster: './assets/Lab simulation/CMOS/Poster/Channel Length Modulation.png',
  thumbnail: [{
    srcset: './assets/Lab simulation/CMOS/Thumbnail/Channel Length Modulation.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Lab simulation/CMOS/Thumbnail/Channel Length Modulation.jpg'
}]
},
{
  name: 'Building logic gates from MOSFET transistor',
  duration: 648,
  sources: [{
    src: './assets/Video/CMOS/Building logic gates from MOSFET transistor/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/Building logic gates.vtt'},
  poster: './assets/Poster/CMOS/Building Logic Gates.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/Building logic gate.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/Building logic gate.jpg'
}]
},
{
  name: 'CMOS Inverter DC Characteristic',
  duration: 1379,
  sources: [{
    src: './assets/Video/CMOS/CMOS inverter/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/CMOS/vtt/CMOS Inverter DC characteristic.vtt'},
  poster: './assets/Poster/CMOS/CMOS Inverter.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/CMOS/CMOS Inverter.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Thumbnail/CMOS/CMOS Inverter.jpg'
}]
},
{
  name: 'Lab simulation of CMOS delay time',
  duration: 303,
  sources: [{
    src: './assets/Lab simulation/CMOS/CMOS delay time/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  poster: './assets/Lab simulation/CMOS/Poster/CMOS delay time.png',
  thumbnail: [{
    srcset: './assets/Lab simulation/CMOS/Thumbnail/CMOS delay time.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Lab simulation/CMOS/Thumbnail/CMOS delay time.jpg'
}]
},
{
  name: 'Lab simulation of CMOS VTC and Drain',
  duration: 234,
  sources: [{
    src: './assets/Lab simulation/CMOS/CMOS VTC and Drain/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  poster: './assets/Lab simulation/CMOS/Poster/CMOS VTC and Drain.png',
  thumbnail: [{
    srcset: './assets/Lab simulation/CMOS/Thumbnail/CMOS VTC and Drain.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
}, {
    src: './assets/Lab simulation/CMOS/Thumbnail/CMOS VTC and Drain.jpg'
}]
}
];
player.playlist(playlist);
player.playlist.autoadvance(0);
player.playlistUi();
player.hlsQualitySelector({
  displayCurrentQuality: true,
});
let qualityLevels = player.qualityLevels();
 
// disable quality levels with less than 1080 horizontal lines of resolution when added
// to the list.
qualityLevels.on('addqualitylevel', function(event) {
  let qualityLevel = event.qualityLevel;
 
  if (qualityLevel.height >= 1080) {
    qualityLevel.enabled = true;
  } else {
    qualityLevel.enabled = false;
  }
});
 
// example function that will toggle quality levels between SD and HD, defining and HD
// quality as having 1080 horizontal lines of resolution or more
let toggleQuality = (function() {
  let enable1080 = true;
 
  return function() {
    for (var i = 0; i < qualityLevels.length; i++) {
      let qualityLevel = qualityLevels[i];
      if (qualityLevel.width >= 1080) {
        qualityLevel.enabled = enable1080;
      } else {
        qualityLevel.enabled = !enable1080;
      }
    }
    enable1080 = !enable1080;
  };
})();
 
let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex; // -1 if no level selected
