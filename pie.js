document.addEventListener("DOMContentLoaded", function () {
            
            let data = {
                labels: ['Food', 'Transport', 'Clothes', 'Entertainment'],
                datasets: [{
                    label: 'Expenses Per Category Per Month',
                    data: [Math.floor(Math.random() * 800)+200, 
                            Math.floor(Math.random() * 200)+60, 
                            Math.floor(Math.random() * 400), 
                            Math.floor(Math.random() * 300)+100],
                    backgroundColor: ['yellow', 'blue', 'red', 'purple'],
                    borderColor: 'black',
                    borderWidth: 1
                }]
            };
    
            // Configuration options for the chart
            let options = {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Your expenses throughout the year'
                    },
                }
            };
    
            // Get the canvas element
            let ctx = document.getElementById('pieChart')
                .getContext('2d');
    
            // Create the bar chart
            let myBarChart = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: options
            });
    });