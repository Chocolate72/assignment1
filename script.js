// Story parts arrays
const part1 = ["The funny dog", "A silly robot", "The tiny dinosaur"];
const part2 = ["jumped over", "ran into", "slid under"];
const part3 = ["the big fence", "a banana peel", "the red wagon"];
const part4 = ["because it saw", "while chasing", "after hearing"];
const part5 = ["a flying cat", "a loud chicken", "a dancing frog"];

// Current indices for each part
let indices = [0, 0, 0, 0, 0];

// references to buttons
const buttons = [
  document.getElementById("part1"),
  document.getElementById("part2"),
  document.getElementById("part3"),
  document.getElementById("part4"),
  document.getElementById("part5")
];


buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    indexes[i] = (indexes[i] + 1) % arrays[i].length;
    button.textContent = arrays[i][indexes[i]];
  });
});


//To generate the complete story
document.getElementById("tellStory").addEventListener("click", () => {
  const story = buttons.map(button => button.textContent).join(" ");
  output.textContent = story + ".";
});

//To generate a random story
document.getElementById("randomStory").addEventListener("click", () => {
  const story = arrays
    .map(arr => arr[Math.floor(Math.random() * arr.length)])
    .join(" ");
  output.textContent = story + ".";
});

// to reset story selection 
document.getElementById("reset").addEventListener("click", () => {
  indexes = [0, 0, 0, 0, 0];

  buttons[0].textContent = part1[0];
  buttons[1].textContent = part2[0];
  buttons[2].textContent = part3[0];
  buttons[3].textContent = part4[0];
  buttons[4].textContent = part5[0];

  output.textContent = "";
});