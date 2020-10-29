$( document ).ready(function() {

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
                console.log(result.main.temp)
                //Add in humidity, wind speed and UV Index
                $("#input-main-temp").text(result.main.temp)
              }
          });
    });
    
}
  