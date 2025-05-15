function doar() {
    alert("Obrigado pelo seu apoio! Em breve entraremos em contato.");
}

document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    this.reset();
});
