$(document).ready(function () {
    $('#newJoke').click(function () {
        console.log("Click!!")

        //Get file Using Postman Software  
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://api.icndb.com/jokes/random",
            "method": "GET",
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            console.log(response.value.joke);
            $("ul").append("<li>"+response.value.joke+"</li>")   
                
            });
        });

     

    });


    