const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

//----------Create Deck
function buildDeck(){
  const suits = ['hearts', 'clubs', 'spades', 'diamonds'];
  const ranks = ['Ace','2','3','4','5','6','7','8','9','10','jack','Queen','King'];
  const deck = [];
  for(let i = 0; i < ranks.length; i++){
    for(let j = 0; j < suits.length; j++){
      deck.push({suit:suits[j], rank:ranks[i], value:[i]});
    }
  }
  return deck;
}
const unshuffledDeck = buildDeck();

//------------#2 Shuffle DecK
function shuffle(deck){
  let shuffledDeck = deck;
  let currentIndex = deck.length - 1;
  let temporaryValue;
  let randomIndex;
  let result;
  while(currentIndex !== 0){
    randomIndex =  Math.round((Math.random() * currentIndex));
    temporaryValue = shuffledDeck[currentIndex]; // temp store index # for the last card.  TEMP = KING OF DIAMONDS
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex]; //last card now = random card. RANDOM CARD
    shuffledDeck[randomIndex] = temporaryValue; //---random card now = last car last Card is randomize. RANDOM CARD NOW EQUALLED TO LAST CARD
    currentIndex --;
  }
  return shuffledDeck;
}
const nowShuffledDeck = shuffle(unshuffledDeck);

//------#3 Greet Player
function greet(){
let deck = nowShuffledDeck;
let score = 0;
let name = getInput('Hello, what is your name?');
let response = getInput(`Hello ${name}, lets Play!`);
let rank = getInput('Enter a rank.');
let suit = getInput('Enter suit');
let guessAnswer = guess(rank, suit);

while(score < 5 && score < deck.length){
if (guessAnswer == true){
    score ++;
    letResponse2 = getInput(`Great Job, you got it right! Your score is now ${score}. Is the next card higher(h) or lower(l)?`);
    }else{
      console.log('You did not get a point, try again');
      break;
    }
  }
}
// greet();

//-----#4 Compare
function compare(card1, card2){
  return card2.value - card1.value;
}

//-----#5 Guess
function guess(myRank, mySuit){
  let randomGen = Math.floor(Math.random() * 51);
  let randomGen2 = Math.floor(Math.random() * 51);
  let finalAnswer;
  let input;
  let currentCard = `${nowShuffledDeck[randomGen].rank} of ${nowShuffledDeck[randomGen].suit}`;
  let nexttCard = `${nowShuffledDeck[randomGen2].rank} of ${nowShuffledDeck[randomGen2].suit}`;
  let higherOrLower = compare(nowShuffledDeck[randomGen], nowShuffledDeck[randomGen2]);

  if(myRank === nowShuffledDeck[0].rank && mySuit === nowShuffledDeck[0].suit){
  finalAnswer = true;
  }

  console.log(`you guessed the ${myRank} of ${mySuit}`);
  input = getInput(`The current card is the ${currentCard}. Is the next card higher(h) or lower(l)?`);



  if(input === 'l' && higherOrLower < 0){
      console.log(`You're right,the ${nexttCard} is lower!`);
      finalAnswer = true;
      return true;
  }
  
  if(input === 'l' && higherOrLower > 0){
    console.log(`Sorry,${nexttCard} is not lower!`);
    finalAnswer = false;
    return;
  }
  
  if(input === 'h' && higherOrLower > 0){
      console.log(`You're right, the ${nexttCard} is higher!`);
      finalAnswer = true;
      return true;
  }
  
  if(input === 'h' && higherOrLower < 0){
      console.log(`Sorry, ${nexttCard} is not higher!`);
      finalAnswer = false;
      return;
  }
  
  if(input !== 'l'|| input!== 'h'){
    console.log(`You have to enter (h) or (l).  You have no point this round. Good-Bye.`);
    finalAnswer = false;
    return false;
   }
   return finalAnswer;
  }

//---#6 Play Game
function playGame(){
  let deck = nowShuffledDeck;
  greet();
  let score = 0;
  let currentCard = deck.pop();
}
playGame();


// STEP ONE - Building A Deck.

//buildDeck.push and position array
// 1. use a function declaration to create a buildDeck function.
// 2. inside the buildDeck function, create an array called "suits" that lists all four suits from a deck of card as strings.
// 3. inside the buildDeck function, create a 2nd array called "ranks" that lists all 13 cards from ace to King as strings.
// 4. inside the buildDeck function, create an empty array called "deck"
// 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
// 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
// HINT: The result of step 6 is that each card will be an object inside of the deck array, for example [{suit: "diamonds", rank: "A", value: 0}, {suit: "diamonds", rank: "2", value: 1},...{etc}]. For example, if we wanted to organize the players and teams of the NBA with index numbers, we could write: nba.push({player: players[i], team: teams[n], index: i})
// 7. After your loops, return deck, which should now return an array full of card objects if you were to run buildDeck().

// STEP TWO - Shuffling your deck
// 1. use a function declaration to create a function called shuffle that takes deck as an argument.
// 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
// 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
// 4. Create a while loop whos condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
// 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// 6. Inside the while loop, decrement current index by 1. (should be after step 9)
// 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
// 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
// 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
// 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.

// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.

// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.

// STEP SIX - Let's play!
// 1. declare a function called playGame
// 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
// 3. declare a variable called playerName that takes the result of the greet function as its value.
// 4. using let, declare a score variable that's currently set to the number zero
// 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
// 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.
