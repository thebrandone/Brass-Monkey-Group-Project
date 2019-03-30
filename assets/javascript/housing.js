$("#compareBlock").fadeOut('fast');

var apiKey = "X1-ZWz181dk3qv8y3_8uv2u"
var budget = 0;
var responseList;
var city = "";
var state = "";
var obj;
var compareButton = 0;

$("#searchCity").on("click", function (event) {
	// This line allows us to take advantage of the HTML "submit" property
	// This way we can hit enter on the keyboard and it registers the search
	// (in addition to clicks). Prevents the page from reloading on form submit.
	event.preventDefault();

	// Empty the region associated with the articles

	var proxyURL = "https://cors-anywhere.herokuapp.com/";

	city = $("#city").val().trim();  //Pulls in City
	city = city.replace(/\s/g, '');  //removes spaces
	state = $("#state").val().trim(); //Pulls in State
	budget = parseInt($("#budget").val());    //Pulls in home budget

	var queryURL = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=" + apiKey + "&state=" + state + "&city=" + city + "&childtype=neighborhood";

	queryURL = proxyURL + queryURL;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		var responseJson = xmlToJson(response);

		responseList = responseJson;
		drawHousing(responseJson);
	});
});

$("#compareCity").on("click", function (event) {
	// This line allows us to take advantage of the HTML "submit" property
	// This way we can hit enter on the keyboard and it registers the search
	// (in addition to clicks). Prevents the page from reloading on form submit.
	event.preventDefault();

	// Empty the region associated with the articles

	var proxyURL = "https://cors-anywhere.herokuapp.com/";

	city = $("#city").val().trim();  //Pulls in City
	city = city.replace(/\s/g, '');  //removes spaces
	state = $("#state").val().trim(); //Pulls in State
	budget = parseInt($("#budget").val());    //Pulls in home budget

	$("#city").text("");
	$("#budget").text("");

	compareButton = 1;

	var queryURL = "http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=" + apiKey + "&state=" + state + "&city=" + city + "&childtype=neighborhood";

	queryURL = proxyURL + queryURL;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function (response) {
		var responseJson = xmlToJson(response);
		responseList = responseJson;
		drawHousing(responseJson);
	});
});

function drawHousing(response) {
	obj = [response["RegionChildren:regionchildren"].response.list.region];

	var length = Object.keys(obj[0]).length;
	var lowerBudget = budget - (budget * .4); //Makes lower budget half of amount lower
	var higherBudget = budget + (budget * .1);

	if (compareButton === 0) {
		$("#houseRow").empty();

		for (var i = 0; i < length; i++) {
			var info = $("<tr>");

			info.html("<td><a class='openInfo' index=" + i + " href='" + obj[0][i].url + "'>" + obj[0][i].name + "</a></td><td>$" + obj[0][i].zindex + "</td>");

			if (obj[0][i].zindex >= lowerBudget && obj[0][i].zindex <= higherBudget) {
				$("#houseRow").append(info);
			}
		}
	}
	else {
		$("#compareBlock").fadeIn('slow');
		$("#houseRow2").empty();

		for (var i = 0; i < length; i++) {
			var info = $("<tr>");

			info.html("<td><a class='openInfo2' index=" + i + " href='" + obj[0][i].url + "'>" + obj[0][i].name + "</a></td><td>$" + obj[0][i].zindex + "</td>");

			if (obj[0][i].zindex >= lowerBudget && obj[0][i].zindex <= higherBudget) {
				$("#houseRow2").append(info);
			}
		}

	}
};

