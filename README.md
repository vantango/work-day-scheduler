# Work Day Scheduler

## Project Description
I built a work day planner that allows the user to input daily tasks at work into the text field for each row. Then the user can save their data via the local storage so that their information is still there when they return. As each hour passed, the row turns grey. The current hour row is colored red, and all future hour rows are colored in green. The date and time are synced through the DayJS library.

### Table of Contents

#### Technologies Used
* Javascript
* HTML
* CSS

#### Processes
* I built each row and columns in html.
* Added the DayJS library CDN and created variables to house the current date and time.
* Created an event listener for each save button that would then store their input to the local storage for future reference.
* Built a function that allows the DayJS library to apply the corresponding color schemes to each row, depending on the current time.

#### Deployment
https://vantango.github.io/work-day-scheduler/

#### Repository
https://github.com/vantango/work-day-scheduler

![work-day-planner-screenshot](https://github.com/vantango/work-day-scheduler/blob/main/images/workdayscheduler.PNG?raw=true)