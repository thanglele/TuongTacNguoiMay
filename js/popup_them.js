document.querySelector(".bieu-mau").onsubmit = function (e) {
  e.preventDefault();

  const ten = document.getElementById("ten-san-pham").value.trim();
  const gia = document.getElementById("gia-ban").value;
  const danhMuc = document.getElementById("danh-muc").value;
  const soLuong = document.getElementById("so-luong").value;
  const moTa = document.getElementById("mo-ta").value;

//   // Kiểm tra các trường bắt buộc
//   if (!ten || !gia || !danhMuc || !soLuong || !moTa) {
//     alert("Vui lòng nhập đầy đủ thông tin.");
//     return;
//   }

  // Đóng popup thêm
  document.getElementById("popup-container").innerHTML = "";

  // Hiển thị thông báo thành công
  fetch("../Composite/Tb-QLSP/Themspthanhcong.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("popup-container").innerHTML = html;

      
      setTimeout(() => {
        document.getElementById("popup-container").innerHTML = "";
        document.body.classList.remove("no-scroll");
      }, 2000);
    });
};
