export async function buscarConselho() {
    const resposta = await fetch('https://api.adviceslip.com/advice', {
        cache: "no-store"})
    const dados = await resposta.json()
    return dados.slip.advice

}
