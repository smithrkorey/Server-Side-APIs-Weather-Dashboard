//insert search-city on click into document ready function

//$( document ).ready(function() {)

    //Example
    /*var searchHistory = []
    localStorage.setItem("history", json.stringify(searchHistory));
    searchHistory = json.parse(localStorage.getItem("history"));*/
    


    $("#search-city").on("click", function() {
        var searchCity = $("#input-search").val();
        console.log(searchCity);
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather",
            data: {
                q: searchCity,
                appid: "50d4c88b6039a0b2d81971032a239e46"
            },
            success: function( result ) {
                console.log(result)
                //Add in humidity, wind speed and UV Index
                $("#input-main-temp").text(result.main.temp)
                $("#input-main-humidity").text(result.main.humidity)
                $("#input-main-wind-speed").text(result.wind.speed)

              }
          });
    });
    

  