// --- preguntas-script.js ---

window.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("preguntaForm");
    const status = document.getElementById("envioMensaje");

    function success() {
        form.reset(); // Limpia el formulario
        status.textContent = "¡Respuestas enviadas! Gracias por tus palabras. 💞";
        status.style.display = "block";
        status.style.color = "#007bff";
    }

    function error() {
        status.textContent = "¡Ups! Hubo un error al enviar. Intenta de nuevo.";
        status.style.display = "block";
        status.style.color = "#FF6347";
    }

    // Manejar el envío del formulario usando Fetch API
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página
        
        const data = new FormData(form);
        
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                success();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.textContent = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        error();
                    }
                })
            }
        }).catch(error => {
            error();
        });
    });
});

// --- preguntas-script.js ---

function enviarCorreo() {
    // 1. Obtener los valores de los 6 campos
    const recuerdo = document.getElementById('p1').value;
    const rescatable = document.getElementById('p2').value;
    const guia = document.getElementById('p3').value;
    const futuro = document.getElementById('p4').value;
    const novia = document.getElementById('p5').value;
    const desbloquear = document.getElementById('p6').value;

    // 2. Verificar que todos los campos estén llenos
    if (!recuerdo || !rescatable || !guia || !futuro || !novia || !desbloquear) {
        alert("Por favor, rellena las seis preguntas antes de enviar. 😊");
        return;
    }

    // 3. Construir el cuerpo del mensaje
    const cuerpo = `
    Hola Yami, mi amor. Aquí están mis respuestas a tus preguntas:
    
    ========================================================
    
    1. ¿Cuál es tu recuerdo favorito de los que viste aquí?
    RESPUESTA: ${recuerdo}
    
    --------------------------------------------------------
    
    2. ¿Crees que nada de mi es rescatable?
    RESPUESTA: ${rescatable}
    
    --------------------------------------------------------
    
    3. ¿Podrias ser mi guia para el camino de fallos que estoy llevando?
    RESPUESTA: ${guia}
    
    --------------------------------------------------------
    
    4. ¿Aun quieres un futuro juntos?
    RESPUESTA: ${futuro}
    
    --------------------------------------------------------
    
    5. ¿Quieres ser mi novia :(?
    RESPUESTA: ${novia}
    
    --------------------------------------------------------
    
    6. Quiero contarte cosas,¿Podrias desbloquearme, y poder hablar :(?
    RESPUESTA: ${desbloquear}

    ========================================================
    
    Te amo mucho.
    `;

    // 4. Codificar el cuerpo para la URL
    const asuntoCodificado = encodeURIComponent("❤️ ¡Mis 6 Respuestas para Jesús!");
    const cuerpoCodificado = encodeURIComponent(cuerpo);

    // 5. Construir el enlace mailto:
    const tuCorreo = "jesuscarhuancho23@gmail.com"; // ⬅️ Tu correo de destino
    
    const mailtoLink = `mailto:${tuCorreo}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;
    
    // 6. Abrir la ventana de correo
    window.location.href = mailtoLink;
}