import {socialInputValidation } from "./socialInputValidation.js";

function renderSocials (data) {
socialInputValidation ();

// logic , kintamieji
const socialsDOM = document.querySelector ('div > .socials-row');

// ciklas
let HTML = '';

    for (let i=0; i < data.length; i++) {
        const item = data [i];
        if (typeof item !== 'object'){
            continue; 
// komanda "continue" - jei duomenu tipas netinkamas (ne objektas), tesiame toliau, t.y. pereiname prie sekancio 'saraso nario'
        }
        if (typeof item.link !== 'string' || item.link === '')
        continue; 
//komanda "continue" - jei duomenu tipas netinkamas (nera nuorodos string' arba nuoroda tuscia), tesiame toliau, t.y. pereiname prie sekancio 'saraso nario'
        if (typeof item.icon !== 'string' || item.icon === '')
        continue;   
// komanda "continue" - jei duomenu tipas netinkamas (nera ikonos string'e arba ikona tuscia/ nera ikonos), tesiame toliau, t.y. pereiname prie sekancio 'saraso nario'

        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}"></a>`;

    }
 



// post logic validation, tikrinama ar sarasas tinkamas, ar nera tuscias ir pan.
if (HTML === '') {
    console.error('ERROR: napvyko sugeneruoti social ikonu / nuorodu');
    return false;
} 



// return / turinio istatymas 
socialsDOM.innerHTML = HTML;
return true;
}


export { renderSocials };