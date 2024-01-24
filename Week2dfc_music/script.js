function playNoteWithSleep(duration, note){
    const melodyOutput = document.getElementById("melodyOutput");
   
    melodyOutput.innerHTML += "play ${note}";

    setTimeout( () => (
        melodyOutput.innerHTML += "Sleep ${duration}s"
        
    ),duration * 1000 );//end timeout

    
}//close function

playNoteWithSleep(77, 0.25);
playNoteWithSleep(76, 0.25);
playNoteWithSleep(76, 0.25);
playNoteWithSleep(77, 0.5);
playNoteWithSleep(81, 0.25);
playNoteWithSleep(76, 0.25);
playNoteWithSleep(81, 0.25);
playNoteWithSleep(79, 0.25);
playNoteWithSleep(84, 0);

function attach(){
    const audioPlayer = document.querySelector("audio");
    audioPlayer.src = "";
}

attach();