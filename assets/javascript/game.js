// Declaration of variables and arrays
var joes = ["Duke", "Roadblock", "SnakeEyes", "StormShadow", "LadyJaye", "SnowJob", "Scarlett", "RipCord", "Shipwreck", "Footloose", "Shockwave", "Firefly", "Flint"]

var random; // Random number generated to select a word from the joes array
var character; // The character selected form the array
var characterArray = []; // The character selected made into an array on numbers
var hidden = []; // array of underscores equal to the length of the characterArray
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var chancesLeft = 8;
var matches = 0; // amount of letters you have matched


function getCharacter() {
    // Create a random number between 0 and 16 
    var min=0; 
    var max=14;
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
        // Check if the letter pressed is already in the array
        if (lettersGuessed.includes(item) === true){
            // If it has been guessed already give the user an extra guess
            chancesLeft = chancesLeft+1;
        }else {
            // If it hasn't been guess push it to the lettersGuessed array
            lettersGuessed.push(item)
        }
        console.log("The guess is: " + item);
        console.log(lettersGuessed);
        // Print the lettersGuessed to the console
        $("#number").text(lettersGuessed.join(', '));
    
        // Compare the guess to the to the characterArray
        for (i = 0; i<characterArray.length; i++){
            if (guess.charAt(0) === characterArray[i]){
                // hidden.splice(i, 1, guess); //remove commas
                // If yes, replace the underscore with the guessed letter, and increment matches for each match
                hidden[i] = guess;
                
                $("#word").text(hidden.join('')); 
                matches = matches + 1;
                // Update the hidden array on the console
                console.log(hidden);
                console.log("number of matches " + matches);
                console.log("guesses left " + chancesLeft);
            }
        }

        // See if the guess is in in the character array, if not subtract a guess
        if (characterArray.includes(guess) === false){
            chancesLeft = chancesLeft - 1;
            console.log("guesses left " + chancesLeft);
            $("#thoughts").text(chancesLeft);
        }

        // If chancesLeft is less than 1 invoke function lose()
        if (chancesLeft < 1) {
            lose();
        }

        // If the number of matches  is equal to the characterArray.length invoke function win()
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
