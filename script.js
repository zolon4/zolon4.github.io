$(function(){
  $('.datbot').hover(
    function() {
      $('.bot-overlay').removeClass('hidden')
    }, function () {
      $('.bot-overlay').addClass('hidden')
    }
  )

  $('#bot').hover(
    function(){
      $('#bot').effect( "shake", { direction: "right", times: 4, distance: 10}, 1000 )
    },
    function(){
      $('#bot').complete('shake')

    }
  )
  $('#ud').hover(
    function(){
      $('#ud').effect( "shake", { direction: "right", times: 4, distance: 10}, 1000 )
    },
    function(){
      $('#ud').complete('shake')

    }
  )

  $('#uc').hover(
    function(){
      $('#uc').effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 )
    },
    function(){
      $('#uc').complete('shake')

    }
  )
  $('#dt').hover(
    function(){
      $('#dt').effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 )
    },
    function(){
      $('#dt').complete('shake')

    }
  )

  $('.updog').hover(
    function() {
      $('.dog-overlay').removeClass('hidden')
    }, function () {
      $('.dog-overlay').addClass('hidden')
    }
  )
  $('.daytrippr').hover(
    function() {
      $('.trip-overlay').removeClass('hidden')
    }, function () {
      $('.trip-overlay').addClass('hidden')
    }
  )
  $('.ubercart').hover(
    function() {
      $('.cart-overlay').removeClass('hidden')
    }, function () {
      $('.cart-overlay').addClass('hidden')
    }
  )




})
