class User {
    name = '';
    lastName = '';
    books = [];
    pets = []

    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets
    }

    //Retorna el nombre y el apellido del usuario
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }

    //Añade al objeto pets una mascota de más
    //@params: ingresa la mascota que registra el usuario
    addPets(pet) {
        this.pets.push(pet);
    }

    //Retorna el número de máscotas que tiene le usuario
    countPets() {
        return this.pets.length;
    }

    //Añade al objeto books en un espacio el nombre y el autor del libro
    //@params:  name = nombre del libro
    //  autor = Autor del libro    
    addBook(name, autor) {
        const obj = {
            name: name,
            autor: autor
        };

        this.books.push(obj);
    }

    //Retorna todos los nombres de los libros que ingreso el usuario
    getBookNames() {
        const obj = this.books.map((x) => x.name);
        return obj;
    }
}


const user1 = new User('Juan', 'Saldaña', [], ['perro', 'gato']);
const user2 = new User('Camila', 'Rodriguez', [], ['gato']);
const user3 = new User('Juliana', 'Rodriguez', [], ['perro']);

user1.addPets('pezcado');
user2.countPets();
user3.addBook('Mi lucha', 'Adolfo');
user3.addBook('La odisea', 'Homero');
user3.getFullName();
user3.getBookNames();