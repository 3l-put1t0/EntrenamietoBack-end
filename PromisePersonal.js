function getAPI(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => {
                if(res.ok){
                    resolve(res.json())
                }else{
                    reject(Error('error en la solicitud'))
                }
            })
            .catch(function(err){
                reject(err)
            })
    })
}

console.log('Inicio de la solicitud');
//Llamado del API
getAPI("https://rickandmortyapi.com/api/character")
    .then((data) =>{
        console.log(data)
    })
    .catch(function(err){console.log('ERROR: ', err)})

console.log('Fin de la solicitud')

/*Primero se ejecuta las funciones 
sincronas y luego las funciones asincronas,
en este caso las funciones sincronas son los console.log('Inicio...')
y console.log('Fin...'), y la función asíncrona es la promesa personalizada
creada en el encabezado de script*/