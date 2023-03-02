//PRATICA GUIADA -A
//    const idadeDependente = Number(prompt(`Qual a sua idade?`))

// //     if(idadeDependente >=13){
// //         if(idadeDependente < 18){
// //             console.log(`APROVADO`)
// //         }else {
// //             console.log(`Consulte outra opção`)
// //         }}else {
// //             console.log(`Consulte outra opção`)
// //         }
// // // -B
// // if(idadeDependente >= 13 && idadeDependente < 18){
// //     console.log(`APROVADISSIMO`)
// // }else {
// //     console.log(`Consulte outra opção.`)
// // }

// //SEGUNDA PRATICA GUIADA -A (TERNÁRIO)
// idadeDependente === 13 ? console.log(`A idade é 13`) : console.log(`Verificar outra opção.`)

//TERCEIRA PRATICA GUIADA -A (SWITCH CASE)
// const tipoCartao = Number(prompt(`Digite o número:`))

// switch(tipoCartao) {
//     case 1:
//         console.log(`Cartão Fácil`)
//         break
//     case 2:
//         console.log(`Cartão Black`)
//         break
//     case 3:
//         console.log(`Cartão Platinum`)
//         break
//     case 4:
//         console.log(`Cartão Master GOLD`)
//         break
//     default:
//         console.log(`Escolha uma das opções acima!`)
// }
// const nacionalidade1 = prompt(`sua nacionalidade?`)
// switch (nacionalidade1) {
//     case 'brasileira':
//     case 'brasileiro':
//         console.log(`ùhou`)
//         break
//     default:
//         mensagem = `f`
// }

//PRATICA PARA GUARDAR NA CABEÇA
const numero = Number(prompt(`Digite um número:`))
//A
// if (numero % 2 === 0){
//     if (numero % 3 === 0){
//     console.log(`${numero} é divisivel por 2 e por 3`)    
// } else {
//     console.log(`não é divisivel por 2 e 3`)
// }} else {
//     console.log(`não é divisivel por 2 e 3`)
// }

// //B
if (numero % 2 === 0 && numero % 3 === 0) {
         console.log(`${numero} é divisivel por 2 E 3`)
 } 
//else {
//     console.log(`inválido`)
// }

// SEGUNDA PRATICA CABEÇA
//if (numero === 30 ? console.log(`UFA, ACERTEI!`) : console.log(`Não foi dessa vez :(`)){
//}

// TERCEIRA PRATICA CABEÇA

switch(numero){
    case 6:
         console.log(`meia duzia`)
         break
    case 12:
        console.log(`uma duzia`)
        break
    case 18:
         console.log(`maior idade`)
         break
    case 24:
         console.log(`idade qualquer`)
         break
    case 30:
            console.log(`numero qualquer`)
         break
    default:
        console.log(`o numero é maior que 30 ou menor que 6!`)
}