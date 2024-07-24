const center = document.querySelector('.center');
const clk = document.getElementById('clock');
console.log(clk);
// clk.innerText = curTime.toLocaleTimeString;
//whenever u see a fxn defination like 
//function toLocaleTimeString() { [native code] } this one its means actually its a method 
//and you are just referencing its name to fix it u must have to call it like add parenthisis ()
// //note that if there is a thing which is changing with time or in a interval so 
// for a small thing of task call for setInterval(param1{the function which has to be change with the given interval},param2(time in miliseconds like 1000ms = 1sec))
// don't use and say that u will use chromjob u will fail the interview 
// note that setInterval is also responsible for many of the interview failures of programmers
setInterval(function (){
  let curTime = new Date();
  clk.innerText = curTime.toLocaleTimeString();

}, 1000);