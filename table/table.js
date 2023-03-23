const table = document.getElementsByTagName("table")[0];

const addR = document.getElementsByTagName("button")[0];
const removeR = document.getElementsByTagName("button")[1];
const addCss = document.getElementsByTagName("button")[2];
const removeCss = document.getElementsByTagName("button")[3];

addR.addEventListener("click", function () {
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  var text = document.createTextNode("Added element to table");
  td.appendChild(text);
  tr.appendChild(td);
  table.appendChild(tr);
});

removeR.addEventListener("click", function () {
  const tr = document.getElementsByTagName("tr")[0];
  tr.remove();
});

addCss.addEventListener("click", function () {
  table.classList.add("some-style");
});

removeCss.addEventListener("click", function () {
  table.classList.remove("some-style");
});
