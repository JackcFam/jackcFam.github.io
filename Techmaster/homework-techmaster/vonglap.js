function repeat(number) {
  var str = "";
  for (i = 0; i < 9; i++) {
    str += number + "-";
  }
  return (str += number);
}
