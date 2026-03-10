document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("chef");
  const container = document.getElementById("chefContainer");

  let x = 100;
  let y = 100;
  const speed = 40;

  document.addEventListener("keydown", (event) => {

    const containerWidth = container.clientWidth;
    const playerWidth = player.clientWidth;//figure out with chat gbt

    switch (event.key.toLowerCase()) {
      /*case "w":
        y -= speed;
        break;
      case "s":
        y += speed;
        break;*/
      case "a":
        x -= speed;
        break;
      case "d":
        x += speed;
        break;
    }

    player.style.left = x + "px";

     // LEFT boundary figure out with chat gbt
    if (x < 0) {
      x = 0;
    }

    // RIGHT boundary figure out with chat gbt
    if (x > containerWidth - playerWidth) {
      x = containerWidth - playerWidth;
    }


    if (x >= containerWidth){
      x = containerWidth
    }
  });


  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789!@#$%^&*()";
  const dropContainer = document.getElementById('drop')
  function createLetter() {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent = characters[Math.floor(Math.random() * characters.length)];
    letter.style.left = Math.random() * 350 + "vw";
    letter.style.animationDuration = (Math.random() * 7 + 4) + "s";

    // figure out with chat gbt
    dropContainer.appendChild(letter);
    //  CHECK COLLISION WHILE FALLING
    const checkCollision = setInterval(() => {
      const playerBounds = player.getBoundingClientRect();
      const letterBounds = letter.getBoundingClientRect();

      if (
        playerBounds.bottom >= letterBounds.top &&
        playerBounds.right >= letterBounds.left &&
        playerBounds.left <= letterBounds.right &&
        playerBounds.top <= letterBounds.bottom
      ) {
        
        // GET THE LETTER VALUE
        const capturedChar = letter.textContent;
        console.log('bingo',capturedChar)

        // ADD IT TO COLLECTED AREA
        const collectedLetters = document.getElementById("collectedLetters");
        const newSpan = document.createElement("span");
        newSpan.textContent = capturedChar;
        collectedLetters.appendChild(newSpan);

        // REMOVE LETTER FROM SCREEN
        letter.remove();

        clearInterval(checkCollision);
      }
    }, 50);
    setTimeout(() => {
      letter.remove();
      clearInterval(checkCollision);
    }, 5000);
  }

  setInterval(createLetter, 200);

  /*function collision(drop,collisionMarker){
    if (
      drop

    )
  }

    function isCollide(drop, collisionMarker) {
    return !(
        ((drop.y + drop.height) < (collisionMarker.y)) ||
        (drop.y > (collisionMarker.y + collisionMarker.height)) ||
        ((drop.x + drop.width) < collisionMarker.x) ||
        (drop.x > (collisionMarker.x + collisionMarker.width))
    );
}
*/




/*document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "enter")
  if (event.target.classList.contains("F"))  {
    document.body.style.backgroundColor = "#755139";
    document.body.innerHTML = "";
  }chat helped 
  
  
  
  window.addEventListener("mousemove",(e)=>{
  let objectbound = object.getBoundingClientRect
  
})


function goToNext() {
  document.body.style.backgroundColor = "#755139";
  document.body.innerHTML = "";
}

// ENTER KEY
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    goToNext();
  }
});

// CLICK ON CLASS F
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("F")) {
    goToNext();
  }
});
  
  
  */

  
});







    /*player.style.top = y + "px";
    
    tut for letter is 
    https://www.youtube.com/watch?v=Wc680_Bwjaw 
    https://codepen.io/axtn/pen/apJyVV
    
const container = document.getElementById("drop");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function createLetter() {
  const letter = document.createElement("div");
  letter.classList.add("letter");
  letter.textContent = characters[Math.floor(Math.random() * characters.length)];
  letter.style.left = Math.random() * 100 + "vw";
  letter.style.animationDuration = (Math.random() * 3 + 2) + "s";

  container.appendChild(letter);

  setTimeout(() => {
    letter.remove();
  }, 5000);
}

setInterval(createLetter, 200);



*/
