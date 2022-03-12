
console.log("Miséricordieu");


var elementNode = (name)=>{
    if(name && typeof (name) === "string"){
        return document.createElement (name) 
    }
    return null 
}
var ul = document.createElement ("ul");

for (let index = 1; index < 9; index++) {
    var li = document.createElement ("li");
    
}

/**********************TEXT**************************/ 
var textNode = (name)=>{
    if(name && typeof (name) === "string"){
        return document.createTextNode (name) 
    }
    return null 
}
var ul = elementNode ("ul");

for (let index = 1; index < 20; index++) {
    let li = elementNode ("li");
    li.style.fontSize = "35px"
    li.style.backgroundColor = "green"
    li.style.borderRadius = "5px"
    li.style.color = "white"
    let content = textNode ("Elément Javascript n°"+index)
    li.appendChild(content)
    ul.appendChild(li)
    
}
document.getElementById("app").appendChild(ul)
console.log(ul);
