ClockController()
function ClockController(){
    $.get(window.location.pathname + '-clock.html', function(data){
        $('.main-container').append(data)
        injectDate();
        injectTime();
        var intervalStartTime = (60-(new Date().getSeconds())%60)*1000;
        console.log(intervalStartTime)
        setTimeout(function(){injectTime(); injectionInterval()}, intervalStartTime);
        WeatherController();
        $('#name').html(localStorage.getItem('name')|| localStorage.setItem('name', prompt("Hi, what's your name?")))
    })
    function injectionInterval(){
        setInterval(function(){injectTime()}, 60000);
    }
    function injectDate(oldDate){
        var date = new Date()
        var day = date.getDate().toString();
        var month = date.getMonth();
        var months = "January, February, March, April, May, June, July, August, September, October, November, December".split(', ');
        var readableMonth = `${months[month]}`;
        var readableDay = `${day}${day[1]==1? "st" : day[1]==2? "nd" : day[1]==3? "rd" : "th"}`
        $('#date').html(readableDay);
        $('#month').html(readableMonth)
    }

    function injectTime(){
        var date = new Date()
        var militaryHour = date.getHours();
        var hour = militaryHour%12;
        var minute = date.getMinutes().toString();
        var readableTimeOfDay = militaryHour<12? "morning" : militaryHour<17? "afternoon" : militaryHour<20? "evening" : "night";
        var readableTime = `${hour? hour : "12"}:${!!minute[1]? minute : "0" + minute}`;
        $('#timeofday').html(readableTimeOfDay)
        $('#time').html(readableTime);
    }
}