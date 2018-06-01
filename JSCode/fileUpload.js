$(document).ready(function() {
    $( "#divTable" ).hide();
    var data =[

              {
                "id": "1",
                "name": "Tiger Nixon",
                "position": "System Architect",
                "salary": "$320,800",
                "start_date": "2011/04/25",
                "office": "Edinburgh",
                "extn": "5421"
              },
              {
                "id": "2",
                "name": "Garrett Winters",
                "position": "Accountant",
                "salary": "$170,750",
                "start_date": "2011/07/25",
                "office": "Tokyo",
                "extn": "8422"
              },
              {
                "id": "3",
                "name": "Ashton Cox",
                "position": "Junior Technical Author",
                "salary": "$86,000",
                "start_date": "2009/01/12",
                "office": "San Francisco",
                "extn": "1562"
              },
              {
                "id": "4",
                "name": "Cedric Kelly",
                "position": "Senior Javascript Developer",
                "salary": "$433,060",
                "start_date": "2012/03/29",
                "office": "Edinburgh",
                "extn": "6224"
              },
              {
                "id": "5",
                "name": "Airi Satou",
                "position": "Accountant",
                "salary": "$162,700",
                "start_date": "2008/11/28",
                "office": "Tokyo",
                "extn": "5407"
              },
              {
                "id": "6",
                "name": "Brielle Williamson",
                "position": "Integration Specialist",
                "salary": "$372,000",
                "start_date": "2012/12/02",
                "office": "New York",
                "extn": "4804"
              },
              {
                "id": "7",
                "name": "Herrod Chandler",
                "position": "Sales Assistant",
                "salary": "$137,500",
                "start_date": "2012/08/06",
                "office": "San Francisco",
                "extn": "9608"
              },
              {
                "id": "8",
                "name": "Rhona Davidson",
                "position": "Integration Specialist",
                "salary": "$327,900",
                "start_date": "2010/10/14",
                "office": "Tokyo",
                "extn": "6200"
              },
              {
                "id": "9",
                "name": "Colleen Hurst",
                "position": "Javascript Developer",
                "salary": "$205,500",
                "start_date": "2009/09/15",
                "office": "San Francisco",
                "extn": "2360"
              },
              {
                "id": "10",
                "name": "Sonya Frost",
                "position": "Software Engineer",
                "salary": "$103,600",
                "start_date": "2008/12/13",
                "office": "Edinburgh",
                "extn": "1667"
              },
              {
                "id": "11",
                "name": "Jena Gaines",
                "position": "Office Manager",
                "salary": "$90,560",
                "start_date": "2008/12/19",
                "office": "London",
                "extn": "3814"
              },
              {
                "id": "12",
                "name": "Quinn Flynn",
                "position": "Support Lead",
                "salary": "$342,000",
                "start_date": "2013/03/03",
                "office": "Edinburgh",
                "extn": "9497"
              },
              {
                "id": "13",
                "name": "Charde Marshall",
                "position": "Regional Director",
                "salary": "$470,600",
                "start_date": "2008/10/16",
                "office": "San Francisco",
                "extn": "6741"
              },
              {
                "id": "14",
                "name": "Haley Kennedy",
                "position": "Senior Marketing Designer",
                "salary": "$313,500",
                "start_date": "2012/12/18",
                "office": "London",
                "extn": "3597"
              },
              {
                "id": "15",
                "name": "Tatyana Fitzpatrick",
                "position": "Regional Director",
                "salary": "$385,750",
                "start_date": "2010/03/17",
                "office": "London",
                "extn": "1965"
              },
              {
                "id": "16",
                "name": "Michael Silva",
                "position": "Marketing Designer",
                "salary": "$198,500",
                "start_date": "2012/11/27",
                "office": "London",
                "extn": "1581"
              },
              {
                "id": "17",
                "name": "Paul Byrd",
                "position": "Chief Financial Officer (CFO)",
                "salary": "$725,000",
                "start_date": "2010/06/09",
                "office": "New York",
                "extn": "3059"
              },
              {
                "id": "18",
                "name": "Gloria Little",
                "position": "Systems Administrator",
                "salary": "$237,500",
                "start_date": "2009/04/10",
                "office": "New York",
                "extn": "1721"
              },
              {
                "id": "19",
                "name": "Bradley Greer",
                "position": "Software Engineer",
                "salary": "$132,000",
                "start_date": "2012/10/13",
                "office": "London",
                "extn": "2558"
              },
              {
                "id": "20",
                "name": "Dai Rios",
                "position": "Personnel Lead",
                "salary": "$217,500",
                "start_date": "2012/09/26",
                "office": "Edinburgh",
                "extn": "2290"
              },
              {
                "id": "21",
                "name": "Jenette Caldwell",
                "position": "Development Lead",
                "salary": "$345,000",
                "start_date": "2011/09/03",
                "office": "New York",
                "extn": "1937"
              },
              {
                "id": "22",
                "name": "Yuri Berry",
                "position": "Chief Marketing Officer (CMO)",
                "salary": "$675,000",
                "start_date": "2009/06/25",
                "office": "New York",
                "extn": "6154"
              },
              {
                "id": "23",
                "name": "Caesar Vance",
                "position": "Pre-Sales Support",
                "salary": "$106,450",
                "start_date": "2011/12/12",
                "office": "New York",
                "extn": "8330"
              },
              {
                "id": "24",
                "name": "Doris Wilder",
                "position": "Sales Assistant",
                "salary": "$85,600",
                "start_date": "2010/09/20",
                "office": "Sidney",
                "extn": "3023"
              },
              {
                "id": "25",
                "name": "Angelica Ramos",
                "position": "Chief Executive Officer (CEO)",
                "salary": "$1,200,000",
                "start_date": "2009/10/09",
                "office": "London",
                "extn": "5797"
              },
              {
                "id": "26",
                "name": "Gavin Joyce",
                "position": "Developer",
                "salary": "$92,575",
                "start_date": "2010/12/22",
                "office": "Edinburgh",
                "extn": "8822"
              },
              {
                "id": "27",
                "name": "Jennifer Chang",
                "position": "Regional Director",
                "salary": "$357,650",
                "start_date": "2010/11/14",
                "office": "Singapore",
                "extn": "9239"
              },
              {
                "id": "28",
                "name": "Brenden Wagner",
                "position": "Software Engineer",
                "salary": "$206,850",
                "start_date": "2011/06/07",
                "office": "San Francisco",
                "extn": "1314"
              },
              {
                "id": "29",
                "name": "Fiona Green",
                "position": "Chief Operating Officer (COO)",
                "salary": "$850,000",
                "start_date": "2010/03/11",
                "office": "San Francisco",
                "extn": "2947"
              },
              {
                "id": "30",
                "name": "Shou Itou",
                "position": "Regional Marketing",
                "salary": "$163,000",
                "start_date": "2011/08/14",
                "office": "Tokyo",
                "extn": "8899"
              },
              {
                "id": "31",
                "name": "Michelle House",
                "position": "Integration Specialist",
                "salary": "$95,400",
                "start_date": "2011/06/02",
                "office": "Sidney",
                "extn": "2769"
              },
              {
                "id": "32",
                "name": "Suki Burks",
                "position": "Developer",
                "salary": "$114,500",
                "start_date": "2009/10/22",
                "office": "London",
                "extn": "6832"
              },
              {
                "id": "33",
                "name": "Prescott Bartlett",
                "position": "Technical Author",
                "salary": "$145,000",
                "start_date": "2011/05/07",
                "office": "London",
                "extn": "3606"
              },
              {
                "id": "34",
                "name": "Gavin Cortez",
                "position": "Team Leader",
                "salary": "$235,500",
                "start_date": "2008/10/26",
                "office": "San Francisco",
                "extn": "2860"
              },
              {
                "id": "35",
                "name": "Martena Mccray",
                "position": "Post-Sales support",
                "salary": "$324,050",
                "start_date": "2011/03/09",
                "office": "Edinburgh",
                "extn": "8240"
              },
              {
                "id": "36",
                "name": "Unity Butler",
                "position": "Marketing Designer",
                "salary": "$85,675",
                "start_date": "2009/12/09",
                "office": "San Francisco",
                "extn": "5384"
              },
              {
                "id": "37",
                "name": "Howard Hatfield",
                "position": "Office Manager",
                "salary": "$164,500",
                "start_date": "2008/12/16",
                "office": "San Francisco",
                "extn": "7031"
              },
              {
                "id": "38",
                "name": "Hope Fuentes",
                "position": "Secretary",
                "salary": "$109,850",
                "start_date": "2010/02/12",
                "office": "San Francisco",
                "extn": "6318"
              },
              {
                "id": "39",
                "name": "Vivian Harrell",
                "position": "Financial Controller",
                "salary": "$452,500",
                "start_date": "2009/02/14",
                "office": "San Francisco",
                "extn": "9422"
              },
              {
                "id": "40",
                "name": "Timothy Mooney",
                "position": "Office Manager",
                "salary": "$136,200",
                "start_date": "2008/12/11",
                "office": "London",
                "extn": "7580"
              },
              {
                "id": "41",
                "name": "Jackson Bradshaw",
                "position": "Director",
                "salary": "$645,750",
                "start_date": "2008/09/26",
                "office": "New York",
                "extn": "1042"
              },
              {
                "id": "42",
                "name": "Olivia Liang",
                "position": "Support Engineer",
                "salary": "$234,500",
                "start_date": "2011/02/03",
                "office": "Singapore",
                "extn": "2120"
              },
              {
                "id": "43",
                "name": "Bruno Nash",
                "position": "Software Engineer",
                "salary": "$163,500",
                "start_date": "2011/05/03",
                "office": "London",
                "extn": "6222"
              },
              {
                "id": "44",
                "name": "Sakura Yamamoto",
                "position": "Support Engineer",
                "salary": "$139,575",
                "start_date": "2009/08/19",
                "office": "Tokyo",
                "extn": "9383"
              },
              {
                "id": "45",
                "name": "Thor Walton",
                "position": "Developer",
                "salary": "$98,540",
                "start_date": "2013/08/11",
                "office": "New York",
                "extn": "8327"
              },
              {
                "id": "46",
                "name": "Finn Camacho",
                "position": "Support Engineer",
                "salary": "$87,500",
                "start_date": "2009/07/07",
                "office": "San Francisco",
                "extn": "2927"
              },
              {
                "id": "47",
                "name": "Serge Baldwin",
                "position": "Data Coordinator",
                "salary": "$138,575",
                "start_date": "2012/04/09",
                "office": "Singapore",
                "extn": "8352"
              },
              {
                "id": "48",
                "name": "Zenaida Frank",
                "position": "Software Engineer",
                "salary": "$125,250",
                "start_date": "2010/01/04",
                "office": "New York",
                "extn": "7439"
              },
              {
                "id": "49",
                "name": "Zorita Serrano",
                "position": "Software Engineer",
                "salary": "$115,000",
                "start_date": "2012/06/01",
                "office": "San Francisco",
                "extn": "4389"
              },
              {
                "id": "50",
                "name": "Jennifer Acosta",
                "position": "Junior Javascript Developer",
                "salary": "$75,650",
                "start_date": "2013/02/01",
                "office": "Edinburgh",
                "extn": "3431"
              },
              {
                "id": "51",
                "name": "Cara Stevens",
                "position": "Sales Assistant",
                "salary": "$145,600",
                "start_date": "2011/12/06",
                "office": "New York",
                "extn": "3990"
              },
              {
                "id": "52",
                "name": "Hermione Butler",
                "position": "Regional Director",
                "salary": "$356,250",
                "start_date": "2011/03/21",
                "office": "London",
                "extn": "1016"
              },
              {
                "id": "53",
                "name": "Lael Greer",
                "position": "Systems Administrator",
                "salary": "$103,500",
                "start_date": "2009/02/27",
                "office": "London",
                "extn": "6733"
              },
              {
                "id": "54",
                "name": "Jonas Alexander",
                "position": "Developer",
                "salary": "$86,500",
                "start_date": "2010/07/14",
                "office": "San Francisco",
                "extn": "8196"
              },
              {
                "id": "55",
                "name": "Shad Decker",
                "position": "Regional Director",
                "salary": "$183,000",
                "start_date": "2008/11/13",
                "office": "Edinburgh",
                "extn": "6373"
              },
              {
                "id": "56",
                "name": "Michael Bruce",
                "position": "Javascript Developer",
                "salary": "$183,000",
                "start_date": "2011/06/27",
                "office": "Singapore",
                "extn": "5384"
              },
              {
                "id": "57",
                "name": "Donna Snider",
                "position": "Customer Support",
                "salary": "$112,000",
                "start_date": "2011/01/25",
                "office": "New York",
                "extn": "4226"
              }
            
          
    ];
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
        paintTable(data);
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
      alert (mesReporte);
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
            console.log(response);
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



});