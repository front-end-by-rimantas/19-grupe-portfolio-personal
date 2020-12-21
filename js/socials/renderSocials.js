// import { socialInputValid } from "./socialInputValid.js";
// import { socialItemValid } from "./socialItemValid.js";

// //input validation
// function renderSocials(selector, data) {
//     if (!socialInputValid(selector, data)) {
//     return false;
//     }

//     // logic 
//     const socialsDOM = document.querySelector(selector); //'div > .socials-row'

//     if (!socialsDOM) {
//     console.error('ERROR: nerasta turinio generavimo vieta');
//     return false;
//     }

//     // ciklas
//     let HTML = '';

//     for (let i=0; i < data.length; i++) {
//         const item = data [i];
//         if (socialItemValid(item)) {
//             continue;
//         }
//         HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}"></a>`;
//     }

//     // post logic validation, tikrinama ar sarasas tinkamas, ar nera tuscias ir pan.
//     if (HTML === '') {
//     console.error('ERROR: nepavyko sugeneruoti soc. ikonu / nuorodu');
//     return false;
//     } 

//     // return / turinio istatymas 
//     socialsDOM.innerHTML += HTML;
//     return true;

// }

function renderSocials(data) {
    let HTML = '';

    for (let i=0; i < data.length; i++) {
        const item = data [i];
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}"></a>`;
    }
    const socialsDOM = document.querySelector('div > .socials-row');

    socialsDOM.innerHTML = HTML;
}

export { renderSocials }