const body = document.querySelector('body');
const changeSection = document.querySelector('.contact-info');
body.addEventListener('click', (e) => {
    if (e.target.classList.contains('contact-btn')) {
        changeSection.style.transition = '1s';
        changeSection.style.transform = 'scale(2)';
        changeSection.style.backgroundColor = 'rgba(250, 143, 100, 0.925)';
        changeSection.style.borderRadius = '1.5rem';
    } else {
        changeSection.style.transform = 'scale(1)';
        changeSection.style.backgroundColor = 'inherit';
        changeSection.style.borderRadius = 'none';
    }
})

const buttonPrint = document.querySelector('.menu__link_print');
buttonPrint.addEventListener('click', () => window.print());