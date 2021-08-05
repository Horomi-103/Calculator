var list = [];
var lastNum = list.pop();

function press(num) {
	if(typeof lastNum == "number" && typeof num == "number"){
 		var changeNum = String(lastNum);
    changeNum = changeNum + String(num);
    lastNum = Number(changeNum);
    list.pop();
    list.push(lastNum);
    console.log("я в первом if "+lastNum);
    console.log(list);
  }
  else if(typeof num == "string" && typeof lastNum == "number"){
  	lastNum = num;
    list.push(lastNum);
    console.log("я добавил операнд "+num);
    console.log(list);
  }
  else if(typeof num == "number" && typeof lastNum == "string"){
  	lastNum = num;
    list.push(lastNum);
    console.log("я добавил новое число "+num);
    console.log(list);
  }
  else if(typeof num == "string" && typeof lastNum == "string"){
  	lastNum = num;
    list.pop();
    list.push(lastNum);
    console.log("я заменил операнд на "+num);
    console.log(list);
  }
  else if(lastNum == undefined && typeof num == "string"){
  //console.log('тыкнули на операнд')
  }
  else {//если пусто, добавляет число
  	lastNum = num;
    list.push(lastNum);
    console.log("я в последнем else "+lastNum);
    console.log(list);
  }
  var str = String(list);
  str=str.replace(/[\/_,\\]/g, '');
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