
var duration = require("./timo/duration");

function Timo() {

}

Timo.prototype = {
      
    timer: {
        start  : null,
        stop   : null,
        elapsed: null
    },
    
    start: function()
    {
        this.setNowInTimerForKey("start");
        return this;
    },
    
    stop: function()
    {
        this.setNowInTimerForKey("stop");
        return this;
    },
    
    duration: function()
    {
        return duration
            .calculate(this.timer.stop - this.timer.start)
            .humanize();
    },
    
    setNowInTimerForKey: function(key)
    {
        this.timer[key] = new Date().getTime();
    }
};

module.exports = new Timo();