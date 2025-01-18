


$(document).ready(function() {
    // Open Mobile Menu
    $("#mobile-menu-btn").click(function() {
        $("#mobile-menu").addClass("active");
    });

    // Close Mobile Menu
    $(".close-btn").click(function() {
        $("#mobile-menu").removeClass("active");
    });

    // Close Menu when Clicking Outside
    $(document).click(function(event) {
        if (!$(event.target).closest('#mobile-menu, #mobile-menu-btn').length) {
            $("#mobile-menu").removeClass("active");
        }
    });
});


$(document).ready(function () {
    // Function to apply the theme
    function applyTheme(theme) {
        $("body").attr("data-theme", theme);
        localStorage.setItem("theme", theme); // Store user preference
    }

    // Check localStorage for saved theme
    let savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Toggle button event
    $("#toggleButton").click(function () {
        let newTheme = $("body").attr("data-theme") === "light" ? "dark" : "light";
        applyTheme(newTheme);
    });
});


$(document).ready(function () {
    // Check if the user has seen the pop-up before
    if (!localStorage.getItem("popupShown")) {
        $("#popup-overlay, #discount-popup").fadeIn();
    }

    // Close pop-up when clicking the "X" button
    $(".popup-close").click(function () {
        $("#popup-overlay, #discount-popup, #signup-popup").fadeOut();
    });

    // Close pop-up when clicking outside of it
    $("#popup-overlay").click(function () {
        $("#popup-overlay, #discount-popup, #signup-popup").fadeOut();
    });

    // Open second pop-up when "Submit" button is clicked
    $("#submit-email").click(function () {
        var email = $("#email").val().trim();
        if (email !== "") {
            $("#discount-popup").fadeOut();
            $("#signup-popup").fadeIn();
        } else {
            alert("Please enter a valid email.");
        }
    });

    // Complete signup button
    $("#complete-signup").click(function () {
        var name = $("#name").val().trim();
        var emailConfirm = $("#email-confirm").val().trim();
        var password = $("#password").val().trim();

        if (name !== "" && emailConfirm !== "" && password !== "") {
            alert("Thank you for signing up!");
            $("#popup-overlay, #signup-popup").fadeOut();
            localStorage.setItem("popupShown", true);
        } else {
            alert("Please fill in all fields.");
        }
    });
});

$(document).ready(function () {
    var username = localStorage.getItem("username");
    if (username) {
        $("#account-name, #account-name-mobile").text(username);
        $("#account-section, #account-section-mobile").show();
    }

    // Logout functionality
    $("#logout, #logout-mobile").click(function () {
        localStorage.removeItem("username");
        localStorage.removeItem("popupShown");
        location.reload(); // Refresh the page to update the navbar
    });
});



$(document).ready(function () {
    // Check if the user has signed up
    var username = localStorage.getItem("username");
    
    if (username) {
        $("#account-name").text(username);
        $("#account-section").show();
    }

    // Show pop-up for first-time visitors
    if (!localStorage.getItem("popupShown")) {
        $("#popup-overlay, #discount-popup").fadeIn();
    }

    // Close pop-up when clicking the "X" button
    $(".popup-close, #popup-overlay").click(function () {
        $("#popup-overlay, #discount-popup, #signup-popup").fadeOut();
    });

    // Open second pop-up when "Submit" button is clicked
    $("#submit-email").click(function () {
        var email = $("#email").val().trim();
        if (email !== "") {
            $("#discount-popup").fadeOut();
            $("#signup-popup").fadeIn();
        } else {
            alert("Please enter a valid email.");
        }
    });

    // Complete signup button
    $("#complete-signup").click(function () {
    var name = $("#name").val().trim();
    var emailConfirm = $("#email-confirm")[0]; // Get the raw input element
    var password = $("#password").val().trim();

    if (!name || !emailConfirm.checkValidity() || !password) {
        // Trigger HTML5 validation messages
        emailConfirm.reportValidity();
        return;
    }

    alert("Thank you for signing up, " + name + "!");
    localStorage.setItem("popupShown", true);
    localStorage.setItem("username", name);

    // Update the navbar
    $("#account-name").text(name);
    $("#account-section").show();

    $("#popup-overlay, #signup-popup").fadeOut();
});


    // Logout functionality
    $("#logout").click(function () {
    localStorage.removeItem("username");
    localStorage.removeItem("popupShown");  // Remove popupShown so the welcome pop-up appears again
    location.reload();
});
});



// Cart Items

