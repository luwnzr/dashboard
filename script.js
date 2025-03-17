// Função para simular o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de autenticação
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'gestao_sites.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

// Função para adicionar um site
function adicionarSite() {
    const siteName = prompt('Digite o nome do site:');
    if (siteName) {
        const siteList = document.getElementById('siteList');
        const li = document.createElement('li');
        li.textContent = siteName;
        siteList.appendChild(li);
    }
}

// Função para adicionar um usuário
function adicionarUsuario() {
    const userName = prompt('Digite o nome do usuário:');
    if (userName) {
        const userList = document.getElementById('userList');
        const li = document.createElement('li');
        li.textContent = userName;
        userList.appendChild(li);
    }
}