// Current day displayed at top of scheduler
currentDay = $("#currentDay")
    .text(moment().format("dddd, MMMM D, YYYY"));

// Timeblocks display standard business hours 9am-5pm
// Timeblocks are color-coded to indicate past, present, future

// Get current time and compare to timeblocks on scheduler using moment.js

function getCurrentClass(rowHour) {
    var currentTime = moment();
    var rowTime = moment(currentTime);
    
    rowTime.set({hour: rowHour});

    if (currentTime.isSame(rowTime, "hour")) {
        return "present";
    }
    else if (currentTime.isAfter(rowTime, "hour")) {
        return "past";
    }
    else {
        return "future";
    }
}

// Set row color for each scheduled timeblock (hour) based on results

function setColor(hour) {
    var row = $("#" + hour);
    var className = getCurrentClass(hour);

    row.attr("class", "col-9 time-block " + className);
}

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (var i = 0; i < hours.length; i++) {
    setColor(hours[i]);
}

// Click on timeblock to enter an event (text)
// Click on save button to save text to local storage
// Saved events persist when page is refreshed

// Bonus: Add timer to refresh page periodically (for accurate color blocks)