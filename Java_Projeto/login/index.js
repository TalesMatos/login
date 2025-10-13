const inputNome = document.getElementById('inputNome');
// Certifique-se de que seu HTML tem <input id="inputPassword">
const inputPassword = document.getElementById('inputPassword'); 
const botao = document.getElementById('btnCapturar');

// 2. Adicionar o "ouvinte" de evento ao botão
botao.addEventListener('click', function() {
    
    // 3. Acessar a propriedade .value de cada input
    const nome = inputNome.value;
    const senha = inputPassword.value; // Senha não precisa de conversão para número (parseInt)

    // --- Verificação ---
    // Verifica se os campos não estão vazios após remover espaços em branco (.trim())
    if (nome.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha seu nome e senha.');
        return; 
    }
    if (senha ==='') {
        alert('A senha não pode estar vazia.');
        return;
    }

    // --- Saída de Dados ---
    console.log('--- Dados Capturados ---');
    console.log('Nome de usuário:', nome);
    console.log('Senha (Em ambiente real, nunca mostre a senha no console!):', senha);

    // Exemplo de uso:
    alert(`Bem-vindo, ${nome}! Sua tentativa de login foi capturada.`);
});