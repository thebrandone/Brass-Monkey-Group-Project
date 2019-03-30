$(document).ready(function(){ 
    $("#searchCity").on("click", function(event){
        event.preventDefault();
        // clears data for when another city is put in
        $("#meetupData").empty();
        $("#meetupData").append("<h5 class='card-title'>Meetup Data</h5>");
        // gets data from inputs
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        // solves CORS error
        var proxyURL = "https://cors-anywhere.herokuapp.com/";
        // typical ajax
        var queryURL =
        "https://api.meetup.com/find/groups?&sign=true&key=c305f1c2b61887b27637563b37e&photo-host=public&location="
        + city + ", " + state + "&page=10&order=most_active"
        queryURL = proxyURL + queryURL;

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
              for (i=0;i<response.length;i++) {
                // create new div to put data  
                var div = $("<div>");
                // group name
                div.append("<strong>Group Name: </strong>" + response[i].name + "<br>");
                // group category... such as "socializing or tech"
                div.append("<strong>Category: </strong>" + response[i].category.name + "<br>");
                // group location
                div.append("<strong>Location: </strong>" + response[i].localized_location + "<br>");
                // image
                var img = $("<img>");
                img.attr("src", response[i].key_photo.highres_link);
                div.append(img);
                div.append("<br>");
                // next event name
                div.append("<strong>Next Event: </strong>" + response[i].next_event.name + "<br>");
                // next event time
                div.append("<strong>Next Event Date: </strong>" + moment(response[i].next_event.time).format("MMMM Do h" + ":"+  "mm a") + "<br>");
                // group link
                var link = $("<a>");
                link.attr("href", response[i].link);
                link.text("Click here to visit their Meetup.com page!");
                div.append(link);
                div.append("<br>");
                div.append("<hr>");
                // append the whole div
                $("#meetupData").append(div);
              }
        });
    });

    $("#compareCity").on("click", function(event){
      event.preventDefault();
      $("#meetupData").append("<h5 class='card-title'>Meetup Data</h5>");
      // gets data from inputs
      var city = $("#city").val().trim();
      var state = $("#state").val().trim();
      // solves CORS error
      var proxyURL = "https://cors-anywhere.herokuapp.com/";
      // typical ajax
      var queryURL =
      "https://api.meetup.com/find/groups?&sign=true&key=c305f1c2b61887b27637563b37e&photo-host=public&location="
      + city + ", " + state + "&page=10&order=most_active"
      queryURL = proxyURL + queryURL;

      $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            for (i=0;i<response.length;i++) {
              // create new div to put data  
              var div = $("<div>");
              // group name
              div.append("<strong>Group Name: </strong>" + response[i].name + "<br>");
              // group category... such as "socializing or tech"
              div.append("<strong>Category: </strong>" + response[i].category.name + "<br>");
              // group location
              div.append("<strong>Location: </strong>" + response[i].localized_location + "<br>");
              // image
              var img = $("<img>");
              img.attr("src", response[i].key_photo.highres_link);
              div.append(img);
              div.append("<br>");
              // next event name
              div.append("<strong>Next Event: </strong>" + response[i].next_event.name + "<br>");
              // next event time
              div.append("<strong>Next Event Date: </strong>" + moment(response[i].next_event.time).format("MMMM Do h" + ":"+  "mm a") + "<br>");
              // group link
              var link = $("<a>");
              link.attr("href", response[i].link);
              link.text("Click here to visit their Meetup.com page!");
              div.append(link);
              div.append("<br>");
              div.append("<hr>");
              // append the whole div
              $("#meetupData2").append(div);
            }
      });
  });
});