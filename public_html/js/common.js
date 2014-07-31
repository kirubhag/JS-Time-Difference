/**
 * Created by kirubhakaran_g on 7/31/2014.
 *
 * Simple Javascript Plugin for Calculating time difference between two time.
 *
 * You can disable the console by setting up the enableConsoleLog value to false in config object.
 *
 */
var timeDiff = {
    config: {
        enableConsoleLog: true
    },
    logIt: function(msg) {
        self = this;
        if (self.config.enableConsoleLog)
            console.log(msg);
        else
            return msg;
    },
    errorLog: {
        'Error1': "End Time is less than Start Time.",
        'Error2': "Invalid Start Time.",
        'Error3': "Invalid End Time."
    },
    do: function(start, end) {
        self = this;
        if (self.validateTime(start)) {
            if (self.validateTime(end)) {
                start = start.split(":");
                end = end.split(":");
                var startDate = new Date(0, 0, 0, start[0], start[1], 0);
                var endDate = new Date(0, 0, 0, end[0], end[1], 0);
                if (startDate <= endDate) {
                    var diff = endDate.getTime() - startDate.getTime();
                    var hours = Math.floor(diff / 1000 / 60 / 60);
                    diff -= hours * 1000 * 60 * 60;
                    var minutes = Math.floor(diff / 1000 / 60);

                    // If using time pickers with 24 hours format, add the below line get exact hours
                    if (hours < 0)
                        hours = hours + 24;

                    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
                } else {
                    self.logIt(self.errorLog.Error1);
                }
            } else {
                self.logIt(self.errorLog.Error2);
            }
        } else {
            self.logIt(self.errorLog.Error3);
        }
    },
    validateTime: function(temp) {
        var regForTime = /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]$/;
        return regForTime.test(temp);
    }
};

//Example
// Give it in console to test it.
timeDiff.do('10:20', '12:00');
