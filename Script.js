let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - R" + item.price;
    cartItems.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function placeOrder() {
  alert(
    "Thank you for shopping with KHOLOS IPHONE’S!\n\n" +
    "Your order has been received.\n" +
    "Delivery: 7–11 working days."
  );
}
