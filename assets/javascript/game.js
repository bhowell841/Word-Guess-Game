// Declaration of variables and arrays
var joes = ["Duke", "Roadblock", "SnakeEyes", "StormShadow", "CobraCommander", "Destro", "LadyJaye", "SnowJob", "Scarlett", "RipCord", "Shipwreck", "Footloose", "Shockwave", "Firefly", "Flint", "DrMindbender",]
var hidden = []; // array of underscores
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var character;
var characterArray = [];
var random;
var chancesLeft = 8;
var matches = 0;


function getCharacter() {
// Create a random number between 0 and 16 
var min=0; 
var max=16;
random = Math.floor(Math.random() * (+max - +min));
console.log(random);

// Use random number to choose the band.  
console.log(joes[random]);

// Set the random number to a variable and make lowercase
character = joes[random].toLowerCase();
console.log(character);

// Split character into array for comparison
characterArray = character.split('')
console.log(characterArray)
}


// hidden array with underscores equal to character name
function createUnderscore() {
    
for (i = 0; i < character.length; i++){
        hidden.push ("_ ");
    
    }console.log(hidden); 
    $.each(hidden, function(index, value) {
        $("#word").append(value);
    });
}

getCharacter();
createUnderscore();

// Get a letter, see if it has been guess, if not push it to lettersGuessed array
document.onkeypress = function(event){
    guess = event.key.toLowerCase();
        compare(guess);
    
function compare(item) {
    if (lettersGuessed.includes(item) === true){
        chancesLeft = chancesLeft+1;
    }else {
        lettersGuessed.push(item)
    }
    console.log("The guess is: " + item);
    console.log(lettersGuessed);
    $("#number").text(lettersGuessed.join(', '));
   
    // Compare the guess to the random letter, if match wins +1
    for (i = 0; i<characterArray.length; i++){
        if (guess.charAt(0) === characterArray[i]){
            // hidden.splice(i, 1, guess); //remove commas
            hidden[i] = guess;
            matches = matches + 1;
            console.log(hidden);
            console.log("number of matches " + matches);
            console.log("guesses left " + chancesLeft);
            $("#word").text(hidden); 
        }
    }

    if (characterArray.includes(guess) === false){
        chancesLeft = chancesLeft - 1;
        console.log("guesses left " + chancesLeft);
        $("#thoughts").text(chancesLeft);
    }
    if (chancesLeft < 1) {
        lose();
    }
    if (matches == characterArray.length){
        win();
    }
} // Closes compare function

} // Closes OnKeyPress


function win() {
    wins = wins + 1;
    $("#winCount").text(wins);
    alert("You win, the Joe was " + character);
    reset();
};


function lose() {
    losses = losses + 1;
    $("#losses").text(losses);
    alert("You are out of guesses, the character was " + character);
    reset();
}

function reset() {
    // reset stuff here
    hidden = []; 
    lettersGuessed = [];
    characterArray = [];
    matches = 0;
    chancesLeft = 8
    $("#word").text("");
    $("#number").text("");
    $("#thoughts").text("8");
    getCharacter();
    createUnderscore();
}
