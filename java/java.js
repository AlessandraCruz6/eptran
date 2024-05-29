// Função para verificar as credenciais (exemplo simples)
function verificarCredenciais(usuario, senha) {
    // Verifica se o usuário e a senha são válidos (neste exemplo, usuário: "user", senha: "password")
    return usuario === "user" && senha === "password";
}

// Função para lidar com o evento de clique no botão de login
function fazerLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    
    if (verificarCredenciais(usuario, senha)) {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar o usuário para a próxima tela do aplicativo
    } else {
        alert("Credenciais inválidas. Tente novamente.");
        // Aqui você pode exibir uma mensagem de erro na tela ou lidar com isso de outra forma
    }
}

