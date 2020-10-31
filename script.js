//insert search-city on click into document ready function

$( document ).ready(function() {

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
                appid: "50d4c88b6039a0b2d81971032a239e46",
                units: "imperial"
            },
            success: function( result ) {
                //console.log(result)
                //Add in humidity, wind speed and UV Index
                $("#input-main-temp").text(result.main.temp)
                $("#input-main-humidity").text(result.main.humidity)
                $("#input-main-wind-speed").text(result.wind.speed)
                $.ajax({
                    url: "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall",
                    data: {
                        lat: result.coord.lat,
                        lon: result.coord.lon,
                        appid: "50d4c88b6039a0b2d81971032a239e46"
                    },
                    success: function( result ) {
                        $("#input-main-uv-index").text(result.current.uvi);
                        //console.log(result)
                        for (let index = 1; index < 3; index++) {
                            var forecast = result.daily[index];
                            
                            // Convert timestamp to milliseconds
                            var date = new Date(forecast.dt*1000);
                            $("#day" + index).text(date.toLocaleDateString("en-US"));
                            $("#input-temp-day" + index).text(forecast.temp.day);
                            $("#input-humidity-day" + index).text(forecast.humidity);
                        }
                    },
                });
            }
        }); 



        /*$.ajax({
            url: "https://api.openweathermap.org/data/2.5/onecall",
            data: {
                q: searchCity,
                appid: "50d4c88b6039a0b2d81971032a239e46",
                units: "imperial",
            },
            success: function( result ) {
                console.log(result)
            }
        });*/
    }); 
    
});