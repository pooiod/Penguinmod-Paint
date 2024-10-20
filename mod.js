var newtitle = " Paint";
document.title = document.title.split(" - ")[0] + newtitle;

function openPaint() {
    document.title = document.title.split(" - ")[0] + newtitle;

    document.querySelector('#react-tabs-2').click();

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

const waitForElement = (selector) => {
    const checkExist = setInterval(() => {
        if (document.querySelector(selector)) {
            clearInterval(checkExist);
            setTimeout(() => {
                openPaint();
                setTimeout(() => {
                    document.querySelector('#react-tabs-2').click();
                    loadingScreen.style.display ="none";
                }, 500); 
            }, 500); 
        }
    }, 900);
};

waitForElement('#react-tabs-2');
