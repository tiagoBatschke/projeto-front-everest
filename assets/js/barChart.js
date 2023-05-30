google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Months', 'Sales', 'Expenses', 'Profit'],
      ['JAN', 1000, 400, 200],
      ['FEV', 1170, 460, 250],
      ['MAR', 660, 1120, 300],
      ['ABR', 1030, 540, 350],
      ['MAI', 1000, 400, 200],
      ['JUN', 1170, 460, 250],
      ['JUL', 660, 1120, 300],
      ['AGO', 1030, 540, 350],
      ['SET', 1000, 400, 200],
      ['OUT', 1170, 460, 250],
      ['NOV', 660, 1120, 300],
      ['DEZ', 1030, 540, 350]

    ]);

    var options = {
      chart: {
        title: 'Número de chats, vendas e não efetuadas total por mês',
       
      },
      colors: ['#2A8BF2', '#144B85', '#2A8BF2']
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }