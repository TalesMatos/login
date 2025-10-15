const inputNome = document.getElementById('inputNome');
const inputPassword = document.getElementById('inputPassword'); 
const botao = document.getElementById('btnCapturar');
const SenhaErro = document.getElementById('SenhaErro');

// Array para armazenar usuários cadastrados
const usuarios = [];

// Função para validar se o usuário já existe
function usuarioExiste(nome) {
    return usuarios.some(u => u.nome === nome);
}

// Função para cadastrar usuário
function cadastrarUsuario(nome, senha) {
    usuarios.push({ nome, senha });
}

botao.addEventListener('click', function() {
    const nome = inputNome.value;
    const senha = inputPassword.value; 

    SenhaErro.textContent = '';

    if (nome.trim() === '' || senha.trim() === '') {
        if (senha.trim() === '') {
            SenhaErro.textContent = 'A senha não pode estar vazia, Tente novamente.';
        }
        alert('Por favor, preencha seu nome e senha.');
        return; 
    }

    // Validação do usuário
    if (usuarioExiste(nome)) {
        alert('Usuário já cadastrado. Tente outro nome.');
        return;
    }

    cadastrarUsuario(nome, senha);

    console.log('--- Dados Capturados ---');
    console.log('Nome de usuário:', nome);
    console.log('Senha (Em ambiente real, nunca mostre a senha no console!):', senha);

    alert(`Bem-vindo, ${nome}! Sua tentativa de login foi capturada e armazenada.`);
});


inputPassword.addEventListener('input', function() {
    SenhaErro.textContent = '';
});


