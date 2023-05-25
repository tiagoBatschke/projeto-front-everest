const ctx = document.getElementById('myChart');

var barColors = [
  "rgba(20,75,133)",
  "rgba(42,139,242)",
  "rgba(88,165,245) ",
  "rgba(0,119,182)",
  ,
];
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: '# of Votes',
        backgroundColor: barColors,
        data: [12, 19, 3, 5],
        borderWidth: 0
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        
      },

    
  }});