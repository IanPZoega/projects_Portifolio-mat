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
        "op2": "<p>Funções logarítmicas</p>",
        "op3": "<p>Logaritmo</p>",
        "op4": "<p>Sistemas de equações lineares</p>",
        "op5": "<p>Conceito de matriz</p>",
        "op6": "<p>Operações com matrizes</p>"
    };

    // Quando o usuário clica no input, exibe a lista de opções
    selectInput.onclick = () => {
        optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
    };

    // Quando o usuário seleciona uma opção
    optionsList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const selectedText = event.target.textContent;
            const selectedValue = event.target.getAttribute("data-value");

            // Se a opção selecionada tiver uma página associada
            if (pageMap[selectedValue]) {
                iframe.src = pageMap[selectedValue]; // Atualiza o iframe
            //     iframe.style.display = "block"; // Mostra o iframe
            //     iframe.style.opacity = "1"; 
            //     iframe.style.visibility = "visible"; 
            }

            // Atualiza o texto do input
            selectInput.value = selectedText;

            // Atualiza o conteúdo da div com o texto correspondente
            if (contentMap[selectedValue]) {
                contentDiv.innerHTML = contentMap[selectedValue];
            }

            // Esconde a lista de opções
            optionsList.style.display = "none";
        }
    });

    // Fecha a lista se clicar fora
    document.addEventListener("click", (event) => {
        if (!selectInput.closest(".select")?.contains(event.target)) {
            optionsList.style.display = "none";
        }
    });
});
