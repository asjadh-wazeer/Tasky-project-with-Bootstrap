const taskContainer = document.querySelector(".task__container")

//we will stored our requiring objects inside the array
let globalStore = []; //array of objects  //const can't be change

const generateNewCard = (taskData) =>  `
<div class="col-sm-12 col-md-6 col-lg-4" >
            <div class="card">
                <div class="card-header d-flex justify-content-end gap-2">
                    <button type="button" class="btn btn-outline-success"> <i class="fas fa-pencil-alt"></i> </button>
                    <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"> <i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i> </button>
                </div>
                <div class="card-body">
                    <img src= ${taskData.imageUrl} class="card-img-top" alt="...">
                  <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
                  <p class="card-text">${taskData.taskDescription}</p>
                  <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                </div>
              </div>
        </div>
         `;




const loadInitialCardData = () => {
    // localstorage to get tasky card data
    const getCardData = localStorage.getItem("tasky") //tasky is id, we are got the tasky card data

    //convert to normal object from array of object
    const {cards} = JSON.parse(getCardData);

    //loop over those array of task object to create HTML card, inject it to DOM
    cards.map((cardObject)=>{
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));


    //update our globalstore
    globalStore.push(cardObject);
    })

    
}

//Delete function
// 1.delete function: deleteCard

const deleteCard =(event)=> {
    event = window.event;

    //Fatching the id of the event
    const targetID = event.target.id;
    const tagname = event.target.tagname;

    //we have to global store
    //we should ue filter.bcz we have condition
    globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
    localStorage.setItem("tasky", JSON.stringify({cards: globalStore}))

    //if we are pressing the button
    if(tagname === "BUTTON") {
        //contact the parent & remove child
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
        //we are not returning the the remove child. we are just removing the child
    } else {//else is basically the fa-fa icon. so four lavel heigher
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    }
}

const saveChanges = () =>{
    const taskData = {
        id:`${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    }
    
    //const newCard =

    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
    
    globalStore.push(taskData);
    localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));

}
console.log("abcd")


