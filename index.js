const navToggle = document.querySelector("header .nav-toggle");
if (navToggle == undefined) {
  throw Error("Could not find nav toggle element");
}

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
