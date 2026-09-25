function jscheck() {
    document.getElementsByTagName("BODY")[0].classList.remove("no-js");
}
//theming local storage
if (localStorage.getItem("theme") != null) {
    getColour = localStorage.theme;
    document.body.className = getColour;
}
else { 
    document.body.classList.add('lightTheme') 

}



let scheme = document.querySelector('meta[name="theme-color"]')

const dayButton = document.getElementById('night');
dayButton.addEventListener('click', () => {
    setColour = "lightTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
    scheme.setAttribute('content', 'rgb(239, 233, 228)');
});

const nightButton = document.getElementById('day');
nightButton.addEventListener('click', () => {
    setColour = "darkTheme"
    document.body.className = setColour
    localStorage.setItem("theme", setColour);
    scheme.setAttribute('content', 'rgb(10, 10, 25)');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "darkTheme" : "lightTheme";
    const metaColor = event.matches ? "rgb(10, 10, 25)" : "rgb(239, 233, 228)";
    setColour = newColorScheme
    document.body.className = setColour
    scheme.setAttribute('content', metaColor);
});

if (localStorage.getItem("theme") == 'lightTheme') {
    scheme.setAttribute('content', 'rgb(239, 233, 228)');
}

if (localStorage.getItem("theme") == 'darkTheme') {
    scheme.setAttribute('content', 'rgb(10, 10, 25)');
}

/* Image lightbox dialog handler */
(function () {
    const imageDialog = document.getElementById('image-dialog');
    const dialogImage = document.getElementById('dialog-image');
    const dialogCaption = document.getElementById('dialog-caption');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogPreset = document.getElementById('dialog-preset');
    const dialogDate = document.getElementById('dialog-date');
    const dialogDimensions = document.getElementById('dialog-dimensions');
    const dialogCamera = document.getElementById('dialog-camera');
    const dialogExposure = document.getElementById('dialog-exposure');
    const dialogDetailLink = document.getElementById('dialog-detail-link');

    if (!imageDialog || !dialogImage) return;

    const setDialogData = (link) => {
        const title = link.dataset.title || 'Untitled';
        const alt = link.dataset.alt || title;
        const detailUrl = link.dataset.detailUrl || '#';
        const preset = link.dataset.preset || '';

        dialogImage.src = link.href;
        dialogImage.alt = alt;
        dialogCaption.textContent = alt;
        dialogTitle.textContent = title;

        dialogPreset.textContent = preset;
        dialogPreset.hidden = !preset;

        dialogDate.textContent = link.dataset.date || '—';
        dialogDimensions.textContent = link.dataset.dimensions || '—';
        dialogCamera.textContent = link.dataset.camera || '—';
        dialogExposure.textContent = link.dataset.exposure || '—';
        dialogDetailLink.href = detailUrl;
        dialogDetailLink.textContent = detailUrl && detailUrl !== '#' ? 'View full details' : 'Open image';
    };

    document.addEventListener('click', (event) => {
        const link = event.target.closest && event.target.closest('a.image-lightbox');
        if (!link) return;
        event.preventDefault();

        setDialogData(link);

        document.body.style.overflow = 'hidden';
        imageDialog.showModal();
    });

    imageDialog.addEventListener('click', (event) => {
        if (event.target === imageDialog) {
            imageDialog.close();
        }
    });

    const closeBtn = document.getElementById('dialog-close');
    if (closeBtn) closeBtn.addEventListener('click', () => imageDialog.close());

    imageDialog.addEventListener('close', () => {
        document.body.style.overflow = '';
        dialogImage.src = '';
        dialogImage.alt = '';
        dialogCaption.textContent = '';
        dialogTitle.textContent = 'Untitled';
        dialogPreset.textContent = '';
        dialogPreset.hidden = true;
        dialogDate.textContent = '—';
        dialogDimensions.textContent = '—';
        dialogCamera.textContent = '—';
        dialogExposure.textContent = '—';
        dialogDetailLink.href = '#';
        dialogDetailLink.textContent = 'View full details';
    });
})();