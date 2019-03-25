$(document).ready(function(){

    var request = require('request');  

    var host = 'data.usajobs.gov';  
    var userAgent = 'tibbsr09@gmail.com';  
    var authKey = 'w916VkihR1boAvNHmskUyEx0Cb/cjxKlCtLHcW7SfmE=';    

    request({      
        url: 'http://dev.usajobs.gov/JobSearch/Search/GetResults?Keyword=computer',      
        method: 'GET',      
        headers: {          
            "Host": host,          
            "User-Agent": userAgent,          
            "Authorization-Key": authKey      
        }  
    }, function(response, body) {      
        var data = JSON.parse(body);  
        console.log(data);
        console.log(response);
        
    });

    // $("#click-btn").on("click", function(event) {
    //     event.preventDefault();
    //     // var jobKey = $("#job-input").val().trim();
    //     var request = require('request');  

    //     var host = 'data.usajobs.gov';  
    //     var userAgent = 'tibbsr09@gmail.com';  
    //     var authKey = 'w916VkihR1boAvNHmskUyEx0Cb/cjxKlCtLHcW7SfmE=';    

    //     request({      
    //         url: 'https://data.usajobs.gov/api/search?Keyword=manager',      
    //         method: 'GET',      
    //         headers: {          
    //             "Host": host,          
    //             "User-Agent": userAgent,          
    //             "Authorization-Key": authKey      
    //         }  
    //     }, function(response, body) {      
    //         var data = JSON.parse(body);  
    //         console.log(data);
    //         console.log(response);
            
    //     });

    // });
});