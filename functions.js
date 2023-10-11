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
        document.getElementById("sidebar").style.width = "250px";
    } else {
        document.getElementById("sidebar").style.width = "80px";
    }
}
