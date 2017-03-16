//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so user can among tasks.
//First, I'll add an event handler to the add button to add new tasks.
var addButton = document.getElementByClassName(add);
addButton.onclick = addTask();
var addTask = function(){
  
  //display new task in to do list section. 
    var createNewTaskElement = (newTaskString){
//create list Item
var listItem = document.createElement("li");

//input (checkbox)
var checkbox = document.createElement("input");//checkbox

//label
var label = document.creaeElemt("label");

//input (text)
var editInput = document.createElemnt("input"); // text
//button.edit
var editButton = document.createElement("button");
//button.delete
var deleteButton = document.createElement("button")

//Each element needs modifying




}
}
//Secondly, the new added task has to be shown on the to-do list part.
//Be able to edit and delete tasks. add event handlers for both buttons.
//Add completed tasks to the completed task list.

