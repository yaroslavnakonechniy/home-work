const {
    ageClassification,
    weekFn
} = require('../main');

function generateNumber(minNumber, maxNumber) {
    const number = [];

    for (let i = minNumber; i <= maxNumber; i++){
        number.push(i);
    }

    return number;
}

describe('functionClassification', () => {
    const casesAge = generateNumber(-5, 130);
    const casesWeek = generateNumber(-3, 10);

    casesAge.forEach((age) => {
        if ( age <= 0 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe(null);
            });
        } else if ( age <= 24 && age > 0 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Дитинство');
            });
        } else if ( age <= 44 && age > 24 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Молодість');
            });
        } else if ( age <= 65 && age > 44 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Зрілість');
            });
        } else if ( age <= 75 && age > 65 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Старість');
            });
        } else if ( age <= 90 && age > 75 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Довголіття');
            });
        } else if ( age <= 122 && age > 90 ) {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe('Рекорд');
            });
        } else {
            test(`ageClassification(${age})`, () => {
                expect(ageClassification(age)).toBe(null);
            });
        }
    });

    casesWeek.forEach((number) => {
        switch (number) {
            case 1:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Понеділок');
                });
            break
            case 2:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Вівторок');
                });
            break
            case 3:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Середа');
                });
            break
            case 4:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Четвер');
                });
            break
            case 5:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('П\ятниця');
                });
            break
            case 6:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Субота');
                });
            break
            case 7:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe('Неділя');
                });
            break
            default:
                test(`weekClassification(${number})`, () => {
                    expect(weekFn(number)).toBe(null);
                });
        }
    })
});
