const ctx = document.getElementById('myChart');

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

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
      labels: ['SP', 'RJ', 'AM', 'MG'],
      datasets: [{
        label: '# of Votes',
        backgroundColor: barColors,
        data: [12, 19, 3, 5],
        borderWidth: 0
        
      }]
    },
    options: {
      plugins: {
        customCanvasBackgroundColor: {
          color: '#FFF',
        }
      }
    },
    plugins: [plugin],
  });