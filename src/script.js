document.addEventListener("keydown", function(event) {
        let audio= new Audio("audio/"+event.key+".mp3");
        audio.play();
});
