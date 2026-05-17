function scrollToSkills(){

  document
  .getElementById("skills")
  .scrollIntoView({
    behavior:"smooth"
  });

}

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if(savedTheme === "dark"){
  document.body.classList.add("dark-theme");
}

updateThemeLabel();

function toggleTheme(){

  document.body.classList.toggle("dark-theme");

  const activeTheme = document.body.classList.contains("dark-theme")
  ? "dark"
  : "light";

  localStorage.setItem("portfolio-theme", activeTheme);

  updateThemeLabel();

}

function updateThemeLabel(){

  if(!themeToggle){
    return;
  }

  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

}

console.log("Portfolio aktif!");
