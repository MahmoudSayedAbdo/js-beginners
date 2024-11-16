// add comment new
var quotesList = [
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
    '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
    '“A room without books is like a body without a soul.”',
    '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    '“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”',
    '“Be the change that you wish to see in the world.”',
    '“In three words I can sum up everything I\'ve learned about life: it goes on.”',
    '“Don\'t walk in front of me… I may not follow Don\'t walk behind me… I may not lead Walk beside me… just be my friend”',
    '“If you tell the truth, you don\'t have to remember anything.”',
    '“A friend is someone who knows all about you and still loves you.”',
    '“To live is the rarest thing in the world. Most people exist, that is all.”',
]

var autherList = [
    '― Oscar Wilde',
    '― Frank Zappa',
    '― Albert Einstein',
    '― Marcus Tullius Cicero',
    '― Bernard M. Baruch',
    '― Dr. Seuss',
    '― Mahatma Gandhi',
    '― Robert Frost',
    '― Albert Camus',
    '― Mark Twain',
    '― Elbert Hubbard',
    '― Oscar Wilde',
]

var quoteOutput = document.getElementById("quoteOutput")
var authorOutput = document.getElementById("authorOutput")


var previousNumber = null; 


function chickRandom() {
    var newNumber;
  do {
    newNumber = Math.floor(Math.random()*10); 
  } while (newNumber === previousNumber); 
  
  previousNumber = newNumber; 
  return newNumber;
}

function generateQuote(){
    
    numRandom = chickRandom()
    quoteOutput.innerHTML = quotesList[numRandom];
    authorOutput.innerHTML = autherList[numRandom];
}