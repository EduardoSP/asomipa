<?php
    //error_reporting(E_ALL);
    //Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
    include 'conexion.php';
    header('Content-Type: application/json');
    //Obtenemos los datos de los input
    if(isset($_POST["dataFormatExcel"]) && isset($_POST["totalesCtrl"])){
        $dataFormatExcel = $_POST["dataFormatExcel"];
        $totalesCtrl     = $_POST["totalesCtrl"];
        $mesReporte      = $_POST["mesReporte"];
        $anioReporte     = $_POST["anioReporte"];
        //$valoresAsociado   = $dataFormatExcel[0];
        $values     = "";
        $success    = false;
        //Establecer la información local en castellano de España
        date_default_timezone_set('America/Bogota');
        $fechaRegistro = date("Y-m-d h:i:sa");
        //$fechaRegistro   = "2018-05-11 00:00:00";
        foreach($dataFormatExcel as $valorAsociado){
            $nombres            = $valorAsociado['nombres'];
            $predioNo           = $valorAsociado['predioNo'];
            $areaTerreno        = $valorAsociado['areaTerreno'];
            $cuotaAdmon         = $valorAsociado['cuotaAdmon'];
            $saldosMesAnterior  = $valorAsociado['saldosMesAnterior'];
            $intereses          = $valorAsociado['intereses'];
            $cuotaMesAnterior   = $valorAsociado['cuotaMesAnterior'];
            $multas             = $valorAsociado['multas'];
            $cuotaExtra         = $valorAsociado['cuotaExtra'];
            $otros              = $valorAsociado['otros'];
            $totalMes           = $valorAsociado['totalMes'];
            $pagos              = $valorAsociado['pagos'];
            $saldo              = $valorAsociado['saldo'];
            $cedula             = $valorAsociado['cedula'];
            $values = $values."('".$cedula."','".$nombres."','".$predioNo."','".$areaTerreno."','".
                        $cuotaAdmon."','".$saldosMesAnterior."','".$intereses."','".$cuotaMesAnterior."','".
                        $multas."','".$cuotaExtra."','".$otros."','".$totalMes."','".$pagos."','".$saldo."','".
                        $mesReporte."','".$anioReporte."','".$fechaRegistro."'),";
        }
        $newValues = substr($values,0,-1).";";
        if($values != ""){
            $conn   = conexDB();
            $table  = "tblregistromensual";
            $campos = "(cedula, nombres, predio_No, area_terreno, cuota_admon, saldo_mes_anterior,".
                    "intereses, cuota_mes_anterior,multas,cuota_extra, otros, total_mes, pagos, saldo, mes_reporte, anio_reporte,fecha_registro)";
            $query  = "insert into ".$table."  ".$campos." values ".$newValues." ";
            $res    = mysqli_query($conn,$query);
            if($res==1){
                $success = true;
            }
        }
        $datos = array(
            'success' => $success,
            'message' => $query,
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