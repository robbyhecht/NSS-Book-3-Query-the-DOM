
const headerEl = document.querySelector('.article__header');
headerEl.textContent = "Welcome to the Robby blog";

let artHeader = document.querySelectorAll('.article__header');
for (let i=0; i<artHeader.length; i++) {
  artHeader[i].classList.add("important");
}

let dashedEl = document.querySelector('.dashed');
dashedEl.classList.remove("dashed");

let footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");






// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.