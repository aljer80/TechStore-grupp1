var main = document.querySelector("main");

//CREATING THE PAGE "RETURN TO INDEX PAGE"
//creating a Div container
const returnToStartDiv = document.createElement("div");
returnToStartDiv.classList.add("returnToStartDiv");
//creating the button that leads back to the index page
const returnToStartBtn = document.createElement("button");
returnToStartBtn.classList.add("returnToStartBtn");
const returnToStartA = document.createElement("a");
returnToStartA.innerHTML = "Tillbaks till start";
returnToStartBtn.appendChild(returnToStartA);
returnToStartDiv.appendChild(returnToStartBtn); 

main.appendChild(returnToStartDiv);
// function that leads you back to the index page
returnToStartA.addEventListener("click", () => {
        location.href = "index.html";
    });
   
