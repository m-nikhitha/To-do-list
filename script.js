const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); //entered text will go into list
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);  //displaying the text into list container
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; //clearing the input box
    saveData();
}
inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
        addTask(); 
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){  //marking the tasks done
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==='SPAN'){ //removing the tasks from list
        e.target.parentElement.remove();
        saveData();
     }
        
    },false);


    function saveData(){ //saving the data
        localStorage.setItem("data",listContainer.innerHTML);

    }
    function showTasks(){ //showing all the tasks
        listContainer.innerHTML=localStorage.getItem("data");
    }
    showTasks();

    
