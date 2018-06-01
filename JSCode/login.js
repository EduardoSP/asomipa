$(document).ready(function() {
    $('#buttonLogin' ).click(function() {
          autenticarUsuarioLogin();
      });
  function autenticarUsuarioLogin(){
      var usuario	= $('#usuarioLogin').val();
      var password	= $('#usuarioPassword').val();
      console.log(usuario)
      datos = {"username":usuario, "password":password};
      var request = $.ajax({
          type: "POST",
          url		: "../phpCode/autenticacion.php",
          data	: datos,
          dataType: "json"
         });
      request.done(function(respuesta){
          if(respuesta.success){
            alert(respuesta.username);
            $(location).attr('href', '../asomipa/administrador');
          }
          
      });
      request.fail(function(jqXHR, textStatus){
      });
  }
  
  

});