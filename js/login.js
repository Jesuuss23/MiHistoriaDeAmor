function abrirTarjeta() {
    const tarjetaInicial = document.getElementById('tarjetaInicial');
    const tarjetaLogin = document.getElementById('tarjetaLogin');

    const transicionDiv = document.createElement('div');
    transicionDiv.classList.add('tarjeta-transicion');
    const imagenCartaAbierta = document.createElement('img');
    imagenCartaAbierta.src = '../imagenes/cargando.PNG'; 
    imagenCartaAbierta.alt = 'Carta abierta con corazón';
    imagenCartaAbierta.classList.add('imagen-carta-abierta');
    transicionDiv.appendChild(imagenCartaAbierta);
    document.body.appendChild(transicionDiv);

    tarjetaInicial.style.opacity = '0';
    tarjetaInicial.style.transform = 'scale(0.9)'; 

    setTimeout(() => {
        transicionDiv.classList.add('mostrar');
    }, 300); 

    setTimeout(() => {
        tarjetaInicial.style.display = 'none'; 

        transicionDiv.classList.remove('mostrar'); 
        transicionDiv.style.opacity = '0'; 
        setTimeout(() => {
            transicionDiv.remove(); 
        }, 500);

        tarjetaLogin.style.display = 'block';
        setTimeout(() => {
            tarjetaLogin.style.opacity = '1';
            tarjetaLogin.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100); 
    }, 1000); 

}


document.getElementById('formularioCorazon').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const lugarSeleccionado = document.getElementById('lugar').value;
    const fechaIngresada = document.getElementById('fecha').value.trim();
    const mensajeError = document.getElementById('mensajeError');

    const LUGAR_CORRECTO = 'lugar_correcto'; 
    const FECHA_CORRECTA = '78/11/24'; 

    if (lugarSeleccionado === LUGAR_CORRECTO && fechaIngresada === FECHA_CORRECTA) {
        alert("¡CORRECTO! Has encontrado la llave. Entrando a nuestro espacio...");
        window.location.href = "paginas/home.html"; 
        
    } else {
        mensajeError.textContent = '¡Ups! Uno o ambos datos no coinciden con la llave de mi corazón. Intenta de nuevo.';
        mensajeError.style.display = 'block';
    }

    document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.collapsible-section'); 

    sections.forEach(section => {
        const cover = section.querySelector('.tarjeta-cover');
        
        // ¡PROTECCIÓN CRUCIAL CONTRA EL ERROR DE NULL!
        if (cover) { 
            // 1. Lógica de la imagen (ahora debería funcionar)
            const backgroundImage = cover.dataset.image;
            if (backgroundImage) {
                cover.style.backgroundImage = `url('${backgroundImage}')`; 
            }

            // 2. Lógica del CLIC (ahora debería funcionar sin error)
            cover.addEventListener('click', () => { 
                // Cierre de otras tarjetas y apertura de la actual
                sections.forEach(otherSection => {
                    if (otherSection !== section && otherSection.classList.contains('open')) {
                        otherSection.classList.remove('open');
                    }
                });
                section.classList.add('open');
            });
        }
        // Si 'cover' es null, el script simplemente salta esa sección defectuosa
    });
});
});

