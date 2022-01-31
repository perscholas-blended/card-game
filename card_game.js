const readlineSync = require("readline-sync");

// getInput() is a function that takes a `prompt` as an argument which
// is a question (string) to ask the user.
// the returning value of getInput() is a string of whatever the user has typed as the response

function getInput(prompt) {
  return readlineSync.question(`${prompt}: `);
}

// YOUR CODE STARTS HERE!!

// STEP ONE - Building A Deck.

function buildDeck() {
  const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const deck = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let x = 0; x < suits.length; x++) {
      deck.push({ rank: ranks[i], suit: suits[x], value: i });
    }
  }
  return deck;
  // console.log(deck);
}
//console.log(buildDeck());

function shuffle(deck) {
  let shuffledDeck = deck;
  let currentIndex = deck.length - 1;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = shuffledDeck[currentIndex];
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
    shuffledDeck[randomIndex] = temporaryValue;
    currentIndex--;

    //In order to properly shuffle the cards I have to generate a random number.
    //I set the temporary value to shuffledDeck array with the the currentIndex.
    //The temporary value is acting like a placeholder for the current card.
    //Then i set the current card equal to whatever random card the randomindex sets it to
    //Then I replaced the shuffledDeck with the random index equal to the placeholding temporaryValue so that i have no duplicate cards in the shuffled deck.
  }
  return shuffledDeck;
}

//console.log(shuffle(buildDeck()));

function greet() {
  let name = getInput("Welcome to my card game!! What is your name?");
  console.log(name);
  return name;
}
//greet();

function compare(cardOne, cardTwo) {
  return cardOne.value - cardTwo.value; // 1 - 2
}

function guess(cardOne, cardTwo) {
  console.log(cardOne.rank, cardOne.suit);
  let input = getInput(
    "Do you think the next card will be higher (h) or lower (l) than your current card?"
  );
  if (input === "h") {
    return compare(cardOne, cardTwo) < 0;
  } else if (input === "l") {
    return compare(cardOne, cardTwo) > 0;
  } else if (input !== "h" || input !== "l") {
    console.log(
      "You did not make a correct guess, You will not receive any points this round"
    );
    return false;
  }
}

// console.log(
//   guess(
//     { rank: "Jack", suit: "Hearts", value: 10 },
//     { rank: "King", suit: "Hearts", value: 12 }
//   )
// );

function playGame() {
  let deck = shuffle(buildDeck());
  let playerName = greet();
  let score = 0;
  let currentCard = deck.pop();
  while (score < 5 && score < deck.length) {
    let nextCard = deck.pop();
    if (guess(currentCard, nextCard)) {
      score++;
      console.log(`Congrats!! your score is now ${score}`);
    } else console.log(`Sorry you were wrong, no points for you.`);
  }
  nextCard = currentCard;
  deck.length !== 0
    ? console.log(`Congrats you have won!!`)
    : console.log(
        "Sorry you ran out of cards and lost the game. Try again next time."
      );
}
playGame();
//======================================================================================
//console.log(shuffle(buildDeck()).length);
// 6. create a while loop whos conditions are that score is less than five AND less than the amount of items still in the deck array.
// 7. Inside the while loop, use an array method on deck to remove the last object and assign that value to a variable named nextCard.
// 8. Inside the while loop, create a conditional statement. If the outcome of guess is true, increment the score by 1, congratulate the user, and tell them their score. If it's false, tell them they were wrong and got no points.
//===>QUESTION<=== 9. Close the conditional statement and assign nextCard to currentCard. You may have to write this as the type of variable that's always global...
// 10. Close the while loop and use a ternary statement that checks if the length of the deck array has reached zero. If it has not, tell the user that they won. If it has reached zero, tell them that they're out of cards and they lost.
// 11. Write a line of code to execute the playGame function.
//=====================================================================================
//buildDeck.push and position array
// ==>DONE!!<=== 1. use a function declaration to create a buildDeck function.
// ==>DONE!!<== 2. inside the buildDeck function, create an array called "suits" that lists all four suits from a deck of card as strings.
// ==>DONE!!<== 3. inside the buildDeck function, create a 2nd array called "ranks" that lists all 13 cards from ace to King as strings.
// ==>DONE!!<== 4. inside the buildDeck function, create an empty array called "deck"
// ==>DONE!!<== 5. inside the buildDeck function, create a for loop INSIDE of another for loop. The outer loop should loop through the ranks. The inner loop should loop through the suits. Make sure to use different variables for your iterators.
//==>DONE!!<== 6. inside your inner for loop, push your looped iterations of ranks and suits as OBJECTS into the empty deck array. Add a third property to this object with the key "value" and the value equal to the current iterator.
// HINT: The result of step 6 is that each card will be an object inside of the deck array, for example [{suit: "diamonds", rank: "A", value: 0}, {suit: "diamonds", rank: "2", value: 1},...{etc}]. For example, if we wanted to organize the players and teams of the NBA with index numbers, we could write: nba.push({player: players[i], team: teams[n], index: i})
//==>DONE!!<== 7. After your loops, return deck, which should now return an array full of card objects if you were to run buildDeck().

