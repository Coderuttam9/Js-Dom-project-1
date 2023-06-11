  // dom Selection 
  window.onload = () => {

      finalColor()
  }





  function finalColor() {
      const btn = document.getElementById("btn");
      const container = document.querySelector(".container");
      const input = document.getElementById("input");

      btn.addEventListener('click', function() {
          const bgColor = generateRGAColor()
          container.style.backgroundColor = bgColor;
          input.value = bgColor;
      })


  };

  // Color code generator 
  function generateRGAColor() {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  }