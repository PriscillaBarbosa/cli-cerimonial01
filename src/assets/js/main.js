// 1. Importa estilos do projeto
import '../scss/styles.scss'

// 2. Importa o CSS do AOS 
import 'aos/dist/aos.css';

// 3. Importa funcionalidades
import * as bootstrap from 'bootstrap';
import AOS from 'aos'; // Importa a biblioteca JS

// 4. Inicia o AOS 
AOS.init({
  duration: 1000,    // Duração de 1 segundo
  easing: 'ease-out', // Começa rápido, termina suave
  once: true,        // Anima só na primeira vez que desce
  offset: 100,       // Dispara um pouco antes de chegar no elemento
});

// 5. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});