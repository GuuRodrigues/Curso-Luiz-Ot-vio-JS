const alunos = ['Augusto', 'Djully', 'Lara'];

console.log(typeof alunos); //confere o tipo da variável
console.log(alunos instanceof Array); // confere se é um array


console.log(alunos);

alunos.push('Belinha'); //adiciona no final no array
alunos.unshift('Marcone'); // adiciona no início do array

console.log(alunos);
console.log(alunos.slice(0, 3));//pega porções do array

const removidoFinal = alunos.pop(); //remove no final do array

console.log(removidoFinal);
console.log(alunos);

const removidoInicio = alunos.shift(); // remove no início do array

console.log(removidoInicio);
console.log(alunos);


