fetch('http://127.0.0.1:5500/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(ids) {




    new Chart(document.getElementById("bar-chart"), {
        type: 'line',
        data: {
          labels: ids.map(function(id) {
                  return id.date;
                  }),
          datasets: [
            {
              label: "HashRate",
              //backgroundColor: 'rgb(255, 99, 132)',
             
              data: ids.map(function(id) {
                    return id.hash;
                    }),
            },
             {

 //             label: "date",
 //             //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
 //             data: ids.map(function(id) {
 //                   return id.diff;
 //                   }),
            },
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'SWhatever'
          }
        }   
        
    });

});    