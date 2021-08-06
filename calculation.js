var list = [];
var lastNum = list[list.length - 1];

function pressNum(num) {
  if (typeof lastNum == "number") {
    var changeNum = String(lastNum);
    changeNum = changeNum + String(num);
    lastNum = Number(changeNum);
    list.pop();
    list.push(lastNum);
    console.log("я в первом if " + lastNum);
    console.log(list);
  }
  else {
    lastNum = num;
    list.push(lastNum);
    console.log("я в последнем else " + lastNum);
    console.log(list);
  }
  var str = String(list);
  str = str.replace(/[\_,\\]/g, '');
  document.querySelector(".inpPress").innerHTML = str;
}

function pressOper(oper) {
  if (typeof lastNum == "number") {
    lastNum = oper;
    list.push(lastNum);
    console.log("я добавил операнд " + oper);
    console.log(list);
  }
  else {
    lastNum = oper;
    list.pop();
    list.push(lastNum);
    console.log("я заменил операнд на " + oper);
    console.log(list);
  }
  var str = String(list);
  str = str.replace(/[\_,\\]/g, '');
  document.querySelector(".inpPress").innerHTML = str;
}

function calcResult(oper) {
  console.log(list);
}

function clearAll() {
  pressValue = "";
  curResult = 0;
  newNum = true;
  document.getElementById('resOut').value = "0";
  document.querySelector(".inpPress").innerHTML = "";
}

function calcResult() {
  var str = document.querySelector(".inpPress").innerHTML;
  var res = eval(str);
  document.getElementById('resOut').value = res;
}