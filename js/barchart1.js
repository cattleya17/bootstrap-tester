

var ctx1 = document.getElementById('barChart1');
var myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'TH', 'F', 'SA', 'SU'],
        datasets: [{
            label: '# of Votes',
            //CHART DATA
            data: [12, 19, 8, 10, 5, 9, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    plugins: [ChartDataLabels],
    options: {
        tooltips: {
            enabled: false
        },
        plugins: {
            legend: {
            display: false
            },
            datalabels: {
                backgroundColor: 'transparent',
                color: 'black',
                padding: '10',
                anchor: 'end',
                clamp: 'false',
                align: 'top',
                offset: '8'
              }
            
        },
        scales: {
            y: {
                beginAtZero: true,
                display:false,
                grid:{
                    display:false
                },
                max: 30
            },
            x: {
                grid:{
                 display:false
                     }
            }
        },
        maintainAspectRatio: false,
        showAllTooltips: false
    }
});

