const button1 = document.querySelector("#button1");
let disabled = false;

function random() {
    var n = Math.floor(Math.random()*5);
    switch(n) {
    case 0:
        souyo();
        break;
    case 1:
        souyo2();
        break;
    case 2:
        souyo3();
        break;
    case 3:
        souyo4();
        break;
    case 4:
        souyo5();
        break;
    }
}


function souyo() {
    let saida = document.getElementById("saida");
    var x = document.createElement("img");
  x.setAttribute("src", "gay/our_economy.jpeg");
  x.setAttribute("width", "700");
  x.setAttribute("height", "700");
  x.setAttribute("alt", "Gay Idiots");
  document.body.appendChild(x);

    saida.style.color = 'lightsalmon';
    saida.style.fontSize = "100px";
    saida.innerHTML += document.createElement("h1").innerHTML = "SOUYOOOOOO YEAAAAAAAAH \n";
    button1.disabled= true;
}

function souyo2(){
    let saida = document.getElementById("saida");
    var x = document.createElement("img");
  x.setAttribute("src", "gay/canon.png");
  x.setAttribute("width", "1081");
  x.setAttribute("height", "301");
  x.setAttribute("alt", "Gay Idiot");
  document.body.appendChild(x);

    saida.style.color = 'lightsalmon';
    saida.style.fontSize = "30px";
    saida.innerHTML += document.createElement("h1").innerHTML = " I focused all my attention on the murders to avoid confronting myself.\n So long as I don't try, nothing will change, even if we catch the killer. \n Right now, I'm just plain old me. \n And, I want to do everything I can, with everything I've got! \n ...With you guys. \n I never knew I had such... heat inside... \n Don't make me say stuff like that!!!\n Don't go... \n I like you...";
    button1.disabled= true;
}
function souyo3(){
    let saida = document.getElementById("saida");
    var x = document.createElement("img");
  x.setAttribute("src", "gay/gay_moment.png");
  x.setAttribute("width", "742");
  x.setAttribute("height", "385");
  x.setAttribute("alt", "Gay Idiots");
  document.body.appendChild(x);

    saida.style.color = 'lightsalmon';
    saida.style.fontSize = "30px";
    saida.innerHTML += document.createElement("h1").innerHTML = "AWH H-H-HELL NOO!!! \nis something wrong yosuke? VERY WRONG I DONT KNOW WHAT HAPPENED BUT I FEEL LIKE I JUST WENT SOMEWHERE I CAN NEVER COME BACK FROM.......";
    button1.disabled= true;
}
function souyo4(){
    let saida = document.getElementById("saida");
    var x = document.createElement("img");
  x.setAttribute("src", "gay/hands.jpg");
  x.setAttribute("width", "1034");
  x.setAttribute("height", "590");
  x.setAttribute("alt", "Gay Idiot");
  document.body.appendChild(x);

    saida.style.color = 'lightsalmon';
    saida.style.fontSize = "55px";
    saida.innerHTML += document.createElement("h1").innerHTML = "Well, you do seem to be great with your hands- um- never mind.";
    button1.disabled= true;
}

function souyo5(){
    let saida = document.getElementById("saida");
    var x = document.createElement("img");
  x.setAttribute("src", "gay/special_to_me.png");
  x.setAttribute("width", "1055");
  x.setAttribute("height", "596");
  x.setAttribute("alt", "Gay Idiot");
  document.body.appendChild(x);
    
    saida.style.color = 'lightsalmon';
    saida.style.fontSize = "55px";
    saida.innerHTML += document.createElement("h1").innerHTML = "🏳️‍🌈🤨";
    button1.disabled= true;
}