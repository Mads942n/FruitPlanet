
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
            output += `<li class="li--card">
            <img src="${i.picture}" alt="Product picture">
            <h2 class="article--card__name">${i.productname}</h2>
            <p class="article--card__info">${i.description_short}</p>
            <h3 class="article-card__price">${i.price}</h3><img src="" alt="Add to cart">
            </li>`

        });
        document.querySelector('.ul--cards').innerHTML = output


    })
    .catch( error => {
        console.error(`Error: ${error}`);
    });