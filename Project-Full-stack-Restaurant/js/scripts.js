var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Correção aqui
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});


// Validação básica de formulário
document.getElementById('meuForm')?.addEventListener('submit', function (event) {
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pasword').value;

    if (!nome ||  endereco || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});

// Captura e exibe dados da URL em formAction.html
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const endereco =urlParams.get('endereco');
    const email = urlParams.get('email');
    const password = urlParams.get('password');

    if (nome && endereco && email && password) {
        document.getElementById('dados').innerHTML = `
            <p><strong>Nome:<br></strong> ${nome}</p>
            <p><strong>Endereço:<br></strong> ${endereco}</p>
            <p><strong>Email:<br></strong> ${email}</p>
            <p><strong>Senha:<br></strong> ${password}</p>
        `;
    }
});




