// Selecionar Elementos
document.getElementById("elementId");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");
document.querySelector("selector");
document.querySelectorAll("seletor");

// Manipular elementos e conteúdo
document.createElement("tagName");
element.innerHTML = "Novo conteúdo";
element.innerHTML += "Antigo conteúdo + Novo conteúdo";
parentElement.appendChild(childElement);
parentElement.removeChild(childElement);
element.textContext = "Novo texto";
element.remove();

// Adicionar estilos e manipular atributos
element.style.property = "value";
element.getAttibute("attibuteName");
element.setAttribute("attributeName", "value");
element.removeAttribute(attributeName);

// Manupular classe
element.classList.contains("className");
element.classList.add("className");
element.classList.remove("className");
element.classList.toggle("className");

// Eventos handling
element.addEventListener("event", nameFn);
element.removeEventListener("event", nameFn);
