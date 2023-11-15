// FUNCION BASICA.
function addNumbers(a: number, b: number) {
    return a + b;
}
const result: number = addNumbers(1, 2);
// FUNCION ARROW.
const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`
}
const result2: string = addNumberArrow(1, 2);
// FUNCION CON PARAMETRO OPCIONAL Y PARAMETRO CON VALOR POR DEFECTO.
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}
const multiplyResult: number = multiply(5);

// FUNCION CON OBJETOS COMO PARAMETROS
interface Character {
    name: string;
    healthPoints: number;
    showHealthPoints: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.healthPoints += amount;
}

const strider: Character = {
    name: 'Strider',
    healthPoints: 100,
    showHealthPoints() {
        console.log(`HealthPoints ${this.healthPoints}`);
    }
}
strider.showHealthPoints();
healCharacter(strider, 60);
strider.showHealthPoints();




console.log({ result, result2, multiplyResult, strider })


export { };