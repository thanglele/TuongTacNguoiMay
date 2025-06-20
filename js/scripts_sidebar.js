function showContent(sectionId) {
  console.log('Chọn section:', sectionId);
  
  // Xóa class active khỏi tất cả menu items
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.classList.remove('active');
    // Reset inline styles nếu có
    item.style.transform = '';
  });
  
  // Thêm class active cho menu được chọn
  if (sectionId === 'product') {
    menuItems[0].classList.add('active');
    console.log('Menu sản phẩm được chọn - sẽ lồi ra');
  } else if (sectionId === 'invoice') {
    menuItems[1].classList.add('active');
    console.log('Menu hóa đơn được chọn - sẽ lồi ra');
  }
  
  // Ẩn tất cả các content sections
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(section => {
    section.classList.remove('active-section');
  });
  
  // Hiển thị content section được chọn
  setTimeout(() => {
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.classList.add('active-section');
    }
  }, 100);
}

// Đảm bảo DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
  console.log('Sidebar script loaded');
  
  // Kiểm tra xem menu items có tồn tại không
  const menuItems = document.querySelectorAll('.menu-item');
  console.log('Tìm thấy', menuItems.length, 'menu items');
  
  // Thêm event listener để debug
  menuItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      console.log('Menu item', index, 'được click');
      console.log('Classes sau khi click:', this.className);
    });
  });
  
  // Đảm bảo menu đầu tiên active từ đầu
  if (menuItems.length > 0) {
    menuItems[0].classList.add('active');
    console.log('Menu đầu tiên được set active');
  }
});