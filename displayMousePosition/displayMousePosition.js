//Name: Andre Blankholm
//Date: 7/16/2020
//Last date revised: 7/19/2020



var isMouseTracking = false;

function updateMousePosition() {
		if (isMouseTracking) {
			var positionX = document.getElementById("mousePositionX");
        positionX.innerText = event.clientX;
        var positionY = document.getElementById("mousePositionY");
        positionY.innerText = event.clientY;
    }
}

function toggleTracking() {
	isMouseTracking = !isMouseTracking;
	if (isMouseTracking) {
        document.getElementById("trackingStatus")
            .innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus")
            .innerText = "NOT TRACKING";
    }
}
















