// const all = document.getElementsByClassName("all");
// const okoMenu = document.getElementsByClassName("okoMenu");
// const ironMenu = document.getElementsByClassName("ironMenu");
// const noodle_tako_gohanMenu = document.getElementsByClassName("noodle_tako_gohanMenu");
// const drinkMenu = document.getElementsByClassName("drinkMenu");

// document.getElementsById("menu1").style.display = "block";
// const menu1 = document.getElementsById("menu1");

// document.getElementsById("menu2").style.display = "block";
// const menu2 = document.getElementsById("menu2");

// document.getElementsById("menu2").style.display = "block";
document.getElementById("menu1").style.display = "block";
document.getElementById("menu2").style.display = "block";
document.getElementById("menu3").style.display = "block";
document.getElementById("menu4").style.display = "block";
// const menu1 = document.getElementById("menu1").style.display = "block";
// const menu2 = document.getElementById("menu2").style.display = "block";
// const menu3 = document.getElementById("menu3").style.display = "block";
// const menu4 = document.getElementById("menu4").style.display = "block";

// menu1.style.display = "block";
// menu2.style.display = "block";
// menu3.style.display = "block";
// menu4.style.display = "block";

const okonomiyaki = document.getElementById('output_oko_csv');
const monjya = document.getElementById('output_monjya_csv');
const teppan = document.getElementById('output_teppan_csv');
const men = document.getElementById('output_men_csv');
const takoyaki = document.getElementById('output_takoyaki_csv');
const gohan = document.getElementById('output_gohan_csv');
const drink = document.getElementById('output_drink_csv');

function clickMenu(num) {
  const menu1 = document.getElementById("menu1");
  const menu2 = document.getElementById("menu2");
  const menu3 = document.getElementById("menu3");
  const menu4 = document.getElementById("menu4");

  if (num == 0) {
    menu1.style.display = "block";
    menu2.style.display = "block";
    menu3.style.display = "block";
    menu4.style.display = "block";
  } else if (num == 1) {
    menu1.style.display = "block";
    menu2.style.display ="none";
    menu3.style.display = "none";
    menu4.style.display = "none";
  } else if (num == 2) {
    menu1.style.display = "none";
    menu2.style.display = "block";
    menu3.style.display = "none";
    menu4.style.display = "none";
  } else if (num == 3) {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "block";
    menu4.style.display = "none";
  } else if (num == 4) {
    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "block";
  }
}

// function clickMenu0(){
//   menu1.style.display="block";
//   menu2.style.display="block";
//   menu3.style.display="block";
//   menu4.style.display="block";  
// }

// function clickMenu1(){
//   menu1.style.display="block";
//   menu2.style.display ="none";
//   menu3.style.display ="none";
//   menu4.style.display ="none";
// }



function getCsvData(dataPath) {
  const request = new XMLHttpRequest();

  request.open("GET", dataPath, true);
  request.send();


  request.addEventListener("load", (event) => {
    const response = event.target.responseText;
    convertArray(response);
    makeTable(dataPath);
  }, false);
};

let dataArray;

function convertArray(data) {
  dataArray = [];
  let dataString = data.split("\n");
  for (let i = 1; i < dataString.length; i++) {
    dataArray[i] = dataString[i].split(',');
  }
};

function makeTable(dataPath) {
  let table = document.createElement("table");

  for (let i = 1; i < dataArray.length; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < dataArray[i].length; j++) {
      let td = document.createElement('td');
      td.textContent = dataArray[i][j];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  if (dataPath == "./okonomiyaki.csv") {
    okonomiyaki.appendChild(table);
  } else if (dataPath == "./monjya.csv") {
    monjya.appendChild(table);
  } else if (dataPath == "./teppan.csv") {
    teppan.appendChild(table);
  } else if (dataPath == "./men.csv") {
    men.appendChild(table);
  } else if (dataPath == "./takoyaki.csv") {
    takoyaki.appendChild(table);
  } else if (dataPath == "./gohan.csv") {
    gohan.appendChild(table);
  } else if (dataPath == "./drink.csv") {
    drink.appendChild(table);
  }
};

getCsvData('./okonomiyaki.csv');
getCsvData('./monjya.csv');
getCsvData('./teppan.csv');
getCsvData('./men.csv');
getCsvData('./takoyaki.csv');
getCsvData('./gohan.csv');
getCsvData('./drink.csv');