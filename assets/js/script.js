/* PSEUDOCODE
    Planner Displays current day, date, and time.
    Input Tasks for respective time of day
    Save task
    As current time moves closer to set, time blocks change colors.
*/

setInterval(() => {
    var nowReadable = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');;
    currentDay.textContent = nowReadable;
},1000);

