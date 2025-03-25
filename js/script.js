const selectInput = document.querySelector(".select-input");
const optionsList = document.querySelector(".options-list");

// Mostrar ou esconder a lista ao clicar no input
selectInput.onclick = () => {
    optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
};

// Atualizar o input com a opção escolhida
optionsList.onclick = (event) => {
    if (event.target.tagName === "LI") {
        selectInput.value = event.target.textContent;
        optionsList.style.display = "none";
    }
};

// Fechar lista ao clicar fora
document.onclick = (event) => {
    if (!selectInput.closest(".custom-select").contains(event.target)) {
        optionsList.style.display = "none";
    }
};