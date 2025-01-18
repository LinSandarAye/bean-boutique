//Search bar
document.addEventListener("DOMContentLoaded", () => {
    const coffeeList = document.getElementById("coffee-list");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    // Function to show/hide the search box when clicking the search icon
    searchBtn.addEventListener("click", () => {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "inline-block";
            searchInput.focus();
        } else {
            searchInput.style.display = "none";
        }
    });

    // Function to filter coffee items
    searchInput.addEventListener("input", () => {
        const searchQuery = searchInput.value.toLowerCase();
        const coffeeCards = document.querySelectorAll(".coffee-card");

        coffeeCards.forEach(card => {
            const coffeeName = card.querySelector("h3").textContent.toLowerCase();
            if (coffeeName.includes(searchQuery)) {
                card.style.display = "block"; // Show the card if it matches
            } else {
                card.style.display = "none"; // Hide the card if it doesn't match
            }
        });
    });
});


//Subscription Notify
document.querySelectorAll(".subscribe-btn").forEach(button => {
    button.addEventListener("click", function() {
        let plan = this.getAttribute("data-plan"); // Get plan name from button
        document.getElementById("modalText").textContent = `Enter your email to subscribe for ${plan}:`;
        document.getElementById("subscribeModal").style.display = "block";
    });
});

document.getElementById("submitEmail").addEventListener("click", function() {
    let email = document.getElementById("emailInput").value;
    if (email) {
        alert("Thanks for subscribing. Details will be sent to your mail.");
        document.getElementById("subscribeModal").style.display = "none";
    } else {
        alert("Please enter a valid email.");
    }
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("subscribeModal").style.display = "none";
});
