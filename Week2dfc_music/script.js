function playNoteWithSleep(duration, note){
    const melodyOutput = document.getElementById("melodyOutput");
   
    melodyOutput.innerHTML += "play ${note}";

    setTimeout( () => (
        melodyOutput.innerHTML += "Sleep ${duration}s"
        
    ) );//end timeout

    
}//close function