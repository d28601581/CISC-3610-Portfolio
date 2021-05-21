function draw() {
    var ctx = document.getElementById("doughnut-chart").getContext('2d');

    var a = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Olivia", "Emma", "Chloe", "Sophia", "Mia", "Emily", "Hannah", "Charlotte", "Ella", "Isabella"],
            datasets: [{
                label: "Female Baby Names",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "red", "black", "grey", "blue", "pink"],
                data: [136, 109, 103, 86, 79, 78, 73, 57, 49, 46]
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Top 10 female baby names in Asian and Pacific Islander born in 2017'
            }
        }
    });

    var ctx2 = document.getElementById("bar-chart-horizontal").getContext('2d');

    var b = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: ["Muhammad", "Ethan", "Ryan", "Jayden", "Aiden", "Lucas", "Liam", "Mason", "William", "Daniel"],
            datasets: [{
                label: "Male Baby Names",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "red", "black", "grey", "blue", "pink"],
                data: [157, 146, 143, 136, 129, 125, 83, 67, 65, 62]
            }]
        },
        options: {
            legend: { display: false },

            title: {
                display: true,
                text: 'Top 10 male baby names in Asian and Pacific Islander born in 2017'
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', draw);