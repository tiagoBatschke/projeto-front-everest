google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);
var cssClassNames = {headerCell: 'bigAndBoldClass',
hoverTableRow: 'highlightClass'};


      function drawTable() {
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'aaaa');
        data.addColumn('number');
        data.addRows([
          ['Facebook', {v:38, f:'38%'}],
          ['Instagram', {v:20, f:'20%'}],
          ['Whatsapp', {v:19.9, f:'19.9%'}],
          ['Telegram', {v:12, f:'12%'}],
          ['Everest', {v:11.1, f:'11.1%'}],
         
  ]);
 

var table = new google.visualization.Table(document.getElementById('socialChart'));



var formatter = new google.visualization.BarFormat({width: 120, max: 100});
formatter.format(data, 1); // Apply formatter to second column

table.draw(data, {allowHtml: true, width: '40%', height: '100%'});

      }
      

      