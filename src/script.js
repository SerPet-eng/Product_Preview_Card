document.addEventListener('DOMContentLoaded', function () {
  const image = document.getElementById('responsiveImage');

  function changeImage() {
    if (window.innerWidth <= 800) {
      image.src = './images/image-product-mobile.jpg';
    } else {
      image.src = './images/image-product-desktop.jpg';
    }
  }

  window.addEventListener('resize', changeImage);
});
