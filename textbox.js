function TextBox() 
{
   this.name = "Textbox";
   this.icon = "assets/text-box-png-22.png";

   this.fonts = ['Algerian','Aptos Display','Arial','Bookman Old Style','Bondoni MT','Bradley Hand ITC','Candara Light','Cascadia Mono','Courier New','Times New Roman'];

   this.selectedFont = 'Algerian';
   this.textEntered = '';


 

   this.loadFonts = function()
   {
      for (var i = 0; i < this.fonts.length;i++)
       {
          fontsDropDown.option(this.fonts[i]);
       }
   }
   
   this.draw = function()
   {
      
      if (mouseIsPressed) 
      {
        
         // Check if the mouse is inside the canvas
         if (mouseX >= 20 && mouseX <= width - 20 && mouseY >= 50 && mouseY <= height - 50) 
         {
            this.selectedFont = fontsDropDown.value();
            textFont(this.selectedFont);
            textSize(24);
            textAlign(LEFT);
            this.textEntered = textInput.value();
            fill(colourP.selectedColour);
            text(this.textEntered,20,50,width - 40, height-40);
            

           console.log(this.textEntered);
           
         
         }
       }
   }



   this.clicked = function()
   {
      if(toolbox.selectedTool == this)
      {
         textInput.show();
         fontsDropDown.show();
         editTextButton.show();

      
      }
      else
      {
         textInput.hide();
         fontsDropDown.hide();
         editTextButton.hide();
      }
   }

   this.loadFonts();
}