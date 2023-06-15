const num: number = 15

/* if(num > 15) {
    console.log('Número maior que 15')
} else if(num === 15) {
    console.log('Número igual a 15')
} else {
    console.log('Número menor que 15')
} */

/* 

//DECISÕES E REPETIÇÕES

const typeUser = {
    admin: 'Seja bem-vindo, admin',
    student: 'Estudante',
    viewer: 'Visitante'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer') */

//ESTRUTURAS DE REPETIÇÃO

/* for(let i = 0; i < 5; i++){
    console.log(i)
}

let n = 2
while(n < 6) {
    console.log(n)
    n++
}
 */

//ARRAY

const array: Array<number> = [1, 2, 3, 4]

array.map(num => {
    if(num > 2 && num % 2 == 0) {
        console.log(num * 2)
    }
}) 

//array.map(num => console.log(num))

/* const buscaNum = array.find(num => num > 2)

console.log(buscaNum) */

/* console.log(stringArray.length)

console.log('array original', array)

array.push(5)
console.log('array com um elemento a mais: ', array)

array.pop()
console.log('array com o último elemento retirado: ', array) */
