function playNoteWithSleep(duration, note){
    const melodyOutput = document.getElementById("melodyOutput");
   
    melodyOutput.innerHTML += "play ${note}";

    setTimeout( () => (
        melodyOutput.innerHTML += "Sleep ${duration}s"
        
    ),duration * 1000 );//end timeout

    
}//close function

playNoteWithSleep(77, 0.25)