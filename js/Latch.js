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
  name: 'CMOS NOR gate ',
  duration: 540,
  sources: [{
    src: './assets/Video/Latches & Flip Flop/CMOS NOR gate/playlist.m3u8',
    type: 'application/x-mpegURL'
  }],
  track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/CMOS Nor Gate.vtt'},
  poster: './assets/Poster/Latches & Flip Flop/CMOS Nor gate.png',
  thumbnail: [{
    srcset: './assets/Thumbnail/Latches & Flip Flop/CMOS Nor gate.png',
    type: 'image/jpeg',
    media: '(min-width: 50px;)'
    }, {
    src: './assets/Thumbnail/Latches & Flip Flop/CMOS Nor gate.png'
    }],
    overlays: [{
      content: '<h2>CMOS NOR gate</h2>',
      showBackground: true,
      start: 'pause',
      end: 'play',
      align: 'top-left'
    }]
  },
  {
    name: 'CMOS NAND gate ',
    duration: 480,
    sources: [{
      src: './assets/Video/Latches & Flip Flop/CMOS NAND gate/playlist.m3u8',
      type: 'application/x-mpegURL'
    }],
    track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/CMOS NAND Gate.vtt'},
    poster: './assets/Poster/Latches & Flip Flop/CMOS NAND gate.png',
    thumbnail: [{
      srcset: './assets/Thumbnail/Latches & Flip Flop/CMOS NAND gate.png',
      type: 'image/jpeg',
      media: '(min-width: 50px;)'
      }, {
      src: './assets/Thumbnail/Latches & Flip Flop/CMOS NAND gate.png'
      }],
      overlays: [{
        content: '<h2>CMOS NAND gate</h2>',
        showBackground: true,
        start: 'pause',
        end: 'play',
        align: 'top-left'
      }]
    },
    {
      name: 'Latches and Flip-Flops 1 - The SR latch ',
      duration: 733,
      sources: [{
        src: './assets/Video/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch/playlist.m3u8',
        type: 'application/x-mpegURL'
      }],
      track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip-Flops 1 - The SR latch.vtt'},
      poster: './assets/Poster/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png',
      thumbnail: [{
        srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png',
        type: 'image/jpeg',
        media: '(min-width: 50px;)'
        }, {
        src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flops 1 - The SR latch.png'
        }],
        overlays: [{
          content: '<h2>Latches and Flip-Flops 1 - The SR latch</h2>',
          showBackground: true,
          start: 'pause',
          end: 'play',
          align: 'top-left'
        }]
      },
      {
        name: 'Latches and Flip-Flop 2 The gated SR latch ',
        duration: 572,
        sources: [{
          src: './assets/Video/Latches & Flip Flop/Latches and Flip Flop 2 The gated SR latch/playlist.m3u8',
          type: 'application/x-mpegURL'
        }],
        track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip Flop 2 The gated SR latch.vtt'},
        poster: './assets/Poster/Latches & Flip Flop/Latches and Flip Flop 2 The gated SR latch.png',
        thumbnail: [{
          srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flop 2 The gated SR latch.png',
          type: 'image/jpeg',
          media: '(min-width: 50px;)'
          }, {
          src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip-Flop 2 The gated SR latch.png'
          }],
          overlays: [{
            content: '<h2>Latches and Flip-Flop 2 The gated SR latch</h2>',
            showBackground: true,
            start: 'pause',
            end: 'play',
            align: 'top-left'
          }]
        },
        {
          name: 'Clocked SR flip flop',
          duration: 712,
          sources: [{
            src: './assets/Video/Latches & Flip Flop/Clocked SR flip flop/playlist.m3u8',
            type: 'application/x-mpegURL'
          }],
          track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Clocked SR flip flop.vtt'},
          poster: './assets/Poster/Latches & Flip Flop/Clocked SR flip flop.png',
          thumbnail: [{
            srcset: './assets/Thumbnail/Latches & Flip Flop/Clocked SR flip flop.png',
            type: 'image/jpeg',
            media: '(min-width: 50px;)'
            }, {
            src: './assets/Thumbnail/Latches & Flip Flop/Clocked SR flip flop.png'
            }],
            overlays: [{
              content: '<h2>Clocked SR flip flop</h2>',
              showBackground: true,
              start: 'pause',
              end: 'play',
              align: 'top-left'
            }]
          },
          {
            name: 'SR Latches simulation ',
            duration: 569,
            sources: [{
              src: './assets/Lab simulation/Latches & Flip Flop/SR latches/playlist.m3u8',
              type: 'application/x-mpegURL'
            }],
            poster: './assets/Poster/Latches & Flip Flop/SR latches.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/SR latches.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/SR latches.png'
              }],
              overlays: [{
                content: '<h2>SR Latches simulation</h2>',
                showBackground: true,
                start: 'pause',
                end: 'play',
                align: 'top-left'
              }]
            },
          {
            name: 'JK Flip-flop',
            duration: 510,
            sources: [{
              src: './assets/Video/Latches & Flip Flop/JK Flip-flop/playlist.m3u8',
              type: 'application/x-mpegURL'
            }],
            track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/JK Flip-flop.vtt'},
            poster: './assets/Poster/Latches & Flip Flop/JK Flip-flop.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/JK Flip-flop.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/JK Flip-flop.png'
              }],
              overlays: [{
                content: '<h2>JK Flip-flop</h2>',
                showBackground: true,
                start: 'pause',
                end: 'play',
                align: 'top-left'
              }]
            },
            {
              name: 'JK Flip Flop  ',
              duration: 343,
              sources: [{
                src: './assets/Lab simulation/Latches & Flip Flop/JK Flip Flop 1/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              poster: './assets/Poster/Latches & Flip Flop/JK Flip Flop 1.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/JK Flip Flop 1.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/JK Flip Flop 1.png'
                }],
                overlays: [{
                  content: '<h2>JK Flip Flop </h2>',
                  showBackground: true,
                  start: 'pause',
                  end: 'play',
                  align: 'top-left'
                }]
              },
            {
              name: 'Master Slave Flip Flop',
              duration: 933,
              sources: [{
                src: './assets/Video/Latches & Flip Flop/Master Slave Flip Flop/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Master Slave Flip Flop.vtt'},
              poster: './assets/Poster/Latches & Flip Flop/Master Slave Flip Flop.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop.png'
                }],
                overlays: [{
                  content: '<h2>Master Slave Flip Flop</h2>',
                  showBackground: true,
                  start: 'pause',
                  end: 'play',
                  align: 'top-left'
                }]
              },
              {
                name: 'Master Slave Flip Flop simulation  ',
                duration: 64,
                sources: [{
                  src: './assets/Lab simulation/Latches & Flip Flop/Master Slave Flip Flop/playlist.m3u8',
                  type: 'application/x-mpegURL'
                }],
                poster: './assets/Poster/Latches & Flip Flop/Master Slave Flip Flop 1.png',
                thumbnail: [{
                  srcset: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop 1.png',
                  type: 'image/jpeg',
                  media: '(min-width: 50px;)'
                  }, {
                  src: './assets/Thumbnail/Latches & Flip Flop/Master Slave Flip Flop 1.png'
                  }],
                  overlays: [{
                    content: '<h2>Master Slave Flip Flop simulation</h2>',
                    showBackground: true,
                    start: 'pause',
                    end: 'play',
                    align: 'top-left'
                  }]
                },
        {
          name: 'Latches and Flip Flops 3 The gated D latch',
          duration: 467,
          sources: [{
            src: './assets/Video/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch/playlist.m3u8',
            type: 'application/x-mpegURL'
          }],
          track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Latches and Flip Flops 3 The gated D latch.vtt'},
          poster: './assets/Poster/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png',
          thumbnail: [{
            srcset: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png',
            type: 'image/jpeg',
            media: '(min-width: 50px;)'
            }, {
            src: './assets/Thumbnail/Latches & Flip Flop/Latches and Flip Flops 3 The gated D latch.png'
            }],
            overlays: [{
              content: '<h2>Latches and Flip Flops 3 The gated D latch</h2>',
              showBackground: true,
              start: 'pause',
              end: 'play',
              align: 'top-left'
            }]
          },
          {
            name: 'Rising and Falling edge trigged Flip Flop',
            duration: 382,
            sources: [{
              src: './assets/Video/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop/playlist.m3u8',
              type: 'application/x-mpegURL'
            }],
            track: { kind: 'captions', label: 'English', srclang: 'en', src:'./assets/Video/Latches & Flip Flop/vtt/Rising and Falling edge trigged Flip Flop.vtt'},
            poster: './assets/Poster/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png',
            thumbnail: [{
              srcset: './assets/Thumbnail/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png',
              type: 'image/jpeg',
              media: '(min-width: 50px;)'
              }, {
              src: './assets/Thumbnail/Latches & Flip Flop/Rising and Falling edge trigged Flip Flop.png'
              }],
              overlays: [{
                content: '<h2>Rising and Falling edge trigged Flip Flop</h2>',
                showBackground: true,
                start: 'pause',
                end: 'play',
                align: 'top-left'
              }]
            },
            {
              name: 'D flip flop with clock  ',
              duration: 362,
              sources: [{
                src: './assets/Lab simulation/Latches & Flip Flop/D flip flop with clock/playlist.m3u8',
                type: 'application/x-mpegURL'
              }],
              poster: './assets/Poster/Latches & Flip Flop/D flip flop with clock.png',
              thumbnail: [{
                srcset: './assets/Thumbnail/Latches & Flip Flop/D flip flop with clock.png',
                type: 'image/jpeg',
                media: '(min-width: 50px;)'
                }, {
                src: './assets/Thumbnail/Latches & Flip Flop/D flip flop with clock.png'
                }],
                overlays: [{
                  content: '<h2>D flip flop with clock</h2>',
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
  if (w < 780){
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



