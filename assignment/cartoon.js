function draw() {
    var canvas = document.getElementById("mycanvas");
    var c = canvas.getContext("2d");

    //background color
    c.fillStyle = "lightblue";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //ground color
    c.fillStyle = "#664400";
    c.fillRect(0, 450, canvas.width, canvas.height);

    //title
    c.fillStyle = "black";
    c.font = "30px Arial";
    c.fillText("My Cartoon", 425, 30);

    //sun
    c.fillStyle = "yellow";
    c.arc(900, 100, 50, 0, 2 * Math.PI)
    c.fill();

    //grass
    c.fillStyle = "#009933";
    c.beginPath();
    c.moveTo(0, 450);
    for (var i = 0; i < canvas.width / 25; i++) {
        c.lineTo(50 * i + 25, 425);
        c.lineTo(50 * i + 50, 450);
    }
    c.fill();

    //wall
    c.fillStyle = "#cc9900";
    c.fillRect(350, 300, 300, 150);

    //chimney
    c.fillRect(570, 220, 30, 70);

    //ceiling
    c.beginPath();
    c.moveTo(350, 300);
    c.lineTo(500, 200);
    c.lineTo(650, 300);
    c.fillStyle = "red";
    c.fill();

    //door
    c.fillStyle = "black";
    c.fillRect(485, 400, 30, 50)

    //door handle
    c.fillStyle = "white";
    c.beginPath();
    c.arc(510, 425, 2, 0, 2 * Math.PI)
    c.fill();

    //windows
    c.fillRect(400, 350, 40, 40);
    c.fillRect(560, 350, 40, 40);

    //left window broader
    c.beginPath();
    c.lineWidth = 2;
    c.moveTo(400, 350);
    c.lineTo(400, 390);
    c.lineTo(440, 390);
    c.lineTo(440, 350);
    c.lineTo(400, 350);

    c.moveTo(420, 350);
    c.lineTo(420, 390);

    c.moveTo(400, 370);
    c.lineTo(440, 370);

    //right window broader
    c.moveTo(560, 350);
    c.lineTo(600, 350);
    c.lineTo(600, 390);
    c.lineTo(560, 390);
    c.lineTo(560, 350);

    c.moveTo(580, 350);
    c.lineTo(580, 390);

    c.moveTo(560, 370);
    c.lineTo(600, 370);

    c.stroke();
}
document.addEventListener('DOMContentLoaded', draw);