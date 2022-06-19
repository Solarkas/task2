export default function initApp() {
  const div = document.querySelector(".cookie-consent");
  const button = document.querySelector(".cookie-consent__button");
  if (localStorage.getItem("cookie") === "ok") {
    div.className = div.className + " hide";
  }
  button.addEventListener("click", () => {
    if (localStorage.getItem("cookie") != "ok") {
      localStorage.setItem("cookie", "ok");
      div.className = div.className + " hide";
    }
  });
}
