$(document).ready(function () {

    var apiKey = "2AC3F36B-D425-4022-831C-437BF2C53C2Fa"


    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var equeryURL = 'http://apps.bea.gov/api/data?&UserID=' + apiKey + '&method=GetData&datasetname=Regional&TableName=SQINC1&GeoFIPS=STATE&LineCode=3&Year=2018Q4&ResultFormat=JSON'

    queryURL = proxyURL + equeryURL

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for(i = 0; i < response.BEAAPI.Results.Data.length-32; i+=4){
            
            testState = new State(response.BEAAPI.Results.Data[i].GeoName, response.BEAAPI.Results.Data[i].DataValue);
            states.push(testState);
        }

        robbiesState = new State("Im a bitch",69000);
        states.push(robbiesState);

        
    })

    

    var ctx = document.getElementById('income-chart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Average Income',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: "Average Income",
                fontSize: 30
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    $("#income-chart").append(myChart);





    
        
 

var states = [];

class State {
    constructor(name, income) {
        this.name = name;
        this.income = income;
    }
}

$("#searchCity").on("click", function (event) {

    // var specInfo = stateInfo.replace(',', '');
    // specInfo = parseInt(specInfo);

    myChart.data.datasets[0].data.push(parseInt(states[0].income.replace(',', '')));
    myChart.data.labels.push(states[0].name)

    

    console.log("Hi Robbie");
    event.preventDefault();
    var state = $("#state").val().trim();
    var stateLower = state.toLowerCase();
    console.log(stateLower);

    for(i = 0; i < states.length; i++){
        console.log(states[i].name.toLowerCase());
        if(states[i].name.toLowerCase() == stateLower){
            myChart.data.datasets[0].data.push(parseInt(states[i].income.replace(',', '')));
            myChart.data.labels.push(states[i].name)
        }
    }

    // console.log(state);
    // console.log(stateLower);
    // console.log(states[states.length -1].income);

})

})
