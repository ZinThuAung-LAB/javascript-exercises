const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.textContent = "Hey I'm blue h3";

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm a div";

const anotherPara = document.createElement("p");
anotherPara.textContent = "ME TOO!";

div.append(h1, anotherPara);

container.append(para, h3, div);
