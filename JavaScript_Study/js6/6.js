// var x = 'dien thoai iphone';
// var vitri = x.indexOf('iphone');
// if (vitri != -1) {
//   console.log('timthay');
//   var moi = x.replace('iphone', 'bphone');
//   console.log(moi);
// } else {
//   console.log('khong tim thay');
// }

var x = 'iphone, oppo, samsung, xiaomi';
var mang = x.split(',');
console.log(mang);
for (let i = 0; i < mang.length; i++) {
  console.log(mang[i]);
}
