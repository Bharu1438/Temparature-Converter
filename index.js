const input = document.getElementById("ip");
const forcel = document.getElementById("forcel");
const forfor = document.getElementById("forfor");
const result = document.getElementById("result");

let temp;

function convert(){
    temp = Number(input.value);
    if(forcel.checked){
        temp = (((9/5) * temp) + 32);
        result.textContent = temp+ "°F";
    }
    else if(forfor.checked){
        temp = ((temp - 32) * (5/9));
        result.textContent = temp+ "°C";
    }
    else{
        result.textContent = "Please select a input"
    }
}