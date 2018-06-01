$(document).ready(function() {
    $( "#divTable" ).hide();
    //Begin date
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var output = d.getFullYear() + '/' +
            (month<10 ? '0' : '') + month + '/' +
            (day<10 ? '0' : '') + day;
        var dateInfo = output.split("/");
        startYear = "2016";
        $("#month").val(dateInfo[1]);
        //$("#year").val(dateInfo[0]);
        var endYear  = dateInfo[0];
        startYearInt = parseInt(startYear);
        endYearInt   = parseInt(endYear);
        while(startYearInt < endYearInt){
            startYearInt  = startYearInt + 1;
            $('#year').append('<option value="' + startYearInt + '">' + startYearInt + '</option>');
        }
    //end date

    $('#viewfile' ).click(function() {
        //button Guardar Datos
        ExportToTable();
    });

    
    $('#viewData' ).click(function() {
        //button ver
        //paintTable(data);
        dataSearch();
        $( "#formFile" ).hide();
        $( "#divTable" ).show();
    });


    function ExportToTable() {
        var dataFormatExcel=[];
        var totalesCtrl; 
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xlsx|.xls)$/;  
        /*Checks whether the file is a valid excel file*/  
        if (regex.test($("#excelfile").val().toLowerCase())) {  
            var xlsxflag = false; /*Flag for checking whether excel is .xls format or .xlsx format*/  
            if ($("#excelfile").val().toLowerCase().indexOf(".xlsx") > 0) {  
                xlsxflag = true;  
            }  
            /*Checks whether the browser supports HTML5*/  
            if (typeof (FileReader) != "undefined") {  
                var reader = new FileReader();  
                reader.onload = function (e) {  
                       var data = e.target.result;  
                       /*Converts the excel data in to object*/  
                       if (xlsxflag) {  
                           var workbook = XLSX.read(data, { type: 'binary' });  
                       }  
                       else {  
                           var workbook = XLS.read(data, { type: 'binary' });  
                       
                       }
                       var i=11;
   
                       try{
                           while(workbook.Sheets.Hoja1["A"+i] != null){
                               if(workbook.Sheets.Hoja1["O"+i] != null ){
                                dataFormatExcel.push(
                                  { "nombres"              :workbook.Sheets.Hoja1["A"+i].v,
                                    "predioNo"            : workbook.Sheets.Hoja1["C"+i].v,
                                    "areaTerreno"         : workbook.Sheets.Hoja1["D"+i].v,
                                    "cuotaAdmon"          : workbook.Sheets.Hoja1["E"+i].v,
                                    "saldosMesAnterior"   : workbook.Sheets.Hoja1["F"+i].v,
                                    "intereses"             : workbook.Sheets.Hoja1["G"+i].v,
                                    "cuotaMesAnterior"    : workbook.Sheets.Hoja1["H"+i].v,
                                    "multas"              : workbook.Sheets.Hoja1["I"+i].v,
                                    "cuotaExtra"          : workbook.Sheets.Hoja1["J"+i].v,
                                    "otros"               : workbook.Sheets.Hoja1["K"+i].v,
                                    "totalMes"            : workbook.Sheets.Hoja1["L"+i].v,
                                    "pagos"               : workbook.Sheets.Hoja1["M"+i].v,
                                    "saldo"               : workbook.Sheets.Hoja1["N"+i].v,
                                    "cedula"              : workbook.Sheets.Hoja1["O"+i].v,
                                  }
                                );
                                  //  console.log(" primera "+workbook.Sheets.Hoja1["A"+i].v);
                                  //  console.log("tercera "+workbook.Sheets.Hoja1["C"+i].v);
                                  //  console.log("cuarta "+workbook.Sheets.Hoja1["D"+i].v);
                               }else{
                                 totalesCtrl={
                                   "totalesAreaTerreno"       : workbook.Sheets.Hoja1["D"+i].v,
                                   "totalesCuotaAdmom"        : workbook.Sheets.Hoja1["E"+i].v,
                                   "totalesSaldoMesAnterior"  : workbook.Sheets.Hoja1["F"+i].v,
                                   "totalesInteres"           : workbook.Sheets.Hoja1["G"+i].v,
                                   "totalesCuotaMesAnterior"  : workbook.Sheets.Hoja1["H"+i].v,
                                   "totalesMultas"            : workbook.Sheets.Hoja1["I"+i].v,
                                   "totalesCuotaExtra"        : workbook.Sheets.Hoja1["J"+i].v,
                                   "totalesOtros"             : workbook.Sheets.Hoja1["K"+i].v,
                                   "totalesTotalMes"          : workbook.Sheets.Hoja1["L"+i].v,
                                   "totalesPagos"             : workbook.Sheets.Hoja1["M"+i].v,
                                   "totalesSaldo"             : workbook.Sheets.Hoja1["N"+i].v,
                                  };
                                  // console.log("ultima "+workbook.Sheets.Hoja1["D"+i].v);
                                  // console.log("ultima "+workbook.Sheets.Hoja1["E"+i].v);
                                  break;
   
                               }
                               i = i + 1;
   
                            }
                            //send data for pgp file
                           senDataPhp(dataFormatExcel, totalesCtrl);
                          } catch(err) {
                              console.log(err);
                              alert("error al cargar por favor siga el formato de ejemplo")
                           }    
                   }  
                if (xlsxflag) {/*If excel file is .xlsx extension than creates a Array Buffer from excel*/  
                    reader.readAsArrayBuffer($("#excelfile")[0].files[0]);  
                }  
                else {  
                    reader.readAsBinaryString($("#excelfile")[0].files[0]);  
                }  
            }  
            else {  
                alert("Sorry! Your browser does not support HTML5!");  
            }     
        }  
        else {  
            alert("Por favor cargue un archivo de excel válido!");  
        } 
         
    }     
  //--------------------------paint table
    function paintTable(data){
        var table = $('#myTable').DataTable( {
            data: data,
            responsive: {
                details: {
                    type: 'column'
                }
            },
            columns: [
                {
                    "className":      'details-control',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": ''
                },
                {   title: "Cedula",
                    "data": 'cedula' }, 
                {   title: "Nombre",
                    "data": 'nombres' },   
                {   title: "predio No",
                "data": 'predioNo' },   
                {   title: "Area Terreno",
                "data": 'areaTerreno' },
                {   title: "Cuota Admon",
                "data": 'cuotaAdmon' },
                {   title: "Saldos mes anterior",
                "data": 'saldosMesAnterior' }
            ]
        } );
    
        // Add event listener for opening and closing details
        $('#myTable tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );
    
            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child( format(row.data()) ).show();
                tr.addClass('shown');
            }
        } );
        $( "#divTable" ).show();
    }
    function format ( d ) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
                '<td>Intereses:</td>'+
                '<td>'+d.intereses+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Cuota Mes anterior:</td>'+
                '<td>'+d.cuotaMesAnterior+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Multas:</td>'+
                '<td>'+d.multas+'</td>'+
            '</tr>'+
            
            '<tr>'+
                '<td>Cuota extra:</td>'+
                '<td>'+d.cuotaExtra+'</td>'+
            '</tr>'+
            
            '<tr>'+
                '<td>Otros:</td>'+
                '<td>'+d.otros+'</td>'+
            '</tr>'+
            
            '<tr>'+
                '<td>Total Mes:</td>'+
                '<td>'+d.totalMes+'</td>'+
            '</tr>'+
            
            '<tr>'+
                '<td>Pagos:</td>'+
                '<td>'+d.pagos+'</td>'+
            '</tr>'+
            
            '<tr>'+
                '<td>Saldo:</td>'+
                '<td>'+d.saldo+'</td>'+
            '</tr>'+
        '</table>';
    }
