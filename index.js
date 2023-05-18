var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1*6)+1;
var imgnum1 = "dice"+randomnumber1+".png";
var imgsrc1 = "./images/" + imgnum1;
document.querySelector(".one").setAttribute("src", imgsrc1);

var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6)+1;
var imgnum2 = "dice"+randomnumber2+".png";
var imgsrc2 = "./images/" + imgnum2;
document.querySelector(".two").setAttribute("src", imgsrc2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent = "🤛 Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent = "Player 2 Wins 🤜";
}
else{
    document.querySelector("h1").textContent = "🤝 Draw 🤝";
}