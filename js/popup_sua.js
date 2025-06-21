function openPopup(id) {
  const sp = {
    MSP1: {
      id: "MSP1",
      ten: "Gạo Bắc Hương",
      gia: 120000,
      danhMuc: "gao",
      tonKho: 50,
      moTa: "Gạo ngon"
    }
  }[id];

  if (!sp) return alert("Không tìm thấy sản phẩm");

  
  document.getElementById("ma-san-pham").value = sp.id;
  document.getElementById("ten-san-pham").value = sp.ten;
  document.getElementById("gia-ban").value = sp.gia;
  document.getElementById("danh-muc").value = sp.danhMuc;
  document.getElementById("so-luong").value = sp.tonKho;
  document.getElementById("mo-ta").value = sp.moTa;

  
  document.getElementById("popup-sua").style.display = "flex";

  
  document.querySelector(".nut-huy").onclick = () => {
    document.getElementById("popup-container").innerHTML = "";
  };

  // Gắn sự kiện Submit form
  document.querySelector(".bieu-mau").onsubmit = function (e) {
    e.preventDefault();

    const data = {
      id: sp.id,
      ten: document.getElementById("ten-san-pham").value,
      gia: document.getElementById("gia-ban").value,
      danhMuc: document.getElementById("danh-muc").value,
      tonKho: document.getElementById("so-luong").value,
      moTa: document.getElementById("mo-ta").value
    };

    console.log("Dữ liệu cập nhật:", data);
    document.getElementById("popup-container").innerHTML = "";
  };
}
