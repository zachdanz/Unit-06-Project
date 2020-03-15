document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const buttons = document.querySelectorAll('button');
    const phraseDiv = document.getElementById('phrase');
    const missed = 0;
    const startButton = document.querySelector('.btn__reset');
    const ul = document.getElementById('secretMessage');

    startButton.addEventListener('click', (e) => {
        $(e.target.parentNode).fadeOut("250")
    //    e.target.parentNode.style.display = "none";
    });

    const phrases = [
        // "You are a very good guesser",
        // "Coding is fun and intuitive",
        // "Cannot get CoronaVirus while learning to code",
        // "Not even my wife could guess this",
        // "JavaScript can cure cancer",
        // "These phrases are from an array",
        // "Unguessable",
        // "This is an easy one",
        // "Lets play Zelda",
        "Call me senoria",
        
    ];

    function getRandomPhraseAsArray(arr){
        const randomPhrase = arr[Math.floor(Math.random()*phrases.length)];
        const phraseAsArray = randomPhrase.split("");
        return phraseAsArray;
    } 

    function addPhraseToDisplay(arr){
        for (let i=0; i < arr.length; i++) {
            const letter = document.createElement('li');
            letter.textContent = arr[i];
            ul.appendChild(letter);
            if (letter.textContent === " ") {
                letter.className = "space";
            } else {
                letter.className = "letter";
            }
        };
    }

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray); 

    function checkLetter(guess){
        const letter = document.querySelectorAll("button");
        const foundMatch = null;
        for (let i=0; i < letter.length; i++){
            if (guess.textContent === letter[i].textContent.toLowerCase()){
                letter[i].classList.add('show');
                foundMatch = guess.textContent;
            } else {
                null
            }
        }
        return foundMatch;
    }

    qwerty.addEventListener('click', (e) => {
        e.target.className = "chosen";
        e.target.disabled = true;
        checkLetter(e.target.textContent);
    });
});