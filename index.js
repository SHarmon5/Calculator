


var btnOne = document.getElementById("1");
var btnTwo = document.getElementById("2");
var btnThree = document.getElementById("3");
var btnFour = document.getElementById("4");
var btnFive = document.getElementById("5");
var btnSix = document.getElementById("6");
var btnSev = document.getElementById("7");
var btnEight = document.getElementById("8");
var btnNine = document.getElementById("9");
var btnZero = document.getElementById("0");

var outputVal = undefined
var oper1 = undefined
var value1 = ""
var value2 = ""



var btnMult = document.getElementById("*");
var btnSub = document.getElementById("-");
var btnDiv = document.getElementById("/");
var btnAdd = document.getElementById("+");
var btnPer = document.getElementById("%");
var btnEq = document.getElementById("=");
var btnDec = document.getElementById(".");
var btnPl = document.getElementById("+/-");
var btnClear = document.getElementById("C");
var btnOp = document.getElementById("output");



  var operator = document.getElementsByClassName("oper")
  for (i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){
      oper1 = this.innerHTML
    document.getElementById("box2").innerHTML = oper1
  })
}

btnEq.addEventListener("click", function(){
 


  if (oper1 === "+") {
    outputVal = parseInt(value1) + parseInt(value2)
    document.getElementById("box4").innerText = outputVal
    
  } else if (oper1 === "-") {
    outputVal = parseInt(value1) - parseInt(value2)
    document.getElementById("box4").innerText = outputVal
  } else if (oper1 === "*") {
    outputVal = parseInt(value1) * parseInt(value2)
    document.getElementById("box4").innerText = outputVal
  } else if (oper1 === "/") {
    outputVal = parseInt(value1) / parseInt(value2)
    document.getElementById("box4").innerText = outputVal
  }


})





btnOne.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("1").innerHTML;
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("1").innerHTML;
    document.getElementById("box3").innerHTML = value2}
  
  
})

btnTwo.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("2").innerHTML;
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("2").innerHTML;
    document.getElementById("box3").innerHTML = value2}
  
  
})

btnThree.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("3").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("3").innerHTML
    document.getElementById("box3").innerHTML = value2}
  
  
})

btnFour.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("4").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("4").innerHTML
    document.getElementById("box3").innerHTML = value2}
  
  
})

btnFive.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("5").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("5").innerHTML
    document.getElementById("box3").innerHTML = value2}

  
})

btnSix.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("6").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("6").innerHTML
    document.getElementById("box3").innerHTML = value2}
 
})

btnSev.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("7").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("7").innerHTML
    document.getElementById("box3").innerHTML = value2}
 
})




btnEight.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("8").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("8").innerHTML
    document.getElementById("box3").innerHTML = value2}
  
})

btnNine.addEventListener("click", function(){
  if (value1 === "") 
    {value1 = document.getElementById("9").innerHTML
    document.getElementById("box1").innerHTML = value1}
  else  
    {value2 = document.getElementById("9").innerHTML
    document.getElementById("box3").innerHTML = value2}
  
})

