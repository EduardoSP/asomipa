<?php
//Obtenemos los datos de los input
if(isset($_POST["username"]) && isset($_POST["password"])){
    //Hacemos las comprobaciones que sean necesarias... (sanitizar los textos para evitar XSS e inyecciones de código, comprobar que la edad sea un número, etc.)
    //Omitido para la brevededad del código
    //PERO NO OLVIDES QUE ES ALGO IMPORTANTE.

    //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
    header('Content-Type: application/json');
    //Guardamos los datos en un array
    session_start();
    $username = $_POST["username"];
    $_SESSION['login_user']= $username;  // Initializing Session with value of PHP Variable
    $datos = array(
    'success' => true,
    'message' => 'ok',
    'username'  => $_SESSION['login_user']
    );
    //session_destroy(); // Is Used To Destroy All Sessions
}
else{
    $datos = array(
        'success'   => false,
        'message'   => 'Error en parametros'
    );
}


//Devolvemos el array pasado a JSON como objeto
echo json_encode($datos, JSON_FORCE_OBJECT);
?>