import "./styles.css";


let isDragging = false;
let currentCard = null;
let startX = 0, startY = 0;
let newX = 0, newY = 0;
let initialTop = 0, initialLeft = 0;
const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("mousedown", mouseDown);
}

function mouseDown(event) {
    event.preventDefault();
    isDragging = true;
    currentCard = event.target.closest(".card");
    startX = event.clientX;
    startY = event.clientY;
    const cardComputedStyles = window.getComputedStyle(currentCard);
    initialLeft = parseInt(cardComputedStyles.left);
    initialTop = parseInt(cardComputedStyles.top);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(event) {
    if (!isDragging) return;
    newX = event.clientX - startX;
    newY = event.clientY - startY;
    currentCard.style.top = initialTop + newY + "px";
    currentCard.style.left = initialLeft + newX + "px";


}

function mouseUp(e) {
    isDragging = false;
    currentCard.style.zIndex = "1";
    currentCard = null;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}

const moveableCards = document.querySelectorAll(".card.moveable");
console.log(moveableCards);
moveableCards.forEach(card => {
    card.addEventListener("dblclick", () => {
        console.log("a");
        card.classList.toggle("tapped")
    })
})

function spreadCardsInHand() {
    const cards = document.querySelectorAll(".card.moveable");
    console.log(cards);
    const totalCards = cards.length;
    const spreadwidth = (window.innerWidth * 0.75) / (totalCards)
     let index = 5;
    console.log(spreadwidth);
    cards.forEach( (card) => {
        const xCoord = spreadwidth + index - card.offsetWidth;
        const yCoord = window.innerHeight - card.offsetHeight - 10;
        console.log(xCoord);
        card.style.left = `${xCoord}px`;
        card.style.top = `${yCoord}px`;
        index += 150;
    })
}

window.addEventListener("load", spreadCardsInHand);
