const messages = [
    "Are you sure Wyatt?",
    "Really sure prince??",
    "Are you positive king?",
    "Pookie please...",
    "Just think about it! Do it for Miffy!",
    "If you say no, Mishi and I will be really sad...",
    "I will be very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "This is Mike Ross. Say yes to Andre now.",
    "Hello this is Harvey Specter, the best goddamn closer in the city. Say yes.",
    "I'm Jeff Jr. and I wanna see u again Wyatt!",
    "George Michael here. Say yes.",
    "Fine, I have one last question."
]; 

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
