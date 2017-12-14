$(document).ready(function() {

$("#main-page").hide();
$("#signUp-page").hide();
$("#verify").hide();
$("#signUp-page2").hide();
$("#end").hide();


/*reapareciendo pagina principal una vez el spash desaparezca*/
$('#splash').fadeOut(3000, function() {
  $("#splash").remove();
  $('#main-page').fadeIn(1000);
});

/*reapareciendo sección sign up al clickear en el botón*/
$("#sign-up").click(function(){
  $("#main-page").hide();
  $("#signUp-page").show();

  /*escondiendo codigos de paises*/
  $("#colombia").hide();
  $("#peru").hide();
  $("#mexico").hide();
  $("#usa").hide();
});

/*devolviendo a la pagina principal*/
$("#return-main").click(function(){
  $("#signUp-page").hide();
  $("#main-page").show();
});

/*habilitando boton next de sign up*/
$("#phone").keyup(function () {
  if($(this).val().length == 10) {
    $("#next").removeAttr('disabled');
    $("#next").removeClass("disabled");
  } else {
    $("#next").attr("disabled", "disabled");
  }
});

/**habilitando boton next de verify*/
$("#lab").keyup(function () {
  if($(this).val().length == 3) {
    $("#next-verify").removeAttr('disabled');
    $("#next-verify").removeClass("disabled");
  } else {
    $("#next-verify").attr("disabled", "disabled");
  }
});


/*reenviando el código con el botón resend*/
$("#resend").click(function(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
    	code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código: LAB-" + code);
  $("#signUp-page").hide();
  $("#verify").show();
});

/*cuando clickee next va a alertar el codigo de verificacion*/

$("#next").click(function(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
    	code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código: LAB-" + code);
  $("#signUp-page").hide();
  $("#verify").show();

});

/*devolviendo a sign up*/
$("#return-sign").click(function(){
  $("#verify").hide();
  $("#signUp-page").show();
});

/*cuando clickee en next de verify llevará a la sección signup 2*/
$("#next-verify").click(function(){
  $("#verify").hide();
  $("#signUp-page2").show();
});

/*cuando se cliquee el la flecha return volverá a la seccion verify*/
$("#return-verify").click(function(){
  $("#signUp-page2").hide();
  $("#verify").show();
});

/*si el checkbox está seleccionado el botón se actiivará*/
  $("#test5").click(function() {
    var checked_status = this.checked;
    if (checked_status == true && $("#first_name").val() !== '' && $("#last_name").val() !== '' && $("#email").val() !== '' ) {
       $("#next-sign2").removeAttr("disabled");
         $("#next-sign2").removeClass("disabled");
    } else {
       $("#next-sign2").attr("disabled", "disabled");
    }
});

/*al clickear el boton next de sign-up2 lleva a la ultima seccion*/
$("#next-sign2").click(function(){
  $("#signUp-page2").hide();
  $("#end").show();
});

/*al clickear el tick te lleva a la main page*/
$("#tick").click(function(){
  $("#end").hide();
  $("#main-page").show();
});

/*dropdown banderas*/
$(".dropdown img.flag").addClass("flagvisibility");
    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });

    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("sample"));
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });
    $(".dropdown img.flag").toggleClass("flagvisibility");


/*mostrando los códgos de cada país*/
    $("#imgcol").click(function(){
      $("#colombia").show();
      $("#peru").hide();
      $("#mexico").hide();
      $("#usa").hide();
    });

    $("#imgper").click(function(){
      $("#colombia").hide();
      $("#peru").show();
      $("#mexico").hide();
      $("#usa").hide();
    });

    $("#imgmex").click(function(){
      $("#colombia").hide();
      $("#peru").hide();
      $("#mexico").show();
      $("#usa").hide();
    });

    $("#imgusa").click(function(){
      $("#colombia").hide();
      $("#peru").hide();
      $("#mexico").hide();
      $("#usa").show();
    });

});
