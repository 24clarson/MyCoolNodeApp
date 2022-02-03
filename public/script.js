function dropDownLabs() {
    document.getElementById("dropDownLabs").classList.toggle("showlabs");
  }
function dropDownInfo() {
  document.getElementById("dropDownInfo").classList.toggle("showinfo");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnlabs')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentlabs");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showlabs')) {
          openDropdown.classList.remove('showlabs');
        }
      }
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtninfo')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentinfo");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showinfo')) {
          openDropdown.classList.remove('showinfo');
        }
      }
    }
  }
