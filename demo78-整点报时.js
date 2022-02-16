var myDate = new Date(); // 时间
var myDateHour = myDate.getHours(); // 时
var myDateMinutes = myDate.getMinutes(); // 分
var myDateS = myDate.getSeconds(); // 秒
var myDateMs = 1000 - myDate.getMilliseconds(); // 毫秒

var restTime = (3600 - (myDateMinutes * 60) - myDateS) * 1000 - myDateMs // 本小时内剩余的毫秒数

setTimeout(function () {
    myFunc();
}, restTime);

function myFunc() {
    console.log("整点报时！");
    setTimeout(function () {
        myFunc();
    }, 3600000);
}