

document.querySelector(".title").innerHTML = "Make your work list";

// const text = "Hello, World!";
// let index = 0;
// // const container = document.getElementById('typing-container');

// function type() {
//     container.textContent = text.slice(0, index++);
//     if (index <= text.length) {
//         setTimeout(type, 100); // Adjust the typing speed (in milliseconds)
//     }
// }

// type();
StartApp()





async function StartApp() {
    await new Promise ((resolve, reject) => {
        let message = "Make your work list";
        let index = 0;
        const container = document.querySelector(".title");
       let intid = setInterval(() =>{
            container.textContent = message.slice(0, index++);
            if(index > message.length){
                clearInterval(intid);
                setTimeout(() => {
                    resolve();
                }, 1000);
            }
        },150)
})
.then(() => {
    console.log("Hello");
    setTimeout(() => {
        const date = new Date();
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        const dateString = date.toLocaleDateString(undefined, dateOptions);
        document.querySelector(".date").innerHTML = dateString;
    },1000);
    
    setInterval(() => {
        const date = new Date();
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const timeString = date.toLocaleTimeString(undefined, timeOptions);
        document.querySelector(".time").innerHTML = timeString;
    }
    , 1000);
})
    console.log("World");
}
const todoList=[
    {
        name:"car wash",
        date:"2023-11-23"
    },
    {
        name:"do homework",
        date:"2023-11-23"

    },
    {
        name:"clean room",
        date:"2023-11-23"

    }
];
const btn = document.querySelector(".submit-btn");
document.addEventListener("keydown",(event)=>{
    console.log(event.key);
    if(event.key === "Enter"){
        addTodo();
    }
})
btn.addEventListener("click",(event)=>{
    addTodo();
})


renderTodoList();


function renderTodoList(){
    let htmlTodoList = '';
    todoList.forEach((item, index)=>{
        let html = `
        <p>
            <span class = "list-name">${item.name}</span>
            <span class = "list-date">${item.date}</span>
            <button class = "delete-btn" onclick = "
                todoList.splice(${index}, 1);
                renderTodoList();
            ">Delete</button>
        </p>`;
        htmlTodoList += html;
    });
    document.querySelector('.todos-entered').innerHTML = htmlTodoList;
}

    // for(let i=0;i<todoList.length;i++){
    //     let html = `
    //     <p>
            
    //         <span class = "list-name">${todoList[i].name}</span>
    //         <button class = "delete-btn" onclick = "
    //             todoList.splice(${i}, 1);
    //             renderTodoList();
    //         ">Delete</button>
    //     </p>`;
    //     htmlTodoList += html;
    // }
    // document.querySelector('todos-entered').innerHTML = htmlTodoList;
// }

function addTodo(){
    let inputElement = document.querySelector(".enter-todo");
    let inputElementValue = inputElement.value;
    inputElement.value = '';

    let dateElement = document.querySelector('.enter-date')
    let dateElementValue = dateElement.value;
    dateElement.value = '';

    const newToDo = {
        name :inputElementValue,
        date :dateElementValue
    }

    todoList.push(newToDo);

    renderTodoList();
}



