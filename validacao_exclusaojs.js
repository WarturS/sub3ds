function validarExclusao() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  
  if (login.trim() == '' || senha.trim() == '' || telefone.trim() == '' || email.trim() == '') {
    alert("Por favor, preencha todos os campos.");
    return false;
  }
  
  // Aqui você pode adicionar mais validações se necessário
  
  return true; // Submissão do formulário se todas as validações passarem
}
