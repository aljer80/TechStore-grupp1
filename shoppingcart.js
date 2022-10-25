var listOfProducts;
var main = document.querySelector("main");
const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 

 var arrayData = listOfProducts.value();

 /** Get products from the json file and store it in a global variable */
 function loadProducts() {
     fetch("phonesInCart") //lägga in en fetch på objekten i kundkorgen
    .then(function(response) {
         return response.json();
     })
     .then(function(products) {
         listOfProducts = products; //ändra namnen här? Ska den här vara kvar?
         addProductsToWebpage();
     });
 }


 

function initSite() {
    loadProducts();
    addToCartCounter();
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {

    //Loop that calls the functions created below
    for (const product of products) { 
        const phoneDiv = document.createElement("div"); //function for creating the div-element in main
        //Function to render the products on the page 
        phoneDiv.classList.add("phone-div");
        phoneDivHeading(product.title, phoneDiv);
        phoneDivTextP(product.description, phoneDiv);
        phoneDivImage(product.image, phoneDiv);
        phoneDivPriceP(product.price, phoneDiv);
        checkoutBtn(product, phoneDiv);
        main.appendChild(phoneDiv);
    }
    
}


//Functions for creating the phoneDiv and all the elements in the phoneDiv on line ... to line ...

//Function for creating the container phoneDiv
function phoneDivHeading (title, phoneDiv) {
    const heading = document.createElement("h2");
    heading.innerText = title;
    phoneDiv.appendChild(heading);

    return phoneDivHeading;
}

//Function for creating the text description of the phone
function phoneDivTextP (description, phoneDiv) {
    const textP = document.createElement("p");
    textP.innerText = description;
    phoneDiv.appendChild(textP);

    return phoneDivTextP;
}

//Function for creating the phone image
function phoneDivImage (image, phoneDiv) {
    const phoneImage = document.createElement("img")
    phoneImage.setAttribute("src", "/assets/" + image);
    phoneDiv.appendChild(phoneImage);

    return phoneDivImage;
}

//Function for creating the price
function phoneDivPriceP (price, phoneDiv) {
    const priceP = document.createElement("p");
    priceP.innerText = price + " kr";
    phoneDiv.appendChild(priceP);

    return phoneDivPriceP;
}

//Function for creating the checkout button
function checkoutBtn (phoneDiv) {
    const addCheckoutBtn =document.createElement("button");
    addCheckoutBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";
    addCheckoutBtn.classList.add("addCheckoutBtn");
    phoneDiv.appendChild(addCheckoutBtn);
    //console.log(checkoutBtn);
    
    return checkoutBtn;
}

checkoutBtn.addEventListener ("click", checkOut);

function checkOut() {
    //function alertBox() {
        alert("Ditt köp är genomfört");
      

}


// function addToCart(product) {
//     if (!localStorage.getItem("phonesInCart")) { //Nyckel=phoneInCart
//         localStorage.setItem("phonesInCart", JSON.stringify([product]));
//     } else {
//         const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
//         phonesInCart.push(product);
//         localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
//     }
//     //console.log(product);
//     //if om inget finns i kundvagnen, lägg till i kundkorgen. 
//     //Else lägg till produkten och skicka in igen

// }




