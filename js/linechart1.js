var ctx2 = document.getElementById('lineChart1');

var lineChartTitle = "";
var lineChartXLabels = ['June','July','August','September','October','November','December'];
var lineChartData = [65, 59, 80, 81, 56, 55, 40];

var lineChartXLabels30 = ["Sept 1","Sept 2","Sept 3","Sept 4","Sept 5","Sept 6","Sept 7","Sept 8","Sept 9","Sept 10","Sept 11","Sept 12","Sept 13","Sept 14","Sept 15","Sept 16","Sept 17","Sept 18","Sept 19","Sept 20","Sept 21","Sept 22","Sept 23","Sept 24","Sept 25","Sept 26","Sept 27","Sept 28","Sept 29","Sept 30"];
var lineChartData30 = [97,29,67,33,89,90,49,41,	62,	29,	40,	71,	38,	71,	97,	56,	52,	34,	66,	59,	71,	52,	30,	63,	48,	65,	67,	76,	28, 53];

var myChart1 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: lineChartXLabels30,
        datasets: [{
            // label: lineChartTitle,
            data: lineChartData30,
            fill: false,
            borderColor: 'rgb(22, 71, 156)',
            tension: 0.1,
            pointRadius: 6,
            pointBorderWidth: 3,
            pointBackgroundColor: 'rgb(255, 255, 255)',
            fill:{
                target: 'origin',
                above: 'rgba(22, 71, 156, 0.1)'
              }
        }]
    },
    options: {
        plugins: {
            legend: {
            display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                  maxTicksLimit: 6
                }
            }
        },
        maintainAspectRatio: false
    }
});


