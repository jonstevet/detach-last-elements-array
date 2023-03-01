const solution = require('../prueba');

    test('test 1', () => {
        expect(solution(["Nico", "Zule"], 0, "Santi")).toStrictEqual(["Nico", "Zule", "Santi"]);
    });

    test('test 2', () => {
        expect(solution(["Juan", "Juanita", "Daniela"], 1, "Julian")).toStrictEqual(["Juan", "Juanita", "Julian"]);
    });

    test('test 3', () => {
        expect(solution(["Nath", "Luisa", "Noru"], 2, "Cami")).toStrictEqual(["Nath", "Cami"]);
    });