// Bringing in all the buttons using queryselectorall
const buttons = document.querySelectorAll(".faq-toggle");

// event listener for every button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active')
    })
})