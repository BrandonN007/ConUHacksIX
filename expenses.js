// Annual Expenses chart
document.addEventListener("DOMContentLoaded", function () {
    var myContext = document.getElementById("expensesChart").getContext('2d');
    
    var foodExpenses = Array.from({ length: 5 }, () => Math.floor(Math.random() * 800) + 100);
    var transportExpenses = Array.from({ length: 5 }, () => Math.floor(Math.random() * 200) + 60);
    var clothesExpenses = Array.from({ length: 5 }, () => Math.floor(Math.random() * 300));
    var entertainmentExpenses = Array.from({ length: 5 }, () => Math.floor(Math.random() * 500) + 50);
    
    var myChart = new Chart(myContext, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Food',
                backgroundColor: "#fff8e0",
                data: foodExpenses,
            }, {
                label: 'Transport',
                backgroundColor: "#D6EFFF",
                data: transportExpenses,
            }, {
                label: 'Clothes',
                backgroundColor: "#FED18C",
                data: clothesExpenses,
            }, {
                label: 'Entertainment',
                backgroundColor: "#FE654F",
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
    
    
    
    
    
    
    
    
    
    
    
    
    
const ctx = document.getElementById('currentMonthlyExpenseChart').getContext('2d');

const expenseData = {
    labels: ['Expenses'],  // Label for the horizontal bars
    datasets: [
    {
        label: 'Food',
        data: [0],
        backgroundColor: '#fff8e0',  // Red
    },
    {
        label: 'Transport',
        data: [0],
        backgroundColor: '#D6EFFF',  // Green
    },
    {
        label: 'Clothes',
        data: [0],
        backgroundColor: '#FED18C',  // Blue
    },
    {
        label: 'Entertainment',
        data: [0],
        backgroundColor: '#FE654F',  // Yellow
    }
    ]
};
    
const expenseChart = new Chart(ctx, {
    type: 'bar',
    data: expenseData,
    options: {
    responsive: true,
    indexAxis: 'y',  // This makes the bars horizontal
    scales: {
        x: {
        stacked: true,  // Stack the bars horizontally
        beginAtZero: true  // Start the x-axis at zero
        },
        y: {
        stacked: true,  // Stack the bars vertically (this allows horizontal stacking)
        }
    },
    plugins: {
        legend: {
        position: 'top',
        },
        tooltip: {
        callbacks: {
            label: function(context) {
            const label = context.dataset.label || '';
            const value = context.raw;
            return label + ': $' + value;
            }
        }
        }
    }
    }
});
    
    
    
    
    
    
    
function updateChart() {
    const foodValue = document.getElementById('foodExpense').value;
    const transportValue = document.getElementById('transportExpense').value;
    const clothesValue = document.getElementById('clothesExpense').value;
    const entertainmentValue = document.getElementById('entertainmentExpense').value;

    // Update the chart data dynamically
    expenseChart.data.datasets[0].data = [foodValue];
    expenseChart.data.datasets[1].data = [transportValue];
    expenseChart.data.datasets[2].data = [clothesValue];
    expenseChart.data.datasets[3].data = [entertainmentValue];

    // Update the chart
    expenseChart.update();
}

// Attach event listeners to input fields to update chart on key press
document.getElementById('foodExpense').addEventListener('input', updateChart);
document.getElementById('transportExpense').addEventListener('input', updateChart);
document.getElementById('clothesExpense').addEventListener('input', updateChart);
document.getElementById('entertainmentExpense').addEventListener('input', updateChart);
        











// Monthly Pie charts
document.addEventListener("DOMContentLoaded", function () {
            
            let data = {
                labels: ['Food', 'Transport', 'Clothes', 'Entertainment'],
                datasets: [{
                    label: 'Expenses Per Category Per Month',
                    data: [foodExpenses[foodExpenses.length-1], 
                            transportExpenses[transportExpenses.length-1], 
                            clothesExpenses[clothesExpenses.length-1], 
                            entertainmentExpenses[entertainmentExpenses.length-1]],
                    backgroundColor: ['#fff8e0', '#D6EFFF', '#FED18C', '#FE654F'],
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
                        text: 'Your expenses from last month'
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