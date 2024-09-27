const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke = () => {
//     jokeContainer.classList.remove("fade");
//     fetch(url)
//     .then(data => data.json())
//     .then(item =>{
//         jokeContainer.textContent = '${item.joke}';
//         jokeContainer.classList.add("fade");

//     });
// }

// btn.addEventListener("click",getJoke);
// getJoke();

const getJoke = async () => { 
    jokeContainer.classList.remove("fade");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();   
  
      jokeContainer.textContent = data.joke;
      jokeContainer.classList.add("fade");
    } catch (error) {
      console.error('Error fetching joke:', error);
      jokeContainer.textContent = "Oops! There was an error fetching the joke.";
    }
  };
  
  btn.addEventListener("click", getJoke);
  getJoke(); 