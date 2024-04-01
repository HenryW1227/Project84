cv = document.getElementById("mycanvashehehe")
ctx = cv.getContext("2D")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg(); // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

cv.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey()
		}

		if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey()
		}

		if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey()
		}
		
		if(keyPressed == 17)
		{
			specialkey()
		}

		if(keyPressed == 18)
		{
			specialkey()
		}

		if(keyPressed == 27)
		{
			specialkey()
		}

		else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	document.getElementById("d1").innerHTML="You pressed an alphabet key"; 
	img_image="Alpkey.png";
	add()
}
function numberkey()
{
	document.getElementById("d1").innerHTML="You pressed a number key"; 
	img_image="numkey.png";
	add()
}
function arrowkey()
{
	document.getElementById("d1").innerHTML="You pressed an arrow key"; 
	img_image="Arrkey.png";
	add()
}
function specialkey()
{
	document.getElementById("d1").innerHTML="You pressed an alphabet key"; 
	img_image="spkey.png";
	add()
}
function otherkey()
{
	document.getElementById("d1").innerHTML="You pressed a special key"; 
	img_image="otherkey.png";
	add();
}
	
