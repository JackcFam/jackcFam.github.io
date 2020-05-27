let operation = document.getElementById("operation_content");
let answer = document.getElementById("answer");
let output;
function ac() {
  operation.innerHTML = "";
  answer.value = "";
}
function backspace() {
  operation.innerHTML = "";
}
function del() {
  output = operation.innerHTML;
  output = output.slice(0, output.length - 1);
  operation.innerHTML = output;
}

function display(button) {
  var test = true;
  operation.innerHTML += button.value;
  var lastChar = operation.innerHTML.charAt(operation.innerHTML.length - 1);
  var charBeforeLastChar = operation.innerHTML.charAt(
    operation.innerHTML.length - 2
  );
  if (test) {
    if (operation.innerHTML == "") {
      output = operation.innerHTML;
      operation.innerHTML = operation.innerHTML.concat("0.");
    } else if (operation.innerHTML == output) {
      operation.innerHTML = operation.innerHTML.concat(".");
    }
  }
}
function giaiThua(n) {
  n = parseInt(operation.innerHTML);
  if (n < 0) {
    alert("nhỏ hơn 0");
  } else {
    var ketQua = 1;
    for (var i = 0; i < n; i++) {
      ketqua = ketqua * (i + 1);
      answer.value = ketqua;
    }
  }
  return answer.value;
}
function ketqua() {
  let temp = operation.innerHTML;
  temp = temp.replace(/ x /g, " * ");
  temp = temp.replace(/ ÷ /g, " / ");
  answer.value = eval(temp);
}
