var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //Timeblocks from 9a.m to 5p.m.

var currentHour = moment().hour(); //Actual time.

setInterval(() => { //Day
    var nowReadable = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');;
    currentDay.textContent = nowReadable;
},1000);

function displayHour() { //Creates boxes
    for (let i = 0; i < workHours.length; i++) { //Standard for loop.

        var row = $("<div class= 'row'>"); // dynamic HTML
        var col1 = $("<div class = 'h-25  col-sm-1 text-right shadow-lg bg-light rounded'>"); //move the text to the right label

        var getWorkHour = workHours[i] + " P.M." //Adds p.m. to 12

            if (workHours[i] <= 11) { //Adds a.m. and p.m. accordingly.
                getWorkHour = workHours[i] + " A.M"               
            } else if (workHours[i] > 12) { //Converts 12+ numbers to p.m.
                getWorkHour = workHours[i] -12 + " P.M." 
            }

        col1.append(getWorkHour); //Creates time of day column.

        var col2 = $("<div class ='col-sm-10'>"); 

        var textarea = $("<textarea class ='form-control text-black'>");
        textarea.attr("id", "textarea" + i);
       

        if(currentHour > workHours[i]) {
            textarea.addClass("bg-warning");
        }

        if(currentHour === workHours[i]) {
            textarea.addClass("bg-danger");
        }

        if(currentHour < workHours[i]) {
            textarea.addClass("bg-success");
        }

        //local storage
        var getText = localStorage.getItem("textarea" + i);

        textarea.text(getText);

        col2.append(textarea) //Creates task textbox column.

        var col3 = $("<div class = 'col-sm-1'>");

        var button = $("<button>");

        button.addClass("saveButton bg-primary text-white rounded-pill");

        button.text("Save");

        col3.append(button);




        row.append(col1, col2, col3)
        $("#planner").append(row)
    }
}



displayHour();

$(".saveButton").on("click", function() {

})
