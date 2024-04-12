const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); //Create a new list item element
        li.innerHTML=inputBox.value; // Set the content of the list item to the value of the input box
        listContainer.appendChild(li); // Append the newly created list item to the list container
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""; //clearing the input box after adding a task and then saving the data
    saveData();
}
inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { //Call the addTask function when the "Enter" key is pressed
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
    showTasks(); //Call the showTasks function to display tasks when the page loads

    
