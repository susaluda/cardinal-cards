var timerID = setInterval("document.getElementById('imgChange').src = imageChange();", 5000); //Interval timer changes image every 5 seconds

function imageChange() {
	// place your images in this array
	var random_images = ['Aurora-Borealis.png', 'Autumn-Trees.png', 'ballerina-jump.png', 'Bird.png', 'Castle.png', 'Chunky-Christmas.png', 'Cottage.png', 'Forest-Meadow.png', 'Hippo.png', 'Owlie.png', 'Rose.png', 'snowycottage.png', 'Squirrel.png', 'Swans.png', 'Whale.png'];
	
	var num = Math.floor( Math.random() * random_images.length );
    var img = random_images[ num ];
    imgSrc = 'images/' + img;
	return(imgSrc);
} // end function imageChange

function stopTimer() {
		clearInterval(timerID);
} 
