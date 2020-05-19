// Name: Andre Blankholm
// Date: 4/20/2020
// Last date revised: 5/13/2020


function countingCharacters3(str, search){ 
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