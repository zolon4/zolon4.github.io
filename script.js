var content = [
  {
  },
  {
    beacon: {
      position: { x: "30%", y: "50%" }
    },
    card: {
      title: "Folie à deux",
      body: "&ldquo;The essential feature of a shared psychotic disorder (folie à deux) is a delusion that develops in an otherwise healthy individual who is involved in a close relationship with another person (sometimes termed the &ldquo;inducer&rdquo; or &ldquo;the primary case&rdquo;) who already has a psychotic disorder with prominent delusions...&rdquo; -- Kenn Nunn, Chance",
      position: { x: "50%", y: "30%" },
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5898/processed/clip1.baseline.mp4?1477460805111",
      class: "card-video",
      id: "video1"
    }
  },
  {
    beacon: {
      position: { x: "40%", y: "20%" }
    },
    card: {
      title: "Borderline Personality Disorder",
      body: "Experts don't know exactly what causes borderline personality disorder. Problems with chemicals in the brain that help control moods may play a role. It also seems to run in families.<br /><br />Often, people who get it faced some kind of childhood trauma such as abuse, neglect, or the death of a parent. The risk is higher when people who had childhood trauma also have problems coping with anxiety or stress.<br /><br /><span class='source web-md'>webmd.com</span>",
      position: { x: "55%", y: "36%" },
      class: "card-text-skinny",
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
      body: "Did you know that <span class='bold'>Mindfulness Meditation</span> can be an effective self care approach to ease some symptoms associated with Borderline Personality Disorder.<br> While professional treatment and support is always recommended for thsoe suffering from BPD, studies have found that many suffering from BPD seek self care approaches to managing their symptoms and Midnfulness Meditation seems to be a great place to start",
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
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5893/processed/clip3.baseline.mp4?1477459989241",
      body: "<span class='bold'>Borderline personality disorder is considered one of the most <span class='red'>severe and troubling</span> personality disorders</span><br /><br /> Research shows that those diagnosed w/ BPD experience less empathy than those without the disorder. People with more BPD traits have a more difficult time understanding and/or predicting how others feel. <br /><br /><span class='source'>Source</span>",
      position: { x: "57%", y: "15%" },
      class: "card-video-2"
    }
  },
  { beacon: {
      position: { x: "70%", y: "25%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5897/processed/clip4.baseline.mp4?1477460122071",
      title: "San Francisco Population   805,235 </br /># of adults w/ serious mental illness    28,183 <br/># of psychiatrists    616",
      body: "A staggering 3.5% of the San Francisco population suffers with serious mental illness. With only 616 psychiatrists practicing in the city today, increasing awareness for the pervasive mental health problems facing the city is paramount ot cultivating an increased care provider network adequate to support the large population of mentalll ill San Franciscans. <br /> <br /> <span class='source'>cbcf.org</span>",
      position: { x: "30%", y: "30%" },
      class: "card-video-3"
    }
  },
  { beacon: {
      position: { x: "75%", y: "75%" }
    },
    card: {
      video: "http://d3ab9omd0xmpv4.cloudfront.net/attachments/media/5894/processed/clip5.baseline.mp4?1477459994365",
      title: "Disrupting the brain",
      body: "A traumatic brain injury (TBI) is defined as a blow or jolt to the head or penetrating head injury that disrupts the function of the brain. Not all blows or jolts to the head result in a TBI. <br /><br />In the U.S., an estimated 1.7 million people sustain a traumatic brain injury each year.<br><ul><li><span class='bold'>52,000</span> die</li><li><span class='bold'>275,000</span> are hospitalized</li><li><span class='bold'>1,365</span> million are treated and released from an emergency department",
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


      if (page == 1) {
        $('.brain').transition({ opacity: 0, duration: 1000 })
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
        $('.scroll-text').addClass('display-none')
        $('.hulu-button').addClass('display-none')
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
        target = slider.getTarget('next')
        slider.flexAnimate(target, true);
      })



    }
	});

	//Size Stuff - the rest is sized in the flex slider function on resize.
	$(".content").height(parseInt($("body").height(), 10));

});
