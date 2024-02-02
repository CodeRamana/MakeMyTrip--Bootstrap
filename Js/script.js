/*Header icon Js */
document.querySelectorAll('.iconText').forEach(function(icon) {
  icon.addEventListener('click', function() {
    if('click'){icon.classList.add("active");}
    else{
      icon.style.color = 'black'
    }
    
  });
});

function changeStyle(element) {

  const allLiElements = document.querySelectorAll(".list");
  allLiElements.forEach((li) => {
    li.classList.remove("active");
  });


  element.classList.add("active");
}


// Modal login js

function toggleForm() {
  let loginForm = document.getElementById("loginForm");
  let registerForm = document.getElementById("registerForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

function validateLogin() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
  } else {
    alert("Login successful!"); 
  }
}

function validateRegister() {
  let username = document.getElementById("registerUsername").value;
  let password = document.getElementById("registerPassword").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
  } else {
    alert("Registration successful!"); 
  }
}






//Sticky Nav
function handleScroll() {
  let navbar = document.querySelector(".stickyNav");
  let scrolled = window.scrollY > 50;

  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);



//Offer Slider Js
let currCard = 0;
const offerCards = document.querySelectorAll(".offerCard");
const totCards = offerCards.length;
const offerCardContainer = document.querySelector(".offerCardContent");
console.log(offerCardContainer);
const offerCardWidth= offerCards[0].clientWidth +20;

    function showOfferCard(index) {
      if (index < 0 || index >= totCards) {
        return;
      }
      currCard = index;
      const translateValue = -currCard * offerCardWidth+ 'px';
      offerCardContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevOfferCard() {
      showOfferCard(currCard - 1);
    }

    function nextOfferCard() {
      showOfferCard(currCard + 1);
    }



// TripIdea card Slider1 Js
let currentCard = 0;
const TripIdeaCards = document.querySelectorAll(".cardstyle");
const totalTripIdeaCards = TripIdeaCards.length;
const TripIdeaCardContainer = document.querySelector(".TripIdeaRow");
const TripIdeaCardWidth = TripIdeaCards[0].clientWidth +20;

    function showTripIdeaCard(index) {
      if (index < 0 || index >= totalTripIdeaCards) {
        return;
      }
      currentCard = index;
      const translateValue = -currentCard * TripIdeaCardWidth + 'px';
      TripIdeaCardContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    function prevTripIdeaCard() {
      showTripIdeaCard(currentCard - 1);
    }

    function nextTripIdeaCard() {
      showTripIdeaCard(currentCard + 1);
    }

// Destination Card Slider2 Js
let currentCard2 = 0;
const destinationCards = document.querySelectorAll(".destinationCard");
const totaldestinationCards = destinationCards.length;
const destinationCardContainer = document.querySelector(".destinationRow");
const destinationCardWidth = destinationCards[0].clientWidth +20;

    function showDestinationCard(index) {
      if (index < 0 || index >= totaldestinationCards) {
        return;
      }
      currentCard2 = index;
      const translateValue2 = -currentCard2 * destinationCardWidth + 'px';
      destinationCardContainer.style.transform = 'translateX(' + translateValue2 + ')';
    }

    function prevDestinationCard() {
      showDestinationCard(currentCard2 - 1);
    }

    function nextDestinationCard() {
      showDestinationCard(currentCard2 + 1);
    }

    /*Highlight Card Js */
    let currentIndex = 0;
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const cardWidth3 = document.querySelector('.Highlightcard').offsetWidth + 10; 
  
    function showSlide() {
      const newPosition = -currentIndex * cardWidth3;
      cardsWrapper.style.transform = `translateX(${newPosition}px)`;
    }
  
    function prevSlide() {
      currentIndex = Math.max(currentIndex - 1, 0);
      showSlide();
    }
  
    function nextSlide() {
      currentIndex = Math.min(currentIndex + 1, 5); 
    }