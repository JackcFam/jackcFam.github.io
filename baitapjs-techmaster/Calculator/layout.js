let kichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
let chuyen = 0;
let chuyenSlide = document.getElementsByClassName("transform-slide")[0];
let img = chuyenSlide.getElementsByTagName("img");
let Max = kichThuoc * img.length;
Max -= kichThuoc;
function loadAnh() {
  if (chuyen < Max) {
    chuyen += kichThuoc;
  } else {
    chuyen = 0;
  }
  chuyenSlide.style.marginLeft = `-${chuyen}px`;
}
function back() {
  if (chuyen === 0) {
    chuyen = Max;
  } else {
    chuyen -= kichThuoc;
  }
  chuyenSlide.style.marginLeft = `-${chuyen}px`;
}
setInterval(function () {
  loadAnh();
}, 3000);
