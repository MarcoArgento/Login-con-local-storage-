let btnAcc = document.getElementById("login");
let inputs = document.getElementsByClassName("inputs");
let btns = document.getElementsByClassName("btns");
let aut = document.getElementById("aut");
let emails = document.getElementById("emails");
let pssw = document.getElementById("pssw");
let benv = document.getElementById("benv");
let avv = document.getElementById("avv");

window.onload = function () {
  if (!localStorage.loggato || localStorage.loggato == "false") {
    aut.style.visibility = "visible";
    benv.style.visibility = "hidden";
  } else {
    aut.style.visibility = "hidden";
    benv.style.visibility = "visible";
  }
};

function mostraNascondi() {
  if (this.id == "login") {
    aut.style.visibility = "hidden";
    benv.style.visibility = "visible";
    localStorage.loggato = "true";
  } else {
    aut.style.visibility = "visible";
    benv.style.visibility = "hidden";
    localStorage.loggato = "false";
  }
  emails.innerHTML = "";
  pssw.value = "";
  btnAcc.disabled = true;
}

for (let i = 0; i < btns.length; i++)
  btns[i].addEventListener("click", mostraNascondi);

function disAbi() {
  let x = /\w+@\w+\.\w{2,4}/i;
  if (x.test(emails.innerHTML) == true) {
    if (pssw.value != "") btnAcc.disabled = false;
    else btnAcc.disabled = true;
    avv.innerHTML = "";
  } else avv.innerHTML = "Inserisci un indirizzo email valido!";
}

for (let i = 0; i < inputs.length; i++)
  inputs[i].addEventListener("keyup", disAbi);

emails.addEventListener("blur", disAbi);

/*function controllo() {
  if (typeof Storage !== "undefined") {
    alert("Supportato");
  } else {
    alert("Non supportato");
  }
}

controllo();*/

//localStorage.removeItem("loggato");
