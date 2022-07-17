import '../../style/Greeting.scss'
import CounterTimer from './CounterTimer.js'
import AllClear from './AllClear.js'
import Show from './Show.js'


function Greeting(allModules){

    AllClear(allModules)
    Show(document.querySelector('.greeting'))

const ButtonEve = document.querySelector('.Plan');
const inputDate = document.querySelector('.date');
const inputEve = document.querySelector('.event');
const Attent = document.querySelector('.Attention');

ButtonEve.addEventListener('click',(event)=>{

    event.preventDefault();
   

   !inputDate.value.trim()||!inputEve.value.trim()
    ?
    Attention()
    :
    CounterTimer(inputDate.value,inputEve.value,allModules)


}


)


function Attention(){
    setTimeout(()=>{
        Attent.style.display='none'

    },3000)

    Attent.style.display='flex'
}


}


export default Greeting