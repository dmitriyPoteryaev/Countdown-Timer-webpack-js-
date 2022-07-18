import "../../style/Greeting.scss";
import CounterTimer from "./CounterTimer.js";
import Clear from "./Clear.js";
import Show from "./Show.js";
import CreateList from "./CreateList.js";

function Greeting(generalModules) {
  Clear(generalModules);
  Show(document.querySelector(".greeting"));

  const ButtonEve = document.querySelector(".Plan");
  const inputDate = document.querySelector(".date");
  const inputEve = document.querySelector(".event");
  const Attent = document.querySelector(".Attention");
  const Months = document.querySelector(".ListMonth");

  const Month = {
    Jan: "Январь",
    Feb: "Февраль",
    Mar: "Март",
    Apr: "Апрель",
    May: "Май",
    Jun: "Июнь",
    Jul: "Июль",
    Aug: "Август",
    Sep: "Сентябрь",
    Oct: "Октябрь",
    Nov: "Ноябрь",
    Dec: "Декабрь",
  };

  inputDate.addEventListener("click", () => {
    Months.style.display === "none"
      ? (CreateList(Month, Months), Show(Months))
      : // <li value="Jan">Январь</li>
        //  <li value="Feb">Февраль</li>
        // <li value="Mar">Март</li>
        // <li value="Apr">Апрель</li>
        // <li value="May">Май</li>
        // <li value="Jun">Июнь/li>
        // <li value="Jul">Июль</li>
        // <li value="Aug">Август</li>
        // <li value="Sep">Сентябрь</li>
        // <li value="Oct">Октябрь</li>
        // <li value="Nov">Ноябрь</li>
        // <li value="Dec">Декабрь</li>
        ((Months.innerHTML = ""), Clear(Months));
  });

  ButtonEve.addEventListener("click", (event) => {
    event.preventDefault();

    !inputDate.value.trim() || !inputEve.value.trim()
      ? Attention()
      : CounterTimer(inputDate.value, inputEve.value, generalModules);
  });

  function Attention() {
    setTimeout(() => {
      Attent.style.display = "none";
    }, 3000);

    Attent.style.display = "flex";
  }
}

export default Greeting;
