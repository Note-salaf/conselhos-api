export async function buscarConselho() {
    const resposta = await fetch('https://api.adviceslip.com/advice?${Date.now()}`', {
        cache: "no-store"})
    const dados = await resposta.json()
    return dados.slip.advice

}

