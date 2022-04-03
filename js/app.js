var onePieceFilmDate = new Date("Aug 6, 2022 00:00:00").getTime();

var countdown = setInterval(function() {
    var currentDate = new Date().getTime();
    var timeLeft = onePieceFilmDate - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(timeLeft % (1000 * 60) / 1000);


    document.getElementById("chrono").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

    if(timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("chrono").innerHTML = "ONE PIECE FILM RED is now on theaters!!!"
    }
}, 1000)