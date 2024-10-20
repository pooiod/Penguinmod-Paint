var newtitle = " Paint";
document.title = document.title.split(" - ")[0] + newtitle;

// Fun fact: if you load this into Turbowarp, it will still work!

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

        const targetElement = document.querySelector('#react-tabs-3 > div > div.asset-panel_detail-area_2KQhH.box_box_2jjDp > div > div.paint-editor_top-align-row_25164 > div.paint-editor_controls-container_1Rqwy > div.paint-editor_canvas-controls_16wq3 > span');

        const buttonHTML = '<button class="settings_button_2ovv0">Open addons</button>';

        if (targetElement) {
            targetElement.insertAdjacentHTML('afterend', buttonHTML);

            const button = document.querySelector('.settings_button_2ovv0');
            button.addEventListener('click', function() {
                window.open("https://penguinmod-paint.pages.dev/addons");
            });
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
    
    var img = document.querySelector('#react-tabs-3 > div > div.selector_wrapper_8_BHs.box_box_2jjDp > div.selector_new-buttons_2qHDd.box_box_2jjDp > div > button > img');
    img.src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
    img.style.filter = "invert(1)";
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
                }, 1000); 
            }, 500); 
        }
    }, 900);
};

waitForElement('#react-tabs-2');
