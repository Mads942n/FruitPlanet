

// Variables 

Cart = [
    Totalprice = 0,
    ItemsNumber = 0,
    ItemsID = [""]
]

Cart__bttn = document.querySelector('.Cart--button')
    //Cart__bttn.addEventListener('click', /* A Function */);
    Cart__bttn.textcontent = `${ItemsNumber}`


// End 

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




    

    function addtocart(){
    
        //Add the productID form the JSON to the cart array.
        //Update the cart array with the correct info (PriceTotal and number of items)
        ItemsNumber = ItemsNumber+1;
        console.log(ItemsNumber)
        
        




    }

    //Starter med at queryselect din input type="search"
    searchbar = document.querySelector('.Search')

    //Tilføjer eventlistener, så når der bliver klikket på søgefeltet
    //Putter den en extra class på elementet.
        searchbar.addEventListener('focusin', e =>{
            //Bruger arrow functions, istedet for normale function calls.
            searchbar.className = searchbar.className + ' animation'
        })

    //Når man klikker væk fra input feltet, bliver className sat tilbage.
        searchbar.addEventListener('focusout', e =>{
            searchbar.className = '.Search'
        })





/**
    const fetchProducts = fetch('products.json')

        fetchProducts
        .then( response => {
            if (!response.ok) {
                throw new Error (`Fetch Error: ${response.status}`)
            }
            return response.json();
        })
        .then( json =>{
    
            let output;
    
            json.forEach(i => {
                
                
                output += `<li class="li--card">
                <img src="${i.picture}" alt="Product picture">
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
**/



    
