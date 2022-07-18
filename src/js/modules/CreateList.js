function CreateList(List, Block) {
  Object.values(List).forEach((element, i) => {
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
