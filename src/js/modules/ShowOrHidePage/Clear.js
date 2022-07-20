function Clear(Modules) {
  Array.isArray(Modules)
    ? Modules.forEach((element) => {
        element.style.display = "none";
      })
    : (Modules.style.display = "none");
}

export default Clear;
