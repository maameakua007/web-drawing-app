function Stamp()
{
   
   this.name = "stamp";
   this.icon = "assets/rubber_noun_002_31667.jpg";
   


   this.draw = function()
   {

       if(mouseIsPressed)
       {
          var controlStampSize =  stamp_slider.value();
          var stampX = mouseX;
          var stampY = mouseY;

          var imageSize = controlStampSize * 2; 
          image(stamp_img,stampX,stampY,imageSize);
       }
   }

   this.clicked = function()
   {
       // show or hide slider
       if(toolbox.selectedTool == this)
       {
         var canvasX = canvasContainer.position().x;
         var canvasY = canvasContainer.position().y;

         stamp_slider.position(canvasX,canvasY);
         stamp_slider.show();
       }
       else
       {
         stamp_slider.hide();
       }
   }
  
}
    
  
