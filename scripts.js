// Script para abrir e fechar o menu suspenso
document.getElementById('star-btn').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('dropdown-shown');
});

document.getElementById('close-menu').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.remove('dropdown-shown');
});
