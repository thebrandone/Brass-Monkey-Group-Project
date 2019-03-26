var apiKey = "X1-ZWz181dk3qv8y3_8uv2u"

$("#searchCity").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();

    // Empty the region associated with the articles
    
    var proxyURL = "https://cors-anywhere.herokuapp.com/";
    
    var city = $("#city").val().trim();
    var state =$("#state").val().trim();

    $("#city").empty();
    $("#state").empty();

    var queryURL = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=" + apiKey + "&state=" +state +"&city=" + city + "&childtype=neighborhood";
    
    queryURL = proxyURL + queryURL;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
		var responseJson = xmlToJson(response);

		console.log(responseJson);
		
		drawHousing(responseJson);
	});
});

function drawHousing(response){

	console.log("NAME: "+response["RegionChildren:regionchildren"].response.list.region[0].name);

	//var index = response["RegionChildren:regionchildren"].response.list.length();
	var obj = [response["RegionChildren:regionchildren"].response.list.region];

	var length = Object.keys(obj[0]).length;

	console.log(obj);

	console.log("Length: "+length);

	$("#housingData").empty();

	for(var i=0;i<length;i++){
		var info = $("<tr>");

		info.html("<a target='_blank' href='"+obj[0][i].url+"'>"+obj[0][i].name +"</a>  $"+obj[0][i].zindex);

		$("#housingData").append(info);
	}
};


//https://gist.github.com/chinchang/8106a82c56ad007e27b1   CREDIT TO THIS GITHUB USER FOR XML - JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	// If just one text node inside
	if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
		obj = xml.childNodes[0].nodeValue;
	}
	else if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
}