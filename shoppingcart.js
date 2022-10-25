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
        removePhoneBtn(product, phoneDiv);
        main.appendChild(phoneDiv);
    }
    
}

addProductsToShoppingCartPage(phonesInCart);

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

//Function for creating the button "remove from shopping cart" and for removing items from the shoppingcart
function removePhoneBtn (product, phoneDiv) {
    const removePhoneBtn =document.createElement("button");
    removePhoneBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>' + "Ta bort";
    removePhoneBtn.classList.add("removePhoneBtn");
    phoneDiv.appendChild(removePhoneBtn);
    removePhoneBtn.addEventListener("click", function () { removePhoneFromCart(product) });
    
    return removePhoneBtn;
}


// // Under bearbetning
// function removePhoneFromCart(event) {
//     const index = phonesInCart.indexOf(e.target);
//     phonesInCart.splice(index, 1); // https://www.w3schools.com/jsref/jsref_splice.asp


//     (localStorage.getItem("phonesInCart")) { 
//     const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
//     localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
//     }
//     //console.log(product);
//     //if om inget finns i kundvagnen, lägg till i kundkorgen. 
//     //Else lägg till produkten och skicka in igen

//     //localStorage.setItem("phoneInCart", JSON.stringify(shoppingCartItem)); //localStorage. Nyckel=phoneInCart
//     addToCartCounter();
// }

// //modell från Get things done
// function removeItem(e) {
//     const index = todos.indexOf(e.target.innerText); //vilket index ligger den här texten inom parantes på?
//         todos.splice(index, 1); //splicea på index som är vår startposition. 
//         myFunction(); //när vi har tagit bort elementet vill vi rendera ut det igen. 

// //addCheckoutBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";

// //när man trycker på slutför köp kommer man till en helt ny html-sida (bekräftelse, kan klicka på länk till startsidan)