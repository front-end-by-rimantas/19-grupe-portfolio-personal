
/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento genervimui
 * @param {Array} data duomenys
 */
function renderPlans(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }
    let HTML = '';
    for (let { number, name, p1, p2, p3, p4, price, link } of data) {
        HTML += `
        <div class="col-3">
            <div class="align">
            <p class="border">${number}</p>
            </div>
        <h4 class="plan-name">${name}</h4>
        <p class="ind">${p1}</p>
        <p class="pa">${p2}</p>
        <p class="pa">${p3}</p>
        <p class="pa paB">${p4}</p>
        <div class="price" style="padding-top: 20px;">
        <a href="${link}">${price}</a>
        </div>
    </div>
    `;
    }
    if (HTML === '') {
        return false;
    }
    DOM.innerHTML = HTML;
    return true;
    }
    export { renderPlans }