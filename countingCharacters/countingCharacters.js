//Name: Andre Blankholm
//Date: 4/20/2020
//Last date revised: 5/04/2020


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
	
	return count++;
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

var friends = [ "Aneki", "Quill", "Clarity", "Sleepy", "Roger", "DM Crimson" ];

var team1 = new Array();
var team2 = new Array();

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
       team1.push (friends[i]);
    } else {
      team2.push(friends[i]);

    }
}

var friends = ["Aneki", "Quell", "Charity", "Sleepy", "Roghar", "DM Crimson" ];

var team1 = new Array();
var team2 = new Array();




































