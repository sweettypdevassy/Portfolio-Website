document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    let talkCards = document.querySelectorAll(".talk-card");
    talkCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let educationCards = document.querySelectorAll(".education-card");
    educationCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
    let projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visible");
        }, index * 200);
    });
});


// Toggle visibility of details inside each card
function toggleDetails(card) {
    let details = card.querySelectorAll("p");
    details.forEach(detail => {
        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    });
}
