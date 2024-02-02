let score = 0;
let unlockedObjects = [];
let isClickable = false;

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (isClickable){
        if (!unlockedObjects.includes(object)) {
            unlockedObjects.push(object);
            document.getElementById(object).classList.add('unlocked');
            alert(`Congratulations! You've unlocked the ${object}!`);
        }
    }else{
        alert('You cannot click on this object. Please enable it first.');
    }
}


function checkUnlockables() {
    if (score >= 3) {
        isClickable = true;
        unlockObject('planet');
    }
    if (score >= 6) {
        isClickable = true;
        unlockObject('rocket');
    }
    if (score >= 9) {
        isClickable = true;
        unlockObject('alien');
    }
}
    function scaleContents(div){
        if(isClickable === true){
        div.classList.toggle('scaled');
    }
}