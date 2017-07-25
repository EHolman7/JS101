console.log("linked");

var element = document.getElementById("sonnet").innerHTML;

console.log(element.indexOf("orphans"));

console.log(element.length);

element = element.replace(/winter/g, "yuletide");

element = element.replace(/the/g, "a large");

document.getElementById("sonnet").innerHTML = element;





