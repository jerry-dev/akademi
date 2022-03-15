import React from 'react';

const monthWithYear = {
    '0': `January ${new Date().getFullYear()}`,
    '1': `February ${new Date().getFullYear()}`,
    '2': `March ${new Date().getFullYear()}`,
    '3': `April ${new Date().getFullYear()}`,
    '4': `May ${new Date().getFullYear()}`,
    '5': `June ${new Date().getFullYear()}`,
    '6': `July ${new Date().getFullYear()}`,
    '7': `August ${new Date().getFullYear()}`,
    '8': `September ${new Date().getFullYear()}`,
    '9': `October ${new Date().getFullYear()}`,
    '10': `November ${new Date().getFullYear()}`,
    '11': `December ${new Date().getFullYear()}`
};

const getOptions = () => {
    const options = [];

    for (let i = 0; i < 12; i++) {
        options[options.length] = <option value={i}>{monthWithYear[i]}</option>
    }

    return options;
};

export default getOptions;