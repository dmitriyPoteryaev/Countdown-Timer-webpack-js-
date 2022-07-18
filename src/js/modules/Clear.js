function AllClear(allModules) {
  Array.isArray(allModules)
    ? allModules.forEach((element) => {
        element.style.display = "none";
      })
    : (allModules.style.display = "none");
}

export default AllClear;
