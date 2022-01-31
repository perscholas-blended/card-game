const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

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

function buildDeck() {
  const suitsArray = ['Club', 'Heart','Diamond','Spade'];
  const ranksArray = ['Ace', '2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
  const deckArray  = [];
  let obj = {}
  for (let i = 0; i <= ranksArray.length - 1; i+=1) {
    for (let j = 0; j <= ranksArray.length - 1; j+=1) {
      if (i < suitsArray.length) {
        obj = {Suit: `${suitsArray[i]}`, Rank: `${ranksArray[j]}`, Value: `${j}`}
      deckArray.push(obj);
      }
      //Okay, so this isn't working as intended. Let's trouble shoot...Oh! Missed adding the specific index in ranksArray, during the object assignment. 
      // And both for-loops must match the ranksArray length if we're going to give each suit all values
      //...and have all cards as their own objects. My first method bunched all cards of a suit into one object. 

      //...Yes. I think I got it. Just to practice Big O notation, this would have a complexity of O(n^2).
    }
  }
  return deckArray;
}

//console.log(buildDeck());

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


function shuffle(deck) {
  let shuffledDeck = deck;
  let currentIndex = deck.length - 1; //To account for the array starting at zero, as we have to use this to find an index of shuffledDeck? 
  let temporaryValue;
  let randomIndex
   while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); 
    //We start shuffling with the last card in the original deck.
    
    temporaryValue = shuffledDeck[currentIndex]; // We are setting the temp value to that of shuffledDeck[currentIndex]
    
    //1st loop: temp value = {suit: "spade", rank: "king", value: "11"} 
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex]; // We are setting the current index of shuffledDeck to that of the random num.
    
    //Let's choose a random number...2
    //shuffleDeck[52] is now equal to shuffleDeck[2], which is {suit: 'club',rank:'3, value}
    shuffledDeck[randomIndex] = temporaryValue; // We set, or "swap" our original number, the one originally in its default order, to the position of the random number.
    //shuffleDeck[41] would now be equal to temp value  {suit: "spade", rank: "king", value: "11"}.


    // With this in mind, the way the code handles shuffling this deck is through using a temporary value 
    // to store the position of the original array to refer back to after setting the original array to its new value.
    // Without the temporary value, that position would be lost, and we would end up with two cards with the current value 
    // of shuffledDeck[randomIndex], every time we loop.

    // Ah, just remembered that shuffledDeck is an object. So temporary value is set to an entire object,
    // shuffledDeck's current index is being set to another object, and then the location of that other object
    // is set to that of the temporaryValue's object. 
    //It's just like going through an array of primitive types, but that is important to note. 

    currentIndex-=1;
  }
  
  return shuffledDeck;
}

//console.log(shuffle(buildDeck()));


// STEP THREE - Greeting the player
// 1. Declare a function called greet()
// 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// 3. Console.log name
// 4. return name
// 5. Done.

function greet() {
  const name = getInput("Welcome! Please provide us with your name ");
  console.log(name);
  return name;
}

// STEP FOUR - comparing cards
// 1. declare a function called compare that takes two cards as arguments
// 2. return the value property of the first card minus the value property of the second card.

function compare(card1, card2) {
  return card1.Value - card2.Value;
}

// STEP FIVE - Respond to User Guess
// 1. declare a function called guess that takes two cards as arguments
// 2. console.log the rank and suit of the current card
// 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// 4. use a conditional statement to see if "input" equals "h" or "l".
// 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// 6. If input equals l, check and see if it's a positive number.
// 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.

function guess(card1,card2) {
  console.log(card1.Rank + ": " + card1.Suit);
  let input = getInput("Will the next card be lower or higher than the current card? Type in \"l\" for lower, \"h\" for higher ");
  input = input.toLowerCase(); // Just to be sure. No need to punish the user without reason. 


  if (input === 'h' || input === 'l') {
    if (input === 'h') {
      return (compare(card1,card2) < 0);
  } else if (input === 'l') {
      return (compare(card1,card2) > 0);
    } 
  } else {
    console.log(`You have to guess either 'l' for lower, or 'h' for higher.`) //The statement in playGame covers the "No points will be awarded" phrase.
    return false;
  }

}

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


function playGame() {
  let deck = shuffle(buildDeck());
  const playerName = greet();
  let score = 0; 
  let currentCard;
  let nextCard; 

  while (score < 5 && score < deck.length) {
      currentCard = deck.pop();
      nextCard = deck.pop();

    if (guess(currentCard, nextCard) === true) {
      score +=1; 
      console.log(`You got it! Your score is now ${score}.`);
    } else {
      console.log(`Sorry, that's an incorrect guess. No points will be awarded.`);
    }

    // nextCard = currentCard; <-- I'm trying to take care of this in the beginning of the loop. 
    // Although that may not be efficient.
    
  
  }

  (deck.length === 0) ? console.log(`${playerName}, you ran out of cards. You lose. Better luck next time.`) : console.log(`Congratulations, ${playerName}! You've won!`);
  // If deck 
  //Oh, I think I got it! I had an error for the last 20-30 minutes...the issue was that I had currentCard outside of the
  // while loop, so it never updated. . . wow, even with directions, I'm slow on the uptake. That wasn't even the only error I had
  // throughout the entire assignment. Embarrassing! Now I have it, hopefully. 

  // No, something is wrong. It was working well in the morning...but now I'm getting the same card
  //...shown to me twice in a row, when it should have been popped off. It's getting doubled now...
  //...why? It wasn't acting this way the first time around. What did I do? 
  // Maybe if I have a currentCard popped before the loop, and then pop it again at the end of the while loop?

  //...How did this break this way?!?! It was working in the morning, and I haven't even touched this since!
  // I think I'm making things worse by trying to fix it...

  //Changes: removed elseIf statement in playGame(). Added "return false" to else statement in guess().
  //Result: Appears to work. I'll have to sleep on it and check how the code wants to run in the 
  //...morning to be sure, though. 
}

console.log(playGame());
