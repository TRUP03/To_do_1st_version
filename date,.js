module.exports.getDate=getDate;

function getDate()
{
    var date = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = date.toLocaleDateString('en-Us', options);
    return day;
}


module.exports.getDay=getDay;

function getDay() {
    var date = new Date();

    var options = {
        weekday: "long",
    };

    var day = date.toLocaleDateString('en-Us', options);
    return day;
}