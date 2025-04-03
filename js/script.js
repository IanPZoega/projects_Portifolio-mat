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

document.addEventListener("click", (event) => {
    const selectWrapper = selectInput.closest(".custom-select");

    if (!selectWrapper || !selectWrapper.contains(event.target)) {
        optionsList.style.display = "none";
    }
});

// Fechar lista ao clicar fora
// document.onclick = (event) => {
//     if (!selectInput.closest(".custom-select").contains(event.target)) {
//         optionsList.style.display = "none";
//     }
// };     

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const selectInput = document.querySelector(".select-input");
    const optionsList = document.querySelector(".options-list");
    const contentDiv = document.querySelector(".content");
    const iframe = document.querySelector("iframe");

    // Mapeia cada opção para sua página correspondente
    const pageMap = {
        "op1": "html/pag1.html",
        "op2": "html/pag2.html",
        "op3": "html/pag3.html",
        "op4": "html/pag4.html",
        "op5": "html/pag5.html",
        "op6": "html/pag6.html"
    };

    const contentMap = {
        "op1": "<p>Funções exponenciais</p>",
        "op2": "<p>Funções logarítmas</p>",
        "op3": "<p>Logarítmo</p>",
        "op4": "<p>Sistemas de equações lineares</p>",
        "op5": "<p>Conceito de matriz</p>",
        "op6": "<p>Operações com matrizes</p>"
    };

    // Manipula a seleção de uma opção
    optionsList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const selectedText = event.target.textContent;
            const selectedValue = event.target.getAttribute("data-value");

            // Atualiza o input com o nome da opção escolhida
            selectInput.value = selectedText;

            // Atualiza o conteúdo da div com o texto correspondente
            contentDiv.innerHTML = contentMap[selectedValue];

            // Muda o iframe para a página correspondente
            iframe.src = pageMap[selectedValue];
        }
    });
});