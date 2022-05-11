
let cart;

localStorage.clear()

if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
} else {
    cart = [];
}




function addtocart(){

    if( cart == ""){
        cart = [this.parentNode.id]
    } else {
        cart += [, this.parentNode.id]
    }


    localStorage.setItem('cart',  JSON.stringify([cart]))
    
    console.log(localStorage.getItem('cart'))

    

}






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
            output += `<li class="li--card" id="${i.productID}">
            <img src="${i.picture}" alt="Product picture">
            <h2 class="article--card__name">${i.productname}</h2>
            <p class="article--card__info">${i.description_short}</p>
            <h3 class="article-card__price">${i.price}</h3>
            <button class="article--card__button"><img src="" alt="Add to cart"></button>
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



    