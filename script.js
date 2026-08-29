// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');

    const icon = menuBtn.querySelector('i');

    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});


// Fecha o menu quando clicar em um link

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('active');

        const icon = menuBtn.querySelector('i');

        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');

    });

});


// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');

    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// ==============================
// ANIMAÇÃO AO APARECER NA TELA
// ==============================

const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .timeline-item, .education-item, .info-item'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

animatedElements.forEach(element => {

    element.classList.add('hidden');

    observer.observe(element);

});


// ==============================
// ANIMAÇÃO DAS BARRAS DE SKILLS
// ==============================

const skillSection = document.getElementById('habilidades');

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const progressBars = document.querySelectorAll(
                    '.progress div'
                );

                progressBars.forEach(bar => {

                    const width = bar.style.width;

                    bar.style.width = '0%';

                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);

                });

                skillObserver.unobserve(skillSection);

            }

        });

    },
    {
        threshold: 0.3
    }
);

skillObserver.observe(skillSection);


// ==============================
// ANO AUTOMÁTICO NO FOOTER
// ==============================

const footer = document.querySelector('.footer p');

const currentYear = new Date().getFullYear();

footer.innerHTML =
    `© ${currentYear} Lucas Almeida. Todos os direitos reservados.`;


// ==============================
// ESTILO DINÂMICO DAS ANIMAÇÕES
// ==============================

const style = document.createElement('style');

style.innerHTML = `

    .hidden {
        opacity: 0;
        transform: translateY(30px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .progress div {
        transition: width 1.2s ease;
    }

`;

document.head.appendChild(style);
