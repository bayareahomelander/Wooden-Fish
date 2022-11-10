let button = document.getElementById("button");

button.addEventListener("click", function () {
  let text = document.getElementById("text");
  text.classList.remove("hide");
  setTimeout(function () {
    text.classList.add("fade-in");
    setTimeout(function () {
      text.classList.remove("fade-in");
      setTimeout(function () {
        text.classList.add("hide");
      }, 40);
    }, 50);
  });
});

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};