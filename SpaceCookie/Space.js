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
            isClickable = false;
        }
    }else{
        alert('You cannot click on this object. Please enable it first.');
    }
}


function checkUnlockables() {
    if (score >= 3 && !unlockedObjects.includes('planet')) {
        isClickable = true;
        unlockObject('planet');
    }
    if (score >= 6 && !unlockedObjects.includes('rocket')) {
        isClickable = true;
        unlockObject('rocket');
    }
    if (score >= 9 && !unlockedObjects.includes('alien')) {
        isClickable = true;
        unlockObject('alien');
    }

    if (unlockedObjects.includes('planet') && unlockedObjects.includes('rocket') && unlockedObjects.includes('alien')) {
        isClickable = true;
        fourthElement();
}

function fourthElement() {
    if (score >= 12 && !unlockedObjects.includes('fourthEmoji')) {
        unlockObject('fourthEmoji');
    }
}

    function scaleContents(div){
        if(isClickable === true){
        div.classList.toggle('scaled');
    }
}