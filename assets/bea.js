$(document).ready(function(){

    var apiKey = "2AC3F36B-D425-4022-831C-437BF2C53C2Fa"
    

    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    var equeryURL = 'http://apps.bea.gov/api/data?&UserID=' + apiKey + '&method=GetData&datasetname=Regional&TableName=SQINC1&GeoFIPS=STATE&LineCode=3&Year=2018&ResultFormat=JSON'

    queryURL = proxyURL + equeryURL

    $("#dropdownMenuButton").on("click", function(event) {
        event.preventDefault();
        var stateLower = $(this).attr("value");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            if(stateLower === "alabama"){
                console.log("Alabama ", response.BEAAPI.Results.Data[5].DataValue)
            };
            if(stateLower === "alaska"){
                console.log("Alaska ", response.BEAAPI.Results.Data[8].DataValue)
            };
            if(stateLower === "arizona"){
                console.log("Arizona ", response.BEAAPI.Results.Data[11].DataValue)
            };
            if(stateLower === "arkansas"){
                console.log("Arkansas ", response.BEAAPI.Results.Data[14].DataValue)
            };
            if(stateLower === "california"){
                console.log("California ", response.BEAAPI.Results.Data[17].DataValue)
            };
            if(stateLower === "colorado"){
                console.log("Colorado ", response.BEAAPI.Results.Data[20].DataValue)
            };
            if(stateLower === "connecticut"){
                console.log("Connecticut ", response.BEAAPI.Results.Data[23].DataValue)
            };
            if(stateLower === "delaware"){
                console.log("Delaware ", response.BEAAPI.Results.Data[26].DataValue)
            };
            if(stateLower === "districtofcolumbia"){
                console.log("District of Columbia ", response.BEAAPI.Results.Data[29].DataValue)
            };
            if(stateLower === "florida"){
                console.log("Florida ", response.BEAAPI.Results.Data[32].DataValue)
            };
            if(stateLower === "georgia"){
                console.log("Georgia ", response.BEAAPI.Results.Data[35].DataValue)
            };
            if(stateLower === "hawaii"){
                console.log("Hawaii ", response.BEAAPI.Results.Data[38].DataValue)
            };
            if(stateLower === "idaho"){
                console.log("Idaho ", response.BEAAPI.Results.Data[41].DataValue)
            };
            if(stateLower === "illinois"){
                console.log("Illinois ", response.BEAAPI.Results.Data[44].DataValue)
            };
            if(stateLower === "indiana"){
                console.log("Indiana ", response.BEAAPI.Results.Data[47].DataValue)
            };
            if(stateLower === "iowa"){
                console.log("Iowa ", response.BEAAPI.Results.Data[50].DataValue)
            };
            if(stateLower === "kansas"){
                console.log("Kansas ", response.BEAAPI.Results.Data[53].DataValue)
            };
            if(stateLower === "kentucky"){
                console.log("Kentucky ", response.BEAAPI.Results.Data[56].DataValue)
            };
            if(stateLower === "louisiana"){
                console.log("Louisiana ", response.BEAAPI.Results.Data[59].DataValue)
            };
            if(stateLower === "maine"){
                console.log("Maine ", response.BEAAPI.Results.Data[62].DataValue)
            };
            if(stateLower === "maryland"){
                console.log("Maryland ", response.BEAAPI.Results.Data[65].DataValue)
            };
            if(stateLower === "massachusetts"){
                console.log("Massachuesetts ", response.BEAAPI.Results.Data[68].DataValue)
            };
            if(stateLower === "michigan"){
                console.log("Michigan ", response.BEAAPI.Results.Data[71].DataValue)
            };
            if(stateLower === "minnesota"){
                console.log("Minnesota ", response.BEAAPI.Results.Data[74].DataValue)
            };
            if(stateLower === "mississippi"){
                console.log("Mississippi ", response.BEAAPI.Results.Data[77].DataValue)
            };
            if(stateLower === "missouri"){
                console.log("Missouri ", response.BEAAPI.Results.Data[80].DataValue)
            };
            if(stateLower === "montana"){
                console.log("Montana ", response.BEAAPI.Results.Data[83].DataValue)
            };
            if(stateLower === "nebraska"){
                console.log("Nebraska ", response.BEAAPI.Results.Data[86].DataValue)
            };
            if(stateLower === "nevada"){
                console.log("Nevada ", response.BEAAPI.Results.Data[89].DataValue)
            };
            if(stateLower === "newhampshire"){
                console.log("New Hampshire ", response.BEAAPI.Results.Data[92].DataValue)
            };
            if(stateLower === "newjersey"){
                console.log("New Jersey ", response.BEAAPI.Results.Data[95].DataValue)
            };
            if(stateLower === "newmexico"){
                console.log("New Mexico ", response.BEAAPI.Results.Data[98].DataValue)
            };
            if(stateLower === "newyork"){
                console.log("New York ", response.BEAAPI.Results.Data[101].DataValue)
            };
            if(stateLower === "northcarolina"){
                console.log("North Carolina ", response.BEAAPI.Results.Data[104].DataValue)
            };
            if(stateLower === "northdakota"){
                console.log("North Dakota ", response.BEAAPI.Results.Data[107].DataValue)
            };
            if(stateLower === "ohio"){
                console.log("Ohio ", response.BEAAPI.Results.Data[110].DataValue)
            };
            if(stateLower === "oklahoma"){
                console.log("Oklahoma ", response.BEAAPI.Results.Data[113].DataValue)
            };
            if(stateLower === "oregon"){
                console.log("Oregon ", response.BEAAPI.Results.Data[116].DataValue)
            };
            if(stateLower === "pennsylvania"){
                console.log("Pennsylvania ", response.BEAAPI.Results.Data[119].DataValue)
            };
            if(stateLower === "rhodeisland"){
                console.log("Rhode Island ", response.BEAAPI.Results.Data[122].DataValue)
            };
            if(stateLower === "southcarolina"){
                console.log("South Carolina ", response.BEAAPI.Results.Data[125].DataValue)
            };
            if(stateLower === "tennessee"){
                console.log("Tennessee ", response.BEAAPI.Results.Data[128].DataValue)
            };
            if(stateLower === "texas"){
                console.log("Texas ", response.BEAAPI.Results.Data[131].DataValue)
            };
            if(stateLower === "utah"){
                console.log("Utah ", response.BEAAPI.Results.Data[134].DataValue)
            };
            if(stateLower === "vermont"){
                console.log("Vermont ", response.BEAAPI.Results.Data[137].DataValue)
            };
            if(stateLower === "virginia"){
                console.log("Virginia ", response.BEAAPI.Results.Data[140].DataValue)
            };
            if(stateLower === "washington"){
                console.log("Washington ", response.BEAAPI.Results.Data[143].DataValue)
            };
            if(stateLower === "westvirginia"){
                console.log("West Virginia ", response.BEAAPI.Results.Data[146].DataValue)
            };
            if(stateLower === "wisconsin"){
                console.log("Wisconsin ", response.BEAAPI.Results.Data[149].DataValue)
            };
            if(stateLower === "wyoming"){
                console.log("Wyoming ", response.BEAAPI.Results.Data[152].DataValue)
            };
    
    
    
            
            console.log(response);  
            console.log("Alabama ",response.BEAAPI.Results.Data[4].DataValue)
            
        })
    })
});

