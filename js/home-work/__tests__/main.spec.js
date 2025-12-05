const {
    ageClassification,
    weekFn
} = require('../main');

function generateNumber(minNumber, maxNumber) {
    const number = [];

    for (let i = minNumber; i <= maxNumber; i++){
        if ( i <= 0 ) {
            number.push({age: i, expected: null});
        } else if ( i <= 24 && i > 0 ) {
            number.push({age: i, expected: 'Дитинство'});
        } else if ( i <= 44 && i > 24 ) {
            number.push({age: i, expected: 'Молодість'});
        } else if ( i <= 65 && i > 44 ) {
            number.push({age: i, expected: 'Зрілість'});
        } else if ( i <= 75 && i > 65 ) {
            number.push({age: i, expected: 'Старість'});
        } else if ( i <= 90 && i > 75 ) {
            number.push({age: i, expected: 'Довголіття'});
        } else if ( i <= 122 && i > 90 ) {
            number.push({age: i, expected: 'Рекорд'});
        } else {
            number.push({age: i, expected: null});
        }
    }

    return number;
}

describe('functionClassification', () => {
    const casesage = generateNumber(-5, 130);

    casesage.forEach(({age, expected}) => {
        test(`ageClassification(${age}: ${expected})`, () => {
            expect(ageClassification(age)).toBe(expected);
        });
    });

    const casesWeek = [
        {numberOfDay: 0, nameOfWeek: null},
        {numberOfDay: 1, nameOfWeek: 'Понеділок'},
        {numberOfDay: 2, nameOfWeek: 'Вівторок'},
        {numberOfDay: 3, nameOfWeek: 'Середа'},
        {numberOfDay: 4, nameOfWeek: 'Четвер'},
        {numberOfDay: 5, nameOfWeek: 'П\ятниця'},
        {numberOfDay: 6, nameOfWeek: 'Субота'},
        {numberOfDay: 7, nameOfWeek: 'Неділя'},
        {numberOfDay: 8, nameOfWeek: null},
        {numberOfDay: -3, nameOfWeek: null},
        {numberOfDay: 0.6, nameOfWeek: null},
    ]

    casesWeek.forEach(({numberOfDay, nameOfWeek}) => {
        test(`weekClassification(${numberOfDay}): ${nameOfWeek}`, () => {
            expect(weekFn(numberOfDay)).toBe(nameOfWeek);
        });
    })
});
