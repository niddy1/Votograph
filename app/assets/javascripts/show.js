$('.remove-poll').on("click", function(){
  test = $(this).parent();
  test_id = parseInt ( $(this).parent().attr("id") );
  $(this).parent().remove();

  $.ajax({
      url: '/polls/'+test_id,
      type: 'DELETE',
      dataType: 'json'
  });
});
