$(".like-btn").click( function() {

	$(this).toggleClass('clicked');
  event.preventDefault();
});

$(".panel-group_btn span").click(function(){
    var btnStorage = $(this).attr("id");

    if($(this).hasClass("clicked")) {
        localStorage.setItem(btnStorage, 'true');
    } else {
        localStorage.removeItem(btnStorage, 'true');
                        }});
                    
  $( ".panel-group_btn span" ).each(function() {
      var mainlocalStorage = $( this ).attr( "id" );