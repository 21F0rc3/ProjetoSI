function printUserInput() {
    var x=document.getElementById("userInput").value;


    alert(x.toUpperCase());
}

function changeColor() {
  if(document.body.style.backgroundColor=="rgb(255, 102, 0)") {
    document.body.style.backgroundColor="#009933";
    document.getElementById("button").style.backgroundColor="rgb(255, 102, 0)";
  }else {
    document.body.style.backgroundColor="rgb(255, 102, 0)";
    document.getElementById("button").style.backgroundColor="#009933";
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

function diviModal() {
  var num1=document.getElementById("form3").value;
  var num2=document.getElementById("form4").value;
  if(num2!=0) {
    alert(num1/num2);
  }else{
    alert("ERRO");
  }
}

function somaModal() {
  var num1=document.getElementById("form5").value;
  var num2=document.getElementById("form6").value;

  alert(num1+num2);
}

function subtModal() {
   var num1=document.getElementById("form7").value;
   var num2=document.getElementById("form8").value;

   alert(num1-num2);
}
