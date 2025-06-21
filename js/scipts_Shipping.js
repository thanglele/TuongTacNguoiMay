fetch("/Composite/Shipping/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
fetch("/Composite/Shipping/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
fetch("/Composite/Shipping/unpaid.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelectorAll("#unpaid").forEach((el) => {
      el.innerHTML = data;
    });
  });
fetch("/Composite/Shipping/paid.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelectorAll("#paid").forEach((el) => {
      el.innerHTML = data;
    });
  });
  
fetch("/Composite/Shipping/action-button.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelectorAll(".action-button").forEach((el) => {
      el.innerHTML = data;
    });
  });

document.getElementById("btn_autoControl").addEventListener("click", () => {
  fetch("/Composite/Shipping/notify200A.html")
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById("notification-item"); // <-- đảm bảo dòng này nằm TRONG `.then`
      container.innerHTML = data;
      container.classList.remove("hidden");

      const closeBtn = container.querySelector("#close-btn");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          container.classList.add("hidden");
          container.innerHTML = "";
        });
      }
    });
});