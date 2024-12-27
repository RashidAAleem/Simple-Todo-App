let inputValue = document.getElementById("inputValue");
let todoBtn = document.querySelector(".todoBtn");
let todoMain = document.querySelector(".addTodo");
//   let delTodo = document.querySelector('.todoElement');
const addTodoSection = () => {
  
  //   console.log(todoMain);
  let todoDiv = document.querySelector('.todoList');
  if(inputValue.value.trim() !== ""){
      if(!todoDiv){
          
      todoDiv = document.createElement("div");
      todoDiv.classList.add("todoList");
      todoMain.parentElement.append(todoDiv);
  }
  todoDiv.innerHTML += `<div class="todoElement">
      <li>${inputValue.value}</li>
      <button class="delBtn">Delete</button>
      </div>`;
      inputValue.value = ""
  
  } else{

      alert('Please Enter a Task')
  }
};

todoBtn.addEventListener("click", (e) => {
  addTodoSection();
});

document.body.addEventListener('click', (e)=>{
  if(e.target && e.target.classList.contains('delBtn')){
      const todoElement = e.target.closest('.todoElement');
      const todoList = e.target.closest('.todoList');
      if(todoElement){
          todoElement.remove();
          if(todoList && todoList.querySelectorAll('.todoElement').length === 0){
              todoList.remove();
          }
      }
  }
})
 

