var kichThuoc = document.getElementsByClassName("slide")[0].clientWidth;
var chuyen = 0;
var chuyenSlide = document.getElementsByClassName("transform-slide")[0];
var img = chuyenSlide.getElementsByTagName("img");
var Max = kichThuoc * img.length;
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
