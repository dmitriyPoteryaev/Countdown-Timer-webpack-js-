import '../../../style/CounterTimer.scss'
import Show from '../ShowOrHidePage/Show.js'
import Clear from '../ShowOrHidePage/Clear.js'

function CounterTimer(date,eve,generalModules) {

    let curentModule =  document.querySelector('.CounterTimer');

    Clear(generalModules)
    Show(curentModule)

    const Month = {
        '01': "Jan",
        '02': "Feb",
        '03': "Mar",
        '04': "Apr",
        '05': "May",
        '06': "Jun",
        '07': "Jul",
        '08': "Aug",
        '09': "Sep",
        '10': "Oct",
        '11': "Nov",
        '12': "Dec"
  };

  

    
    const NameEve = document.querySelector('.NameEve');
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days'); 
    

    function ShowTime() {

        NameEve.innerHTML = eve

        const currentTime = new Date();
    
        const remainsTime = (new Date(`${date.slice(0,2)} ${Month[date.slice(3,5)]} ${date.slice(-4)}`) - currentTime)/1000;

        seconds.innerHTML = PlusZero(Math.floor(remainsTime) % 60)
        minutes.innerHTML = PlusZero(Math.floor(remainsTime/ 60 )%60)
        hours.innerHTML = PlusZero(Math.floor((remainsTime/3600)%24))
        days.innerHTML = PlusZero(Math.floor( (remainsTime/3600)/24))
       
    }

    function PlusZero(time) {
        return time < 10 ? `0${time}` : time

    }

    setInterval(ShowTime, 1000)

}


export default CounterTimer