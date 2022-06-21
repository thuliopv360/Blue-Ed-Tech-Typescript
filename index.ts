import { UnionOrIntersectionType } from './node_modules/typescript/lib/typescript.d';
// Como definir um tipo 
const nome: string = "Thulio"

//Coomo definir o tipo de um parametro de funcao

function funcao(name: string, age: number) {
    console.log(name);
    console.log(age);
}

funcao("Thulio", 26);
function funcao2(name: string): number {
    return 1;
}

// Tipos 
//boolean(true / false)

let result: boolean = true;

// string("blue", 'blue', `blue`)

let animal: string = "Elefante";

// number(int, float, hex, binary)

let age: number = 100;

// array (type[])

let nameList: string[] = [];

nameList.push("Thulio");
// nameList.push(1) assim nao ira funcionar

// tuple ()

let modulesList: [string, number, string] = ["M1", 2, "M3"];

// any nao recomendado

let any: any = "Thulio";
let anys: any = () => { };

// null / undefined

let empty: null = null;
let emptys: undefined = undefined;

//void (vazio)
//Situacao ao qual existe um retorno. Porem um retorno vazio.

function logName(name: string): void {
    console.log(name);
}

//never
//Situacao ao qual nuca existe um retorno.

function error(): never {
    throw "Erro"
}

//Object

let thulio: object = { name: "Thulio", age: 26 }
let lucas: {} = { name: "Lucas" }

//type

type Pet = {
    name: string;
    breed: string;
    age: number;
}

type Human = {
    name: string;
    age?: number;// a propriedade age pode ser setado ou undefined
    pet?: Pet;
}

let ivan: Human = { name: "ivan", age: 10 };

type Id = number | string | undefined;
//multiple types

let isTable: Id = "12345";
let isUser: Id = 12;
//defined values valores pré definidos

type OS = "Windows" | "MacOS" | "Ubuntu";

let pc: OS = "Windows";

//intercecção

type Person = {
    name: string;
    gender: "M" | "F";
    health_points: number;
};

let aragorn: Person = {
    name: "Aragorn",
    gender: "M",
    health_points: 100
}

type Magician = {
    mana_points: number;
}

let gandalf: Person & Magician = {
    name: "gandalf",
    gender: "M",
    health_points: 100,
    mana_points: 100
}

//interface 

interface Car {
    model: string;
    brand: string;
    year: number;
    plate: string;
}
// Nao e posivel fazer tipos multiplos com uma interface, 
//apenas nos valores internos do objeto dela


// interface Id2 = string | number | undefined


//podendo fazer assim


/*interface Id2{
    name: string | number | undefined;
}*/

let Uno: Car = {
    model: "Uno",
    brand: "Fiat",
    year: 1996,
    plate: "CRE-7788"
}

//interface - readonly(exclusivo da interface)

interface Pets {
    readonly name: string;
    age: number;
};

let cat: Pets = {
    name: "cleopatra",
    age: 3,
};

cat.age++;

console.log(cat);

//interface - extends 

interface Character {
    name: string;
    level: number;
    experience: number;
};

let berethor: Character = {
    name: "Berethor",
    level: 1,
    experience: 0,
};


interface Hunter extends Character{
    have_bow: boolean;
};

let legolas: Hunter = {
    name: "Legolas",
    level: 1,
    experience: 0,
    have_bow: true,
};


//decorators