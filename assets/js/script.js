var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentHour = moment().hour();

function displayHour() {
    for (let index = 0; index < workHours.length; index++) {

        var row = $("<div class= 'row'>"); // dynamic HTML
        var col1 = $("<div class = 'col-sm-2 text-right'>"); //move the text to the right label

        var getWorkHour = workHours[index] + " A.M."

        if (workHours[index] <= 12) {
            getworkHour = workHours[index] + " P.M"
            
            if (workHours[index] >=13) {
                getworkHour = workHours[index] -12 + " P.M." //convert to 1pm etc
            }
        }
        col1.append(getWorkHour);

        var col2 = $("<div class =col-sm-8>");

        var textarea = $("<textarea class =form-control>");
        textarea.attr("id", "textarea" + index);
       

        if(currentHour > workHours[index]) {
            textarea.addClass("bg-secondary");
        }



        if(currentHour === workHours[index]) {
            textarea.addClass("bg-danger");
        }



        if(currentHour < workHours[index]) {
            textarea.addClass("bg-success");
        }

        //local storage
        var getText = localStorage.getItem("textarea" + index);

        textarea.text(getText);

        col2.append(textarea)

        var col3 = $("<div class = col'col-sm-2>");

        var button = $("<button>");

        button.addClass("saveButton");

        button.text("Save");

        col3.append(button);




        row.append(col1, col2, col3)
        $("#planner").append(row)
    }
}



displayHour();

$(".saveButton").on("click", function() {

})
