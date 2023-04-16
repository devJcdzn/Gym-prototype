// =====BTN_MENU====== //

const btn = document.querySelector('.btn-menu');

function toggleMenu() {
    const menu = document.querySelector('.header-content');

    menu.classList.add('active');
}

btn.addEventListener('click', toggleMenu);

const close = document.querySelector('.responsive-close');

close.addEventListener('click', () => {
    const menu = document.querySelector('.header-content');

    menu.classList.remove('active');
})

// Check-Scroll//

const interactive = document.querySelector('.interactive-menu');

window.addEventListener('scroll', () =>{
    const { clientHeight, scrollHeight, scrollTop} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight - 35){
        interactive.classList.add('end-page');
    }else{
        interactive.classList.remove('end-page');
    }
})






// ===========Form de Contato========== //

function Send() {
    let nome = document.getElementById('nameid');
    let tel = document.getElementById('foneid');
    let email = document.getElementById('emailid');

    if (nome.value == ""){
        document.getElementById('checkout-name').innerHTML = 'Preencha o nome corretamente.'
        // alert('Preencha corretamente.')
    }if (tel.value == ""){

        document.getElementById('checkout-tel').innerHTML = 'Preencha o telefone corretamente.'
        // alert('Preencha corretamente.')

    }if (email.value == ""){
        
        document.getElementById('checkout-email').innerHTML = 'Preencha o Email corretamente.'
        // alert('Preencha corretamente.')

    }

}

// ====== Scroll-Sections-Effects====== //
ScrollReveal({reset: true});

ScrollReveal().reveal('.home-content', {duration: 1000});
ScrollReveal().reveal('.about-content', {duration: 1000});
ScrollReveal().reveal('.plans-content', {duration: 1000});
ScrollReveal().reveal('.contact-content', {duration: 1000});

// ========== Footer ========== //

const year = document.querySelector('#current-year');

year.innerHTML = new Date().getFullYear();