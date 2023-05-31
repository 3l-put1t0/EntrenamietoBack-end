class Users {
    name: string = '';
    lastName: string = '';
    books: object[] = [];
    pets: string[] = []

    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets
    }

    //Retorna el nombre y el apellido del usuario
    getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }

    //Añade al objeto pets una mascota de más
    //@params: ingresa la mascota que registra el usuario
    addPets(pet: string): void {
        this.pets.push(pet);
    }

    //Retorna el número de máscotas que tiene le usuario
    countPets(): number {
        return this.pets.length;
    }

    //Añade al objeto books en un espacio el nombre y el autor del libro
    //@params:  name = nombre del libro
    //  autor = Autor del libro    
    addBook(name: string, autor: string): void {
        const obj = {
            name: name,
            autor: autor
        };

        this.books.push(obj);
    }

    //Retorna todos los nombres de los libros que ingreso el usuario
    getBookNames(): string[] {
        const obj = this.books.map((x) => x.name);
        return obj;
    }
}


const user4: Users = new Users('Juan', 'Saldaña', [], ['perro', 'gato']);
const user5: Users = new Users('Camila', 'Rodriguez', [], ['gato']);
const user6: Users = new Users('Juliana', 'Rodriguez', [], ['perro']);

user4.addPets('pezcado');
user5.countPets();
user6.addBook('Mi lucha', 'Adolfo');
user6.addBook('La odisea', 'Homero');
user5.getFullName();
user6.getBookNames();