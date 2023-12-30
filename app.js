var dice1 = Math.floor((Math.random()*10)%6 + 1);
var dice2 = Math.floor((Math.random()*10)%6 + 1);
var dice1Image = `images/dice${dice1}.png`;
var dice2Image = `images/dice${dice2}.png`;
var heading = document.querySelector("h1");

document.querySelector(".img1").src=dice1Image;
document.querySelector(".img2").src=dice2Image;

if(dice1>dice2){
    heading.textContent="Player 1 Wins";
}
else if(dice2>dice1){
    heading.textContent="Player 2 Wins";
}
else{
    heading.textContent="Draw";
}
