
document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const headers = table.querySelectorAll("th");
    let sortDirection = true;

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            sortTableByColumn(table, index, sortDirection);
            sortDirection = !sortDirection;
        });
    });
});

function sortTableByColumn(table, column, ascending = true) {
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
        const cellA = a.children[column].textContent.trim();
        const cellB = b.children[column].textContent.trim();

        const valueA = isNaN(cellA) ? cellA : parseFloat(cellA);
        const valueB = isNaN(cellB) ? cellB : parseFloat(cellB);

        return (valueA > valueB ? 1 : -1) * (ascending ? 1 : -1);
    });

    rows.forEach(row => tbody.appendChild(row));
}

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('algorithmComparisonChart').getContext('2d');

    // Data for each algorithm's performance metrics
    const data = {
        labels: ['Logistic Regression', 'Decision Tree', 'Naive Bayes'],
        datasets: [
            {
                label: 'Accuracy',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [0.6009759641198952, 0.8461198319699315, 0.5649537285619531] 
            },
            {
                label: 'Precision',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                data: [0.5554752053030426, 0.8429270596921878, 0.5536851988701811] 
            },
            {
                label: 'Recall',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [0.6009759641198952, 0.8461198319699315, 0.5649537285619531] 
            },
            {
                label: 'F1 Score',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: [0.5459865504723973, 0.8420654514294496, 0.5246674402246875] 
            }
        ]
    };

    // Chart configuration
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Comparison of Classification Algorithm Metrics'
                }
            }
        }
    };

    // Create and render the chart
    new Chart(ctx, config);
});
