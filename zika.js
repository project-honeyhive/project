let cart = [];

function show(id) {
    document.querySelectorAll("section").forEach(function(el) {
        el.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
    window.scrollTo(0, 0);
}

function addToCart(name, price) {
    cart.push({ name, price });

    let div = document.createElement("div");
    div.innerHTML = name + " Added to cart!";
    div.style.cssText = `
        position: fixed;
        top: 20px; right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 2000;
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    view();
}
function clearCart() {
    cart = [];
    view();
}

function view() {
    let overlay = document.getElementById("cartOverlay");

    if (overlay.style.display === "flex" && event.target.closest(".cart-overlay") === overlay && !event.target.closest(".cart")) {
        overlay.style.display = "none";
        return;
    }

    let cartBody = document.getElementById("cartBody");
    let total = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = "<p style='color:#8a6a1a;'>Your cart is empty.</p>";
    } else {
        cartBody.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">$${item.price}.00</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `).join("");
        total = cart.reduce((sum, item) => sum + item.price, 0);
    }

    document.getElementById("cartTotal").innerHTML = "$" + total ;
    overlay.style.display = "flex";
}
function closeCart() {
    document.getElementById("cartOverlay").style.display = "none";
}

function checkout() {
 let div = document.createElement("div");
    div.innerHTML = "Purchase successful!";
    div.style.cssText = `
        position: fixed;
        top: 20px; right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 2000;
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
    clearCart();
    closeCart();
}
document.querySelector('.send-a-message form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('popupOverlay').style.display = 'flex';
    document.getElementById('popupOverlay').style.justifyContent = 'center';
    document.getElementById('popupOverlay').style.alignItems = 'center';
    this.reset();
  });

  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
  }

  document.getElementById('popupOverlay').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });


  let mynums = document.querySelectorAll(".num");
    for (let i = 0; i < mynums.length; i++) {
        startCount(mynums[i]);
    }
    
    function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal);
    }