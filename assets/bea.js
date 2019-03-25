$(document).ready(function(){

    var apiKey = "2AC3F36B-D425-4022-831C-437BF2C53C2Fa"
    var city = $("#city-input").val.trim;
    var state = $("#state-input").val.trim;

    // var queryURL = "https://apps.bea.gov/api/data?&UserID=" + apiKey + "&method=GETDATASETLIST&ResultFormat=JSON";
    var queryURL = "https://apps.bea.gov/api/data/?UserID=" +apiKey+ "&method=GetParameterValuesFiltered&datasetname=Regional&TargetParameter=LineCode&TableName=MAGDP10&ResultFormat=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);  
        console.log(response);
    })
    // $("#click-btn").on("click", function(event) {
    //     event.preventDefault();
    //     var apiKey = "6e4ed6ce1b47beda8884b9912a43abd2234bc44a"
    //     var city = $("#city-input").val.trim;
    //     var state = $("#state-input").val.trim;

    //     var queryURL = "https://api.census.gov/data/2014/pep/natstprc?get=STNAME,POP&DATE=7&for=state:*&key=" + apikey;

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response){
    //         console.log(response);
    //     })
    // });
});

