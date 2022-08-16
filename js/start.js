// JavaScript Document
function generaTABLA() {
  var titulo = "<tr><td>NºHistoria</td><td>NOMBRE</td><td>SOLICITADO</td><td>RESULTADO</td></tr>";
  $("#idTabla").append(titulo);
  for (var i = 0; i < 15; i++) {
    var fila = "<tr><td></td><td></td><td></td><td></td></tr>";
    $("#idTabla").append(fila);
  }

}

function generaAutoTableHECES()
{
    var doc = new jsPDF('l')
  doc.autoTable({
    html: '.table',
    tableWidth: 'wrap',
    styles: { cellPadding: 0.5, fontSize: 8 },
  })
      doc.autoTable({
    //startY: finalY + 20,
          theme: 'grid',
    head: [['Ord.','HISTORIA', 'NOMBRE                                                           ', 'SOLICITADO', 'RESULTADOS', 'OBSERVACION']],
    body: [
        ['1','', '', '', '', ''],
        ['2','', '', '', '', ''],
        ['3','', '', '', '', ''],
        ['4','', '', '', '', ''],
        ['5','', '', '', '', ''],
        ['6','', '', '', '', ''],
        ['7','', '', '', '', ''],
        ['8','', '', '', '', ''],
        ['9','', '', '', '', ''],
        ['10','', '', '', '', ''],
        ['11','', '', '', '', ''],
        ['12','', '', '', '', ''],
        ['13','', '', '', '', ''],
        ['14','', '', '', '', ''],
        ['15','', '', '', '', ''],
        ['16','', '', '', '', ''],
        ['17','', '', '', '', ''],
        ['18','', '', '', '', ''],
        ['19','', '', '', '', ''],
        ['20','', '', '', '', ''],
    ],
  })

doc.save('ControlHeces.pdf')
}


function generaAutoTableSENSOR()
{
    var doc = new jsPDF('l')
    doc.text(20,10,' CONTROL DE SENSORES DEL AÑO 2022');
  doc.autoTable({
    html: '.table',
    tableWidth: 'wrap',
    styles: { cellPadding: 0.5, fontSize: 8 },
      
  })
      doc.autoTable({
    //startY: finalY + 20,
          theme: 'grid',
    head: [['Ord.','PACIENTE', 'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']],
    body: [
        ['1', 'ALEX MAYORGA ', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['2', 'CRISTINA JIMENEZ', '', '', '', '', '', '', '', '', '', '', ''],
        ['3', 'ITZIAR SANCHIDRIAN', '', '', '', '', '', '', '', '', '', '', ''],
        ['4', 'LAURA MARTIN', '', '', '', '', '', '', '', '', '', '', ''],
        ['5', 'ALEJANDRO PALOMO', '', '', '', '', '', '', '', '', '', '', ''],
        ['6', 'BORJA MARTIN', '', '', '', '', '', '', '', '', '', '', ''],
        ['7', 'M.PAZ HIDALGO', '', '', '', '', '', '', '', '', '', '', ''],
        ['8', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['9', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['10', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['11', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['12', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['13', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['14', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['15', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['16', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['17', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['18', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['19', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['20', '', '', '', '', '', '', '', '', '', '', '', ''],
    ],
  })

doc.save('ControlSensor.pdf')
}


function generaPDF(valorPulsado) {
  var obj_jsPDF = null;
  if (valorPulsado == 'HECES') obj_jsPDF = new jsPDF('l'); // horizontal
  else
    obj_jsPDF = new jsPDF('p'); //vertical
    obj_jsPDF.autotable();
 
  if (valorPulsado == 'HECES') generaTABLA();
  var elementHTML = $('#contenidoPDF').html();
  var specialElementHandlers = {
    '#elementH': function (element, renderer) {
      return true;
    }
  };
  obj_jsPDF.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
  });

  // Save the PDF
  obj_jsPDF.save('sample-document.pdf');
}


//////////////////////////////////////////////
$(document).ready(function () {

  $("[id^=id_pdf]").click(function () {
    var btn = "#" + this.id;
    var valorPulsado = $(btn).val();
    if (valorPulsado=='HECES') generaAutoTableHECES()
    if (valorPulsado=='SENSOR') generaAutoTableSENSOR()  
      
  })

});
