// Declaration of variables and arrays
var joes = ["Duke", "Roadblock", "SnakeEyes", "StormShadow", "CobraCommander", "Destro", "LadyJaye", "SnowJob", "Scarlett", "RipCord", "Shipwreck", "Footloose", "Shockwave", "Firefly", "Flint", "DrMindbender",]
var hidden = []; // array of underscores
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var character;
var characterArray
var random;
var chancesLeft = 8;
var remainingletter;


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
}    

    
// Compare the guess to the random letter, if match wins +1
    if (guess.charAt(0) === character){
        // winGame();
        }

// If no match subtract one from guess
    else {
        chancesLeft = chancesLeft-1;
        console.log("guesses remaining: " + chancesLeft);   // This is showing it
        //document.querySelector("#thoughts").innerHtml = guessLeft;  // This is not showing
        document.getElementById("thoughts").innerHTML = chancesLeft;
    }

// If the counter gets to 0 add a loss
    if (chancesLeft === 0){
        // loseGame();
    }
}
