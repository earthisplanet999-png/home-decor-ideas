// ==========================
// HOME DECOR WEBSITE SCRIPT
// ==========================


// Check that JavaScript is connected

console.log("My Product Picks website loaded successfully.");




// Smooth scrolling for page links

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});




// Automatically update copyright year

const yearElement = document.querySelector("#year");


if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}