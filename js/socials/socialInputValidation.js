// input validation

function socialInputValidation(data) {
    if (Array.isArray(data) === false) {
        // //jei array uzrasymo tipas nera array. Kitas galimas uzrasymas su invert(!) >>>  (!Array.isArray(data))
        console.error('ERROR: social icons geenruoti reikia array tipo duomenu');
        return false;
        }
        if (data.length === 0) {
        console.error('ERROR: social icons generavimui reikia ne tuscio array')   
        return false;
        }
        return true;
}

export {  socialInputValidation };