
export const btnGeraConselho = document.querySelector('#btnGeraConselho')
const paragrafoConselho = document.querySelector('#paragrafoConselho')

export function mostrarConselho(texto) {

    paragrafoConselho.classList.remove('erro')
    paragrafoConselho.textContent = texto


}

export function mostrarErro(erro) {

    paragrafoConselho.classList.add('erro')
    paragrafoConselho.textContent = erro
    
}
