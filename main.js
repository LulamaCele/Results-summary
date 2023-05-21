import jsonFile from "./data.json" assert { type: "json" };
console.log(jsonFile);

let btn = document
  .getElementById("btn-continue")
  .addEventListener("click", createReaction);

//creating reaction summary dynamicall and adding data dynamically
function createReaction() {
  let reactionDIV = document.getElementById("reaction");
  const img1 = document.createElement("img");
  img1.src = jsonFile[0].icon;
  reactionDIV.appendChild(img1);

  let pDescrip = document.createElement("p");
  pDescrip.className = "reaction";
  pDescrip.innerHTML = jsonFile[0].category;
  reactionDIV.appendChild(pDescrip);

  let pScore = document.createElement("p");
  let spanScore = document.createElement("span");
  let spanTotal = document.createElement("span");

  spanScore.className = "score";
  spanTotal.className = "full-score";
  spanScore.innerHTML = jsonFile[0].score;
  spanTotal.innerHTML = " /100";
  pScore.appendChild(spanScore);
  pScore.appendChild(spanTotal);
  reactionDIV.appendChild(pScore);

  creatMemory();
}

function creatMemory() {
  let memoryDIV = document.getElementById("memory");
  const img2 = document.createElement("img");
  img2.src = jsonFile[1].icon;
  memoryDIV.appendChild(img2);

  let pDescrip2 = document.createElement("p");
  pDescrip2.className = "memory";
  pDescrip2.innerHTML = jsonFile[1].category;
  memoryDIV.appendChild(pDescrip2);

  let pScore2 = document.createElement("p");
  let spanScore2 = document.createElement("span");
  let spanTotal2 = document.createElement("span");

  spanScore2.className = "score";
  spanTotal2.className = "full-score";
  spanScore2.innerHTML = jsonFile[1].score;
  spanTotal2.innerHTML = " /100";
  pScore2.appendChild(spanScore2);
  pScore2.appendChild(spanTotal2);
  memoryDIV.appendChild(pScore2);

  createVerbal();
}

function createVerbal(){
  let verbalDIV = document.getElementById("verbal");
  const img3 = document.createElement("img");
  img3.src = jsonFile[2].icon;
  verbalDIV.appendChild(img3);

  let pDescrip3 = document.createElement("p");
  pDescrip3.className = "verbal";
  pDescrip3.innerHTML = jsonFile[2].category;
  verbalDIV.appendChild(pDescrip3);

  let pScore3 = document.createElement("p");
  let spanScore3 = document.createElement("span");
  let spanTotal3 = document.createElement("span");

  spanScore3.className = "score";
  spanTotal3.className = "full-score";
  spanScore3.innerHTML = jsonFile[2].score;
  spanTotal3.innerHTML = " /100";
  pScore3.appendChild(spanScore3);
  pScore3.appendChild(spanTotal3);
  verbalDIV.appendChild(pScore3);

  createVisual();
}

function createVisual(){
   let visualDIV = document.getElementById("visual");
  const img4 = document.createElement("img");
  img4.src = jsonFile[3].icon;
  visualDIV.appendChild(img4);

  let pDescrip4 = document.createElement("p");
  pDescrip4.className = "visual";
  pDescrip4.innerHTML = jsonFile[3].category;
  visualDIV.appendChild(pDescrip4);

  let pScore4 = document.createElement("p");
  let spanScore4 = document.createElement("span");
  let spanTotal4 = document.createElement("span");

  spanScore4.className = "score";
  spanTotal4.className = "full-score";
  spanScore4.innerHTML = jsonFile[3].score;
  spanTotal4.innerHTML = " /100";
  pScore4.appendChild(spanScore4);
  pScore4.appendChild(spanTotal4);
  visualDIV.appendChild(pScore4);
}
