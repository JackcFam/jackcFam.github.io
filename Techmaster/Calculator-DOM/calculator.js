var operation = document.getElementById("answer");
var content_operation = document.getElementById("operation_content");

function display(button) {
  var flag = true;
  if (content_operation.innerHTML !== "<br>") {
    if (
      button.value !== " + " &&
      button.value !== " - " &&
      button.value !== " x " &&
      button.value !== " ÷ " &&
      button.value !== "^2 " &&
      button.value !== "1/x " &&
      button.value !== "% "
    ) {
      del();
    }
  }
  if (button.value === ")") {
    if (count(operation.value, "(") === count(operation.value, ")")) {
      alert("Bạn chưa có mở ngoặc tương ứng!");
      flag = false;
    }
  }
  if (flag === true) operation.value += button.value;
}

function del() {
  operation.value = "";
  content_operation.innerHTML = "<br>";
}

function calculate() {
  try {
    var diff = count(operation.value, "(") - count(operation.value, ")");
    for (var i = 0; i < diff; i++) {
      operation.value += ")";
    }
    var tmp = operation.value;
    tmp = tmp.replace(/ x /g, " * ");
    tmp = tmp.replace(/ ÷ /g, " / ");
    tmp = tmp.replace(/ % /g, "/100");
    tmp = tmp.replace(/√\(/g, "Math.sqrt(");
    tmp = tmp.replace(/log\(/g, "Math.log10(");
    tmp = tinhBinhPhuong(tmp);
    tmp = tinhExp(tmp);
    if (tmp.indexOf("NaN") !== -1) {
      alert("Biểu thức bạn nhập không hợp lệ!");
    } else {
      var result = eval(tmp);
      content_operation.innerText = operation.value + " = ";
      operation.value = result;
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log(tmp);
      alert("Biểu thức không hợp lệ!");
    }
  }
}

function tinhBinhPhuong(str) {
  var begin = 0;
  do {
    var num = "";
    var pos = str.indexOf("^2", begin);
    if (pos !== -1) {
      begin = pos + 1;
      var i = pos - 1;
      for (; i >= 0; i--) {
        if (str[i] === " " || i === 0) break;
      }
      num = str.slice(i, pos);
      var binhphuong = Math.pow(Number(num), 2);
      str = str.replace(num + "^2", binhphuong);
    }
  } while (pos !== -1);
  return str;
}

function tinhExp(str) {
  var begin = 0;
  do {
    var num = "";
    var pos = str.indexOf("e^(", begin);
    if (pos !== -1) {
      begin = pos + 1;
      var i = pos + 3;
      for (; i <= str.length; i++) {
        if (str[i] === ")") break;
      }
      num = str.slice(pos + 3, i);
      var exp = Math.exp(Number(num));
      str = str.replace("e^(" + num + ")", exp);
    }
  } while (pos !== -1);
  return str;
}

function count(str, symbol) {
  var count = 0,
    pos,
    i = 0;
  do {
    pos = str.indexOf(symbol, i);
    if (pos !== -1) {
      count++;
      i = pos + 1;
    }
  } while (pos !== -1);
  return count;
}
