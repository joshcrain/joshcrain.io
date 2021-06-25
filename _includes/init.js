function jscheck() {
    document.getElementsByTagName("BODY")[0].classList.remove("no-js");
}
//theming local storage
if (localStorage.getItem("theme") != null) {
    getColour = localStorage.theme;
    document.body.className = getColour;
}
else { document.body.classList.add('lightTheme') }

let scheme = document.querySelector('meta[name="theme-color"]')

const dayButton = document.getElementById('night');
dayButton.addEventListener('click', () => {
    setColour = "lightTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
    scheme.setAttribute('content', 'rgb(255, 255, 255)');
});

const nightButton = document.getElementById('day');
nightButton.addEventListener('click', () => {
    setColour = "darkTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
    scheme.setAttribute('content', 'rgb(10, 10, 25)');
});