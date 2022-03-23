/* CON JAVASCRIPT */

/*document.querySelector('.images_nav2').addEventListener('click',()=>{document.querySelector('.list_nav').classList.toggle('mostrar')})*/

/* CON JQUERY */

$('.images_nav2').bind('click',()=>{$('.list_nav').toggleClass('mostrar');})

/*Scroll Menu de Navegacion*/
var alto = window.screen.height;
console.log(alto);
if(alto > 800){
    
    $('#inicio').bind('click',()=>{ window.scroll({top:0,behavior:'smooth'});})
    $('#sobre').bind('click',()=>{ window.scroll({top:1000,behavior:'smooth'})})
    $('#tecnologias').bind('click',()=>{ window.scroll({top:2000,behavior:'smooth'})})
    $('#contacto').bind('click',()=>{ window.scroll({top:2500,behavior:'smooth'})})
}

if(alto < 800){
            
    $('#inicio').bind('click',()=>{ window.scroll({top:0,behavior:'smooth'});})
    $('#sobre').bind('click',()=>{ window.scroll({top:740,behavior:'smooth'})})
    $('#tecnologias').bind('click',()=>{ window.scroll({top:1400,behavior:'smooth'})})
    $('#contacto').bind('click',()=>{ window.scroll({top:3000,behavior:'smooth'})})
}





/* NABRIGUS DEVELOPER */