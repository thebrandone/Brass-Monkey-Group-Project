$(document).ready(function () {

    var apiKey = "2AC3F36B-D425-4022-831C-437BF2C53C2Fa"


    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var equeryURL = 'http://apps.bea.gov/api/data?&UserID=' + apiKey + '&method=GetData&datasetname=Regional&TableName=SQINC1&GeoFIPS=STATE&LineCode=3&Year=2018Q4&ResultFormat=JSON'

    queryURL = proxyURL + equeryURL

    // chart for the search
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

    // chart for the compare
    var cty = document.getElementById('income-chart-compare');
    var myChart2 = new Chart(cty, {
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
    $("#income-chart-compare").append(myChart2);

    function empty(chart){
        chart.data.datasets[0].data = [];
        chart.data.labels = [];
    }

    $("#searchCity").on("click", function (event) {

        event.preventDefault();
        empty(myChart);
        var state = $("#state").val().trim();
        var stateLower = state.toLowerCase();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var usaIncome = response.BEAAPI.Results.Data[2].DataValue;
            var avgInfo = usaIncome.replace(',', '');
            specInfo = parseInt(avgInfo);
            myChart.data.labels.push("USA")
            myChart.data.datasets[0].data.push(avgInfo);
            
            $("#us-avg").text(usaIncome);

            if (stateLower === "al") {
                var stateInfo = response.BEAAPI.Results.Data[5].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ak") {
                var stateInfo = response.BEAAPI.Results.Data[8].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AK")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);

            };
            if (stateLower === "az") {
                var stateInfo = response.BEAAPI.Results.Data[11].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AZ")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ar") {
                var stateInfo = response.BEAAPI.Results.Data[14].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("AR")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ca") {
                var stateInfo = response.BEAAPI.Results.Data[17].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "co") {
                var stateInfo = response.BEAAPI.Results.Data[20].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CO")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ct") {
                var stateInfo = response.BEAAPI.Results.Data[23].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("CT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "de") {
                var stateInfo = response.BEAAPI.Results.Data[26].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("DE")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "dc") {
                var stateInfo = response.BEAAPI.Results.Data[29].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("DC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "fl") {
                var stateInfo = response.BEAAPI.Results.Data[32].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("FL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ga") {
                var stateInfo = response.BEAAPI.Results.Data[35].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("GA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "hi") {
                var stateInfo = response.BEAAPI.Results.Data[38].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("HI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "id") {
                var stateInfo = response.BEAAPI.Results.Data[41].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ID")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "il") {
                var stateInfo = response.BEAAPI.Results.Data[44].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IL")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "in") {
                var stateInfo = response.BEAAPI.Results.Data[47].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ia") {
                var stateInfo = response.BEAAPI.Results.Data[50].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("IA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ks") {
                var stateInfo = response.BEAAPI.Results.Data[53].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("KS")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ky") {
                var stateInfo = response.BEAAPI.Results.Data[56].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("KY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "la") {
                var stateInfo = response.BEAAPI.Results.Data[59].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("LA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "me") {
                var stateInfo = response.BEAAPI.Results.Data[62].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ME")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "md") {
                var stateInfo = response.BEAAPI.Results.Data[65].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MD")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ma") {
                var stateInfo = response.BEAAPI.Results.Data[68].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "mi") {
                var stateInfo = response.BEAAPI.Results.Data[71].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "mn") {
                var stateInfo = response.BEAAPI.Results.Data[74].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ms") {
                var stateInfo = response.BEAAPI.Results.Data[77].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MS")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "mo") {
                var stateInfo = response.BEAAPI.Results.Data[80].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MO")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "mt") {
                var stateInfo = response.BEAAPI.Results.Data[83].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("MT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ne") {
                var stateInfo = response.BEAAPI.Results.Data[86].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NE")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nv") {
                var stateInfo = response.BEAAPI.Results.Data[89].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NV")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nh") {
                var stateInfo = response.BEAAPI.Results.Data[92].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NH")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nj") {
                var stateInfo = response.BEAAPI.Results.Data[95].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NJ")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nm") {
                var stateInfo = response.BEAAPI.Results.Data[98].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NM")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ny") {
                var stateInfo = response.BEAAPI.Results.Data[101].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nc") {
                var stateInfo = response.BEAAPI.Results.Data[104].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("NC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "nd") {
                var stateInfo = response.BEAAPI.Results.Data[107].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("ND")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "oh") {
                var stateInfo = response.BEAAPI.Results.Data[110].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OH")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ok") {
                var stateInfo = response.BEAAPI.Results.Data[113].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OK")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "or") {
                var stateInfo = response.BEAAPI.Results.Data[116].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("OR")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "pa") {
                var stateInfo = response.BEAAPI.Results.Data[119].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("PA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ri") {
                var stateInfo = response.BEAAPI.Results.Data[122].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("RI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "sc") {
                var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("SC")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "sd") {
                var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("SD")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "tn") {
                var stateInfo = response.BEAAPI.Results.Data[128].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("TN")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "tx") {
                var stateInfo = response.BEAAPI.Results.Data[131].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("TX")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "ut") {
                var stateInfo = response.BEAAPI.Results.Data[134].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("UT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "vt") {
                var stateInfo = response.BEAAPI.Results.Data[137].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("VT")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "va") {
                var stateInfo = response.BEAAPI.Results.Data[140].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("VA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "wa") {
                var stateInfo = response.BEAAPI.Results.Data[143].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WA")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "wv") {
                var stateInfo = response.BEAAPI.Results.Data[146].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WV")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "wi") {
                var stateInfo = response.BEAAPI.Results.Data[149].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WI")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
            };
            if (stateLower === "wy") {
                var stateInfo = response.BEAAPI.Results.Data[152].DataValue;
                var specInfo = stateInfo.replace(',', '');
                specInfo = parseInt(specInfo);
                myChart.data.labels.push("WY")
                myChart.data.datasets[0].data.push(specInfo);
                myChart.update();
                $("#state-avg").text(stateInfo);
                
            };

        });
    });

$("#compareCity").on("click", function (event) {

    event.preventDefault();
    empty(myChart2);
    var state = $("#state").val().trim();
    var stateLower = state.toLowerCase();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var usaIncome = response.BEAAPI.Results.Data[2].DataValue;
        var avgInfo = usaIncome.replace(',', '');
        specInfo = parseInt(avgInfo);
        myChart2.data.labels.push("USA")
        myChart2.data.datasets[0].data.push(avgInfo);
        
        $("#us-avg2").text(usaIncome);

        if (stateLower === "al") {
            var stateInfo = response.BEAAPI.Results.Data[5].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("AL")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);

        };
        if (stateLower === "ak") {
            var stateInfo = response.BEAAPI.Results.Data[8].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("AK")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);

        };
        if (stateLower === "az") {
            var stateInfo = response.BEAAPI.Results.Data[11].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("AZ")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ar") {
            var stateInfo = response.BEAAPI.Results.Data[14].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("AR")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ca") {
            var stateInfo = response.BEAAPI.Results.Data[17].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("CA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "co") {
            var stateInfo = response.BEAAPI.Results.Data[20].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("CO")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ct") {
            var stateInfo = response.BEAAPI.Results.Data[23].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("CT")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "de") {
            var stateInfo = response.BEAAPI.Results.Data[26].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("DE")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "dc") {
            var stateInfo = response.BEAAPI.Results.Data[29].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("DC")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "fl") {
            var stateInfo = response.BEAAPI.Results.Data[32].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("FL")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ga") {
            var stateInfo = response.BEAAPI.Results.Data[35].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("GA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "hi") {
            var stateInfo = response.BEAAPI.Results.Data[38].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("HI")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "id") {
            var stateInfo = response.BEAAPI.Results.Data[41].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("ID")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "il") {
            var stateInfo = response.BEAAPI.Results.Data[44].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("IL")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "in") {
            var stateInfo = response.BEAAPI.Results.Data[47].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("IN")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ia") {
            var stateInfo = response.BEAAPI.Results.Data[50].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("IA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ks") {
            var stateInfo = response.BEAAPI.Results.Data[53].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("KS")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ky") {
            var stateInfo = response.BEAAPI.Results.Data[56].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("KY")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "la") {
            var stateInfo = response.BEAAPI.Results.Data[59].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("LA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "me") {
            var stateInfo = response.BEAAPI.Results.Data[62].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("ME")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "md") {
            var stateInfo = response.BEAAPI.Results.Data[65].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MD")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ma") {
            var stateInfo = response.BEAAPI.Results.Data[68].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "mi") {
            var stateInfo = response.BEAAPI.Results.Data[71].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MI")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "mn") {
            var stateInfo = response.BEAAPI.Results.Data[74].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MN")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ms") {
            var stateInfo = response.BEAAPI.Results.Data[77].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MS")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "mo") {
            var stateInfo = response.BEAAPI.Results.Data[80].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MO")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "mt") {
            var stateInfo = response.BEAAPI.Results.Data[83].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("MT")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ne") {
            var stateInfo = response.BEAAPI.Results.Data[86].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NE")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nv") {
            var stateInfo = response.BEAAPI.Results.Data[89].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NV")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nh") {
            var stateInfo = response.BEAAPI.Results.Data[92].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NH")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nj") {
            var stateInfo = response.BEAAPI.Results.Data[95].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NJ")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nm") {
            var stateInfo = response.BEAAPI.Results.Data[98].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NM")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ny") {
            var stateInfo = response.BEAAPI.Results.Data[101].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NY")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nc") {
            var stateInfo = response.BEAAPI.Results.Data[104].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("NC")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "nd") {
            var stateInfo = response.BEAAPI.Results.Data[107].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("ND")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "oh") {
            var stateInfo = response.BEAAPI.Results.Data[110].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("OH")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ok") {
            var stateInfo = response.BEAAPI.Results.Data[113].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("OK")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "or") {
            var stateInfo = response.BEAAPI.Results.Data[116].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("OR")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "pa") {
            var stateInfo = response.BEAAPI.Results.Data[119].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("PA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ri") {
            var stateInfo = response.BEAAPI.Results.Data[122].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("RI")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "sc") {
            var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("SC")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "sd") {
            var stateInfo = response.BEAAPI.Results.Data[125].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("SD")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "tn") {
            var stateInfo = response.BEAAPI.Results.Data[128].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("TN")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "tx") {
            var stateInfo = response.BEAAPI.Results.Data[131].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("TX")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "ut") {
            var stateInfo = response.BEAAPI.Results.Data[134].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("UT")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "vt") {
            var stateInfo = response.BEAAPI.Results.Data[137].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("VT")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "va") {
            var stateInfo = response.BEAAPI.Results.Data[140].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("VA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "wa") {
            var stateInfo = response.BEAAPI.Results.Data[143].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("WA")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "wv") {
            var stateInfo = response.BEAAPI.Results.Data[146].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("WV")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "wi") {
            var stateInfo = response.BEAAPI.Results.Data[149].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("WI")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);
        };
        if (stateLower === "wy") {
            var stateInfo = response.BEAAPI.Results.Data[152].DataValue;
            var specInfo = stateInfo.replace(',', '');
            specInfo = parseInt(specInfo);
            myChart2.data.labels.push("WY")
            myChart2.data.datasets[0].data.push(specInfo);
            myChart2.update();
            $("#state-avg2").text(stateInfo);            
        };
    });
});
});
