var muestra = 1;


function showResponseOne() {
  if (muestra == 1) {
    document.getElementById("response1").style.height = "10px";
    document.getElementById("response1").innerHTML = "5 members";
    muestra = muestra + 1;
  } else {
    document.getElementById("response1").style.height = "0px";
    document.getElementById("response1").innerHTML = "";
    muestra = 1;
  }
}

function showResponseTwo() {
  if (muestra == 1) {
    document.getElementById("response2").style.height = "10px";
    document.getElementById("response2").innerHTML = "10 mb!";
    muestra = muestra + 1;
  } else {
    document.getElementById("response2").style.height = "0px";
    document.getElementById("response2").innerHTML = "";
    muestra = 1;
  }
}

function showResponseTree() {
  if (muestra == 1) {
    document.getElementById("response3").style.height = "10px";
    document.getElementById("response3").innerHTML = "Yes";
    muestra = muestra + 1;
  } else {
    document.getElementById("response3").style.height = "0px";
    document.getElementById("response3").innerHTML = "";
    muestra = 1;
  }
}

function showResponseFour() {
  if (muestra == 1) {
    document.getElementById("response4").style.height = "10px";
    document.getElementById("response4").innerHTML = "yes. you can!";
    muestra = muestra + 1;
  } else {
    document.getElementById("response4").style.height = "0px";
    document.getElementById("response4").innerHTML = "";
    muestra = 1;
  }
}

function showResponseFive() {
  if (muestra == 1) {
    document.getElementById("response5").style.height = "10px";
    document.getElementById("response5").innerHTML = "off course!";
    muestra = muestra + 1;
  } else {
    document.getElementById("response5").style.height = "0px";
    document.getElementById("response5").innerHTML = "";
    muestra = 1;
  }
}