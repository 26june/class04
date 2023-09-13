let name = prompt("What is your name");

function conditionalPasta() {
  let pasta = prompt("Do you like pasta");

  if (pasta === "no") {
    document.getElementById("yes-content").remove();
  }
}
