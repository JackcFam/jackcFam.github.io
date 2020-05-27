// var user = {
//     ten: "nhat",
//     canNang: 65,
//     chieuCao: 170,
// }
// for (let x in user) {
//     console.log(user[x]);
// }

// var string = "hello world";
// var y = string.split("");
// console.log(y);

// var y = "10.5 tuoi";
// console.log(parseFloat(y));


//anonymuos function
//tiet kiem bo nho
//
// var x = function(a, b) {
//     console.log(a + b);
// }

// //closure function
// function hello() {
//     var ten = "nhat";
//     return function() {
//         console.log(ten);
//     };
// }
// 
// 
//

var cacMonAn = {
    ten: "thit bo sao",
    nguyenLieu: "thit bo",
    gia: 200
}


// khai bao constructor

function monAn(t, nl, g) {
    this.ten = t;
    this.nguyenLieu = nl;
    this.gia = g;
}

var mon1 = new monAn("rau sao", "rau muong", 900);
var mon2 = new monAn("thit luoc", "thit lon", 900);
console.log(mon2);