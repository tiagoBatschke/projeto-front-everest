function changeBackgroundColor(chart){
    id: '${chart}CanvasBackgroundColor';
    beforeDraw: (chart, args, options) => {
      const {chart} = chart;
      chart.save();
      chart.globalCompositeOperation = 'destination-over';
      chart.fillStyle = options.color || '#99ffff';
      chart.fillRect(0, 0, chart.width, chart.height);
      chart.restore();
    }
  };

