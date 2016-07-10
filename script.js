$(function(){
  $('.datbot').hover(
    function() {
      $('.bot-overlay').removeClass('hidden')
    }, function () {
      $('.bot-overlay').addClass('hidden')
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
