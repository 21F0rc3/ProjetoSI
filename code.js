function printUserInput() {
    var x=document.getElementById("userInput").value;


    alert(x.toUpperCase());
}

function changeColor() {
  if(document.body.style.backgroundColor=="black") {
    document.body.style.backgroundColor="white";
  }else {
    document.body.style.backgroundColor="black";
  }
}

function multiModal() {
  var num1=document.getElementById("form1").value;
  var num2=document.getElementById("form2").value;
  if(num1 < 0) {
    num1 *= -1;
  }
  if(num2 < 0) {
    num2 *= -1;
  }
  alert(num1*num2);
}
