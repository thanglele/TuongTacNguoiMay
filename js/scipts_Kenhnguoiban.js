fetch('../Composite//KenhNguoiban/header_Kenhnguoiban.html').then(response => response.text()).then(data => {document.getElementById('header').innerHTML = data;});
fetch('../Composite/footer.html').then(response => response.text()).then(data => {document.getElementById('footer').innerHTML = data;});
fetch('../Composite/KenhNguoiban/Bang.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('bang-san-pham').innerHTML = data;
  });