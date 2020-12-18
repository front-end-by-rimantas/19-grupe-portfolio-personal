
function renderSocials (data) {
let HTML = '';

    for (let i=0; i < data.length; i++) {
        const item = data [i];
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}"></a>`;

    }
    const socialsDOM = document.querySelector ('div > .socials-row');
    console.log(socialsDOM);

    socialsDOM.innerHTML = HTML;
}


export { renderSocials };