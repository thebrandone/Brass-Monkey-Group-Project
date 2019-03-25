$(document).ready(function(){

    var apiKey = "6e4ed6ce1b47beda8884b9912a43abd2234bc44a"
    var city = $("#city-input").val.trim;
    var state = $("#state-input").val.trim;

    var queryURL = "https://api.census.gov/data/2018/pep/population?get=POP,GEONAME&for=state:*&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
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