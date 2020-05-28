let display_pheptinh = document.getElementById("operation_content");
let result = document.getElementById("answer");
let change = document.getElementsByClassName("opreation-button");
function display(button) {
  display_pheptinh.innerText += button.value;
}

//hàm thêm dấu phẩy vào các số lớn hơn 3 chữ số
function toCommas(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function ketqua() {
  if (display_pheptinh.innerText == "") {
    result.value = "";
  } else {
    let temp = display_pheptinh.innerText;
    temp = temp.replace(/x/g, " * ");
    temp = temp.replace(/%/g, "/100");
    temp = temp.replace(/÷/g, " / ");
    result.value = toCommas(eval(temp));
    display_pheptinh.innerText += " = ";
  }
}

function ac() {
  display_pheptinh.innerText = "";
  result.value = "0";
}
function del() {
  display_pheptinh.innerText = display_pheptinh.innerText.slice(
    0,
    display_pheptinh.innerText.length - 1
  );
}
function backspace() {
  display_pheptinh.innerText = "";
}
function binhphuong() {
  result.value = toCommas(Math.pow(eval(display_pheptinh.innerText), 2));
  display_pheptinh.innerHTML = `${parseInt(
    display_pheptinh.innerText
  )}<sup>${2}</sup> = `;
}

function can() {
  result.value = Math.sqrt(eval(display_pheptinh.innerText));
  display_pheptinh.innerHTML = `&#8730;&#40;${parseInt(
    display_pheptinh.innerText
  )}&#41; = `;
}
function log() {
  result.value = Math.log10(eval(display_pheptinh.innerText));
  display_pheptinh.innerHTML = `log&#40;${parseInt(
    display_pheptinh.innerText
  )}&#41; = `;
}
function tinhGiaiThua(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
function giaithua() {
  result.value = toCommas(tinhGiaiThua(eval(display_pheptinh.innerText)));
  display_pheptinh.innerHTML = `${parseInt(display_pheptinh.innerText)}! = `;
}
function isOperation(opera) {
  if (opera == "+" || opera == "-" || opera == "*" || opera == "/") {
    return true;
  } else return false;
}
