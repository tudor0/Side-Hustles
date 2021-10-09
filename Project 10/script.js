const jokeBtn = document.querySelector("#jokeBtn");
const joke = document.querySelector("#joke");

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}

jokeBtn.addEventListener("click", () => generateJoke());
