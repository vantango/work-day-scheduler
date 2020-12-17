// Sets current date
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
$(".date").text(currentDay);

// Sets current time
var currentTime = dayjs().hour();

var workSchedule = [
    {
        time: "9AM",
        event: ""
    },
    {
        time: "10AM",
        event: ""
    },
    {
        time: "11AM",
        event: ""
    },
    {
        time: "12PM",
        event: ""
    },
    {
        time: "1PM",
        event: ""
    },
    {
        time: "2PM",
        event: ""
    },
    {
        time: "3PM",
        event: ""
    },
    {
        time: "4PM",
        event: ""
    },
    {
        time: "5PM",
        event: ""
    }
]

// Set local storage
localStorage.setItem("schedule", JSON.stringify(workSchedule));

// Pull local storage
var textInput = JSON.parse(localStorage.getItem("schedule"));
console.log(textInput)
if (textInput) {
    schedule = textInput;
};



