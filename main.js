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

    //Skapa en loop som kallar på index-items 0 till 3 från listOfProducts
    for (const product of listOfProducts) {
        //funktion för att skapa div-element i main
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("phone-div");
        phoneDivHeading(product.title, phoneDiv);
        phoneDivTextP(product.description, phoneDiv);
        phoneDivImage(product.image, phoneDiv);
        phoneDivPriceP(product.price, phoneDiv);
        phoneDivBtn(product, phoneDiv);
        //checkoutBtn(phoneDiv); //vi testade att funktionen funkar
        main.appendChild(phoneDiv);
    }
    

    // Check your console to see that the products are stored in the listOfProducts varible.
    //console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}


//Functions for creating elements in the phoneDiv
// funktion för att skapa phoneDivs innehåll. Frågor: hur puttar man inte värdena från JSON-filen i de olika skapade elementen? Skrivs det inom parantesen, och isf hur för att läsa in flera värden? Alla elementen ska apendas till phoneDiv och få värden från JSON inskrivna. 
function phoneDivHeading (title, phoneDiv) {
    const heading = document.createElement("h2");
    heading.innerText = title;
    phoneDiv.appendChild(heading);

    return phoneDivHeading;
}

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

function disabledBtn (button) {

button.disabled = true;

}
//Här har vi provat att funktionen skapa utcheckningsknapp funkar

// function checkoutBtn (phoneDiv) {
//     const addCheckoutBtn =document.createElement("button");
//     addCheckoutBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";
//     addCheckoutBtn.classList.add("addCheckoutBtn");
//     phoneDiv.appendChild(addCheckoutBtn);
//     //console.log(checkoutBtn);
    
//     return checkoutBtn;

// }


function phoneDivTextP (description, phoneDiv) {
    const textP = document.createElement("p");
    textP.innerText = description;
    phoneDiv.appendChild(textP);

    return phoneDivTextP;
}

function phoneDivImage (image, phoneDiv) {
    const phoneImage = document.createElement("img")
    phoneImage.setAttribute("src", "/assets/" + image);
    phoneDiv.appendChild(phoneImage);

    return phoneDivImage;
}

function phoneDivPriceP (price, phoneDiv) {
    const priceP = document.createElement("p");
    priceP.innerText = price + " kr";
    phoneDiv.appendChild(priceP);

    return phoneDivPriceP;
}
//fsdklfjaöls



function addToCart(product) {
    if (!localStorage.getItem("phonesInCart")) { //eventuellt plural? products
        localStorage.setItem("phonesInCart", JSON.stringify([product]));
    } else {
        const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
        phonesInCart.push(product);
        localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
    }
    //console.log(product);
    //if om inget finns i kundvagnen, lägg till i kundkorgen. 
    //Else lägg till produkten och skicka in igen

    //localStorage.setItem("phoneInCart", JSON.stringify(shoppingCartItem)); //localStorage. Nyckel=phoneInCart
    addToCartCounter();
}

function addToCartCounter () {
    const cartNumber = document.querySelector(".shopping-cart-number");

    if (!localStorage.getItem("phonesInCart")) {
        cartNumber.innerText = "";
    } else {
        var something = JSON.parse(localStorage.getItem("phonesInCart"));
        var length = something.length;

        cartNumber.innerText = length;
    }
}


// function disableaddToCartBtn () {
//     document.querySelector("addToCartBtn").disabled = true;
// }


