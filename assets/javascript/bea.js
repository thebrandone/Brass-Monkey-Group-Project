$(document).ready(function () {

    var apiKey = "2AC3F36B-D425-4022-831C-437BF2C53C2Fa"


    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var equeryURL = 'http://apps.bea.gov/api/data?&UserID=' + apiKey + '&method=GetData&datasetname=Regional&TableName=SQINC1&GeoFIPS=STATE&LineCode=3&Year=2018Q4&ResultFormat=JSON'

    queryURL = proxyURL + equeryURL


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

    function empty(){
        myChart.data.datasets[0].data = [];
        myChart.data.labels = [];
    }





    $("#searchCity").on("click", function (event) {

        event.preventDefault();
        empty();
        var state = $("#state").val().trim();
        var stateLower = state.toLowerCase();
        console.log(state);
        console.log(stateLower);




        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var usaIncome = response.BEAAPI.Results.Data[2].DataValue;
            console.log(response)
            var avgInfo = usaIncome.replace(',', '');
            console.log(avgInfo)
            specInfo = parseInt(avgInfo);
            myChart.data.labels.push("USA")
            myChart.data.datasets[0].data.push(avgInfo);
            
            console.log("USA", usaIncome);

            if (stateLower === "al") {
                console.log("Alabama ", response.BEAAPI.Results.Data[5].DataValue)
                
                var stateInfo = response.BEAAPI.Results.Data[5].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ak") {
                console.log("Alaska ", response.BEAAPI.Results.Data[8].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[8].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AK")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "az") {
                console.log("Arizona ", response.BEAAPI.Results.Data[11].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[11].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AZ")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ak") {
                console.log("Arkansas ", response.BEAAPI.Results.Data[14].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[14].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AR")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ca") {
                console.log("California ", response.BEAAPI.Results.Data[17].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[17].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "co") {
                console.log("Colorado ", response.BEAAPI.Results.Data[20].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[20].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CO")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ct") {
                console.log("Connecticut ", response.BEAAPI.Results.Data[23].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[23].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "de") {
                console.log("Delaware ", response.BEAAPI.Results.Data[26].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[26].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("DE")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "dc") {
                console.log("District of Columbia ", response.BEAAPI.Results.Data[29].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[29].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("DC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "fl") {
                console.log("Florida ", response.BEAAPI.Results.Data[32].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[32].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("FL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ga") {
                console.log("Georgia ", response.BEAAPI.Results.Data[35].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[35].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("GA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "hi") {
                console.log("Hawaii ", response.BEAAPI.Results.Data[38].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[38].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("HI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "id") {
                console.log("Idaho ", response.BEAAPI.Results.Data[41].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[41].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ID")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "il") {
                console.log("Illinois ", response.BEAAPI.Results.Data[44].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[44].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "in") {
                console.log("Indiana ", response.BEAAPI.Results.Data[47].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[47].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ia") {
                console.log("Iowa ", response.BEAAPI.Results.Data[50].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[50].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ks") {
                console.log("Kansas ", response.BEAAPI.Results.Data[53].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[53].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("KS")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ky") {
                console.log("Kentucky ", response.BEAAPI.Results.Data[56].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[56].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("KY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "la") {
                console.log("Louisiana ", response.BEAAPI.Results.Data[59].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[59].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("LA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "me") {
                console.log("Maine ", response.BEAAPI.Results.Data[62].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[62].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ME")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "md") {
                console.log("Maryland ", response.BEAAPI.Results.Data[65].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[65].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MD")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ma") {
                console.log("Massachuesetts ", response.BEAAPI.Results.Data[68].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[68].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "mi") {
                console.log("Michigan ", response.BEAAPI.Results.Data[71].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[71].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "mn") {
                console.log("Minnesota ", response.BEAAPI.Results.Data[74].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[74].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ms") {
                console.log("Mississippi ", response.BEAAPI.Results.Data[77].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[77].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MS")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "mo") {
                console.log("Missouri ", response.BEAAPI.Results.Data[80].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[80].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MO")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "mt") {
                console.log("Montana ", response.BEAAPI.Results.Data[83].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[83].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ne") {
                console.log("Nebraska ", response.BEAAPI.Results.Data[86].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[86].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NE")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nv") {
                console.log("Nevada ", response.BEAAPI.Results.Data[89].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[89].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NV")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nh") {
                console.log("New Hampshire ", response.BEAAPI.Results.Data[92].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[92].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NH")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nj") {
                console.log("New Jersey ", response.BEAAPI.Results.Data[95].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[95].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NJ")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nm") {
                console.log("New Mexico ", response.BEAAPI.Results.Data[98].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[98].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NM")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ny") {
                console.log("New York ", response.BEAAPI.Results.Data[101].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[101].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nc") {
                console.log("North Carolina ", response.BEAAPI.Results.Data[104].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[104].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "nd") {
                console.log("North Dakota ", response.BEAAPI.Results.Data[107].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[107].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ND")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "oh") {
                console.log("Ohio ", response.BEAAPI.Results.Data[110].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[110].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OH")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ok") {
                console.log("Oklahoma ", response.BEAAPI.Results.Data[113].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[113].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OK")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "or") {
                console.log("Oregon ", response.BEAAPI.Results.Data[116].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[116].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OR")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "pa") {
                console.log("Pennsylvania ", response.BEAAPI.Results.Data[119].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[119].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("PA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ri") {
                console.log("Rhode Island ", response.BEAAPI.Results.Data[122].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[122].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("RI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "sc") {
                console.log("South Carolina ", response.BEAAPI.Results.Data[125].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("SC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "sd") {
                console.log("South Dakota ", response.BEAAPI.Results.Data[125].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("SD")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "tn") {
                console.log("Tennessee ", response.BEAAPI.Results.Data[128].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[128].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("TN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "tx") {
                console.log("Texas ", response.BEAAPI.Results.Data[131].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[131].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("TX")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "ut") {
                console.log("Utah ", response.BEAAPI.Results.Data[134].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[134].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("UT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "vt") {
                console.log("Vermont ", response.BEAAPI.Results.Data[137].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[137].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("VT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "va") {
                console.log("Virginia ", response.BEAAPI.Results.Data[140].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[140].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("VA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "wa") {
                console.log("Washington ", response.BEAAPI.Results.Data[143].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[143].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "wv") {
                console.log("West Virginia ", response.BEAAPI.Results.Data[146].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[146].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WV")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "wi") {
                console.log("Wisconsin ", response.BEAAPI.Results.Data[149].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[149].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
            };
            if (stateLower === "wy") {
                console.log("Wyoming ", response.BEAAPI.Results.Data[152].DataValue)
                var stateInfo = response.BEAAPI.Results.Data[152].DataValue;
                var specInfo = stateInfo.replace(',', '');
                console.log(specInfo)
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();

                console.log(stateInfo);
                
            };

        });
    })
});

$("#compareCity").on("click", function (event) {

    event.preventDefault();
    empty();
    var state = $("#state").val().trim();
    var stateLower = state.toLowerCase();
    console.log(state);
    console.log(stateLower);




    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var usaIncome = response.BEAAPI.Results.Data[2].DataValue;
        console.log(response)
        var avgInfo = usaIncome.replace(',', '');
        console.log(avgInfo)
        specInfo = parseInt(avgInfo);
        myChart.data.labels.push("USA")
        myChart.data.datasets[0].data.push(avgInfo);
        
        console.log("USA", usaIncome);

        if (stateLower === "al") {
            console.log("Alabama ", response.BEAAPI.Results.Data[5].DataValue)
            
            var stateInfo = response.BEAAPI.Results.Data[5].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("AL")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ak") {
            console.log("Alaska ", response.BEAAPI.Results.Data[8].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[8].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("AK")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "az") {
            console.log("Arizona ", response.BEAAPI.Results.Data[11].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[11].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("AZ")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ak") {
            console.log("Arkansas ", response.BEAAPI.Results.Data[14].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[14].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("AR")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ca") {
            console.log("California ", response.BEAAPI.Results.Data[17].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[17].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("CA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "co") {
            console.log("Colorado ", response.BEAAPI.Results.Data[20].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[20].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("CO")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ct") {
            console.log("Connecticut ", response.BEAAPI.Results.Data[23].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[23].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("CT")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "de") {
            console.log("Delaware ", response.BEAAPI.Results.Data[26].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[26].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("DE")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "dc") {
            console.log("District of Columbia ", response.BEAAPI.Results.Data[29].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[29].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("DC")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "fl") {
            console.log("Florida ", response.BEAAPI.Results.Data[32].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[32].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("FL")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ga") {
            console.log("Georgia ", response.BEAAPI.Results.Data[35].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[35].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("GA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "hi") {
            console.log("Hawaii ", response.BEAAPI.Results.Data[38].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[38].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("HI")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "id") {
            console.log("Idaho ", response.BEAAPI.Results.Data[41].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[41].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("ID")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "il") {
            console.log("Illinois ", response.BEAAPI.Results.Data[44].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[44].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("IL")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "in") {
            console.log("Indiana ", response.BEAAPI.Results.Data[47].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[47].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("IN")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ia") {
            console.log("Iowa ", response.BEAAPI.Results.Data[50].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[50].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("IA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ks") {
            console.log("Kansas ", response.BEAAPI.Results.Data[53].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[53].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("KS")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ky") {
            console.log("Kentucky ", response.BEAAPI.Results.Data[56].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[56].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("KY")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "la") {
            console.log("Louisiana ", response.BEAAPI.Results.Data[59].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[59].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("LA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "me") {
            console.log("Maine ", response.BEAAPI.Results.Data[62].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[62].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("ME")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "md") {
            console.log("Maryland ", response.BEAAPI.Results.Data[65].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[65].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MD")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ma") {
            console.log("Massachuesetts ", response.BEAAPI.Results.Data[68].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[68].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "mi") {
            console.log("Michigan ", response.BEAAPI.Results.Data[71].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[71].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MI")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "mn") {
            console.log("Minnesota ", response.BEAAPI.Results.Data[74].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[74].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MN")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ms") {
            console.log("Mississippi ", response.BEAAPI.Results.Data[77].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[77].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MS")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "mo") {
            console.log("Missouri ", response.BEAAPI.Results.Data[80].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[80].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MO")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "mt") {
            console.log("Montana ", response.BEAAPI.Results.Data[83].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[83].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("MT")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ne") {
            console.log("Nebraska ", response.BEAAPI.Results.Data[86].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[86].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NE")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nv") {
            console.log("Nevada ", response.BEAAPI.Results.Data[89].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[89].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NV")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nh") {
            console.log("New Hampshire ", response.BEAAPI.Results.Data[92].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[92].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NH")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nj") {
            console.log("New Jersey ", response.BEAAPI.Results.Data[95].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[95].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NJ")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nm") {
            console.log("New Mexico ", response.BEAAPI.Results.Data[98].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[98].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NM")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ny") {
            console.log("New York ", response.BEAAPI.Results.Data[101].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[101].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NY")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nc") {
            console.log("North Carolina ", response.BEAAPI.Results.Data[104].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[104].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("NC")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "nd") {
            console.log("North Dakota ", response.BEAAPI.Results.Data[107].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[107].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("ND")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "oh") {
            console.log("Ohio ", response.BEAAPI.Results.Data[110].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[110].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("OH")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ok") {
            console.log("Oklahoma ", response.BEAAPI.Results.Data[113].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[113].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("OK")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "or") {
            console.log("Oregon ", response.BEAAPI.Results.Data[116].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[116].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("OR")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "pa") {
            console.log("Pennsylvania ", response.BEAAPI.Results.Data[119].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[119].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("PA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ri") {
            console.log("Rhode Island ", response.BEAAPI.Results.Data[122].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[122].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("RI")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "sc") {
            console.log("South Carolina ", response.BEAAPI.Results.Data[125].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("SC")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "sd") {
            console.log("South Dakota ", response.BEAAPI.Results.Data[125].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("SD")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "tn") {
            console.log("Tennessee ", response.BEAAPI.Results.Data[128].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[128].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("TN")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "tx") {
            console.log("Texas ", response.BEAAPI.Results.Data[131].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[131].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("TX")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "ut") {
            console.log("Utah ", response.BEAAPI.Results.Data[134].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[134].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("UT")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "vt") {
            console.log("Vermont ", response.BEAAPI.Results.Data[137].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[137].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("VT")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "va") {
            console.log("Virginia ", response.BEAAPI.Results.Data[140].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[140].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("VA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "wa") {
            console.log("Washington ", response.BEAAPI.Results.Data[143].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[143].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("WA")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "wv") {
            console.log("West Virginia ", response.BEAAPI.Results.Data[146].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[146].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("WV")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "wi") {
            console.log("Wisconsin ", response.BEAAPI.Results.Data[149].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[149].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("WI")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
        };
        if (stateLower === "wy") {
            console.log("Wyoming ", response.BEAAPI.Results.Data[152].DataValue)
            var stateInfo = response.BEAAPI.Results.Data[152].DataValue;
            var specInfo = stateInfo.replace(',', '');
            console.log(specInfo)
            specInfo = parseInt(specInfo);
            myChart.data.labels.push("WY")
            myChart.data.datasets[0].data.push(specInfo);
            myChart.update();

            console.log(stateInfo);
            
        };

    });
})
