// Mobile Menu

function toggleMenu() {
    const nav = document.querySelector("nav");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// Product Search and Filter

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

if (searchInput && categoryFilter && priceFilter) {

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);

    function filterProducts() {

        const searchValue =
            searchInput.value.toLowerCase();

        const categoryValue =
            categoryFilter.value;

        const priceValue =
            priceFilter.value;

        const products =
            document.querySelectorAll(".product-card");

        let visibleProducts = 0;

        products.forEach(function(product) {

            const productName =
                product.dataset.name.toLowerCase();

            const productCategory =
                product.dataset.category;

            const productPrice =
                Number(product.dataset.price);

            const searchMatch =
                productName.includes(searchValue);

            const categoryMatch =
                categoryValue === "all" ||
                productCategory === categoryValue;

            let priceMatch = true;

            if (priceValue !== "all") {
                priceMatch =
                    productPrice <= Number(priceValue);
            }

            if (
                searchMatch &&
                categoryMatch &&
                priceMatch
            ) {
                product.style.display = "block";
                visibleProducts++;
            } else {
                product.style.display = "none";
            }

        });

        const noProducts =
            document.getElementById("noProducts");

        if (visibleProducts === 0) {
            noProducts.style.display = "block";
        } else {
            noProducts.style.display = "none";
        }
    }
}


// Contact Form

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {
            alert("Please fill all the fields.");
            return;
        }

        alert(
            "Thank you " +
            name +
            "! Your message has been submitted successfully."
        );

        contactForm.reset();
    });
}