function addName() {
  let name = prompt("What is your name");
  document.write(name);
}

function addNoContent() {
  document.write("<h1>I haven no food recommendations for you!</h1>");
}

function conditionalPasta(
  pasta = prompt('Do you like pasta? Type "yes" or "no"')
) {
  if (pasta === "no") {
    document.getElementById("yes-content").remove();

    addNoContent();
  } else if (pasta === "yes") {
  } else {
    pasta = prompt(`Please type "yes" or "no"`);
    conditionalPasta(pasta);
  }
}

function addMorePasta() {
  let numPasta = prompt(
    "How many bowls of pasta do you want? Please enter a Number"
  );
  if (!isNaN(Number(numPasta))) {
    let pastaImage = document.getElementById("pasta").outerHTML;

    for (let i = 0; i < Number(numPasta) - 1; i++) {
      document.write(pastaImage);
    }
  } else {
    addMorePasta();
  }
}
