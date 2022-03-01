const celula=document.querySelectorAll('.celula');
let vexdojogador= true;


const jogador1="X";
const jogador2="O";


document.addEventListener("click", (event)=>{
    if(event.target.matches(".celula")){
        jogodavelha(event.target.id);

    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    });
function jogodavelha(id){
    const celula=document.getElementById(id);
    turno=vexdojogador?jogador1: jogador2;
    celula.textContent = turno;
    celula.classList.contains(turno) 
    vexdojogador=!vexdojogador;

}

