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