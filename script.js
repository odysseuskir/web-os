document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcomeScreen").style.display = "flex";
    function updateTime() {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById("time").innerText = currentTime;
    }

    setInterval(updateTime, 1000);
    updateTime(); 
  
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
  
    const windows = document.querySelectorAll(".window");
    windows.forEach(window => {
        makeElementDraggable(window);
    });
  
    document.getElementById("welcomeClose").onclick = function() {
        document.getElementById("welcomeScreen").style.display = "none";
    }

    document.getElementById("educationClose").onclick = function() {
        document.getElementById("educationScreen").style.display = "none";
    }

    document.getElementById("projectsClose").onclick = function() {
        document.getElementById("projectsScreen").style.display = "none";
    }

    document.getElementById("awardsClose").onclick = function() {
        document.getElementById("awardsScreen").style.display = "none";
    }

    document.getElementById("contactClose").onclick = function() {
        document.getElementById("contactScreen").style.display = "none";
    }
  
    document.getElementById("education").onclick = function() {
        document.getElementById("educationScreen").style.display = "flex";
    }

    document.getElementById("projects").onclick = function() {
        document.getElementById("projectsScreen").style.display = "flex";
    }

    document.getElementById("awards").onclick = function() {
        document.getElementById("awardsScreen").style.display = "flex";
    }

    document.getElementById("contact").onclick = function() {
        document.getElementById("contactScreen").style.display = "flex";
    }
});  