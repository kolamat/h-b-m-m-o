const body = document.querySelector("body");
body.style.margin = "0px";
body.style.padding = "0px";

const div = document.createElement("div");
div.id = "container";
div.style.width = "full";
div.style.display = "grid";
div.style.justifyItems = "center";
div.style.gap = "10px";
div.style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
div.style.padding = "20px";
div.style.background = "#a15f5f";
document.querySelector("body").appendChild(div);

const heading = document.createElement("h2");
heading.textContent = "Happy Birthday Micheal";
heading.style.gridColumn = "span 4";
document.getElementById("container").appendChild(heading);

const image1 = document.createElement("img");
image1.src = "Bcake.jpg";
image1.style.borderRadius = "10px 10px 0px 0px";
image1.style.gridColumn = "span 4";
image1.style.width = "100%";
document.getElementById("container").appendChild(image1);

const image2 = document.createElement("img");
image2.src = "Bcake2.jpeg";
image2.style.width = "100%";
image2.style.width = "100%";
image2.style.gridColumn = "span 2";
image2.style.borderRadius = "10px 10px";
document.getElementById("container").appendChild(image2);

const image3 = document.createElement("img");
image3.src = "Bcake3.webp";
image3.style.width = "100%";
image3.style.height = "100%";
image3.style.borderRadius = "10px 10px";
image3.style.gridColumn = "span 2";
document.getElementById("container").appendChild(image3);

const image4 = document.createElement("img");
image4.src = "Bcake4.jpg";
image4.style.width = "100%";
image4.style.gridColumn = "span 4";
image4.style.borderRadius = "0px 0px 10px 10px";
document.getElementById("container").appendChild(image4);

const paraDiv = document.createElement("p");
paraDiv.id = "para";
paraDiv.style.fontWeight = "bold";
paraDiv.style.fontSize = "15px";
paraDiv.style.background = "#000ffe";
document.getElementById("container").appendChild(paraDiv);

const buttonContainer = document.createElement("div");
buttonContainer.id = "butcon";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
buttonContainer.style.gridColumn = "span 4";
document.getElementById("container").appendChild(buttonContainer);

const buttton = document.createElement("button");
buttton.textContent = "Click Me for More";
buttton.style.padding = "10px 8px";
buttton.id = "buttons";
buttton.onclick = greetingText;
buttton.style.gridColumn = "span 4";
buttton.style.borderRadius = "20px";
buttton.style.margin = "20px 0px 10px 0px";
buttton.style.borderColor = "white";
buttton.style.background = "black";
buttton.style.color = "white";
document.getElementById("butcon").appendChild(buttton);

const closeButtton = document.createElement("button");
closeButtton.textContent = "Click To Close";
closeButtton.style.padding = "10px 8px";
closeButtton.id = "buttons";
closeButtton.onclick = closeGreetings;
closeButtton.style.gridColumn = "span 4";
closeButtton.style.borderRadius = "20px";
closeButtton.style.margin = "20px 0px 10px 0px";
closeButtton.style.borderColor = "white";
closeButtton.style.background = "black";
closeButtton.style.color = "white";
document.getElementById("butcon").appendChild(closeButtton);

function greetingText() {
  let paraGraph = document.getElementById("para");
  paraGraph.textContent =
    "How are you doing Micheal hope you Good Sorry it came late";
  paraGraph.id = "para";
  paraGraph.style.gridColumn = "span 5";
  document.getElementById("container").appendChild(paraGraph);
}

function closeGreetings() {
  const inputField = document.getElementById("para");
  inputField.textContent = "";
  //   let anotherImage = document.createElement("img");
  //   anotherImage.src = "rose.svg";
  //   document.getElementById("para").appendChild(anotherImage);
}
