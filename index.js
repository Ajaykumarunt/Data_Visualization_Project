const ctx = document
  .getElementById('myChart')
  .getContext('2d');
const svgChart = document.getElementById('svgChart');
let myChart;

function hideAllDisplays() {
  if (myChart) {
    myChart.destroy();
    myChart.canvas.style.display = 'none';
  }
  svgChart.style.display = 'none';
}

function displaySVGChart(filePath) {
  svgChart.src = filePath; // Set the SVG file path
  svgChart.style.display = 'block'; // Display the SVG image
  svgChart.onerror = function () {
    alert(
      'Failed to load the SVG file. Please check the file path and ensure the file is accessible.',
    );
  };
}

document
  .getElementById('DailyNewCOVID-19CasesWorldwideBtn')
  .addEventListener('click', function () {
    hideAllDisplays();
    displaySVGChart(
      'https://raw.githubusercontent.com/Sannihitha23/Project/main/d4.svg',
    ); // Replace with actual path to Bar Chart SVG
  });

document
  .getElementById('scatterPlotBtn')
  .addEventListener('click', function () {
    hideAllDisplays();
    displaySVGChart(
      'https://raw.githubusercontent.com/Sannihitha23/Project/main/d1.svg',
    ); // Replace with actual path to Scatter Plot SVG
  });

document
  .getElementById('heatmapBtn')
  .addEventListener('click', function () {
    hideAllDisplays();
    displaySVGChart(
      'https://raw.githubusercontent.com/Sannihitha23/Project/main/d3.svg',
    ); // Replace with actual path to Heatmap SVG
  });

document
  .getElementById('ComparisonofOrdersbyMonthYearBtn')
  .addEventListener('click', function () {
    hideAllDisplays();
    displaySVGChart(
      'https://raw.githubusercontent.com/Sannihitha23/Project/main/d5.svg',
    ); // Replace with actual path to  Comparison of Orders by Month-YearBtn SVG
  });

document
  .getElementById('altairChartBtn')
  .addEventListener('click', function () {
    hideAllDisplays();
    displaySVGChart(
      'https://raw.githubusercontent.com/Sannihitha23/Project/main/d2.svg',
    ); // Use the file path for the uploaded Altair chart
  });
getElementById('myChart').getContext('2d');

function drawBarChart() {
  if (myChart) {
    myChart.destroy();
  }
  svgChart.style.display = 'none'; // Hide the SVG chart
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange',
      ],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  myChart.canvas.style.display = 'block'; // Display the Chart.js canvas
}

function showScatterPlotSVG() {
  if (myChart) {
    myChart.destroy();
    myChart.canvas.style.display = 'none'; // Hide the Chart.js canvas
  }
  svgChart.src =
    'https://raw.githubusercontent.com/Sannihitha23/Project/main/d1.svg'; // Ensure this path is correct
  svgChart.style.display = 'block'; // Display the SVG image
  svgChart.onerror = function () {
    alert(
      'Failed to load the SVG file. Please check the file path and ensure the file is accessible.',
    );
  };
}

document
  .getElementById('barChartBtn')
  .addEventListener('click', drawBarChart);
document
  .getElementById('scatterPlotBtn')
  .addEventListener('click', showScatterPlotSVG);
