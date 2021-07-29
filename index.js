/*

Reusable flipCardEvent Documentation
HTML
1. Added click event to each card div to call the flipcard function
2. Gave each card div a different id
3. Passed id of each card as an argument when calling the function

JAVASCRIPT
4. Stored the element by id in a constant called card
5. Retrieve classes for card using classList
6. toggle between (add or remove) flipCard. i.e class="card" or class='card flipCard'

*/

function flipCard(id) {
  let card = document.getElementById(id);

  card.classList.toggle('flipCard');
}
