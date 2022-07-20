import "../../../style/Greeting.scss";
import CounterTimer from "./CounterTimer.js";
import Clear from "../ShowOrHidePage/Clear.js";
import Show from "../ShowOrHidePage/Show.js";
// import CreateList from "./CreateList.js";
import IMask from 'imask';
import CheckDate from '../utilits/CheckDate.js'

function Greeting(generalModules) {

  let curentModule =  document.querySelector('.greeting');


  Clear(generalModules);
  Show(curentModule);

  const ButtonEve = document.querySelector(".Plan");
  var dateMask = IMask(
    document.querySelector(".date"),
    {
      mask: Date,
      min: new Date(2022, 0, 1),
      max: new Date(2030, 0, 1),
      lazy: false
    });

  const inputEve = document.querySelector(".event");
  const Attent = document.querySelector(".Attention");
  const AttentionTimes = document.querySelector('.AttentionTime');

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



  // inputDate.addEventListener("input", (event) => {
  //   event
  //     ? ((Months.innerHTML = ""),CreateList(Month, Months, event.target.value.split('')), Show(Months))
  //     :
  //       ((Months.innerHTML = ""), Clear(Months));
  // });

  ButtonEve.addEventListener("click", (event) => {
    event.preventDefault();

    CheckDate( document.querySelector(".date").value) || !inputEve.value.trim()
      ? Attention()
      :
      new Date()>=new Date(`${document.querySelector(".date").value.slice(0,2)} ${Month[document.querySelector(".date").value.slice(3,5)]} ${document.querySelector(".date").value.slice(-4)}`)
      ?AttentionTime()
      :
      (CounterTimer(document.querySelector(".date").value, inputEve.value, generalModules)) ;
  });

  function Attention() {
    setTimeout(() => {
      Clear(Attent)
    }, 3000);

    Show(Attent)
  }


  function AttentionTime() {
    setTimeout(() => {
      Clear(AttentionTimes)
    }, 3000);

    Show(AttentionTimes)
  }
 

  


 }

export default Greeting;
