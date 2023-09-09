function replaceText() {
    document.getElementById("content").innerText = "Welcome to Elevation Academy";
   }
   function replace() {
      var heading = document.getElementById("heading");
      heading.innerText = "Welcome to Elevation Academy";
      heading.style.color = "lightpink";
   }
   function Direction() {
      var card = document.getElementById("container");
      
      if (card.style.flexDirection === "row") {
          card.style.flexDirection = "column";
      } else {
          card.style.flexDirection = "row";
      }
  }
  setInterval(function() {
      var clockElement = document.getElementById("clock");
      var currentTime = new Date();
      var timeString = currentTime.toLocaleTimeString();
      clockElement.innerHTML = timeString;
  }, 1000);