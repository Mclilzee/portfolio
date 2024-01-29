const navToggle = document.querySelector("header .nav-toggle");
if (navToggle == undefined) {
  throw Error("Could not find nav toggle element");
}

const navList = document.querySelector("header > nav > ul");
if (navList == undefined) {
  throw Error("Couldn't find nav links");
}

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navList.addEventListener("click", (e) => {
  if (e.target.href == undefined) {
    return;
  }

  document.body.classList.remove("nav-open");
});
