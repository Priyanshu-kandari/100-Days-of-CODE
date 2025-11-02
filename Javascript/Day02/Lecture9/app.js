const d = new Date();
console.log(d);   //2025-11-02T11:32:32.517Z
console.log(d.toDateString());  //Sun Nov 02 2025
console.log(d.toString());  //Sun Nov 02 2025 17:04:10 GMT+0530 (India Standard Time)
console.log(d.toISOString());  //2025-11-02T11:34:39.134Z
console.log(typeof d);  //object
console.log(d.getDate());  //2
console.log(d.getDay());  //0  (sunday)
console.log(d.getMonth());  //10 (for nov becuase of zero indexing) 
console.log(d.getFullYear());  //2025
console.log(d.getMilliseconds());  //93
console.log(d.getMinutes());  //20
console.log(d.getTime());  //1762084380040

const now = Date.now()
console.log(now);  //1762084507069


//while setting custom date if we are giving it in string form, it will index month from 1 and if we give custom date in number form it will index from 0
const a = new Date("2025-11-2")
console.log(a.toDateString());  //Sun Nov 02 2025
 
const b = new Date(2025,11,2)
console.log(b.toDateString());  //Tue Dec 02 2025


//setting date component
const c = new Date()
c.setDate(10);
c.setFullYear(2026);
console.log(c);


//Date calculation
const date1 = new Date();
const date2 = new Date("2026-04-25");
console.log(date2-date1);  //14963803900 miliseconds


//countdown timer for olympics
//Days,hours,minutes,seconds

const date10 = new Date();
const date20 = new Date("2028-07-14T00:00:00");

const date30 = date20-date10;
const days = Math.floor(date30/(1000*60*60*24));
const hours = Math.floor((date30/(1000*60*60))%24);
const minutes = Math.floor((date30/(1000*60))%60)
const seconds = Math.floor((date30/(1000))%60)
console.log(`Olympics countdown: Days:${days} hours:${hours} minutes:${minutes} seconds:${seconds}`);