function draw() {
    var canvas = document.getElementById("mycanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = "lightblue";
    c.fillRect(0, 0, canvas.width, canvas.height);
}
document.addEventListener('DOMContentLoaded', draw);