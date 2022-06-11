console.log("************** DELIVERABLE 01 *********************");

console.log("1. Array operations");

type Animal = {
    name: string,
    weight: number
}

const animals = [
    { name: 'Blue Whale', weight: 190_000 },
    { name: 'Whale Shark', weight: 11_800 },
    { name: 'Giraffe', weight: 1_200 },
    { name: 'Crocodile', weight: 1_100 },
    { name: 'Bison', weight: 800 },
]

// Head

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (array: Array<Animal>) => {
    const [first] = array;
    return first;
};

console.log("1.1. head");
console.log('name =>', head(animals).name, '||', 'weight =>', head(animals).weight);
// Tail

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (array: Array<Animal>) => {
    const [first, ...rest] = array;
    return rest;
};

console.log("1.2. tail");
tail(animals).forEach(element => {
    console.log('name =>', element.name, '||', 'weight =>', element.weight);
});


// Init

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array: Array<Animal>) => {
    const init = array.slice(0, -1);
    return init;
};
console.log("1.3. init");
init(animals).forEach(element => {
    console.log('name =>', element.name, '||', 'weight =>', element.weight);
});

// Last

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array: Array<Animal>) => {
    const last = array.slice(-1)[0];
    return last;
};

console.log("1.4. last");
console.log('name =>', last(animals).name, '||', 'weight =>', last(animals).weight);
