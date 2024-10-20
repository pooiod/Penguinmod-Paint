var newtitle = " Paint";
document.title = document.title.split(" - ")[0] + newtitle;

// Fun fact: if you load this into Turbowarp, it will mostly still work!

function extrabuttons() {
    var targetElement = document.querySelector('#react-tabs-3 > div > div.asset-panel_detail-area_2KQhH.box_box_2jjDp > div > div.paint-editor_top-align-row_25164 > div.paint-editor_controls-container_1Rqwy > div.paint-editor_canvas-controls_16wq3 > span');

    var buttonHTML = '<button style="background: #00c3ff; color: #fff; border: none; border-radius: 5px;" class="settings_button_2ovv0"><b>Open addons</b></button>';

    if (targetElement) {
        targetElement.insertAdjacentHTML('afterend', buttonHTML);

        var button = document.querySelector('.settings_button_2ovv0');
        button.addEventListener('click', function() {
            window.open("https://penguinmod-paint.pages.dev/addons");
        });

        buttonHTML = '<button class="settings_button_2ovv0 buttonsize" style="background: #00c3ff; color: #fff; border: none; border-radius: 5px;"><b>Set canvas size</b></button>';
        targetElement.insertAdjacentHTML('afterend', buttonHTML);

        button = document.querySelector('.buttonsize');
        button.addEventListener('click', function() {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            overlay.style.zIndex = '999';
            
            // Create modal
            const modal = document.createElement('div');
            modal.style.position = 'absolute';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.backgroundColor = '#fff';
            modal.style.padding = '30px';
            modal.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            modal.style.borderRadius = '10px';
            modal.style.zIndex = '1000';
            modal.style.width = '300px';
            modal.style.textAlign = 'center';
            
            const title = document.createElement('h2');
            title.textContent = 'Select Canvas Size';
            title.style.marginBottom = '20px';
            title.style.color = '#333';
            modal.appendChild(title);

            const widthInput = document.createElement('input');
            widthInput.type = 'number';
            widthInput.placeholder = 'Width (px)';
            widthInput.style.margin = '10px 0';
            widthInput.style.padding = '10px';
            widthInput.style.width = '100%';
            widthInput.style.border = '1px solid #ccc';
            widthInput.style.borderRadius = '5px';
            modal.appendChild(widthInput);

            const heightInput = document.createElement('input');
            heightInput.type = 'number';
            heightInput.placeholder = 'Height (px)';
            heightInput.style.margin = '10px 0';
            heightInput.style.padding = '10px';
            heightInput.style.width = '100%';
            heightInput.style.border = '1px solid #ccc';
            heightInput.style.borderRadius = '5px';
            modal.appendChild(heightInput);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'space-between';
            buttonContainer.style.marginTop = '20px';

            const confirmButton = document.createElement('button');
            confirmButton.textContent = 'Confirm';
            confirmButton.style.padding = '10px 15px';
            confirmButton.style.backgroundColor = '#28a745';
            confirmButton.style.color = '#fff';
            confirmButton.style.border = 'none';
            confirmButton.style.cursor = 'pointer';
            confirmButton.style.borderRadius = '5px';
            confirmButton.style.transition = 'background-color 0.3s';
            
            confirmButton.addEventListener('mouseenter', () => {
                confirmButton.style.backgroundColor = '#218838';
            });
            confirmButton.addEventListener('mouseleave', () => {
                confirmButton.style.backgroundColor = '#28a745';
            });
            buttonContainer.appendChild(confirmButton);

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel';
            cancelButton.style.padding = '10px 15px';
            cancelButton.style.backgroundColor = '#dc3545';
            cancelButton.style.color = '#fff';
            cancelButton.style.border = 'none';
            cancelButton.style.cursor = 'pointer';
            cancelButton.style.borderRadius = '5px';
            cancelButton.style.transition = 'background-color 0.3s';

            cancelButton.addEventListener('mouseenter', () => {
                cancelButton.style.backgroundColor = '#c82333';
            });
            cancelButton.addEventListener('mouseleave', () => {
                cancelButton.style.backgroundColor = '#dc3545';
            });
            buttonContainer.appendChild(cancelButton);

            modal.appendChild(buttonContainer);
            overlay.appendChild(modal);
            document.body.appendChild(overlay);

            // Event listeners for buttons
            confirmButton.addEventListener('click', () => {
                const width = parseInt(widthInput.value, 10);
                const height = parseInt(heightInput.value, 10);
                if (!isNaN(width) && !isNaN(height) && width > 0 && height > 0) {
                    setSize(width, height);
                    document.body.removeChild(overlay);
                } else {
                    alert('Please enter valid dimensions!');
                }
            });

            cancelButton.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    }
}

function openPaint() {
    if (document.title.split(" - ")[1]) {
        document.title = document.title.split(" - ")[0] + newtitle;
    }

    document.querySelector('#react-tabs-2').click();
    setTimeout(() => {
        document.querySelector('#react-tabs-2').click();
        if (document.title.split(" - ")[1]) {
            document.title = document.title.split(" - ")[0] + newtitle;
        }

        var element = document.querySelector('#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp');
        element.style.position = 'fixed';
        element.style.display = 'block';
        element.style.top = '-100px';
        
        element = document.querySelector('#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX > div:nth-child(2)');
        element.style.display = 'block';
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.right = '0';
        element.style.zIndex = '9999999999999999999999999999999999999999999';
        // element.style.backgroundColor = 'black';
        element.style.borderBottomLeftRadius = '15px';
        element.style.width = "30px";
        element.style.height = "30px";
    }, 3000); 

    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode('.sa-stage-hidden-outer .scratchEyedropper{display:none}.sa-stage-hidden [class*="blocks_blocks_"] .injectionDiv,.sa-stage-hidden [class*="asset-panel_wrapper_"],.sa-stage-hidden [class*="backpack_backpack-header_"]{border-radius:0}.sa-stage-hidden [class*="gui_flex-wrapper_"] [class*="gui_stage-and-target-wrapper_"],.sa-stage-hidden [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"]),.sa-stage-hidden [class*="gui_target-wrapper_"]{padding:0}.sa-stage-hidden [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"]) [class*="controls_controls-container_"],.sa-stage-hidden [class*="gui_target-wrapper_"]{display:none}.sa-stage-hidden [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"]) [class*="stage-wrapper_stage-canvas-wrapper_"]{visibility:hidden;position:absolute;z-index:-9999;right:0;bottom:100%}[dir="rtl"] .sa-stage-hidden [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"]) [class*="stage-wrapper_stage-canvas-wrapper_"]{right:initial;left:0}.sa-stage-hidden [class*="stage-header_stage-size-row"]{position:absolute;top:0;right:.5rem;height:2.75rem;align-items:center}[dir="rtl"] .sa-stage-hidden [class*="stage-header_stage-size-row"]{right:auto;left:.5rem}'));
    document.head.appendChild(styleElement);
    var s = document.querySelector("[class*='gui_body-wrapper_']");
    document.body.classList.add("sa-stage-hidden-outer");
    s.classList.add("sa-stage-hidden");
    window.dispatchEvent(new Event("resize"));
    
    var elementsToHide = [
        '#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp',
        '#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_alerts-container_15BWp.box_box_2jjDp',
        '#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_body-wrapper_-N0sA.box_box_2jjDp.sa-stage-hidden > div > div.gui_editor-wrapper_2DYcj.box_box_2jjDp > div.backpack_backpack-container_2_wGr',
        '#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_body-wrapper_-N0sA.box_box_2jjDp.sa-stage-hidden > div > div.gui_editor-wrapper_2DYcj.box_box_2jjDp > div.gui_tabs_AgmuP > ul'
    ];
    
    elementsToHide.forEach(selector => {
        document.querySelector(selector).style.display = 'none';
    });
    
    document.querySelector('#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_body-wrapper_-N0sA.box_box_2jjDp.sa-stage-hidden').style.height = '100%';
    
    document.querySelector('#app > div > div > div.gui_page-wrapper_1cgy0.box_box_2jjDp > div.gui_body-wrapper_-N0sA.box_box_2jjDp.sa-stage-hidden > div > div.gui_stage-and-target-wrapper_69KBf.box_box_2jjDp > div.stage-wrapper_stage-wrapper_2bejr.box_box_2jjDp > div:nth-child(1) > div > div > div.stage-header_stage-size-row_14N65').style.display = 'none';
    
    try {
        var img = document.querySelector('#react-tabs-3 > div > div.selector_wrapper_8_BHs.box_box_2jjDp > div.selector_new-buttons_2qHDd.box_box_2jjDp > div > button > img');
        img.src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
        img.style.filter = "invert(1)";
    } catch(err) {
        setTimeout(() => {
            try {
                var img = document.querySelector('#react-tabs-3 > div > div.selector_wrapper_8_BHs.box_box_2jjDp > div.selector_new-buttons_2qHDd.box_box_2jjDp > div > button > img');
                img.src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
                img.style.filter = "invert(1)";
            } catch(err) {
                console.warn("unable to set image src for button");
            }
        }, 1000); 
    }
}

const originalReplaceState = history.replaceState;
history.replaceState = function(state, title, url) {
    setTimeout(extrabuttons, 100);
    try {
        var img = document.querySelector('#react-tabs-3 > div > div.selector_wrapper_8_BHs.box_box_2jjDp > div.selector_new-buttons_2qHDd.box_box_2jjDp > div > button > img');
        img.src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
        img.style.filter = "invert(1)";
    } catch(err) {
        console.warn("unable to set image src for button");
    }
};

window.setSize = function(width, height) {
    var random = "a" + Math.round(Math.random() * 9999999999999999999999999);
    runWithScratch(`(function (Scratch) { "use strict";
        Scratch.vm.setStageSize(${width}, ${height})

        class ${random} {
            constructor() {
            this.thing = 0;
            }

            getInfo() {
            return {
                id: '${random}',
                name: '${random}',
                blocks: []
            };
            }
        }
        Scratch.extensions.register(new ${random}());
    })(Scratch);`);
}

window.runWithScratch = function(js) {
    document.querySelector('#react-tabs-1 > div.gui_extension-button-container_b4rCs.box_box_2jjDp > button').click();
    document.querySelector('body > div.ReactModalPortal > div > div > div > div.library_library-content-wrapper_1FTPT > div.library_library-filter-bar_1xjYC > div:nth-child(3) > span').click();
    document.querySelector('body > div.ReactModalPortal > div > div > div > div.custom-extension-modal_body_2iQF3.box_box_2jjDp > div.custom-extension-modal_type-selector-container_2Fag3 > div:nth-child(3)').click();

    let input = document.querySelector('body > div.ReactModalPortal > div > div > div > div.custom-extension-modal_body_2iQF3.box_box_2jjDp > textarea');

    let lastValue = input.value;

    input.value = js;

    let event = new Event('input', { bubbles: true });

    event.simulated = true;
    let tracker = input._valueTracker;

    if (tracker) {
        tracker.setValue(lastValue);
    }

    input.dispatchEvent(event);

    document.querySelector('body > div.ReactModalPortal > div > div > div > div.custom-extension-modal_body_2iQF3.box_box_2jjDp > label.custom-extension-modal_unsandboxed-container_8juVd > input').click();

    const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true
    });
    document.querySelector('body > div.ReactModalPortal > div > div > div > div.custom-extension-modal_body_2iQF3.box_box_2jjDp > div.custom-extension-modal_button-row_3dv8g > button').dispatchEvent(clickEvent);
}

