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
            <img src="${i.picture}" alt="Product picture" class="li--img">
            <h2 class="article--card__name">${i.productname}</h2>
            <p class="article--card__info">${i.description_short}</p>
            <h3 class="article-card__price">${i.price}</h3><img src="" alt="Add to cart">
            <button class="article--card__button">Add to Cart</button>
            </li>`

        });
        document.querySelector('.ul--cards').innerHTML = output

        articleCard__bttn = document.querySelectorAll('.article--card__button').forEach( i =>{
            i.addEventListener('click', addtocart)
        })

    })
    .catch( error => {
        console.error(`Error: ${error}`);
    });