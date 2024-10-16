function startTimer() {

let smallContainer, toggleUkkoTheme, section, privacyLink, tosLink, moveLinksCheckbox, hideSocialContainerCheckbox, toggleDateCheckbox, togglePressedKeysCheckbox, toggleMousePos, toggleReverseMenu, toggleAccountBelow, dateElement, minimapStatsElement;
let keyCounts = {};
let activeDiv = null;
let keyTimers = {};

const styles = `
.container{
    z-index: 1;
}
.social-container[data-v-3d4cb83d] {
    max-width: 830px!important;
}
.tab-menu.fade-box.two[data-v-5208baf4]{
    grid-column: 1/2;
    grid-row: 2/4!important;
}
#player-container[data-v-5190ae12],.relative[data-v-5190ae12] {
    grid-column: 2/3;
    grid-row: 2/4;
}
.account-wrapper.fade-box[data-v-5208baf4]{
    grid-column: 3/4;
}
.tab-menu.fade-box[data-v-5208baf4]{
    grid-column: 3/4;
    grid-row: 3/4 !important;
}
#ext-options-menu{
    grid-row: 2/4;
    grid-column: 4/5;
}
.section[data-v-c41b640a] {
    border: 2px solid #000;
    border-radius: 8px;
    overflow: hidden;
}
.section > .header[data-v-c41b640a] {
    background: rgba(0,0,0,.5);
    text-align: center;
    border-bottom: 2px solid #000;
    padding: 7px;
    padding-left: 10px;
}
.settings-container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-self: stretch;
    gap: 27px;
    color: #dadada;
}
.settings-column-1, .settings-column-2 {
    flex: 1;
    font-size: 16px;
}
.settings-column-2 {
    margin-left: 0px;
}
.sc{
  width: 446px;
  display: flex;
  flex-direction: row;
  height: 144.5px;
  position: relative;
}
.custom-checkbox {
    display: block;
}
.custom-checkbox label {
    display: inline-block;
    vertical-align: middle;
    color: #dadada;
}
.custom-checkbox input {
    vertical-align: middle;
    margin-right: 5px;
    cursor: pointer;
}
.checkbox-button-wrapper {
    display: flex;
    align-items: center;
}

.checkbox-button-wrapper .zxc3 {
    margin-left: 10px;
}

.color-picker-1 {
    display: block;
    margin-top: 15px;
    margin-left: 5px;
    margin-bottom: 5px;
}
.color-picker-2 {
    display: block;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
}
.color-picker-3 {
    display: block;
    margin-top: 5px;
    margin-left: 3px;
    margin-bottom: 5px;
}
.dn{
  display: none !important
}
.df{
  display: flex !important
}
.db{
    opacity: 0.5;
    cursor: auto;
}
.settings-container1 {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-self: stretch;
  gap: 27px;
  color: #dadada;
  height: 124.5px;
  width: 446px;
}
.settings-container2 {
  height: 124.5px;
  width: 446px;
  display: none;
  justify-content: space-between;
  padding: 10px;
  align-self: stretch;
  gap: 27px;
  color: #dadada;
}
.ga{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.zxc9{
    margin-left: 6px;
    cursor: pointer;
}
.zxc8{
    margin-right: 6px;
    cursor: pointer;
}
.zxc7 {
    background: #b1700f;
    border: 0;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #000000;
    color: #dadada00;
    cursor: pointer;
    margin-top: 5px;
    font-size: 16px;
    outline: none;
    width: auto;
    padding: 5px 9px;
    text-shadow: 1px 1px 2px #00000000;
}
.zxc6{
    display: inline-flex;
    flex-direction: column;
    margin-top: 10px;
}
.zxc5{
    background: #b1700f;
    border: 0;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #000;
    color: #dadada;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    width: auto;
    padding: 5px 9px;
    margin: 10px;
    text-shadow: 1px 1px 2px #000;
    margin-left: 15px;
}
.zxc4{
    background: #b1700f;
    border: 0;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #000;
    color: #dadada;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    width: auto;
    margin-top: 5px;
    padding: 5px 9px;
    margin-right: 10px;
    text-shadow: 1px 1px 2px #000;
    margin-left: 15px;
}
.zxc3 {
    background: #b1700f;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #000;
    color: #dadada;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 5px 9px;
    text-shadow: 1px 1px 2px #000;
    margin-left: 0px;
    margin-top: 0px;
}
.zxc2 {
    position: absolute;
    background-color: #ffffff00;
    padding-right: 7px;
    padding-top: 5px;
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    color: #dadada;
    text-align: right;
}
.zxc1 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
    height: auto;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
    margin-top: 5px;
    padding-bottom: 10px;
}
    `;


function createSmallContainer() {
    const container = document.createElement('div');
    container.className = 'small-container zxc1 fade-box tab-menu';
    container.style.display = localStorage.getItem('smallContainerVisible') === 'true' ? 'block' : 'none';

    const existingLineElement = document.querySelector('span[data-v-ba56a55e].line');
    if (existingLineElement) {
        existingLineElement.addEventListener('click', () => {
            const isVisible = container.style.display === 'none';
            container.style.display = isVisible ? 'block' : 'none';
            localStorage.setItem('smallContainerVisible', isVisible);
        });
    }
    return container;
}

function createCheckbox(id, label, tip) {
    const tipAttribute = tip ? `tip="${tip}"` : '';
    return `
    <div class="custom-checkbox">
        <label ${tipAttribute}>
            <input type="checkbox" id="${id}">
            ${label}
        </label>
    </div>`;
}

function createSection() {
    const section = document.createElement('div');
    section.className = 'section';
    section.setAttribute('data-v-c41b640a', '');
    section.innerHTML = `
        <div class="header ga" data-v-c41b640a>
            <i class="fas fa-chevron-left zxc9 db"></i>
                <a tip="My discord" href="https://discord.gg/W7FqFC9H7H" target="_blank" style="text-decoration: none; color: inherit;">⁺‧₊˚ཐི⋆♱⋆ཋྀ˚₊‧⁺⁺‧₊˚ᄿ༺ཐིㅤ ㅤཋྀ༻ᄽ˚₊‧⁺⁺‧₊˚ཐི⋆♱⋆ཋྀ˚₊‧⁺</a>
            <i class="fas fa-chevron-right zxc8"></i>
        </div>
        <div class="sc">
            <div class="settings-container1">
                <div class="settings-column-1">
                    ${createCheckbox('hideSocialContainerCheckbox', 'Hide Social Container')}
                    ${createCheckbox('moveLinksCheckbox', 'Hide links')}
                    <div class="checkbox-button-wrapper">
                        ${createCheckbox('customThemeCheckbox', 'Your Theme', 'Make your own theme.')}
                        <button class="zxc3" id="settingsButton">Settings</button>
                    </div>
                    ${createCheckbox('reverseMenuCheckbox', 'Reversed Menu')}
                    ${createCheckbox('accountBelowCheckbox', 'Account Below')}
                </div>
                <div class="settings-column-2">
                    ${createCheckbox('showStatsColorCheckbox', 'Show Stats Color', 'Average colors were too bright.')}
                    ${createCheckbox('toggleDateCheckbox', 'Show Current Date', 'When new date arrives, it will update within a minute.')}
                    ${createCheckbox('togglePressedKeysCheckbox', 'Show Pressed Keys', 'RMB - right mouse button, LMB - left mouse button, MMB - middle mouse button.')}
                    ${createCheckbox('toggleMousePos', 'Show Mouse Position', 'Reload page after enabling/disabling to apply the changes.')}
                    ${createCheckbox('toggleUkkoTheme', '⋆｡‧₊°♱༺𓆩❦𓆪༻♱༉‧₊˚.', "Theme what I use. If you want to try it, and make everything work correctly, you must to turn off Account Below, ikeveron wanted button and Your Theme before enabling it (after that you can enable Account Below.)")}
                </div>
            </div>
            <div class="settings-container2">
                <div class="settings-column-1">
                    ${createCheckbox('', '')}
                    ${createCheckbox('', '')}
                    ${createCheckbox('', '')}
                    ${createCheckbox('', '')}
                    ${createCheckbox('', '')}
                </div>
                <div class="settings-column-2">
                    ${createCheckbox('', '', '')}
                    <div class="checkbox-button-wrapper">
                        ${createCheckbox('', '', '')}
                        <button class="zxc3" id="settingsButton">zxczxczxc</button>
                    </div>
                    ${createCheckbox('', '', '')}
                    ${createCheckbox('', '', '')}
                    ${createCheckbox('', '𓆩❦𓆪', "")}
                </div>
            </div>
        </div>
    `;
    return section;
}


function setupPageSwitcher() {
    const settingsContainer1 = document.querySelector('.settings-container1');
    const settingsContainer2 = document.querySelector('.settings-container2');
    const zxc8 = document.querySelector('.zxc8');
    const zxc9 = document.querySelector('.zxc9');

    if (!settingsContainer1 || !settingsContainer2 || !zxc8 || !zxc9) {
        console.error('Элемент-ы не найден-ы');
        return;
    }

    function toggleContainers(showContainer, hideContainer) {
        showContainer.classList.add('df');
        showContainer.classList.remove('dn');
        hideContainer.classList.add('dn');
        hideContainer.classList.remove('df');
    }

    function saveState(activeContainer) {
        localStorage.setItem('activeContainer', activeContainer);
    }

    function loadState() {
        const activeContainer = localStorage.getItem('activeContainer') || '1';
        const isContainer1Active = activeContainer === '1';

        toggleContainers(isContainer1Active ? settingsContainer1 : settingsContainer2, isContainer1Active ? settingsContainer2 : settingsContainer1);
        updateButtonState(isContainer1Active);
    }

    function updateButtonState(isContainer1Active) {
        zxc9.classList.toggle('db', isContainer1Active);
        zxc8.classList.toggle('db', !isContainer1Active);
    }

    zxc8.addEventListener('click', () => {
        toggleContainers(settingsContainer2, settingsContainer1);
        saveState('2');
        updateButtonState(false);
    });

    zxc9.addEventListener('click', () => {
        toggleContainers(settingsContainer1, settingsContainer2);
        saveState('1');
        updateButtonState(true);
    });

    window.addEventListener('DOMContentLoaded', loadState);
}



function createCustomThemeContainer() {
    const customContainer = document.createElement('div');
    customContainer.className = 'fade-box custom-theme-container';
    customContainer.style.display = 'none';
    customContainer.style.position = 'absolute';
    customContainer.style.width = '188px';
    customContainer.style.height = 'auto';
    customContainer.style.backgroundColor = '#ffffff00';
    customContainer.style.left = '-204px';
    customContainer.style.top = '0px';

    const [savedColor1, savedColor2, savedColor3] = loadColorsFromLocalStorage();

    customContainer.innerHTML = `
           <div class="color-picker-group" style="display: flex; align-items: center;">
               <label for="colorPicker1" style="margin-left: 15px;">Bg color 1:ㅤ ㅤ</label>
               <input type="color" class="color-picker-1" id="colorPicker1" value="${savedColor1}">
           </div>
           <div class="color-picker-group" style="display: flex; align-items: center;">
               <label for="colorPicker2" style="margin-left: 15px;">Bg color 2:ㅤ ㅤ</label>
               <input type="color" class="color-picker-2" id="colorPicker2" value="${savedColor2}">
           </div>
           <div class="color-picker-group" style="display: flex; align-items: center;">
               <label for="colorPicker3" style="margin-left: 15px;">Overlay color:ㅤ</label>
               <input type="color" class="color-picker-3" id="colorPicker3" value="${savedColor3}">
           </div>
           <div style="display: flex; align-items: center;">
              <button tip="Sets default theme colors (default angle - to right bottom)" class="zxc4">Default Colors</button>
              <button tip="ikeveron wanted" class="zxc7">Ж</button>
           </div>
              <button tip="Use it only when you have already set colors. If you want to change something what edit menu styles (colors, eternal themes, etc.), reload the page." class="zxc5">Change Bg Angle</button>


    `;

    const smallContainer = document.querySelector('.small-container.zxc1.fade-box.tab-menu');
    if (smallContainer) {
        smallContainer.appendChild(customContainer);
    }

    const resetButton = customContainer.querySelector('.zxc4');
    if (resetButton) {
        resetButton.addEventListener('click', resetThemeToDefault);
    }

    const angleButton = customContainer.querySelector('.zxc5');
    if (angleButton) {
        angleButton.addEventListener('click', changeAngle);
    }

    updateFadeBoxStyles(savedColor1, savedColor2, savedColor3);

    return customContainer;
}




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 1 скрыть сошла линкс
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupHideSocialContainer() {
    const toggleHideSocialContainer = section.querySelector('#hideSocialContainerCheckbox');
    const socialContainer = document.querySelector('.social-container[data-v-3d4cb83d]');

    const applyHideSocialContainer = () => {
        if (toggleHideSocialContainer.checked) {
            socialContainer.style.transform = 'translateY(-10000px)';
        } else {
            socialContainer.style.transform = '';
        }
    };

    if (localStorage.getItem('hideSocialContainerChecked') === 'true') {
        toggleHideSocialContainer.checked = true;
        applyHideSocialContainer();
    }

    toggleHideSocialContainer.addEventListener('change', () => {
        applyHideSocialContainer();
        localStorage.setItem('hideSocialContainerChecked', toggleHideSocialContainer.checked);
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 2 скрыть топ линкс
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupMoveLinks() {
    moveLinksCheckbox = section.querySelector('#moveLinksCheckbox');
    privacyLink = document.querySelector('a[href="privacy.html"][data-v-ba56a55e]');
    tosLink = document.querySelector('a[href="tos.html"][data-v-ba56a55e]');

    const moveLinksUp = () => {
        if (moveLinksCheckbox.checked) {
            privacyLink.style.transform = 'translateY(-10000px)';
            tosLink.style.transform = 'translateY(-10000px)';
        } else {
            privacyLink.style.transform = '';
            tosLink.style.transform = '';
        }
    };

    if (localStorage.getItem('moveLinksChecked') === 'true') {
        moveLinksCheckbox.checked = true;
        moveLinksUp();
    }

    moveLinksCheckbox.addEventListener('change', () => {
        moveLinksUp();
        localStorage.setItem('moveLinksChecked', moveLinksCheckbox.checked);
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 3 кастом тема
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function changeAngle() {
    const gradientAngles = [
        'to bottom right',
        'to bottom',
        'to bottom left',
        'to left',
        'to top left',
        'to top',
        'to top right',
        'to right'
    ];

    let currentAngle = localStorage.getItem('gradientAngle') || 'to bottom right';
    let currentIndex = gradientAngles.indexOf(currentAngle);
    currentIndex = (currentIndex + 1) % gradientAngles.length;
    const newAngle = gradientAngles[currentIndex];

    saveAngleToLocalStorage(newAngle);
    updateGradientStyles(newAngle);
}

function updateGradientStyles(angle) {

    const [color1, color2] = [document.querySelector('.color-picker-1').value, document.querySelector('.color-picker-2').value];
    let styleElement = document.getElementById('customGradientStyles');

    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'customGradientStyles';
        document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
        .fade-box {
            background: linear-gradient(${angle}, ${color1}, ${color2}) !important;
        }
        .replay-list-header {
            background: linear-gradient(${angle}, ${color1}, ${color2}) !important;
        }
        .swal2-popup {
            background: linear-gradient(${angle}, ${color1}, ${color2}) !important;
        }
        .tooltip {
            background: linear-gradient(${angle}, ${color1}, ${color2}) !important;
        }
    `;
}

function resetThemeToDefault() {

    const defaultColor1 = '#273b5e';
    const defaultColor2 = '#0f1724';
    const defaultColor3 = '#001121';

    const colorPicker1 = document.querySelector('.color-picker-1');
    const colorPicker2 = document.querySelector('.color-picker-2');
    const colorPicker3 = document.querySelector('.color-picker-3');

    if (colorPicker1 && colorPicker2 && colorPicker3) {
        colorPicker1.value = defaultColor1;
        colorPicker2.value = defaultColor2;
        colorPicker3.value = defaultColor3;
    }

    updateFadeBoxStyles(defaultColor1, defaultColor2, defaultColor3);

    saveColorsToLocalStorage(defaultColor1, defaultColor2, defaultColor3);
}

function saveColorsToLocalStorage(color1, color2, color3) {
    localStorage.setItem('colorPicker1', color1);
    localStorage.setItem('colorPicker2', color2);
    localStorage.setItem('colorPicker3', color3);
}

function loadColorsFromLocalStorage() {
    const color1 = localStorage.getItem('colorPicker1') || '#273b5e'; // цвет по умолчанию
    const color2 = localStorage.getItem('colorPicker2') || '#0f1724'; // цвет по умолчанию
    const color3 = localStorage.getItem('colorPicker3') || '#001121'; // цвет по умолчанию
    return [color1, color2, color3];
}

function updateFadeBoxStyles(color1, color2, color3) {
    const angle = localStorage.getItem('gradientAngle') || 'to bottom right';

    let styleElement = document.getElementById('customFadeBoxStyles');

    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'customFadeBoxStyles';
        document.head.appendChild(styleElement);
    }
    const color3wopacity = convertHexToRgba(color3, 0.75);
    styleElement.textContent = `
        .fade-box{
            background: linear-gradient(${angle}, ${color1}, ${color2})!important;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${color1} !important;
        }
        .replay-list-header {
            background: linear-gradient(${angle}, ${color1}, ${color2})!important;
        }
        .swal2-popup {
            background: linear-gradient(${angle}, ${color1}, ${color2})!important;
        }
        .tooltip {
            background: linear-gradient(${angle}, ${color1}, ${color2})!important;
        }
        #overlay {
            background: radial-gradient(${color3wopacity} 300px,rgba(0,0,0,.75))!important;
        }
    `;
}

function convertHexToRgba(hex, opacity) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return `rgba(${r},${g},${b},${opacity})`;
}

function updateFadeBoxColors() {
    const colorPicker1 = document.querySelector('.color-picker-1');
    const colorPicker2 = document.querySelector('.color-picker-2');
    const colorPicker3 = document.querySelector('.color-picker-3');

    if (colorPicker1 && colorPicker2 && colorPicker3) {
        const color1 = colorPicker1.value;
        const color2 = colorPicker2.value;
        const color3 = colorPicker3.value;
        updateFadeBoxStyles(color1, color2, color3);
        saveColorsToLocalStorage(color1, color2, color3);
    }
}

function toggleThemeButtons() {
    const themeButtonElements = document.querySelectorAll('#theme-button');
    const customThemeCheckbox = document.querySelector('#customThemeCheckbox');

    if (customThemeCheckbox && themeButtonElements.length > 0) {
        const isChecked = customThemeCheckbox.checked;

        themeButtonElements.forEach(button => {
            button.style.pointerEvents = isChecked ? 'none' : 'auto';
            button.style.opacity = isChecked ? '0.5' : '1';
        });
    }
}

function setupCustomThemeButton() {
    const button = document.querySelector('.zxc3');
    const customContainer = createCustomThemeContainer();
    const customThemeCheckbox = document.querySelector('#customThemeCheckbox');
    const customThemeContainer = document.querySelector('.fade-box.custom-theme-container');

    button.addEventListener('click', () => {
        const isVisible = customContainer.style.display === 'none';
        customContainer.style.display = isVisible ? 'block' : 'none';
    });

    customThemeCheckbox.addEventListener('change', () => {
        const isChecked = customThemeCheckbox.checked;
        localStorage.setItem('customThemeCheckboxChecked', isChecked);
        applyCustomThemeStyles(isChecked);
        toggleThemeButtons();

        button.disabled = !isChecked;
        button.style.opacity = isChecked ? '1' : '0.5';
        button.style.cursor = isChecked ? 'pointer' : 'auto';
    });

    const isCustomThemeChecked = localStorage.getItem('customThemeCheckboxChecked') === 'true';
    customThemeCheckbox.checked = isCustomThemeChecked;
    applyCustomThemeStyles(isCustomThemeChecked);
    toggleThemeButtons();

    const colorPicker1 = customContainer.querySelector('.color-picker-1');
    const colorPicker2 = customContainer.querySelector('.color-picker-2');
    const colorPicker3 = customContainer.querySelector('.color-picker-3');

    if (colorPicker1) {
        colorPicker1.addEventListener('input', updateFadeBoxColors);
    }

    if (colorPicker2) {
        colorPicker2.addEventListener('input', updateFadeBoxColors);
    }

    if (colorPicker3) {
        colorPicker3.addEventListener('input', updateFadeBoxColors);
    }

    button.disabled = !isCustomThemeChecked;
    button.style.opacity = isCustomThemeChecked ? '1' : '0.5';
    button.style.cursor = isCustomThemeChecked ? 'pointer' : 'auto';
}

function applyCustomThemeStyles(isChecked) {
    const color1 = localStorage.getItem('colorPicker1') || '#273b5e';
    const color2 = localStorage.getItem('colorPicker2') || '#0f1724';
    const color3 = localStorage.getItem('colorPicker3') || '#001121';

    const angle = localStorage.getItem('gradientAngle') || 'to bottom right';
    let styleElement = document.getElementById('customFadeBoxStyles');

    const customThemeContainer = document.querySelector('.fade-box.custom-theme-container');
    if (customThemeContainer) {
        customThemeContainer.style.display = isChecked ? 'block' : 'none';
    }

    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'customFadeBoxStyles';
        document.head.appendChild(styleElement);
    }

    const color3wopacity = convertHexToRgba(color3, 0.75);
    if (isChecked) {
        styleElement.textContent = `
            .fade-box{
                background: linear-gradient(${angle}, ${color1}, ${color2})!important;
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${color1} !important;
            }
            .replay-list-header {
                background: linear-gradient(${angle}, ${color1}, ${color2})!important;
            }
            .swal2-popup {
                background: linear-gradient(${angle}, ${color1}, ${color2})!important;
            }
            .tooltip {
                background: linear-gradient(${angle}, ${color1}, ${color2})!important;
            }
            #overlay {
                background: radial-gradient(${color3wopacity} 300px,rgba(0,0,0,.75))!important;
            }
        `;
    } else {
        styleElement.textContent = `
            .fade-box{
                background: linear-gradient(${angle}, ${color1}, ${color2});
            }
            ::-webkit-scrollbar-thumb {
            background-color: grey;
            }
            .replay-list-header {
                background: linear-gradient(${angle}, ${color1}, ${color2});
            }
            .swal2-popup {
                background: linear-gradient(${angle}, ${color1}, ${color2});
            }
            .tooltip {
                background: linear-gradient(${angle}, ${color1}, ${color2});
            }
            #overlay {
                background: radial-gradient(${color3wopacity} 300px,rgba(0,0,0,.75));
            }
        `;
    }
}

function saveAngleToLocalStorage(angle) {
    localStorage.setItem('gradientAngle', angle);
}

function setupTransparentButton() {
    const styleId = 'buttonNewStyle';

    if (localStorage.getItem('isStyleApplied') === 'true') {
        applyStyle(styleId);
    }

    document.querySelector('.zxc7').addEventListener('click', function() {
        const existingStyle = document.getElementById(styleId);

        if (existingStyle) {
            existingStyle.remove();
            localStorage.setItem('isStyleApplied', 'false');
        } else {
            applyStyle(styleId);
            localStorage.setItem('isStyleApplied', 'true');
        }
    });
}

function applyStyle(styleId) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
            .zxc7 {
            background: #00000000;
            }
            .zxc5 {
    background: rgba(0,0,0,.5);
            }
            .zxc4 {
    background: rgba(0,0,0,.5);
            }
            .zxc3 {
    background: rgba(0,0,0,.5);
            }
            .vanis-menu-button {
    background: rgba(0,0,0,.5);
            }
            .selected[data-v-2eade0fe] {
            box-shadow: 0 0 3px 1px #ffffff
            }
            .progress-striped .progress-bar[data-v-5f2d6d72] {
            background: repeating-linear-gradient(-45deg,#00000030,#00000030 25px,#ffffff30 0,#ffffff30 50px)
            }
.btn[data-v-73f7fbfc] {
    background: rgba(0, 0, 0, .5);
}

.btn[data-v-73f7fbfc]:hover {
    background: rgba(0, 0, 0, .5);
}

.btn[data-v-73f7fbfc]:active {
    background: rgba(0, 0, 0, .5);
}

.btn[data-v-73f7fbfc]:disabled {
    background: rgba(0, 0, 0, .5);
}
.perk-color-update[data-v-2c5139e0] {
    background: rgba(0,0,0,.5);
}

.perk-color-update[data-v-2c5139e0]:hover {
    background: rgba(0,0,0,.5);
}

.perk-color-update[data-v-2c5139e0]:active {
    background: rgba(0,0,0,.5);
}

.perk-color-update[data-v-2c5139e0]:disabled {
    background: rgba(0,0,0,.5);
}
.server-button[data-v-67f43bc8] {
    background: rgba(0,0,0,.5);
}

.server-button[data-v-67f43bc8]:hover {
    background: rgba(0,0,0,.5);
}

.server-button[data-v-67f43bc8]:active {
    background: rgba(0,0,0,.5);
}

.server-button[data-v-67f43bc8]:disabled {
    background: rgba(0,0,0,.5);
}
.swal2-styled.swal2-confirm {
    background-color: rgba(0,0,0,.5);
}
#player-container #game-buttons #play-button[data-v-5190ae12] {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #play-button[data-v-5190ae12]:hover {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #play-button[data-v-5190ae12]:active {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #play-button[data-v-5190ae12]:disabled {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #spec-button[data-v-5190ae12] {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #spec-button[data-v-5190ae12]:hover {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #spec-button[data-v-5190ae12]:active {
    background: rgba(0,0,0,.5);
}

#player-container #game-buttons #spec-button[data-v-5190ae12]:disabled {
    background: rgba(0,0,0,.5);
}
.perks-tab-badge.using[data-v-2eade0fe] {
    background: rgba(0,0,0,.5);
}
.perks-tab-badge.unused[data-v-2eade0fe] {
    background: rgba(0,0,0,.5);
}
.confirm-button[data-v-2c5139e0] {
    background: rgba(0,0,0,.5);
}

.confirm-button[data-v-2c5139e0]:hover {
    background: rgba(0,0,0,.5);
}

.confirm-button[data-v-2c5139e0]:active {
    background: rgba(0,0,0,.5);
}

.confirm-button[data-v-2c5139e0]:disabled {
    background: rgba(0,0,0,.5);
}
.slider[data-v-c41b640a] {
    border: 1px solid #bdc3c7;
}
.slider[data-v-4dcda2ec] {
    border: 1px solid #bdc3c7;
}
.slider[data-v-8dbe5024] {
    border: 1px solid #bdc3c7;
}
.slider[data-v-8dbe5024]::-webkit-slider-thumb {
    background: #bdc3c7;
}
.slider[data-v-4dcda2ec]::-webkit-slider-thumb {
    background: #bdc3c7;
}
.pretty.p-switch input:checked~.state:before {
    border-color: #bdc3c7!important
}
.pretty.p-switch input:checked~.state label:after {
    background-color: #bdc3c7!important
}
.slider[data-v-011aad32]::-webkit-slider-thumb {
    background: #bdc3c7;
}
.slider[data-v-c41b640a]::-webkit-slider-thumb {
    background: #bdc3c7;
}
.zxc7 {
    background: rgba(0, 0, 0, .5);
}

.slider[data-v-011aad32] {
    border: 1px solid #bdc3c7;
}
.warning[data-v-2c5139e0] {
    color: #dadada
}
        `;
    document.head.appendChild(style);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 4 справа налево и наоборот
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupReverseMenu() {
    toggleReverseMenu = section.querySelector('#reverseMenuCheckbox');

    const applyReverseMenuStyles = () => {
        if (toggleReverseMenu.checked) {
            const style = document.createElement('style');
            style.id = 'reverseMenuStyles';
            style.textContent = `
                #player-container[data-v-5190ae12], .relative[data-v-5190ae12] {
                    grid-row: 2 / 4;
                    grid-column: 2 / 3;
                }
                .tab-menu.fade-box.two[data-v-5208baf4] {
                    grid-row: 2/4;
                    grid-column: 3/ span 1;
                }
                .tab-menu.fade-box[data-v-5208baf4]{
                grid-row: 2 / 3;
                grid-column: 1 / 2;
                }
                .account-wrapper.fade-box[data-v-5208baf4]{
                grid-column: 1 / 2;
                }
            `;
            document.head.appendChild(style);
        } else {
            const existingStyle = document.getElementById('reverseMenuStyles');
            if (existingStyle) {
                existingStyle.remove();
            }
        }
    };

    if (localStorage.getItem('reverseMenuChecked') === 'true') {
        toggleReverseMenu.checked = true;
        applyReverseMenuStyles();
    }

    toggleReverseMenu.addEventListener('change', () => {
        applyReverseMenuStyles();
        localStorage.setItem('reverseMenuChecked', toggleReverseMenu.checked);
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 5 снизу вверх и наоборот
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupAccountBelow() {
    toggleAccountBelow = section.querySelector('#accountBelowCheckbox');

    const applyAccountBelowStyles = () => {
        if (toggleAccountBelow.checked) {
            const style = document.createElement('style');
            style.id = 'accountBelowStyles';
            style.textContent = `
                .account-wrapper[data-v-890f31b4] {
                    grid-row: 3/4 !important;
                }
                .tab-menu.fade-box[data-v-5208baf4]{
                grid-row: 2/3 !important;
                }
                #main-container[data-v-5208baf4] {
                    grid-template-rows: 110px 300px 146px;
                }
                .tab-menu.fade-box.two[data-v-5208baf4]{
                grid-row: 2/4 !important;
                }
            `;
            document.head.appendChild(style);
        } else {
            const existingStyle = document.getElementById('accountBelowStyles');
            if (existingStyle) {
                existingStyle.remove();
            }
        }
    };

    if (localStorage.getItem('accountBelowChecked') === 'true') {
        toggleAccountBelow.checked = true;
        applyAccountBelowStyles();
    }

    toggleAccountBelow.addEventListener('change', () => {
        applyAccountBelowStyles();
        localStorage.setItem('accountBelowChecked', toggleAccountBelow.checked);
    });
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 6 цвета пинга и фпс
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupShowStatsColor() {
    const toggleStatsColorCheckbox = section.querySelector('#showStatsColorCheckbox');

    const applyStatsColor = () => {
        if (toggleStatsColorCheckbox.checked) {
            intervalId = setInterval(updateStatsColors, 50);
        } else {
            clearInterval(intervalId);
            resetStatsColor();
        }
    };

    if (localStorage.getItem('showStatsColorChecked') === 'true') {
        toggleStatsColorCheckbox.checked = true;
        applyStatsColor();
    }

    toggleStatsColorCheckbox.addEventListener('change', () => {
        applyStatsColor();
        localStorage.setItem('showStatsColorChecked', toggleStatsColorCheckbox.checked);
    });
}

function resetStatsColor() {
    const statsElement = document.querySelector('.stats');
    if (statsElement) {
        statsElement.querySelectorAll('div').forEach(div => {
            div.style.color = 'white';
        });
    }
}

function updateStatsColors() {
    const statsElement = document.querySelector('.stats');
    if (statsElement) {
        const fpsDiv = statsElement.querySelector('div:nth-child(1)');
        const pingDiv = statsElement.querySelector('div:nth-child(2)');

        if (fpsDiv) {
            const fpsColor = determineColor(fpsDiv.textContent.trim().split(':')[1].trim(), 'fps');
            fpsDiv.style.color = fpsColor;
        }

        if (pingDiv) {
            const pingColor = determineColor(pingDiv.textContent.trim().split(':')[1].trim(), 'ping');
            pingDiv.style.color = pingColor;
        }
    }
}

function determineColor(value, type) {
    const intValue = parseInt(value);
    if (isNaN(intValue)) return 'white';

    if (type === 'fps') {
        if (intValue <= 40) {
            return "#ffaaaa"; // хуйня
        } else if (intValue <= 120) {
            return "#aaffaa"; // норм
        } else {
            return "#aaffff"; // все пиздато
        }
    } else if (type === 'ping') {
        if (intValue <= 40) {
            return "#aaffff"; // все пиздато
        } else if (intValue <= 120) {
            return "#aaffaa"; // норм
        } else {
            return "#ffaaaa"; // хуйня
        }
    }

    return 'white';
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 7 ванис дата
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupDateDisplay() {
    toggleDateCheckbox = section.querySelector('#toggleDateCheckbox');
    minimapStatsElement = document.querySelector('.minimap-stats');
    dateElement = document.createElement('div');
    dateElement.dataset.v769dba30 = '';
    dateElement.style.display = 'block';

    const updateDate = () => {
        const currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;

        dateElement.textContent = `${day}.${month}.${year}`;
    };

    updateDate();
    minimapStatsElement.insertBefore(dateElement, minimapStatsElement.children[1]);

    if (localStorage.getItem('toggleDateChecked') === 'true') {
        toggleDateCheckbox.checked = true;
        dateElement.style.display = 'block';
    } else {
        dateElement.style.display = 'none';
    }

    toggleDateCheckbox.addEventListener('change', () => {
        const isVisible = toggleDateCheckbox.checked;
        dateElement.style.display = isVisible ? 'block' : 'none';
        localStorage.setItem('toggleDateChecked', isVisible);
    });

    setInterval(() => {
        const currentDate = new Date();
        if (currentDate.getHours() === 0 && currentDate.getMinutes() === 0) {
            updateDate();
        }
    }, 60000);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 8 нажатые клавиши
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupPressedKeys() {
    togglePressedKeysCheckbox = section.querySelector('#togglePressedKeysCheckbox');

    const enablePressedKeys = () => {
        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyup);
        document.addEventListener('mousedown', handleMousedown);
        window.addEventListener('blur', clearAllKeyTimers);
    };

    const disablePressedKeys = () => {
        document.removeEventListener('keydown', handleKeydown);
        document.removeEventListener('keyup', handleKeyup);
        document.removeEventListener('mousedown', handleMousedown);
        window.removeEventListener('blur', clearAllKeyTimers);
        clearAllKeyTimers();
    };

    if (localStorage.getItem('togglePressedKeysChecked') === 'true') {
        togglePressedKeysCheckbox.checked = true;
        enablePressedKeys();
    }

    togglePressedKeysCheckbox.addEventListener('change', () => {
        const isChecked = togglePressedKeysCheckbox.checked;
        if (isChecked) {
            enablePressedKeys();
        } else {
            disablePressedKeys();
        }
        localStorage.setItem('togglePressedKeysChecked', isChecked);
    });
}
function handleKeydown(event) {
    if (!keyCounts[event.key]) {
        keyCounts[event.key] = 0;
    }
    keyCounts[event.key]++;
    updateDiv(event.key, keyCounts[event.key]);

    if (!keyTimers[event.key] && !['Control', 'Shift', 'Tab'].includes(event.key)) {
        keyTimers[event.key] = setInterval(function() {
            keyCounts[event.key]++;
            updateDiv(event.key, keyCounts[event.key]);
        }, 720);
    }
}
function handleKeyup(event) {
    clearInterval(keyTimers[event.key]);
    keyTimers[event.key] = null;
    keyCounts[event.key] = 0;
}
function handleMousedown(event) {
    let button;
    switch (event.button) {
        case 0:
            button = 'LMB';
            break;
        case 1:
            button = 'MMB';
            break;
        case 2:
            button = 'RMB';
            break;
        default:
            button = 'Mouse Click';
    }
    updateDiv(button, 1);
}
function clearAllKeyTimers() {
    for (let key in keyTimers) {
        clearInterval(keyTimers[key]);
        keyTimers[key] = null;
    }
    keyCounts = {};
}
function updateDiv(text, count) {
    const container = document.querySelector('.chat-container[data-v-7264abb4]');

    if (activeDiv) {
        activeDiv.textContent = count > 1 ? `${text}[${count}]` : text;
    } else {
        activeDiv = document.createElement('div');
        activeDiv.textContent = count > 1 ? `${text}[${count}]` : text;
        activeDiv.style.position = 'absolute';
        activeDiv.style.bottom = '100%';
        activeDiv.style.left = '0';
        activeDiv.style.transform = 'translateX(0)';
        activeDiv.style.backgroundColor = 'rgba(0,0,0,0)';
        activeDiv.style.borderRadius = '4px';
        activeDiv.style.marginBottom = '10px';
        activeDiv.style.marginLeft = '10px';
        activeDiv.style.maxWidth = '420px';
        activeDiv.style.padding = '2px 1px';
        activeDiv.style.width = 'max-content';
        activeDiv.style.transition = 'bottom 0.5s ease-in-out, opacity 0.5s ease-in-out, filter 0.5s ease-in-out';
        activeDiv.style.fontFamily = 'Ubuntu, sans-serif';
        activeDiv.style.fontSize = '24px';
        activeDiv.style.color = 'white';
        activeDiv.style.display = 'flex';
        activeDiv.style.alignItems = 'center';
        activeDiv.style.justifyContent = 'center';
        activeDiv.style.boxShadow = '0 0 4px 2px rgba(0,0,0,0)';
        activeDiv.style.textAlign = 'left';

        container.appendChild(activeDiv);
    }

    clearTimeout(activeDiv.timeout);
    activeDiv.style.opacity = '1';
    activeDiv.style.filter = 'blur(0px)';
    activeDiv.timeout = setTimeout(function() {
        activeDiv.style.opacity = '0';
        activeDiv.style.filter = 'blur(5px)';
        setTimeout(function() {
            container.removeChild(activeDiv);
            activeDiv = null;
        }, 500);
    }, 750);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 9 маус поз
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function setupMousePos() {
    toggleMousePos = section.querySelector('#toggleMousePos');

    const mousePositionDiv = document.createElement('div');
    mousePositionDiv.classList.add('zxc2');
    mousePositionDiv.style.position = 'absolute';
    mousePositionDiv.style.backgroundColor = '#ffffff00';
    mousePositionDiv.style.padding = '6px';
    mousePositionDiv.style.fontFamily = 'Ubuntu, sans-serif';
    mousePositionDiv.style.fontSize = '14px';
    mousePositionDiv.style.color = 'white';
    mousePositionDiv.style.textAlign = 'right';
    mousePositionDiv.textContent = '';

    const leaderboard = document.querySelector('div[data-v-7e7860a8][data-v-0047b8f0][id="leaderboard"]');
    leaderboard.parentNode.insertBefore(mousePositionDiv, leaderboard.nextSibling);

    function updatePosition() {
        const rect = leaderboard.getBoundingClientRect();
        mousePositionDiv.style.top = (rect.bottom + window.scrollY) + 'px';
        mousePositionDiv.style.left = (rect.right - mousePositionDiv.offsetWidth) + 'px';
        mousePositionDiv.style.width = rect.width + 'px';
    }

function updateMousePosition(event) {
    if (!toggleMousePos.checked) return;
    const x = event.clientX;
    const y = event.clientY;
    mousePositionDiv.textContent = `𓍢ִ໋${x} ${y}ˡ`;
}

    function checkVisibility() {
        if (leaderboard.style.display === 'none' || leaderboard.style.visibility === 'hidden' || window.getComputedStyle(leaderboard).display === 'none' || window.getComputedStyle(leaderboard).visibility === 'hidden') {
            mousePositionDiv.style.display = 'none';
        } else {
            mousePositionDiv.style.display = 'block';
            updatePosition();
        }
    }

    const observer = new MutationObserver(checkVisibility);
    const config = { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class'] };
    observer.observe(leaderboard, config);

    if (localStorage.getItem('toggleMousePosChecked') === 'true') {
        toggleMousePos.checked = true;
        document.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('resize', updatePosition);
        setTimeout(updatePosition, 0);
        checkVisibility();
    } else {
        mousePositionDiv.style.display = 'none';
    }

toggleMousePos.addEventListener('change', () => {
    const isVisible = toggleMousePos.checked;
    if (isVisible) {
        document.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('resize', updatePosition);
        setTimeout(updatePosition, 0);
        checkVisibility();
    } else {
        document.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('resize', updatePosition);
        mousePositionDiv.style.display = 'none';
    }
    localStorage.setItem('toggleMousePosChecked', isVisible);
});
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 10 Kujacore𝄞𓂃 ࣪˖ ִֶָ 𓈈⭒♬ ﾟ.🃓
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function applyUkkoThemeStyles(isChecked) {

    const customCss = `.show-stuck[data-v-0b6441fe] {color: #ffffff00;}
.box-1[data-v-0b6441fe] {height: 301px;background: #dadada00;margin-bottom: 0px;font-size: 0px;text-align: center}
.fade-box {box-shadow: 0 0 4px 2px #fff0!important}
#ext-options-menu{background: #ffffff00!important}
.scroll[data-v-0b6441fe] {animation-duration: 0s;animation-name: scroll-0b6441fe;animation-timing-function: linear;overflow: visible}
@keyframes scroll-0b6441fe {0% {height: 133px;opacity: 1}50% {height: 133px;opacity: 1}to { height: 133px; opacity: 1}}
.menu-enter-active[data-v-0b6441fe] {transition: all .2s ease}.menu-enter[data-v-0b6441fe] {opacity: 1;transform: scale(1)}
.btn[data-v-73f7fbfc] {background: #ffffff00;border: 0;border-radius: 0px;box-shadow: 0 0 4px 2px #fff0;color: #ffffff00;cursor: pointer;font-size: 16px;outline: none;padding: 5px;text-shadow: 0 0 2px #fff0;width: 100%}
.btn[data-v-73f7fbfc]:hover {transition: .4s cubic-bezier(0.4, 0, 1, 1);background: #ffffff00;color: #fff;text-shadow: 0 0 12px #fff;}
.btn[data-v-73f7fbfc]:active {background: #ffffff00;color: #fff0;text-shadow: 0 0 12px #fff0;}
.btn[data-v-73f7fbfc]:disabled {background: #ffffff00;color: #fff0;text-shadow: 0 0 12px #fff0;}
#player-container #game-buttons #play-button[data-v-5190ae12] {background: #ffffff00;border: 0;border-radius: 0px;box-shadow: 0 0 4px 2px #fff0;color: #ffffff00;cursor: pointer;font-size: 16px;outline: none;padding: 5px;text-shadow: 0 0 2px #fff0;width: 100%}
#player-container #game-buttons #play-button[data-v-5190ae12]:hover {transition: .4s cubic-bezier(0.4, 0, 1, 1);background: #ffffff00;  color: #fff;   text-shadow: 0 0 12px #fff;}
#player-container #game-buttons #play-button[data-v-5190ae12]:active {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
#player-container #game-buttons #play-button[data-v-5190ae12]:disabled {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
#player-container #game-buttons #spec-button[data-v-5190ae12] {background: #ffffff00;border: 0;border-radius: 0px;box-shadow: 0 0 4px 2px #fff0;color: #ffffff00;cursor: pointer;font-size: 16px;outline: none;flex: 1;padding: 5px;text-shadow: 0 0 2px #fff0;width: 100%}
#player-container #game-buttons #spec-button[data-v-5190ae12]:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff;}
#player-container #game-buttons #spec-button[data-v-5190ae12]:active {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
#player-container #game-buttons #spec-button[data-v-5190ae12]:disabled {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
.server-button[data-v-67f43bc8] {    background: #ffffff00;    border: 0;    border-radius: 0px;    box-shadow: 0 0 4px 2px #fff0;    color: #ffffff00;    cursor: pointer;    font-size: 16px;    font-size: 14px;    outline: none;    padding: 5px;    text-shadow: 0 0 2px #fff0;}
.server-button[data-v-67f43bc8]:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff;}
.server-button[data-v-67f43bc8]:active {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
.server-button[data-v-67f43bc8]:disabled {    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff0;}
.confirm-button[data-v-2c5139e0] {background: #ffffff00;border: 0;border-radius: 0px;box-shadow: 0 0 4px 2px #fff0;color: #ffffff00;cursor: pointer;font-size: 16px;outline: none;padding: 5px 9px;text-shadow: 0 0 2px #fff0;}
.confirm-button[data-v-2c5139e0]:hover {transition: .4s cubic-bezier(0.4, 0, 1, 1);background: #ffffff00;color: #fff;text-shadow: 0 0 12px #fff;}
.confirm-button[data-v-2c5139e0]:active {background: #ffffff00;color: #fff0;text-shadow: 0 0 12px #fff0;}
.confirm-button[data-v-2c5139e0]:disabled {background: #ffffff00;color: #fff0;text-shadow: 0 0 12px #fff0;}
.perk-color-update[data-v-2c5139e0] {    background: #ffffff00;    border: 0;    border-radius: 0px;    box-shadow: 0 0 4px 2px #fff0;    color: #ffffff00;    cursor: pointer;    font-size: 16px;    grid-row: 2;    outline: none;    padding: 5px;    text-shadow: 0 0 2px #fff0;}
.perk-color-update[data-v-2c5139e0]:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff;}
.perk-color-update[data-v-2c5139e0]:active {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
.perk-color-update[data-v-2c5139e0]:disabled {    background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
.color-button[data-v-e11a74f8] {    border: 0px solid #ffffff;    box-shadow: 0 0 2px 1px #ffffff00;    border-radius: 0px;    cursor: pointer;    display: inline-block;    height: 30px;    width: 30px}
input[type=number],input[type=text],select {    background: rgb(0 0 0 / 0%);    border: 1px solid #fff0;    border-radius: 0px;    box-sizing: border-box;    color: #ffffffba;    display: block;    outline: 0;    padding: 5px;    width: 100%}
.confidential {    color: transparent!important;    text-shadow: 0 0 5px hsl(0deg 0% 85% / 0%);    transition: all .8s}
.confidential:focus,.confidential:hover {    color: #ffffffb5!important;    text-shadow: none}
#nickname[data-v-5190ae12] {flex: 2;margin-right: 10px;    color: transparent!important;        text-shadow: 0 0 5px hsl(0deg 0% 85% / 0%);        transition: all .8s}
#nickname[data-v-5190ae12]:focus,#nickname[data-v-5190ae12]:hover {        color: #ffffffb5!important;        text-shadow: none}
.slider.draw-delay[data-v-011aad32] {    background: linear-gradient(45deg, #121212, #121212 35%);}
.tabs[data-v-5190ae12] {border-bottom: 2px solid #fff0;font-size: 20px}
.tab[data-v-5190ae12]:not(:last-child) {border-right: 2px solid #fff0}
.tab[data-v-5190ae12] {    cursor: pointer;    color: #fff0;    flex: 1;    padding: 9px;    text-align: center;    width: 55px}
.tab[data-v-5190ae12]:hover {    transition: .6s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #ffffff;    text-shadow: 0 0 8px #fff;}
#player-container #player-data>[data-v-5190ae12] {    margin-bottom: 10px;    color: #fff0;}
.logout_[data-v-890f31b4] {    cursor: pointer;    color: #fff0;    display: inline-block;    position: absolute;    right: 0;    top: 0}
.logout_[data-v-890f31b4]:hover{    transition: all .2s cubic-bezier(0.4, 0, 1, 1);        background: #ffffff00;        color: #ffffff;    text-shadow: 0 0 8px #fff;}
.account-name[data-v-890f31b4] {    display: flex;    flex-direction: row;    font-size: 28px;    font-weight: 700;    overflow: hidden;    text-overflow: ellipsis;    white-space: nowrap;    width: 168px;}
.player-info[data-v-890f31b4] {    display: inline-block;    font-size: 14px;    color: #fff0;    display: inline-block;    vertical-align: top}
.player-info[data-v-890f31b4]:hover{        transition: all .2s cubic-bezier(0.4, 0, 1, 1);            background: #ffffff00;            color: #ffffff;        text-shadow: 0 0 8px #fff0;}
.avatar[data-v-890f31b4] {    border-radius: 0px;    box-shadow: 0 0 3px 1px #fff0;}
::-webkit-scrollbar {width: 0px}
.tab-menu .tabs[data-v-2eade0fe] {    border-bottom: 2px solid #fff0;    display: flex;    font-size: 18px}
.tab-menu .tab[data-v-2eade0fe]:not(:last-child) {border-right: 2px solid #ffffff00}
.tab-menu .tab.active[data-v-2eade0fe] {    background: rgb(255 255 255 / 0%)}
.badge-list[data-v-637ffd77] {    display: inline-flex;    flex-direction: row;    margin-right: 3px;  flex-wrap: wrap;}
.badge-icon.dim[data-v-637ffd77] {    filter: brightness(60%) grayscale(10%)}
.badge-icon.not-pickable[data-v-637ffd77] {    cursor: not-allowed;    filter: brightness(40%) grayscale(90%)}
.perks-tab-badge.using[data-v-2eade0fe] {background-color: #ffffff00;    box-shadow: 0 0 4px 2px #f0f0f000;}
.perks-tab-badge.unused[data-v-2eade0fe] {background-color: #ffffff00;    box-shadow: 0 0 4px 2px #f0f0f000;}
.perks-tab-badge.using[data-v-2eade0fe]:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);     background-color: #ffffff;    box-shadow: 0 0 4px 2px #f0f0f0;}
.perks-tab-badge.unused[data-v-2eade0fe]:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);     background-color: #909090;    box-shadow: 0 0 4px 2px #909090;}
.warning[data-v-2c5130o9e0] {    color: #ffffff}
.zxc3 {    background: #b1700f00;    border: 0;    border-radius: 4px;    box-shadow: 0 0 1px 1px #0000;    color: #dadada00;    cursor: pointer;    font-size: 16px;    outline: none;    padding: 5px 9px;    text-shadow: 1px 1px 2px #0000;     margin-left: 0px;    margin-top: 0px;}
.section[data-v-2c5139e0] {    border: 2px solid #fff0;    border-radius: 0px;    overflow: hidden}
.section>.header[data-v-2c5139e0] {    background: rgb(255 255 255 / 0%);    border-bottom: 2px solid #fff0;    padding: 7px}
.section[data-v-c41b640a] {    border: 2px solid #fff0;    border-radius: 0px;    overflow: hidden}
.section>.header[data-v-c41b640a] {    background: rgb(255 255 255 / 0%);    border-bottom: 2px solid #fff0;    padding: 7px}
.section[data-v-4dcda2ec] {    border: 2px solid #fff0;    border-radius: 0px;    overflow: hidden}
.section>.header[data-v-4dcda2ec] {    background: rgb(255 255 255 / 0%);    border-bottom: 2px solid #fff0;    padding: 7px}
input[type=number]:disabled,input[type=text]:disabled,select:disabled {    color: #ffffffab}
.section[data-v-0a751125] {    border: 2px solid #fff0;    border-radius: 0px;    overflow: hidden}
.section>.header[data-v-0a751125] {    background: rgb(255 255 255 / 0%);    border-bottom: 2px solid #fff0;    padding: 7px}
.section[data-v-4dcda2ec] {    border: 2px solid #fff0;    border-radius: 8px;    overflow: hidden}
.section>.header[data-v-4dcda2ec] {    background: rgb(255 255 255 / 0%);    border-bottom: 2px solid #fff0;    padding: 7px}
.button-row>.button {    background: #ffffff00;    border: 0;    border-radius: 0px;    box-shadow: 0 0 4px 2px #fff0;    color: #ffffff00;    cursor: pointer;    font-size: 16px;    font-size: 14px;    outline: none;    padding: 5px;    text-shadow: 1px 1px 2px #fff0}
.button-row>.button:hover {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff;}
.button-row>.button:active,.button-row>.button:disabled {background: #ffffff00;    color: #fff0;    text-shadow: 0 0 12px #fff0;}
.button-row>.button:disabled {    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff0;}
.button-row {    border-bottom: 2px solid #fff0;    display: flex;    justify-content: space-between;    padding: 7px 6px 6px}
.slider[data-v-011aad32]::-webkit-slider-thumb {    -webkit-appearance: none;    appearance: none;    background: #ffffff;    border-radius: 60px;    cursor: pointer;    height: 15px;    width: 15px}
.slider[data-v-011aad32] {    -webkit-appearance: none;    background: #ffffff00;    border: 1px solid #ffffff;    border-radius: 60px;    box-sizing: border-box;    display: block;    outline: none;    padding: 1px;    transition: none;    width: 100%}
.slider[data-v-c41b640a]::-webkit-slider-thumb {    background:  #bdc3c7;}
.swal2-styled.swal2-confirm {    background: initial;    background-color: #ffffff00;    border: 0;    border-radius: 0;    color: #fff;    font-size: 15px}
.swal2-styled.swal2-cancel {    background: initial;    background-color: rgb(255 255 255 / 0%);    border: 0;    border-radius: 0;    color: #fff;    font-size: 15px}
.swal2-actions:not(.swal2-loading) .swal2-styled:hover {    background: #fff0;    text-shadow: 0 0 7px #fff;    transition: .4s cubic-bezier(0.4, 0, 1, 1);}
.swal2-select {    background: #ffffff00;    border: 0;    border-radius: 0px;    color: #ffffff;    text-shadow: 0 0 4px #fff0;    color: inherit;    font-size: 15px;    max-width: 100%;    min-width: 50%;    padding: .375em .625em}
.lobby-list[data-v-67f43bc8] {    border-right: 2px solid #fff0;    margin-right: 6px;    width: 300px}
.lobby-chat[data-v-67f43bc8] {    border-left: 2px solid #fff0;    margin-left: 6px;    width: 300px}
.lobby-list>.row[data-v-fa675f88] {    border-bottom: 2px solid #fff0;    cursor: pointer;    display: flex;    justify-content: space-between;    padding: 10px}
.tab-menu .tab[data-v-752a3ab7]:not(:last-child) {    border-right: 2px solid #fff0}
.tab-menu .tabs[data-v-752a3ab7] {    border-bottom: 2px solid #fff0;    display: flex;    font-size: 18px}
.server-list-item[data-v-752a3ab7] {    position: relative;    border-bottom: 0px solid #fff0;    cursor: pointer;    display: flex;    padding: 10px;    user-select: none;    overflow: hidden;}
.server-list-item[data-v-752a3ab7]:hover {    transition: .2s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #ffffffc4;    text-shadow: 0 0 3px #ffffffc4;}
.server-list-item[data-v-752a3ab7]:hover::before {    content: '';    position: absolute;    top: 0;    left: -100%;    width: 100%;    height: 100%;        background: repeating-linear-gradient(0deg,#ffffff08,#ffffff08, #ffffff08); animation: slide-left .72s forwards;}
@keyframes slide-left {    100% {      left: 100%;}}
.server-list-item.active[data-v-752a3ab7],.server-list-item.active[data-v-752a3ab7]:hover {    background: #ffffff00;    color: #fff;    text-shadow: 0px 0px 7px #fff;}
#hotkey-container .row[data-v-bcefdc68]:not(:last-child) {    border-bottom: 2px solid #fff0}
#hotkey-container .footer[data-v-bcefdc68] {    border-top: 2px solid #fff0;    color: white;    display: flex;    justify-content: center;    padding: 10px}
.reset-option[data-v-c41b640a] {    color: white;    cursor: pointer;    display: inline-flex;    justify-content: center}
.reset-option[data-v-4dcda2ec] {    color: white;    cursor: pointer;    display: inline-flex;    justify-content: center}
.reset-option[data-v-4dcda2ec] {    color: white;    cursor: pointer;    display: inline-flex;    justify-content: center}
.reset-option[data-v-011aad32] {    color: #ffffff;}
.tab-menu .tab:not(:last-child) {    border-right: 2px solid #fff0}
.tab-menu .tab.active {    background: rgb(255 255 255 / 0%)}
.pretty.p-switch .state:before {    background: #ffffff00}
.section[data-v-011aad32] {    border: 2px solid #00000000;    border-radius: 8px;    overflow: hidden}
.section>.header[data-v-011aad32] {    background: rgb(0 0 0 / 0%);    border-bottom: 2px solid #00000000;    padding: 7px}
.tab-menu .tabs {    border-bottom: 2px solid #fff0;    display: flex;    font-size: 18px}
::-webkit-scrollbar-thumb {    background-color: #ffffff29;    border-radius: 10px;    box-shadow: 0 0 0px rgb(255 255 255 / 30%);}
::-webkit-scrollbar-track {    background: rgb(255 255 255 / 0%)}
.tab-menu .tabs[data-v-752a3ab7] {color: #fff0;}
.tab-menu .tabs[data-v-752a3ab7]:hover {    transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #ffffff;            text-shadow: 0 0 8px #fff;}
.tab-menu .tab.active[data-v-752a3ab7] {    background: rgb(255 255 255 / 0%)}
.open-lobbies[data-v-752a3ab7] {    background: hsl(0deg 0% 100% / 0%)}
.tab-menu .tab[data-v-2eade0fe] {    cursor: pointer;    flex: 1;    padding: 7px;    position: relative;    text-align: center;    background: #ffffff00;    border: 0;    border-radius: 0px;    box-shadow: 0 0 4px 2px #fff0;    color: #ffffff00;    text-shadow: 0 0 2px #fff0;    border-right: 2px solid #ffffff00}
.tab-menu .tab[data-v-2eade0fe]:hover{    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 12px #fff;}
#skins[data-v-2eade0fe] {    grid-gap: 10px;    box-sizing: border-box;    display: grid;    grid-auto-rows: 1fr;    grid-template-columns: 1fr 1fr 1fr;    min-width: 100%;    padding: 10px}
.skin-container[data-v-2eade0fe] {    display: flex;    position: relative}
.skin[data-v-2eade0fe] {    border: 0px solid #ffffff00;    border-radius: 100%;    box-shadow: 0 0 6px 2px #fff0;    box-sizing: border-box;    cursor: pointer;    width: 100%}
.skin-remove-button[data-v-2eade0fe] {    display: none}
.skin-container:hover .skin-remove-button[data-v-2eade0fe] {    border-radius: 50%;    cursor: pointer;    display: inline;    font-size: 15px;    position: absolute;    right: -3px;    top: -3px}
.skin.add-skin[data-v-2eade0fe] {    background:    rgb(255 255 255 / 3%)}
.selected[data-v-2eade0fe] {    box-shadow: 0 0 7px 0px white}
#main-container[data-v-5208baf4] {    grid-row-gap: 0px;    grid-column-gap: 0px;    display: grid;    grid-template-columns: 308px 346px 308px;    grid-template-rows: 118px 162px 308px;    left: 50%;    margin-left: -481px;    margin-top: -240px;    position: absolute;  top: 38%}
.fade-box {border-radius: 0px}
.swal2-title {    text-shadow: 0px 0px 5px #fff}
#overlay {    background: radial-gradient(rgb(140 140 140 / 15%) 300px,rgb(0 0 0 / 42%));}
.xp-progress[data-v-890f31b4] {    margin-top: 0px;    margin-left: -7px;    margin-right: -7px}
.xp-data[data-v-890f31b4] {    color: #fff;    display: flex;    position: absolute;    text-shadow: 0 0 5px #fff;    top: 5px;    width: 100%}
.progress[data-v-5f2d6d72] {    background:    rgb(255 255 255 / 3%);    border-radius: 0px;    box-shadow: inset 0 1px 2px rgb(255 255 255 / 0%),0 1px hsl(0deg 0% 100% / 0%);    padding: 0px}
.progress-bar[data-v-5f2d6d72] {    background-color: #ff0010;    border-radius: 0px;    height: 33px}
.progress-striped .progress-bar[data-v-5f2d6d72] {    background:    rgb(255 255 255 / 3%)}
.tooltip[data-v-7d20daa3] {    background: #ffffff00}
.fade-box.scroll {background: #ffffff00}
.swal2-popup {background: #ffffff00!important}
.tab-menu[data-v-5208baf4] {    background: #ffffff00;}
#player-container[data-v-5190ae12],.relative[data-v-5190ae12] {    background: #ffffff00;}
.account-wrapper[data-v-890f31b4] {background: #ffffff00}
@keyframes swal2-toast-show {    0% {        transform: none    }    33% {        transform: none    }    66% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-toast-hide {    to {        transform: none    }}
@keyframes swal2-toast-animate-success-line-tip {    0% {        transform: none    }    54% {        transform: none    }    70% {        transform: none    }    84% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-toast-animate-success-line-long {    0% {        transform: none    }    65% {        transform: none    }    84% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-animate-success-line-tip {    0% {        transform: none    }    54% {        transform: none    }    70% {        transform: none    }    84% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-animate-success-line-long {    0% {        transform: none    }    65% {        transform: none    }    84% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-rotate-success-circular-line {    0% {        transform: none    }    5% {        transform: none    }    12% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-animate-error-x-mark {    0% {        transform: none    }    50% {        transform: none    }    80% {        transform: none    }    to {        transform: none    }}
@keyframes swal2-animate-error-icon {    0% {        transform: none    }    to {        transform: none    }}@keyframes swal2-rotate-loading {    0% {        transform: none    }    to {        transform: none    }}
.swal2-popup {    box-shadow: 0 0 4px 2px #ffffff6b!important}
.content[data-v-73ccaaca] {    border-radius: 0px;    background: #ffffff00;}
.warning[data-v-fa675f88] {    color: #ffffff;    text-shadow: 0 0 5px #fff;}
.warning[data-v-0a751125] {    color: #ffffff;    text-shadow: 0 0 5px #fff;}
.lobby-connecting[data-v-fa675f88] {background: rgb(255 255 255 / 0%);}
.pretty.p-switch .state:before {    border: 1px solid #ffffff50;}
.slider[data-v-4dcda2ec] {    -webkit-appearance: none;    background: #ffffff00;    border: 1px solid #ffffff50;}
.pretty.p-switch input:checked~.state:before {    border-color: #ffffff!important}
.pretty.p-switch input:checked~.state label:after {    background-color: #ffffff!important}
.slider[data-v-4dcda2ec]::-webkit-slider-thumb {    -webkit-appearance: none;    appearance: none;    background: rgb(255 255 255 / 85%);    border-radius: 60px    cursor: pointer;    height: 15px;    width: 15px}
.discord[data-v-890f31b4] {    background: #ffffff00;    border: 1px solid #fff0;    border-radius: 0px;    color: #ffffff;}
.slider[data-v-4dcda2ec] {    background: #ffffff00;    border: 1px solid #ffffff;}
.slider.draw-delay[data-v-4dcda2ec] {    background: linear-gradient(45deg,rgb(255 0 0 / 0%),#12121200 35%)}
.slider[data-v-4dcda2ec]::-webkit-slider-thumb {    background: #ffffff;}
.chatbox[data-v-7264abb4] {    border-radius: 0px;    background: rgb(255 255 255 / 0%);}
.chatbox>input[data-v-7264abb4] {    background: transparent;}
.chatbox[data-v-7264abb4] {    box-shadow: 0 0 4px 2px #fff0!important}
#leaderboard[data-v-7e7860a8] {    background: rgb(255 255 255 / 0%);    border-radius: 0px;}
#leaderboard[data-v-7e7860a8] {    box-shadow: 0 0 4px 2px #fff0!important}
.container[data-v-769dba30] {    background: rgb(255 255 255 / 0%);    border-radius: 0px}
.container[data-v-769dba30] {    box-shadow: 0 0 4px 2px #fff0!important}
.image-button[data-v-180f29a6] {    border: 1px solid #fff0;    border-radius: 0px;}
.slider[data-v-8dbe5024] {    -webkit-appearance: none;    background: #12121200;    border: 1px solid #ffffff;    border-radius: 60px;    box-sizing: border-box;    display: block;    outline: none;    padding: 1px;    transition: none;    width: 100%}
.slider[data-v-8dbe5024]::-webkit-slider-thumb {    -webkit-appearance: none;    appearance: none;    background: #ffffff;    border-radius: 60px;    cursor: pointer;    height: 15px;    width: 15px}
.slider[data-v-c41b640a] {    background: #ffffff00;    border: 1px solid #ffffff;}
.slider[data-v-c41b640a]::-webkit-slider-thumb {    background: #ffffff;}
.replay-list-header[data-v-11810f3c] {    background: linear-gradient(#ffffff00,#ffffff00);    border-bottom: 2px solid #fff0;    box-shadow: 0 0 10px 1px #0000;}
.vanis-button {background: #ffffff00;    border: 0;    border-radius: 0px;    box-shadow: 0 0 4px 2px #fff0;    color: #ffffff00;    cursor: pointer;    outline: none;    padding: 5px 10px;    text-decoration: none;    text-shadow: 0 0 2px #fff0;}
.vanis-button,.vanis-button:active {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 5px #fff;}
.vanis-button:active {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 5px #fff;}
.vanis-button:disabled {    transition: .4s cubic-bezier(0.4, 0, 1, 1);    background: #ffffff00;    color: #fff;    text-shadow: 0 0 5px #fff;}
.replay-item[data-v-1dc3fbb4] {    background-position: 50% 50%;    background-size: cover;    border: 0px solid #fff0;    border-radius: 0px;    box-shadow: 2px 2px 5px 1px #fff0;    cursor: pointer;    overflow: hidden;    position: relative}
.replay-header[data-v-1dc3fbb4] {    background: rgb(0 0 0 / 40%);    border-bottom: 1px solid #fff0;}
.replay-list-page>.anchor .current>.real-input>input[data-v-11810f3c] {    background: #fff0;}
.social-container[data-v-3d4cb83d] {}
.bulk-operation-overlay>.small.warning[data-v-11810f3c] {    color: #ffffff00}
input[type=number][data-v-2c5139e0] {    background: rgb(0 0 0 / 0%);    border: 1px solid #fff0;}
.fade-box, .replay-list-header, .swal2-popup, .tooltip {    background: #ffffff00; !important;}
.section[data-v-8dbe5024] {    border: 2px solid #0000;    border-radius: 8px;    overflow: hidden}
.section>.header[data-v-8dbe5024] {    background: rgb(0 0 0 / 0%);    border-bottom: 2px solid #0000;    padding: 7px}
.cautions {text-shadow: 0 0 4px #151718;}
.slider.draw-delay[data-v-011aad32] {    background: linear-gradient(45deg,rgb(255 0 0 / 0%),#12121200 35%) !important}
    `;

    const existingStyles = document.querySelectorAll('style[id^="ukko-theme-"]');
    existingStyles.forEach(style => style.remove());

    if (isChecked) {
        const styleElement = document.createElement('style');
        styleElement.id = 'ukko-theme-styles';
        styleElement.textContent = customCss;
        document.head.appendChild(styleElement);
    }
}

function setupUkkoTheme() {
    const toggleUkkoTheme = section.querySelector('#toggleUkkoTheme');

    const handleUkkoThemeChange = () => {
        const isChecked = toggleUkkoTheme.checked;
        applyUkkoThemeStyles(isChecked);
        localStorage.setItem('toggleUkkoThemeChecked', isChecked);
    };

    const storedState = localStorage.getItem('toggleUkkoThemeChecked');
    if (storedState === 'true') {
        toggleUkkoTheme.checked = true;
        applyUkkoThemeStyles(true);
    } else {
        toggleUkkoTheme.checked = false;
        applyUkkoThemeStyles(false);
    }

    toggleUkkoTheme.addEventListener('change', handleUkkoThemeChange);
}

    (function() {

        const styleItem = document.createElement("style");
        styleItem.textContent = styles;
        document.head.appendChild(styleItem);

        smallContainer = createSmallContainer();
        const containers = document.querySelectorAll('.container[data-v-ba56a55e]');
        const container = containers[0];
        if (container) {
            container.appendChild(smallContainer);
        }

        section = createSection();
        smallContainer.appendChild(section);

        setupPageSwitcher()
        setupMoveLinks();
        setupCustomThemeButton();
        setupHideSocialContainer();
        setupDateDisplay();
        setupTransparentButton();
        setupPressedKeys();
        setupMousePos();
        setupUkkoTheme();
        setupReverseMenu();
        setupShowStatsColor();
        setupAccountBelow();
    })();
}

setTimeout(startTimer, 1000);
