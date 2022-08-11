// JavaScript Document
function modificaContenidoPDF()
{
    var fila="<tr><td>pasa html a pdf</td><td>https://www.baulphp.com/convertir-html-a-pdf-usando-javascript</td></tr>";
    $("#idTabla").append(fila);
}

$( document ).ready(function() {
    alert( "ready!" );
    var obj_jsPDF = new jsPDF();
    modificaContenidoPDF();
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
});