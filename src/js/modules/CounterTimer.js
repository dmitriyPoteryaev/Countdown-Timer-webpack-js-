import '../../style/CounterTimer.scss'
import Show from './Show.js'
import AllClear from './AllClear.js'



function CounterTimer(date,eve,allModules) {

    AllClear(allModules)
    Show(document.querySelector('.CounterTimer'))

console.log(date,eve)
    
    const NameEve = document.querySelector('.NameEve');
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');
    const month = document.getElementById('month');
   
 

    function ShowTime() {

        NameEve.innerHTML = eve

        const currentTime = new Date();
        const remainsTime = new Date(new Date(date) - currentTime);

        seconds.innerHTML = PlusZero(remainsTime.getSeconds())
        minutes.innerHTML = PlusZero(remainsTime.getMinutes())
        hours.innerHTML = PlusZero(remainsTime.getHours())
        days.innerHTML = PlusZero(remainsTime.getDate())
        month.innerHTML = PlusZero(remainsTime.getMonth())
       
    }

    function PlusZero(time) {
        return time < 10 ? `0${time}` : time

    }


    setInterval(ShowTime, 1000)



}


export default CounterTimer