var main = document.querySelector("main");

var titleDiv = document.createElement("div");
titleDiv.classList.add("title-div");
var phoneDivContainer = document.createElement("div");
phoneDivContainer.classList.add("phone-div-container");
var totalCostDiv = document.createElement("div");
totalCostDiv.classList.add("total-cost-div");

main.appendChild(titleDiv);
main.appendChild(phoneDivContainer);
main.appendChild(totalCostDiv);

addProductsToShoppingCartPage();

//Uses the array phonesInCart to create a visible product list on the website 
function addProductsToShoppingCartPage() {
    let phonesInCart = JSON.parse(localStorage.getItem("phonesInCart"));
phoneDivContainer.innerHTML=""
    //function that renders the content in the shopping cart
            if (!localStorage.getItem("phonesInCart") || phonesInCart.length <=0 ) {
            const emptyCartP = document.createElement("p"); 
             phoneDivContainer.appendChild(emptyCartP);
             emptyCartP.innerHTML = "Din kundkorg är tom";
        } else {
            for (const product of phonesInCart) {   //(const product of listOfProducts )
                const phoneDiv = document.createElement("div"); //function for creating the div-element in main
                //Function to render the products on the page 
                phoneDiv.classList.add("phone-div");
                phoneDiv.id = product.title;
                phoneDivImage(product.image, phoneDiv); 
                phoneDivHeading(product.title, phoneDiv);
                phoneDivPriceP(product.price, phoneDiv);
                removePhoneBtn(product, phoneDiv);
                phoneDivContainer.appendChild(phoneDiv);
            }
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

//Function totalCost
function totalCostP (totalCostDiv) {
    const totalCostP = document.createElement("p");
    totalCostP.innerText = "Total pris: ";
    totalCostDiv.appendChild(totalCostP);

    return totalCostP;
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

function removePhoneFromCart(product) {
    const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
    const index = phonesInCart.indexOf(product);
    phonesInCart.splice(index, 1); // https://www.w3schools.com/jsref/jsref_splice.asp
    localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
    addProductsToShoppingCartPage(); //single source of truth
}
