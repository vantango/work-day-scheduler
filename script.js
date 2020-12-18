// Sets current date
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
$(".date").text(currentDay);

// Sets current time and sets it to a string so that the row function can read it
var currentTime = dayjs().hour();
var timeFormat = dayjs().format("h A").toString()

// Pulls saved user input from text area
$(".row").each(function () {
    var hour = $(this).find(".time-block").text()
    var textInput = localStorage.getItem(hour);
    $(this).find(".textarea").val(textInput)

    // Splits the time string so that the function only grabs the number
    hourNum = parseInt($(this).find(".time-block").text().split(" ")[0])

    // Setting color code to current hour
    if (hourNum < currentTime) {
        $(this).addClass("past")
    } else if (hourNum === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
    } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }
})

// Sets local storage on button click
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".time-block").text()
    var description = $(this).siblings(".textarea").val()
    localStorage.setItem(time, description);
})

