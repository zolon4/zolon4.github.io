var content = [
  {
  },
  {
    beacon: {
      position: { x: "30%", y: "50%" }
    },
    card: {
      title: "Folie à deux",
      body: '"&ldquo;The essential feature of a <span class="red">shared psychotic disorder</span> (folie à deux)...<br><br> is a <span class="bold">delusion that develops in an otherwise healthy individual who is involved in a close relationship with another person</span> (sometimes termed the &ldquo;inducer&rdquo; or &ldquo;the primary case&rdquo;) <span class="bold">who already has a psychotic disorder with prominent delusions...</span>" <br><br><span class="source-1"> -- Kenn Nunn, Chance</span>',
      position: { x: "50%", y: "30%" },
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5962/processed/clip1.webm?1477965658519",
      class: "card-video",
      bodyClass: "card-video-quote",
      id: "video1"
    }
  },
  {
    beacon: {
      position: { x: "40%", y: "20%" }
    },
    card: {
      title: "Borderline<br> Personality Disorder",
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5963/processed/clip2.webm?1477967392591",
      body: "Experts don't know exactly what causes borderline personality disorder. Problems with <span class='bold'>chemicals in the brain that help control moods</span> may play a role. It also seems to run in families.<br /><br />Often, people who get it faced some kind of <span class='bold'>childhood trauma such as abuse, neglect, or the death of a parent</span>. The risk is higher when people who had childhood trauma also have problems coping with anxiety or stress.<br /><br /><span class='source web-md'><a style='color: #acacac;' href='http://www.webmd.com/mental-health/tc/borderline-personality-disorder-topic-overview'>webmd.com</a></span>",
      position: { x: "52%", y: "36%" },
      class: "card-video-0 card-video",
      id: "video2"
    }
  },
  {
    beacon: {
      position: { x: "60%", y: "40%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5895/processed/clip2.baseline.mp4?1477460024884",
      title: "A modern approach to treating bpd",
      body: "Did you know that <span class='bold'>Mindfulness Meditation</span> can be an effective self care approach to ease some symptoms associated with Borderline Personality Disorder?<br> While professional treatment and support is always recommended for thsoe suffering from BPD, studies have found that many suffering from BPD seek self care approaches to managing their symptoms and Midnfulness Meditation seems to be a great place to start",
      footer: "You never know what you're capable of until you find out what you're capable of.",
      author: "- D.Chance",
      position: { x: "15%", y: "20%" },
      class: "card-video-1"
    }
  },
  {
    beacon: {
      position: { x: "50%", y: "80%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5964/processed/clip4.webm?1477969316707",
      body: '"<span class="bold">Borderline personality disorder is considered one of the most <span class="red">severe and troubling</span> personality disorders."</span><br /><br /> Research shows that those diagnosed with BPD experience less empathy than those without the disorder. People with more BPD traits have a more difficult time understanding and/or predicting how others feel. <br /><br /><span class="source web-md"><a style="color: #acacac;" href="http://news.uga.edu">Source</a></span>',
      position: { x: "57%", y: "15%" },
      class: "card-video-2"
    }
  },
  { beacon: {
      position: { x: "70%", y: "25%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5965/processed/clip5.webm?1477970463615",
      title: "Dr. Eldon Chance",
      body: "Chance is a neuropsychiatrist and a man primed for spectacular ruin. He's feeling like a cog in a broken system and spends his days with those mutilated by life. He's observing people at a distance instead of treating them and it's destroying his soul. His private life is no better. <br> <br>And then one day in walks Jaclyn Blackstone who appears to be suffering from dissociative identity disorder. She is an entrancing enigma—one Chance cannot let go.   ",
      position: { x: "30%", y: "30%" },
      class: "card-video-3"
    }
  },
  { beacon: {
      position: { x: "75%", y: "75%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5966/processed/clip6.webm?1477971271939",
      title: "Jaclyn Blackstone",
      body: "Referred to Dr. Chance for complaints of memory loss and blackouts, Jaclyn is married to an abusive homicide detective and claims to have a second personality, Jackie Black, who she says will not allow her to leave her husband. Jaclyn is a chameleonic, charismatic and resourceful, the kind of woman who can make sane me do insane things.",
      position: { x: "20%", y: "20%" },
      class: "card-video-4"
    }
  },
  {
    video: {
      position: {x: "0%", y: "0%"},
      class: "card-video"

    }
  },
  {
  }
];

$().ready(function () {
  Mustache.parse($('#card').html())

  $(".beacon").css("opacity", 0)

  // load videos
  var trailer =  videojs("trailer", function(){

  });

  if ($(window).width() < 768) {
    $('#begin').addClass("display-none")
  }


  $($(window).resize(function(){
    if ($(window).width() < 768) {
      $('#begin').addClass("display-none")
    } else {
      $('#begin').removeClass("display-none")

    }

  }))







  $("#trailer_html5_api").on('click', function() {
    if(trailer.paused()) {
      trailer.play()
    } else {
      trailer.pause()
    }
  })


	//setup slider.
	var slider = $('.flexslider').flexslider({
		animation: "slide",
    animationLoop: false,
		controlNav: true,
		slideshow: false,
		direction: "vertical",
    slideDirection: "vertical",
		directionNav: false,
		animationLoop: false,
    mousewheel: false,
		after: function (slider) {
      var index = slider.animatingTo
      var page = index + 1
      var slide = $('#page-' + page);
      if (page != 8) {trailer.pause()}
      if (page == 1) {
      } else if (page == 2) {
      } else if (page == 3) {
      } else if (page == 4) {
      } else if (page == 5) {
      }
		},
		before: function (slider) {
      var index = slider.animatingTo;
      var page = index + 1;
      var c = content[index];
      var slide = $('#page-' + page);
      var card;

      $('.card').fadeOut(1000, function() {
        if (c.card != undefined) {
          card = $(Mustache.render($('#card').html(), c.card)).css("left", c.card.position.x).css("top", c.card.position.y)

          $(".card").replaceWith(card)
          var video = card.find("video")
            video.ready(function(){
            card.fadeIn(1000, function() {
            })
          })

        }
      })

      if (c.beacon != undefined) {
        $('.beacon').transition({ left: c.beacon.position.x, top: c.beacon.position.y, opacity: 1, duration: 1000 })
      } else {
        $('.beacon').transition({ opacity: 0, duration: 1000 })
      }


      var beaconXY = function(x,y) {
        $('.beacon').css("top", y).css("left", x)
      }

      var beaconResize = function(x1,y1,x2,y1) {
        if ($(window).width() < 700) {
          beaconXY(x2,y2)
        } else  {
          beaconXY(x1, y1)
        }
      }

      if (page != 9) {
        $('#scroll-arrow').removeClass('flipped')
      } else {
        $('#scroll-arrow').addClass('flipped')
      }

      if (page == 1) {
        $('.brain').transition({ opacity: 0, duration: 1000 })
        $('.video').pause();
      } else if (page == 2) {
        $('.brain').slice(1).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,1).transition({ opacity: 1, duration: 1000 })

          if ($(window).width() < 768) {
            beaconXY("26%","10%")
          }

          $(window).resize(function(){
            if ($(window).width() < 700) {
              beaconXY("26%","10%")
            } else  {
              beaconXY("30%", "50%")
            }
          });

			} else if (page == 3) {
        $('.brain').slice(2).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,2).transition({ opacity: 1, duration: 1000 })

        if ($(window).width() < 768) {
          beaconXY("30%","8%")
        }

        $(window).resize(function(){
          if ($(window).width() < 700) {
            beaconXY("30%","8%")
          } else  {
            beaconXY("40%", "20%")
          }
        });

			} else if (page == 4) {
        $('.brain').slice(3).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,3).transition({ opacity: 1, duration: 1000 })

        if ($(window).width() < 768) {
          beaconXY("53%","15%")
        }

        $(window).resize(function(){
          if ($(window).width() < 700) {
            beaconXY("53%","15%")
          } else  {
            beaconXY("60%", "40%")
          }
        });

			} else if (page == 5) {
        $('.brain').slice(4).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,4).transition({ opacity: 1, duration: 1000 })

        if ($(window).width() < 768) {
          beaconXY("50%","20%")
        }

        $(window).resize(function(){
          if ($(window).width() < 700) {
            beaconXY("50%","20%")
          } else  {
            beaconXY("50%", "80%")
          }
        });


			} else if (page == 6) {
        $('.brain').slice(5).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,5).transition({ opacity: 1, duration: 1000 })

        if ($(window).width() < 768) {
          beaconXY("75%","10%")
        }

        $(window).resize(function(){
          if ($(window).width() < 700) {
            beaconXY("75%","10%")
          } else  {
            beaconXY("70%", "25%")
          }
        });


      } else if (page == 7) {
        $('.brain').slice(6).transition({ opacity: 0, duration: 1000 })
        $('.brain').slice(0,6).transition({ opacity: 1, duration: 1000 })

        if ($(window).width() < 768) {
          beaconXY("75%","20%")
        }

        $(window).resize(function(){
          if ($(window).width() < 700) {
            beaconXY("75%","20%")
          } else  {
            beaconXY("75%", "75%")
          }
        });

      } else if (page == 8) {
        $('.brain').transition({ opacity: 0, duration: 1000 })

        trailer.play();
      } else if (page == 9) {
        $('.brain').transition({ opacity: 0, duration: 1000 })
      }

      if (page == 9) {
        $('.hulu-button').addClass('display-none')
        $('.next').html('Back to the top')

        $('.btn-next').html('Start Over')
      } else if (page == 1) {
        $('.btn-next').html('Begin')
      }
      else {
        $('.scroll-text').removeClass('display-none')
        $('.hulu-button').removeClass('display-none')
        $('.btn-next').html('Next')

      }

		},
    start: function(slider) {

      // begin button

    mousewheel:
      var timer = null;
      var wheeling = false;


      $('.flexslider').on('mousewheel', function(event, delta, deltaX, deltaY){

        if (timer) { clearTimeout(timer); }
        if(!wheeling) {
          if(delta != 8) {
            trailer.pause();
            var target = delta < 0 ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, true);
          }

        }
        wheeling = true;
        timer = setTimeout(function() { wheeling = false; }, 60);
      });

      $('#begin').on('click', function(event, delta, deltaX, deltaY) {
        target = slider.getTarget('next')
        slider.flexAnimate(target, true);

      })

      $('.btn-next').on('click', function(event, delta, deltaX, deltaY){
        target = slider.getTarget('next')
        slider.flexAnimate(target, true);
      })


      $('.scroll-text').on('click', function(event, delta, deltaX, deltaY){
        if (delta == 9) {
          target = slider.getTarget(9)
          slider.flexAnimate(target, true);
        } else {
          target = slider.getTarget('next')
          slider.flexAnimate(target, true);

        }

      })


      $(document).keydown(function(e){
        switch(e.which) {
          case 40:
            target = slider.getTarget('next')
            slider.flexAnimate(target, true);
          break;
          case 38:
            target = slider.getTarget('prev')
            slider.flexAnimate(target, false);
          break;
          default: return; // allow other keys to be handled
        }
        e.preventDefault();
      });

    }
	});

	//Size Stuff - the rest is sized in the flex slider function on resize.
	$(".content").height(parseInt($("body").height(), 10));

});
