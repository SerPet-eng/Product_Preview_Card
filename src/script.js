document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("responsiveImage")

  function changeImage() {
    if (window.innerWidth <= 800) {
      image.src = "./images/image-product-mobile.jpg"
    } else {
      image.src = "./images/image-product-desktop.jpg"
    }
  }

  function changeBackgroundColor() {
    const bgColor = document.querySelector("body")

    if (window.innerWidth <= 800) {
      bgColor.style.backgroundColor = "white"
    } else {
      bgColor.style.backgroundColor = "red"
    }
  }

  window.addEventListener("resize", changeImage)
  window.addEventListener("resize", changeBackgroundColor)
})
