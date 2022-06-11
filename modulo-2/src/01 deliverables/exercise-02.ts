console.log("************** DELIVERABLE 02 *********************");

const a = [
    { name: 'a (1)' },
    { name: 'b (1)' },
    { name: 'c (1)' },
    { name: 'd (1)' },
    { name: 'e (1)' },
]

const b = [
    { name: 'a (2)' },
    { name: 'b (2)' },
    { name: 'c (2)' },
    { name: 'd (2)' },
    { name: 'e (2)' },
]

const c = [
    { name: 'a (3)' },
    { name: 'b (3)' },
    { name: 'c (3)' },
    { name: 'd (3)' },
    { name: 'e (3)' },
]

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a: Array<any>, b: Array<any>) => {
    const array = [...a, ...b];
    return array;
};

console.log('2.1 Concat');
concat(a, b).forEach(element => {
    console.log('name =>', element.name);
});

// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

const concatUltimate = (...a: Array<any>) => {
    let arrayUltimate = [];
    a.forEach(element => {
        arrayUltimate = [...arrayUltimate, ...element];
    });
    return arrayUltimate;
}

console.log('2.2 Opcional');
concatUltimate(a, b, c).forEach(element => {
    console.log('name =>', element.name);
});