var loadingScreen;
setTimeout(() => {
    var style = document.createElement('style');
    style.textContent = `
        #paintLoadingScreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #00c3ff;
            z-index: 99999999999999999999999999999;
        }
        #loadingImage {
            width: 100px;
            height: 100px;
            background-color: #fff;
            mask: url('https://penguinmod-paint.pages.dev/loader.gif') no-repeat center / contain;
            -webkit-mask: url('https://penguinmod-paint.pages.dev/loader.gif') no-repeat center / contain;
            animation: skewAnimation 1.5s ease-in-out infinite;
        }
        @keyframes skewAnimation {
            0% { transform: skew(-2deg); }
            50% { transform: skew(2deg); }
            100% { transform: skew(-2deg); }
        }
        h1 {
            margin-top: 20px;
            color: #fff;
            animation: titleAnimation 1.5s ease-in-out infinite;
        }
        @keyframes titleAnimation {
            0% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
            100% { transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    loadingScreen = document.createElement('div');
    loadingScreen.id = 'paintLoadingScreen';
    loadingScreen.innerHTML = `
        <div id="loadingImage"></div>
        <h1>Loading Paint</h1>
    `;
    
    document.body.appendChild(loadingScreen);
}, 100); 

const waitForElement = (selector) => {
    const checkExist = setInterval(() => {
        if (document.querySelector(selector)) {
            clearInterval(checkExist);
            setTimeout(() => {
                openPaint();
                setTimeout(() => {
                    if (document.title.split(" - ")[1]) {
                        document.title = document.title.split(" - ")[0] + newtitle;
                    }
                    document.querySelector('#react-tabs-2').click();
                    loadingScreen.remove();
                    try {
                        extrabuttons();
                        setSize(640, 360);
                    } catch(err) {
                        setTimeout(() => {
                            try {
                                extrabuttons();
                                setSize(640, 360);
                            } catch(err) {
                                console.warn(err);
                                alert("Unable to load extra ui");
                            }
                        }, 2000); 
                    }
                }, 1000); 
            }, 500); 
        }
    }, 900);
};

waitForElement('#react-tabs-2');
