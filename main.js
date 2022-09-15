function toca_som (seletor_audio) {
    const elemento = document.querySelector(seletor_audio);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('deu merda');
    }
}

// document.querySelector('.tecla_pom').onclick = toca_som_pom;



const listadeteclas = document.querySelectorAll('.tecla');




for (let contador = 0; contador < listadeteclas.length; contador++) {
    const teclas = listadeteclas[contador];
    const instrumento = teclas.classList[1];
    const idaudio = `#som_${instrumento}`;

    teclas.onclick = function (){
        toca_som(idaudio);
    }
    
    teclas.onkeydown = function(evento) {
        if (evento.code === 'Space' && evento.code === 'Enter') {
            teclas.classList.add('ativa');
        }
    }
    teclas.onkeyup = function() {
        teclas.classList.remove('ativa');
    }
}