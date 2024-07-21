document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const content = this.querySelector(".card-content");
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                // Hide other card contents
                cards.forEach(otherCard => {
                    otherCard.querySelector(".card-content").style.display = "none";
                });
                content.style.display = "block";
            }
            this.classList.toggle("active");
        });
    });
});