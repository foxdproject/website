
      

        Plotly.d3.json('http://127.0.0.1:5500/data.json', function(err,figure) 
        { 
    

        Plotly.newPlot('myDiv', figure.data, figure.layout)
     });
