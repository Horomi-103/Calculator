var curResult = 0;
var newNum = false;
var pressValue = "";

function press(inpNum) {
    if (newNum) {
        document.getElementById('resOut').value = inpNum;
        newNum = false;

    }
    else {
        if (document.getElementById('resOut').value == "0")
            document.getElementById('resOut').value = inpNum;
        else
            document.getElementById('resOut').value += inpNum;
    }
}

function operation(oper) {
    var result = document.getElementById('resOut').value;
    if (newNum && pressValue != "=") {
        document.getElementById('resOut').value = curResult;
    }
    else {
        newNum = true;
        if ('+' == pressValue) curResult += parseFloat(result);
        else if ('-' == pressValue) curResult -= parseFloat(result);
        else if ('/' == pressValue) curResult /= parseFloat(result);
        else if ('*' == pressValue) curResult *= parseFloat(result);
        else curResult = parseFloat(result);
        
        document.getElementById('resOut').value = curResult;
        pressValue = oper;
    }
}

function clearAll() {
    pressValue = "";
    curResult = 0;
    newNum = true;
    document.getElementById('resOut').value = "0";
}