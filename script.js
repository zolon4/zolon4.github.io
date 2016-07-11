$(function(){
  $('.datbot').hover(
    function() {
      $('.bot-overlay').removeClass('hidden')
      $('#bot').addClass('bounce')

    }, function () {
      $('.bot-overlay').addClass('hidden')
      $('#bot').removeClass('bounce')

    }
  )



  $('.updog').hover(
    function() {
      $('.dog-overlay').removeClass('hidden')
      $('#ud').addClass('wobble')

    }, function () {
      $('.dog-overlay').addClass('hidden')
      $('#ud').removeClass('wobble')

    }
  )
  $('.daytrippr').hover(
    function() {
      $('.trip-overlay').removeClass('hidden')
      $('#dt').addClass('lightSpeedIn')
    }, function () {
      $('.trip-overlay').addClass('hidden')
      $('#dt').removeClass('lightSpeedIn')

    }
  )

  $('.ubercart').hover(
    function() {
      $('.cart-overlay').removeClass('hidden')
      $('#uc').addClass('flipInX')

    }, function () {
      $('.cart-overlay').addClass('hidden')
      $('#uc').removeClass('flipInX')

    }
  )

  $('#profile-image').hover(
    function () {
    $('.me-img').addClass('border')
    }, function () {
      $('.me-img').removeClass('border')
  });



})
