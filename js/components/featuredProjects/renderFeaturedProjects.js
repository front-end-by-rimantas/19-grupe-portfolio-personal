/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento genervimui
 * @param {Array} data duomenys
 */
function renderFeaturedProjects(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    let HTML = '';
    for (let { img, name, description } of data) {
        HTML += `<div class="col-4 col-sm-6 col-xs-12">
                    <div class="filters-content">
                        <img src="${img}" alt="">
                        <h4>${name}</h4>
                        <p>${description}</p>
                    </div>
                </div>`;
    }
    if (HTML === '') {
        return false;
    }
    DOM.innerHTML = HTML;
    return true;
    }
    export { renderFeaturedProjects }