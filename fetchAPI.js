// API: application programming interface 

let URL = "https://cat-fact.herokuapp.com/facts";
let fact = document.querySelector("#facts")
let btn = document.querySelector("#btn")
const getFacts = async ()=>{
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response);
    let data  = await response.json();
    fact.innerText = (data[3].text);
}

btn.addEventListener("dblclick", getFacts)