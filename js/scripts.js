$(document).ready(function() {

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {

      var dropdowns = document.getElementsByClassName(".menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openMenu = dropdowns[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  }


$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});
