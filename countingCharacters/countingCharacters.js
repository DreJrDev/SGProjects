//Name: Andre Blankholm
//Date: 4/20/2020
//Last date revised: 4/26/2020


function countingCharacters ( stringToCount ) { 
	console.log ( stringToCount + "has" + stringToCount.length + "characters." );
	}
	
function countingCharacters2( stringToCount, characterToFind ){
        var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++ ){
        if ( stringToCount[characterPosition] == characterToFind ){
            characterCount++;
        }
    }
	
	
    console.log( "String to search in: " + stringToCount );
    console.log( "Character to find: " + characterToFind );
    console.log( "Number of times the character appears: " + 
                  characterCount );
}

function countingCharacters3 (str, search){ 
	var count = 0; 
	var numChars = search.length; 
	var lastIndex = str.length - numChars; 
		for (var index = 0; index <= lastIndex; index++){
		     var current = str.substring(index, index + numChars); 
		        if (current == search){                         
                    count++;         
        }     
    }
	
	console.log("String to search in: " + str);
    console.log("Character to find: " + search);
    console.log("Number of times the character appears: " + count);
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

for ( var i = 0; i < 100; i++ ) {
console.log(rollDice() ); }

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}


























