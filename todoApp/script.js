document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addBtn');
  const todoList = document.getElementById('todoList');

  // Local Storage에서 할 일 목록 불러오기
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  // 할 일 목록을 UI에 표시하는 함수
  function displayTodos() {
      todoList.innerHTML = ''; // 기존 목록을 초기화
      todos.forEach((todo, index) => {
          const li = document.createElement('li');
          li.textContent = todo;
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = '삭제';
          deleteBtn.addEventListener('click', () => {
              deleteTodo(index);
          });
          li.appendChild(deleteBtn);
          todoList.appendChild(li);
      });
  }

  // 새로운 할 일을 추가하는 함수
  function addTodo() {
      const newTodo = todoInput.value.trim();
      if (newTodo !== '') {
          todos.push(newTodo);
          todoInput.value = '';
          saveTodos();
          displayTodos();
      }
  }

  // 할 일을 삭제하는 함수
  function deleteTodo(index) {
      todos.splice(index, 1);
      saveTodos();
      displayTodos();
  }

  // 할 일 목록을 Local Storage에 저장하는 함수
  function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  // 이벤트 리스너 추가
  addTodoBtn.addEventListener('click', addTodo);

  // 초기화 시 할 일 목록을 화면에 표시
  displayTodos();
});
