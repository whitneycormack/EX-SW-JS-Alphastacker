
// Create an array that contains the letters of the alphabet// step 1. fill the array

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
          "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log("alphabet = ", alphabet);

// The stackLetter function should accept the array as the sole argument
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */  ///  step 2. write the for loop

function stackLetters (theAlphabetArray) {

  var letters = "";   
  // empty string for new combinations (bucket)

    for (var i = 0; i < alphabet.length; i++){
    letters += alphabet[i];

  // console.log("letters inside of for loop", letters );
  // console.log("each letter", alphabet[i]);
  // console.log("type of", typeof(alphabet[i]) );
    
    if ((i + 1) % 3 === 0) {
      letters += " ";
    } 

    // % means remainder, so i is the counter variable divided by 3 = zero; since it doesn't coincide
    // with every 3rd letter, that's why we use i + 1 first

  console.log(letters);
  }

}

// Invoke the function and pass in the array
stackLetters(alphabet);


// 

// or you can do it this way....



// var alpha_length = alphabet.length;
// var stacked = [];
// function stack_letters () {
//    for (var i = 0; i < alpha_length; i++) {
//         stacked += alphabet[i];
//         console.log(stacked)
//         if ( i % 3 === 2 ) {
//             stacked += " ";
//         }
//    }
// }
// stack_letters(alphabet)










