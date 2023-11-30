let varA = 'A'
let varB = 'B'
let varC = 'C'
//let aux

console.log(varA, varB, varC)

/*lógica antiga
aux = varA
varA = varB
varB = varC
varC = aux
*/

//Lógica moderna
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)