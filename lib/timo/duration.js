
var moment = require("moment");


function Duration() {

}

Duration.prototype = {
      
    parts: {
        milliseconds: 0,
        seconds     : 0,
        minutes     : 0
    },
    
    string: {
        milliseconds: "millisecond",
        seconds     : "second",
        minutes     : "minute"
    },
        
    elapsed: 0,
    
    calculate: function(elapsed)
    {
        this.elapsed = elapsed;
        this.parts.milliseconds = moment.duration(this.elapsed).milliseconds()
        this.parts.seconds      = moment.duration(this.elapsed).seconds()
        this.parts.minutes      = moment.duration(this.elapsed).minutes()
        return this;
    },
    
    getMiliseconds: function()
    {
        return this.parts.minutes >= 1
            ? ""
            : this.getTimePart("milliseconds");
    },
    
    getTimePart: function(key)
    {
        return this.parts[key] === 0
            ? ""
            : this.parts[key]+" "+this.getTimeString(key)+" ";
    },
    
    getTimeString: function(key)
    {
        return this.string[key]
            + (this.parts[key] == 1 ? "" : "s");
    },
    
    humanize: function()
    {
        return [
            this.getTimePart("minutes"),
            this.getTimePart("seconds"),
            this.getMiliseconds()
        ].join("");
    }
};

module.exports = new Duration();