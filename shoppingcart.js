

function checkoutBtn (phoneDiv) {
    const addCheckoutBtn =document.createElement("button");
    addCheckoutBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>' + "Slutför ditt köp";
    addCheckoutBtn.classList.add("addCheckoutBtn");
    phoneDiv.appendChild(addCheckoutBtn);
    console.log(checkoutBtn);
        
    return checkoutBtn;

}

checkoutBtn.addEventListener ("click", checkOut);

function checkOut() {
    //function alertBox() {
        alert("Ditt köp är genomfört");
      

}

//Från w3 schools, vad vi tittade på
// function myFunction() {
//     alert("Ditt köp är genomfört");
//   }    
