// src/js/main.js

// Importa estilos
import '../scss/styles.scss'

// Importa funcionalidades do Bootstrap (apenas o necessário ou tudo)
import * as bootstrap from 'bootstrap'

// Exemplo de código moderno: Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});