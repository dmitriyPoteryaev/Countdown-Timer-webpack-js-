// Ранее планировался , чтобы месяц вводился не в виде цифры, а в виде букв.Для этого был придуман данный функциональный компонент.
// Чтобы отсеивать лишние название месяцев.
// Возможно ,в дальнейшем данный компонент будет переиспользоваться


function CreateList(List, Block, input) {


  Object.values(List).filter((element)=>
   input.every((InpEl)=>element.
   toLowerCase().
   split('').
   includes(InpEl.toLowerCase()))).
   forEach((element, i) => {
    i === 0
      ? Block.insertAdjacentHTML(
          "beforeend",
          `<span>Выберите месяц</span>
            <li>${element}</li>`
        )
      : Block.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
  });
}

export default CreateList;
