const body = document.querySelector("body");
// body.style.background = "brown";
body.style.margin = "0px";
body.style.padding = "0px";

const heading = document.createElement("h1");
heading.textContent = "Happy Birthday Micheal";

const greetingText =
  "How are you doing Micheal hope you Good Sorry it cake late";

const div = document.createElement("div");
div.id = "container";
div.style.width = "full";
div.style.display = "grid";
div.style.justifyItems = "center";
div.style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
// div.textContent = "Happy birthday";
div.style.background = "#a15f5f";
document.querySelector("body").appendChild(div);

const image1 = document.createElement("img");
image1.src = "Bcake.jpg";
image1.style.borderRadius = "15px 20px";
image1.style.gridColumn = "span 4 / span 4";
image1.style.width = "100%";
document.getElementById("container").appendChild(image1);

const image2 = document.createElement("img");
image2.src = "Bcake2.jpeg";
image2.style.width = "100%";
image2.style.gridColumn = "span 2 / span 2";
image2.style.borderRadius = "15px 20px";
document.getElementById("container").appendChild(image2);

const image3 = document.createElement("img");
image3.src = "Bcake3.webp";
image3.style.width = "100%";
image3.style.borderRadius = "15px 20px";
image3.style.gridColumn = "span 2 / span 2";
document.getElementById("container").appendChild(image3);

const image4 = document.createElement("img");
image4.src = "Bcake4.jpg";
image4.style.width = "100%";
image4.style.gridColumn = "span 4 / span 4";
image4.style.borderRadius = "15px 20px";
document.getElementById("container").appendChild(image4);
