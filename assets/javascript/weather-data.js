$(document).ready(function () {
    var apiKey = "bf0fe2b0776e786b0b03723a094e6d31";
    var citySelected;
    var wind;
    var temp;
    var humidity;
    var description;
    var date;
    var location;

    $("#searchCity").on("click", function () {
        $("#table").empty();
        $("#map").empty();
        citySelected = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySelected + "&mode=json&units=imperial&appid=" + apiKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function weatherData(response) {
                location = response.city.name;
                $("#location").text(location);

                for(var days = 0 ; days < response.list.length ; days += 8){ 
                    humidity = "humidity " + response.list[days].main.humidity + "%";
                    temp = "temp " + response.list[days].main.temp + " F";
                    description = response.list[days].weather[0].description;
                    wind = "wind speed " + response.list[days].wind.speed + " MPH";
                    date = response.list[days].dt_txt;
                    var newRow = $("<tr>").append(
                        $("<td>").text(moment(date).format('dddd')),
                        $("<td>").text(temp),
                        $("<td>").text(humidity),
                        $("<td>").text(description),
                        $("<td>").text(wind),
                        );
                        $("#weather-table > tbody").append(newRow);
                };
                
                var mapURL = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10";
                $("#map").append(mapURL);
                $("#map").attr("href", "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10");
                
            })
            
    })
    $("#compareCity").on("click", function () {
        $("#table2").empty();
        $("#map2").empty();
        citySelected = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySelected + "&mode=json&units=imperial&appid=" + apiKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function weatherData(response) {
                location = response.city.name;
                $("#location2").text(location);

                for(var days = 0 ; days < response.list.length ; days += 8){ 
                    humidity = "humidity " + response.list[days].main.humidity + "%";
                    temp = "temp " + response.list[days].main.temp + " F";
                    description = response.list[days].weather[0].description;
                    wind = "wind speed " + response.list[days].wind.speed + " MPH";
                    date = response.list[days].dt_txt;
                    var newRow = $("<tr>").append(
                        $("<td>").text(moment(date).format('dddd')),
                        $("<td>").text(temp),
                        $("<td>").text(humidity),
                        $("<td>").text(description),
                        $("<td>").text(wind),
                        );
                        $("#weather-table2 > tbody").append(newRow);
                        
                };
                
                var mapURL = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10";
                $("#map2").append(mapURL);
                $("#map2").attr("href", "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10");
                
            })
            
    })
    
})