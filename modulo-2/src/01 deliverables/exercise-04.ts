console.log("************** DELIVERABLE 04 *********************");

console.log('4. Read Books');

// Crea una función isBookRead que reciba una lista de libros y un título y devuelva 
// si se ha leído o no dicho libro.Un libro es un objeto con title como string y isRead 
// como booleano.En caso de no existir el libro devolver false TIP: Existe un método 
// de Array.prototype que te ayudará a buscar según un patrón.

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

// function isBookRead(books: Array<any>, titleToSearch: string) {
//     let isBookRead: Boolean = false;
//     books.find(element => {
//         if (element.title === titleToSearch && element.isRead) {
//             isBookRead = true;
//         }
//     });
//     return isBookRead;
// }

function isBookRead(books: Array<any>, titleToSearch: string) {
    const myBook = books.find(element =>
        element.title === titleToSearch
    );
    return myBook?.isRead || false;
}

console.log("Devastación", isBookRead(books, "Devastación")); // true
console.log("Canción de hielo y fuego", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Los Pilares de la Tierra", isBookRead(books, "Los Pilares de la Tierra")); // false