var selectors = [
    "#app > div > div.settings_header_Y9USz"
];

setTimeout(() => {
    selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });
}, 500); 
