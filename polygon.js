function Polygon() 
{
    // name and icon
    this.icon = "assets/images.png";
    this.name = "Polygon";
    
  
    // calling the variables for the shape
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    var sides = 5; 
    var edit;
  
    this.draw = function() 
    {
      // if mouse is pressed
      if (mouseIsPressed) 
      {
        if (startMouseX == -1) 
        {
          startMouseX = mouseX;
          startMouseY = mouseY;
          drawing = true;
          loadPixels();
        } 
        else 
        {
          updatePixels();
          noFill();
          strokeWeight(2);
          var radius = dist(startMouseX, startMouseY, mouseX, mouseY);
          var angle = TWO_PI / sides;
          beginShape();
          for (var i = 0; i < sides; i++) 
          {
            var x = startMouseX + cos(i * angle) * radius;
            var y = startMouseY + sin(i * angle) * radius;
            vertex(x, y);
          }
          endShape(CLOSE);
        }
      } 
      else if (drawing) 
      {
        drawing = false;
        startMouseX = -1;
        startMouseY = -1;
      }
    }

    this.clicked = function()
    {
        if(toolbox.selectedTool == this)
        {
            edit_button.show();

        }
       
    }
  
  }

  
  