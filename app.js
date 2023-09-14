let name = prompt("What is your name");

function addNoContent() {
  document.write("<h1>I haven no food recommendations for you!</h1>");
}

function conditionalPasta() {
  let pasta = prompt('Do you like pasta? Type "yes" or "no"');

  if (pasta === "no") {
    document.getElementById("yes-content").remove();

    addNoContent();
  } else if (pasta === "yes") {
  } else conditionalPasta();
}
