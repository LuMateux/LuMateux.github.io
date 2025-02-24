const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

// Evento para mover o botão "Não" quando o mouse se aproxima
noBtn.addEventListener("mouseover", () => {
    const newX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const newY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Evento para exibir a mensagem quando o botão "Sim" é clicado
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none"; // Esconde a pergunta
    resultContainer.style.display = "flex"; // Mostra a tela com "Eu te Amo"
});
