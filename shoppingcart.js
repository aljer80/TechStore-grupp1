
var main = document.querySelector("main");

let phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 


/** Uses the array phonesInCart to create a visible product list on the website */
function addProductsToShoppingCartPage(phonesInCart) {

    //Loop that calls the functions created below
    for (const product of phonesInCart) {   //(const product of listOfProducts )
        const phoneDiv = document.createElement("div"); //function for creating the div-element in main
        //Function to render the products on the page 
        phoneDiv.classList.add("phone-div");
          phoneDivImage(product.image, phoneDiv); 
          phoneDivHeading(product.title, phoneDiv);
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
function checkoutBtn (product, phoneDiv) {
    const addCheckoutBtn =document.createElement("button");
    addCheckoutBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";
    addCheckoutBtn.classList.add("addCheckoutBtn");
    phoneDiv.appendChild(addCheckoutBtn);
    //console.log(checkoutBtn);
    
    return checkoutBtn;
}

addProductsToShoppingCartPage(phonesInCart);



//när man trycker på slutför köp kommer man till en helt ny html-sida (bekräftelse, kan klicka på länk till startsidan)

