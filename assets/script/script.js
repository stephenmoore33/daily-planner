var elements = document.getElementsByClassName("currTime");
for (var i = 0; i < elements.length; i++) {
    elements[ i ].innerHTML = moment().format("MM/DD/YYYY HH:MM A");
} // applies current date / time to currTime class