$(document).ready(function() {
// applies js once page is fully loaded


if(localStorage.getItem("locStorage")){
    times = JSON.parse(localStorage.getItem("locStorage"));
}

var timetable = [
{hour: 09, eventInput: " " }, // 9 am
{hour: 10, eventInput: " " }, // 10 am
{hour: 11, eventInput: " " }, // 11 am
{hour: 12, eventInput: " " }, // 12 pm noon
{hour: 13, eventInput: " " }, // 1 pm
{hour: 14, eventInput: " " }, // 2 pm
{hour: 15, eventInput: " " }, // 3 pm
{hour: 16, eventInput: " " }, // 4 pm
{hour: 17, eventInput: " " }, // 5 pm
]

if(localStorage.getItem("savedInput")) {
    timetable = JSON.parse(localStorage.getItem("savedInput"));
}

// applies current date / time to currTime class
var elements = document.getElementsByClassName("currTime");
for (var i = 0; i < elements.length; i++) {
    elements[ i ].innerHTML = moment().format("MM/DD/YYYY HH:MM A")
}




});
