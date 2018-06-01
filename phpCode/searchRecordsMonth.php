<?php
    //error_reporting(E_ALL);
    //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
    include 'conexion.php';
    header('Content-Type: application/json');
    //Obtenemos los datos de los input
    if(isset($_POST["mesReporte"]) && isset($_POST["anioReporte"])){
        $arrayResponse  = [];
        $mesReporte     = $_POST["mesReporte"];
        $anioReporte    = $_POST["anioReporte"];
        $conn   = conexDB();
        $table  = "tblregistromensual";
        $query  = "select * from ".$table."  where mes_reporte='".$mesReporte."' and anio_reporte='".$anioReporte."'";
        $result = mysqli_query($conn,$query);
        if (mysqli_num_rows($result) > 0) {
            $message = "Resultado";
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                $responseJson = array(
                    'nombres'       => $row["nombres"],
                    'predioNo'      => $row["predio_No"],
                    'areaTerreno'   => $row["area_terreno"],
                    'cuotaAdmon'    => $row["cuota_admon"],
                    'saldosMesAnterior'     => $row["saldo_mes_anterior"],
                    'intereses'             => $row["intereses"],
                    'cuotaMesAnterior'      => $row["cuota_mes_anterior"],
                    'multas'                => $row["multas"],
                    'cuotaExtra'            => $row["cuota_extra"],
                    'otros'                 => $row["otros"],
                    'totalMes'              => $row["total_mes"],
                    'pagos'                 => $row["pagos"],
                    'saldo'                 => $row["saldo"],
                    'cedula'                => $row["cedula"]
                );
                array_push($arrayResponse, $responseJson);
            }
        } else {
            $message = "0";
        }
        $datos = array(
            'success' => true,
            'message' => $message,
            'data'    => json_encode($arrayResponse) 
        );

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