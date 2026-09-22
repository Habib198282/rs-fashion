/* =========================================================
    RS FASHION - MAIN JAVASCRIPT (FIXED)
   ========================================================= */

const STORE = {
    name: "RS Fashion",
    phone: "01865001042",
    whatsapp: "8801865001042",
    address: "6/3 South Bishil, Mirpur 1, Dhaka, Bangladesh"
};

/* =========================================================
    PRODUCT DATA
   ========================================================= */

const products = [
    {
        id: 1,
        name: "Fishcut Petticoat",
        category: "Petticoat",
        price: 150,
        description: "Comfortable and elegant fishcut petticoat.",
        image: "fishcutc.jpg",
        colors: [
            { name: "Red", image: "fishcutr.jpg" },
            { name: "Green", image: "fishcutg.jpg" },
            { name: "Black", image: "fishcutb.jpg" },
            { name: "Maroon", image: "fishcutm.jpg" },
            { name: "White", image: "fishcutw.jpg" },
            { name: "Purple", image: "fishcutp.jpg" },
            { name: "Yellow", image: "fishcuty.jpg" },
            { name: "Navy Blue", image: "fishcutn.jpg" },
            { name: "Golden", image: "fishcutgol.jpg" }
        ]
    },
    {
        id: 2,
        name: "Inner Cap",
        category: "Inner cap",
        price: 50,
        description: "Comfortable everyday inner cap.",
        image: "innercapc.jpg",
        colors: [
            { name: "Red", image: "innercapr.jpg" },
            { name: "Green", image: "innercapg.jpg" },
            { name: "Black", image: "innercapb.jpg" },
            { name: "Maroon", image: "innercapm.jpg" },
            { name: "Purple", image: "innercapp.jpg" },
            { name: "Yellow", image: "innercapy.jpg" },
            { name: "Navy Blue", image: "innercapn.jpg" },
            { name: "Golden", image: "innercapgol.jpg" }
        ]
    }, 
    {
        id: 3,
        name: "Ladies Underwear",
        category: "Inner wear",
        price: 220,
        description: "Comfort-focused everyday ladies underwear.",
        image: "underwearc.jpg",
        options: [
            { pack: "2 Pcs Set", price: 220 },
            { pack: "3 Pcs Set", price: 300 }
        ]
    },
    {
        id: 4,
        name: "Velvet Blouse",
        category: "Blouses",
        price: 220,
        description: "Elegant velvet blouse with a premium look.",
        image: "blousec.jpg",
        colors: [
            { name: "Red", image: "blouser.jpg" },
            { name: "Green", image: "blouseg.jpg" },
            { name: "Black", image: "blouseb.jpg" },
            { name: "Maroon", image: "blousem.jpg" },
            { name: "White", image: "blousew.jpg" },
            { name: "Purple", image: "blousep.jpg" },
            { name: "Yellow", image: "blousey.jpg" },
            { name: "Blue", image: "blousebl.jpg" },
            { name: "Navy Blue", image: "blousenev.jpg" },
            { name: "Golden", image: "blousegol.jpg" }
        ]
    },
    {
        id: 5,
        name: "Tank Top",
        category: "Tops",
        price: 150,
        description: "Simple and stylish tank top for everyday wear.",
        image: "tanktopc.jpg",
        colors: [
            { name: "Black", image: "tanktopb.jpg" },
            { name: "White", image: "tanktopw.jpg" }
        ]
    },
    {
        id: 6,
        name: "Crop Tops- Short Sleves",
        category: "Tops",
        price: 140,
        description: "Trendy crop tops- Short Sleves available in multiple Colours.",
        image: "shortslevc.jpg",
        colors: [
            { name: "Red", image: "shortslevr.jpeg" },
            { name: "Black", image: "shortslevb.jpeg" },
            { name: "Maroon", image: "shortslevm.jpeg" },
            { name: "White", image: "shortslevw.jpeg" },
            { name: "Yellow", image: "shortslevy.jpeg" },
            { name: "Golden", image: "shortslevgol.jpeg" },
            { name: "Blue", image: "shortslevbl.jpeg" },
            { name: "Navy Blue", image: "" },
            { name: "Pink", image: "" },
            { name: "Baby Pink", image: "" } 
        ]
    },
    {
        id: 7,
        name: "Crop Tops- Long Sleves",
        category: "Tops",
        price: 150,
        description: "Trendy crop tops- Short Sleves available in multiple colours.",
        image: "longslevec.jpg",
        colors: [
            { name: "Red", image: "longslever.jpg" },
            { name: "Black", image: "longsleveb.jpeg" },
            { name: "Maroon", image: "longslevem.jpeg" },
            { name: "White", image: "longslevew.jpeg" },
            { name: "Pink", image: "longslevep.jpeg" },
            { name: "Orange", image: "longsleveo.jpeg" },
            { name: "Blue", image: "longslevebl.jpeg" },
            { name: "Royel Blue", image: "longsleverb.jpeg" },
            { name: "Navy Blue", image: "longslevenev.jpeg" },
            { name: "Golden", image: "longslevegol.jpeg" }
        ]
    },
    {
        id: 8,
        name: "Crop Tops- Long Body",
        category: "Tops",
        price: 160,
        description: "Trendy crop tops- Long Body available in multiple Colours.",
        image: "longbodyc.jpg",
        colors: [
            { name: "Red", image: "longbodyr.jpeg" },
            { name: "Black", image: "longbodyb.jpeg" },
            { name: "Maroon", image: "longbodym.jpeg" },
            { name: "White", image: "longbodyw.jpeg" },
            { name: "Pink", image: "longbodyp.jpg" },
            { name: "Yellow", image: "longbodyy.jpeg" },
            { name: "Blue", image: "longbodybl.jpeg" },
            { name: "Navy Blue", image: "longbodynev.jpeg" },
            { name: "Golden", image: "longbodygol.jpg" }
        ]
    },
    {
        id: 9,
        name: "Combo-Crop Tops + Patticoat",
        category: "Combo",
        price: 299,
        description: "Trendy crop tops+ Patticoat available in multiple Colours.",
        image: "comboc.jpg",
        colors: [
            { name: "Red", image: "combor.jpg" },
            { name: "Black", image: "combob.jpg" },
            { name: "Maroon", image: "combom.jpg" },
            { name: "White", image: "combow.jpg" },
            { name: "Purple", image: "combop.jpg" },
            { name: "Yellow", image: "comboy.jpg" },
            { name: "Blue", image: "combobl.jpg" },
            { name: "Navy Blue", image: "combonev.jpg" },
            { name: "Golden", image: "combogol.jpg" }
        ]
    },
    {
        id: 10,
        name: "Tie",
        category: "Tie",
        price: 160,
        description: "Premium Men's Formal Tie Collection.",
        image: "tiec.jpg",
        colors: [
            { name: "Red", image: "tier.jpeg" },
            { name: "Black", image: "tieb.jpeg" },
            { name: "Maroon", image: "tiem.jpeg" },
            { name: "Navy Blue", image: "tienev.jpeg" }
        ]
    }
];

