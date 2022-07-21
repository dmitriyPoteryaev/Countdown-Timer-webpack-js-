import "../../../style/Greeting.scss";
import "../../../style/Inputs.scss";
import CounterTimer from "./CounterTimer.js";
import Clear from "../ShowOrHidePage/Clear.js";
import Show from "../ShowOrHidePage/Show.js";
// import CreateList from "./CreateList.js";
import IMask from 'imask';
import CheckDate from '../utilits/CheckDate.js'
import CheckInput from '../utilits/CheckInput.js'

function Greeting(generalModules) {

  let curentModule =  document.querySelector('.greeting');


  Clear(generalModules);
  Show(curentModule);

  const ButtonEve = document.querySelector(".Plan");
  const allInput =[
  
  document.querySelector(".event"),
  document.querySelector(".date")]

  var dateMask = IMask(
    allInput[1],
    {
      mask: Date,
      min: new Date(2022, 0, 1),
      max: new Date(2030, 0, 1),
      lazy: false
    });


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

    CheckDate(allInput[1].value) || !allInput[0].value.trim()||new Date()>=new Date(`${allInput[1].value.slice(0,2)} ${Month[allInput[1].value.slice(3,5)]} ${allInput[1].value.slice(-4)}`)
      ? CheckInput(allInput)
      :
      (CounterTimer(allInput[1].value, allInput[0].value, generalModules)) ;
  });





 

  


 }

export default Greeting;
