var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 3, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 8, color: "purple" },
];

function draw() {
    var canvas = document.getElementById("mycanvas");
    var c = canvas.getContext("2d");

    c.fillStyle = "lightblue";
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.textAlign = 'center';
    for (let i = 0; i < 6; i++) {
        c.fillStyle = fruit[i].color;
        c.fillRect(i * 200, 500 - 20 * fruit[i].quantity, 200, fruit[i].quantity * 20);
        c.fill();
        c.fillStyle = "black";
        c.font = "30px Arial";

        c.fillText(fruit[i].name, i * 200 + 100, 475);
        c.fillText(fruit[i].quantity, i * 200 + 100, 450);
    }
}
document.addEventListener('DOMContentLoaded', draw);