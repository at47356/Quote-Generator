const getRandom = (array) => {
  let randomMultiple = Math.random();
  let randomNum = randomMultiple * array.length;
  console.log(randomNum);
  return randomNum;
};

let span = document.querySelector(".quote");

let div = document.querySelector(".person");

function getQuotes() {
  async function fetchFunc() {
    const promise = await fetch("https://type.fit/api/quotes");
    const response = await promise.json();

    console.log(response);

    ourNum = Math.floor(getRandom(response));
    console.log(ourNum);

    quoteObject = response[ourNum];

    span.innerHTML = quoteObject.text;
    div.innerHTML = quoteObject.author;
  }
  fetchFunc();
}
