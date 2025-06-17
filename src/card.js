const moveableCards = document.querySelectorAll(".card.moveable");
moveableCards.forEach(card => {
    card.addEventListener("dblclick", () => {
        console.log("a");
        card.classList.toggle(".tapped")
    })
})
