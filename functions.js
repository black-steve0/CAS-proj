function togglePActions() {
    if (document.getElementById("profile-actions").style.visibility == "hidden") {
        document.getElementById("profile-actions").style.visibility = "visible";
    }
    else {
        document.getElementById("profile-actions").style.visibility = "hidden";
    }
}

function toggleSidebar() {
    if (document.getElementById("sidebar").getBoundingClientRect().width == 80) {
        document.getElementById("sidebar").style.width = "300px";
    } else {
        document.getElementById("sidebar").style.width = "80px";
    }
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.send(null);
    return rawFile.responseText;
  }

document.write(readTextFile("base.html"))
'<div id="sidebar"> <div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">home</div><div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">files</div><div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">i/o</div><div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">gdc help</div><div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">about us</div><div class="sidebar-content"><img class="sidebar-img" src="images/OIP.jfif">help</div></div><div id="header"><div class="left"><div class="sidebar-button" onclick="toggleSidebar()"><img src="images/sidebar.png" class="sidebar-button-image"></img><div class="button"></div><div class="button-action"></div></div><a class="home-button" href="index.html"></a></div><div class="middle"></div><div class="right"><div id="profile-actions"><div class="info"><div class="profile-picture"></div><div class="info-username-gmail"><div class="username">Username</div><div class="email">example@gmail.com</div></div></div><div class="action" onclick="location.href="pages/profile.html";"><img class="action-image" src="images/profile.png"></img><div class="action-text">Profile</div></div><div class="action" onclick="location.href="pages/settings.html";"><img class="action-image" src="images/config.png"></img><div class="action-text">Settings</div></div><div class="action" onclick="location.href="pages/about.html";"><img class="action-image" src="images/about.png"></img><div class="action-text">About</div></div><div class="action" onclick="location.href="pages/help.html";"><img class="action-image" src="images/help.png"></img><div class="action-text">Help</div></div></div><div class="profile" onclick="togglePActions()"></div></div></div><div id="page"></div><div id="footer"></div>'
