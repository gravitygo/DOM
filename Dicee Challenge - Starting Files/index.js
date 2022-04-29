var play1 = Math.floor(Math.random()*6)+1;
var play2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+play1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+play2+".png");
if(play1>play2)
	document.querySelector("h1").innerText="🚩Player 1 Wins!";
else if(play2>play1)
	document.querySelector("h1").innerText="Player 2 Wins!🚩";
else
	document.querySelector("h1").innerText="Draw!";	