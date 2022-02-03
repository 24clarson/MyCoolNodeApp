function dropDownLabs() {
    document.getElementById("dropDownLabs").classList.toggle("show");
  }
function dropDownInfo() {
  document.getElementById("dropDownInfo").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.drop-button-info')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentinfo");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.drop-button-labs')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentlabs");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
