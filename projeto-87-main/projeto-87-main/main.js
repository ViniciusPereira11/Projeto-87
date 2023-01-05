
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

var canvas = new fabric.Canvas('Canvas')

function new_Image(getImage)
{
	fabric.Image.fromURL(get_image, function(Img){
		bolck_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		blockImageObject.scaleToHeight(blockImageHeight);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		Canvas.add(blockImageObject);
	});
}
{
	// para enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(e.keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_Image('rangerVermelho.png');
		console.log("r");
	}   
	if(e.keyPressed == '86')
	{
		// enviar ranger verde
		addRanger('rangerVerde.png');
		console.log("r")
	}
	
	
}

