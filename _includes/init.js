function jscheck() {
  document.getElementsByTagName("BODY")[0].classList.remove("no-js");
}
//theming local storage
if (localStorage.getItem("theme") != null) {
    getColour = localStorage.theme;
    document.body.className = getColour;
}
else { document.body.classList.add('lightTheme') }

const dayButton = document.getElementById('night');
dayButton.addEventListener('click', () => {
    setColour = "lightTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
});

const nightButton = document.getElementById('day');
nightButton.addEventListener('click', () => {
    setColour = "darkTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
});