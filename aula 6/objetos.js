// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }

// const pessoa1 = criaPessoa('Augusto', 'Rodrigues', 20);
// const pessoa2 = criaPessoa('Djully', 'Vieira', 17);

const pessoa1 = {
    nome: 'Augusto',
    sobrenome: ' Rodrigues',
    idade: 20,
    fala() {
        console.log(`Olá, meu nome é ${this.nome + this.sobrenome}, e eu tenho ${this.idade} anos de idade`);
    }
};

pessoa1.fala();