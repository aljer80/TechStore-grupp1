var main = document.querySelector("main");


const returnToStartDiv = document.createElement("div")
returnToStartDiv.classList.add("returnToStartDiv");
const returnToStartBtn = document.createElement("button");
returnToStartBtn.classList.add("returnToStartBtn");
const returnToStartA = document.createElement("a");
returnToStartA.innerHTML = "Tillbaks till start"
returnToStartBtn.appendChild(returnToStartA)
returnToStartDiv.appendChild(returnToStartBtn); 




main.appendChild(returnToStartDiv);




returnToStartA.addEventListener("click", () => {
        location.href = "index.html";
        localStorage.clear();
    });
   

