const solution = require('./solution');

describe('solution', () => {
    test('should sum values by day correctly', () => {
        const input = {
            '2020-01-01': 4,
            '2020-01-02': 4,
            '2020-01-03': 6,
            '2020-01-04': 8,
            '2020-01-05': 2,
            '2020-01-06': -6,
            '2020-01-07': 2,
            '2020-01-08': -2
        };
        const expected = {
            Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2
        };
        expect(solution(input)).toEqual(expected);
    });

    test('should fill missing days with average of previous and next day', () => {
        const input = {
            '2020-01-01': 6,
            '2020-01-04': 12,
            '2020-01-05': 14,
            '2020-01-06': 2,
            '2020-01-07': 4
        };
        const expected = {
            Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14
        };
        expect(solution(input)).toEqual(expected);
    });

    test('should handle all days present without changes', () => {
        const input = {
            '2020-01-06': 10, '2020-01-07': 20, '2020-01-08': 30,
            '2020-01-09': 40, '2020-01-10': 50, '2020-01-11': 60,
            '2020-01-12': 70
        };
        const expected = {
            Mon: 10, Tue: 20, Wed: 30, Thu: 40, Fri: 50, Sat: 60, Sun: 70
        };
        expect(solution(input)).toEqual(expected);
    });

    test('should work when multiple dates fall on the same day', () => {
        const input = {
            '2020-01-06': 5, '2020-01-13': 10,
            '2020-01-07': 3, '2020-01-14': 7
        };
        const expected = {
            Mon: 15, Tue: 10, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0
        };
        expect(solution(input)).toEqual(expected);
    });
});
