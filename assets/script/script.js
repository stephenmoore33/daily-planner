$(document).ready(function () {

    //applies js once page is fully loaded


    var timeTable = [

        { hour: 09, eventInput: " " }, // 9 am

        { hour: 10, eventInput: " " }, // 10 am

        { hour: 11, eventInput: " " }, // 11 am

        { hour: 12, eventInput: " " }, // 12 pm noon

        { hour: 13, eventInput: " " }, // 1 pm

        { hour: 14, eventInput: " " }, // 2 pm

        { hour: 15, eventInput: " " }, // 3 pm

        { hour: 16, eventInput: " " }, // 4 pm

        { hour: 17, eventInput: " " }, // 5 pm

    ];


    if (localStorage.getItem("savedInput")) {
        timeTable = JSON.parse(localStorage.getItem("savedInput"));
    }

    // applies current date / time to currTime class
    var elements = document.getElementsByClassName("currTime");
    for (var i = 0; i < elements.length; i++) {
        elements[ i ].textContent = moment().format("MM/DD/YYYY h:mm A")
    }

    for (i = 0; i < timeTable.length; i++) {
        var changeAP = " pm ";
        var hourlyColor = "past"
        var time = timeTable[ i ].hour;

        if (timeTable[ i ].hour <= 12) {
            changeAP = "am";
        }


        if (time > 12) {
            time -= 12
        }
        //subtrtacting from 24 hour time

        if (timeTable[ i ].hour == moment().hour()) {
            hourlyColor = "present";

        } else if (timeTable[ i ].hour == moment().hour()) {
            hourlyColor = "future";
        }


        var newRow = $("<div>").attr("class", "row");
        var hourValue = $("<div>").attr("class", "col-md-1 hour pt-4 ").text(time + changeAP);
        var inputValue = $("<textarea>").attr("id", timeTable[ i ].hour).attr("class", "col-md-10 " + hourlyColor).html(timeTable[ i ].eventInput);
        var saveBtn = $("<div>").attr("class", "col-md-1 saveBtn").attr("btn-id", timeTable[ i ].hour);
        var icon = $("<i>").attr("class", "far fa-save");



        newRow.append(hourValue, inputValue, saveBtn);
        saveBtn.append(icon);
        $(".container").append(newRow)

    }


    $(".saveBtn").on("click", function () {
        let btnId = $(this).attr("btn-id")
        let arrayIndex = timeTable.findIndex(i => i.hour == btnId)
        console.log(arrayIndex);
        timeTable[ arrayIndex ].eventInput = $("#" + btnId).val().trim()
        localStorage.setItem("savedInput", JSON.stringify(timeTable))


    })



}





);