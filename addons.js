function makecards() {
    createCard(
        "Helper GPT",
        "Adds a Chat GPT sidebar",
        "Pooiod7",
        "Press CTRL + G to open the side bar",
        false, "//pooiod7.neocities.org/snips/helperGPT.js"
    );
}

var selectors = [
    "#app > div > div.settings_header_Y9USz",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(6)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(5)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(6)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(7)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(8)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(9)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(10)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(12)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(13)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(14)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(15)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(17)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(18)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(25)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(26)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(27)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(28)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(29)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(30)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(31)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(32)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(33)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(34)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(36)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(37)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(38)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(39)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(40)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(41)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(42)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(44)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(45)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(46)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(48)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(49)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(52)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(53)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(54)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(55)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(56)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(57)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(58)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(59)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(60)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(3)",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(1) > button",
    "#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2) > button",
    "#app > div > div.settings_addons_2LLFF > div > div.settings_footer-buttons_xTSXH"
];

setTimeout(() => {
    document.title = "Penguin Paint - Addons";
    selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });
}, 100); 

setTimeout(() => {
    const faviconlink = document.createElement('link');
    faviconlink.rel = 'icon';
    faviconlink.type = 'image/x-icon';
    faviconlink.href = 'https://penguinpaint.pages.dev/icons/favicon.png';
    document.head.appendChild(faviconlink);
    document.title = "Penguin Paint - Addons";

    selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });
}, 500); 

setTimeout(() => {
    const addonsElement = document.querySelector('#app > div > div.settings_addons_2LLFF > div > footer > span');
    if (addonsElement && addonsElement.textContent !== "Addons version 7fcab09") {
        addonsElement.textContent = "Addons out of date";
    }/** else {
        addonsElement.innerHTML = "Penguin Paint is <a src='https://github.com/pooiod/Penguinmod-Paint'>open source</a>!";
    }*/

    // const newButton = document.createElement('button');
    // newButton.className = 'settings_button_2ovv0';
    // newButton.textContent = 'Open on github';
    // newButton.onclick = () => window.location.href = 'https://github.com/pooiod/Penguinmod-Paint';
    
    // const referenceElement = document.querySelector('#app > div > div.settings_addons_2LLFF > div > div.settings_footer-buttons_xTSXH > button.settings_button_2ovv0.settings_reset-all-button_2Q-Zi');
    // referenceElement.parentNode.insertBefore(newButton, referenceElement);    
    
    selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.display = 'none';
        }
    });

    makecards();
}, 1000); 

function createCard(name, desc, credits, notice, isEnabled, scriptLink) {
    const container = document.querySelector('#app > div > div.settings_addons_2LLFF > div > div:nth-child(1) > div:nth-child(2)');
    if (!container) return;

    const cardId = `card_${encodeURIComponent(scriptLink)}`;

    function setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/;`;
    }    

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const savedState = getCookie(cardId);
    const initialEnabled = savedState === 'on' ? true : savedState === 'off' ? false : isEnabled;

    const card = document.createElement('div');
    card.className = 'settings_addon_3Oi_z';

    const header = document.createElement('div');
    header.className = 'settings_addon-header_271wJ';

    const label = document.createElement('label');
    label.className = 'settings_addon-title_6MhRl';

    const switchDiv = document.createElement('div');
    switchDiv.className = 'settings_addon-switch_2bf3g';

    const button = document.createElement('button');
    button.className = 'settings_switch_2V1f5';
    button.setAttribute('state', initialEnabled ? 'on' : 'off');
    button.setAttribute('role', 'checkbox');
    button.setAttribute('aria-checked', initialEnabled ? 'true' : 'false');
    button.tabIndex = 0;
    button.addEventListener('click', () => {
        const isChecked = button.getAttribute('state') === 'on';
        button.setAttribute('state', isChecked ? 'off' : 'on');
        button.setAttribute('aria-checked', !isChecked);
        card.classList.toggle('settings_addon-dirty_2o20T');
        details.style.display = isChecked ? 'none' : 'block';
        setCookie(cardId, isChecked ? 'off' : 'on');
    });
    switchDiv.appendChild(button);

    const img = document.createElement('img');
    img.className = 'settings_extension-image_1HlEn';
    img.src = 'static/assets/6f52bcc0310181641bac6fec51c69e13.svg';
    img.draggable = false;
    img.alt = '';

    const titleText = document.createElement('div');
    titleText.className = 'settings_addon-title-text_3QjlP';
    titleText.textContent = name;

    label.appendChild(switchDiv);
    label.appendChild(img);
    label.appendChild(titleText);

    const tagContainer = document.createElement('span');
    tagContainer.className = 'settings_tag-container_3yFc4';

    const operations = document.createElement('div');
    operations.className = 'settings_addon-operations_28nBd';

    header.appendChild(label);
    header.appendChild(tagContainer);
    header.appendChild(operations);

    const details = document.createElement('div');
    details.className = 'settings_addon-details_2CKwd';
    details.style.display = initialEnabled ? 'block' : 'none';

    const description = document.createElement('div');
    description.className = 'settings_description_2MbZo';
    description.textContent = desc;

    const creditContainer = document.createElement('div');
    creditContainer.className = 'settings_credit-container_2mHq7';

    const creditTitle = document.createElement('span');
    creditTitle.className = 'settings_credit-title_3f-yX';
    creditTitle.textContent = 'Credits:';

    const creditText = document.createElement('span');
    creditText.className = 'settings_credit_3grR6';
    creditText.textContent = credits;

    creditContainer.appendChild(creditTitle);
    creditContainer.appendChild(creditText);

    const noticeContainer = document.createElement('div');
    noticeContainer.className = 'settings_notice_2q6Z2';

    const noticeIconDiv = document.createElement('div');
    const noticeIcon = document.createElement('img');
    noticeIcon.className = 'settings_notice-icon_2lAT7';
    noticeIcon.src = 'static/assets/b987c9e2c37b17bd7c97f1fa47257d7e.svg';
    noticeIcon.alt = '';
    noticeIcon.draggable = false;
    noticeIconDiv.appendChild(noticeIcon);

    const noticeTextDiv = document.createElement('div');
    noticeTextDiv.textContent = notice;

    noticeContainer.appendChild(noticeIconDiv);
    noticeContainer.appendChild(noticeTextDiv);

    details.appendChild(description);
    details.appendChild(creditContainer);
    details.appendChild(noticeContainer);

    card.appendChild(header);
    card.appendChild(details);

    container.appendChild(card);
}
