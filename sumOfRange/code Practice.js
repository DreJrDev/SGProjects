var newArray = [ 1, 2, 5, 40, 8, 10, ];


function findMax(shit){ 
	var lastNumber = 0;

	for (i = 0; i < newArray.length; i++ ){
		
		var currentNumber = newArray[i];
		
		if ( currentNumber > lastNumber) {
			lastNumber = currentNumber;
		}
	}
	console.log('The largest number was ' + lastNumber);
}

findMax(newArray);










var newArray =[ 17, 42, 311, 5, 9, 10 ,28, 7, 6 ];


function findMax(someArrayPassed) {
	
	var highestNumber = 0;
	
	for ( arrayPosition = 0; arrayPosition < someArrayPassed.length ; arrayPosition++ ) { 
		
		var currentElement = someArrayPassed[arrayPosition];
		
		if (currentElement > highestNumber) {
			highestNumber = currentElement;
		}
	}
	
    console.log(highestNumber);	
	
}
	
findMax(newArray);	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	