
// Set variables:

var targetNumber = generateNumber(19,120);
var crystalValues = [];

// initialized baseline values
var wins = 0;
var losses = 0;
var totalScore = 0;

/* 0: Display game data on the HTML page using jQuery:
    notes from html: 
    id="wins"
    id="losses"
    id="total-score" (total of the userCrystals array filled with the user crystal clicks value total)
    id="target-number" (computer generated target number that we are trying to equal in total)
*/
$("#total-score").text(totalScore);
$("#wins").text(wins);
$("#losses").text(losses);
$("#target-number").text(targetNumber);

// 1: function to generate a random number and set a parameter of min, max:

function generateNumber(min, max) {
    //use Math.floor method to creat random number. 
    var choice = Math.floor(Math.random() * (max - min) ) + min;
    //return the result:
    return choice;
    
}

//2: generate random number values for the 4 crystals that the user can choose with a random hidden value between 1 - 12.

function populateCrystalValues() {
    //need 4 unique crystal values per game. 
    while (crystalValues.length < 4) {
        // creates a variable using the generateNumbers function.
        var number = generateNumber (1,12);
        // ! ensures that the statement is not true, as we don't want the same number in the array.
        if (!crystalValues.includes(number)){
            // if there arent duplicates of the same number,  then push the values of number to the crystalValues Array.
            crystalValues.push(number) 
        }
    }
}
//call the function to generate the numbers:
populateCrystalValues();

//3: capture the user input (clicks from the four crystals).

//create a click event using jQuery:
// for the crystal class, if clicked, the following function:
$(".crystal").click(function(){
    // make a variable for the index for the data to the "index"
    var index = $(this).data("index");
    // add totalScore and the crystalValues array.
    totalScore += crystalValues[index]
    //add the totalScore text to total-score id on the HTML page:
    $("#total-score").text(totalScore)
    //call the evaluateTotalScore function:
    evaluateTotalScore();
})

//4: evaluate the user's input.
  
//create a function to evaluate the score:
function evaluateTotalScore (){
    // if the users totalScore is equal to the target number: 
    if (totalScore === targetNumber){
        // increment the wins count by one.
        wins ++;
        // use jQuery to add the updated wins amount text to HTML.
        $("#wins").text(wins);
        //call the reset function:
        reset();
    } else if (totalScore > targetNumber){
        // increment the losses count by one. 
        losses ++;
        // use jQuery to add the updated losses amount text to HTML.
        $("#losses").text(losses);
        //call the reset function:
        reset();
    }
}

//5: Reset the values for the next game of the random numbers, except for the wins and losses counts.

//create reset function:
function reset() {
    crystalValues = [];
    totalScore = 0;
    targetNumber = generateNumber(19,120);
    populateCrystalValues();
    $("#total-score").text(totalScore);
    $("#target-number").text(targetNumber);  

}


/* original assignment parameters for the game: 

* There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.

*/