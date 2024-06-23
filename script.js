document.addEventListener("DOMContentLoaded", () => {
  // Show the welcome screen when the page loads
  document.getElementById("welcomeScreen").style.display = "flex";

  // Function to update the time
  function updateTime() {
      const currentTime = new Date().toLocaleTimeString();
      document.getElementById("time").innerText = currentTime;
  }

  // Update the time every second
  setInterval(updateTime, 1000);
  updateTime();  // Initial call to display the time immediately on load

  // Function to make the element draggable
  function makeElementDraggable(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      if (elmnt.querySelector(".windowHeader")) {
          elmnt.querySelector(".windowHeader").onmousedown = dragMouseDown;
      } else {
          elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
      }
  }

  // Make the windows draggable
  makeElementDraggable(document.getElementById("welcomeScreen"));
  makeElementDraggable(document.getElementById("educationScreen"));

  // Handle close buttons
  document.getElementById("welcomeClose").onclick = function() {
      document.getElementById("welcomeScreen").style.display = "none";
  }

  document.getElementById("educationClose").onclick = function() {
      document.getElementById("educationScreen").style.display = "none";
  }

  // Handle education icon click to show education screen
  document.getElementById("education").onclick = function() {
      document.getElementById("educationScreen").style.display = "flex";
  }
});