//--------------------------End paint table

    //send data to PHP
    function senDataPhp(dataFormatExcel, totalesCtrl){
      var mesReporte	= $('#month').val();
      var anioReporte	= $('#year').val();
      dataSend = {"dataFormatExcel":dataFormatExcel, "totalesCtrl": totalesCtrl,
                  "mesReporte": mesReporte, "anioReporte": anioReporte };
      var request = $.ajax({
          type: "POST",
          url		: "../phpCode/loadDataFile.php",
          data	: dataSend,
          dataType: "json"
        });
      request.done(function(response){
          if(response.success){
            $( "#formFile" ).hide();
            //console.log(response);
            console.log(dataFormatExcel);
            paintTable(dataFormatExcel);
          }else{
                   	
            // notif({
            //   msg     : "Error al cargar el archivo",
            //   type    : "warning",
            //   multiline: true,
            //   position: "right"
            // });
            alert("Error al cargar el archivo por favor siga el formato de ejemplo");

            
          }
          
      });
      request.fail(function(jqXHR, textStatus){
      });
  }


  //look for the data according to the month and year
  function dataSearch(){
    var mesReporte	= $('#month').val();
    var anioReporte	= $('#year').val();
    dataSend = {"mesReporte": mesReporte, "anioReporte": anioReporte };
    var request = $.ajax({
        type: "POST",
        url		: "../phpCode/searchRecordsMonth.php",
        data	: dataSend,
        dataType: "json"
      });
      var dataTable  = [];
    request.done(function(response){
      console.log(response['data']);
      console.log(response['data'][0]);
        if(response.success){
          $( "#formFile" ).hide();
          var obj = JSON.parse(response['data']);
          paintTable(obj);
        }else{
          alert("Error al mostrar los datos");
        }
        
    });
    request.fail(function(jqXHR, textStatus){
    });

  }


});