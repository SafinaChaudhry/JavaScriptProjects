const inputEL= document.getElementById("input-el");
const btnEL = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const delBtn = document.getElementById("del-btn")
let ulEL = document.getElementById("ul-el");
let myLeads = [];

let storageItems = JSON.parse(localStorage.getItem("myLeads"));
if(storageItems)
myLeads = storageItems;


const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

saveBtn.addEventListener("click",function(){
    //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        
      //});

    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads);
    })  
    
})

delBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    ulEL.innerHTML ="";
})

btnEL.addEventListener("click", function(){
    myLeads.push(inputEL.value);
    inputEL.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEL.innerHTML = listItems  
}

