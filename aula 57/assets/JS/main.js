let paragrafos = document.querySelector('.paragrafos');
let p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgorundColorBody = estilosBody.backgroundColor;

console.log(backgorundColorBody);

for (let i of p) {
    i.style.backgroundColor = backgorundColorBody;
    i.style.color = ('White');
}