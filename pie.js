document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let decemberExpenses = [
            foodExpenses[11], 
            transportExpenses[11], 
            clothesExpenses[11], 
            entertainmentExpenses[11]
        ];

        let data = {
            labels: ['Food', 'Transport', 'Clothes', 'Entertainment'],
            datasets: [{
                label: 'December Expenses',
                data: decemberExpenses,
                backgroundColor: ['#fff8e0', '#D6EFFF', '#FED18C', '#FE654F'],
                borderColor: 'black',
                borderWidth: 1
            }]
        };

        let options = {
            plugins: {
                title: {
                    display: true,
                    text: 'Your expenses from December'
                },
            }
        };

        let ctx = document.getElementById('pieChart').getContext('2d');

        let myPieChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });
    }, 500);
});
