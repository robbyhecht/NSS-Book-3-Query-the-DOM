
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const headerEl = document.querySelector('.article__header');
headerEl.textContent = "Welcome to the Robby blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let artHeader = document.querySelectorAll('.article__header');

// FOR LOOP
for (let i=0; i<artHeader.length; i++) {
  artHeader[i].classList.add("important");
}
// FOR EACH
// take the element thing and do the action to it in a forEach
artHeader.forEach( element => {
  element.classList.add("important");
});

// Obtain a reference the element with a class of dashed and remove it.

let dashedEl = document.querySelector('.dashed');
dashedEl.classList.remove("dashed");

// // Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

let footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");



