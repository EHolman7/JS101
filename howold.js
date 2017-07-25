console.log("linked");

// 1. How many hours are in a year

var dpy = 365;
var hpd = 24;
var hpy = dpy * hpd;

console.log(hpy);
console.log("hours in a year");

// 2. How many minutes are in a decade

var mph = 60;
var ypd = 10;
var mpd = mph * hpd * dpy * ypd;

console.log(mpd);
console.log("minutes in a decade");


// 3. How many seconds old they are

var yrsIAM =32;
var spm = 60;
var secondsIAM = spm * mph * hpd * dpy * yrsIAM;

console.log(secondsIAM);
console.log("I am " +secondsIAM + " seconds old");


// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"


var arbitrary = 50000000;

if (secondsIAM > arbitrary) {
	console.log("I'm old ");
}
else if (secondsIAM < arbitrary){
	console.log("I'm young ");
}



