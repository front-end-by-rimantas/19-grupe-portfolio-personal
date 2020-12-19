function socialItemValid (itemObject) {
    if (typeof itemObject !== 'object'){
        console.warn('ERROR: social elementas turi buti objektas'); 
        return false;
    }
    
    if (typeof itemObject.link !== 'string' || itemObject.link === '') {
    console.warn('ERROR: social elemento nuoroda turi buti teksto tipo ir ne tuscia'); 
    return false; 
    }   

    if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
    console.warn('ERROR: social elemento nuoroda turi buti teksto tipo ir ne tuscia');    
    return false;
    }
    return true;
}

export { socialItemValid };
