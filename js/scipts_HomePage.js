fetch('../Composite/header.html').then(response => response.text()).then(data => {document.getElementById('header').innerHTML = data;});
fetch('../Composite/footer.html').then(response => response.text()).then(data => {document.getElementById('footer').innerHTML = data;});

document.body.addEventListener('click', function (e) {
  const target = e.target.closest('#wallet-icon');
  if (target) {
    window.location.href = '/Composite/viDienTu/index.html';
  }
});