// STEP TWO - Shuffling your deck
//==>DONE!!<== 1. use a function declaration to create a function called shuffle that takes deck as an argument.
//==>DONE!!<== 2. Inside this function create a variable called "shuffledDeck" that takes deck as its value.
//==DONE!!<== 3. Using "let" declare three new variables: currentIndex, whos value should equal the length of the deck array, and two more: temporaryValue and randomIndex, each of which should currently have no value assigned.
//==>DONE!!<== 4. Create a while loop whos condition is that "currentIndex" does not equal 0, so that we stop looping once we've gone through all 52 cards.
//==>DONE!!<== 5. Inside the while loop, use the javascript Math.methods to generate a random integer between 0 and "currentIndex"
// ==>DONE!!<== 6. Inside the while loop, decrement current index by 1. (should be after step 9)
//==>DONE!!<== 7. Inside the while loop, assign "temporaryValue" with "shuffledDeck" (which is an array) to the [currentIndex].
// ==>DONE!!<== 8. Still inside, assign "shuffledDeck[currentIndex]" a value of shuffledDeck to the [randomIndex]
//==>DONE!!<== 9. Still inside, assign "shuffledDeck[randomIndex]" a value of "temporaryValue".  (currentIndex //i--;)
// ==>DONE!!<== 10. Review the code from steps 7,8, and 9, and leave a comment explaining what you believe those lines of code are doing as they swap assignments of values between them.
//
//==>DONE!!<== 11. Finally, close the while loop and return "shuffledDeck". You should now be able to run shuffle(buildDeck()) in node and see your shuffled deck of cards.
// STEP THREE - Greeting the player
// ==>DONE!!<== 1. Declare a function called greet()
//==>DONE!!<== 2. Inside that function, declare a variable called "name" and use "getInput()" to welcome the user to the game, ask for their name, and assign their answer.
// ==>DONE!!<==3. Console.log name
// ==>DONE!!<== 4. return name
//==>DONE!!<== 5. Done.
// STEP FOUR - comparing cards
// ==>DONE!!<==1. declare a function called compare that takes two cards as arguments
// ==>DONE!!<== 2. return the value property of the first card minus the value property of the second card.
// STEP FIVE - Respond to User Guess
// ==>DONE!!<== 1. declare a function called guess that takes two cards as arguments
// ==>DONE!!<== 2. console.log the rank and suit of the current card
// ==>DONE!!<== 3. declare a variable called "input" that uses getInput() to ask the user if they think the next card will be higher (h) or lower (l) than their current card and stores the user's response.
// ==>DONE!!<== 4. use a conditional statement to see if "input" equals "h" or "l".
// ==>DONE!!<== 5. If input equals h, return an expression that checks if the outcome of the compare function (using the same arguments as you used for guess) is a negative number.
// ==>DONE!!<== 6. If input equals l, check and see if it's a positive number.
// ==>DONE!!<== 7. If input doesn't equal h or l, tell the user that they need to guess either h or l and that they get no points for this round, then return false.
// STEP SIX - Let's play!
// ==>DONE!!<== 1. declare a function called playGame
// ==>DONE!!<== 2. declare a variable called deck (it's okay to reuse -- remember scope!) that takes the result of the shuffle function. Remember that the shuffle function needs to take the results one of our other functions as its argument...
// ==>DONE!!<== 3. declare a variable called playerName that takes the result of the greet function as its value.
// ==>DONE!!<== 4. using let, declare a score variable that's currently set to the number zero
// const arrayOne = [1, 2, 3, 4, 5];
// let last = arrayOne.pop();
// console.log(last);
// console.log(arrayOne);
// ==>DONE!!<==  QUESTION TOO 5. use an array method on deck to remove the last object in deck. using let, declare a variable called currentCard and assign it this value.
