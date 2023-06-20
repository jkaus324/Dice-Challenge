var randon_num1=Math.floor(Math.random()*6+1);
var randon_num2=Math.floor(Math.random()*6+1);

var random_dice1="dice"+randon_num1+".png";
var random_dice2="dice"+randon_num2+".png";

random_dice1="images/"+random_dice1;
random_dice2="images/"+random_dice2;

document.querySelectorAll("img")[0].setAttribute("src",random_dice1);
document.querySelectorAll("img")[1].setAttribute("src",random_dice2);

if(random_dice1>random_dice2){
    document.querySelector("h1").innerHTML="Player1 wins!!";
}

else if(random_dice1<random_dice2){
    document.querySelector("h1").innerHTML="Player2 wins!!";
}

else{
    document.querySelector("h1").innerHTML="It's a draw";
}