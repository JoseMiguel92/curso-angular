
export class Person {
    //public name: string;
    //public address: string;

    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No address'
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) { super(realName, 'NY'); }
// }
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) { }
}

const tony = new Person('Tony', 'Stark', 'NY');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
