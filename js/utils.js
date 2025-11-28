let proximoId = 3;
 
// Utilitário para formatar moeda
const formatarMoeda = (valor) => `R$ ${valor}`;
 
// Gerenciamento do Formulário de Novos Produtos
const formNovo = document.getElementById('novo');
if (formNovo) {
    formNovo.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nomeInput = e.target.nome;
        const precoInput = e.target.preco;
        // Validação
        if (!nomeInput.value.trim() || !precoInput.value.trim()) {
            alert("Por favor, preencha nome e preço.");
            return;
        }
        if (isNaN(parseFloat(precoInput.value))) {
             alert("O preço deve ser um número válido.");
            return;
        }
 
        // Template String para criar o novo card
        const novoProdutoHtml = `
<div class="card" data-id="${proximoId}">
<h2 class="title">${nomeInput.value}</h2>
<p class="price">${formatarMoeda(precoInput.value)}</p>
<div class="actions">
<button onclick="editar(${proximoId})">Editar</button>
<button onclick="excluir(${proximoId})">Excluir</button>
</div>
</div>
        `;
        document.getElementById('produtos').insertAdjacentHTML('beforeend', novoProdutoHtml);
        // Reset do form
        e.target.reset();
        proximoId++;
        console.log("Novo produto adicionado com sucesso.");
    });
}
 
// Gerenciamento do Formulário de Contato
const formFale = document.getElementById('fale');
if (formFale) {
    formFale.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
 
        // Validações básicas
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (!email.includes('@')) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
 
        console.log("Mensagem enviada:", { nome, email, mensagem });
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada (Simulação).`);
        e.target.reset();
    });
}