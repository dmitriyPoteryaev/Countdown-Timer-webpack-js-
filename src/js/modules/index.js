import '../../style/style.scss'

const newYear = '1 Jan 2023';

const  seconds = document.getElementById('seconds');
const  minutes = document.getElementById('minutes');
const  hours = document.getElementById('hours');
const  days = document.getElementById('days');
const  month = document.getElementById('month');

function ShowTime(){
 
   const currentTime= new Date();
   const  remainsTime = new Date(new Date(newYear)-currentTime);
 
   seconds.innerHTML = PlusZero(remainsTime.getSeconds())
   minutes.innerHTML = PlusZero(remainsTime.getMinutes())
   hours.innerHTML = PlusZero(remainsTime.getHours())
   days.innerHTML = PlusZero(remainsTime.getDate())
   month.innerHTML = PlusZero(remainsTime.getMonth())

}

function PlusZero(time){
return time<10 ? `0${time}` : time

}


setInterval(ShowTime,1000)


