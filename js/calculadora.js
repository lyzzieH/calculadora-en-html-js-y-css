window.addEventListener('load', ()=>{ /* cuando se carga el documento */ 
    
/**
 * se crean dos varibles constantes donde se guarda los elementos que se necesita
 */
const display = document.querySelector('.calculator-display');
    const kepayButtons = document.getElementsByClassName('Keypad-button');
   
    /**
     * una constante para poder convertir el htmlcollection en un array
     */
    const kepayButtonsArray = Array.from(kepayButtons);
     
    /*iteracion de nuestro nuevo array de botones*/    
        kepayButtonsArray.forEach((button)=>{
            /*a cada boton le agregamos un listener*/
        button.addEventListener('click', ()=>{
          calculadora(button, display);
        })
    })
});
function calculadora(button, display){
    switch(button.innerHTML){
        case'C':
        borrar(display);
         break;

        case'=':
         calcular(display);
         break;
         default:
            actulizar(display, button);
            break;
    }
}
function calcular(display){
    display.innerHTML=eval(display.innerHTML)
}

function actulizar(display, button){
    if(display.innerHTML==0){
        display.innerHTML=''; 
    }
    display.innerHTML+= button.innerHTML;

}
function borrar(display){
    display.innerHTML=0;
    
}
