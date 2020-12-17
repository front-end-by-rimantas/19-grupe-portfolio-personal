/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento genervimui
 * @param {Array} data duomenys
 */
function renderHeader(selector, data) {
const DOM = document.querySelector(selector);
if (!DOM) {
    return false;
}
let HTML = '';
for (let { link, name } of data) {
    HTML += `<a href="${link}">${name}</a>`;
}
if (HTML === '') {
    return false;
}
DOM.innerHTML = HTML;
return true;
}
export { renderHeader }