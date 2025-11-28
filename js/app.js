// Funcionalidades de Edição e Exclusão (Core)
 
function editar(id) {
    const card = document.querySelector(`.card[data-id='${id}']`);
    if (!card) {
        console.error("Card não encontrado");
        return;
    }
    const tituloAtual = card.querySelector('.title').innerText;
    // Remove "R$ " para pegar apenas o número
    const precoAtual = card.querySelector('.price').innerText.replace('R$ ', '').trim();
    const novoNome = prompt("Digite o novo nome:", tituloAtual);
    if (novoNome === null) return; // Cancelou
 
    const novoPreco = prompt("Digite o novo preço:", precoAtual);
    if (novoPreco === null) return; // Cancelou
    if (isNaN(parseFloat(novoPreco))) {
        alert("Preço inválido. Digite apenas números.");
        return;
    }
    // Atualiza o DOM
    card.querySelector('.title').innerText = novoNome;
    card.querySelector('.price').innerText = `R$ ${novoPreco}`;
    console.log(`Produto ${id} atualizado: ${novoNome} - R$ ${novoPreco}`);
}
 
function excluir(id) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) {
        return;
    }
    const cardParaExcluir = document.querySelector(`.card[data-id='${id}']`);
    if (cardParaExcluir) {
        cardParaExcluir.remove();
        console.log(`Item ${id} removido com sucesso.`);
    } else {
        console.warn(`Item ${id} não encontrado.`);
    }
}