var main = document.querySelector("main");

var titleDiv = document.createElement("div");
titleDiv.classList.add("title-div");
const titleDivH2 = document.createElement("h2");
titleDivH2.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>' + " Kundvagn";

var phoneDivContainer = document.createElement("div");
phoneDivContainer.classList.add("phone-div-container");
var totalCostDiv = document.createElement("div");
totalCostDiv.classList.add("total-cost-div");


totalCostP();

titleDiv.appendChild(titleDivH2);
main.appendChild(titleDiv);
main.appendChild(phoneDivContainer);
main.appendChild(totalCostDiv);
main.appendChild(checkoutBtnDiv());

addProductsToShoppingCartPage();

//Uses the array phonesInCart to create a visible product list on the website 
function addProductsToShoppingCartPage() {
    let phonesInCart = JSON.parse(localStorage.getItem("phonesInCart"));
    phoneDivContainer.innerHTML=""
    addToCartCounter();
    //function that renders the content in the shopping cart
            if (!localStorage.getItem("phonesInCart") || phonesInCart.length <=0 ) {
            const emptyCartP = document.createElement("p");
            emptyCartP.classList.add("empty-message")
            phoneDivContainer.appendChild(emptyCartP);
            emptyCartP.innerHTML = "Din kundkorg är tom";
            const cartNumber = document.querySelector(".shopping-cart-number"); 
            cartNumber.innerText = "";
        } else {
            for (const product of phonesInCart) {   //(const product of listOfProducts )
                const phoneDiv = document.createElement("div"); //function for creating the div-element in main
                //Function to render the products on the page 
                phoneDiv.classList.add("phone-div");
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


//Function for creating totalPriceP's div
function totalCostDiv (totalCostP) {
    var totalCostDiv = document.createElement("div");
    totalCostDiv.classList.add("total-cost-div");
    totalCostDiv.appendChild(totalCostP);

    return totalCostDiv;
}

//Function totalCost
function totalCostP () {
    const totalCostElement = document.querySelector(".total-cost");
    if (totalCostElement){
        totalCostElement.remove();
    } 

    const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 

    if (!localStorage.getItem("phonesInCart") || phonesInCart.length <=0 ) {

        const emptyMessage = document.querySelector(".empty-message");

        if (emptyMessage) {
            emptyMessage.remove();
        }


        const emptyCartP = document.createElement("p"); 
        emptyCartP.classList.add("empty-message")
         phoneDivContainer.appendChild(emptyCartP);

         emptyCartP.innerHTML = "Din kundkorg är tom";
         return;
    }
    
    
    
     for (const product of phonesInCart) {
         var sum = 0;
         phonesInCart.forEach(function(product) {
             sum += product.price;
         });
     }

    const totalCostP = document.createElement("p");
    totalCostP.classList.add("total-cost");
     totalCostP.innerText = "Total pris: " + sum + " kr";
     totalCostDiv.appendChild(totalCostP);
}

//Function for creating the button "remove from shopping cart" and for removing items from the shoppingcart
function removePhoneBtn (product, phoneDiv) {
    const removePhoneBtn =document.createElement("button");
    removePhoneBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>' + "Ta bort";
    removePhoneBtn.classList.add("removePhoneBtn");
    phoneDiv.appendChild(removePhoneBtn);
    removePhoneBtn.addEventListener("click", function () { removePhoneFromCart(product)});
    
    return removePhoneBtn;
}

//Function that removes phone/s/ from cart
function removePhoneFromCart(product) {
    const phonesInCart = JSON.parse(localStorage.getItem("phonesInCart")); 
    const index = phonesInCart.indexOf(product);
    phonesInCart.splice(index, 1); // https://www.w3schools.com/jsref/jsref_splice.asp
    localStorage.setItem("phonesInCart", JSON.stringify(phonesInCart));
    addProductsToShoppingCartPage(); //single source of truth
    totalCostP ();
}

function checkoutBtnDiv() {
    const checkoutBtnDiv = document.createElement("div");
    checkoutBtnDiv.classList.add("checkoutBtn-div");
    checkoutBtn(checkoutBtnDiv);

    return checkoutBtnDiv;
}

 function checkoutBtn (checkoutBtnDiv){
    const checkoutBtn = document.createElement("button");
    checkoutBtn.innerHTML = '<i class= "fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";
    checkoutBtn.classList.add("checkoutBtn");
    checkoutBtnDiv.appendChild(checkoutBtn); 

    checkoutBtn.addEventListener("click", () => {
        location.href = "purchasecomplete.html";
    });
   
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


