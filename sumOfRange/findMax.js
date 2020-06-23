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



var originalArray = [ 1, 2, 3, 9, 100, 101, 105, 300, 299, 12 ];

function findMax(theArray) {
	var maxNumber = 0;

	for ( var i = 0; i < theArray.length; i++ ) {
   var currentNumber = theArray[i];
   
   if ( currentNumber > maxNumber ) {
   maxNumber = currentNumber;
   }
  }
  console.log( maxNumber )
 
  }
 
 findMax(originalArray);







var someArrayPassed =[ 17, 42, 311, 5, 9, 10 ,28, 7, 6 ];


function findMax(newArray) {
	
	var highestNumber = 0;
	
	for ( arrayPosition = 0; arrayPosition < someArrayPassed.length ; arrayPosition++ ) { 
		
		var currentElement = someArrayPassed[arrayPosition];
		
		if (currentElement > highestNumber) {
			highestNumber = currentElement;
		}
	}
	
    console.log(highestNumber);	
	
}
	
findMax(someArrayPassed);	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	