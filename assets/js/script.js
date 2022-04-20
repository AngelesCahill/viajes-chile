$(document).ready(function () {
    $("#mensaje").click(function () {
        alert("Tu mensaje ha sido enviado exitosamente!!")
    });

    $("#ver-1").click(function () {
        $(".modal").show()
    });
    $("#cerrar-modal").click(function () {
        $(".modal").hide()
    });

    $(document).ready(function () {
        $(".modal-2").hide();
    })

    $("#ver-2").click(function () {
        $(".modal-2").show()
    });
    $("#cerrar-modal-2").click(function () {
        $(".modal-2").hide()
    });

    $(document).ready(function () {
        $(".modal-3").hide();
    })

    $("#ver-3").click(function () {
        $(".modal-3").show()
    });
    $("#cerrar-modal-3").click(function () {
        $(".modal-3").hide()
    });
    $(".icono-1").click(function (){
        $("#lorem-1").slideToggle()   
    });
     $(".icono-2").click(function (){
        $("#lorem-2").slideToggle()   
    });
     $(".icono-3").click(function (){
        $("#lorem-3").slideToggle()   
     });
    
    //smooth scroll
      $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
        var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });

});