document.addEventListener("DOMContentLoaded", () => {
    const coffeeList = document.getElementById("coffee-list");

    // Coffee items data
    const coffeeItems = [
        {
            name: "Breakfast Blend",
            description: "A well-balanced blend of mild and robust beans, perfect for a morning pick-me-up.",
            taste: "Smooth, well-rounded flavor with hints of nuttiness.",
            brewing: "Drip coffee maker, French Press",
            price: 5.99,
            img: "Images/breakfastBlend.jpg"
        },
        {
            name: "House Blend",
            description: "A roaster's signature blend, often a crowd-pleaser with a balanced flavor profile.",
            taste: "Varies depending on the roaster, but usually smooth and flavorful.",
            brewing: "Versatile, can be brewed in most methods.",
            price: 7.99,
            img: "Images/houseBlend.jpg"
        },
        {
            name: "Colombian Supremo",
            description: "A classic choice known for its smooth, well-rounded flavor and mild acidity.",
            taste: "Chocolate, caramel, and a touch of sweetness.",
            brewing: "Drip coffee maker, French Press, Pour-over",
            price: 6.49,
            img: "Images/ColombianSupremo.jpg"
        },
        {
            name: "Sumatra Mandheling",
            description: "A bold and robust coffee with low acidity and earthy, spicy notes.",
            taste: "Tobacco, leather, and dark chocolate.",
            brewing: "French Press, Espresso, Cold Brew, Siphon",
            price: 9.99,
            img: "Images/SumatraMandheling.jpg"
        }
    ];

    
    // Generate Coffee Cards
    if (coffeeList) {
        coffeeItems.forEach(item => {
            let card = document.createElement("div");
            card.className = "coffee-card";
            card.setAttribute("data-price", item.price);

            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Tasting Notes: </strong>${item.taste}</p>
                <p><strong>Brewing Method: </strong>${item.brewing}</p>
                <p><strong>$${item.price.toFixed(2)}</strong></p>
                <button class="add-to-cart">Add to Cart</button>
            `;

            coffeeList.appendChild(card);
        });
    }

    function showNotification(name) {
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.innerText = `${name} added to cart!`;
        document.body.appendChild(notification);
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.display = "none";
            document.body.removeChild(notification);
        }, 2000);
    }

    // Load Cart Items and Display Them
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartTableBody = document.getElementById("cart-items");
        let totalPriceElement = document.getElementById("total-price");

        if (!cartTableBody || !totalPriceElement) return;

        cartTableBody.innerHTML = ""; // Clear previous items
        let totalPrice = 0;

        if (cart.length === 0) {
            cartTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Your cart is empty.</td></tr>`;
            totalPriceElement.textContent = "$0.00";
            return;
        }

        cart.forEach((item, index) => {
            let row = document.createElement("tr");

            totalPrice += item.price * item.quantity;

            row.innerHTML = `
                <td><img src="${item.img}" alt="${item.name}" width="80"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="delete-btn" onclick="removeItem(${index})">Remove</button></td>
            `;

            cartTableBody.appendChild(row);
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Function to Add Items to Cart
    function addToCart(name, price, img) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Convert price to a number if it's a string
        price = parseFloat(price);

        // Check if item already exists
        let existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart(); // Refresh cart display
        showNotification(name);
    }

     // Function to Change Quantity (+ / -)
     window.changeQuantity = function (index, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart[index]) {
            cart[index].quantity += change;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1); // Remove item if quantity is 0
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart(); // Refresh cart display
        }
    };

    // Function to Remove Item from Cart
    window.removeItem = function (index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart[index]) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart(); // Refresh cart display
        }
    };

    // Event Listeners for Coffee Items
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".coffee-card");
            const name = card.querySelector("h3").innerText;
            const price = parseFloat(card.getAttribute("data-price"));
            const img = card.querySelector("img").src;

            addToCart(name, price, img);
        });
    });

    // Event Listeners for Brewing Equipment
    document.querySelectorAll(".add-to-cart-equipment").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));
            const img = this.closest(".product-card").querySelector("img").src;

            addToCart(name, price, img);
        });
    });

    // Load cart on page load
    loadCart();
});



// Register Form Window 
// Function to open the signup popup
function openSignupPopup() {
    document.getElementById("signup-popup").style.display = "flex";
}

// Function to close the signup popup
function closeSignupPopup() {
    document.getElementById("signup-popup").style.display = "none";
}

// Select all Register buttons
const registerButtons = document.querySelectorAll(".register-btn");

// Add event listener to each Register button
registerButtons.forEach(button => {
    button.addEventListener("click", openSignupPopup);
});

// Event Listener for Close Button
document.querySelector(".popup-close").addEventListener("click", closeSignupPopup);

// Close popup when clicking outside the content area
window.addEventListener("click", function(event) {
    let popup = document.getElementById("signup-popup");
    if (event.target === popup) {
        closeSignupPopup();
    }
});


//Checkout Form

function showCheckoutForm() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        modal.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");

    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevents form from refreshing the page

            // Get form values
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;
            const paymentMethod = document.querySelector("input[name='payment']:checked");

            // Check if payment method is selected
            if (!paymentMethod) {
                alert("Please select a payment method.");
                return;
            }

            // Show order notification
            alert(`Thank you, ${firstName}! Your order has been placed successfully.\nDelivery in 5 days.\nPayment Method: ${paymentMethod.value}`);

            // Close modal
            document.getElementById("checkout-modal").style.display = "none";

            // Clear the form after submission
            orderForm.reset();

            // Clear cart after order is placed
            localStorage.removeItem("cart");
            window.location.reload();
        });
    }
});