/* =========================================================
    CART DATA & DOM ELEMENTS
========================================================= */

// Purono corrupted localStorage data clean korar jonno valid price check kora hocche
let cart = JSON.parse(localStorage.getItem("rsFashionCart")) || [];
cart = cart.map(item => {
    const originalProduct = products.find(p => p.id === item.id);
    let validPrice = Number(item.price);
    if (isNaN(validPrice) || validPrice <= 0) {
        validPrice = originalProduct ? originalProduct.price : 0;
    }
    return { ...item, price: validPrice };
});

const productGrid = document.getElementById("productGrid");
const noProducts = document.getElementById("noProducts");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartFooter = document.getElementById("cartFooter");
const emptyCart = document.getElementById("emptyCart");
const directCheckoutBtn = document.getElementById("directCheckoutBtn");
const continueShopping = document.getElementById("continueShopping");
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const currentYear = document.getElementById("currentYear");

let currentCategory = "all";

function formatPrice(price) {
    const num = Number(price);
    return `Tk.${isNaN(num) ? 0 : num.toLocaleString("en-BD")}`;
}

/* =========================================================
    RENDER PRODUCTS
========================================================= */

function renderProducts() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

    const filteredProducts = products.filter(product => {
        const matchesCategory =
            currentCategory.toLowerCase() === "all" ||
            product.category.toLowerCase().trim() === currentCategory.toLowerCase().trim();

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    if (!productGrid) return;
    productGrid.innerHTML = "";

    if (filteredProducts.length === 0) {
        if (noProducts) {
            noProducts.style.display = "block";
            noProducts.classList.add("show");
        }
        return;
    } else {
        if (noProducts) {
            noProducts.style.display = "none";
            noProducts.classList.remove("show");
        }
    }

    filteredProducts.forEach(product => {
        let colorsHTML = "";
        if (product.colors && product.colors.length > 0) {
            colorsHTML = `
                <div class="product-colors" style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
                    <span style="font-size: 11px; color: #666;">Color:</span>
                    <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                        ${product.colors.map((c, index) => `
                            <button class="color-swatch ${index === 0 ? 'active' : ''}" 
                                    data-id="${product.id}" 
                                    data-color="${c.name}" 
                                    data-image="${c.image}"
                                    style="padding: 3px 8px; font-size: 10px; border: 1px solid ${index === 0 ? '#333' : '#ccc'}; background: ${index === 0 ? '#333' : '#fff'}; color: ${index === 0 ? '#fff' : '#333'}; border-radius: 4px; cursor: pointer;">
                                ${c.name}
                            </button>
                        `).join("")}
                    </div>
                </div>
            `;
        }

        let optionsHTML = "";
        let displayPrice = product.price ? formatPrice(product.price) : "";
        let initialImage = product.image;

        if (product.options && product.options.length > 0) {
            displayPrice = formatPrice(product.options[0].price);

            optionsHTML = `
                <div class="product-options" style="margin-top: 10px;">
                    <label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">Select Pack:</label>
                    <select class="pack-select" data-id="${product.id}" style="width: 100%; padding: 5px; font-size: 12px; border: 1px solid #ccc; border-radius: 4px;">
                        ${product.options.map((opt, index) => `
                            <option value="${index}">${opt.pack} -${formatPrice(opt.price)}</option>
                        `).join("")}
                    </select>
                </div>
            `;
        }

        const productCard = document.createElement("article");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <img
                    class="product-image"
                    id="product-img-${product.id}"
                    src="${initialImage}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80'"
                >
                <span class="product-category">
                    ${product.category}
                </span>
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${colorsHTML}
                ${optionsHTML}

                <div class="product-meta" style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <span class="product-price" id="product-price-${product.id}" style="font-weight: bold; font-size: 16px;">
                        ${displayPrice}
                    </span>

                    <button
                        class="add-cart-btn"
                        data-id="${product.id}"
                        aria-label="Add ${product.name} to cart"
                    >
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Color swatch event
    document.querySelectorAll(".color-swatch").forEach(swatch => {
        swatch.addEventListener("click", () => {
            const productId = Number(swatch.dataset.id);
            const colorName = swatch.dataset.color;
            const colorImage = swatch.dataset.image;

            const imgElement = document.getElementById(`product-img-${productId}`);
            if (imgElement && colorImage) {
                imgElement.src = colorImage;
            }

            const parentContainer = swatch.parentElement;
            parentContainer.querySelectorAll(".color-swatch").forEach(btn => {
                btn.style.background = "#fff";
                btn.style.color = "#333";
                btn.style.borderColor = "#ccc";
                btn.classList.remove("active");
            });
            swatch.style.background = "#333";
            swatch.style.color = "#fff";
            swatch.style.borderColor = "#333";
            swatch.classList.add("active");

            const card = swatch.closest(".product-card");
            const addBtn = card.querySelector(".add-cart-btn");
            if (addBtn) {
                addBtn.dataset.selectedColor = colorName;
            }
        });
    });

    // Pack dropdown change event
    document.querySelectorAll(".pack-select").forEach(select => {
        select.addEventListener("change", (e) => {
            const productId = Number(select.dataset.id);
            const selectedIndex = Number(e.target.value);
            const product = products.find(p => p.id === productId);

            if (product && product.options && product.options[selectedIndex]) {
                const selectedOpt = product.options[selectedIndex];
                
                const priceElement = document.getElementById(`product-price-${productId}`);
                if (priceElement) priceElement.textContent = formatPrice(selectedOpt.price);

                const card = select.closest(".product-card");
                const addBtn = card.querySelector(".add-cart-btn");
                if (addBtn) {
                    addBtn.dataset.selectedPack = selectedOpt.pack;
                    addBtn.dataset.selectedPrice = selectedOpt.price;
                }
            }
        });
    });

    // Cart button click event
    document.querySelectorAll(".add-cart-btn").forEach(button => {
        button.addEventListener("click", () => {
            const productId = Number(button.dataset.id);
            const product = products.find(p => p.id === productId);
            
            let selectedColor = button.dataset.selectedColor;
            if (!selectedColor && product && product.colors && product.colors.length > 0) {
                selectedColor = product.colors[0].name;
            }

            let selectedPack = null;
            let selectedPrice = product.price;
            let selectedImage = product.image;

            if (product.options && product.options.length > 0) {
                const card = button.closest(".product-card");
                const selectElement = card.querySelector(".pack-select");
                const selectedIndex = selectElement ? Number(selectElement.value) : 0;
                const chosenOpt = product.options[selectedIndex];

                selectedPack = chosenOpt.pack;
                selectedPrice = chosenOpt.price;
            }

            addToCart(productId, selectedColor, selectedPack, selectedPrice, selectedImage);
        });
    });
}

/* =========================================================
    ADD PRODUCT TO CART
========================================================= */

function addToCart(productId, selectedColor, selectedPack, selectedPrice, selectedImage) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    let itemImage = selectedImage || product.image;
    if (selectedColor && product.colors) {
        const foundColorObj = product.colors.find(c => c.name === selectedColor);
        if (foundColorObj && foundColorObj.image) {
            itemImage = foundColorObj.image;
        }
    }

    const finalPrice = selectedPrice !== undefined ? Number(selectedPrice) : Number(product.price);
    const itemName = selectedPack ? `${product.name} (${selectedPack})` : product.name;

    const existingItem = cart.find(item => item.id === productId && item.color === selectedColor && item.pack === selectedPack);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: itemName,
            baseName: product.name,
            price: finalPrice,
            image: itemImage,
            color: selectedColor || null,
            pack: selectedPack || null,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    openCart();
}

function saveCart() {
    localStorage.setItem("rsFashionCart", JSON.stringify(cart));
}

/* =========================================================
    RENDER CART
========================================================= */

function renderCart() {
    if (!cartItems) return;
    cartItems.innerHTML = "";

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);

    if (cartCount) cartCount.textContent = totalQuantity;
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);

    if (cart.length === 0) {
        if (emptyCart) emptyCart.classList.add("show");
        if (cartFooter) cartFooter.style.display = "none";
        return;
    }

    if (emptyCart) emptyCart.classList.remove("show");
    if (cartFooter) cartFooter.style.display = "block";

    cart.forEach(item => {
        const colorDisplay = item.color ? `<span style="font-size: 11px; color: #777; display: block;">Color: ${item.color}</span>` : "";

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">

            <div class="cart-item-info">
                <h4>${item.name}</h4>
                ${colorDisplay}
                <span class="cart-item-price">${formatPrice(item.price)}</span>

                <div class="quantity-control">
                    <button class="quantity-minus" data-id="${item.id}" data-color="${item.color || ''}" data-pack="${item.pack || ''}" aria-label="Decrease quantity">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-plus" data-id="${item.id}" data-color="${item.color || ''}" data-pack="${item.pack || ''}" aria-label="Increase quantity">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <button class="remove-item" data-id="${item.id}" data-color="${item.color || ''}" data-pack="${item.pack || ''}" aria-label="Remove ${item.name}">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        cartItems.appendChild(cartItem);
    });

    document.querySelectorAll(".quantity-plus").forEach(button => {
        button.addEventListener("click", () => {
            updateQuantity(Number(button.dataset.id), button.dataset.color || null, button.dataset.pack || null, 1);
        });
    });

    document.querySelectorAll(".quantity-minus").forEach(button => {
        button.addEventListener("click", () => {
            updateQuantity(Number(button.dataset.id), button.dataset.color || null, button.dataset.pack || null, -1);
        });
    });

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", () => {
            removeFromCart(Number(button.dataset.id), button.dataset.color || null, button.dataset.pack || null);
        });
    });
}

