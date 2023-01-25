// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



// Get the circle button element
var circleButton = document.getElementById("circle-button");

// Add event listener for click on the circle button
circleButton.addEventListener("click", function() {
  // Create a new circle element and set its position
  var circle = document.createElement("div");
  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderRadius = "50%";
  circle.style.position = "absolute";
  circle.style.left = Math.random() * 550 + "px";
  circle.style.top = Math.random() * 350 + "px";
  circle.style.backgroundColor = getRandomColor();
  // Append the circle element to the board
  board.appendChild(circle);
});




// Get the rectangle button element
var rectangleButton = document.getElementById("rectangle-button");

// Add event listener for click on the rectangle button
rectangleButton.addEventListener("click", function() {
  // Create a new rectangle element and set its position
  var rectangle = document.createElement("div");
  rectangle.style.width = "100px";
  rectangle.style.height = "50px";
  rectangle.style.backgroundColor = getRandomColor();
  rectangle.style.position = "absolute";
  rectangle.style.left = Math.random() * 500 + "px";
  rectangle.style.top = Math.random() * 300 + "px";

  // Append the rectangle element to the board
  board.appendChild(rectangle);
});




// Get the line button element
var lineButton = document.getElementById("line-button");

// Add event listener for click on the line button
lineButton.addEventListener("click", function() {
  // Create a new line element and set its position
  var line = document.createElement("div");
  line.style.width = Math.random() * 200 + "px";
  line.style.height = "2px";
  line.style.backgroundColor = getRandomColor();
  line.style.position = "absolute";
  line.style.left = Math.random() * 400 + "px";
  line.style.top = Math.random() * 200 + "px";

  // Append the line element to the board
  board.appendChild(line);
});