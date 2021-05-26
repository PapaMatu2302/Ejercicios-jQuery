$(document).ready(function(){

    $('h1').addClass('BotonColorOff');

$('#cambiacolor').on({
    click: function(){
        const clase = $('h1').attr('class');
        if (clase == "BotonColorOff"){
            $('h1').removeClass('BotonColorOff').addClass('BotonColorOn');
        } else{
            $('h1').removeClass('BotonColorOn').addClass('BotonColorOff');
        }
        
    }

});
})

// const OcultarMostrar = () =>{
//     $('#parrafo').show();
//     if ($(#parrafo').is(":visible")) {
//         $('#parrafo').hide();
//     }else{
//         $('parrafo').show();
//     }
// };




// const agregarSubtitulo = () ->{
//     const subtitulo = document.getElementById("texto").value;
//     const texto = $('#texto').val();

//     $('#tituloAgregado').append(<h2>'${texto}'</h2>);
    
// }