function updateQuantity(productId, color, pack, change) {
    const item = cart.find(cartItem => cartItem.id === productId && cartItem.color === color && cartItem.pack === pack);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => !(cartItem.id === productId && cartItem.color === color && cartItem.pack === pack));
    }

    saveCart();
    renderCart();
}

function removeFromCart(productId, color, pack) {
    cart = cart.filter(item => !(item.id === productId && item.color === color && item.pack === pack));
    saveCart();
    renderCart();
}

function openCart() {
    if (cartDrawer) cartDrawer.classList.add("active");
    if (cartOverlay) cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    if (cartDrawer) cartDrawer.classList.remove("active");
    if (cartOverlay) cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

/* =========================================================
    DIRECT ORDER PLACEMENT TO WHATSAPP
========================================================= */

function placeDirectOrder() {
    if (cart.length === 0) {
        alert("আপনার কার্ট খালি আছে।");
        return;
    }

    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const addressInput = document.getElementById("customerAddress");
    const deliveryLocationSelect = document.getElementById("deliveryLocation");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const deliveryType = deliveryLocationSelect ? deliveryLocationSelect.value : "inside";
    
    const deliveryCharge = deliveryType === "outside" ? 120 : 70;
    const deliveryLocationName = deliveryType === "outside" ? "ঢাকার বাইরে (Tk.120)" : "ঢাকার ভেতরে (Tk.70)";
    const subtotal = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
    const totalAmount = subtotal + deliveryCharge;

    if (!name || !phone || !address) {
        alert("দয়া করে অর্ডার সম্পন্ন করতে আপনার নাম, মোবাইল নম্বর এবং সম্পূর্ণ ঠিকানা লিখুন।");
        if (!name && nameInput) nameInput.focus();
        else if (!phone && phoneInput) phoneInput.focus();
        else if (!address && addressInput) addressInput.focus();
        return;
    }

    // পণ্যের তালিকা তৈরি করা হচ্ছে
    let productDetails = "";
    cart.forEach((item, index) => {
        let colorInfo = item.color ? ` (Color: ${item.color})` : "";
        productDetails += `${index + 1}. ${item.name}${colorInfo} - Qty: ${item.quantity} - Price: ৳${item.price * item.quantity}%0A`;
    });

    // WhatsApp মেসেজ ফরম্যাট
    const whatsappMessage = `*New Order - RS Fashion*%0A%0A` +
        `*Customer Details:*%0A` +
        `- Name: ${name}%0A` +
        `- Phone: ${phone}%0A` +
        `- Address: ${address}%0A` +
        `- Delivery: ${deliveryLocationName}%0A%0A` +
        `*Order Items:*%0A${productDetails}%0A` +
        `*Subtotal:* ৳${subtotal}%0A` +
        `*Delivery Charge:* ৳${deliveryCharge}%0A` +
        `*Total Amount:* ৳${totalAmount}`;

    // শপের WhatsApp নম্বর
    const ownerWhatsAppNumber = STORE.whatsapp;

    // WhatsApp লিংকে রিডাইরেক্ট করা হচ্ছে
    const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappURL, "_blank");

    // অর্ডার সফল হওয়ার পর কার্ট খালি করে দেওয়া
    alert(`ধন্যবাদ ${name}! আপনার অর্ডারটি তৈরি হয়েছে। WhatsApp-এ মেসেজটি পাঠিয়ে অর্ডার কনফার্ম করুন।`);

    cart = [];
    saveCart();
    renderCart();
    closeCartDrawer();

    if (nameInput) nameInput.value = "";
    if (phoneInput) phoneInput.value = "";
    if (addressInput) addressInput.value = "";
}

/* =========================================================
    EVENT LISTENERS & INITIALIZATION
========================================================= */

if (searchInput) {
    searchInput.addEventListener("input", () => {
        renderProducts();
    });
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentCategory = button.dataset.category;
        renderProducts();
    });
});

if (cartButton) cartButton.addEventListener("click", openCart);
if (closeCart) closeCart.addEventListener("click", closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);
if (continueShopping) continueShopping.addEventListener("click", closeCartDrawer);

if (directCheckoutBtn) {
    directCheckoutBtn.addEventListener("click", placeDirectOrder);
}

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("active");
        const icon = menuButton.querySelector("i");
        if (mainNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeCartDrawer();
        if (mainNav) mainNav.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    renderProducts();
    renderCart();
});
