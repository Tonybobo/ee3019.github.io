
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
player.aspectRatio('16:9');
player.fill(true);
player.fluid(true);

var playlist = 
[{
  name: 'Semiconductor Memory',
  duration: 102,
  sources: [{
    src: './assets/Video/Semiconductor Memories/Semiconductor Memory/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] Semiconductor Memory.vtt'},
  poster: './assets/Poster/Semiconductor Memories/Semiconductor Memory.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/Semiconductor Memories/Semiconductor Memory.jpg',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
  }, {
    src: './assets/Thumbnail/Semiconductor Memories/Semiconductor Memory.jpg'
  }],
    overlays: [{
      content: '<h2>Semiconductor Memory</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }]
  },
  {
    name: 'Nor Based ROM Array',
    duration: 180,
    sources: [{
      src: './assets/Video/Semiconductor Memories/Nor Based ROM array/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] Nor Based Rom Array.vtt'},
    poster: './assets/Poster/Semiconductor Memories/Nor Based ROM Array.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Semiconductor Memories/Nor Based ROM Array.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
    }, {
      src: './assets/Thumbnail/Semiconductor Memories/Nor Based ROM Array.png'
    }],
      overlays: [{
        content: '<h2>Nor Based ROM Array</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
    },
    {
      name: 'Nand Based ROM Array',
      duration: 181,
      sources: [{
        src: './assets/Video/Semiconductor Memories/Nand Based ROM Array/playlist.m3u8',
        type: 'application/x-mpegURL'
      }],
      track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] NAND BASED ROM Array.vtt'},
      poster: './assets/Poster/Semiconductor Memories/Nand Based ROM Array.png',
      thumbnail: [{
        srcset: './assets/Thumbnail/Semiconductor Memories/Nand Based ROM Array.png',
        type: 'image/jpeg',
        media: '(min-width: 50px;)'
      }, {
        src: './assets/Thumbnail/Semiconductor Memories/Nand Based ROM Array.png'
      }],
        overlays: [{
          content: '<h2>Nand Based ROM Array</h2>',
          showBackground: true,
          start: 'pause',
          end: 'play',
          align: 'top-left'
        }]
      },
      {
        name: 'Memory Chip Organization',
        duration: 505,
        sources: [{
          src: './assets/Video/Semiconductor Memories/Memory Chip Organization/playlist.m3u8',
          type: 'application/x-mpegURL'
        }],
        track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] Memory Chip Organization.vtt'},
        poster: './assets/Poster/Semiconductor Memories/Memory Chip Organization.png',
        thumbnail: [{
          srcset: './assets/Thumbnail/Semiconductor Memories/Memory Chip Organization.png',
          type: 'image/jpeg',
          media: '(min-width: 50px;)'
        }, {
          src: './assets/Thumbnail/Semiconductor Memories/Memory Chip Organization.png'
        }],
          overlays: [{
            content: '<h2>Memory Chip Organization</h2>',
            showBackground: true,
            start: 'pause',
            end: 'play',
            align: 'top-left'
          }]
        },
        {
          name: 'SRAM 6T - circuit explanation and read operation',
          duration: 492,
          sources: [{
            src: './assets/Video/Semiconductor Memories/SRAM 6T - circuit explanation and read operation/playlist.m3u8',
            type: 'application/x-mpegURL'
          }],
          track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] SRAM 6T circuit explanation and read operation.vtt'},
          poster: './assets/Poster/Semiconductor Memories/SRAM 6T read and write.png',
          thumbnail: [{
            srcset: './assets/Thumbnail/Semiconductor Memories/SRAM 6T read and write.png',
            type: 'image/jpeg',
            media: '(min-width: 50px;)'
          }, {
            src: './assets/Thumbnail/Semiconductor Memories/SRAM 6T read and write.png'
          }],
            overlays: [{
              content: '<h2>SRAM 6T - circuit explanation and read operation</h2>',
              showBackground: true,
              start: 'pause',
              end: 'play',
              align: 'top-left'
            }]
          },
          {
            name: 'SRAM 6T - write operation and design consideration',
            duration: 237,
            sources: [{
              src: './assets/Video/Semiconductor Memories/SRAM 6T - write operation and design consideration/playlist.m3u8',
              type: 'application/x-mpegURL'
            }],
            track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] SRAM 6T write operation and design consideration.vtt'},
            poster: './assets/Poster/Semiconductor Memories/SRAM 6T write.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Semiconductor Memories/SRAM 6T write.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
            }, {
              src: './assets/Thumbnail/Semiconductor Memories/SRAM 6T write.png'
            }],
              overlays: [{
                content: '<h2>SRAM 6T - write operation and design consideration</h2>',
                showBackground: true,
                start: 'pause',
                end: 'play',
                align: 'top-left'
              }]
            },
            {
              name: 'DRAM circuit, read and write operation',
              duration: 296,
              sources: [{
                src: './assets/Video/Semiconductor Memories/DRAM circuit, read and write operation/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] DRAM circuit Read Write Operation.vtt'},
              poster: './assets/Poster/Semiconductor Memories/DRAM.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Semiconductor Memories/DRAM.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
              }, {
                src: './assets/Thumbnail/Semiconductor Memories/DRAM.png'
              }],
                overlays: [{
                  content: '<h2>DRAM circuit, read and write operation</h2>',
                  showBackground: true,
                  start: 'pause',
                  end: 'play',
                  align: 'top-left'
                }]
              },
              {
                name: '3T DRAM - circuit ,read and write operations',
                duration: 525,
                sources: [{
                  src: './assets/Video/Semiconductor Memories/3T DRAM - circuit ,read and write operations/playlist.m3u8',
                  type: 'application/x-mpegURL'
                }],
                track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Semiconductor Memories/vtt/[SubtitleTools.com] 3T DRAM Read Write Operation.vtt'},
                poster: './assets/Poster/Semiconductor Memories/3T DRAM.png',
                thumbnail: [{
                  srcset: './assets/Thumbnail/Semiconductor Memories/3T DRAM.png',
                  type: 'image/jpeg',
                  media: '(min-width: 50px;)'
                }, {
                  src: './assets/Thumbnail/Semiconductor Memories/3T DRAM.png'
                }],
                  overlays: [{
                    content: '<h2>3T DRAM circuit, read and write operation</h2>',
                    showBackground: true,
                    start: 'pause',
                    end: 'play',
                    align: 'top-left'
                  }]
                },
                {
                  name: 'RAM simulation',
                  duration: 474,
                  sources: [{
                    src: './assets/Lab simulation/Semiconductor Memory/RAM simulation/playlist.m3u8',
                    type: 'application/x-mpegURL'
                  }],
                  poster: './assets/Poster/Semiconductor Memories/RAM simulation.png',
                  thumbnail: [{
                    srcset: './assets/Thumbnail/Semiconductor Memories/RAM simulation.png',
                    type: 'image/jpeg',
                    media: '(min-width: 50px;)'
                  }, {
                    src: './assets/Thumbnail/Semiconductor Memories/RAM simulation.png'
                  }],
                    overlays: [{
                      content: '<h2>RAM simulation</h2>',
                      showBackground: true,
                      start: 'pause',
                      end: 'play',
                      align: 'top-left'
                    }]
                  },
                  {
                    name: 'ROM simulation',
                    duration: 291,
                    sources: [{
                      src: './assets/Lab simulation/Semiconductor Memory/ROM simulation/playlist.m3u8',
                      type: 'application/x-mpegURL'
                    }],
                    poster: './assets/Poster/Semiconductor Memories/ROM simulation.png',
                    thumbnail: [{
                      srcset: './assets/Thumbnail/Semiconductor Memories/ROM simulation.png',
                      type: 'image/jpeg',
                      media: '(min-width: 50px;)'
                    }, {
                      src: './assets/Thumbnail/Semiconductor Memories/ROM simulation.png'
                    }],
                      overlays: [{
                        content: '<h2>ROM simulation</h2>',
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



