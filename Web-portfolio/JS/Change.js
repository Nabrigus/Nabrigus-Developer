/* CON JAVASCRIPT */

/*document.querySelector('.images_nav2').addEventListener('click',()=>{document.querySelector('.list_nav').classList.toggle('mostrar')})*/

/* CON JQUERY */

$('.images_nav2').bind('click',()=>{$('.list_nav').toggleClass('mostrar');})

/*Scroll Menu de Navegacion*/
var ancho = window.screen.width;
console.log(ancho);
if(ancho > 800){
    
    $('#inicio').bind('click',()=>{ window.scroll({top:0,behavior:'smooth'});})
    $('#sobre').bind('click',()=>{ window.scroll({top:1000,behavior:'smooth'})})
    $('#tecnologias').bind('click',()=>{ window.scroll({top:2000,behavior:'smooth'})})
    $('#contacto').bind('click',()=>{ window.scroll({top:2500,behavior:'smooth'})})
}
if(ancho < 800){
            
    $('#inicio').bind('click',()=>{ window.scroll({top:0,behavior:'smooth'});})
    $('#sobre').bind('click',()=>{ window.scroll({top:1000,behavior:'smooth'})})
    $('#tecnologias').bind('click',()=>{ window.scroll({top:2000,behavior:'smooth'})})
    $('#contacto').bind('click',()=>{ window.scroll({top:3000,behavior:'smooth'})})
}




/* NABRIGUS DEVELOPER */