$("#closeCompare").on("click", function () {
	$("#compareBlock").fadeOut('slow');
	compareButton = 0;
});


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
		for (var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof (obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof (obj[nodeName].push) == "undefined") {
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

$(document).on("click", ".openInfo", function (e) {
	e.preventDefault();
	var index = $(this).attr("index"); 

		$("#tempInfo").html('<div id="zillow-large-search-box-widget-container" style="align-content:center;width:100%;overflow:hidden;background-color:#e7f1fd;color:#555; font: normal normal normal 18px verdana,arial,sans-serif;line-height:13px;margin:0 auto;padding:0;text-align:center;border:1px solid #adcfff;letter-spacing:0;text-transform:none;"><h2 style="color:#d61;text-align:left;font-size:20px;line-height:20px;font-weight:normal;float:left;width:200px;margin-left:10px;margin-top:5px;letter-spacing:0;text-transform:none;">Find Homes</h2><div style="float:right;"><a href="https://www.zillow.com/" target="_blank" rel="nofollow"><img alt="Zillow Real Estate Information" style="border:0;" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"></img></a></div><iframe scrolling="no" src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=' + obj[0][index].name + '+' + city + '+' + state + '&shvi=yes" width="100% frameborder="0" height="400"></iframe><table id="zillow-tnc-widget-footer-links" width="100%" style="font: normal normal normal 10px verdana,arial,sans-serif;text-align:center;line-height:12px;margin:10px 5px;padding:0;border-spacing:0;border-collapse:collapse;"><tbody style="margin:0;padding:0;"><tr style="margin:0;padding:0;"><td style="font-weight:bold;font-size:10px;color:#555;text-align:center;margin:0;padding:0;">QUICK LINKS:</td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/' + city + '-' + state + '/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">' + city + '</span> Real Estate Listing</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Rates</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/refinance/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Refinancing</a></span></td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/' + city + '-' + state + '/foreclosures/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">Raleigh</span> Foreclosures</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Calculators</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Purchase Loans</a></span></td></tr></tbody></table><button id="close">CLOSE INFO</button></div>');

		$("#tempInfo").fadeIn('slow');
		$("#houseRow").fadeOut('slow');
		$("#economicData").fadeOut('slow');
		$("#meetupData").fadeOut('slow');
		$("#weatherData").fadeOut('slow');
		$("#houseData").attr("class", "col-12");
		$("#titleData").fadeOut('fast');
	
});

$(document).on("click", ".openInfo2", function (e) {
	e.preventDefault();
	var index = $(this).attr("index");

		$("#tempInfo2").html('<div id="zillow-large-search-box-widget-container" style="align-content:center;width:100%;overflow:hidden;background-color:#e7f1fd;color:#555; font: normal normal normal 18px verdana,arial,sans-serif;line-height:13px;margin:0 auto;padding:0;text-align:center;border:1px solid #adcfff;letter-spacing:0;text-transform:none;"><h2 style="color:#d61;text-align:left;font-size:20px;line-height:20px;font-weight:normal;float:left;width:200px;margin-left:10px;margin-top:5px;letter-spacing:0;text-transform:none;">Find Homes</h2><div style="float:right;"><a href="https://www.zillow.com/" target="_blank" rel="nofollow"><img alt="Zillow Real Estate Information" style="border:0;" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"></img></a></div><iframe scrolling="no" src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=' + obj[0][index].name + '+' + city + '+' + state + '&shvi=yes" width="100% frameborder="0" height="400"></iframe><table id="zillow-tnc-widget-footer-links" width="100%" style="font: normal normal normal 10px verdana,arial,sans-serif;text-align:center;line-height:12px;margin:10px 5px;padding:0;border-spacing:0;border-collapse:collapse;"><tbody style="margin:0;padding:0;"><tr style="margin:0;padding:0;"><td style="font-weight:bold;font-size:10px;color:#555;text-align:center;margin:0;padding:0;">QUICK LINKS:</td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/' + city + '-' + state + '/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">' + city + '</span> Real Estate Listing</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Rates</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/refinance/" target="_blank" rel="nofollow" style="color:#36b;font-family:verdana,arial,sans-serif;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Refinancing</a></span></td></tr><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;"><span id="widgetFooterLink" class="regionBasedLink"><a href="https://www.zillow.com/' + city + '-' + state + '/foreclosures/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;"><span class="region">Raleigh</span> Foreclosures</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Mortgage Calculators</a></span></td><td style="margin:0;padding:0;"><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow" style="color:#36b;font-size:10px;margin:0 5px 0 0;padding:0;text-decoration:none;">Purchase Loans</a></span></td></tr></tbody></table><button id="close2">CLOSE INFO</button></div>');

		$("#tempInfo2").fadeIn('slow');
		$("#houseRow2").fadeOut('slow');
		$("#economicData2").fadeOut('slow');
		$("#meetupData2").fadeOut('slow');
		$("#weatherData2").fadeOut('slow');
		$("#houseData2").attr("class", "col-12");
		$("#titleData2").fadeOut('fast');
	
});

$(document).on("click", "#close", function () {
	$("#houseRow").fadeIn("slow");
	$("#economicData").fadeIn('slow');
	$("#meetupData").fadeIn('slow');
	$("#weatherData").fadeIn('slow');
	$("#tempInfo").fadeOut("slow");
	$("#houseData").attr("class", "col-3");
	$("#titleData").fadeIn('fast');
});

$(document).on("click", "#close2", function () {
	$("#houseRow2").fadeIn("slow");
	$("#economicData2").fadeIn('slow');
	$("#meetupData2").fadeIn('slow');
	$("#weatherData2").fadeIn('slow');
	$("#tempInfo2").fadeOut("slow");
	$("#houseData2").attr("class", "col-3");
	$("#titleData2").fadeIn('fast');
});




