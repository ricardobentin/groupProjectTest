//what user is searching for in Rovi
var roviQ;
var roviAPIKey = "m4p8xgjfhzn8yr2yfkq7mpw3";
var sgQ;
var sgID = "MTIzMDQxNjh8MTUzMTg3OTg5My43Ng";
var sgSecret = "97e028cca25f9000d81111771fd84a89bef791d0675c8be06d6d50b4547e3096";
var ip;
var gnQ;
var gnAPIKey = "vbwkapt65qwb44jjw5vdc98h";
var zip;

$("#roviSubmit").on("click", function () {
    event.preventDefault();
    roviQ = $(this).val().trim();
    console.log(roviQ);
    var roviQueryURL = `http://api.rovicorp.com/search/v2.1/video/search?entitytype=onetimeonly&query=${roviQ}&rep=1&size=20&offset=0&language=en&country=US&format=json&apikey=${roviAPIKey}&sig=01b4e629053d3095fb67f1ad3e41f294`

    $.get(roviQueryURL).then(function (roviResponse) {
        console.log(roviResponse);
    });
});

$("#sgSubmit").on("click", function () {
    event.preventDefault();
    sgQ = $("#sgInput").val().trim();
    console.log("this is the seat geek query: " + sgQ);
    var sgQueryURL = `https://api.seatgeek.com/2/events?client_id=${sgID}&client_secret=${sgSecret}&geoip=${ip}`;
    $.get(sgQueryURL).then(function (sgResponse) {
        console.log(sgResponse);
    });

});

//get user's IP address
$.getJSON('https://json.geoiplookup.io/?callback=?', function (data) {
    console.log(JSON.stringify(data, null, 2));
    ip = data.ip
    console.log(ip);
    zip = parseInt(data.postal_code);
    console.log("this is the zip: " + zip);
});

$("#gnMovies").on("click", function () {
    event.preventDefault();
    var gnMovieQueryURL = `http://data.tmsapi.com/v1.1/movies/showings?startDate=2018-07-19&zip=${zip}&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnMovieQueryURL);
    $.get(gnMovieQueryURL).then(function (gnMovieResponse) {
        console.log(gnMovieResponse);
        //notes on movies
        //need to figure out how to send a radius or even change locale if you don't want it to look up a movie from where you are at that time
        //need to figure out what the output should look like
    });
});

$("#gnTV").on("click", function () {
    event.preventDefault();
    var gnTVQueryURL = `http://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=2018-07-19T16%3A30Z&api_key=${gnAPIKey}`;
    console.log("This is the grace note Movie Showtime query: " + gnTVQueryURL);
    $.get(gnTVQueryURL).then(function (gnTVResponse) {
        console.log(gnTVResponse);
        //notes on tv
        //need to figure out how to get line ups customized to the user. There should also be a way to send in a search term to narrow the search. Right now all lineups are against line up id USA-TX42500-X
        //need to figure out what the output should look like
    });
});

$("#gnSports").on("click", function () {
    event.preventDefault();
    var gnSportsQueryURL = `http://data.tmsapi.com/v1.1/sports/all/events/airings?lineupId=USA-TX42500-X&startDateTime=2018-07-19T16%3A30Z&api_key=${gnAPIKey}`;
    console.log("This is the grace note what sports are on TV query: " + gnSportsQueryURL);
    $.get(gnSportsQueryURL).then(function (gnSportsResponse) {
        console.log(gnSportsResponse);
        //notes on Sports
        //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
        //need to figure out what the output should look like
    });
});

$("#gnTVMovies").on("click", function () {
    event.preventDefault();
    var gnTVMoviesQueryURL = `http://data.tmsapi.com/v1.1/movies/airings?lineupId=USA-TX42500-X&startDateTime=2018-07-19T16%3A30Z&api_key=${gnAPIKey}`;
    console.log("This is the grace note what movies are on TV query: " + gnTVMoviesQueryURL);
    $.get(gnTVMoviesQueryURL).then(function (gnTVMoviesResponse) {
        console.log(gnTVMoviesResponse);
        //notes on Movies are on TV
        //need to figure out how th differentiate the line up and the start date format - research ISO Date/Time format (ISO 8601).
        //need to figure out what the output should look like
    });
});