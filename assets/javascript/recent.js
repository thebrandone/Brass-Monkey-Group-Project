$(document).ready(function() {
    var otherAppConfig = {
        apiKey: "AIzaSyAnzDSZajKs_kQwyeiWy_ayBMjXVZii-gI",
        authDomain: "the-perfect-fit.firebaseapp.com",
        databaseURL: "https://the-perfect-fit.firebaseio.com",
        projectId: "the-perfect-fit",
        storbudgetBucket: "the-perfect-fit.appspot.com",
        messagingSenderId: "718151652815"
      };
      var otherApp = firebase.initializeApp(otherAppConfig, "other");
      console.log(otherApp.name);

      var otherStorage = otherApp.storage();
      var otherDatabase = otherApp.database();
      

      $("#searchCity").on("click", function(){
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var budget = $("#budget").val().trim();

        otherDatabase.ref().push({
            city: city,
            state: state,
            budget: budget,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
          });
      });

      
});