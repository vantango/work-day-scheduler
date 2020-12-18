// Sets current date
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
$(".date").text(currentDay);

// Sets current time
var currentTime = dayjs().hour();
var timeFormat = dayjs().format("h A").toString()


// var workSchedule = [
//     { time: "9AM", item: "" },
//     { time: "10AM", item: "" },
//     { time: "11AM", item: "" },
//     { time: "12PM", item: "" },
//     { time: "1PM", item: "" },
//     { time: "2PM", item: "" },
//     { time: "3PM", item: "" },
//     { time: "4PM", item: "" },
//     { time: "5PM", item: "" }
// ]

// 
$(".row").each(function () {
    var hour = $(this).find(".time-block").text()
    console.log("hour", hour)
    var textInput = localStorage.getItem(hour);
    // console.log(textInput)
    $(this).find(".textarea").val(textInput)

    // Setting color code to current hour
    hourNum = parseInt($(this).find(".time-block").text().split(" ")[0])
    if (hourNum < currentTime) {
        $(this).addClass("past")
        console.log(hour)
    } else if (hourNum === currentTime) {
        $(this).removeClass("past")
        $(this).addClass("present")
    } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
    }

    // test code
    // if (hour === timeFormat) {
    //     console.log("test message")
    //     $(this).addClass("present")
    // }
})

// Sets local storage on button click
$(".saveBtn").on("click", function () {
    var time = $(this).siblings(".time-block").text()
    var description = $(this).siblings(".textarea").val()
    localStorage.setItem(time, description);
})

