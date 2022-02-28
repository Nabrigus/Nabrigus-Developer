/* CON JAVASCRIPT */

/*document.querySelector('.images_nav2').addEventListener('click',()=>{document.querySelector('.list_nav').classList.toggle('mostrar')})*/

/* CON JQUERY */

$('.images_nav2').bind('click',()=>{$('.list_nav').toggleClass('mostrar');})

/*Scroll Menu de Navegacion*/
var ancho = window.screen.width;
if(ancho > 800){
    
    $('#inicio').bind('click',()=>{ window.scroll(0,0);})
    $('#sobre').bind('click',()=>{ window.scroll(0,1000)})
    $('#tecnologias').bind('click',()=>{ window.scroll(0,2000)})
    $('#contacto').bind('click',()=>{ window.scroll(0,3000)})
}
else{
            
    $('#inicio').bind('click',()=>{ window.scroll(0,0);})
    $('#sobre').bind('click',()=>{ window.scroll(0,700)})
    $('#tecnologias').bind('click',()=>{ window.scroll(0,1400)})
    $('#contacto').bind('click',()=>{ window.scroll(0,2100)})
}




/* NABRIGUS DEVELOPER */