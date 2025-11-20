// --- galeria-script.js ---

const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");

// Función para abrir el modal
function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
    // Detiene la propagación del evento para que al hacer clic en la imagen
    // no se cierre el modal inmediatamente (solo si se hiciera clic en el fondo)
    window.event.stopPropagation(); 
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Escuchar clics en el fondo del modal para cerrarlo
modal.addEventListener('click', function(event) {
    // Si el clic es directamente en el div.modal y no en su contenido
    if (event.target === modal) {
        closeModal();
    }
});

// Opcional: Cerrar con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});