import { buscarConselho } from "./api.js"
import { btnGeraConselho, mostrarConselho, mostrarErro } from "./ui.js"


btnGeraConselho.addEventListener('click', async () => {
    try {
        const conselho = await buscarConselho()
        mostrarConselho(conselho)
    } catch (erro) {
        mostrarErro("Não foi possível carregar o conselho.")
        console.error(erro)
    }
    
})
