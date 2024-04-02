const btn = document.getElementById("btn");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

function calculator() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  let res;
  if (operation.value === "add") {
    res = num1 + num2;
  } else if (operation.value === "sub") {
    res = num1 - num2;
  }

  result.textContent = `Result: ${res}`;
}
console.log(operation);
calculator();
btn.addEventListener("click", calculator); //number を入れる
//Operation を選択して、プラスかマイナスが選ぶ
//ボタンを押せば、結果が出てくる。

//btnをclickすれば、答えが出る。AddventListenerを使う。
//
