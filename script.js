// STEP 1: Create an object called giftIdeas
// Each key (Mom, Friend, Child) holds an array of 3 gift suggestions
const giftIdeas = {
  mom: ["Spa gift card", "Flowers", "Meal delivery"],
  dad: ["Beer", "Sport event ticket", "Car accessories"],
  friend: ["Books", "Coffee", "Movie night"],
  partner: ["Kitchen knife", "Whisky", "Fishing accessories"],
  pet: ["Treats", "Scratcher", "Catnip"],
};

// STEP 2: Select the dropdown, button, and results <div> from the HTML
const dropdown = document.getElementById("person-select");
const button = document.getElementById("suggest-btn");
const resultsDiv = document.getElementById("gift-results");

// STEP 3: Add a click event to the button
// When clicked, a function will run
button.addEventListener("click", function () {
  // STEP 4: Inside the function:
  // - get the value from the dropdown using .value
  const selectedPerson = dropdown.value;

  // Clear previous results
  resultsDiv.innerHTML = "";

  // - use if/else:
  if (giftIdeas[selectedPerson]) {
    //   - if that value exists as a key in giftIdeas, loop through it with forEach
    giftIdeas[selectedPerson].forEach(function (gift) {
      //     - for each item, create a <p>, set textContent, and append it to the results div
      const p = document.createElement("p");
      p.textContent = gift;
      resultsDiv.appendChild(p);
    });
  } else {
    //   - else show “No gift ideas available.”
    const p = document.createElement("p");
    p.textContent = "No gift ideas available.";
    resultsDiv.appendChild(p);
  }
});
