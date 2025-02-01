document.addEventListener("DOMContentLoaded", function () {
var myContext = document.getElementById("expensesChart").getContext('2d');

var foodExpenses = Array.from({ length: 12 }, () => Math.floor(Math.random() * 800) + 100);
var transportExpenses = Array.from({ length: 12 }, () => Math.floor(Math.random() * 200) + 60);
var clothesExpenses = Array.from({ length: 12 }, () => Math.floor(Math.random() * 300));
var entertainmentExpenses = Array.from({ length: 12 }, () => Math.floor(Math.random() * 500) + 50);

var myChart = new Chart(myContext, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Food',
            backgroundColor: "#DAF7A6",
            data: foodExpenses,
        }, {
            label: 'Transport',
            backgroundColor: "#FFC300",
            data: transportExpenses,
        }, {
            label: 'Clothes',
            backgroundColor: "#FF5733",
            data: clothesExpenses,
        }, {
            label: 'Entertainment',
            backgroundColor: "#900C3F",
            data: entertainmentExpenses,
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Your expenses throughout the year'
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
})

});