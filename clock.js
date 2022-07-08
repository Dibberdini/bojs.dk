Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function randomInt(min, max) { // min and max included 
    var seed = relaseDate.getDay();
    var x = Math.sin(seed++) * 10000;
    x = x - Math.floor(x);
    return Math.floor(x * (max - min + 1) + min)
}

let relaseDate = new Date();
let release = document.getElementById("release");
relaseDate = relaseDate.addDays(randomInt(25, 35));
releaseString = relaseDate.toLocaleDateString().replaceAll('.', '/')
releaseString = releaseString.replace('/20', '/')
release.innerText = "RELEASING " + releaseString;