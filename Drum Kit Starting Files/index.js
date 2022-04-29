document.addEventListener("keydown", function (event){
	console.log(event);
	switcher(event.key);
});
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		switcher(this.innerText);
	});
}
function switcher(switchExpression){
	switch(switchExpression){
			case 'w': playAudio("tom-1");
			break;
			case 'a': playAudio("tom-2");
			break;
			case 's': playAudio("tom-3");
			break;
			case 'd': playAudio("tom-4");
			break;
			case 'j': playAudio("kick-bass");
			break;
			case 'k': playAudio("snare");
			break;
			case 'l': playAudio("crash");
			break;
	}
	animation(switchExpression)
}
function playAudio(pathName){
	var audio = new Audio("sounds/"+pathName+".mp3");
	audio.play();
}

function animation(switchExpression){
	document.querySelector("."+switchExpression).classList.add("pressed");
	setTimeout( function(){
		document.querySelector("."+switchExpression).classList.remove("pressed")
	}, 100);
}