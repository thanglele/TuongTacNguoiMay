fetch('../Composite//KenhNguoiban/header_Kenhnguoiban.html').then(response => response.text()).then(data => {document.getElementById('header').innerHTML = data;});
fetch('../Composite/footer.html').then(response => response.text()).then(data => {document.getElementById('footer').innerHTML = data;});
document.addEventListener('DOMContentLoaded', function() {
  const duongdanDiv = document.getElementById('duongdan');
  const duongdanContent = `
    <nav class="duongdan">
      <a href="#">Trang chủ</a>
      <span class="duongdan-ky-tu">></span>
      <a href="#">Kênh người bán</a>
      <span class="duongdan-ky-tu">></span>
      <a href="#">Quản lý sản phẩm</a>
    </nav>
  `;
  duongdanDiv.innerHTML = duongdanContent;
});