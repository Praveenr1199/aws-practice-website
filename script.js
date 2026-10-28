const order = [];

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    order.push(button.dataset.item);
    const counts = order.reduce((result, item) => {
      result[item] = (result[item] || 0) + 1;
      return result;
    }, {});
    document.querySelector("#order-message").textContent =
      Object.entries(counts).map(([name, count]) => `${name} × ${count}`).join(", ");
  });
});

document.querySelector("#clear-order").addEventListener("click", () => {
  order.length = 0;
  document.querySelector("#order-message").textContent = "No items selected yet.";
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  document.querySelector("#form-feedback").textContent =
    `Thanks! This is only a demo — no message was sent from ${email}.`;
});

document.querySelector("#year").textContent = new Date().getFullYear();
