const meuEscopo = () => {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = function(e) {
    //     e.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    const recebeEventoForm = (e) => {

        e.preventDefault();

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');

        pessoas.push = {
            nome: nome.value,
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        };
        
        console.log(pessoas);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();