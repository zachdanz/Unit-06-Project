document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const phraseDiv = document.getElementById('phrase');
    const missed = 0;
    const startButton = document.querySelector('.btn__reset');
    const ul = document.querySelector('ul');

    startButton.addEventListener('click', (e) => {
        $(e.target.parentNode).fadeOut("250")
    //    e.target.parentNode.style.display = "none";
    });

    const phrases = [
        "You are a very good guesser",
        "Coding is fun and intuitive",
        "Cannot get CoronaVirus while learning to code",
        "Not even my wife could guess this",
        "JavaScript can cure cancer",
        "These phrases are from an array",
        "Unguessable",
        "This is an easy one",
        "Lets play Zelda",
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

    qwerty.addEventListener('click', (e) => {
        function checkLetter(guess){
            const li = ul.children;
            for (let i=0; i < li.length; i++){
                if (guess === li[i].textContent.toLowerCase()){
                    li[i].classList.add('show');
                } else {

                }
            }
        e.target.className = "chosen";
        e.target.disabled = true;
        const letterFound = checkLetter(e);
        }
    });
});