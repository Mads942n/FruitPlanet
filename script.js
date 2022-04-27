
const fetchPromise = fetch('products.json')

fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error (`Fetch Error: ${response.status}`)
        }
        return response.json();
    })
    .then( json =>{

        let output;

        json.forEach(i => {
            console.log(i.productname)
            output += `<div class="div--card">
            <img src="${i.picture}" alt="">
            <p class="div--card__info">${i.description_short}</p>
            <h3 class="div-card__price">${i.price}</h3><img src="" alt="Add to cart">
            </div>`

        });
        document.querySelector('.section--cards').innerHTML = output


    })
    .catch( error => {
        console.error(`Error: ${error}`);
    });