import jsonFile from "./data.json" assert {type: "json"};
console.log(jsonFile);

//creating reaction summary
let btn = document.getElementById("btn-continue").addEventListener("click", createReaction);


 function createReaction(){
    // console.log(obj);


     let reactionDIV = document.getElementById("reaction");
     const img = document.createElement("img");
     img.src = "./assets/images/icon-memory.svg";
     reactionDIV.appendChild(img);

     let pDescrip = document.createElement("p");
     pDescrip.className = "reaction";
     pDescrip.innerHTML = "Reaction";
     reactionDIV.appendChild(pDescrip);

     let pScore = document.createElement("p");
     let spanScore = document.createElement("span");
     let spanTotal = document.createElement("span");

     spanScore.className = "score";
     spanTotal.className = "full-score";
    //  pScore.innerHTML = 
 }


