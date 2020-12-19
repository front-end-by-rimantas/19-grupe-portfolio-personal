// input validation

function socialInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('Error: selectorius turi buti tekstinio tipo.')
        return false;
        }

    if (selector === '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas.')
        return false;
        }

    if (Array.isArray(data) === false) {
        console.error('ERROR: social icons geenruoti reikia array tipo duomenu');
        return false;
        }

        if (data.length === 0) {
        console.error('ERROR: social icons generavimui reikia ne tuscio array')   
        return false;
        }
        return true;
}

export { socialInputValid };