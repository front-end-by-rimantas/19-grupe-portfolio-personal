/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento genervimui
 * @param {Array} data duomenys
 */
function renderFeaturedProjectsNav(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    let HTML = '';
    for (let { link, name, clas } of data) {
        HTML += `<a href="${link}" class="${clas}">${name}</a>`;
    }
    if (HTML === '') {
        return false;
    }
    DOM.innerHTML = HTML;
    return true;
    }
    export { renderFeaturedProjectsNav }