//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so user can among tasks.
//First, I'll add an event handler to the add button to add new tasks.
var addButton = document.getElementByClassName(add);
addButton.onclick = addTask();
var addTask = function(){
  
  //display new task in to do list section. 
  
}

    var createNewTaskElement = (newTaskString){
//create list Item
var listItem = document.createElement("li");

//input (checkbox)
var checkbox = document.createElement("input");//checkbox

//label
var label = document.creaeElement("label");

//input (text)
var editInput = document.createElement("input"); // text
//button.edit
var editButton = document.createElement("button");
//button.delete
var deleteButton = document.createElement("button");

//Each element needs modifying
checkBox.type = "checkbox";
editInput.type = "text";

editButton.innerText = "Edit";
editButton.className = "edit";
deleteButton.innerText = "Delete";
deleteButton.className = "delete";

//Each element needs appending 
listItem.appendChild(checkbox);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);

return listItem;
}
  
 //add new Task
var addTask = function(){
  console.log("Add task...");
  //create a new list item with the text from new-task:
  var listItem = createNewTaskElement("Some New task");
  //append list Item to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);

} 

/Edit an existing task
var editTask = function() {
console.log("Edit Task...");
//when the edit button is pressed
//if the class of the parent is .editMode
//switch from .editMode

}
  
//Secondly, the new added task has to be shown on the to-do list part.
//Be able to edit and delete tasks. add event handlers for both buttons.
//Add completed tasks to the completed task list.

