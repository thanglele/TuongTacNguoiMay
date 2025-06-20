(function () {
  const icon = document.getElementById("account-icon");
  const menu = document.getElementById("account-menu");
  const sellerChannel = document.getElementById("seller-channel"); 

  if (!icon || !menu) {
    console.warn("Không tìm thấy account-icon hoặc account-menu trong DOM.");
    return;
  }

  
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    const visible = menu.style.display === "block";
    menu.style.display = visible ? "none" : "block";
  });

 
  document.addEventListener("click", () => {
    menu.style.display = "none";
  });


  menu.addEventListener("click", (e) => e.stopPropagation());

  
  if (sellerChannel) {
    sellerChannel.addEventListener("click", () => {
      window.location.href = "../Kenhnguoiban.html"; 
    });
  }
})();
