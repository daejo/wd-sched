/* DYNAMIC JAVA SCRIPT */
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //Array Timeblocks from 9a.m to 5p.m.

var currentHour = moment().hour(); //Hour timer.

setInterval(() => { //Day, date, time display.
    var nowReadable = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');;
    currentDay.textContent = nowReadable;
},1000);

function displayHour() { //Creates boxes
    for (let i = 0; i < workHours.length; i++) { //Standard for loop.

        var row = $("<div class= 'row'>"); // dynamic HTML
        var col1 = $("<div class = 'h-25  col-sm-1 text-right shadow-lg bg-light rounded'>"); //Moves the text to the right label

        var getWorkHour = workHours[i] + " P.M." //Adds p.m. to 12

            if (workHours[i] <= 11) { //Adds a.m. and p.m. accordingly.
                getWorkHour = workHours[i] + " A.M"               
            } else if (workHours[i] > 12) { //Converts 12+ numbers to p.m.
                getWorkHour = workHours[i] -12 + " P.M." 
            }

        col1.append(getWorkHour); //Creates time of day column.

        /* TEXT AREA */
        var col2 = $("<div class ='col-sm-10'>"); //Creates container for text area.
        var textarea = $("<textarea class ='form-control text-black'>"); //Makes block editable with text input.
        textarea.attr("id", "textarea" + i);
       
        /* TEXT AREA BOX COLOR CHANGE */
        if(currentHour > workHours[i]) { //When its past due.
            textarea.addClass("bg-warning readonly");
        } else if(currentHour === workHours[i]) { //When its on that hour.
            textarea.addClass("bg-danger text-white");
        } else if(currentHour < workHours[i]) { //When its still on time.
            textarea.addClass("bg-success text-white");
        }

        /* LOAD LOCAL STORAGE */ 
        // var getText = localStorage.getItem("textarea" + i);
        var getText = JSON.parse(localStorage.getItem("textarea" + i));
        textarea.text(getText);
        col2.append(textarea) //Creates task textbox column.

        /* BUTTONS */
        var col3 = $("<div class = 'col-sm-1'>"); //Creates button column container.
        var button = $("<button>");
        button.addClass("saveButton bg-primary text-white rounded-pill"); //Save button shape.
        button.text("Save");
        col3.append(button); // Creates Buttons column.

        /* ROWS */
        row.append(col1, col2, col3) //Consolidates all columns to each rows.
        $("#planner").append(row) //Creates rows.

        /* SAVE TO LOCAL STORAGE */
        $(".saveButton").on("click", function() {
            var setText = localStorage.setItem("textarea" + i, JSON.stringify(textarea));
            // var setText = localStorage.setItem("textarea" + i);
            textarea.text(setText);
        })
    }
}

displayHour();





