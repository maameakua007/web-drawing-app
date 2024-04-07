function ZigZag()
{
  /* commented out code is blocks of code that didnt work initially
   they have been removed 
   code executed  */
    this.icon = "assets/832044.png"
    this.name = "zigzag";

    var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

    var numPoints = 10;
    // distance between points
    var spacing;


    this.draw = function()
    {
       // Drawing the zigzags when mouse is pressed 
       if(mouseIsPressed)
       {
            if(startMouseX == -1)
            {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                // spacing declaration
                spacing = width / (numPoints - 1);
                // saving current pixels 
                loadPixels();
            }
            else
            {
                // updating pixels 
                updatePixels();
                // nested for loops
                for(var i = 0;i < numPoints; i++)
                {
                    var x1 = startMouseX + i * spacing;
                    var y1 = startMouseY + (i % 2 == 0 ? 20: -20);
                    var x2 = startMouseX + (i + 1) * spacing;
                    var y2 = startMouseY + ((i + 1) % 2 == 0 ? 20: -20);

                    line(x1,y1,x2,y2);

                }
            

                
            }
			
       }
       else if(drawing)
       {
          // final step(explained in template)
          /* This is an attempt on the line tool to create zigzags 
          They have been created effectively 
          */
          loadPixels();
          drawing = false;
          startMouseX = -1;
          startMouseY = -1;
       }


    }
    
}