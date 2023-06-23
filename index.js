function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    window.localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  }
}

let changeThemeButton = document.querySelector(".change-theme-button");
changeThemeButton.addEventListener("click", changeTheme);

//body.classList.toggle("dark");
