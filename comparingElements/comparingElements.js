//Name: Andre Blankholm
//Date: 05/18/2020
//Date of revision: 05/20/2020

var testArray = [ 0, 1, 1, "1", 3, "311" ];

for ( var arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPostion++ ) {
	
	var currentElement = testArray[ arrayPosition ];
	var nextElement = testArray[ arrayPosition + 1 ];
	
	console.log( "Testing" + currentElement + "and" + nextElement + "(greater than):" + ( currentElement > nextElement ));
	console.log( "Testing" + currentElement + "and" + nextElement + "(less than or equal to):" + ( currentElement <= nextElement ));
	
	if ( currentElement == nextElement ) {
		cosole.log("Testing" + currentElement + "and" + nextElement + "(strictly equal to):" + ( currentElement === nextElement ));
		
		if ( currentElement !== nextElement ) {
			
			console.log( currentElement + "is" + typeof( currentElement ));
			console.log( nextElement + "is" + typeof( nextElement ));
		}


	} else {
		
		console.log( "Testing" + currentElement + "and" + nextElemnet + "(equal to ): false");
	
	}
}





















