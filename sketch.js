//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
// public variables for the stamp 
var stamp_img;
var stamp_slider;

//public variables for cut button 
var cut_button;
var select_mode;
var selected_area;
var selected_pixels;
// public variables for textbox 
var textInput;
var fontsDropDown;
var editTextButton
var editMode;









function preload()
{
	stamp_img = loadImage("assets/download.png");
}

function setup() {
	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

    // create slider 
	stamp_slider = createSlider(20,200,50);
	stamp_slider.parent("#stamp-slider");
	stamp_slider.hide();

    // cut button 
	cut_button = select("#cut");
	cut_button.hide();
	select_mode = 0;
	selected_area = {x:0, y:0 , w:100, h:100};

	cut_button.mousePressed(function(){
		if(select_mode == 0)
		{
			select_mode += 1;
			cut_button.html("cut");

			loadPixels();
		}
		else if(select_mode == 1)
		{
			select_mode += 1;
			cut_button.html("End Paste");

			// refreshing 
			updatePixels();

			//  storing
			selected_pixels = get(selected_area.x,selected_area.y,selected_area.w,selected_area.h);

			// white rectangle over it 
			push();
			fill(255);
			noStroke();
			rect(selected_area.x,selected_area.y,selected_area.w,selected_area.h);
			pop();
		}
		else if(select_mode == 2)
		{
			select_mode = 0;
			loadPixels();
			selected_area = {x:0,y:0,w:100,h:100};
			cut_button.html("Select Area");
		}
	});
	// Textbox
	textInput = createInput();
	textInput.position(80,450);
	textInput.hide();
	textInput.changed(function()
	{
		TextBox.textEntered = textInput.value();
	})


	fontsDropDown = createSelect();
	fontsDropDown.position(250,450);
	fontsDropDown.hide();

	fontsDropDown.changed(function(){
		var selectedFont = fontsDropDown.value();
		TextBox.selectedFont = selectedFont;
		textInput.style('font-family', selectedFont);
	});

	editTextButton = select("#text");
	editTextButton.hide();
	editMode = 0;

	editTextButton.mousePressed(function()
	{
		if(editMode == 0)
		{
			editMode += 1;
			editTextButton.html("Save Changes");

			textInput.value('');
			loadPixels();

			
		}
		else if(editMode == 1)
		{
			editMode = 0;
			loadPixels();

			TextBox.textEntered = textInput.value();
			editTextButton.html("Edit Text");
		}

	})

	
    //create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();
	
	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new Marker());
	toolbox.addTool(new Ellipses());
	toolbox.addTool(new Paint());
	toolbox.addTool(new SecondPaint());
	toolbox.addTool(new Rectangle());
	toolbox.addTool(new Stamp());
	toolbox.addTool(new Polygon());
	toolbox.addTool(new ZigZag());
	toolbox.addTool(new Eraser());
	toolbox.addTool(new CurveToTool());
	toolbox.addTool(new Cut());
	toolbox.addTool(new TextBox());
	
	
	
	background(255);

}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}


}

function mouseClicked() 
{

	 // Hide the slider if another tool is selected
	 if (toolbox.selectedTool !== null && toolbox.selectedTool !== toolbox.tools.stamp) 
	 {
		stamp_slider.hide();
	 }
	 
	 // Hide cut button when another tool is selected
	 if(toolbox.selectedTool !== null && toolbox.selectedTool !== toolbox.tools.cut)
	 {
		cut_button.hide();
	 }
	 
	
	// Call the clicked function of the selected tool
	if (toolbox.selectedTool.hasOwnProperty("clicked")) 
	{
		toolbox.selectedTool.clicked();
	}
	

	
}

function mousePressed()
{
	if(select_mode == 1)
	{
		selected_area.x = mouseX;
		selected_area.y = mouseY;
	}
	else if(select_mode == 2)
	{
		image(selected_pixels,mouseX,mouseY);
	} 

	
	
}

function mouseDragged()
{
	
	if(select_mode == 1)
	{
		var w = mouseX - selected_area.x;
		var h = mouseY - selected_area.y;

		selected_area.w = w;
		selected_area.h = h;
	}
}





