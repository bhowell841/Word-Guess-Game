// Declaration of variables and arrays
var joes = ["Duke", "Roadblock", "SnakeEyes", "StormShadow", "CobraCommander", "Destro", "LadyJaye", "SnowJob", "Scarlett", "RipCord", "Shipwreck", "Footloose", "Shockwave", "Firefly", "Flint", "DrMindbender",]
var hidden = [];

var counter = 10;
var wins = 0;
var losses = 0;
var character;
var random;

// Create event listener
window.addEventListener ('')


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




// hidden array with underscores equal to character name
for (i = 0; i < character.length; i++){
        hidden.push ("_ ");
        document.write(hidden[i]);
    }

for (chance = 0; chance < 10; chance++){
    // use a prompt to get a letter
    var letter = prompt("Enter a letter: ")

    // compare the letter to the character name and replace in array if it matches
    for (l = 0; l < character.length; l++) {
        if(letter === character.charAt(l)) 
          hidden.splice(l, 1, letter);  
    }
    
    // reprint the array
    for(i = 0; i < hidden.length; i++){
         document.write(hidden[i]);
    }
     
     console.log(hidden);
    }
