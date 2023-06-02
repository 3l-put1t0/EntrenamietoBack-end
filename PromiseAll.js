function dataAsig() {
    const promesa1 = fetch("https://rickandmortyapi.com/api/character")
        .then((r) => { r.json() })
    const promesa2 = fetch( "https://rickandmortyapi.com/api/location")
        .then((r) => { r.json() })
    const promesa3 = fetch("https://rickandmortyapi.com/api/episode")
        .then((r) => { r.json() })

    return Promise.all([promesa1,
                        promesa2,
                        promesa3
                       ]);    
}

console.log('Inicio')

dataAsig()
    .then((data) => {
        data.forEach((r) => {console.log(r)})
        // const [data1, data2, data3] = data;
        // console.log('data1: ', data1);
        // console.log('data2: ', data2);
        // console.log('data3: ', data3);
        console.log('fin')
     })
     .catch(err => console.log('ERROR: ', err))