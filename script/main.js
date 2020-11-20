function myFunction() {
    var showhide = document.getElementById('navlinks');
    var swh = document.getElementById('bars_')
    var crs = document.getElementById('cross_')
    var btnn = document.getElementById('btn')

    if (showhide.style.display === "block") {
        showhide.style.display = "none";
        swh.style.display = "block";
        crs.style.display = "none";
        btnn.style.display = "block"
        btnn.style.zIndex = "2000"
    } else {
        showhide.style.display = "block";
        crs.style.display = "block";
        swh.style.display = "none";
        btnn.style.display = "none"
    }
}