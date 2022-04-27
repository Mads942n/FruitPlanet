
const fetchPromise = fetch('products.json')

fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error (`Fetch Error: ${response.status}`)
        }
        return response.json();
    })
    .then( json =>{

        console.log(json[0])

    })
    .catch( error => {
        console.error(`Error: ${error}`);
    });