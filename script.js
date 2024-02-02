function clicked() {
    const textElem = document.querySelector('#taskEntered');
    const newElem = document.createElement("div"); // creating div for task section
    newElem.classList.add("todoTasks"); // adding class to the div

    const inputTask = document.createElement('input');
    inputTask.type = "text";
    inputTask.setAttribute('value', textElem.value);
    inputTask.setAttribute('readonly', 'true');
    newElem.appendChild(inputTask);

    let taskSection = document.querySelector('.tasks');
    taskSection.appendChild(newElem); //appending newElem to taskSection

    //=============== Edit/Delete/Complete Button Section ==============

    //Completed Task Button
    const completeButton = document.createElement('button');
    completeButton.classList.add("complete");
    completeButton.innerHTML = "Done";

    // Edit Button
    const buttonDiv = document.createElement('div'); //creating div for button
    buttonDiv.classList.add("taskSectionButtons");
    const editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.innerHTML = "Edit";

    // Delete Button
    const delButton = document.createElement('button');
    delButton.classList.add("delete");
    delButton.innerHTML = "Delete";
    buttonDiv.appendChild(completeButton) //Appending Delete button
    buttonDiv.appendChild(editButton) // Appending Edit button
    buttonDiv.appendChild(delButton);// Appending Delete button
    newElem.appendChild(buttonDiv) // Appending Button Div to task scetion
    textElem.value = ""; //resetting input text value after every added task

    // ================== Functioning of edit button ===================

    //Edit button
    editButton.addEventListener('click', () => {
        inputTask.style.borderRadius = "20px";
        if (editButton.innerHTML != "Save") {
            inputTask.style.backgroundColor = "#141414";
            inputTask.removeAttribute('readonly');
            editButton.innerHTML = "Save";
            editButton.style.color = "rgb(203, 199, 197)";
            completeButton.disabled = true;
            delButton.disabled = true;
        }
        else {
            inputTask.setAttribute('readonly', 'true');
            editButton.innerHTML = "Edit";
            editButton.style.backgroundColor = "rgb(41, 52, 179)";
            editButton.style.color = "rgb(203, 199, 197)";
            completeButton.disabled = false;
            delButton.disabled = false;
            inputTask.style.backgroundColor = "transparent";
        }
    })

    //Delete button
    delButton.addEventListener('click', () => {
        newElem.remove();
    })

    //Completed task button
    completeButton.addEventListener('click', () => {
        editButton.disabled = true;
        completeButton.style.backgroundColor = "rgb(26, 75, 26)"
        inputTask.style.textDecoration = "line-through"

    })
}




