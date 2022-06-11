console.log("************** DELIVERABLE 03 *********************");

type Person = {
    name: string,
    weapon?: string,
    armor?: string
}

const vikings = [
    { name: 'Gertrud (viking)', weapon: 'sword' },
    { name: 'Njal (viking)', armor: 'iron plate' },
    { name: 'Trygve (viking)', weapon: 'spear' },
    { name: 'Sigrid (viking)', weapon: 'axe' },
    { name: 'Thyra (viking)', armor: 'chainmail' },
]

const egypts = [
    { name: 'Djoser (egypt)', weapon: 'battle axe' },
    { name: 'Imhotep (egypt)' },
    { name: 'Keops (egypt)', weapon: 'mace-ax' },
    { name: 'Kefrén (egypt)', weapon: 'khopesh' },
    { name: 'Micerinos (egypt)' },
]

// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    return { ...source };
}

console.log('3.1 Clone');
console.log(clone(egypts), clone(vikings));

// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:

type FirstPerson = {
    name: string,
    surname: string,
    country: string
}

type SecondPerson = {
    name: string,
    age: number,
    married: boolean
}

const firstPerson = { name: "Maria", surname: "Ibañez", country: "SPA" };
const secondPerson = { name: "Luisa", age: 31, married: true };

// el resultado de mezclar a sobre b sería:
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
    return { ...source, ...target };
}

console.log('3.2 Merge');
console.log(merge(firstPerson, secondPerson));