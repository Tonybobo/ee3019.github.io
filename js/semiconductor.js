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
player.fill(true);
player.fluid(true);

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
  }],
    overlays: [{
      content: '<h2>Production of Silicon</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }]
  }
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



