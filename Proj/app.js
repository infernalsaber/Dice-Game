document.querySelector("h1").innerHTML = "P1 wins";
var dice1 = Math.floor(Math.random()*6+1);
var dice2 = Math.floor(Math.random()*6+1);
console.log(dice1);
console.log(dice2);
document.querySelectorAll("img")[0].setAttribute("src","dice" + dice1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "dice" + dice2 + ".png");

if(dice1 == dice2){
    document.querySelector("h1").innerHTML = "Draw";
} 
else if(dice1>dice2){
    document.querySelector("h1").innerHTML = "P1 wins";
}
else if(dice1<dice2){
    document.querySelector("h1").innerHTML = "P2 wins";

}
else document.querySelector("h1").innerHTML = "Glitch in the Matrix";
