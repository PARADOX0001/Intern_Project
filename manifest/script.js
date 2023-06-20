fetch("https://shorte.up.railway.app/")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("Element");

    jokeElement.innerHTML = jokeText;
  });
