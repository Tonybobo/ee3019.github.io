var options = {
  html5: {
    hls: {
      overrideNative: true
    },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
  },
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
        'qualitySelector',
       'fullscreenToggle'
       
    ],
    'pictureInPictureToggle':disablePicture()
 }
}
// disable picture in picture in chrome on mobile devices
function disablePicture (){
  var na = navigator.userAgent;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(na)){
    return false;
  }else {
    return true;
  }
} 
var player = videojs('my-video', options);
player.aspectRatio('16:9')
player.fill(true);
player.fluid(true);

var playlist = 
[
  {
    name: 'What is an operational amplifier',
    duration: 693,
    sources: [{
      src: './assets/Video/Feedback Circuit/What is an operational amplifier/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/What is an operational amplifier.vtt'},
    poster: './assets/Poster/Feedback/What is an operational amplifier.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/What is an operational amplifier.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/What is an operational amplifier.png'
        }],
      overlays: [{
        content: '<h2>What is an operational amplifier</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Concept of Negative Feedback',
    duration: 902,
    sources: [{
      src: './assets/Video/Feedback Circuit/Concept of Negative Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Concept of Negative Feedback.vtt'},
    poster: './assets/Poster/Feedback/Concept of Negative Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Concept of Negative Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Concept of Negative Feedback.png'
        }],
      overlays: [{
        content: '<h2>Concept of Negative Feedback</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Classification of Feedback Topologies',
    duration: 1101,
    sources: [{
      src: './assets/Video/Feedback Circuit/Classification of Feedback Topologies/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Classification of Feedback Topologies.vtt'},
    poster: './assets/Poster/Feedback/Classification of Feedback Topologies.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Classification of Feedback Topologies.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Classification of Feedback Topologies.png'
        }],
      overlays: [{
        content: '<h2>Classification of Feedback Topologies</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Series-Shunt',
    duration: 405,
    sources: [{
      src: './assets/Video/Feedback Circuit/Series-Shunt/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Series-Shunt.vtt'},
    poster: './assets/Poster/Feedback/Series-Shunt.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Shunt.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Shunt.png'
        }],
      overlays: [{
        content: '<h2>Series-Shunt</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Series-Series Simulation',
    duration: 348,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Series-Series Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Series-Series Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Series Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Series Feedback.png'
        }],
      overlays: [{
        content: '<h2>Series-Series simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Series-Shunt Simulation',
    duration: 484,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Series-Shunt Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Series-Shunt Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Series-Shunt Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Series-Shunt Feedback.png'
        }],
      overlays: [{
        content: '<h2>Series-Shunt simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Shunt-series',
    duration: 365,
    sources: [{
      src: './assets/Video/Feedback Circuit/Shunt-series/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shunt-series.vtt'},
    poster: './assets/Poster/Feedback/Shunt-series.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-series.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-series.png'
        }],
      overlays: [{
        content: '<h2>Shunt-series</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Shunt-series Simulation',
    duration: 351,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Shunt-series Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Shunt-series Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-series Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-series Feedback.png'
        }],
      overlays: [{
        content: '<h2>Shunt-series simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  },
  {
    name: 'Shunt-Shunt',
    duration: 633,
    sources: [{
      src: './assets/Video/Feedback Circuit/Shunt-Shunt/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shunt-Shunt.vtt'},
    poster: './assets/Poster/Feedback/Shunt-Shunt.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-Shunt.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-Shunt.png'
        }],
      overlays: [{
        content: '<h2>Shunt-Shunt</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
  {
    name: 'Shunt-Shunt Feeback Simulation',
    duration: 225,
    sources: [{
      src: './assets/Lab simulation/Feedback Circuit/Shunt-Shunt Feeback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    poster: './assets/Poster/Feedback/Shunt-Shunt Feeback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shunt-Shunt Feeback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shunt-Shunt Feeback.png'
        }],
      overlays: [{
        content: '<h2>Shunt-Shunt Feeback simulation</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  },
  {
    name: 'Shortcuts Steps for Problems on Negative Feedback',
    duration: 1451,
    sources: [{
      src: './assets/Video/Feedback Circuit/Shortcuts Steps for Problems on Negative Feedback/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Feedback Circuit/vtt/Shortcuts Steps for Problems on Negative Feedback.vtt'},
    poster: './assets/Poster/Feedback/Shortcuts Steps for Problems on Negative Feedback.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Feedback/Shortcuts Steps for Problems on Negative Feedback.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
              }, {
      src: './assets/Thumbnail/Feedback/Shortcuts Steps for Problems on Negative Feedback.png'
        }],
      overlays: [{
        content: '<h2>Shortcuts Steps for Problems on Negative Feedback</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
  }, 
];
player.on('playlistitem', function (event,video) {
  player.overlay({
    overlays: video.overlays
  });
});

player.playlist(playlist);
player.playlist.autoadvance(7);
player.playlistUi();

player.hlsQualitySelector({
  displayCurrentQuality: true,
});
function horizontal(){
  let w = window.outerWidth;
  let h = window.outerHeight;
  for(let i = 0; i<10;i++){
  if (w < 768){
    player.playlistUi({horizontal: true});
  }else{
    document.getElementById('playlist').classList.remove('vjs-playlist-horizontal')
  }
}

}

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
// Fast forward button
player.seekButtons({
  forward: 10,
  back:10
});

//Disable the quiz button until it is the last video

const button = document.getElementById('quiz-btn');
const link = document.getElementById('link');
function showAlert(){
  if(player.playlist.currentIndex() !== player.playlist.lastIndex()){
   link.removeAttribute("href");
    button.disabled = true;
    alert("Please finish all the video before proceeding to the quiz");
  }
  player.on('ended' , function (){
  if(player.playlist.currentIndex() !== player.playlist.lastIndex()){
    link.removeAttribute("href");
    button.disabled = true;
  }else if(player.playlist.currentIndex() == player.playlist.lastIndex()) {
    link.href ="quiz/CMOSquiz.html"
    button.disabled = false;
    }
  })
}



