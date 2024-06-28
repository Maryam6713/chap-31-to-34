//-----Get key word-----//
var now = new Date()
console.log(now)

var now = new Date()
var str = now.toString()
console.log(str)
console.log(typeof(str))

var now = new Date()
var time = now.getTime()
console.log(time)

var now = new Date()
var year = now.getFullYear()
console.log(year)

var now = new Date()
var month = now.getMonth()
console.log(month)

var now = new Date()
var day = now.getDay()
console.log(day)

var now = new Date()
var currentDate = now.getDate()
console.log(currentDate)

var now = new Date()
var currentHour = now.getHours()
console.log(currentHour)

var now = new Date()
var currentMinutes = now.getMinutes()
console.log(currentMinutes)

var now = new Date()
var currentSec = now.getSeconds()
console.log(currentSec)

var now = new Date()
var currentMilliSec = now.getMilliseconds()
console.log(currentMilliSec)

var days = ["monday", "tuesday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"]
var currentDay = days[now.getDay()]

console.log(currentDay);

var months = ["january", "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"]
var currentmonth = months[now.getMonth()]

console.log(currentmonth);


//---------Remaining days of my birthday---//
 var myBirthDay = new Date(now.getFullYear(), 6 , 26)
var remainingTime = myBirthDay - now;

var reamingDays = Math.floor(remainingTime/(1000*60*60*24))

console.log("Remaining days of my birthday",reamingDays);

//---------Set key Word----------//

var d = new Date();
 d.setMonth(11);
 console.log(d);

 var b = new Date();
 b.setFullYear(2021);;
 console.log(b);

 var f = new Date();
 f.setDate(30);
 console.log(f);

 var g = new Date();
 g.setMinutes(40);
 console.log(g);

 var s = new Date();
 s.setMilliseconds(999);
 console.log(s);

 var g = new Date();
 g.setSeconds(40);
 console.log(g);