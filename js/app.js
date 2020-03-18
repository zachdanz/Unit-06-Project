document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const startButton = document.querySelector('.btn__reset');
    const ul = document.getElementById('secretMessage');
    let missed = 0;

    // Possible phrases
    const phrases = [
        "You are a very good guesser",
        "Coding is fun and intuitive",
        "Cannot get CoronaVirus while learning to code",
        "Not even my wife could guess this one",
        "JavaScript can cure cancer",
        "Unguessable",
        "This is an easy one",
        "Lets play Zelda",
        "Call me senorita",
        "Reinventing hangman",
        "Coding from quarantine"
    ];
    
    function nextRound () {
        //Pick a random item from the array  
        function getRandomPhraseAsArray(arr){
            ul.textContent = "";
            const randomPhrase = arr[Math.floor(Math.random()*phrases.length)];
            const phraseAsArray = randomPhrase.split("");
            return phraseAsArray;
        } 

        // Places chosen item in the Phrase Div
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

        // Resets the onscreen heart counter
        const liveList = document.getElementsByClassName('tries');
            for (let i = 0; i < liveList.length; i++) {
                liveList[i].children[0].src = 'images/liveHeart.png';
            }

        //Returns all buttons to default state
        const buttons = document.getElementsByTagName("button");
            for (let i=0; i < buttons.length; i++) {
                buttons[i].classList.remove('chosen');
                buttons[i].disabled = false;
            }

        missed = 0;

        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray); 
    }

    // Check the player's guess and add it to the hangman phrase
    function checkLetter (guess){
		const letter = document.getElementsByClassName("letter");
		let foundMatch = null;
		for (let i = 0; i < letter.length; i++) {
			if (guess === letter[i].textContent.toLowerCase()) {
                letter[i].classList.add('show');
                foundMatch = letter[i].textContent;
            } 
        }
        return foundMatch
    }

    //Check to see if the player has won or lost the game

    function checkWin() {
        const guessableLetters = document.querySelectorAll(".letter");
        const guessedLetters = document.querySelectorAll(".show");
        const overlay = document.getElementById('overlay');
        const overlayText = document.querySelector('.title');
        if (guessedLetters.length === guessableLetters.length){
            overlay.className = "win";
            overlayText.textContent = "You are sicker than sick. Not in a CoronaVirus type of way. Good job!";
            startButton.textContent = "Play again?";
            $(overlay).fadeIn(2500);
        } else if (missed === 5) {
            overlay.className = "lose";
            overlayText.textContent = "Sorry bro, but that was awful. Redeem yourself?";
            startButton.textContent = "Giving up was never an option.";
            $(overlay).fadeIn(2000);
        }
    } 

    //Remove heart if wrong and mark a piece as "chosen"

    qwerty.addEventListener('click', (e) => {
        if (e.target.className !== "keyrow"){
            const checker = checkLetter(e.target.textContent);
            e.target.className = 'chosen';
            e.target.disabled = true;
            if(checker === null){
                const liveList = document.getElementsByClassName('tries');
                for (let i = 0; i < liveList.length; i++) {
                    if (liveList[i].children[0].src.indexOf("live") > -1) {
                      liveList[i].children[0].src = 'images/lostHeart.png';
                      missed += 1;
                      break;
                    }
                  }
            }
        }
        checkWin();
    });
    
    // Starts and restarts game
    startButton.addEventListener('click', (e) => {
        nextRound();
        $(e.target.parentNode).fadeOut("2000")
    });

});

