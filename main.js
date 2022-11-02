var listOfProducts;
var main = document.querySelector("main");


// var arrayData = listOfProducts.value();

 /** Get products from the json file and store it in a global variable */
 function loadProducts() {
     fetch("./products.json")
    .then(function(response) {
         return response.json();
     })
     .then(function(products) {
         listOfProducts = products;
         addProductsToWebpage();
     });
 }




function initSite() {
    loadProducts();
    addToCartCounter();
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {

    // Loop that renders the content on the page 
    for (const product of listOfProducts) {
        const phoneDiv = document.createElement("div"); //creating a div element and giving it a class name
        phoneDiv.classList.add("phone-div");
        phoneDivHeading(product.title, phoneDiv);
        phoneDivTextP(product.description, phoneDiv);
        phoneDivImage(product.image, phoneDiv);
        phoneDivPriceP(product.price, phoneDiv);
        phoneDivBtn(product, phoneDiv);
        main.appendChild(phoneDiv);
    }
    

    // Check your console to see that the products are stored in the listOfProducts varible.
    //console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}


//Function for creating the heading element in the phoneDiv  
function phoneDivHeading (title, phoneDiv) {
    const heading = document.createElement("h2");
    heading.innerText = title;
    phoneDiv.appendChild(heading);

    return phoneDivHeading;
}

//Function for creating the button (add to cart) in the phoneDiv  
function phoneDivBtn (product, phoneDiv) {
    const addToCartBtn =document.createElement("button");
    addToCartBtn.innerHTML = '<i class="fa-solid fa-cart-arrow-down"></i>' + "Lägg till i kundvagnen";
    addToCartBtn.classList.add("addToCartBtn");
    phoneDiv.appendChild(addToCartBtn);
    addToCartBtn.addEventListener ("click", function() {
        addToCart(product); 
        addToCartBtn.disabled = true
     });
   
     return phoneDivBtn;
}

//Function for creating the phone description in the phoneDiv  
function phoneDivTextP (description, phoneDiv) {
    const textP = document.createElement("p");
    textP.innerText = description;
    phoneDiv.appendChild(textP);

    return phoneDivTextP;
}

//Function for creating the phone image in the phoneDiv  
function phoneDivImage (image, phoneDiv) {
    const phoneImage = document.createElement("img")
    phoneImage.setAttribute("src", "/assets/" + image);
    phoneDiv.appendChild(phoneImage);

    return phoneDivImage;
}

//Function for creating the price in the phoneDiv  
function phoneDivPriceP (price, phoneDiv) {
    const priceP = document.createElement("p");
    priceP.innerText = price + " kr";
    phoneDiv.appendChild(priceP);

    return phoneDivPriceP;
}

//Function for adding products to cart  
function addToCart(product) {
    if (!localStorage.getItem("phonesInCart")) { 
        localStorage.setItem("phonesInCart", JSON.stringify([product]));
    } else {
        const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
        phonesInCart.push(product);
        localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
    }
    addToCartCounter();
}

//Function for creating counter in the header 
function addToCartCounter () {
    const cartNumber = document.querySelector(".shopping-cart-number");
    var something = JSON.parse(localStorage.getItem("phonesInCart"));
    if (!localStorage.getItem("phonesInCart")||something.length <=0) {
        cartNumber.innerText = "";
    } else {
        
        var length = something.length;

        cartNumber.innerText = length;
    }
}



