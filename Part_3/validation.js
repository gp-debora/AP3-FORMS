document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const postalCodeInput = document.getElementById("postalCode");
    const cardNumberInput = document.getElementById("cardNumber");
    const cvvInput = document.getElementById("cvv");

    // Função para exibir mensagens de erro
    const showError = (input, message) => {
        input.setCustomValidity(message); // Define a mensagem personalizada
        input.reportValidity(); // Mostra a mensagem personalizada visualmente
    };

    // Validação de email em tempo real
    emailInput.addEventListener("input", () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex padrão para email
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, "Por favor, insira um email válido.");
        } else {
            showError(emailInput, ""); // Remove a mensagem de erro
        }
    });

    // Validação de código postal em tempo real
    postalCodeInput.addEventListener("input", () => {
        const postalCodePattern = /^\d{4}-\d{3}$/; // Regex para código postal
        if (!postalCodePattern.test(postalCodeInput.value)) {
            showError(postalCodeInput, "Formato esperado: DDDD-DDD");
        } else {
            showError(postalCodeInput, "");
        }
    });

    // Validação de número do cartão em tempo real
    cardNumberInput.addEventListener("input", () => {
        if (!/^\d{13,19}$/.test(cardNumberInput.value)) {
            showError(cardNumberInput, "O número do cartão deve ter entre 13 e 19 dígitos.");
        } else {
            showError(cardNumberInput, "");
        }
    });

    // Validação de CVV em tempo real
    cvvInput.addEventListener("input", () => {
        if (!/^\d{3}$/.test(cvvInput.value)) {
            showError(cvvInput, "O CVV deve ter exatamente 3 dígitos.");
        } else {
            showError(cvvInput, "");
        }
    });

    // Evento ao submeter o formulário
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault(); // Evita o envio se o formulário for inválido
            form.classList.add("was-validated"); // Adiciona a classe para estilos
            alert("Por favor, corrija os erros antes de enviar.");
        }
    });

    // Remove a classe "was-validated" para evitar estilo inicial
    form.addEventListener("input", () => {
        form.classList.remove("was-validated");
    });
});
