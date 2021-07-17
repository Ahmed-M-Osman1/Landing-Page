/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// At first, I will define my section as:
const listOfSections = document.querySelectorAll('section');
// Also I will define my nav bar:
const navBarList = document.getElementById('navbar__list')
// I will add fragment to make the website load faster:
const loadFaster = document.createDocumentFragment();

/**
 * 
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav:

// first of all, I will make the sections in the nav bar and in the same step make the view scroll into the desierd section as:
let makeTheSectionsIntoNavBar = listOfSections.forEach((element) => {
    let textOfLinks = element.getAttribute('data-nav');
    let TheListOfLinks = document.createElement('li');
    TheListOfLinks.textContent = textOfLinks;
    // add some styling as:
    TheListOfLinks.style.fontSize = '1.25em';
    TheListOfLinks.style.padding = '.5em'
    // lets put list we create in the loadFaster fragmant as:
    loadFaster.appendChild(TheListOfLinks);
    // Scroll to anchor ID using scrollTO event:
    // also lets make the click scrolldown to the disered section with smooth behevier as:
    TheListOfLinks.addEventListener("click", function() {
    element.scrollIntoView({behavior: "smooth"});
});
});

// put the loadFaster to the navbar_list with is the UL in HTML as:
navBarList.appendChild(loadFaster);  

// Add class 'active' to section when near top of viewport
// to make the section where we stand is the active section we will use getBoundingClientRect.top inside if statment as: 

let whereWeStand = window.addEventListener("scroll", function(element) {
    listOfSections.forEach((element) => {
    let theSectionTop= element.getBoundingClientRect().top;
    if(theSectionTop < 500 && theSectionTop>-200) {
        element.classList.add("your-active-class");
    } else {
        element.classList.remove("your-active-class");
    }; 
});
});

/**
 * 
 * End Main Functions
 * 
*/
