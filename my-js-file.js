const saveChanges = () =>{
    const taskData = {
        id:`${Data.now()}`,
        imageUrl: document.getElementById("imageurl"),
        taskTitle: document.getElementById("tasktitle"),
        taskType: document.getElementById("tasktype"),
        taskDescription: document.getElementById("taskdescription")
    }
    console.log(taskData)
}
console.log("abcd")


